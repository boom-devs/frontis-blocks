export default function FrontPreview({fontProps, deviceType, fontSize = false}) {

    const getValue = (prop) => {
        if (typeof prop === 'object' && prop !== null) {
            return prop.value || '';
        }
        return prop || '';
    };

    // Generate font object
	const generateFontObj = (font, size = false) => {
		
		let result = {}
		if (typeof font === 'object' && font !== null && Object.keys(font).length > 0) {
			result = {
				...((font.fontFamily && getValue(font.fontFamily) !== '') && { fontFamily: getValue(font.fontFamily) }),
				...((font.fontWeight && getValue(font.fontWeight) !== '') && { fontWeight: getValue(font.fontWeight) }),
				...((font.textTransform && getValue(font.textTransform) !== '') && { textTransform: getValue(font.textTransform) }),
				...((font.fontStyle && getValue(font.fontStyle) !== '') && { fontStyle: getValue(font.fontStyle) }),
				...((font.textDecoration && getValue(font.textDecoration) !== '') && { textDecoration: getValue(font.textDecoration) }),
				...((font.letterSpacing && font.letterSpacing?.[deviceType] !== '') && { letterSpacing: `${font.letterSpacing?.[deviceType] || ''}${font.letterSpacingUnit?.[deviceType] || 'px'}` }),
				...((size && font.fontSize?.[deviceType] !== '') && { fontSize: `${font.fontSize?.[deviceType] || ''}${font.fontSizeUnit?.[deviceType] || 'px'}` }),
				...((font.lineHeight && font.lineHeight?.[deviceType] !== '') && { lineHeight: `${font.lineHeight?.[deviceType] || ''}${font.lineHeightUnits?.[deviceType] || 'px'}` })
			}
		}

		return result
	}

    return (
        <div
            style={generateFontObj(fontProps, fontSize)}
            className="font_preview_box"
        >
			<div className="font_preview_box_inner">Aa</div>
        </div>
    )
}