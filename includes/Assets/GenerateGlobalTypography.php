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

        $array_keys = array_keys($data);
        if($data) {
            foreach($array_keys as $key) {
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
                foreach($responsiveProps as $prop) {
                    if (isset($data[$key][$prop]['value'])) {
                        $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                        $cssVar = $data[$key][$prop]['variable'];
                        // $rootStyles .= "{$cssVar}: {$data[$key][$prop]['value']};\n";
    
                        // Desktop
                        if (!empty($data[$key][$prop]['value']['Desktop'])) {
                            $value = $data[$key][$prop]['value']['Desktop'];
                            $unit = $data[$key][$prop]['unit']['Desktop'];
                            $desktopStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                            
                            switch($key) {
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
        }


        $headingGrouped = "
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

        $finalCSS = "
            " . ($rootStyles !== '' || $desktopStyles !== '' ? "
            :root {
                {$rootStyles}
                {$desktopStyles}
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
                
                self::enqueue_google_fonts();
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
    
            $font_css = file_get_contents($font_url);
            // Enqueue the Google Fonts

            if($font_css) {
                // Upload the font CSS to the uploads directory
                $upload_dir = wp_upload_dir();
                $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';

                // Ensure the target directory exists
                if (!file_exists($css_dir)) {   
                    wp_mkdir_p($css_dir);
                }

                $css_file_name = 'frontis-google-fonts.css';
                $css_file = $css_dir . $css_file_name;
                file_put_contents($css_file, $font_css);

            }
        }
    }
}