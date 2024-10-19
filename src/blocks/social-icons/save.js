<<<<<<< HEAD
import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        socialItems,
        socialIconUrl,
        socialIconTargetUrl,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-social-main-wrapper ${blockID}`,
    });
    
    return (
        <>
            <div {...blockProps}>
                <div className={`fb-social-wrapper ${blockID}`}>
                    <div className="fb-social-links-wrapper">
                        <ul className="fb-socials">
                            {socialItems.map(item => (
                                <li key={item.id} className="fb-social-list-item">
                                    <a
                                        className="fb-advanced-button"
                                        href={socialIconUrl}
                                        target={socialIconTargetUrl ? '_blank' : undefined}
                                        rel={socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                    >
                                        {item.socialIcon ? renderSVG(item.socialIcon) : ''}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
=======
import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        socialItems,
        socialIconUrl,
        socialIconTargetUrl,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-social-main-wrapper ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className="fb-social-wrapper">
                <div className="fb-social-links-wrapper">
                    <ul className="fb-socials">
                        {socialItems.map(item => (
                            <li key={item.id} className="fb-social-list-item">
                                <a
                                    className="fb-advanced-button"
                                    href={socialIconUrl}
                                    target={socialIconTargetUrl ? '_blank' : undefined}
                                    rel={socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                >
                                    {item.socialIcon ? renderSVG(item.socialIcon) : ''}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
>>>>>>> 27c59d133d37688901b0b4f70b07538faaff9329
