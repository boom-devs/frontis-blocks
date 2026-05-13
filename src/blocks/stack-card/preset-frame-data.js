import {
	isPresetFourStackOver,
	serializePresetFourConfig,
} from './preset-four';
import {
	isPresetThreeStackRight,
	serializePresetThreeConfig,
} from './preset-three';
import {
	isPresetTwoStackLeft,
	serializePresetTwoConfig,
} from './preset-two';

export function getPresetFrameDataAttributes(presetStyle, attributes) {
	return {
		'data-preset-two-config': isPresetTwoStackLeft(presetStyle)
			? serializePresetTwoConfig(attributes)
			: undefined,
		'data-preset-three-config': isPresetThreeStackRight(presetStyle)
			? serializePresetThreeConfig(attributes)
			: undefined,
		'data-preset-four-config': isPresetFourStackOver(presetStyle)
			? serializePresetFourConfig(attributes)
			: undefined,
	};
}