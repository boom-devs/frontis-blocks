<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class ReadmeParser
 *
 * Dynamically parses standard WordPress readme.txt files into structured HTML
 * for the plugin information modal, matching official WordPress.org specifications.
 *
 * @package FrontisBlocks\Updater
 */
class ReadmeParser
{
    /** @var string Full path to readme.txt */
    private string $filePath;

    /** @var array Parsed metadata cache */
    private array $meta = [];

    /** @var array Parsed HTML sections cache */
    private array $sections = [];

    /**
     * ReadmeParser constructor.
     *
     * @param string $filePath Absolute path to readme.txt
     */
    public function __construct(string $filePath)
    {
        $this->filePath = $filePath;
        $this->parse();
    }

    /**
     * Parses the readme.txt file if it exists.
     */
    private function parse(): void
    {
        if (!file_exists($this->filePath) || !is_readable($this->filePath)) {
            return;
        }

        $content = file_get_contents($this->filePath);
        if (empty($content)) {
            return;
        }

        // Normalize line endings
        $content = str_replace(["\r\n", "\r"], "\n", $content);

        // 1. Extract Plugin Name (=== Name ===)
        if (preg_match('/^===\s*(.+?)\s*===/m', $content, $matches)) {
            $this->meta['name'] = trim($matches[1]);
        }

        // 2. Extract Headers (Requires at least, Tested up to, Requires PHP, Contributors, etc.)
        $headerKeys = [
            'requires'     => 'Requires at least',
            'tested'       => 'Tested up to',
            'requires_php' => 'Requires PHP',
            'stable_tag'   => 'Stable tag',
            'contributors' => 'Contributors',
            'license'      => 'License',
        ];

        foreach ($headerKeys as $key => $label) {
            if (preg_match('/^' . preg_quote($label, '/') . ':\s*(.+)$/mi', $content, $matches)) {
                $this->meta[$key] = trim($matches[1]);
            }
        }

        // Short description between headers and first == Section ==
        $shortDescription = $this->extractShortDescription($content);
        if ('' !== $shortDescription) {
            $this->sections['description'] = $this->formatMarkdown($shortDescription, 'description');
        }

        // 3. Extract Major Sections (== Section Title ==)
        $standardSections = ['installation', 'faq', 'changelog', 'screenshots', 'reviews', 'upgrade_notice'];
        $parts = preg_split('/(?:^|\n)==\s*(.+?)\s*==\s*\n/m', $content, -1, PREG_SPLIT_DELIM_CAPTURE);

        if (is_array($parts) && count($parts) > 1) {
            for ($i = 1; $i < count($parts); $i += 2) {
                $titleRaw   = trim($parts[$i]);
                $bodyRaw    = trim($parts[$i + 1] ?? '');
                $sectionKey = $this->normalizeSectionKey($titleRaw);

                if ($this->shouldSkipSection($titleRaw, $bodyRaw)) {
                    continue;
                }

                $formattedBody = $this->formatMarkdown($bodyRaw, $sectionKey);

                if ($this->isSectionEmpty($formattedBody)) {
                    continue;
                }

                if (in_array($sectionKey, $standardSections, true)) {
                    if ('description' === $sectionKey && !empty($this->sections['description'])) {
                        $this->sections[$sectionKey] .= $formattedBody;
                    } else {
                        $this->sections[$sectionKey] = $formattedBody;
                    }
                } else {
                    // Append description sub-sections to main description tab
                    if (!isset($this->sections['description'])) {
                        $this->sections['description'] = '';
                    }
                    if ('description' !== $sectionKey) {
                        $this->sections['description'] .= '<h3>' . esc_html($titleRaw) . '</h3>';
                    }
                    $this->sections['description'] .= $formattedBody;
                }
            }
        }
    }

    /**
     * Extracts the short description block before the first major section.
     */
    private function extractShortDescription(string $content): string
    {
        if (!preg_match('/^===\s*.+?\s*===\s*\n(.*?)\n==\s+/ms', $content, $matches)) {
            return '';
        }

        $lines = explode("\n", $matches[1]);
        $descriptionLines = [];

        foreach ($lines as $line) {
            $trimmed = trim($line);

            if ('' === $trimmed) {
                continue;
            }

            if (preg_match('/^[A-Za-z][A-Za-z0-9 ]*:/', $trimmed)) {
                continue;
            }

            $descriptionLines[] = $line;
        }

        return trim(implode("\n", $descriptionLines));
    }

    /**
     * Determines whether a parsed section should be skipped.
     */
    private function shouldSkipSection(string $titleRaw, string $bodyRaw): bool
    {
        if ('' === $bodyRaw) {
            return true;
        }

        if (preg_match('/^=+.+=+$/', $titleRaw)) {
            return true;
        }

        $pluginName = $this->meta['name'] ?? '';

        return '' !== $pluginName && $titleRaw === $pluginName;
    }

    /**
     * Checks if formatted section HTML has no visible content.
     */
    private function isSectionEmpty(string $html): bool
    {
        return '' === trim(wp_strip_all_tags($html));
    }

    /**
     * Normalizes section titles to WordPress standard keys.
     *
     * @param string $title
     * @return string
     */
    private function normalizeSectionKey(string $title): string
    {
        $lower = strtolower($title);

        if (strpos($lower, 'installation') !== false) {
            return 'installation';
        }
        if (strpos($lower, 'faq') !== false || strpos($lower, 'frequently asked questions') !== false) {
            return 'faq';
        }
        if (strpos($lower, 'changelog') !== false) {
            return 'changelog';
        }
        if (strpos($lower, 'screenshot') !== false) {
            return 'screenshots';
        }
        if (strpos($lower, 'review') !== false) {
            return 'reviews';
        }
        if (strpos($lower, 'upgrade notice') !== false) {
            return 'upgrade_notice';
        }
        if (strpos($lower, 'description') !== false) {
            return 'description';
        }

        return 'description'; // Default other subsections to description tab
    }

    /**
     * Formats Markdown-like text from readme.txt into safe HTML.
     *
     * @param string $text
     * @param string $sectionKey
     * @return string
     */
    private function formatMarkdown(string $text, string $sectionKey): string
    {
        // Convert Sub-Headings: = Sub Heading = -> <h4>Sub Heading</h4>
        $text = preg_replace('/^=\s*(.+?)\s*=\s*$/m', '<h4>$1</h4>', $text);

        // Convert Bold: **text** -> <strong>text</strong>
        $text = preg_replace('/\*\*(.+?)\*\*/', '<strong>$1</strong>', $text);

        // Convert Italic: *text* -> <em>text</em>
        $text = preg_replace('/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/', '<em>$1</em>', $text);

        // Convert Links: [title](url) -> <a href="url" target="_blank">title</a>
        $text = preg_replace('/\[(.+?)\]\((https?:\/\/[^\s\)]+)\)/', '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>', $text);

        // Convert Bullet points (- or *) into lists
        $lines = explode("\n", $text);
        $inList = false;
        $inOrderedList = false;
        $output = [];

        foreach ($lines as $line) {
            $trimmed = trim($line);

            // Unordered list item
            if (preg_match('/^[-*]\s+(.+)$/', $trimmed, $m)) {
                if (!$inList) {
                    $output[] = '<ul>';
                    $inList = true;
                }
                $output[] = '<li>' . $m[1] . '</li>';
                continue;
            } elseif ($inList && !empty($trimmed) && !preg_match('/^[-*]\s+/', $trimmed)) {
                $output[] = '</ul>';
                $inList = false;
            }

            // Ordered list item
            if (preg_match('/^\d+\.\s+(.+)$/', $trimmed, $m)) {
                if (!$inOrderedList) {
                    $output[] = '<ol>';
                    $inOrderedList = true;
                }
                $output[] = '<li>' . $m[1] . '</li>';
                continue;
            } elseif ($inOrderedList && !empty($trimmed) && !preg_match('/^\d+\.\s+/', $trimmed)) {
                $output[] = '</ol>';
                $inOrderedList = false;
            }

            if (empty($trimmed)) {
                if ($inList) {
                    $output[] = '</ul>';
                    $inList = false;
                }
                if ($inOrderedList) {
                    $output[] = '</ol>';
                    $inOrderedList = false;
                }
            }

            $output[] = $line;
        }

        if ($inList) {
            $output[] = '</ul>';
        }
        if ($inOrderedList) {
            $output[] = '</ol>';
        }

        $formatted = implode("\n", $output);

        // Use standard wpautop for paragraphs if not already wrapped in block tags
        $html = wpautop($formatted);

        return wp_kses_post($html);
    }

    /**
     * Returns extracted metadata.
     *
     * @param string $key
     * @param string $default
     * @return string
     */
    public function getMeta(string $key, string $default = ''): string
    {
        return $this->meta[$key] ?? $default;
    }

    /**
     * Returns parsed HTML sections for tabs.
     *
     * @return array
     */
    public function getSections(): array
    {
        return $this->sections;
    }
}
