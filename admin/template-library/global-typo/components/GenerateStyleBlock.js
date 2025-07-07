import { useEffect, useState } from 'react';

const GenerateStyleBlock = ({ typography, deviceType }) => {
	const [styleBlock, setStyleBlock] = useState('');

	useEffect(() => {
		let styles = '';

		Object.keys(typography).forEach((item) => {
			Object.keys(typography[item]).forEach((heading) => {
				const stylesForDevice = typography[item][heading];

				if (!stylesForDevice) return;

				const {
					fontFamily,
					fontSize,
					fontSizeUnit,
					fontWeight,
					fontStyle,
					textDecoration,
					textTransform,
					letterSpacing,
					letterSpacingUnit,
					lineHeight,
					lineHeightUnits,
				} = stylesForDevice;

				styles += `
					${heading} {
						${fontFamily ? `font-family: ${fontFamily};` : ''}
						${fontSize?.[deviceType] ? `font-size: ${fontSize[deviceType]}${fontSizeUnit?.[deviceType] || 'px'};` : ''}
						${fontWeight ? `font-weight: ${fontWeight};` : ''}
						${fontStyle ? `font-style: ${fontStyle};` : ''}
						${textDecoration ? `text-decoration: ${textDecoration};` : ''}
						${textTransform ? `text-transform: ${textTransform};` : ''}
						${letterSpacing?.[deviceType] ? `letter-spacing: ${letterSpacing[deviceType]}${letterSpacingUnit?.[deviceType] || 'px'};` : ''}
						${lineHeight?.[deviceType] ? `line-height: ${lineHeight[deviceType]}${lineHeightUnits?.[deviceType] || 'px'};` : ''}
					}
				`;
			});
		});

		setStyleBlock(styles);
	}, [typography, deviceType]);

	return <style>{styleBlock}</style>;
};

export default GenerateStyleBlock;