"use strict";

import { addFilter } from '@wordpress/hooks';
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { ToolbarButton } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor';
import { Popover } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import DynamicContentPopover from "./toolbar/dynamicContentPopover";
import './style.scss';
import { postType } from "@wordpress/editor/build-types/store/reducer";

// Higher-order component to add the toolbar to all blocks
const withGlobalToolbar = createHigherOrderComponent((BlockEdit) => {
	return (props) => {

		const [isVisible, setIsVisible] = useState(false);
		const toolbarButtonRef = useRef(null);

		const [dataSource, setDataSource] = useState('Current Post');
		const [sourceField, setSourceField] = useState('');
		const [selectPost, setSelectPost] = useState('');
		const [enableLink, setEnableLink] = useState(false);
		const [linkSource, setLinkSource] = useState('');
		const [replaceContent, setReplaceContent] = useState(false);
		const [beforeText, setBeforeText] = useState('');
		const [afterText, setAfterText] = useState('');
		const [fallbackText, setFallbackText] = useState('');
		const [charLength, setCharLength] = useState('');


		const toggleVisible = () => {
			setIsVisible((state) => !state);
		};

		const removePopover = () => {
			setIsVisible(false);
		};

		return (
			<>
				<BlockEdit {...props} />
				<div className={`frontis-dynamic-content`}>
					<BlockControls>
						<ToolbarButton
							className={`frontis-dynamic-content`}
							icon={
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 7.99988C14.4183 7.99988 18 6.65673 18 4.99988C18 3.34302 14.4183 1.99988 10 1.99988C5.58172 1.99988 2 3.34302 2 4.99988C2 6.65673 5.58172 7.99988 10 7.99988Z" stroke="#090909" strokeWidth="1.5" />
									<path d="M2 19C2 20.5299 5.05369 21.7923 9 21.9768" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M5 10.8419C5.60158 11.0227 6.27434 11.1716 7 11.2818" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M5 17.8419C5.60158 18.0227 6.27434 18.1716 7 18.2818" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M18 4.99988V11.0081M2 4.99988V19.0191" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M2 11.9998C2 13.5416 5.05369 14.8138 9 14.9998" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M12 15.5L13.001 16.8336C13.0514 16.9006 13.158 16.8798 13.1831 16.7998C13.6929 15.1771 15.209 14 17 14C18.4914 14 19.7922 14.8162 20.48 16.0264" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M21.48 20.5L20.4789 19.1664C20.4286 19.0994 20.322 19.1202 20.2968 19.2002C19.7871 20.8229 18.271 22 16.48 22C14.9886 22 13.6878 21.1838 13 19.9736" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" />
								</svg>
							}
							onClick={toggleVisible}
							ref={toolbarButtonRef}
						/>
						{isVisible && toolbarButtonRef.current && (
							<div>
								<Popover anchor={toolbarButtonRef.current}>
									<div style={{ padding: '10px' }} className="frontis-dynamic-content-popover">
										<DynamicContentPopover
											dataSource={dataSource}
											setDataSource={setDataSource}
											sourceField={sourceField}
											setSourceField={setSourceField}
											selectPost={selectPost}
											setSelectPost={setSelectPost}
											enableLink={enableLink}
											setEnableLink={setEnableLink}
											linkSource={linkSource}
											setLinkSource={setLinkSource}
											replaceContent={replaceContent}
											setReplaceContent={setReplaceContent}
											beforeText={beforeText}
											setBeforeText={setBeforeText}
											afterText={afterText}
											setAfterText={setAfterText}
											fallbackText={fallbackText}
											setFallbackText={setFallbackText}
											charLength={charLength}
											setCharLength={setCharLength}
										/>
									</div>
								</Popover>
							</div>
						)}
					</BlockControls>
				</div>
			</>
		);
	};
}, 'withGlobalToolbar');

// Apply the filter to add the toolbar to all blocks
addFilter(
	'editor.BlockEdit',
	'frontis-blocks/global-toolbar',
	withGlobalToolbar
);
