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
        add_action('fb_process_assets_generation', [$this, 'process_pending_data']);
    }

    /**
     * Process pending data with improved locking and error handling
     */
    function process_pending_data($batch_size = 50, $time_limit = 30) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'fb_job_schedule';
       
        // Get unprocessed data
        $data_rows = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT * FROM $table_name WHERE job_status = %d AND (job_attempts < %d OR job_attempts IS NULL) 
                ORDER BY job_created_at ASC LIMIT %d",
                0, 3, $batch_size
            )
        );
        
        if (empty($data_rows)) {
            return false;
        }
        
        foreach ($data_rows as $row) {
            try {
                // Validate row exists
                $row_exists = $wpdb->get_var($wpdb->prepare(
                    "SELECT job_id FROM $table_name WHERE job_id = %d", 
                    $row->job_id
                ));
                
                if (!$row_exists) {
                    error_log("Row ID {$row->job_id} not found, skipping...");

                    // Write php file
                    $myfile = fopen($row->job_id."skipped.txt", "w") or die("Unable to open file!");
                    $txt = "Row ID {$row->job_id} not found, skipping...";
                    fwrite($myfile, json_encode($txt));
                    fclose($myfile);
                    continue;
                }
                
                $post = get_post($row->job_id);
                if (!$post) {
                    error_log("Post ID {$row->job_id} not found, skipping...");

                    // Write php file
                    $myfile = fopen($row->job_id."skipped_post.txt", "w") or die("Unable to open file!");
                    $txt = "Post ID {$row->job_id} not found, skipping...";
                    fwrite($myfile, json_encode($txt));
                    fclose($myfile);
                    continue;
                }
                
                $critical_css_used = Helper::post_content_has_blocks_critical($post, $row->job_id);
                $assets_generation_completed = AssetsGenerator::get_instance()->generate_page_assets($row->job_id, $post, $critical_css_used);

                if($assets_generation_completed) {
                    // Handle NULL job_attempts
                    $current_attempts = $row->job_attempts ?? 0;
                    $current_attempts = (int) $current_attempts;
                    
                    // Update with proper error handling
                    $checking_data_updated = $wpdb->update(
                        $table_name,
                        array(
                            'job_status' => 1,
                            'job_last_attempt' => current_time('mysql'),
                            'job_attempts' => $current_attempts + 1
                        ),
                        array('job_id' => (int) $row->job_id),
                        array('%d', '%s', '%d'),
                        array('%d')
                    );
                }
            } catch (Exception $e) {
                error_log("Exception in process_pending_data: " . $e->getMessage());
                
                $current_attempts = $row->job_attempts ?? 0;
                $wpdb->update(
                    $table_name,
                    array(
                        'job_last_attempt' => current_time('mysql'),
                        'job_attempts' => $current_attempts + 1
                    ),  
                    array('job_id' => $row->job_id),
                    array('%s', '%d'),
                    array('%d')
                );

                $myfile = fopen($row->job_id."error.txt", "w") or die("Unable to open file!");
                $txt = "Error: " . $e->getMessage();
                fwrite($myfile, json_encode($txt));
                fclose($myfile);
            }
            
            usleep(2000000); // 0.02 seconds delay per item
        }
        
        $wpdb->query("DELETE FROM $table_name");
        return true;
    }
    
    function setup_data_processing_cron() {
        if (!wp_next_scheduled('fb_process_assets_generation')) {
            wp_schedule_event(time(), 'every_minute', 'fb_process_assets_generation');
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

    // Cron job handler
    function process_data_cron_job() {
        $max_batches = 5; // Limit batches per cron run
        $batch_count = 0;
        
        while ($batch_count < $max_batches && $this->process_pending_data()) {
            $batch_count++;
            usleep(10000); // 0.1 seconds delay between batches
        }
        
        if ($batch_count >= $max_batches) {
            error_log('Max batches reached, scheduling next run');
        }
    }
}