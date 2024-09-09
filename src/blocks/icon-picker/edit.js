import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { Fragment } from "@wordpress/element";
import { Grid } from 'react-virtualized';
import renderSVG from "./components/icon-picker/controls/renderIcon";
import defaultSvgIcon from "./components/defaultSvgIcon";
import {
	PanelBody,
	FormToggle,
	Button, Modal, Tooltip
} from "@wordpress/components";
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import FB_SVG_Icon from './components/svgIcon';
import './editor.scss';
import svgIcon from "./components/svgIcon";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const [showIconPicker, setIconPickerModal] = useState(false);
	const closeModal = () => setIconPickerModal( false );
	const [ insertIcon, setInsertIcon ] = useState( '' );
	const [ rowIndexForFirstTime, setRowIndexForFirstTime ] = useState( null );

	const {
		icon,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeUnit,
		align,
		alignTablet,
		alignMobile,
		rotation,
		rotationUnit,
		link,
		target,
		disableLink,
		iconAccessabilityMode,
		iconAccessabilityDesc,
	} = attributes;

	console.log(fb_blocks_info);
	console.log(FB_SVG_Icon);

	const iconPickerModal = () => {
		setIconPickerModal(true);
	}

	// Insert icon
	const fbInsertIcon = () => {
		console.log("Insert icon")
	}


	const categories = [
		{
			slug: 'all-icons',
			title: __('All Icons', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'brands',
			title: __('Brands', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'business',
			title: __('Business', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'communication',
			title: __('Communication', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'design',
			title: __('Design', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'education',
			title: __('Education', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'environment',
			title: __('Environment', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'lifestyle-and-hobbies',
			title: __('Lifestyle', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'science-and-technology',
			title: __('Science', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'social',
			title: __('Social', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'travel',
			title: __('Travel', 'ultimate-addons-for-gutenberg')
		},
		{
			slug: 'others',
			title: __('Others', 'ultimate-addons-for-gutenberg')
		}
	];

	// Render icon list.
	const renderIconList = () => {
		if ( ! defaultSvgIcon.length ) {
			return (
				<div className="uagb-ip-icons icon-not-found">
					<div className="uagb-icon-not-available">
						<span>{ __( 'No Icons Found', 'ultimate-addons-for-gutenberg' ) }</span>
					</div>
				</div>
			);
		}
		const iconTitle = ( actualTitle ) => {
			if ( ! actualTitle ) {
				return '';
			}
			return actualTitle.length < 11 ? actualTitle : actualTitle.slice( 0, 10 ) + '..';
		};
		// renderer.
		function cellRenderer( renderer ) {
			const { columnIndex, key, rowIndex, style } = renderer;

			const currentIcon = defaultSvgIcon[ rowIndex ][ columnIndex ];

			if ( ! currentIcon ) {
				return null;
			}

			// console.log(svgIcon[0].currentIcon);


			// const iconClass = uagbClassNames( [
			// 	'uagb-icon-item',
			// 	value === currentIcon && 'default',
			// 	currentIcon === insertIcon && 'selected',
			// ] );

			const actualTitle = svgIcon[currentIcon] ?.label
				? svgIcon[currentIcon].label
				: '';

			return (
				<div key={ key } style={ style }>
					<div
						className={'fb_icon'}
						onClick={ () => {
							if ( value !== currentIcon ) {
								setInsertIcon( currentIcon );
							}
						} }
					>
						{ renderSVG( currentIcon ) }
						<Tooltip text={ actualTitle }>
							<span>{ iconTitle( actualTitle ) }</span>
						</Tooltip>
					</div>
				</div>
			);
		}
		const heightAndWidth = 600 / 8;
		return (
			<div className="fb_icon_picker_icons_list">
				<Grid
					cellRenderer={ cellRenderer }
					columnCount={ defaultSvgIcon.length }
					columnWidth={ 8 === defaultSvgIcon.length ? heightAndWidth - 2 : 100 }
					height={ 500 }
					rowCount={ defaultSvgIcon.length }
					rowHeight={ 8 === defaultSvgIcon.length ? heightAndWidth : 100 }
					width={ 500 }
					autoContainerWidth={ true }
				/>
			</div>
		);
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={false}>
					<div className='fb_icon_picker_wrapper' onClick={() => iconPickerModal()}>
						<div className={'fb_icon_picker'}>
							<div className={'Change icon'}>{__('Change icon', 'frontis-blocks')}</div>
							<div className={'remove'}>
								<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 320 512">
									<path
										d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
								</svg>
							</div>
							<div className={'icon_placeholder'}>
								<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path
										d="M495.1 96c-53.13 0-102 29.25-127 76.13c-25 46.88-22.25 103.8 7.25 147.9H263.7c36.63-54.88 31.25-127.8-13-176.8c-44.38-48.87-116.4-61.37-174.6-30.25s-87.88 97.88-71.75 162c16 64 73.63 108.1 139.6 108.1h352C575.5 384 640 319.5 640 240S575.5 96 495.1 96zM63.99 240c0-44.12 35.88-80 80-80s80 35.88 80 80s-35.88 79.1-80 79.1S63.99 284.1 63.99 240zM495.1 320c-44.13 0-80-35.88-80-79.1s35.88-80 80-80s80 35.88 80 80S540.1 320 495.1 320z"></path>
								</svg>
							</div>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>
			<div>
				{ showIconPicker && (
					<Modal onRequestClose={ closeModal } className={'fb_icon_picker_wrapper_modal'}>
						<div className={'fb_icon_picker_modal_wrapper'}>
							<div className={'fb_icon_picker_wrapper_inner'}>
								<div className={'fb_icon_picker_wrapper_header'}>
									<h2>{__('Icon Library', 'frontis-blocks')}</h2>
									<div className={'fb_icon_picker_wrapper_search'}>
										<span>
											<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
												d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"></path></svg>
										</span>
										<input type={'text'} placeholder={__('Search', 'frontis-blocks')}/>
									</div>
								</div>
								<div className={'fb_icon_picker_wrapper_body'}>
									<div className={'fb_icon_picker_wrapper_categories'}>
										{categories.map((category, index) => (
											<div key={index}>{category.title}</div>
										))}
									</div>
									<div className={'fb_icon_picker_wrapper_icons_list'}>
										{renderIconList()}
									</div>
								</div>
								<div className={'fb_icon_picker_wrapper_footer'}>
									<Button variant="secondary"
											onClick={fbInsertIcon}>{__('Insert icon', 'frontis-blocks')}</Button>
								</div>
							</div>
						</div>
					</Modal>
				) }

				Icon picker
			</div>
		</Fragment>
	);
}
