<?php
namespace FrontisBlocks\Assets;

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use MatthiasMullie\Minify\CSS;
use Sabberworm\CSS\CSSList\AtRuleBlockList;
use Sabberworm\CSS\CSSList\CSSList;
use Sabberworm\CSS\OutputFormat;
use Sabberworm\CSS\Parser;
use FrontisBlocks\Assets\TemplateProcessor;
use FrontisBlocks\BackgroundProcess\AssetsGenerationProcess;

require_once __DIR__ . '/../../vendor/autoload.php';

class AssetsGenerator
{
	use Singleton;
	private $post_id;
	private $post;
	private $used_blocks = [];
	private $css_content = '';
	private $js_content = '';
	private $gfonts = [];
	private $block_fonts = [];
	private $wp_template_css_content = '';
	private $frontis_block_used = false;
	private $combine_swiper_js = false;
	private $critical_css_content = '';
	private $genrating_critical_css = false;
	private $generate_general_assets = false;
	private $generate_static_assets_critical = [];
	private $skip_swiper_js = false;
	private $combine_static_to_critical = false;
	private $skip_advanced_video_js = false;
	private $skip_animated_heading_js = false;
	private $skip_animated_heading_textplugin_js = false;
	private $blocks_used_in_page = [];

	private function reset()
	{
		update_post_meta($this->post_id, 'fb_page_assets_generation', 'compiling');

		$this->post_id = null;
		$this->post = null;
		$this->used_blocks = [];
		$this->css_content = '';
		$this->js_content = '';
		$this->gfonts = [];
		$this->block_fonts = [];
		$this->wp_template_css_content = '';
		$this->frontis_block_used = false;
		$this->combine_swiper_js = false;
		$this->critical_css_content = '';
		$this->genrating_critical_css = false;
		$this->generate_general_assets = false;
		$this->generate_static_assets_critical = [];
		$this->combine_static_to_critical = false;
		$this->skip_swiper_js = false;
		$this->skip_advanced_video_js = false;
		$this->skip_animated_heading_js = false;
		$this->skip_animated_heading_textplugin_js = false;
		$this->blocks_used_in_page = [];
	}

	public function generate_page_assets($post_id, $post, $generate_critical_css = false)
	{
		$this->genrating_critical_css = $generate_critical_css;

		if (get_post_type($post_id) != 'wp_template_part') {
			$this->post = $post;
			$this->post_id = $post_id;

			if (get_post_type($post_id) === 'wp_template') {
				$post_data[] = $this->post;
				$this->post->post_content = TemplateProcessor::get_instance()->process_template($post_data);
			}

			if (get_post_type($post_id) !== 'wp_template') {
				$this->post->post_content = $this->get_page_content_with_template_parts();
			}

			$this->generate_all_blocks_assets();
			$this->combine_static_assets();

			$page_name = $this->post->post_name;
			$this->combine_and_save_css_file($page_name);
			$this->get_font_families();

			$this->reset();
			update_post_meta($post_id, 'fb_page_assets_generation', 'compiled');
		}

		if (Helper::check_url_has_fse_template() || get_post_type($post_id) === 'wp_template') {
			global $wpdb;
			$table_name = $wpdb->prefix . 'fb_job_schedule';

			try {
				$post_ids = Helper::get_all_post_ids();

				if (!empty($post_ids)) {
					foreach ($post_ids as $single_post_id) {
						$single_post = get_post($single_post_id);
						if (!$single_post)
							continue;

						update_post_meta($single_post_id, 'fb_page_assets_generation', 'compiling');

						$post_content = $single_post->post_content;
						$pattern = "/frontis-blocks/i";

						if (
							get_post_type($single_post_id) !== 'wp_template' &&
							preg_match_all($pattern, $post_content) === 0
						) {
							continue;
						}

						// Insert job using your existing Helper method
						if (!empty($this->post) && !empty($this->post->post_name)) {
							Helper::insert_job($single_post_id, $this->post->post_name . $single_post_id);
						}
					}
				}
			} catch (Exception $e) {
				error_log('Failed to schedule assets generation: ' . $e->getMessage());
			}
		}

		return true;
	}

	public function get_critical_css_content($block)
	{
		if (str_contains($block['blockName'], 'frontis-blocks')) {
			$single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);
			if (!in_array($block['blockName'], $this->used_blocks)) {

				$block_static_css_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/style-index.css';

				if (file_exists($block_static_css_file_path)) {
					$this->critical_css_content .= $this->clean_CSS(file_get_contents($block_static_css_file_path)) . "\n";
				}

				// Js file
				$block_static_js_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/view.js';
				if (file_exists($block_static_js_file_path)) {
					$this->js_content .= file_get_contents($block_static_js_file_path) . "\n";
				}
			}

			if (in_array('frontis-blocks/slider', $this->used_blocks) || in_array('frontis-blocks/marquee-carousel', $this->used_blocks)) {
				$this->combine_swiper_js = true;
			}

			$this->combine_static_to_critical = true;

			if ($block['blockName'] !== 'frontis-blocks/critical-css') {
				$this->used_blocks[] = $block['blockName'];
			}

			// Get the block attributes
			$block_attributes = $block['attrs'];
			$blockStyle = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

			if (get_post_type($this->post_id) !== 'wp_template_part') {
				$fonts = Helper::get_fonts_family($block_attributes);
				if (!empty($fonts)) {
					foreach ($fonts as $font => $weight) {
						if (array_key_exists($font, $this->block_fonts)) {
							$this->block_fonts[$font][] = $weight;
						} else {
							$this->block_fonts[$font][] = $weight;
						}
					}
				}
			}

			$this->critical_css_content .= $this->clean_CSS($blockStyle) . "\n";
		}
	}

	public function get_page_content_with_template_parts()
	{
		$template_contents = Helper::get_template_content($this->post->ID);

		if (empty($template_contents)) {
			$template_contents = $this->post;
		}

		$template_contents = TemplateProcessor::get_instance()->process_template($template_contents);

		if ($template_contents) {
			$pattern = '/<!--\s*wp:post-content\s*/i';
			if (preg_match_all($pattern, $template_contents, $wp_post_content_matchs) > 0) {
				if (isset($wp_post_content_matchs[0])) {
					foreach ($wp_post_content_matchs[0] as $index => $post_content) {
						$template_contents = str_replace(
							$wp_post_content_matchs[0][$index],
							$this->post->post_content,
							$template_contents
						);
					}
				}
			}

			$megamenu_block_exists = preg_match_all(
				'#<!--\s*wp:frontis-blocks/advanced-megamenu\s+(\{.+?\})\s*/-->#s',
				$template_contents,
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
								. $pattern_post->post_content . "\n"
								. '<!-- /wp:frontis-blocks/advanced-megamenu -->';

							$template_contents = str_replace(
								$megamenu_matches[0][$index],
								$megamenu_block_with_content,
								$template_contents
							);
						}
					}
				}
			}

			// die();
			return $template_contents;
		}

		return $this->post->post_content;
	}

	function find_pages_using_template($template_id)
	{
		global $wpdb;

		$template_post = get_post($template_id);
		if (!$template_post) {
			return false;
		}

		$template_name = $template_post->post_name;
		$template_slug = $template_post->post_name;

		// Multiple possible template formats check করা
		$possible_templates = [
			$template_name,
			$template_slug,
			'page-' . $template_name . '.php',
			$template_slug . '.php'
		];

		$results = [];

		foreach ($possible_templates as $template) {
			$pages = $wpdb->get_results($wpdb->prepare("
				SELECT DISTINCT p.ID, p.post_title, p.post_name, pm.meta_value as template_used
				FROM {$wpdb->posts} p
				INNER JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id
				WHERE pm.meta_key = '_wp_page_template'
				AND (pm.meta_value = %s OR pm.meta_value LIKE %s)
				AND p.post_type = 'page'
				AND p.post_status = 'publish'
			", $template, '%' . $template . '%'));

			if ($pages) {
				$results = array_merge($results, $pages);
			}
		}

		$unique_results = [];
		foreach ($results as $page) {
			$unique_results[$page->ID] = $page;
		}

		return array_values($unique_results);
	}

	public function store_blocks_used_blocks($blocks)
	{
		foreach ($blocks as $block) {
			if (str_contains($block['blockName'], 'frontis-blocks')) {
				if ($block && isset($block['blockName'])) {
					if (!in_array($block['blockName'], $this->used_blocks)) {
						$this->used_blocks[] = $block['blockName'];
					}
				}

				if (in_array('frontis-blocks/slider', $this->used_blocks) || in_array('frontis-blocks/marquee-carousel', $this->used_blocks)) {
					$this->skip_swiper_js = true;
				}

				if (in_array('frontis-blocks/advanced-video', $this->used_blocks)) {
					$this->skip_advanced_video_js = true;
				}

				if (in_array('frontis-blocks/animated-heading', $this->used_blocks)) {
					$this->skip_animated_heading_js = true;
				}

				if (in_array('frontis-blocks/animated-heading', $this->used_blocks)) {
					$this->skip_animated_heading_textplugin_js = true;
				}

				if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
					$this->store_blocks_used_blocks($block['innerBlocks']);
				}
			}
		}
	}

	// Function to process the array and replace template parts with their post content
	function process_template_content($data)
	{
		// Check if the data array is valid and contains the object
		if (!isset($data[0]) || !is_object($data[0]) || !isset($data[0]->post_content)) {
			return $this->post->post_content;
		}

		$template_content = $data[0]->post_content;

		// Regular expression to match wp:template-part blocks
		$pattern = '/<!-- wp:template-part\s*{(.*?)} \/-->/';
		$slugs = [];

		if (preg_match_all($pattern, $template_content, $template_part_matches)) {
			foreach ($template_part_matches[1] as $index => $attributes) {
				// Extract slug from attributes
				if (preg_match('/"slug":"(.*?)"/', $attributes, $slug_match)) {
					$slugs[] = $slug_match[1];
				}
			}
		}

		if (!empty($slugs)) {
			foreach ($slugs as $index => $slug) {
				// Query WordPress for post with post_name = slug and post_type = wp_template_part
				$args = array(
					'name' => $slug,
					'post_type' => 'wp_template_part',
					'post_status' => 'publish',
					'numberposts' => 1
				);
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

		// Replace wp:post-content (with or without attributes) with provided post_content
		$post_content_pattern = '/<!-- wp:post-content\s*(?:{(.*?)})?\s*\/-->/';
		$template_content = preg_replace($post_content_pattern, $this->post->post_content, $template_content);

		return $template_content;
	}

	public function generate_all_blocks_assets()
	{
		$post_content = $this->post->post_content;

		$blocks = parse_blocks($post_content);
		$this->get_inner_blocks($blocks);
	}

	private function get_inner_blocks($blocks)
	{
		// Generate page css js
		foreach ($blocks as $block) {
			if ($block && isset($block['blockName'])) {

				if ($block['blockName'] !== 'frontis-blocks/critical-css' && !$this->generate_general_assets && $this->genrating_critical_css) {
					$this->get_critical_css_content($block);
				} else {
					$this->generate_general_assets = true;
					$this->generate_block_assets($block);
				}
			}

			if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
				$this->get_inner_blocks($block['innerBlocks']);
			}
		}
	}

	public function generate_block_assets($block)
	{
		if (str_contains($block['blockName'], 'frontis-blocks')) {
			$single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);

			if (!in_array($block['blockName'], $this->used_blocks)) {
				$this->used_blocks[] = $block['blockName'];

				$block_static_css_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/style-index.css';

				if (file_exists($block_static_css_file_path)) {
					$this->css_content .= $this->clean_CSS(file_get_contents($block_static_css_file_path)) . "\n";
				}

				// Js file
				$block_static_js_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/view.js';
				if (file_exists($block_static_js_file_path)) {
					$this->js_content .= file_get_contents($block_static_js_file_path) . "\n";
				}
			}

			if (in_array('frontis-blocks/slider', $this->used_blocks) || in_array('frontis-blocks/marquee-carousel', $this->used_blocks)) {
				$this->combine_swiper_js = true;
			}

			// Get the block attributes
			$block_attributes = $block['attrs'];
			$blockStyle = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

			if (get_post_type($this->post_id) !== 'wp_template_part') {
				$this->blocks_used_in_page[] = $block['blockName'];

				$fonts = Helper::get_fonts_family($block_attributes);
				if (!empty($fonts)) {
					foreach ($fonts as $font => $weight) {
						if (array_key_exists($font, $this->block_fonts)) {
							$this->block_fonts[$font][] = $weight;
						} else {
							$this->block_fonts[$font][] = $weight;
						}
					}
				}
			}

			if ($this->genrating_critical_css && $single_block['slug'] === 'container') {
				$this->critical_css_content .= $this->clean_CSS($blockStyle) . "\n";
			} else {
				$this->css_content .= $this->clean_CSS($blockStyle) . "\n";
			}
		}
	}

	public function clean_CSS($css)
	{
		$parser = new Parser($css);
		$document = $parser->parse();

		// Start processing from the document root
		$this->processCSSList($document);

		// Render cleaned CSS
		return $document->render(OutputFormat::create()->indentWithSpaces(2));
	}

	private function processCSSList(CSSList $list)
	{
		$contents = $list->getContents();

		// Step 1: Remove empty or invalid rules and collect declaration blocks
		$declarationBlocks = [];
		foreach ($contents as $index => $item) {
			if ($item instanceof DeclarationBlock) {
				// Remove empty or invalid rules
				foreach ($item->getRules() as $rule) {
					$value = trim((string) $rule->getValue());
					if ($value === '' || $value === ';' || $value === 'Defaultpx') {
						$item->removeRule($rule);
					}
				}
				// Store declaration block if it has rules
				if (count($item->getRules()) > 0) {
					$declarationBlocks[] = $item;
				} else {
					// Remove empty block
					$list->remove($item);
				}
			} elseif ($item instanceof AtRuleBlockList) {
				// Recursively process nested at-rules (e.g., media queries)
				$this->processCSSList($item);
				// Remove at-rule if it has no contents
				if (count($item->getContents()) === 0) {
					$list->remove($item);
				}
			}
		}

		// Step 2: Group declaration blocks by their rule sets
		$ruleSetGroups = [];
		foreach ($declarationBlocks as $block) {
			// Create a unique key for the rule set based on properties and values
			$rules = $block->getRules();
			usort($rules, function ($a, $b) {
				return strcmp($a->getRule(), $b->getRule());
			}); // Sort rules by property name for consistent comparison
			$ruleKey = '';
			foreach ($rules as $rule) {
				$ruleKey .= $rule->getRule() . ':' . trim((string) $rule->getValue()) . ';';
			}
			if (!isset($ruleSetGroups[$ruleKey])) {
				$ruleSetGroups[$ruleKey] = [];
			}
			$ruleSetGroups[$ruleKey][] = $block;
		}

		// Step 3: Combine selectors for identical rule sets
		foreach ($ruleSetGroups as $ruleKey => $blocks) {
			if (count($blocks) > 1) {
				// Keep the first block and combine selectors
				$firstBlock = array_shift($blocks);
				$combinedSelectors = $firstBlock->getSelectors();
				foreach ($blocks as $block) {
					$combinedSelectors = array_merge($combinedSelectors, $block->getSelectors());
					// Remove the duplicate block
					$list->remove($block);
				}
				// Update the first block with combined selectors
				$firstBlock->setSelectors($combinedSelectors);
			}
		}
	}

	public function combine_and_save_css_file($page_name)
	{
		// Get upload directory and prepare paths
		$upload_dir = wp_upload_dir();
		$base_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		$css_dir = $base_dir . trailingslashit($page_name);

		// Create directory if it doesn't exist
		if (!is_dir($css_dir) && !wp_mkdir_p($css_dir)) {
			error_log("Failed to create directory: $css_dir");
			return false;
		}

		// Add global CSS if not a template part and not skipping
		$global_css_file = $base_dir . 'global/global.css';
		if (is_readable($global_css_file)) {
			$css_content = file_get_contents($global_css_file) . "\n";
			$this->genrating_critical_css
				? $this->critical_css_content .= $css_content
				: $this->css_content .= $css_content;
		}

		// Minify main CSS content
		$css_file_name = $page_name . '.min.css';
		$css_file = $css_dir . $css_file_name;
		$minified_css = (new CSS($this->css_content))->minify();
		if (!file_put_contents($css_file, $minified_css)) {
			error_log("Failed to write CSS file: $css_file");
		}

		// Handle critical CSS if applicable
		if ($this->genrating_critical_css && !empty($this->critical_css_content)) {
			$critical_css_filename = $page_name . '-critical.min.css';
			$critical_css_file = $css_dir . $critical_css_filename;
			$critical_minified_css = (new CSS($this->critical_css_content))->minify();
			if (!file_put_contents($critical_css_file, $critical_minified_css)) {
				error_log("Failed to write critical CSS file: $critical_css_file");
			}
		}

		// Save JS file
		$js_file_name = $page_name . '.js';
		$js_file = $css_dir . $js_file_name;
		if (!file_put_contents($js_file, $this->js_content)) {
			error_log("Failed to write JS file: $js_file");
		}

		// Reset content properties
		$this->css_content = '';
		$this->js_content = '';
		$this->critical_css_content = '';

		return true;
	}

	public function css_generator_functions($generate_template_css = false)
	{
		$this->generate_all_blocks_assets();
		$this->combine_static_assets();

		if ($generate_template_css) {
			$this->get_template_css();
		}

		// Combine and save CSS files
		$page_name = $this->post->post_name;

		// Check if post or custom post then its should be post type instead of page name
		if (Helper::is_custom_post_type($this->post->ID) || get_post_type($this->post->ID) === 'post') {

			$frontis_used = get_post_meta($this->post->ID, 'frontis_blocks_used', true);

			if ($frontis_used) {
				$page_name = $this->post->post_name;
				$this->get_template_css();
			} else {
				$page_name = get_post_type($this->post->ID);
			}
		}

		$this->combine_and_save_css_file($page_name);

		$this->get_font_families();
	}

	public static function generate_global_assets()
	{
		// Global Colors
		$global_colors = get_option('fb_global_colors');
		$global_custom_colors = get_option('fb_custom_colors');
		$global_gradient_colors = get_option('fb_gradient_colors');
		$global_custom_gradient_colors = get_option('fb_custom_gradient_colors');
		$global_typography = get_option('fb_globaltypo');

		$merged_colors = array_filter([
			'global_colors' => $global_colors,
			'global_custom_colors' => $global_custom_colors,
			'global_gradient_colors' => $global_gradient_colors,
			'global_custom_gradient_colors' => $global_custom_gradient_colors,
		], function ($value) {
			return !empty($value);
		});

		$merged_colors = array_values($merged_colors);
		$root_css = self::generate_root_css($merged_colors, $global_typography);

		if ($root_css) {
			$upload_dir = wp_upload_dir();
			$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/global/';

			if (!file_exists($css_dir)) {
				wp_mkdir_p($css_dir);
			}

			$css_file_name = 'global.css';
			$css_file = $css_dir . $css_file_name;
			file_put_contents($css_file, $root_css);
		}
	}

	public static function generate_root_css($color_data, $typography_data)
	{

		$global_colors = "";
		$root_css = "";

		// Process base colors
		if (!empty($color_data[0])) {
			$global_colors .= "/* Base Colors */\n";
			foreach ($color_data[0] as $color) {
				if (isset($color['color'])) {
					$var_name = "--wp--frontis--color--" . $color['slug'];
					$global_colors .= "{$var_name}: {$color['color']};\n";
				}
			}
		}

		// Process custom colors
		if (!empty($color_data[1])) {
			$global_colors .= "\n/* Custom Colors */\n";
			foreach ($color_data[1] as $color) {
				$original_var = $color['slug'];
				if (isset($color['color'])) {
					$prefixed_var = "--wp--frontis--color--" . $original_var;
					$global_colors .= "{$prefixed_var}: {$color['color']};\n";
				}
			}
		}

		// Process gradient colors
		if (!empty($color_data[2])) {
			$global_colors .= "\n/* Gradient Colors */\n";
			foreach ($color_data[2] as $color) {
				$original_var = $color['slug'];
				if (isset($color['gradient'])) {
					$prefixed_var = "--wp--frontis--color--" . $original_var;
					$global_colors .= "{$prefixed_var}: {$color['gradient']};\n";
				}
			}
		}

		// Process custom gradient colors
		if (!empty($color_data[3])) {
			$global_colors .= "\n/* Custom Gradient Colors */\n";
			foreach ($color_data[3] as $color) {
				$original_var = $color['slug'];
				if (isset($color['gradient'])) {
					$prefixed_var = "--wp--frontis--color--" . $original_var;
					$global_colors .= "{$prefixed_var}: {$color['gradient']};\n";
				}
			}
		}

		// Global Typography
		if ($typography_data) {
			// Initialize style variables
			$rootStyles = '';
			$desktopStyles = '';
			$tabletStyles = '';
			$mobileStyles = '';

			$paragraphStyles = '';
			$linkStyles = '';
			$buttonStyles = '';
			$captionStyles = '';
			$heading1Styles = '';
			$heading2Styles = '';
			$heading3Styles = '';
			$heading4Styles = '';
			$heading5Styles = '';
			$heading6Styles = '';
			$combinedHeadingStyles = '';

			// Process global properties for each element

			$array_keys = array_keys($typography_data);
			if ($typography_data) {
				foreach ($array_keys as $key) {
					if (!isset($typography_data[$key]))
						continue;

					// Process global properties
					$globalProps = ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'];
					foreach ($globalProps as $prop) {
						if (isset($typography_data[$key][$prop]['value'])) {
							$variable = $typography_data[$key][$prop]['variable'];
							$cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
							$styleValue = "var({$variable})";
							$rootStyles .= "{$variable}: {$typography_data[$key][$prop]['value']};\n";

							switch ($key) {
								case 'body':
									$paragraphStyles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'link':
									$linkStyles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'button':
									$buttonStyles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'captions':
									$captionStyles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'all':
									$combinedHeadingStyles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h1':
									$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h2':
									$heading2Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h3':
									$heading3Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h4':
									$heading4Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h5':
									$heading5Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
								case 'h6':
									$heading6Styles .= "{$cssProperty}: {$styleValue};\n";
									break;
							}
						}
					}

					// Process responsive properties
					$responsiveProps = ['fontSize', 'letterSpacing', 'lineHeight'];
					foreach ($responsiveProps as $prop) {
						if (isset($typography_data[$key][$prop]['value'])) {
							$cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
							$cssVar = $typography_data[$key][$prop]['variable'];
							// $rootStyles .= "{$cssVar}: {$data[$key][$prop]['value']};\n";

							// Desktop
							if (!empty($typography_data[$key][$prop]['value']['Desktop'])) {
								$value = $typography_data[$key][$prop]['value']['Desktop'];
								$unit = isset($typography_data[$key][$prop]['unit']) ? $typography_data[$key][$prop]['unit']['Desktop'] : 'px';
								$desktopStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";

								switch ($key) {
									case 'body':
										$paragraphStyles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'link':
										$linkStyles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'button':
										$buttonStyles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'captions':
										$captionStyles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'all':
										$combinedHeadingStyles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h1':
										$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h2':
										$heading2Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h3':
										$heading3Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h4':
										$heading4Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h5':
										$heading5Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
									case 'h6':
										$heading6Styles .= "{$cssProperty}: var({$cssVar});\n";
										break;
								}
							}

							// Tablet
							if (!empty($typography_data[$key][$prop]['value']['Tablet'])) {
								$value = $typography_data[$key][$prop]['value']['Tablet'];
								$unit = isset($typography_data[$key][$prop]['unit']) ? $typography_data[$key][$prop]['unit']['Tablet'] : 'px';
								$tabletStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";
							}

							// Mobile
							if (!empty($typography_data[$key][$prop]['value']['Mobile'])) {
								$value = $typography_data[$key][$prop]['value']['Mobile'];
								$unit = $typography_data[$key][$prop]['unit']['Mobile'];
								$mobileStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";
							}
						}
					}
				}
			}


			$heading_grouped = "
                " . ($heading1Styles !== '' ? "
                body h1 {
                    {$heading1Styles}
                }
                " : "") . "
                " . ($heading2Styles !== '' ? "
                body h2 {
                    {$heading2Styles}
                }
                " : "") . "
                " . ($heading3Styles !== '' ? "
                body h3 {
                    {$heading3Styles}
                }
                " : "") . "
                " . ($heading4Styles !== '' ? "
                body h4 {
                    {$heading4Styles}
                }
                " : "") . "
                " . ($heading5Styles !== '' ? "
                body h5 {
                    {$heading5Styles}
                }
                " : "") . "
                " . ($heading6Styles !== '' ? "
                body h6 {
                    {$heading6Styles}
                }
                " : "") . "
            ";

			$root_css = "
                " . ($rootStyles !== '' || $desktopStyles !== '' ? "
                :root {
                    {$rootStyles}
                    {$desktopStyles}
                    {$global_colors}
                }
                " : "") . "

                " . ($tabletStyles !== '' ? "
                @media (max-width: 1024px) {
                    :root {
                        {$tabletStyles}
                    }
                }
                " : "") . "

                " . ($mobileStyles !== '' ? "
                @media (max-width: 767px) {
                    :root {
                        {$mobileStyles}
                    }
                }
                " : "") . "

                " . ($paragraphStyles !== '' ? "
                body p, :root :where(p) {
                    {$paragraphStyles}
                }
                " : "") . "

                " . ($linkStyles !== '' ? "
                body a,
                body p a,
                :root :where(a) {
                    {$linkStyles}
                }
                " : "") . "

                " . ($buttonStyles !== '' ? "
                body .wp-block-button__link,
                :root :where(.wp-element-button, .wp-block-button__link),
                body button {
                    {$buttonStyles}
                }
                " : "") . "

                " . ($captionStyles !== '' ? "
                body figcaption,
                :root :where(.wp-element-caption, .wp-block-audio figcaption,
                    .wp-block-embed figcaption, .wp-block-gallery figcaption,
                    .wp-block-image figcaption, .wp-block-table figcaption,
                    .wp-block-video figcaption) {
                    {$captionStyles}
                }
                " : "") . "

                " . ($combinedHeadingStyles !== '' ? "
                body h1,
                body h2,
                body h3,
                body h4,
                body h5,
                body h6 {
                    {$combinedHeadingStyles}
                }
                " : "") . "

                {$heading_grouped}
            ";


			return $root_css;
		} else {
			$root_css = "
                :root {
                    {$global_colors}
                }
            ";
		}

		return $root_css;
	}

	public function combine_static_assets()
	{

		$assets_dir = FB_PLUGIN_PATH . 'assets/css/frontend/';
		$css_files = Helper::get_css_files($assets_dir);

		if (!empty($css_files)) {
			foreach ($css_files as $key => $css_file) {
				if (!$this->combine_swiper_js && basename($css_file) === 'swiper-bundle.min.css') {
					continue;
				}

				if ($this->skip_swiper_js) {
					continue;
				}

				if ($this->combine_static_to_critical) {
					$this->critical_css_content .= file_get_contents($css_file) . "\n";
				} else {
					$this->css_content .= file_get_contents($css_file) . "\n";
				}
			}
		}

		// Js files
		$js_dir = FB_PLUGIN_PATH . 'assets/js/frontend/';
		$js_files = Helper::get_js_files($js_dir);

		if (!empty($js_files)) {
			foreach ($js_files as $key => $js_file) {
				if ((!$this->combine_swiper_js && basename($js_file) === 'swiper-bundle.min.js') || $this->skip_swiper_js) {
					continue;
				}

				if ((!in_array('frontis-blocks/advanced-video', $this->used_blocks) && basename($js_file) === 'react-player.standalone.min.js') || $this->skip_advanced_video_js) {
					continue;
				}

				if ((!in_array('frontis-blocks/animated-heading', $this->used_blocks) && basename($js_file) === 'gsap.min.js') || $this->skip_animated_heading_js) {
					continue;
				}

				if ((!in_array('frontis-blocks/animated-heading', $this->used_blocks) && basename($js_file) === 'gsap-textplugin.min.js') || $this->skip_animated_heading_textplugin_js) {
					continue;
				}

				$this->js_content .= file_get_contents($js_file) . "\n";
			}
		}
	}

	public function get_template_css()
	{
		global $wpdb;

		$post_name = Helper::is_custom_post_type($this->post->ID) || get_post_type($this->post->ID) === 'post' ? 'single' : 'page';

		$assigned_template = get_post_meta($this->post->ID, '_wp_page_template', true);

		if ($assigned_template !== '') {
			$post_name = $assigned_template;
		}

		$query = $wpdb->prepare(
			"SELECT
                ID,
                post_type,
                post_content
            FROM
                {$wpdb->posts}
            WHERE
                post_type = 'wp_template'
                AND post_status = 'publish'
                AND post_name = %s
            ORDER BY
                post_modified DESC",
			$post_name
		);

		// Execute the query
		$template_contents = $wpdb->get_results($query);

		if ($template_contents) {
			foreach ($template_contents as $template) {
				$this->generate_wp_template_css($template->post_content);
			}
		}
	}

	public function generate_wp_template_css($post_content)
	{
		$blocks = parse_blocks($post_content);
		$this->get_inner_blocks($blocks);
	}

	public function get_font_families()
	{
		$custom_typography = get_option('fb_custom_typography');
		$typography_data = get_option('fb_typography');
		$custom_fonts = Helper::extract_font_families($custom_typography);
		$typography_fonts = Helper::extract_font_families($typography_data);
		$fonts_families = [$typography_fonts, $custom_fonts, $this->block_fonts];
		$fonts_families = $this->marged_fonts_array($fonts_families);

		if (!empty($fonts_families)) {
			$font_url = "https://fonts.googleapis.com/css?family=";
			$font_parts = [];

			foreach ($fonts_families as $font => $weights) {
				if (strtolower($font) === 'default') {
					continue;
				}

				if (!is_array($weights)) {
					$weights = [$weights]; // Ensure it's an array
				}

				// Filter out any "default" weights
				$weights = array_filter($weights, function ($weight) {
					return strtolower($weight) !== 'default';
				});

				$italic_weights = [];
				foreach ($weights as $weight) {
					$italic_weights[] = $weight . "i"; // Add italic version
				}

				$all_weights = array_merge($weights, $italic_weights);
				$font_parts[] = str_replace(' ', '+', $font) . ":" . implode(",", $all_weights);
			}

			if (!empty($font_parts)) {
				$font_url .= implode("|", $font_parts) . "&display=swap";
				update_option('fb_google_fonts_url', $font_url);
			}
		}
	}

	public function marged_fonts_array($arrays)
	{
		$merged = [];

		// Iterate through each array
		foreach ($arrays as $array) {
			foreach ($array as $fontFamily => $weights) {
				// Skip 'default' or 'Default' keys
				if (strtolower($fontFamily) === 'default') {
					continue;
				}

				// Initialize font family in merged array if not exists
				if (!isset($merged[$fontFamily])) {
					$merged[$fontFamily] = [];
				}

				// Add weights, filtering out 'Default' or empty values
				foreach ($weights as $weight) {
					if (strtolower($weight) !== 'default' && $weight !== '') {
						$merged[$fontFamily][] = $weight;
					}
				}

				// Remove duplicates and sort weights
				$merged[$fontFamily] = array_unique($merged[$fontFamily]);
				sort($merged[$fontFamily]);
			}
		}

		return $merged;
	}
}
