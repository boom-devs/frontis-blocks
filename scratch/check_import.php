<?php
require_once('/Users/enamul/Herd/boomdevsco/wp-load.php');
header('Content-Type: application/json');

if (!current_user_can('manage_options')) {
    // die('Forbidden');
}

$state = get_option('fb_import_state');
$scheduled = wp_next_scheduled('fb_background_import_cron');

// Check log file
$log_file = ini_get('error_log');
$logs = [];
if ($log_file && file_exists($log_file)) {
    $logs = array_slice(explode("\n", file_get_contents($log_file)), -20);
}

echo json_encode([
    'status' => 'Diagnostic Info',
    'state' => $state,
    'cron_scheduled' => $scheduled !== false ? date('Y-m-d H:i:s', $scheduled) : 'Not Scheduled',
    'time_now' => date('Y-m-d H:i:s'),
    'recent_logs' => array_values(array_filter($logs, function($l) { return strpos($l, 'FB Import') !== false; }))
], JSON_PRETTY_PRINT);
