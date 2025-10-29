import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import {getBlockTypes} from '@wordpress/blocks';
import {memo, useEffect} from '@wordpress/element';
import {select} from '@wordpress/data';
import backgroundCss from './backgroundCss';
import {useDeviceType} from "@Config/displayType";
import getCustomCss from '@Utils/getCustomCss';

const Render = ( props ) => {
	let deviceType = useDeviceType();
	const { attributes, setAttributes, clientId, hasSliderParent, hasPopupParent } = props;

	const {
		htmlTag,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		// From fb
		containerType,
		containerDesktopSwitcher,
		containerTabletSwitcher,
		containerMobileSwitcher,
		containerGlobalCustomCSS,
		containerGlobalCustomCSSClass,
		containerGlobalCustomCSSID,
	} = attributes;

	const direction = attributes[ 'direction'+deviceType ];
	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
	const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId );

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const Tag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;
	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'frontis-blocks-container-has-children' : '';

	const isRootContainerClass = isBlockRootParent ? `${ containerType === 'full-width' ? 'alignfull' : 'alignwide' } frontis-blocks-is-root-container` : `child ${containerGlobalCustomCSSClass}`;

	let desktopResponsiveClass = '';
	let tabletResponsiveClass = '';
	let mobileResponsiveClass = '';
	if(containerDesktopSwitcher){
		desktopResponsiveClass = 'fb-desktop-responsive';
	}
	if(containerTabletSwitcher){
		tabletResponsiveClass = 'fb-tablet-responsive';
	}
	if(containerMobileSwitcher){
		mobileResponsiveClass = 'fb-mobile-responsive';
	}

	const blockProps = useBlockProps();
	const modifBlockProps = useBlockProps( {
		className: `frontis-blocks-block-${ blockProps.id } ${ hasChildrenClass } frontis-blocks-editor-preview-mode-${ deviceType.toLowerCase } ${ isRootContainerClass } ${desktopResponsiveClass} ${tabletResponsiveClass} ${mobileResponsiveClass}`,
		style: getContainerBGStyle,
	} );

	useEffect(() => {
		const customCss = getCustomCss(containerGlobalCustomCSS, `#${blockProps.id}`);
		setAttributes({containerGlobalCustomCSSValue: customCss});
	}, [containerGlobalCustomCSS, blockProps.id]);

	if (modifBlockProps.className && modifBlockProps.className.includes('alignfull') && containerType !== 'full-width') {
		modifBlockProps.className = modifBlockProps.className
		  .split(' ')
		  .filter(className => className !== 'alignfull')
		  .join(' ');
	}

	const innerBlocksParams = {
		__experimentalMoverDirection: { moverDirection },
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	};

	// If a special block is needed, run this code block.
	if ( hasSliderParent || hasPopupParent ) {
		const parentBlocks = getBlockTypes().filter( ( item ) => ( ! item.parent ) );
		innerBlocksParams.allowedBlocks = parentBlocks.map((block) => block.name);
	}

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {

			setAttributes({
				p_block_id: blockProps.id,
			});
		}
	}, [clientId]);

	const rotateContainer = () => {
		console.log("working on click ?");
		const rotateContainer = document.querySelector('.frontis-blocks-container-inner-blocks-wrap');
		const currentRotation = rotateContainer.style.transform || 'rotate(0deg)';
		const newRotation = currentRotation === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
		rotateContainer.style.transform = newRotation;
	};

	return (
		<>
			<Tag { ...modifBlockProps } key={ blockProps.id }>
				{ 'video' === backgroundType && (
					<div className="frontis-blocks-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }

				<div  className='frontis-blocks-rotate-container' style={{position: 'absolute', width: '20px', height: '20px', top: '0', left: '0', zIndex: '99'}} onClick={rotateContainer}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" width="20px" height="20px" viewBox="0 0 486.805 486.805">
						<g>
							<path d="M261.397,17.983c-88.909,0-167.372,51.302-203.909,129.073L32.072,94.282L0,109.73l52.783,109.565l109.565-52.786   l-15.451-32.066L89.82,161.934c30.833-65.308,96.818-108.353,171.577-108.353c104.668,0,189.818,85.154,189.818,189.821   s-85.15,189.824-189.818,189.824c-61.631,0-119.663-30.109-155.228-80.539l-29.096,20.521   c42.241,59.87,111.143,95.613,184.324,95.613c124.286,0,225.407-101.122,225.407-225.419S385.684,17.983,261.397,17.983z"/>
						</g>
					</svg>
				</div>

				{ isBlockRootParent ? (
					<div className={`frontis-blocks-container-inner-blocks-wrap ${containerGlobalCustomCSSClass}`} id={containerGlobalCustomCSSID}>
						<InnerBlocks { ...innerBlocksParams } />
					</div>
				) : (
					<InnerBlocks { ...innerBlocksParams } />
				) }
			</Tag>
		</>
	);
};
export default memo( Render );
