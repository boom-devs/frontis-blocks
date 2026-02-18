import { useBlockProps, RichText } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const { 
                blockID,
                searchIcon,
                searchIconAlign,
                searchIconImageUrl,
                searchIconImageAlt,
                searchGlobalWraperID,
                searchGlobalWraperClass,
        } = attributes;
    
        const blockProps = useBlockProps.save({
            className: `fb-search-block ${blockID}`,
        });
    
        return (
            <div {...blockProps}>
                <div className={`fb-search-container ${searchGlobalWraperClass}`} id={searchGlobalWraperID}>
                    <div className="fb-search-button-wrapper">
                        <div className="fb-search-block-wrapper-inner-input-icon">
                            {searchIconAlign === 'icon-text' && searchIcon ? ( 
                                <div className={`fb-search-icon-wrapper`}>
                                    <div className="fb-search-icon">{renderSVG(searchIcon)}</div>
                                </div>
                            ) : searchIconAlign === 'image' && searchIconImageUrl ? (
                                <div className={`fb-search-icon-wrapper`}>
                                    <div className="fb-search-icon-image">
                                        <img src={searchIconImageUrl} alt={searchIconImageAlt} />
                                    </div>
                                </div>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.637 19.4326C8.92834 19.4326 7.2581 18.926 5.83744 17.9767C4.41678 17.0275 3.30951 15.6782 2.65565 14.0997C2.00179 12.5211 1.83071 10.7841 2.16405 9.10836C2.49738 7.43258 3.32016 5.89327 4.52833 4.6851C5.7365 3.47692 7.27581 2.65415 8.95159 2.32081C10.6274 1.98748 12.3644 2.15856 13.9429 2.81242C15.5215 3.46628 16.8707 4.57355 17.82 5.99421C18.7692 7.41487 19.2759 9.08511 19.2759 10.7937C19.2729 13.084 18.3618 15.2796 16.7423 16.8991C15.1228 18.5185 12.9272 19.4297 10.637 19.4326ZM10.637 3.68619C9.23122 3.68619 7.85705 4.10304 6.68822 4.88403C5.51939 5.66501 4.6084 6.77506 4.07045 8.07379C3.5325 9.37252 3.39174 10.8016 3.66599 12.1803C3.94024 13.5591 4.61717 14.8255 5.61117 15.8195C6.60518 16.8135 7.87162 17.4904 9.25035 17.7647C10.6291 18.0389 12.0582 17.8982 13.3569 17.3602C14.6556 16.8223 15.7657 15.9113 16.5467 14.7425C17.3276 13.5736 17.7445 12.1995 17.7445 10.7937C17.7421 8.90942 16.9925 7.10297 15.6601 5.77056C14.3277 4.43815 12.5213 3.68856 10.637 3.68619Z" fill="black"/>
                                    <path d="M15.8127 16.7422L16.8953 15.6595L21.998 20.7622L20.9154 21.8449L15.8127 16.7422Z" fill="black"/>
                                </svg>
                            )}
                        </div>
                        <span>{__('Search', 'frontis-blocks')}</span>
                    </div>
    
                    <div className="fb-search-block-wrapper-inner-input-field">
                        <form role="search" method="get" action={frontisBlocksAdmin.home_url} >
                            <div className="wp-block-search__inside-wrapper">
                                <input className="wp-block-search__input" placeholder='Search...' id="wp-block-search__input-2" type="search" name="s" required="" />
                            </div>
                        </form>
                    </div>
                </div>
    
                <div className="fb-search-block-wrapper-overlay"></div>
            </div>
        );
    },
};

export default [v1_1_8];