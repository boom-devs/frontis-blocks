import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import { dateI18n, __experimentalGetSettings as getDateSettings } from '@wordpress/date';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import renderSVG from '../../components/icon-picker/components/icon-picker/controls/renderIcon';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import { useDeviceType } from '@Config/displayType';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockId,
		headingText,
		headingTag,
		headingAlignment,
		subHeadingSwitcher,
		separator,
		separatorColor,
		separatorZigzagWidth,
		separatorWidth,
		separatorWidthUnits,
		separatorHeight,
		separatorHeightUnits,
		showSeparatorSwitcher,
		subHeadingText,
		subHeadingTag,
		separatorPosition,
		subHeadingPosition,
		headingIconAlign,
		headingIcon,
		headingIconSwitcher,
		activeLineSwitcher,
		headingGlobalWraperID,
		headingGlobalWraperClass,
		headingBeforeAfterSwitcher,
		advancedHeadingDesktopSwitcher,
		advancedHeadingTabletSwitcher,
		advancedHeadingMobileSwitcher,
		isHeadingTextChanged,

		dynamicEnabled,
		dynamicSource,
		dynamicField,
		dynamicEnableLink,
		dynamicReplaceAll,
		dynamicFeaturedImageField,

		dynamicDateType,
		dynamicDateFormat,


	} = attributes;

	// Dynamic Content Value
	const {postType, postId} = context;

	const blockProps = useBlockProps({
		className: `frontis-block fb-advanced-heading-main-wrapper ${blockId} ${advancedHeadingDesktopSwitcher && 'fb-desktop-responsive'} ${advancedHeadingTabletSwitcher && 'fb-tablet-responsive'} ${advancedHeadingMobileSwitcher && 'fb-mobile-responsive'} ${headingBeforeAfterSwitcher && 'fb-advanced-heading-before-after'}`,
	});

	const deviceType = useDeviceType();

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);


	// কোন কোন ফিল্ড dynamic preview করবে (Current Post)
	const CURRENT_POST_FIELDS = [
		'post_title','post_excerpt','post_thumbnail',
		'post_date','post_time','post_terms','post_id','comments_number',
		'author_name','author_first_name','author_last_name','author_nickname',
		'author_description','author_email','author_url','author_avatar','author_meta'
	];
	
	const shouldUseDynamic =
		dynamicEnabled &&
		dynamicSource === 'current_post' &&
		CURRENT_POST_FIELDS.includes(dynamicField);
	
	// HTML ➜ clean plain text (editor-safe)
	const getPlainText = (html) => {
		const raw = html ?? '';
		// decode &amp; &nbsp; etc.
		const decoded = decodeEntities(raw);
		// remove html tags
		let text = decoded.replace(/<[^>]+>/g, '');
		// kill line breaks (otherwise RichText ⇒ <br data-rich-text-line-break>)
		text = text.replace(/\r?\n|\r/g, ' ');
		// replace non-breaking space with normal space
		text = text.replace(/\u00A0/g, ' ');
		// remove zero-width chars (ZWSP, ZWNJ, ZWJ, BOM)
		text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');
		// collapse multiple spaces and trim
		return text.replace(/\s{2,}/g, ' ').trim();
	};
	
	// pull post record
	const postRecord = useSelect(
		(select) =>
		shouldUseDynamic && postType && postId
			? select(coreStore).getEntityRecord('postType', postType, postId)
			: null,
		[shouldUseDynamic, postType, postId]
	);

	// check post type supports excerpt
	const postTypeObj = useSelect(
		(select) => postType ? select(coreStore).getPostType(postType) : null,
		[postType]
	);
	
	// featured image (only when needed)
	const mediaRecord = useSelect(
		(select) =>
		  shouldUseDynamic &&
		  dynamicField === 'post_thumbnail' &&
		  postRecord?.featured_media
			? select(coreStore).getEntityRecord('postType', 'attachment', postRecord.featured_media)
			: null,
		[shouldUseDynamic, dynamicField, postRecord?.featured_media, dynamicFeaturedImageField]
	);

	// সাইট সেটিংসের ডিফল্ট date format (Settings → General)
	const getSiteDateFormat = () => {
		const settings = getDateSettings?.() || {};
		return settings?.formats?.date || 'F j, Y';
	};
	
	// PHP স্টাইল ফরম্যাটে লোকেল/টাইমজোন রেসপেক্ট করে আউটপুট
	const formatDateByPhp = (phpFmt, jsDate) => dateI18n(phpFmt, jsDate);
	
	// “2 days ago” টাইপ
	const humanizeDate = (date) => {
		if (!date) return '';
		const now = new Date();
		const diffSec = Math.round((now - date) / 1000);
		const abs = Math.abs(diffSec);
		const units = [
		['year',   31536000],
		['month',  2592000],
		['week',   604800],
		['day',    86400],
		['hour',   3600],
		['minute', 60],
		['second', 1],
		];
		for (const [u, s] of units) {
		const v = Math.floor(abs / s);
		if (v >= 1) return diffSec >= 0 ? `${v} ${v===1?u:`${u}s`} ${__('ago','frontis-blocks')}` : `${__('in','frontis-blocks')} ${v} ${v===1?u:`${u}s`}`;
		}
		return __('just now','frontis-blocks');
	};

	
	// author (only when needed)
	const authorRecord = useSelect(
		(select) =>
		shouldUseDynamic &&
		dynamicField.startsWith('author_') &&
		postRecord?.author
			? select(coreStore).getUser(postRecord.author)
			: null,
		[shouldUseDynamic, dynamicField, postRecord?.author]
	);
	
	const dynamicValue = (() => {
		if (!shouldUseDynamic || !postRecord) return '';
	
		switch (dynamicField) {
		// POST
		case 'post_title':
			return getPlainText(postRecord.title?.rendered);
	
		case 'post_excerpt': {
			const supportsExcerpt = !!postTypeObj?.supports?.excerpt;
			if (!supportsExcerpt) {
				return __('No Content', 'frontis-blocks');
			}
			
			// raw value database থেকে
			const rawExcerpt = postRecord.excerpt?.raw?.trim();
			
			if (rawExcerpt) {
				return getPlainText(rawExcerpt);
			}
			
			// raw খালি মানে user কিছু লেখেনি → show "No Content"
			return __('No Content', 'frontis-blocks');
		}		  

		case 'post_thumbnail': {
			if (!postRecord?.featured_media) return __('No Content', 'frontis-blocks');
			if (!mediaRecord) return __('(loading...)', 'frontis-blocks');
		  
			const sub = dynamicFeaturedImageField || 'attachment_url';
		  
			switch (sub) {
			  case 'title':
				return getPlainText(mediaRecord.title?.rendered || mediaRecord.title) || __('No Content', 'frontis-blocks');
		  
			  case 'alt':
				return getPlainText(mediaRecord.alt_text) || __('No Content', 'frontis-blocks');
		  
			  case 'caption':
				return getPlainText(mediaRecord.caption?.rendered) || __('No Content', 'frontis-blocks');
		  
			  case 'description':
				return getPlainText(
				  typeof mediaRecord.description === 'string'
					? mediaRecord.description
					: (mediaRecord.description?.rendered ?? '')
				) || __('No Content', 'frontis-blocks');
		  
			  case 'attachment_url':
			  default:
				return mediaRecord.source_url || __('No Content', 'frontis-blocks');
			}
		}
	
		case 'post_date': {
			// Date Type: published | modified
			const raw = dynamicDateType === 'modified' ? postRecord.modified : postRecord.date;
			if (!raw) return __('No Content', 'frontis-blocks');
		  
			const d = new Date(raw);
			if (isNaN(d.getTime())) return __('No Content', 'frontis-blocks');
		  
			switch (dynamicDateFormat) {
			  case 'default':
				return formatDateByPhp(getSiteDateFormat(), d);
		  
			  case 'jS F Y':
			  case 'Y-m-d':
			  case 'm/d/Y':
			  case 'd/m/Y':
				return formatDateByPhp(dynamicDateFormat, d);
		  
			  case 'human':
				return humanizeDate(d);
		  
			  default:
				// অজানা/অসমর্থিত হলে সাইট ডিফল্ট
				return formatDateByPhp(getSiteDateFormat(), d);
			}
		  }
	
		case 'post_time':
			return postRecord.date ? new Date(postRecord.date).toLocaleTimeString() : '';
	
		case 'post_terms':
			return __('(terms will render on frontend)', 'frontis-blocks');
	
		case 'post_id':
			return String(postRecord.id ?? '');
	
		case 'comments_number':
			return __('(comments count on frontend)', 'frontis-blocks');
	
		// AUTHOR
		case 'author_name':
			return authorRecord?.name || '';
	
		case 'author_first_name':
			return authorRecord?.first_name || '';
	
		case 'author_last_name':
			return authorRecord?.last_name || '';
	
		case 'author_nickname':
			return authorRecord?.nickname || '';
	
		case 'author_description':
			return authorRecord?.description || '';
	
		case 'author_email':
			return authorRecord?.email || '';
	
		case 'author_url':
			return authorRecord?.url || '';
	
		case 'author_avatar':
			// user object usually has avatar_urls; pick 96px
			return authorRecord?.avatar_urls?.['96'] || __('No Content', 'frontis-blocks');
	
		case 'author_meta': {
			const key = attributes?.authorMetaKey;
			// user meta not in REST by default; show hint
			return key ? __('No Content', 'frontis-blocks') : '';
		}
	
		default:
			return '';
		}
	})();
	

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

			<BlockControls>
				<AlignmentToolbar
					value={headingAlignment[deviceType]}
					onChange={(value) =>
						setAttributes({ headingAlignment: { ...headingAlignment, [deviceType]: value } })
					}
					controls={['left', 'center', 'right']}
				/>
			</BlockControls>

			<div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-wrapper ${headingGlobalWraperClass}`} id={headingGlobalWraperID} ref={panelRef}>

                    {headingIconAlign === 'icon' && headingIconSwitcher && (
                        <div className="fb-advanced-icon-wrapper">
                            <div className="fb-advanced-icon">{renderSVG(headingIcon)}</div>
                        </div>
                    )}

                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'>
                            {separator === 'zigzag' && (
                                <div className='fb-advanced-title-separator-zigzag'>
                                    <svg
                                        className='fb-advanced-title-separator-zigzag-svg'
                                        width="322"
                                        height="7"
                                        viewBox="0 0 322 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ stroke: separatorColor }}
                                    >
                                        <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094"
                                            strokeWidth="2" stroke-miterlimit="10" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && (
                        <div className="fb-advanced-sub-heading-wrapper">
                            <RichText
                                tagName={subHeadingTag}
                                value={subHeadingText}
                                onChange={(value) => setAttributes({ subHeadingText: value })}
                                placeholder={__('Sub heading...', 'frontis-blocks')}
                                className="fb-advanced-sub-heading"
                            />
                        </div>
                    )}

                    <div className="fb-advanced-heading-wrapper">
                        <RichText
                            tagName={headingTag}
                            value={shouldUseDynamic ? dynamicValue : headingText} 
                            onChange={(value) => {
                                if (!shouldUseDynamic) {
                                    setAttributes({ headingText: value });
                                }
                            }}
                            placeholder={__('Advanced Heading', 'frontis-blocks')}
                            className={`fb-advanced-heading ${activeLineSwitcher ? 'active-line' : ''}`}
                        />
                    </div>

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && (
                        <div className="fb-advanced-sub-heading-wrapper">
                            <RichText
                                tagName={subHeadingTag}
                                value={subHeadingText}
                                onChange={(value) => setAttributes({ subHeadingText: value })}
                                placeholder={__('Sub heading...', 'frontis-blocks')}
                                className="fb-advanced-sub-heading"
                            />
                        </div>
                    )}

                    {showSeparatorSwitcher && separatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'>
                            {separator === 'zigzag' && (
                                <div className='fb-advanced-title-separator-zigzag'>
                                    <svg
                                        className='fb-advanced-title-separator-zigzag-svg'
                                        width="322"
                                        height="7"
                                        viewBox="0 0 322 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ stroke: separatorColor }}
                                    >
                                        <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094"
                                            strokeWidth="2" stroke-miterlimit="10" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
		</>
	);
}
