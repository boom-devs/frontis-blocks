import {__} from "@wordpress/i18n";

const { createHigherOrderComponent } = wp.compose;
import { useState } from 'react';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, IconButton, SelectControl, Toolbar, ToolbarButton  } from '@wordpress/components';
import { edit } from '@wordpress/icons';
import ElementTriggered from "@Blocks/anime/element-triggered";
import FbElementInteraction from "@Blocks/anime/element-triggered/element-interaction";

export default  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name, attributes, setAttributes } = props;
		const {
			frontisAnimeAtt,
			animeElementInt
		} = attributes;

		console.log(name)
		return (
			<>
				<BlockEdit { ...props } />
				{/*<ToolBar />*/}
				<BlockControls group="block">
					<Toolbar label="Options">
						<ToolbarButton
							icon={ edit }
							label="Edit"
							onClick={ () => alert( 'Editing' ) }
						/>
					</Toolbar>
				</BlockControls>
				{/* Settings panel */}
				<InspectorControls key="controls">
					<div className="fb-inspector-control">
						<PanelBody
							title={__("Element Triggered", "frontis-blocks")}
							initialOpen={true}
						>
							{animeElementInt ? (
								<FbElementInteraction attributes={attributes} setAttributes={setAttributes} />
							) : (
								<ElementTriggered attributes={attributes} setAttributes={setAttributes} />
							)}
						</PanelBody>
					</div>
				</InspectorControls>
			</>
		);
	};
}, 'renderFrontisAnime' );
