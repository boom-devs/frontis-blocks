import {__} from "@wordpress/i18n";
import { useState, useEffect } from 'react';
import {BaseControl, Button, Modal, ToggleControl, TextControl, PanelBody, Draggable} from '@wordpress/components';
import {Icon, more, plus} from '@wordpress/icons';
import FbHelpText from "@Blocks/anime/helpText";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import MultiPleContainer from "@Blocks/anime/multiPleContainer";
import MultipleContainers from "@Blocks/anime/multiPleContainer";

export default function FbElementInteraction({attributes, setAttributes}) {
	const {
		animeElementInt,
		animeElementActionName,
		animeElementActionActive,
		selectedAnimeElementName
	} = attributes;
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
							<MultipleContainers itemCount={5} vertical />
						</div>
					</PanelBody>
				</BaseControl>
			</div>
		</div>
	)
}
