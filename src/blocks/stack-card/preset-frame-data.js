import {
	isStackCardPresetOver as isPresetFourStackOver,
	serializeStackCardPresetOverConfig as serializePresetFourConfig,
} from './behaviors/preset-four';
import {
	isStackCardPresetRight as isPresetThreeStackRight,
	serializeStackCardPresetRightConfig as serializePresetThreeConfig,
} from './behaviors/preset-three';
import {
	isStackCardPresetLeft as isPresetTwoStackLeft,
	serializeStackCardPresetLeftConfig as serializePresetTwoConfig,
} from './behaviors/preset-two';

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