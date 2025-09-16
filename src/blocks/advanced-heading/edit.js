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

		dynamicEnabled,
		dynamicSource,
		dynamicPostId,
		dynamicPostType,
		dynamicPostLabel,
		dynamicField,
		dynamicEnableLink,
		dynamicFeaturedImageField,

		dynamicDateType,
		dynamicDateFormat,

		dynamicTimeType,
		dynamicTimeFormat,

		dynamicCommentsZeroText,
		dynamicCommentsOneText,
		dynamicCommentsManyText,

		dynamicTermsTaxonomy,
		dynamicTermsSeparator,
		dynamicLinkSource,


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

	/**
	 * Current Post Fields
	 */
	const CURRENT_POST_FIELDS = [
		'post_title','post_excerpt','post_thumbnail',
		'post_date','post_time','post_terms','post_id','comments_number',
		'author_name','author_first_name','author_last_name','author_nickname',
		'author_description','author_email','author_url','author_avatar'
	];
	
	const isPostBasedSource = dynamicEnabled && (dynamicSource === 'current_post' || dynamicSource === 'post_type');

	const isSiteField    = ['site_title','site_tagline'].includes(dynamicSource);
	const isArchiveField = ['archive_title','archive_description'].includes(dynamicSource);

	const targetPostId   = dynamicSource === 'post_type' && dynamicPostId ? dynamicPostId : postId;
	const targetPostType =
		dynamicSource === 'post_type'
		? (dynamicPostType || 'post')
		: postType;

	/**
	 * Should Use Dynamic
	 */
	const shouldUseDynamic =
	dynamicEnabled && (
	  (isPostBasedSource && CURRENT_POST_FIELDS.includes(dynamicField)) ||
	  isSiteField ||
	  isArchiveField
	);
	
	/**
	 * Get Plain Text
	 */
	const getPlainText = (html) => {
		const raw = html ?? '';
		const decoded = decodeEntities(raw);
		let text = decoded.replace(/<[^>]+>/g, '');
		text = text.replace(/\r?\n|\r/g, ' ');
		text = text.replace(/\u00A0/g, ' ');
		text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');
		return text.replace(/\s{2,}/g, ' ').trim();
	};
	
	const postRecord = useSelect(
		(select) =>
		  isPostBasedSource && targetPostType && targetPostId
			? select(coreStore).getEntityRecord('postType', targetPostType, targetPostId)
			: null,
		[isPostBasedSource, targetPostType, targetPostId]
	);

	/**
	 * Wait Until Ready (no flicker)
	 */
	const isReady = useSelect( (select) => {
		if (!isPostBasedSource || !targetPostType || !targetPostId) return true;
		return select(coreStore).hasFinishedResolution(
		'getEntityRecord',
		['postType', targetPostType, targetPostId]
		);
	}, [isPostBasedSource, targetPostType, targetPostId]);
	
	/**
	 * Store the previous value; if isReady=false, show the previous value in the UI
	 */
	const lastValueRef = useRef('');
	  
	const postTypeObj = useSelect(
		(select) => targetPostType ? select(coreStore).getPostType(targetPostType) : null,
		[targetPostType]
	);

	/**
	 * Media Record
	 */
	const mediaRecord = useSelect(
		(select) =>
		  isPostBasedSource &&
		  dynamicField === 'post_thumbnail' &&
		  postRecord?.featured_media
			? select(coreStore).getEntityRecord('postType', 'attachment', postRecord.featured_media)
			: null,
		[isPostBasedSource, dynamicField, postRecord?.featured_media, dynamicFeaturedImageField]
	);

	/**
	 * Get Site Date Format
	 */
	const getSiteDateFormat = () => {
		const settings = getDateSettings?.() || {};
		return settings?.formats?.date || 'F j, Y';
	};
	
	/**
	 * Format Date By PHP
	 */
	const formatDateByPhp = (phpFmt, jsDate) => dateI18n(phpFmt, jsDate);
	
	/**
	 * Humanize Date
	 */
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

	const getSiteTimeFormat = () => {
		const settings = getDateSettings?.() || {};
		return settings?.formats?.time || 'g:i a';
	};

	// WP REST *_gmt string → ensure UTC parse
	const parseWpDate = (raw, useGmt = false) => {
		if (!raw) return null;
		const s = String(raw).trim();
		// যদি শেষেতে Z বা timezone offset না থাকে, আর useGmt=true হয়, তাহলে Z যোগ করো
		const hasTZ = /([Zz]|[+\-]\d{2}:?\d{2})$/.test(s);
		const iso  = useGmt && !hasTZ ? `${s}Z` : s;
		const d = new Date(iso);
		return isNaN(d.getTime()) ? null : d;
	};

	/**
	 * Dynamic Terms for Post
	 */
	const taxonomySupported =
	!!dynamicTermsTaxonomy && !!postTypeObj?.taxonomies?.includes(dynamicTermsTaxonomy);
  
	const shouldQueryTerms =
		isPostBasedSource &&
		dynamicField === 'post_terms' &&
		targetPostId &&
		taxonomySupported;
	
	const dynamicTermsForPost = useSelect(
		(select) =>
		shouldQueryTerms
			? select(coreStore).getEntityRecords('taxonomy', dynamicTermsTaxonomy, {
				post: targetPostId,
				per_page: 100,
			})
			: null,
		[shouldQueryTerms, dynamicTermsTaxonomy, targetPostId]
	);

	/**
	 * Comments for Post
	 */
	const commentsList = useSelect(
		(select) =>
		  isPostBasedSource &&
		  dynamicField === 'comments_number' &&
		  targetPostId
			? select(coreStore).getEntityRecords('root', 'comment', {
				post: targetPostId,
				status: 'approve',
				per_page: 100,
			  })
			: null,
		[isPostBasedSource, dynamicField, targetPostId]
	);
	
	/**
	 * Author for Post
	 */
	const authorRecord = useSelect(
		(select) =>
		  isPostBasedSource &&
		  dynamicField.startsWith('author_') &&
		  postRecord?.author
			? select(coreStore).getUser(postRecord.author)
			: null,
		[isPostBasedSource, dynamicField, postRecord?.author]
	);

	/**
	 * Site Info
	 */
	const siteInfo = useSelect(
		(select) => isSiteField
		  ? select(coreStore).getEntityRecord('root', 'site', undefined)
		  : null,
		[isSiteField]
	);
	
	const dynamicValue = (() => {
		
		if (!shouldUseDynamic) return '';

		if (isSiteField) {
			switch (dynamicSource) {
				case 'site_title':
					return getPlainText(siteInfo?.title) || __('No Content', 'frontis-blocks');
				case 'site_tagline':
					return getPlainText(siteInfo?.description) || __('No Content', 'frontis-blocks');
				default:
					return '';
			}
		}
	
		if (isArchiveField) {
		// just show placeholder in editor because editor does not show this archive title and description and real value will be rendered in PHP
		return dynamicSource === 'archive_title'
			? __('Archive Title', 'frontis-blocks')
			: __('Archive Description', 'frontis-blocks');
		}

		if (!isPostBasedSource) return '';

		if (!isReady) return undefined;

		if (!postRecord) return __('No Content', 'frontis-blocks');
	
		switch (dynamicField) {
		case 'post_title':
			return getPlainText(postRecord.title?.rendered);
	
		case 'post_excerpt': {
			const supportsExcerpt = !!postTypeObj?.supports?.excerpt;
			if (!supportsExcerpt) {
				return __('No Content', 'frontis-blocks');
			}
			
			const rawExcerpt = postRecord.excerpt?.raw?.trim();
			
			if (rawExcerpt) {
				return getPlainText(rawExcerpt);
			}
			
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
			const isModified = dynamicDateType === 'modified';
			// prefer *_gmt; না থাকলে local ফিল্ড
			const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
			const rawLOC = isModified ? postRecord?.modified     : postRecord?.date;
			const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
			if (!d) return __('No Content', 'frontis-blocks');
		  
			switch (dynamicDateFormat) {
			  case 'jS F Y':
			  case 'Y-m-d':
			  case 'm/d/Y':
			  case 'd/m/Y':
				return formatDateByPhp(dynamicDateFormat, d);
			  case 'human':
				return humanizeDate(d);
			  case 'default':
			  default:
				return formatDateByPhp(getSiteDateFormat(), d);
			}
		}
	
		case 'post_time': {
			const isModified = dynamicTimeType === 'modified';
			const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
			const rawLOC = isModified ? postRecord?.modified     : postRecord?.date;
			const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
			if (!d) return __('No Content', 'frontis-blocks');
		  
			switch (dynamicTimeFormat) {
			  case 'default':
				return dateI18n(getSiteTimeFormat(), d);
			  case 'g:i A':
			  case 'g:i':
			  case 'g:i:s a':
				return dateI18n(dynamicTimeFormat, d);
			  default:
				return dateI18n(getSiteTimeFormat(), d);
			}
		}
	
		case 'post_terms': {
		if (!targetPostId || !dynamicTermsTaxonomy) return __('No Content', 'frontis-blocks');
		if (!taxonomySupported) return __('No Content', 'frontis-blocks');

		if (typeof dynamicTermsForPost === 'undefined') {
			return __('(loading terms...)', 'frontis-blocks');
		}
		if (!dynamicTermsForPost || !dynamicTermsForPost.length) {
			return __('No Content', 'frontis-blocks');
		}
		return dynamicTermsForPost.map((t) => t.name).join(dynamicTermsSeparator || ', ');
		}
	
		case 'post_id':
			return String(postRecord.id ?? '');
	
		case 'comments_number': {
			let count = (typeof postRecord?.comment_count !== 'undefined')
				? Number(postRecord.comment_count)
				: null;
			
			if (count === null) {
				if (typeof commentsList === 'undefined') {
				return __('(loading comments...)', 'frontis-blocks');
				}
				count = Number((commentsList?.length) || 0);
			}
			
			const zeroTxt = (dynamicCommentsZeroText || __('No Responses', 'frontis-blocks')).trim();
			const oneTxt  = (dynamicCommentsOneText  || __('One Response', 'frontis-blocks')).trim();
			const manyTxt = (dynamicCommentsManyText || __('Responses {num}', 'frontis-blocks')).trim();
			
			if (count === 0) return zeroTxt;
			if (count === 1) return oneTxt;
			return manyTxt.replace('{num}', String(count));
		}
	
		case 'author_name':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.name?.trim() || __('No Content', 'frontis-blocks');
	  
		case 'author_first_name':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.first_name?.trim() || __('No Content', 'frontis-blocks');
	
		case 'author_last_name':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.last_name?.trim() || __('No Content', 'frontis-blocks');
	
		case 'author_nickname':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.nickname?.trim() || __('No Content', 'frontis-blocks');
	
		case 'author_description':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			{
			const v = authorRecord?.description;
			return (typeof v === 'string' && v.trim()) ? v.trim() : __('No Content', 'frontis-blocks');
			}
	
		case 'author_email':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.email?.trim() || __('No Content', 'frontis-blocks');
	
		case 'author_url':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.url?.trim() || __('No Content', 'frontis-blocks');
	
		case 'author_avatar':
			if (typeof authorRecord === 'undefined') return __('(loading...)', 'frontis-blocks');
			if (!authorRecord) return __('No Content', 'frontis-blocks');
			return authorRecord?.avatar_urls?.['96'] || __('No Content', 'frontis-blocks');

		default:
			return '';
		}
	})();

	/**
	 * Display Value for No loading flicker
	 */
	const dynamicDisplayValue = (typeof dynamicValue === 'undefined')? lastValueRef.current: dynamicValue;

	useEffect(() => {
		if (typeof dynamicValue !== 'undefined') {
		lastValueRef.current = dynamicValue;
	}
	}, [dynamicValue]);
	

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
						{dynamicEnableLink ? (
							(() => {
							const HeadingTag = headingTag || 'h2';
							return (
								<HeadingTag className={`fb-advanced-heading ${activeLineSwitcher ? 'active-line' : ''}`}>
								<span className="fb-dynamic-link">
									<RichText
										value={shouldUseDynamic ? dynamicDisplayValue : headingText}
										onChange={(value) => {
											if (!shouldUseDynamic) setAttributes({ headingText: value });
										}}
										placeholder={__('Advanced Heading', 'frontis-blocks')}
									/>
								</span>
								</HeadingTag>
							);
							})()
						) : (
							<RichText
							tagName={headingTag}
							value={shouldUseDynamic ? dynamicDisplayValue : headingText}
							onChange={(value) => {
								if (!shouldUseDynamic) setAttributes({ headingText: value });
							}}
							placeholder={__('Advanced Heading', 'frontis-blocks')}
							className={`fb-advanced-heading ${activeLineSwitcher ? 'active-line' : ''}`}
							/>
						)}
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
