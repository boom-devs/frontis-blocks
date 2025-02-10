export default function FrontPreview({fontProps, deviceType, fontSize = false}) {

    // Generate font object
	const generateFontObj = (font, size = false) => {
		
		let result = {}
		if (typeof font === 'object' && Object.keys(font).length > 0) {
			result = {
				...(font.fontFamily && { fontFamily: font.fontFamily }),
				...(font.fontWeight && { fontWeight: font.fontWeight }),
				...(font.textTransform && { textTransform: font.textTransform }),
				...(font.fontStyle && { fontStyle: font.fontStyle }),
				...(font.textDecoration && { textDecoration: font.textDecoration }),
				...(font.letterSpacing && { letterSpacing: `${font.letterSpacing?.[deviceType]}${font.letterSpacingUnit?.[deviceType] || 'px'}` }),
				...((size && font.fontSize?.[deviceType] !== '') && { fontSize: `${font.fontSize?.[deviceType]}${font.fontSizeUnit?.[deviceType] || 'px'}` }),
				...((font.lineHeight) && { lineHeight: `${font.lineHeight?.[deviceType]}${font.lineHeightUnits?.[deviceType] || 'px'}` })
			}
		}

		return result
	}

    return (
        <div
            style={generateFontObj(fontProps, fontSize)}
            className="font_preview_box"
        >Aa
        </div>
    )
}