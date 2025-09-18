<?php

namespace FrontisBlocks\BackgroundProcess;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Assets\AssetsGenerator;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class AssetsGenerationProcess {
    use Singleton;
    
    public function __construct() {
        add_action('wp', [$this, 'setup_data_processing_cron']);
        add_filter('cron_schedules', [$this, 'add_cron_interval']);
        add_action('fb_process_assets_generation', [$this, 'process_data_cron_job']);
    }

    /**
     * Process pending data with improved locking and error handling
     */
    function process_pending_data($batch_size = 50, $time_limit = 30) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'fb_job_schedule';
        
        // Set execution time limit
        set_time_limit($time_limit);
    
        // Check if processing is locked with longer timeout
        $lock_key = 'data_processing_lock_' . get_current_blog_id();
        if (get_transient($lock_key)) {
            error_log('Data processing skipped: Another process is running');
            return false;
        }
        
        // Set lock with longer duration and store start time
        $lock_duration = $time_limit * 2; // 2x time limit
        set_transient($lock_key, time(), $lock_duration);
        
        try {
            // Start transaction
            $wpdb->query('START TRANSACTION');
            
            // Get unprocessed data with table locking to prevent race conditions
            $data_rows = $wpdb->get_results(
                $wpdb->prepare(
                    "SELECT * FROM $table_name WHERE job_status = 0 
                     AND (job_attempts < 3 OR job_attempts IS NULL) 
                     ORDER BY job_created_at ASC LIMIT %d FOR UPDATE",
                    $batch_size
                )
            );
            
            if (empty($data_rows)) {
                $wpdb->query('ROLLBACK');
                delete_transient($lock_key);
                return false;
            }
            
            $start_time = microtime(true);
            $processed_count = 0;
            $failed_jobs = [];
            
            foreach ($data_rows as $row) {
                // Check if we're approaching timeout
                if ((microtime(true) - $start_time) > ($time_limit - 5)) {
                    error_log('Approaching timeout, stopping batch processing');
                    break;
                }
                
                // Renew lock every 30 seconds
                if ((microtime(true) - $start_time) % 30 < 1) {
                    set_transient($lock_key, time(), $lock_duration);
                }
                
                try {
                    // Verify the job still exists and is pending
                    $current_job = $wpdb->get_row(
                        $wpdb->prepare("SELECT job_status FROM $table_name WHERE job_id = %d", $row->job_id)
                    );
                    
                    if (!$current_job || $current_job->job_status != 0) {
                        error_log("Job {$row->job_id} was already processed or doesn't exist");
                        continue;
                    }
                    
                    $post = get_post($row->job_id);
                    if (!$post) {
                        $this->mark_job_failed($row, $wpdb, $table_name);
                        continue;
                    }
                    
                    $critical_css_used = Helper::post_content_has_blocks_critical($post, $row->job_id);
                    AssetsGenerator::get_instance()->generate_page_assets($row->job_id, $post, $critical_css_used);
                    
                    // Update post meta
                    update_post_meta($row->job_id, 'fb_page_assets_generation', 'compiled');
                    
                    // Mark job as successful
                    $this->mark_job_success($row, $wpdb, $table_name);
                    $processed_count++;
                    
                } catch (Exception $e) {
                    error_log("Failed to process job {$row->job_id}: " . $e->getMessage());
                    $this->mark_job_failed($row, $wpdb, $table_name);
                    $failed_jobs[] = $row->job_id;
                }
                
                usleep(50000); // 50ms delay between jobs
            }
            
            // Commit transaction
            $wpdb->query('COMMIT');
            
            if (!empty($failed_jobs)) {
                error_log("Failed jobs: " . implode(', ', $failed_jobs));
            }
            
        } catch (Exception $e) {
            // Rollback on any error
            $wpdb->query('ROLLBACK');
            error_log('Transaction failed: ' . $e->getMessage());
        }
        
        // Always release lock
        delete_transient($lock_key);
        
        return $processed_count > 0;
    }
    
    /**
     * Mark job as successfully completed
     */
    private function mark_job_success($row, $wpdb, $table_name) {
        $wpdb->update(
            $table_name,
            [
                'job_status' => 1,
                'job_last_attempt' => current_time('mysql'),
                'job_attempts' => ($row->job_attempts ?? 0) + 1,
                'job_completed_at' => current_time('mysql')
            ],
            ['job_id' => $row->job_id], // Use job_id consistently
            ['%d', '%s', '%d', '%s'],
            ['%d']
        );
    }
    
    /**
     * Mark job as failed
     */
    private function mark_job_failed($row, $wpdb, $table_name) {
        $wpdb->update(
            $table_name,
            [
                'job_last_attempt' => current_time('mysql'),
                'job_attempts' => ($row->job_attempts ?? 0) + 1
            ],
            ['job_id' => $row->job_id], // Use job_id consistently
            ['%s', '%d'],
            ['%d']
        );
    }

    /**
     * Clean up old failed jobs
     */
    private function cleanup_old_jobs($wpdb, $table_name) {
        // Mark jobs with 3+ failed attempts as permanently failed
        $wpdb->query($wpdb->prepare(
            "UPDATE $table_name SET job_status = 2 
             WHERE job_status = 0 AND job_attempts >= 3",
            []
        ));
        
        // Optional: Clean up very old completed jobs
        $wpdb->query($wpdb->prepare(
            "DELETE FROM $table_name WHERE job_status = 1 
             AND job_completed_at < %s",
            date('Y-m-d H:i:s', strtotime('-7 days'))
        ));
    }

    /**
     * Setup cron with better scheduling
     */
    function setup_data_processing_cron() {
        $timestamp = wp_next_scheduled('fb_process_assets_generation');
        if (!$timestamp) {
            // Schedule for next minute
            wp_schedule_event(time() + 60, 'every_minute', 'fb_process_assets_generation');
        }
    }

    /**
     * Add cron interval
     */
    function add_cron_interval($schedules) {
        if (!isset($schedules['every_minute'])) {
            $schedules['every_minute'] = [
                'interval' => 60,
                'display' => __('Every Minute')
            ];
        }
        return $schedules;
    }

    /**
     * Cron job handler with improved batching
     */
    function process_data_cron_job() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'fb_job_schedule';
        
        // Clean up old jobs first
        $this->cleanup_old_jobs($wpdb, $table_name);
        
        $max_batches = 3; // Reduced from 5
        $batch_count = 0;
        $total_processed = 0;
        
        while ($batch_count < $max_batches) {
            $processed = $this->process_pending_data(25, 25); // Smaller batches, shorter timeout
            if (!$processed) {
                break;
            }
            $total_processed += $processed;
            $batch_count++;
            
            // Longer delay between batches
            usleep(200000); // 0.2 seconds
        }
        
        if ($total_processed > 0) {
            error_log("Assets generation processed $total_processed jobs in $batch_count batches");
        }
        
        // Reschedule if there are still pending jobs
        $pending_count = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE job_status = 0");
        if ($pending_count > 0 && $batch_count >= $max_batches) {
            // Force next run sooner
            wp_schedule_single_event(time() + 30, 'fb_process_assets_generation');
        }
    }
}