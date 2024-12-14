<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

class GenerateGlobalTypography {
	use Singleton;

	public static function generate_global_typography() {
		self::enqueue_fonts();
	}

	public static function generate_fonts_array($fonts) {
		$fontFamilies = array();

		foreach ($fonts as $key => $value) {
			if (is_array($value)) {
				// If the value is an array, recursively process it
				self::generate_fonts_array($value, $fontFamilies);
			} else {
				// If it's a string, add it to the font families array
				$fontFamilies[$value] = $value;
			}
		}

		return $fontFamilies;
	}

	private static function generate_fonts() {
		// Extract font families into an array
        $fonts = [];
        foreach ($data as $style) {
            if (!empty($style['fontFamily'])) {
                $fonts[$style['fontFamily']] = $style['fontFamily'];
            }
        }
        return array_unique($fonts);
	}

	private static function generate_css_file($data, $devices) {
		$css = '';
		if($data) {
			 foreach($data as $key => $single_code) {
				$selector = '';

				$editor_selector = '';

				if(current_user_can('editor') || current_user_can('administrator')) {
					$editor_selector = 'body .wp-block-post-content';
				} else {
					$editor_selector = 'body';
				}

				if ($key === 'body') {
					$selector = $editor_selector.' p';
				}

				if ($key === 'link') {
					$selector = $editor_selector.' a';
				}

				if ($key === 'button') {
					$selector = $editor_selector.' button';
				}

				if ($key === 'heading') {
					foreach ($single_code as $key => $styles) {
						$heading_selector = $editor_selector.' ' . $key;

						$css .= "$heading_selector {\n";
						if (isset($styles['fontFamily']) && !empty($styles['fontFamily'])) {
							$css .= "    font-family: {$styles['fontFamily']};\n";
						}
						if (isset($styles['fontWeight']) && !empty($styles['fontWeight'])) {
							$css .= "    font-weight: {$styles['fontWeight']};\n";
						}
						if (isset($styles['fontStyle']) && !empty($styles['fontStyle'])) {
							$css .= "    font-style: {$styles['fontStyle']};\n";
						}
						if (isset($styles['textTransform']) && !empty($styles['textTransform'])) {
							$css .= "    text-transform: {$styles['textTransform']};\n";
						}
						if (isset($styles['textDecoration']) && !empty($styles['textDecoration'])) {
							$css .= "    text-decoration: {$styles['textDecoration']};\n";
						}
						if (isset($styles['lineHeight']['Desktop']) && !empty($styles['lineHeight']['Desktop'])) {
							$css .= "    line-height: {$styles['lineHeight']['Desktop']}{$styles['lineHeightUnits']['Desktop']};\n";
						}
						if (isset($styles['fontSize']['Desktop']) && !empty($styles['fontSize']['Desktop'])) {
							$css .= "    font-size: {$styles['fontSize']['Desktop']}{$styles['fontSizeUnit']['Desktop']};\n";
						}
						if (isset($styles['letterSpacing']['Desktop']) && !empty($styles['letterSpacing']['Desktop'])) {
							$css .= "    letter-spacing: {$styles['letterSpacing']['Desktop']}{$styles['letterSpacingUnit']['Desktop']};\n";
						}
						$css .= "}\n";

						foreach ($devices as $device => $breakpoint) {
							if($device !== 'Desktop') {
								if ((isset($styles['lineHeight'][$device]) && $styles['lineHeight'][$device] !== '0') || (isset($styles['fontSize'][$device]) && $styles['fontSize'][$device] !== '0') || (isset($styles['letterSpacing'][$device]) && $styles['letterSpacing'][$device] !== '0')) {

									$css .= "@media (max-width: {$breakpoint}px) {\n";
									$css .= "    $heading_selector {\n";
										if (isset($styles['lineHeight'][$device]) && !empty($styles['lineHeight'][$device])) {
											$css .= "        line-height: {$styles['lineHeight'][$device]}{$styles['lineHeightUnits'][$device]};\n";
										}
										if (isset($styles['fontSize'][$device]) && !empty($styles['fontSize'][$device])) {
											$css .= "        font-size: {$styles['fontSize'][$device]}{$styles['fontSizeUnit'][$device]};\n";
										}
										if (isset($styles['letterSpacing'][$device]) && !empty($styles['letterSpacing'][$device])) {
											$css .= "        letter-spacing: {$styles['letterSpacing'][$device]}{$styles['letterSpacingUnit'][$device]};\n";
										}
										$css .= "    }\n";
									$css .= "}\n";
								}
							}
						}
					}
				}

				// For other keys such as 'body', 'link', 'button'
				if ($key !== 'heading') {
					if( (isset($single_code['fontFamily']) && !empty($single_code['fontFamily'])) || (isset($single_code['fontWeight']) && !empty($single_code['fontWeight'])) || (isset($single_code['fontStyle']) && !empty($single_code['fontStyle'])) || (isset($single_code['textTransform']) && !empty($single_code['textTransform'])) || (isset($single_code['textDecoration']) && !empty($single_code['textDecoration'])) || (isset($single_code['lineHeight']) && !empty($single_code['lineHeight'])) || (isset($single_code['fontSize']) && !empty($single_code['fontSize'])) || (isset($single_code['letterSpacing']) && !empty($single_code['letterSpacing'])) ) {
						$css .= "$selector {\n";
						if (isset($single_code['fontFamily']) && !empty($single_code['fontFamily'])) {
							$css .= "    font-family: {$single_code['fontFamily']};\n";
						}
						if (isset($single_code['fontWeight']) && !empty($single_code['fontWeight'])) {
							$css .= "    font-weight: {$single_code['fontWeight']};\n";
						}
						if (isset($single_code['fontStyle']) && !empty($single_code['fontStyle'])) {
							$css .= "    font-style: {$single_code['fontStyle']};\n";
						}
						if (isset($single_code['textTransform']) && !empty($single_code['textTransform'])) {
							$css .= "    text-transform: {$single_code['textTransform']};\n";
						}
						if (isset($single_code['textDecoration']) && !empty($single_code['textDecoration'])) {
							$css .= "    text-decoration: {$single_code['textDecoration']};\n";
						}
						if (isset($single_code['lineHeight']['Desktop']) && !empty($single_code['lineHeight']['Desktop'])) {
							$css .= "    line-height: {$single_code['lineHeight']['Desktop']}{$single_code['lineHeightUnits']['Desktop']};\n";
						}
						if (isset($single_code['fontSize']['Desktop']) && !empty($single_code['fontSize']['Desktop'])) {
							$css .= "    font-size: {$single_code['fontSize']['Desktop']}{$single_code['fontSizeUnit']['Desktop']};\n";
						}
						if (isset($single_code['letterSpacing']['Desktop']) && !empty($single_code['letterSpacing']['Desktop'])) {
							$css .= "    letter-spacing: {$single_code['letterSpacing']['Desktop']}{$single_code['letterSpacingUnit']['Desktop']};\n";
						}
						$css .= "}\n";
					}

					foreach ($devices as $device => $breakpoint) {
						if($device !== 'Desktop') {
							if ((isset($single_code['lineHeight'][$device]) && $single_code['lineHeight'][$device] !== '0') || (isset($single_code['fontSize'][$device]) && $single_code['fontSize'][$device] !== '0') || (isset($single_code['letterSpacing'][$device]) && $single_code['letterSpacing'][$device] !== '0')) {
								$css .= "@media (max-width: {$breakpoint}px) {\n";
								$css .= "    $selector {\n";
								if (isset($single_code['lineHeight'][$device]) && !empty($single_code['lineHeight'][$device])) {
									$css .= "        line-height: {$single_code['lineHeight'][$device]}{$single_code['lineHeightUnits'][$device]};\n";
								}
								if (isset($single_code['fontSize'][$device]) && !empty($single_code['fontSize'][$device])) {
									$css .= "        font-size: {$single_code['fontSize'][$device]}{$single_code['fontSizeUnit'][$device]};\n";
								}
								if (isset($single_code['letterSpacing'][$device]) && !empty($single_code['letterSpacing'][$device])) {
									$css .= "        letter-spacing: {$single_code['letterSpacing'][$device]}{$single_code['letterSpacingUnit'][$device]};\n";
								}
								$css .= "    }\n";
								$css .= "}\n";
							}
						}
					}
				}
			}
        }

		return $css;
	}

	public static function enqueue_fonts() {
		$global_typography = get_option('fb_typography');

		if($global_typography){
			// Device breakpoints (you can customize as per your needs)
			$devices = array(
				'Desktop' => 1200,  // Desktop breakpoint at 1200px
				'Tablet' => 768,    // Tablet breakpoint at 768px
				'Mobile' => 480     // Mobile breakpoint at 480px
			);
			$css_content = self::generate_css_file($global_typography, $devices);

			if($css_content) {
				$upload_dir = wp_upload_dir();
				$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';

				// Ensure the target directory exists
				if (!file_exists($css_dir)) {
					wp_mkdir_p($css_dir);
				}

				$css_file_name = 'frontis-global-typography.css';
				$css_file = $css_dir . $css_file_name;
				file_put_contents( $css_file, $css_content );
			}
		}
	}
}
