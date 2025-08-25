/**
 * The Quick Access Sidebar.
 */
import { useState, useEffect } from '@wordpress/element';
import '../editor.scss';
import Blocks from './blocks'
import BlocksList from './blocks-list';
import { __ } from '@wordpress/i18n';
import { Popover } from '@wordpress/components';

const Sidebar = () => {
	const [ isPopoverVisible, setPopoverVisible ] = useState( false );
	const [ isSorting, setSorting ] = useState( false );
	const [ hovering, setHovering ] = useState( null );
	const [ activeTab, setActiveTab ] = useState( 0 );
	const [getDefaultAllowedQuickSidebarBlocks, setDefaultAllowedQuickSidebarBlocks] = useState([
		'frontis-blocks/container',
		'frontis-blocks/advanced-heading',
	]);

	const handleMouseOver = ( button ) => setHovering( button );

	const handleMouseOut = () => setHovering( false );

	useEffect( () => {
		const handleOutsideClick = ( event ) => {
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

	// Update allowed blocks in quick sidebar
	const updateAllowedBlocksQuickSidebar = (allowedBlocks) => {
		setDefaultAllowedQuickSidebarBlocks(allowedBlocks);
	}

	// Fetch allowed blocks from database
	useEffect(() => {
		const fetchAllowedBlocks = () => {
			const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

			jQuery.ajax({
				url: ajaxUrl,
				type: 'POST',
				data: {
					action: 'fb_get_allowed_blocks',
					security: nonce,
				},
				success: function(response) {
					if (response.success) {
						setDefaultAllowedQuickSidebarBlocks(response.data)
					}
				},
				error: function(xhr, status, error) {

				}
			});
		}

		fetchAllowedBlocks();
	}, [])

	return (
		<>
			<div className='frontis-blocks-ee-quick-access'>
				<div className='frontis-blocks-quick-access-sidebar-wrapper'>
					<div className={'frontis-blocks-logo'}>
						<svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.0023 16.9935L28.3961 18.971C28.8838 19.2555 29.2887 19.6648 29.5703 20.1576C29.8518 20.6504 30 21.2094 30 21.7784V23.8726C30 24.4417 29.8518 25.0007 29.5703 25.4935C29.2887 25.9863 28.8838 26.3955 28.3961 26.6801L25.0023 28.6576L19.9853 31.5817L16.585 33.5657C16.0974 33.8502 15.5442 34 14.9812 34C14.4181 34 13.8649 33.8502 13.3773 33.5657L9.9834 31.5817V25.7464L14.9812 28.6641L19.9853 25.7464L24.9831 22.8353L19.9853 19.9176L14.9812 17L19.9853 14.0759L24.9831 11.1647L19.9853 8.2471L14.9812 5.33594L9.9834 2.4183L13.3773 0.434313C13.8649 0.149784 14.4181 0 14.9812 0C15.5442 0 16.0974 0.149784 16.585 0.434313L19.9789 2.4183L24.9702 5.33594L28.3641 7.31993C28.8517 7.60445 29.2566 8.01368 29.5382 8.50648C29.8197 8.99929 29.968 9.55831 29.968 10.1274V12.2151C29.968 12.7841 29.8197 13.3431 29.5382 13.8359C29.2566 14.3287 28.8517 14.738 28.3641 15.0225L25.0023 16.9935Z" fill="#399CFF"/>
							<path d="M9.98908 8.25034L4.99775 11.155V28.6608L1.6103 26.6833C1.12147 26.3996 0.715256 25.9907 0.432555 25.4979C0.149854 25.005 0.000663717 24.4456 0 23.8759V10.1112C1.43043e-05 9.54211 0.148233 8.98309 0.429775 8.49029C0.711317 7.99748 1.11626 7.58825 1.6039 7.30373L3.38743 6.26634C3.87508 5.98182 4.42824 5.83203 4.99133 5.83203C5.55442 5.83203 6.10758 5.98182 6.59523 6.26634L9.98908 8.25034Z" fill="white"/>
							<path d="M19.9851 14.0778L14.981 16.9955L11.5871 18.973C11.0995 19.2575 10.5463 19.4073 9.98323 19.4073C9.42015 19.4073 8.86698 19.2575 8.37933 18.973L4.97266 16.9955L9.97041 14.0843L13.3707 12.1003C13.8583 11.8158 14.4115 11.666 14.9746 11.666C15.5376 11.666 16.0908 11.8158 16.5785 12.1003L19.9851 14.0778Z" fill="white"/>
						</svg>
					</div>
					<div className='frontis-blocks-ee-quick-access__sidebar'>
						<div className='frontis-blocks-ee-quick-access__sidebar--blocks'>
							<Blocks enableRearrange={isSorting} getDefaultAllowedQuickSidebarBlocks={getDefaultAllowedQuickSidebarBlocks} updateAllowedBlocksQuickSidebar={updateAllowedBlocksQuickSidebar} />
						</div>
						<div className="frontis-blocks-ee-quick-access__sidebar--tabs-container">
							<div className="frontis-blocks-ee-quick-access__sidebar--tabs">
								{/* Map over your tab items */}
								{['add', 'sort'].map( ( tab, index ) => (
									<div
										key={index}
										className={`frontis-blocks-sidebar-actions ${activeTab === index ? 'active' : ''}`}
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
														{ isPopoverVisible && <BlocksList closePopover={closePopover} updateAllowedBlocksQuickSidebar={updateAllowedBlocksQuickSidebar} getDefaultAllowedQuickSidebarBlocks={getDefaultAllowedQuickSidebarBlocks} />}
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
			</div>
		</>
	);
}
export default Sidebar;
