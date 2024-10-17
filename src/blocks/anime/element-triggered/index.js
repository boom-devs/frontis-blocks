import {__} from "@wordpress/i18n";
import { useState, useEffect } from 'react';
import { Button, Modal } from '@wordpress/components';
import { Icon, plus } from '@wordpress/icons';

export default function ElementTriggered({attributes, setAttributes}) {
	const [ isOpen, setOpen ] = useState( false );
	const [ elementInteractionBlock, setElementInteractionBlock ] = useState(false);
	const [ elementInteractionAction, setElementInteractionAction ] = useState(false);
	const [ elementInteractionActionName, setElementInteractionActionName ] = useState(false);
	const [blockIdTag, setBlockIdTag] = useState('');

	const {
		animeElementInt
	} = attributes;

	const selectedBlock = wp.data.select( 'core/block-editor' ).getSelectedBlock();

	useEffect(() => {
		const element = document.querySelector('[data-block="'+selectedBlock.clientId+'"]');

		if (element) {
			const idValue = element.getAttribute('id');
			setBlockIdTag(idValue);
		}
	}, [selectedBlock]);


	// Add element interactions modal
	const getInteractionElement = (interaction) => {
		setAttributes({animeElementInt: interaction})
	}

	// Add action modal

	// Action modal


	return (
		<>
			<div className={'fb-element-triggered-container'}>
				<div className={'fb-element-triggered-interaction'}>
					<h3>{__('Element Interactions')}</h3>
					<Button onClick={ () => setElementInteractionBlock(true) }><Icon icon={ plus } /></Button>
				</div>

				{ elementInteractionBlock && (
					<Modal size={'large'} title={__('Add Element Interaction for this Block', 'frontis-block')} onRequestClose={ () => setElementInteractionBlock(false) }>
						<div className={'fb-element-add-interaction'}>
							<div className={'fb-element-add-interaction-pick-interaction'}>
								<h4>{__('Pick an Interaction', 'frontis-blocks')}</h4>

								<ul className={'fb-pick-interaction-element'}>
									<li className={'fb-pick-interaction-element-label'}>
										{__('Mouse', 'frontis-blocks')}

										<ul className={'fb-pick-interaction-elements-lists'}>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('mouse-hover')}>{__('Mouse Hover', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
										</ul>
									</li>
									<li className={'fb-pick-interaction-element-label'}>
										{__('HTML & CSS', 'frontis-blocks')}

										<ul className={'fb-pick-interaction-elements-lists'}>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
											<li onClick={() => getInteractionElement('click')}>{__('Click', 'frontis-blocks')}</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</>
	)
}
