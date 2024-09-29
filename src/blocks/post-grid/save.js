import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const { DeviceType, rangeValue, rangeUnit } = attributes;

	return (
        <>

            <style>
				{`
					.main-container {
						font-size: ${rangeValue.Desktop}${rangeUnit.Desktop};
					}

					@media (max-width: 1024px) { /* Tablet */
						.main-container {
							font-size: ${rangeValue.Tablet}${rangeUnit.Tablet};
						}
					}

					@media (max-width: 767px) { /* Mobile */
						.main-container {
							font-size: ${rangeValue.Mobile}${rangeUnit.Mobile};
						}
					}
				`}
			</style>

            <p {...useBlockProps.save()}className='main-container'>
			    {__('Hello world', 'text-domain')}
		    </p>
        </>
	);
}
