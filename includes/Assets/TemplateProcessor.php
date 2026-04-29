<?php
namespace FrontisBlocks\Assets;

if (!defined('ABSPATH')) {
    exit;
}

use FrontisBlocks\Traits\Singleton;

class TemplateProcessor
{
    use Singleton;

    public function process_template($data)
    {

        $template_content = '';
        if (is_array($data) && isset($data[0]) && isset($data[0]->post_content)) {
            $template_content = (string) $data[0]->post_content;
        } elseif ($data instanceof \WP_Post) {
            $template_content = (string) $data->post_content;
        } elseif (is_string($data)) {
            $template_content = $data;
        }

        // If nothing is found, graceful exit
        if ($template_content === '') {
            return '';
        }

        // Step 1: Detect and replace wp:block with ref content
        preg_match_all('/<!--\s*wp:block\s*{"ref"\s*:\s*(\d+)\}\s*\/-->/', $template_content, $block_matches);
        $pattern_ids = $block_matches[1] ?? [];

        if (!empty($pattern_ids)) {
            foreach ($pattern_ids as $index => $pattern_id) {
                $pattern_post = get_post((int) $pattern_id);
                if ($pattern_post && $pattern_post->post_type === 'wp_block') {
                    // Replace wp:block with its post_content
                    $template_content = str_replace(
                        $block_matches[0][$index],
                        (string) $pattern_post->post_content,
                        $template_content
                    );
                }
            }
        }

        // Step 2: Detect wp:template-part and extract slugs
        $pattern = '/<!--\s*wp:template-part\s*{(.*?)}\s*\/-->/s';
        $index_to_attrs = [];

        if (preg_match_all($pattern, $template_content, $template_part_matches)) {
            foreach ($template_part_matches[1] as $i => $attributes) {
                $attrs = $this->decode_template_part_attributes($attributes);

                if (!empty($attrs['slug'])) {
                    $index_to_attrs[$i] = $attrs;
                }
            }
        }

        // Step 3: Replace wp:template-part with their post_content (index-aligned)
        if (!empty($index_to_attrs)) {
            foreach ($index_to_attrs as $i => $attrs) {
                $template_part_content = $this->get_template_part_content($attrs);

                if ($template_part_content !== '') {
                    $template_content = str_replace(
                        $template_part_matches[0][$i],
                        $template_part_content,
                        $template_content
                    );
                }
            }
        }

        // $megamenu_block_exists = preg_match_all(
        //     '#<!--\s*wp:frontis-blocks/advanced-megamenu\s+(\{.+?\})\s*/-->#s',
        //     $template_content,
        //     $megamenu_matches
        // );

        // if ($megamenu_block_exists) {
        //     foreach ($megamenu_matches[1] as $index => $attributes) {
        //         if (preg_match('/"patternSlug"\s*:\s*"([^"]+)"/', $attributes, $pattern_slug_match)) {
        //             $pattern_slug = $pattern_slug_match[1];
        //             $pattern_post = get_post((int) $pattern_slug);

        //             if ($pattern_post && $pattern_post->post_type === 'wp_block') {
        //                 // Convert self-closing block to opening/closing format with pattern content inside
        //                 $megamenu_opening = str_replace('/-->', '-->', $megamenu_matches[0][$index]);
        //                 $megamenu_block_with_content = $megamenu_opening . "\n" 
        //                     . $pattern_post->post_content . "\n"
        //                     . '<!-- /wp:frontis-blocks/advanced-megamenu -->';

        //                 $template_content = str_replace(
        //                     $megamenu_matches[0][$index],
        //                     $megamenu_block_with_content,
        //                     $template_content
        //                 );
        //             }
        //         }
        //     }
        // }

        $megamenu_block_exists = preg_match_all(
            '#<!--\s*wp:frontis-blocks/advanced-megamenu\s+(\{.+?\})\s*/-->#s',
            $template_content,
            $megamenu_matches
        );

        if ($megamenu_block_exists) {
            foreach ($megamenu_matches[1] as $index => $attributes) {
                if (preg_match('/"patternSlug"\s*:\s*"([^"]+)"/', $attributes, $pattern_slug_match)) {
                    $pattern_slug = $pattern_slug_match[1];
                    $pattern_post = get_post((int) $pattern_slug);

                    if ($pattern_post && $pattern_post->post_type === 'wp_block') {
                        // Convert self-closing block to opening/closing format with pattern content inside
                        $megamenu_opening = str_replace('/-->', '-->', $megamenu_matches[0][$index]);
                        $megamenu_block_with_content = $megamenu_opening . "\n"
                            . (string) $pattern_post->post_content . "\n"
                            . '<!-- /wp:frontis-blocks/advanced-megamenu -->';

                        $template_content = str_replace(
                            $megamenu_matches[0][$index],
                            $megamenu_block_with_content,
                            $template_content
                        );
                    }
                }
            }
        }

        return $template_content;
    }

    private function decode_template_part_attributes($attributes)
    {
        $decoded = json_decode('{' . trim((string) $attributes) . '}', true);

        if (is_array($decoded)) {
            return $decoded;
        }

        $fallback = [];

        if (preg_match('/"slug"\s*:\s*"([^"]+)"/', $attributes, $slug_match)) {
            $fallback['slug'] = $slug_match[1];
        }

        if (preg_match('/"theme"\s*:\s*"([^"]+)"/', $attributes, $theme_match)) {
            $fallback['theme'] = $theme_match[1];
        }

        return $fallback;
    }

    private function get_template_part_content($attrs)
    {
        $slug = sanitize_title($attrs['slug'] ?? '');
        if ($slug === '') {
            return '';
        }

        $theme = !empty($attrs['theme']) ? sanitize_key($attrs['theme']) : get_stylesheet();

        if (function_exists('get_block_template')) {
            $template_part = get_block_template($theme . '//' . $slug, 'wp_template_part');

            if ($template_part && isset($template_part->content) && $template_part->content !== '') {
                return (string) $template_part->content;
            }
        }

        $candidate_names = array_unique([
            $slug,
            $theme . '//' . $slug,
        ]);

        foreach ($candidate_names as $candidate_name) {
            $template_part = get_posts([
                'name' => $candidate_name,
                'post_type' => 'wp_template_part',
                'post_status' => ['publish', 'draft', 'auto-draft'],
                'numberposts' => 1,
            ]);

            if (!empty($template_part) && isset($template_part[0]->post_content)) {
                return (string) $template_part[0]->post_content;
            }
        }

        global $wpdb;

        // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, PluginCheck.Security.DirectDB.UnescapedDBParameter
        $template_part_content = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT post_content
                FROM {$wpdb->posts}
                WHERE post_type = 'wp_template_part'
                AND post_status IN ('publish', 'draft', 'auto-draft')
                AND (post_name = %s OR post_name = %s)
                ORDER BY post_modified DESC
                LIMIT 1",
                $slug,
                $theme . '//' . $slug
            )
        );

        return $template_part_content ? (string) $template_part_content : '';
    }
}
