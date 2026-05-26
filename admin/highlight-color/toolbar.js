import { __ } from '@wordpress/i18n';
import {
    BlockControls,
    ColorPalette,
} from '@wordpress/block-editor';
import {
    ToolbarGroup,
    ToolbarButton,
    Popover,
    TabPanel
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { paintBrush } from '@wordpress/icons';

export default function HighlightToolbar({ attributes, setAttributes }) {
    const { highlightColor, hoverHighlightColor } = attributes;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightColorValue, setHighlightColorValue] = useState(null);
    const [hoverHighlightColorValue, setHoverHighlightColorValue] = useState(null);

    const onHighlightColorChange = (colorValue) => {
        const selected = globalColors.find(item =>
            item.value === colorValue || item.color === colorValue
        ).value;

        setAttributes({ highlightColor: colorValue });
        setHighlightColorValue(selected);
    };

    const onHoverColorChange = (colorValue) => {
        const selected = globalColors.find(item =>
            item.value === colorValue || item.color === colorValue
        ).value;

        setAttributes({ hoverHighlightColor: colorValue });
        setHoverHighlightColorValue(selected);
    };

    const copyIcon = () => {
        return (
            <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V9M9 17V19C9 20.1046 9.89543 21 11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H17M9 17V11C9 9.89543 9.89543 9 11 9H17" stroke="#0B0C0E" strokeWidth="1.4" />
            </svg>
        )
    }


    const defaultColors = [
        { color: '#3A0CA3' },
        { color: '#4361EE' },
        { color: '#4CC9F0' },
    ];

    const [globalColors, setGlobalColors] = useState(defaultColors);

    useEffect(() => {
        // Retrieve colors from local storage
        const storedColors = JSON.parse(localStorage.getItem('fb_global_colors')) || [];
        const storedCustomColors = JSON.parse(localStorage.getItem('fb_custom_colors')) || [];

        let combinedColors = [];

        // Function to extract name & slug and push into combinedColors
        const extractColors = (colorArray) => {
            colorArray.forEach(({ name, color, slug }) => {
                if (name && color && slug) {
                    combinedColors.push({ name, color: `var(--wp--frontis--color--${slug})`, value: color });
                }
            });
        };

        // Extract colors from both stored arrays
        extractColors(storedColors);
        extractColors(storedCustomColors);

        setGlobalColors(combinedColors);

    }, []);

    useEffect(() => {
        const handleSelection = () => {
            if (!highlightColor) return;

            const selection = window.getSelection();

            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const selectedText = selection.toString();

                if (selectedText.length === 0) return;

                // check parent node
                const parentNode = selection.anchorNode?.parentElement;

                if (parentNode && parentNode.tagName === "MARK") {
                    parentNode.classList.add("fb-highlight-color");
                    parentNode.style.backgroundColor = highlightColor;
                } else {
                    const mark = document.createElement("mark");
                    mark.classList.add("fb-highlight-color");
                    mark.style.backgroundColor = highlightColor;

                    range.surroundContents(mark);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        };

        document.addEventListener("mouseup", handleSelection);
        document.addEventListener("keyup", handleSelection);

        return () => {
            document.removeEventListener("mouseup", handleSelection);
            document.removeEventListener("keyup", handleSelection);
        };
    }, [highlightColor]);


    return (
        <BlockControls group="block">
            <ToolbarGroup>
                <ToolbarButton
                    label={__('Highlight colors', 'frontis-blocks')}
                    icon={copyIcon}
                    onClick={() => setIsOpen(!isOpen)}
                    isPressed={isOpen}
                />
                {isOpen && (
                    <Popover
                        position="bottom center"
                        onClose={() => setIsOpen(false)}
                        className="highlight-color-popover"
                    >
                        <TabPanel
                            className="highlight-tabs"
                            activeClass="active-tab"
                            tabs={[
                                { name: 'normal', title: __('Normal', 'frontis-blocks') },
                                { name: 'hover', title: __('Hover', 'frontis-blocks') },
                            ]}
                        >
                            {(tab) => (
                                <div
                                    style={{
                                        padding: '10px',
                                        minWidth: '220px',
                                    }}
                                >
                                    {tab.name === 'normal' && (
                                        <>
                                            <ColorPalette
                                                colors={globalColors}
                                                value={highlightColorValue}
                                                onChange={onHighlightColorChange}
                                            />
                                        </>
                                    )}

                                    {tab.name === 'hover' && (
                                        <>
                                            <ColorPalette
                                                colors={globalColors}
                                                value={hoverHighlightColorValue}
                                                onChange={onHoverColorChange}
                                            />
                                        </>
                                    )}
                                </div>
                            )}
                        </TabPanel>

                    </Popover>
                )}
            </ToolbarGroup>
        </BlockControls>
    );
}
