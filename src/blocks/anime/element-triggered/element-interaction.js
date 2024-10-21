import FbHelpText from "@Blocks/anime/helpText";
import { BaseControl, Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import { Icon, plus } from '@wordpress/icons';
import ElementActioinsTimeLine from './elementsActions';

export default function FbElementInteraction({attributes, setAttributes}) {
	const {
		animeElementInt,
		animeElementActionName,
		animeElementActionActive,
		selectedAnimeElementName
	} = attributes;


	const actions = [
		{
			'0.00': {
				elements: {
					scale: {
						properties: {
							scale: 10
						}
					},
                    move: {
						properties: {
							scale: 10
						}
					},
					scales: {
						properties: {
							scale: 15
						}
					},
					rotate: {
						properties: {
							rotate: 10
						}
					}
				}
			},
			'0.50': {
				elements: {
					scale: {
						properties: {
							scale: 15
						}
					},
					rotate: {
						properties: {
							rotate: 10
						}
					}
				}
			},
			'0.1': 'End'
		}
	];

	const actionsName = [
		{
			move: {
				directions: {
					x: 10,
					y: 15,
					z: 0
				}
			}
		},
		{
			rotate: {
				rotate: '100'
			}
		}
	];
	return (
		<div className={'fb-element-interaction-for-block'}>
			<div>

				<BaseControl
					label={__('New Mouse hover', 'frontis-blocks')}
					className="fb-interaction-aciton-wrapper"
				>
					<FbHelpText text={'Define actions that happen when your mouse hovers in or out of an element'} />
					<ToggleControl
						label={__('Active', 'frontis-blocks')}
						checked={ animeElementActionActive }
						onChange={ (newValue) => {
							setAttributes( {animeElementActionActive: newValue} );
						} }
					/>

					<TextControl
						label={__('INTERACTION NAME', 'frontis-blocks')}
						value={ selectedAnimeElementName }
						onChange={ ( value ) => setAttributes( {selectedAnimeElementName: value} ) }
					/>
					<PanelBody
						title={__('On Hover Actions', "frontis-blocks")}
						initialOpen={true}
					>
						<div className={'fb-element-triggered-interaction'}>
							<h3>{__('Action Timeline')}</h3>
							<Button><Icon icon={plus}/></Button>
						</div>

						<div className={'fb-element-action-timeline-holder'}>
							{/* <MultipleContainers itemCount={5} vertical /> */}
							<div class="fb-elements-actions-timeline" >
								<ElementActioinsTimeLine actions={actions} />
								{/* <MultipleContainers vertical /> */}
							</div>
						</div>
					</PanelBody>
				</BaseControl>
			</div>
		</div>
	)
}
