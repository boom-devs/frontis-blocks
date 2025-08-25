export default function FrontPreview({fontProps, deviceType, fontSize = false}) {

    // Generate font object
	const generateFontObj = (font, size = false) => {
		
		let result = {}
		if (typeof font === 'object' && Object.keys(font).length > 0) {
			result = {
				...((font.fontFamily && font.fontFamily !== '') && { fontFamily: font.fontFamily }),
				...((font.fontWeight && font.fontWeight !== '') && { fontWeight: font.fontWeight }),
				...((font.textTransform && font.textTransform !== '') && { textTransform: font.textTransform }),
				...((font.fontStyle && font.fontStyle !== '') && { fontStyle: font.fontStyle }),
				...((font.textDecoration && font.textDecoration !== '') && { textDecoration: font.textDecoration }),
				...((font.letterSpacing && font.letterSpacing?.[deviceType] !== '') && { letterSpacing: `${font.letterSpacing?.[deviceType]}${font.letterSpacingUnit?.[deviceType] || 'px'}` }),
				...((size && font.fontSize?.[deviceType] !== '') && { fontSize: `${font.fontSize?.[deviceType]}${font.fontSizeUnit?.[deviceType] || 'px'}` }),
				...((font.lineHeight && font.lineHeight?.[deviceType] !== '') && { lineHeight: `${font.lineHeight?.[deviceType]}${font.lineHeightUnits?.[deviceType] || 'px'}` })
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