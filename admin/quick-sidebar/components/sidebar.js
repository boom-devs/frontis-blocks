/**
 * The Quick Access Sidebar.
 */
import { useState, useEffect } from '@wordpress/element';
import '../editor.scss';
import Blocks from './blocks'
import BlocksList from './blocks-list';
import { __ } from '@wordpress/i18n';
import { Popover } from '@wordpress/components';

const Sidebar = ( props ) => {
	const {
		updateDefaultAllowedQuickSidebarBlocks,
		getDefaultAllowedQuickSidebarBlocks,
	} = props;
	const [ isPopoverVisible, setPopoverVisible ] = useState( false );
	const [ isSorting, setSorting ] = useState( false );
	const [ hovering, setHovering ] = useState( null );
	const [ activeTab, setActiveTab ] = useState( 0 );
	const handleMouseOver = ( button ) => setHovering( button );

	const handleMouseOut = () => setHovering( false );

	useEffect( () => {
		const handleOutsideClick = ( event ) => {
			// Check if the click is outside the QAB sidebar
			if ( !event.target.closest( '.frontis-blocks-ee-quick-access__sidebar' ) ) {
				setSorting( false );
				setActiveTab( 0 );
			}
		};

		const currentUrl = new URL( window.location.href ) ;
		if ( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
			const getAllIframes = document.querySelectorAll( 'iframe' );
			getAllIframes.forEach( function ( iframe ) {
				try {
					iframe.contentWindow.addEventListener( 'click', handleOutsideClick );
				} catch ( e ) {
					// Ignore cross-origin access errors.
				}
			} );
		} else {
			document.body.addEventListener( 'click', handleOutsideClick );
		}

		return () => {
			if ( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
				const getAllIframes = document.querySelectorAll( 'iframe' );
				getAllIframes.forEach( function ( iframe ) {
					const iframeDocument = iframe.contentWindow;
					try {
						iframeDocument.removeEventListener( 'click', handleOutsideClick );
					} catch ( e ) {
						// Ignore cross-origin access errors.
					}
				} );
			} else {
				document.body.removeEventListener( 'click', handleOutsideClick );
			}
		};
	}, [] );

	const handleTabClick = ( index ) => {
		setActiveTab( index );
	};

	const openPopover = () => {
		setPopoverVisible( true );
		setSorting( false )
	}

	const closePopover = () => {
		setPopoverVisible( false );
		setSorting( false )
	}

	const enableRearrange = () => {
		setSorting( true );
	}

	return (
		<>
			<div className='frontis-blocks-ee-quick-access'>
				<div className='frontis-blocks-ee-quick-access__sidebar'>
					<div className='frontis-blocks-ee-quick-access__sidebar--blocks'>
						<Blocks enableRearrange={isSorting} />
					</div>
					{/* The sidebar actions will come here - like the plus sign. */}
					<div className="frontis-blocks-ee-quick-access__sidebar--tabs-container">
						<div className="frontis-blocks-ee-quick-access__sidebar--tabs">
							{/* Map over your tab items */}
							{['add', 'sort'].map( ( tab, index ) => (
								<div
									key={index}
									className={`tab ${activeTab === index ? 'active' : ''}`}
									onClick={() => handleTabClick( index )}
								>
									{ 'add' === tab &&
										<div className='frontis-blocks-ee-quick-access__sidebar--actions' >
											<div className='frontis-blocks-ee-quick-access__sidebar--actions--plus'>
												<div className='frontis-blocks-quick-action-sidebar-wrap'>
													<div
														id="plus-icon"
														onClick={ openPopover }
														onMouseOver={ () => handleMouseOver( 'add' ) }
														onMouseOut={ handleMouseOut }
														onFocus={ () => handleMouseOver( 'add' ) }
														onBlur={ handleMouseOut }
													>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#fff" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
													</div>
													{ isPopoverVisible && <BlocksList closePopover={closePopover} updateDefaultAllowedQuickSidebarBlocks={updateDefaultAllowedQuickSidebarBlocks} getDefaultAllowedQuickSidebarBlocks={getDefaultAllowedQuickSidebarBlocks} />}
													{ hovering === 'add' &&
														<Popover placement="right" className='frontis-blocks-ee-quick-access__sidebar--blocks--block--icon--name'>
															<div className='block-title'>
																{ __( 'Add blocks to Quick Action Bar', 'frontis-blocks' ) }
															</div>
														</Popover>
													}
												</div>
											</div>
										</div>
									}
									{ 'sort' === tab &&
										<div className='frontis-blocks-ee-quick-access__sidebar--actions' >
											<div className='frontis-blocks-ee-quick-access__sidebar--actions--plus rearrange'>
												<div className='frontis-blocks-quick-action-sidebar-wrap'>
													<div
														id="rearrange-icon"
														onClick={ enableRearrange }
														onMouseOver={ () => handleMouseOver( 'sort' ) }
														onMouseOut={ handleMouseOut }
														onFocus={ () => handleMouseOver( 'sort' ) }
														onBlur={ handleMouseOut }
													>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#fff" focusable="false"><path d="m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"></path></svg>
														{ hovering === 'sort' &&
															<Popover placement="right" className='frontis-blocks-ee-quick-access__sidebar--blocks--block--icon--name'>
																<div className='block-title'>
																	{ __( 'Re-arrange block inside Quick Action Bar', 'frontis-blocks' ) }
																</div>
															</Popover>
														}
													</div>
												</div>
											</div>
										</div>
									}
								</div>
							) )}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Sidebar;
// export default compose(
// 	withSelect( ( spectraQuickActionSelect ) => {
// 		const getEnableQuickActionSidebar = spectraQuickActionSelect( spectraStore ).getEnableQuickActionSidebar();
// 		const getDefaultAllowedQuickSidebarBlocks = spectraQuickActionSelect( spectraStore ).getDefaultAllowedQuickSidebarBlocks();
// 		const getFullscreenMode = spectraQuickActionSelect( 'core/edit-post' )?.isFeatureActive( 'fullscreenMode' );
// 		const getBlockEditorStore = spectraQuickActionSelect( 'core/block-editor' );
// 		const getDistractionFreeMode = getBlockEditorStore?.getSettings()?.isDistractionFree;
//
// 		return {
// 			getEnableQuickActionSidebar,
// 			getDefaultAllowedQuickSidebarBlocks,
// 			getFullscreenMode,
// 			getDistractionFreeMode,
// 		};
// 	} ),
// 	withDispatch( ( spectraQuickActionDispatch ) => {
// 		return {
// 			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
// 			updateEnableQuickActionSidebar: ( value ) => spectraQuickActionDispatch( storeName ).updateEnableQuickActionSidebar( value ),
// 		};
// 	} ),
// )( Sidebar );
