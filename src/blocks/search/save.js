import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { blockID } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-search-block ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className="fb-search-container">
                <form role="search" method="get" action="https://frontis-blocks.local/" class="wp-block-search__button-outside wp-block-search__text-button wp-block-search" >
                    <div class="wp-block-search__inside-wrapper ">
                        <div></div>
                        <input class="wp-block-search__input" placeholder="" value="" type="search" name="s" />
                    </div>
                </form>
            </div>
        </div>
    );
}