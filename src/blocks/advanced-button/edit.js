import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
    MediaPlaceholder,
} from '@wordpress/block-editor';

import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import { dateI18n, __experimentalGetSettings as getDateSettings } from '@wordpress/date';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings'; 
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, context }) {
    const { 
        blockId,
        buttonAlignment,
        buttonTextSwitcher,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonIcon,
        buttonIconAlign,
        buttonIconPosition,

        buttonIconImageUrl,
		buttonIconImageAlt,

        buttonGlobalWraperID,
        buttonGlobalWraperClass,

        advancedBtnDesktopSwitcher,
        advancedBtnTabletSwitcher,
        advancedBtnMobileSwitcher,

        dynamicTextEnabled,
		dynamicTextSource,
		dynamicTextPostId,
		dynamicTextPostType,
		dynamicTextPostLabel,
		dynamicTextField,
		dynamicFeaturedImageField,

		dynamicTextDateType,
		dynamicTextDateFormat,

		dynamicTextTimeType,
		dynamicTextTimeFormat,

		dynamicTextCommentsZeroText,
		dynamicTextCommentsOneText,
		dynamicTextCommentsManyText,

		dynamicTextTermsTaxonomy,
		dynamicTextTermsSeparator,
		dynamicTextEnableLink,
		dynamicTextLinkSource,
    } = attributes;

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-button-main-wrapper ${blockId} ${advancedBtnDesktopSwitcher && 'fb-desktop-responsive'} ${advancedBtnTabletSwitcher && 'fb-tablet-responsive'} ${advancedBtnMobileSwitcher && 'fb-mobile-responsive'}`,
    });


    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);
    
    /**
     * Prevent link navigation in the editor and focus on text
     */
    const handleButtonClick = (event) => {
        event.preventDefault();
    };

    // Dynamic Content Value
	const {postType, postId} = context;

    /**
	 * Current Post Fields
	 */
	const CURRENT_POST_FIELDS = [
		'post_title','post_excerpt','post_thumbnail',
		'post_date','post_time','post_terms','post_id','comments_number',
		'author_name','author_first_name','author_last_name','author_nickname',
		'author_description','author_email','author_url','author_avatar'
	];
	
	const isPostBasedSource = dynamicTextEnabled && (dynamicTextSource === 'current_post' || dynamicTextSource === 'post_type');

	const isSiteField    = ['site_title','site_tagline'].includes(dynamicTextSource);
	const isArchiveField = ['archive_title','archive_description'].includes(dynamicTextSource);

	const targetPostId   = dynamicTextSource === 'post_type' && dynamicTextPostId ? dynamicTextPostId : postId;
	const targetPostType =
		dynamicTextSource === 'post_type'
		? (dynamicTextPostType || 'post')
		: postType;

	/**
	 * Should Use Dynamic
	 */
	const shouldUseDynamic =
	dynamicTextEnabled && (
	  (isPostBasedSource && CURRENT_POST_FIELDS.includes(dynamicTextField)) ||
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
		  dynamicTextField === 'post_thumbnail' &&
		  postRecord?.featured_media
			? select(coreStore).getEntityRecord('postType', 'attachment', postRecord.featured_media)
			: null,
		[isPostBasedSource, dynamicTextField, postRecord?.featured_media, dynamicFeaturedImageField]
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
		// if the last character is Z or timezone offset, add Z
		const hasTZ = /([Zz]|[+\-]\d{2}:?\d{2})$/.test(s);
		const iso  = useGmt && !hasTZ ? `${s}Z` : s;
		const d = new Date(iso);
		return isNaN(d.getTime()) ? null : d;
	};

	/**
	 * Dynamic Terms for Post
	 */
	const taxonomySupported =
	!!dynamicTextTermsTaxonomy && !!postTypeObj?.taxonomies?.includes(dynamicTextTermsTaxonomy);
  
	const shouldQueryTerms =
		isPostBasedSource &&
		dynamicTextField === 'post_terms' &&
		targetPostId &&
		taxonomySupported;
	
	const dynamicTermsForPost = useSelect(
		(select) =>
		shouldQueryTerms
			? select(coreStore).getEntityRecords('taxonomy', dynamicTextTermsTaxonomy, {
				post: targetPostId,
				per_page: 100,
			})
			: null,
		[shouldQueryTerms, dynamicTextTermsTaxonomy, targetPostId]
	);

	/**
	 * Comments for Post
	 */
	const commentsList = useSelect(
		(select) =>
		  isPostBasedSource &&
		  dynamicTextField === 'comments_number' &&
		  targetPostId
			? select(coreStore).getEntityRecords('root', 'comment', {
				post: targetPostId,
				status: 'approve',
				per_page: 100,
			  })
			: null,
		[isPostBasedSource, dynamicTextField, targetPostId]
	);
	
	/**
	 * Author for Post
	 */
	const authorRecord = useSelect(
		(select) =>
		  isPostBasedSource &&
		  dynamicTextField.startsWith('author_') &&
		  postRecord?.author
			? select(coreStore).getUser(postRecord.author)
			: null,
		[isPostBasedSource, dynamicTextField, postRecord?.author]
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
			switch (dynamicTextSource) {
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
		return dynamicTextSource === 'archive_title'
			? __('Archive Title', 'frontis-blocks')
			: __('Archive Description', 'frontis-blocks');
		}

		if (!isPostBasedSource) return '';

		if (!isReady) return undefined;

		if (!postRecord) return __('No Content', 'frontis-blocks');
	
		switch (dynamicTextField) {
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
			const isModified = dynamicTextDateType === 'modified';
			// prefer *_gmt; if not, use local field
			const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
			const rawLOC = isModified ? postRecord?.modified     : postRecord?.date;
			const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
			if (!d) return __('No Content', 'frontis-blocks');
		  
			switch (dynamicTextDateFormat) {
			  case 'jS F Y':
			  case 'Y-m-d':
			  case 'm/d/Y':
			  case 'd/m/Y':
				return formatDateByPhp(dynamicTextDateFormat, d);
			  case 'human':
				return humanizeDate(d);
			  case 'default':
			  default:
				return formatDateByPhp(getSiteDateFormat(), d);
			}
		}
	
		case 'post_time': {
			const isModified = dynamicTextTimeType === 'modified';
			const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
			const rawLOC = isModified ? postRecord?.modified     : postRecord?.date;
			const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
			if (!d) return __('No Content', 'frontis-blocks');
		  
			switch (dynamicTextTimeFormat) {
			  case 'default':
				return dateI18n(getSiteTimeFormat(), d);
			  case 'g:i A':
			  case 'g:i':
			  case 'g:i:s a':
				return dateI18n(dynamicTextTimeFormat, d);
			  default:
				return dateI18n(getSiteTimeFormat(), d);
			}
		}
	
		case 'post_terms': {
		if (!targetPostId || !dynamicTextTermsTaxonomy) return __('No Content', 'frontis-blocks');
		if (!taxonomySupported) return __('No Content', 'frontis-blocks');

		if (typeof dynamicTermsForPost === 'undefined') {
			return __('(loading terms...)', 'frontis-blocks');
		}
		if (!dynamicTermsForPost || !dynamicTermsForPost.length) {
			return __('No Content', 'frontis-blocks');
		}
		return dynamicTermsForPost.map((t) => t.name).join(dynamicTextTermsSeparator || ', ');
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
			
			const zeroTxt = (dynamicTextCommentsZeroText || __('No Responses', 'frontis-blocks')).trim();
			const oneTxt  = (dynamicTextCommentsOneText  || __('One Response', 'frontis-blocks')).trim();
			const manyTxt = (dynamicTextCommentsManyText || __('Responses {num}', 'frontis-blocks')).trim();
			
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
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={buttonAlignment}
                    onChange={(value) => setAttributes({ buttonAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${buttonGlobalWraperClass}` } id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }} ref={panelRef}>
                    <a 
                        className="fb-advanced-button" 
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                        onClick={handleButtonClick}
                    >
                        {buttonIconPosition === 'left' && buttonIconAlign === 'icon-text' && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                            </div>
                        )}

                        {buttonIconPosition === 'left' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon-image">
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        {buttonTextSwitcher && (
                            <RichText
                                tagName="span"
                                value={shouldUseDynamic ? dynamicDisplayValue : buttonText}
                                onChange={(value) => {
                                    if (!shouldUseDynamic) setAttributes({ buttonText: value });
                                }}
                                placeholder={__('Enter button text...', 'frontis-blocks')}
                                className="fb-advanced-button-text"
                            />
                        )}

                        {buttonIconPosition === 'right' && buttonIconAlign === 'icon-text' && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                            </div>
                        )}

                        {buttonIconPosition === 'right' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon-image">
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </a>
                </div>
            </div>
        </>
    );
}
