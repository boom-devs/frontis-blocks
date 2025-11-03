import {__} from '@wordpress/i18n';
import React, { useState } from 'react';
import styles from './BlockHeader.module.scss';
import FBSwitch from '../../components/common/Switch';
import { All, Content, Creative, Form } from '../../icons';

const BlockHeader = ({onChange, value, categories, setSelectedCategory, selectedCategory}) => {
    const [disableAllBlocks, setDisableAllBlocks] = useState(false);
    const handleChange = () => {
        setDisableAllBlocks(!disableAllBlocks);
    };

    const categoryIcons = {
        all: All,
        content: Content,
        creative: Creative,
        form: Form
    };

    return (
        <div className={`card-v1 ${styles.blockTabContainer}`}>
            {/* Top Bar */}
            <div className={styles.blockTabTopBar}>
                <div className={styles.blockTabSearchContainer}>
                    <h2 className={`heading-3 ${styles.blockTabTitle}`}>All Blocks</h2>
                    <div className={styles.blockTabFilterWrapper}>
                        <div className={`${styles.blockTabSearchWrapper}`}>
                            <input
                                type="text"
                                placeholder="Search by name"
                                value={value}
                                className={styles.blockTabSearchInput}
                                onChange={(e) => onChange(e.target.value)}
                            />
                            <span className={styles.blockTabSearchIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z" fill="#404655"/>
                                </svg>
                            </span>
                        </div>
                        <div className={styles.blockTabDropdownContainer}>
                            <select className={styles.blockTabDropdown} defaultValue="">
                                <option value="" disabled>
                                    All Widgets
                                </option>
                                <option value="widget1">Widget 1</option>
                                <option value="widget2">Widget 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.blockTabToggleContainer}>
                    <span className={styles.blockTabToggleLabel}>Disable All Elements</span>
                    <FBSwitch onChange={handleChange} checked={disableAllBlocks} />
                </div>
            </div>
            <div className="fb-blocks-category-filter">
                {Object.entries(categories).map(([category, { count }]) => {
                    const IconComponent = categoryIcons[category] || All;  // Use All as default
                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`fb-blocks-category-button ${selectedCategory === category ? 'fb-blocks-category-button--active' : ''}`}
                        >
                            <span className="fb-blocks-category-button-icon">
                                <IconComponent />
                            </span>
                            <span className="fb-blocks-category-button-title">
                                {category === 'all' ? __('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1)}
                            </span>
                            <span className="fb-blocks-category-button-count">{count}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BlockHeader;