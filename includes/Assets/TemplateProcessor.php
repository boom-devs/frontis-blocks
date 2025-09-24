<?php
namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

class TemplateProcessor {
    use Singleton;

    public function process_template($data) {
        $template_content = $data[0]->post_content;

        // Step 1: Detect and replace wp:block with ref content
        preg_match_all('/<!--\s*wp:block\s*{"ref"\s*:\s*(\d+)\}\s*\/-->/', $template_content, $block_matches);
        $pattern_ids = $block_matches[1] ?? []; // Array of synced pattern IDs
        $pattern_contents = [];

        // Fetch pattern content for each ID
        if (!empty($pattern_ids)) {
            foreach ($pattern_ids as $index => $pattern_id) {
                $pattern_post = get_post($pattern_id);
                if ($pattern_post && $pattern_post->post_type === 'wp_block') {
                    // Replace wp:block with its post_content
                    $template_content = str_replace(
                        $block_matches[0][$index],
                        $pattern_post->post_content,
                        $template_content
                    );
                }
            }
        }

        // Step 2: Detect wp:template-part and extract slugs
        $pattern = '/<!-- wp:template-part\s*{(.*?)} \/-->/';
        $slugs = [];

        if (preg_match_all($pattern, $template_content, $template_part_matches)) {
            foreach ($template_part_matches[1] as $attributes) {
                // Extract slug from attributes
                if (preg_match('/"slug":"(.*?)"/', $attributes, $slug_match)) {
                    $slugs[] = $slug_match[1];
                }
            }
        }

        // Step 3: Replace wp:template-part with their post_content
        if (!empty($slugs)) {
            foreach ($slugs as $index => $slug) {
                // Query WordPress for post with post_name = slug and post_type = wp_template_part
                $args = [
                    'name' => $slug,
                    'post_type' => 'wp_template_part',
                    'post_status' => 'publish',
                    'numberposts' => 1
                ];
                $template_part = get_posts($args);

                // If post is found, replace the template part block with its post_content
                if (!empty($template_part) && isset($template_part[0]->post_content)) {
                    $template_content = str_replace(
                        $template_part_matches[0][$index],
                        $template_part[0]->post_content,
                        $template_content
                    );
                }
            }
        }

        return $template_content;
    }
}