import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const {
		blockID,
		stackCardsPresetStyle,
		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,
		
	} = attributes;

	const blockProps = useBlockProps.save({
        className: [
            'fb-stack-cards-main-wrapper',
            `fb-stack-cards-preset-${stackCardsPresetStyle}`,
            blockID,
            stackCardsDesktopSwitcher ? 'fb-desktop-responsive' : '',
            stackCardsTabletSwitcher ? 'fb-tablet-responsive' : '',
            stackCardsMobileSwitcher ? 'fb-mobile-responsive' : '',
        ].filter(Boolean).join(' '),
    });

	return (
		<div { ...blockProps }>
			<div className={`fb-stack-cards-frame fb-stack-cards-frame--${stackCardsPresetStyle} ${stackCardsGlobalWraperClass}`.trim()} id={stackCardsGlobalWraperID || undefined}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};
