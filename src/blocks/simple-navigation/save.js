import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
    const {
        blockID,
        menuItems,
        menuPosition,
        iconStyle,
        selectedTemplate,
        classHook
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(
            `fb-simple-navigation-wrapper`,
            `template-${selectedTemplate}`,
            classHook
        ),
    });

    const getIconElement = (style) => {
        if (style === 'arrow') {
            return <span className="nav-icon arrow">→</span>;
        } else if (style === 'dot') {
            return <span className="nav-icon dot">•</span>;
        }
        return null;
    };

    return (
        <div {...blockProps}>
            <div className={`fb-parent-wrapper frontis-simple-nav-${blockID}`}>
                <nav className={`simple-navigation ${menuPosition}-position`}>
                    <ul className="menu-items">
                        {menuItems && menuItems.map((item) => (
                            <li key={item.id} className="menu-item">
                                <a href={item.url}>
                                    {iconStyle !== 'none' && getIconElement(iconStyle)}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}