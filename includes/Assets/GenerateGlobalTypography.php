<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

class GenerateGlobalTypography {
    use Singleton;
    
    /**
     * Generate global typography settings
     */
    public static function generate_global_typography() {
        self::enqueue_fonts();

        $global_typography = get_option('fb_globaltypo');
        if($global_typography) {
            add_action('wp_enqueue_scripts', [__CLASS__, 'enqueue_google_fonts']);
        }
    }

    /**
     * Helper function to get value with unit
     */
    private static function createValueWithUnit($value, $unit) {
        return $value . $unit;
    }

    /**
     * Process data and generate CSS
     */
    public static function processData($data) {
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
        foreach(['body', 'link', 'button', 'captions', 'all', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as $key) {
            if (!isset($data[$key])) continue;

            // Process global properties
            $globalProps = ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'];
            foreach($globalProps as $prop) {
                if (isset($data[$key][$prop]['value'])) {
                    $variable = $data[$key][$prop]['variable'];
					$cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                    $styleValue = "var({$variable})";
					$rootStyles .= "{$variable}: {$data[$key][$prop]['value']};\n";
                    
                    switch($key) {
                        case 'body':
                            $paragraphStyles .= "{$cssProperty}: {$styleValue};\n";
                            break;
                        case 'link':
                            $linkStyles .= "{$cssProperty}: {$styleValue};\n";
                            break;
						case 'button':
							$linkStyles .= "{$cssProperty}: {$styleValue};\n";
							break;
						case 'captions':
							$linkStyles .= "{$cssProperty}: {$styleValue};\n";
							break;
                        case 'all':
                            $combinedHeadingStyles .= "{$cssProperty}: {$styleValue};\n";
                            break;
                        case 'h1':
                            $heading1Styles .= "{$cssProperty}: {$styleValue};\n";
                            break;
						case 'h2':
							$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
							break;
						case 'h3':
							$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
							break;
						case 'h4':
							$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
							break;
						case 'h5':
							$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
							break;
						case 'h6':
							$heading1Styles .= "{$cssProperty}: {$styleValue};\n";
							break;
                    }
                }
            }

            // Process responsive properties
            $responsiveProps = ['fontSize', 'letterSpacing', 'lineHeight'];
            foreach($responsiveProps as $prop) {
                if (isset($data[$key][$prop]['value'])) {
                    $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                    $cssVar = $data[$key][$prop]['variable'];

                    // Desktop
                    if (!empty($data[$key][$prop]['value']['Desktop'])) {
                        $value = $data[$key][$prop]['value']['Desktop'];
                        $unit = $data[$key][$prop]['unit']['Desktop'];
                        $desktopStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                        
                        switch($key) {
                            case 'body':
                                $paragraphStyles .= "{$cssProperty}: var({$cssVar}) !important;\n";
                                break;
                            case 'link':
                                $linkStyles .= "{$cssProperty}: var({$cssVar});\n";
                                break;
							case 'button':
								$paragraphStyles .= "{$cssProperty}: var({$cssVar}) !important;\n";
								break;
							case 'captions':
								$paragraphStyles .= "{$cssProperty}: var({$cssVar}) !important;\n";
								break;
                            case 'all':
                                $combinedHeadingStyles .= "{$cssProperty}: var({$cssVar});\n";
                                break;
                            case 'h1':
                                $heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
                                break;
							case 'h2':
								$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
								break;
							case 'h3':
								$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
								break;
							case 'h4':
								$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
								break;
							case 'h5':
								$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
								break;
							case 'h6':
								$heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
								break;
                        }
                    }

                    // Tablet
                    if (!empty($data[$key][$prop]['value']['Tablet'])) {
                        $value = $data[$key][$prop]['value']['Tablet'];
                        $unit = $data[$key][$prop]['unit']['Tablet'];
                        $tabletStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                    }

                    // Mobile
                    if (!empty($data[$key][$prop]['value']['Mobile'])) {
                        $value = $data[$key][$prop]['value']['Mobile'];
                        $unit = $data[$key][$prop]['unit']['Mobile'];
                        $mobileStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                    }
                }
            }
        }

        // Generate the final CSS output
        $headingGrouped = "
            body h1 {
                {$heading1Styles}
            }
            body h2 {
                {$heading2Styles}
            }
            body h3 {
                {$heading3Styles}
            }
            body h4 {
                {$heading4Styles}
            }
            body h5 {
                {$heading5Styles}
            }
            body h6 {
                {$heading6Styles}
            }
        ";

        $allCombinedStyles = "
            body h1,
            body h2,
            body h3,
            body h4,
            body h5,
            body h6 {
                {$combinedHeadingStyles}
            }
        ";

        $finalCSS = "
            :root {
                {$rootStyles}
                {$desktopStyles}
            }
            
            @media (max-width: 1024px) {
                :root {
                    {$tabletStyles}
                }
            }
            
            @media (max-width: 767px) {
                :root {
                    {$mobileStyles}
                }
            }

            body p {
                {$paragraphStyles}
            }

            body a,
            body p a {
                {$linkStyles}
            }

            body .wp-block-button__link,
            :root :where(.wp-element-button, .wp-block-button__link),
            body button {
                {$buttonStyles}
            }

            body figcaption,
            :root :where(.wp-element-caption, .wp-block-audio figcaption,
                .wp-block-embed figcaption, .wp-block-gallery figcaption,
                .wp-block-image figcaption, .wp-block-table figcaption,
                .wp-block-video figcaption) {
                {$captionStyles}
            }

            {$allCombinedStyles}
            {$headingGrouped}
        ";
        
        return $finalCSS;
    }

    /**
     * Enqueue font styles
     */
    public static function enqueue_fonts() {
        $global_typography = get_option('fb_globaltypo');
        
        if($global_typography) {
            $styles = self::processData($global_typography);

            if($styles) {
                $upload_dir = wp_upload_dir();
                $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';

                // Ensure the target directory exists
                if (!file_exists($css_dir)) {
                    wp_mkdir_p($css_dir);
                }

                $css_file_name = 'frontis-global-typography.css';
                $css_file = $css_dir . $css_file_name;
                file_put_contents($css_file, $styles);
            }
        }
    }

    /**
     * Enqueue Google Fonts
     */
    public static function enqueue_google_fonts() {
        $font_families = [];
        $global_typography = get_option('fb_globaltypo');
        
        // Extract all unique font families
        foreach ($global_typography as $selector => $properties) {
            if (isset($properties['fontFamily'])) {
                $font_family = $properties['fontFamily']['value'];
                if (!in_array($font_family, $font_families)) {
                    $font_families[] = $font_family;
                }
            }
        }  
    
        // If there are font families, enqueue them
        if (!empty($font_families)) {
            $font_url = "https://fonts.googleapis.com/css?family=";
            $font_url .= implode("|", array_map(function($font) {
                return str_replace(' ', '+', $font) . ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
            }, $font_families));
    
            // Enqueue the Google Fonts
            wp_enqueue_style('fb-google-fonts', $font_url, array(), null);
        }
    }
}