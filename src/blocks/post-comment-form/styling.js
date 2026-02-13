/**
 * Post Comment Form Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

// nested comment item
function scalePaddingWithoutLeft(paddingString, scale = 1) {
    const parts = paddingString.split(" "); // e.g. ["20px", "20px", "20px", "20px"]

    // Ensure 4 values (top, right, bottom, left)
    const [top = "0", right = "0", bottom = "0", left = "0"] = parts;

    // Scale top, right, bottom — but skip left
    const scaleValue = (v) => {
        const num = parseFloat(v);
        const unit = v.replace(num, "");
        return `${num * scale}${unit}`;
    };

    return `${scaleValue(top)} ${scaleValue(right)} ${scaleValue(bottom)} 0`;
}


/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePostCommentFormStyle = (attributes) => {
    const {
        blockID,
        showCommentTitle,
        showCommentsCount,
        showCommentForm,
        formTitle,
        cancelReplyText,
        loginText,
        logoutText,
        buttonText,

        /** ================== Style Attributes =============== */
        /** ================== Comments Title */
        commentCountTitleGlobalTypoSwitcher,
        commentCountTitleGlobalTypographyData,
        commentCountTitleGlobalTypoType,
        commentCountTitleGlobalTypoOption,
        commentCountTitleFontFamily,
        commentCountTitleFontSize,
        commentCountTitleFontSizeUnits,
        commentCountTitleFontWeight,
        commentCountTitleFontStyle,
        commentCountTitleTextTransform,
        commentCountTitleTextDecoration,
        commentCountTitleLetterSpacing,
        commentCountTitleLetterSpacingUnits,
        commentCountTitleLineHeight,
        commentCountTitleLineHeightUnits,

        commentCountTitleColorSwitcher,
        commentCountTitleColor,
        commentCountTitleHoverColor,

        commentCountTitleSpacing,
        commentCountTitleSpacingUnits,
        /** =============== End Comments Title */

        /** ================ Start Comment Item */
        postCommentPaddingUnits,
        postCommentPaddingDesktop,
        postCommentPaddingTablet,
        postCommentPaddingMobile,
        postCommentPaddingLink,

        nestedIndentation,
        nestedIndentationUnits,

        commentListBottomSpacing,
        commentListBottomSpacingUnits,

        /** Avatar */
        avatarGap,
        avatarGapUnits,

        avatarSize,
        avatarSizeUnits,

        avatarPaddingUnits,
        avatarPaddingDesktop,
        avatarPaddingTablet,
        avatarPaddingMobile,
        avatarPaddingLink,

        avatarBorder,
        avatarBorderColor,
        avatarBorderUnits,
        avatarBorderDesktop,
        avatarBorderTablet,
        avatarBorderMobile,
        avatarBorderLink,

        avatarBorderRadiusUnits,
        avatarBorderRadiusDesktop,
        avatarBorderRadiusTablet,
        avatarBorderRadiusMobile,
        avatarBorderRadiusLink,

        avatarBoxShadowValues,
        avatarBoxShadowCssValue,

        /** Author */
        authorGlobalTypoSwitcher,
        authorGlobalTypographyData,
        authorGlobalTypoType,
        authorGlobalTypoOption,
        authorFontFamily,
        authorFontSize,
        authorFontSizeUnits,
        authorFontWeight,
        authorFontStyle,
        authorTextTransform,
        authorTextDecoration,
        authorLetterSpacing,
        authorLetterSpacingUnits,
        authorLineHeight,
        authorLineHeightUnits,

        authorColorSwitcher,
        authorColor,
        authorHoverColor,

        /** Meta  */
        commentMetaGlobalTypoSwitcher,
        commentMetaGlobalTypographyData,
        commentMetaGlobalTypoType,
        commentMetaGlobalTypoOption,
        commentMetaFontFamily,
        commentMetaFontSize,
        commentMetaFontSizeUnits,
        commentMetaFontWeight,
        commentMetaFontStyle,
        commentMetaTextTransform,
        commentMetaTextDecoration,
        commentMetaLetterSpacing,
        commentMetaLetterSpacingUnits,
        commentMetaLineHeight,
        commentMetaLineHeightUnits,

        commentMetaColorSwitcher,
        commentMetaColor,
        commentMetaHoverColor,

        /** Message     */
        messageGlobalTypoSwitcher,
        messageGlobalTypographyData,
        messageGlobalTypoType,
        messageGlobalTypoOption,
        messageFontFamily,
        messageFontSize,
        messageFontSizeUnits,
        messageFontWeight,
        messageFontStyle,
        messageTextTransform,
        messageTextDecoration,
        messageLetterSpacing,
        messageLetterSpacingUnits,
        messageLineHeight,
        messageLineHeightUnits,

        messageColor,
        /** ============ End Comment Item */

        /** ============ Start Reply Button */
        replyButtonGlobalTypoSwitcher,
        replyButtonGlobalTypographyData,
        replyButtonGlobalTypoType,
        replyButtonGlobalTypoOption,
        replyButtonFontFamily,
        replyButtonFontSize,
        replyButtonFontSizeUnits,
        replyButtonFontWeight,
        replyButtonFontStyle,
        replyButtonTextTransform,
        replyButtonTextDecoration,
        replyButtonLetterSpacing,
        replyButtonLetterSpacingUnits,
        replyButtonLineHeight,
        replyButtonLineHeightUnits,

        replyButtonColorSwitcher,
        replyButtonColor,
        replyButtonHoverColor,

        /** Background */
        replyButtonBgColorSwitcher,
        replyButtonNormalBackgroundType,
        replyButtonNormalClassicColor,
        replyButtonNormalGradientColor,
        replyButtonNormalCustomGradientSwitcher,
        replyButtonNormalCustomGradientInputValue,
        replyButtonHoverBackgroundType,
        replyButtonHoverClassicColor,
        replyButtonHoverGradientColor,
        replyButtonHoverCustomGradientSwitcher,
        replyButtonHoverCustomGradientInputValue,

        replyButtonPaddingUnits,
        replyButtonPaddingDesktop,
        replyButtonPaddingTablet,
        replyButtonPaddingMobile,
        replyButtonPaddingLink,

        replyButtonBorder,
        replyButtonBorderColorSwitcher,
        replyButtonBorderColor,
        replyButtonBorderHoverColor,
        replyButtonBorderUnits,
        replyButtonBorderDesktop,
        replyButtonBorderTablet,
        replyButtonBorderMobile,
        replyButtonBorderLink,

        replyButtonBorderRadiusUnits,
        replyButtonBorderRadiusDesktop,
        replyButtonBorderRadiusTablet,
        replyButtonBorderRadiusMobile,
        replyButtonBorderRadiusLink,

        replyButtonBoxShadowSwitcher,
        replyButtonBoxShadowValues,
        replyButtonBoxShadowCssValue,
        replyButtonBoxShadowHoverValues,
        replyButtonBoxShadowHoverCssValue,
        /** ============ End Reply Button */

        /** ============ Comment Form ==================== */
        commentFormBgColorSwitcher,
        commentFormNormalBackgroundType,
        commentFormNormalClassicColor,
        commentFormNormalGradientColor,
        commentFormNormalCustomGradientSwitcher,
        commentFormNormalCustomGradientInputValue,
        commentFormHoverBackgroundType,
        commentFormHoverClassicColor,
        commentFormHoverGradientColor,
        commentFormHoverCustomGradientSwitcher,
        commentFormHoverCustomGradientInputValue,

        commentFormPaddingUnits,
        commentFormPaddingDesktop,
        commentFormPaddingTablet,
        commentFormPaddingMobile,
        commentFormPaddingLink,

        commentFormBorder,
        commentFormBorderColor,
        commentFormBorderUnits,
        commentFormBorderDesktop,
        commentFormBorderTablet,
        commentFormBorderMobile,
        commentFormBorderLink,


        commentFormBorderRadiusUnits,
        commentFormBorderRadiusDesktop,
        commentFormBorderRadiusTablet,
        commentFormBorderRadiusMobile,
        commentFormBorderRadiusLink,

        commentFormBoxShadowValues,
        commentFormBoxShadowCssValue,
        /** ============ End Comment Form ==================== */

        /** ============ Form Header ==================== */
        /** Title */
        formTitleGlobalTypoSwitcher,
        formTitleGlobalTypographyData,
        formTitleGlobalTypoType,
        formTitleGlobalTypoOption,
        formTitleFontFamily,
        formTitleFontSize,
        formTitleFontSizeUnits,
        formTitleFontWeight,
        formTitleFontStyle,
        formTitleTextTransform,
        formTitleTextDecoration,
        formTitleLetterSpacing,
        formTitleLetterSpacingUnits,
        formTitleLineHeight,
        formTitleLineHeightUnits,

        formTitleColor,

        formTitleSpacing,
        formTitleSpacingUnits,

        /** Cancel Reply Link */
        cancelReplyGlobalTypoSwitcher,
        cancelReplyGlobalTypographyData,
        cancelReplyGlobalTypoType,
        cancelReplyGlobalTypoOption,
        cancelReplyFontFamily,
        cancelReplyFontSize,
        cancelReplyFontSizeUnits,
        cancelReplyFontWeight,
        cancelReplyFontStyle,
        cancelReplyTextTransform,
        cancelReplyTextDecoration,
        cancelReplyLetterSpacing,
        cancelReplyLetterSpacingUnits,
        cancelReplyLineHeight,
        cancelReplyLineHeightUnits,

        cancelReplyColorSwitcher,
        cancelReplyColor,
        cancelReplyHoverColor,

        /** =============== Start Form info =================== */
        loggedInTextGlobalTypoSwitcher,
        loggedInTextGlobalTypographyData,
        loggedInTextGlobalTypoType,
        loggedInTextGlobalTypoOption,
        loggedInTextFontFamily,
        loggedInTextFontSize,
        loggedInTextFontSizeUnits,
        loggedInTextFontWeight,
        loggedInTextFontStyle,
        loggedInTextTextTransform,
        loggedInTextTextDecoration,
        loggedInTextLetterSpacing,
        loggedInTextLetterSpacingUnits,
        loggedInTextLineHeight,
        loggedInTextLineHeightUnits,

        loggedInTextColor,
        loggedInTextHoverColor,

        loggedInLinkColorSwitcher,
        loggedInLinkColor,
        loggedInLinkHoverColor,

        formInfoSpacing,
        formInfoSpacingUnits,

        formInfoBgColorSwitcher,
        formInfoNormalBackgroundType,
        formInfoNormalClassicColor,
        formInfoNormalGradientColor,
        formInfoNormalCustomGradientSwitcher,
        formInfoNormalCustomGradientInputValue,
        formInfoHoverBackgroundType,
        formInfoHoverClassicColor,
        formInfoHoverGradientColor,
        formInfoHoverCustomGradientSwitcher,
        formInfoHoverCustomGradientInputValue,

        formInfoPaddingUnits,
        formInfoPaddingDesktop,
        formInfoPaddingTablet,
        formInfoPaddingMobile,
        formInfoPaddingLink,

        formInfoBorder,
        formInfoBorderColor,
        formInfoBorderUnits,
        formInfoBorderDesktop,
        formInfoBorderTablet,
        formInfoBorderMobile,
        formInfoBorderLink,

        formInfoBorderRadiusUnits,
        formInfoBorderRadiusDesktop,
        formInfoBorderRadiusTablet,
        formInfoBorderRadiusMobile,
        formInfoBorderRadiusLink,
        /** =============== End Form Info =================== */


        /** =============== Start Form Fields =================== */

        /** ============ Start Reply Button */
        formFieldGlobalTypoSwitcher,
        formFieldGlobalTypographyData,
        formFieldGlobalTypoType,
        formFieldGlobalTypoOption,
        formFieldFontFamily,
        formFieldFontSize,
        formFieldFontSizeUnits,
        formFieldFontWeight,
        formFieldFontStyle,
        formFieldTextTransform,
        formFieldTextDecoration,
        formFieldLetterSpacing,
        formFieldLetterSpacingUnits,
        formFieldLineHeight,
        formFieldLineHeightUnits,

        formFieldColor,
        formFieldHoverColor,

        formFieldPlaceholderColor,

        /** Background */
        formFieldBgColorSwitcher,
        formFieldNormalBackgroundType,
        formFieldNormalClassicColor,
        formFieldNormalGradientColor,
        formFieldNormalCustomGradientSwitcher,
        formFieldNormalCustomGradientInputValue,
        formFieldHoverBackgroundType,
        formFieldHoverClassicColor,
        formFieldHoverGradientColor,
        formFieldHoverCustomGradientSwitcher,
        formFieldHoverCustomGradientInputValue,

        formFieldPaddingUnits,
        formFieldPaddingDesktop,
        formFieldPaddingTablet,
        formFieldPaddingMobile,
        formFieldPaddingLink,

        formFieldBorder,
        formFieldBorderColor,
        formFieldBorderHoverColor,
        formFieldBorderUnits,
        formFieldBorderDesktop,
        formFieldBorderTablet,
        formFieldBorderMobile,
        formFieldBorderLink,

        formFieldBorderRadiusUnits,
        formFieldBorderRadiusDesktop,
        formFieldBorderRadiusTablet,
        formFieldBorderRadiusMobile,
        formFieldBorderRadiusLink,
        /** =============== End Form Fields =================== */


        /** Start Submit Button */
        buttonWidth,
        buttonWidthUnits,

        buttonGlobalTypoSwitcher,
        buttonGlobalTypographyData,
        buttonGlobalTypoType,
        buttonGlobalTypoOption,
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeUnits,
        buttonFontWeight,
        buttonFontStyle,
        buttonTextTransform,
        buttonTextDecoration,
        buttonLetterSpacing,
        buttonLetterSpacingUnits,
        buttonLineHeight,
        buttonLineHeightUnits,

        buttonColorSwitcher,
        buttonColor,
        buttonHoverColor,
        buttonBgColorSwitcher,
        buttonBgColor,
        buttonBgHoverColor,
        buttonBorder,
        buttonBorderColorSwitcher,
        buttonBorderColor,
        buttonBorderHoverColor,

        buttonBorderUnits,
        buttonDesktopBorderWidth,
        buttonTabBorderWidth,
        buttonMobileBorderWidth,
        buttonBorderLink,

        buttonBorderRadiusUnits,
        buttonDesktopBorderRadiusWidth,
        buttonTabBorderRadiusWidth,
        buttonMobileBorderRadiusWidth,
        buttonBorderRadiusLink,

        buttonBoxShadowSwitcher,
        buttonBoxShadowValues,
        buttonBoxShadowCssValue,
        buttonBoxShadowHoverValues,
        buttonBoxShadowHoverCssValue,

        buttonPaddingUnits,
        buttonDesktopPadding,
        buttonTabPadding,
        buttonMobilePadding,
        buttonPaddingLink,

        buttonMarginUnits,
        buttonDesktopMargin,
        buttonTabMargin,
        buttonMobileMargin,
        buttonMarginLink,
        /** Submit Button */

        /** ============ End Style Attributes ================= */

        /** ============ Start Advanced Attributes ================= */
        wrapperId,
        wrapperClass,

        commentFormDesktopSwitcher,
        commentFormTabletSwitcher,
        commentFormMobileSwitcher,

        commentFormGlobalCustomCSS,

        postGlobalZIndex,
        postGlobalOverflow,
        postGlobalPositionType,
        postGlobalHZOrientationType,
        postGlobalVROrientationType,
        postGlobalHZLeftOffset,
        postGlobalHZLeftOffsetUnits,
        postGlobalHZRightOffset,
        postGlobalHZRightOffsetUnits,
        postGlobalVRTopOffset,
        postGlobalVRTopOffsetUnits,
        postGlobalVRBottomOffset,
        postGlobalVRBottomOffsetUnits,

        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,

        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,
        /** ============ End Advanced Attributes ================= */
    } = attributes;

    const postCommentPaddingDesktopWidth = `${postCommentPaddingDesktop.top}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.right}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.bottom}${postCommentPaddingUnits.Desktop} ${postCommentPaddingDesktop.left}${postCommentPaddingUnits.Desktop}`;
    const postCommentPaddingTabletWidth = `${postCommentPaddingTablet.top}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.right}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.bottom}${postCommentPaddingUnits.Tablet} ${postCommentPaddingTablet.left}${postCommentPaddingUnits.Tablet}`;
    const postCommentPaddingMobileWidth = `${postCommentPaddingMobile.top}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.right}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.bottom}${postCommentPaddingUnits.Mobile} ${postCommentPaddingMobile.left}${postCommentPaddingUnits.Mobile}`;

    // Nested Item Dynamic Padding value base of parent Commnet Item
    const childCommentPaddingDesktopWidth = scalePaddingWithoutLeft(
        postCommentPaddingDesktopWidth,
        0.75,
    );
    const childCommentPaddingTabletWidth = scalePaddingWithoutLeft(
        postCommentPaddingTabletWidth,
        0.75,
    );
    const childCommentPaddingMobileWidth = scalePaddingWithoutLeft(
        postCommentPaddingMobileWidth,
        0.75,
    );
    /** End Post Comment Item Padding */

    const replyButtonPaddingDesktopWidth = `${replyButtonPaddingDesktop.top}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.right}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.bottom}${replyButtonPaddingUnits.Desktop} ${replyButtonPaddingDesktop.left}${replyButtonPaddingUnits.Desktop}`;
    const replyButtonPaddingTabletWidth = `${replyButtonPaddingTablet.top}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.right}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.bottom}${replyButtonPaddingUnits.Tablet} ${replyButtonPaddingTablet.left}${replyButtonPaddingUnits.Tablet}`;
    const replyButtonPaddingMobileWidth = `${replyButtonPaddingMobile.top}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.right}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.bottom}${replyButtonPaddingUnits.Mobile} ${replyButtonPaddingMobile.left}${replyButtonPaddingUnits.Mobile}`;

    const avatarBorderDesktopWidth = `${avatarBorderDesktop.top}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.right}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.bottom}${avatarBorderUnits.Desktop} ${avatarBorderDesktop.left}${avatarBorderUnits.Desktop}`;
    const avatarBorderTabletWidth = `${avatarBorderTablet.top}${avatarBorderUnits.Tablet} ${avatarBorderTablet.right}${avatarBorderUnits.Tablet} ${avatarBorderTablet.bottom}${avatarBorderUnits.Tablet} ${avatarBorderTablet.left}${avatarBorderUnits.Tablet}`;
    const avatarBorderMobileWidth = `${avatarBorderMobile.top}${avatarBorderUnits.Mobile} ${avatarBorderMobile.right}${avatarBorderUnits.Mobile} ${avatarBorderMobile.bottom}${avatarBorderUnits.Mobile} ${avatarBorderMobile.left}${avatarBorderUnits.Mobile}`;

    const avatarPaddingDesktopWidth = `${avatarPaddingDesktop.top}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.right}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.bottom}${avatarPaddingUnits.Desktop} ${avatarPaddingDesktop.left}${avatarPaddingUnits.Desktop}`;
    const avatarPaddingTabletWidth = `${avatarPaddingTablet.top}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.right}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.bottom}${avatarPaddingUnits.Tablet} ${avatarPaddingTablet.left}${avatarPaddingUnits.Tablet}`;
    const avatarPaddingMobileWidth = `${avatarPaddingMobile.top}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.right}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.bottom}${avatarPaddingUnits.Mobile} ${avatarPaddingMobile.left}${avatarPaddingUnits.Mobile}`;

    const avatarBorderRadiusDesktopWidth = `${avatarBorderRadiusDesktop.top}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.right}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.bottom}${avatarBorderRadiusUnits.Desktop} ${avatarBorderRadiusDesktop.left}${avatarBorderRadiusUnits.Desktop}`;
    const avatarBorderRadiusTabletWidth = `${avatarBorderRadiusTablet.top}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.right}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.bottom}${avatarBorderRadiusUnits.Tablet} ${avatarBorderRadiusTablet.left}${avatarBorderRadiusUnits.Tablet}`;
    const avatarBorderRadiusMobileWidth = `${avatarBorderRadiusMobile.top}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.right}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.bottom}${avatarBorderRadiusUnits.Mobile} ${avatarBorderRadiusMobile.left}${avatarBorderRadiusUnits.Mobile}`;

    const replyButtonBorderDesktopWidth = `${replyButtonBorderDesktop.top}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.right}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.bottom}${replyButtonBorderUnits.Desktop} ${replyButtonBorderDesktop.left}${replyButtonBorderUnits.Desktop}`;
    const replyButtonBorderTabletWidth = `${replyButtonBorderTablet.top}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.right}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.bottom}${replyButtonBorderUnits.Tablet} ${replyButtonBorderTablet.left}${replyButtonBorderUnits.Tablet}`;
    const replyButtonBorderMobileWidth = `${replyButtonBorderMobile.top}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.right}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.bottom}${replyButtonBorderUnits.Mobile} ${replyButtonBorderMobile.left}${replyButtonBorderUnits.Mobile}`;

    const replyButtonBorderRadiusDesktopWidth = `${replyButtonBorderRadiusDesktop.top}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.right}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.bottom}${replyButtonBorderRadiusUnits.Desktop} ${replyButtonBorderRadiusDesktop.left}${replyButtonBorderRadiusUnits.Desktop}`;
    const replyButtonBorderRadiusTabletWidth = `${replyButtonBorderRadiusTablet.top}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.right}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.bottom}${replyButtonBorderRadiusUnits.Tablet} ${replyButtonBorderRadiusTablet.left}${replyButtonBorderRadiusUnits.Tablet}`;
    const replyButtonBorderRadiusMobileWidth = `${replyButtonBorderRadiusMobile.top}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.right}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.bottom}${replyButtonBorderRadiusUnits.Mobile} ${replyButtonBorderRadiusMobile.left}${replyButtonBorderRadiusUnits.Mobile}`;

    const commentFormPaddingDesktopWidth = `${commentFormPaddingDesktop.top}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.right}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.bottom}${commentFormPaddingUnits.Desktop} ${commentFormPaddingDesktop.left}${commentFormPaddingUnits.Desktop}`;
    const commentFormPaddingTabletWidth = `${commentFormPaddingTablet.top}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.right}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.bottom}${commentFormPaddingUnits.Tablet} ${commentFormPaddingTablet.left}${commentFormPaddingUnits.Tablet}`;
    const commentFormPaddingMobileWidth = `${commentFormPaddingMobile.top}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.right}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.bottom}${commentFormPaddingUnits.Mobile} ${commentFormPaddingMobile.left}${commentFormPaddingUnits.Mobile}`;

    const commentFormBorderDesktopWidth = `${commentFormBorderDesktop.top}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.right}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.bottom}${commentFormBorderUnits.Desktop} ${commentFormBorderDesktop.left}${commentFormBorderUnits.Desktop}`;
    const commentFormBorderTabletWidth = `${commentFormBorderTablet.top}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.right}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.bottom}${commentFormBorderUnits.Tablet} ${commentFormBorderTablet.left}${commentFormBorderUnits.Tablet}`;
    const commentFormBorderMobileWidth = `${commentFormBorderMobile.top}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.right}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.bottom}${commentFormBorderUnits.Mobile} ${commentFormBorderMobile.left}${commentFormBorderUnits.Mobile}`;

    const commentFormBorderRadiusDesktopWidth = `${commentFormBorderRadiusDesktop.top}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.right}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.bottom}${commentFormBorderRadiusUnits.Desktop} ${commentFormBorderRadiusDesktop.left}${commentFormBorderRadiusUnits.Desktop}`;
    const commentFormBorderRadiusTabletWidth = `${commentFormBorderRadiusTablet.top}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.right}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.bottom}${commentFormBorderRadiusUnits.Tablet} ${commentFormBorderRadiusTablet.left}${commentFormBorderRadiusUnits.Tablet}`;
    const commentFormBorderRadiusMobileWidth = `${commentFormBorderRadiusMobile.top}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.right}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.bottom}${commentFormBorderRadiusUnits.Mobile} ${commentFormBorderRadiusMobile.left}${commentFormBorderRadiusUnits.Mobile}`;

    const formInfoPaddingDesktopWidth = `${formInfoPaddingDesktop.top}${formInfoPaddingUnits.Desktop} ${formInfoPaddingDesktop.right}${formInfoPaddingUnits.Desktop} ${formInfoPaddingDesktop.bottom}${formInfoPaddingUnits.Desktop} ${formInfoPaddingDesktop.left}${formInfoPaddingUnits.Desktop}`;
    const formInfoPaddingTabletWidth = `${formInfoPaddingTablet.top}${formInfoPaddingUnits.Tablet} ${formInfoPaddingTablet.right}${formInfoPaddingUnits.Tablet} ${formInfoPaddingTablet.bottom}${formInfoPaddingUnits.Tablet} ${formInfoPaddingTablet.left}${formInfoPaddingUnits.Tablet}`;
    const formInfoPaddingMobileWidth = `${formInfoPaddingMobile.top}${formInfoPaddingUnits.Mobile} ${formInfoPaddingMobile.right}${formInfoPaddingUnits.Mobile} ${formInfoPaddingMobile.bottom}${formInfoPaddingUnits.Mobile} ${formInfoPaddingMobile.left}${formInfoPaddingUnits.Mobile}`;

    const formInfoBorderDesktopWidth = `${formInfoBorderDesktop.top}${formInfoBorderUnits.Desktop} ${formInfoBorderDesktop.right}${formInfoBorderUnits.Desktop} ${formInfoBorderDesktop.bottom}${formInfoBorderUnits.Desktop} ${formInfoBorderDesktop.left}${formInfoBorderUnits.Desktop}`;
    const formInfoBorderTabletWidth = `${formInfoBorderTablet.top}${formInfoBorderUnits.Tablet} ${formInfoBorderTablet.right}${formInfoBorderUnits.Tablet} ${formInfoBorderTablet.bottom}${formInfoBorderUnits.Tablet} ${formInfoBorderTablet.left}${formInfoBorderUnits.Tablet}`;
    const formInfoBorderMobileWidth = `${formInfoBorderMobile.top}${formInfoBorderUnits.Mobile} ${formInfoBorderMobile.right}${formInfoBorderUnits.Mobile} ${formInfoBorderMobile.bottom}${formInfoBorderUnits.Mobile} ${formInfoBorderMobile.left}${formInfoBorderUnits.Mobile}`;

    const formInfoBorderRadiusDesktopWidth = `${formInfoBorderRadiusDesktop.top}${formInfoBorderRadiusUnits.Desktop} ${formInfoBorderRadiusDesktop.right}${formInfoBorderRadiusUnits.Desktop} ${formInfoBorderRadiusDesktop.bottom}${formInfoBorderRadiusUnits.Desktop} ${formInfoBorderRadiusDesktop.left}${formInfoBorderRadiusUnits.Desktop}`;
    const formInfoBorderRadiusTabletWidth = `${formInfoBorderRadiusTablet.top}${formInfoBorderRadiusUnits.Tablet} ${formInfoBorderRadiusTablet.right}${formInfoBorderRadiusUnits.Tablet} ${formInfoBorderRadiusTablet.bottom}${formInfoBorderRadiusUnits.Tablet} ${formInfoBorderRadiusTablet.left}${formInfoBorderRadiusUnits.Tablet}`;
    const formInfoBorderRadiusMobileWidth = `${formInfoBorderRadiusMobile.top}${formInfoBorderRadiusUnits.Mobile} ${formInfoBorderRadiusMobile.right}${formInfoBorderRadiusUnits.Mobile} ${formInfoBorderRadiusMobile.bottom}${formInfoBorderRadiusUnits.Mobile} ${formInfoBorderRadiusMobile.left}${formInfoBorderRadiusUnits.Mobile}`;

    const formFieldPaddingDesktopWidth = `${formFieldPaddingDesktop.top}${formFieldPaddingUnits.Desktop} ${formFieldPaddingDesktop.right}${formFieldPaddingUnits.Desktop} ${formFieldPaddingDesktop.bottom}${formFieldPaddingUnits.Desktop} ${formFieldPaddingDesktop.left}${formFieldPaddingUnits.Desktop}`;
    const formFieldPaddingTabletWidth = `${formFieldPaddingTablet.top}${formFieldPaddingUnits.Tablet} ${formFieldPaddingTablet.right}${formFieldPaddingUnits.Tablet} ${formFieldPaddingTablet.bottom}${formFieldPaddingUnits.Tablet} ${formFieldPaddingTablet.left}${formFieldPaddingUnits.Tablet}`;
    const formFieldPaddingMobileWidth = `${formFieldPaddingMobile.top}${formFieldPaddingUnits.Mobile} ${formFieldPaddingMobile.right}${formFieldPaddingUnits.Mobile} ${formFieldPaddingMobile.bottom}${formFieldPaddingUnits.Mobile} ${formFieldPaddingMobile.left}${formFieldPaddingUnits.Mobile}`;

    const formFieldBorderDesktopWidth = `${formFieldBorderDesktop.top}${formFieldBorderUnits.Desktop} ${formFieldBorderDesktop.right}${formFieldBorderUnits.Desktop} ${formFieldBorderDesktop.bottom}${formFieldBorderUnits.Desktop} ${formFieldBorderDesktop.left}${formFieldBorderUnits.Desktop}`;
    const formFieldBorderTabletWidth = `${formFieldBorderTablet.top}${formFieldBorderUnits.Tablet} ${formFieldBorderTablet.right}${formFieldBorderUnits.Tablet} ${formFieldBorderTablet.bottom}${formFieldBorderUnits.Tablet} ${formFieldBorderTablet.left}${formFieldBorderUnits.Tablet}`;
    const formFieldBorderMobileWidth = `${formFieldBorderMobile.top}${formFieldBorderUnits.Mobile} ${formFieldBorderMobile.right}${formFieldBorderUnits.Mobile} ${formFieldBorderMobile.bottom}${formFieldBorderUnits.Mobile} ${formFieldBorderMobile.left}${formFieldBorderUnits.Mobile}`;

    const formFieldBorderRadiusDesktopWidth = `${formFieldBorderRadiusDesktop.top}${formFieldBorderRadiusUnits.Desktop} ${formFieldBorderRadiusDesktop.right}${formFieldBorderRadiusUnits.Desktop} ${formFieldBorderRadiusDesktop.bottom}${formFieldBorderRadiusUnits.Desktop} ${formFieldBorderRadiusDesktop.left}${formFieldBorderRadiusUnits.Desktop}`;
    const formFieldBorderRadiusTabletWidth = `${formFieldBorderRadiusTablet.top}${formFieldBorderRadiusUnits.Tablet} ${formFieldBorderRadiusTablet.right}${formFieldBorderRadiusUnits.Tablet} ${formFieldBorderRadiusTablet.bottom}${formFieldBorderRadiusUnits.Tablet} ${formFieldBorderRadiusTablet.left}${formFieldBorderRadiusUnits.Tablet}`;
    const formFieldBorderRadiusMobileWidth = `${formFieldBorderRadiusMobile.top}${formFieldBorderRadiusUnits.Mobile} ${formFieldBorderRadiusMobile.right}${formFieldBorderRadiusUnits.Mobile} ${formFieldBorderRadiusMobile.bottom}${formFieldBorderRadiusUnits.Mobile} ${formFieldBorderRadiusMobile.left}${formFieldBorderRadiusUnits.Mobile}`;

    const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
    const buttonTabletBorderWidthStr = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
    const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;

    const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
    const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
    const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;

    const buttonDesktopPaddingStr = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
    const buttonTabletPaddingStr = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
    const buttonMobilePaddingStr = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;

    const buttonDesktopMarginStr = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
    const buttonTabletMarginStr = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
    const buttonMobileMarginStr = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;

    const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
    const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
    const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
    const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tablet}`;
    const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;

    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
    const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
    const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;

    const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
    const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
    const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;

    // Generate ALL block styles with blockID targeting
    const postCommentFormBlockStyle = `
            /* Default styles */
            .${blockID} .fb-post-comment-form {
                margin: 0 auto;
                padding: 0;
            }

            /* Comment Count Title */
            .${blockID} .fb-comment-count-title {
                font-size: 20px;
                margin: 0 0 30px 0;
                color: #1e1e1e;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
            }

            /* Comments List */
                        ${showCommentForm
            ? `
                            .${blockID} .fb-comments-list {
                padding-bottom: 40px;
                            }
                            `
            : ""
        }

            /* Comment Items */
            .${blockID} .fb-comment {
                display: flex;
                gap: 15px;
                padding: 20px 0;
                border-bottom: 1px solid #f0f0f0;
            }

                        .${blockID} .fb-comment.fb-comment-parent:first-child {
                            padding-top: 0;
                        }

            .${blockID} .fb-comment:last-child {
                border-bottom: none;
            }

            /* Avatar */
            .${blockID} .fb-comment-avatar {
                                width: 64px;
                                height: 64px;
                border-radius: 50%;
                flex-shrink: 0;
                                object-fit: cover;
            }

            /* Comment Body */
            .${blockID} .fb-comment-body {
                flex: 1;
            }

            .${blockID} .fb-comment-author {
                display: block;
                font-size: 16px;
                font-weight: 600;
                color: #1e1e1e;
                margin-bottom: 5px;
            }

            .${blockID} .fb-comment-meta {
                display: block;
                font-size: 12px;
                color: #666;
                margin-bottom: 10px;
            }

            .${blockID} .fb-comment-meta a {
                color: #2271b1;
                text-decoration: none;
                margin-left: 10px;
            }

            .${blockID} .fb-comment-meta a:hover {
                text-decoration: underline;
            }

            .${blockID} .fb-comment-content {
                margin: 0 0 10px 0;
                color: #444;
                line-height: 1.6;
                font-size: 18px;
            }

            .${blockID} .fb-comment-reply {
                                display: inline;
                color: #2271b1;
                text-decoration: none;
                font-size: 13px;
                font-weight: 500;
            }

            .${blockID} .fb-comment-reply a {
                text-decoration: none;
                color: #2271b1;
            }

            .${blockID} .fb-comment-reply:hover {
                color: #135e96;
            }

            .${blockID} .fb-comment-reply a:hover {
                text-decoration: underline;
            }

            /* Nested Comments */
            .${blockID} .fb-comment-children {
                margin-left: 30px;
                margin-top: 20px;
                padding-left: 20px;
                border-left: 2px solid #f0f0f0;
            }

            .${blockID} .fb-comment-child {
                border-bottom: 1px solid #f8f8f8;
                padding: 15px 0;
            }

            .${blockID} .fb-comment-child:last-child {
                border-bottom: none;
            }

            .${blockID} .fb-comment-child .fb-comment-avatar {
                width: calc(64px * 0.8);
                height: calc(64px * 0.8);
            }

            /* Comment Form */
            .${blockID} .fb-comment-form {
                background: #f9f9f9;
                padding: 25px;
                border-radius: 8px;
                border: 1px solid #e1e1e1;
            }

            .${blockID} .fb-comment-form-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e1e1e1;
                                }
                                
                        .${blockID} .fb-reply-title {
                                    color: #1e1e1e;
                font-size: 18px;
                font-weight: 600;
                margin: 0;
            }

            .${blockID} .fb-cancel-reply {
                color: #666;
                text-decoration: none;
                font-size: 13px;
            }

            .${blockID} .fb-cancel-reply:hover {
                color: #2271b1;
                text-decoration: underline;
            }

            .${blockID} .fb-logged-in-as{
                margin: 0 0 20px 0;
                padding: 12px 15px;
                background: #e7f3ff;
                border-radius: 4px;
                font-size: 14px;
                border-left: 4px solid #2271b1;
            }

            .${blockID} .fb-logged-in-as a {
                color: #2271b1;
                text-decoration: none;
                font-weight: 500;
            }

            .${blockID} .fb-logged-in-as a:hover {
                text-decoration: underline;
            }

            .${blockID} .fb-comment-form-element .fb-comment-textarea {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                font-family: inherit;
                line-height: 1.4;
                background: #fff;
                resize: vertical;
                min-height: 120px;
                margin-bottom: 15px;
                box-sizing: border-box;
            }

            .${blockID} .fb-comment-form-element div > input{
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 14px;
                font-family: inherit;
                line-height: 1.4;
                background: #fff;
                resize: vertical;
                margin-bottom: 15px;
                box-sizing: border-box;
            }

            .${blockID} .fb-comment-textarea:focus {
                outline: none;
                border-color: #2271b1;
                box-shadow: 0 0 0 1px #2271b1;
            }

            .${blockID} .fb-comment-form-element div > input:focus {
                outline: none;
                border-color: #2271b1;
                box-shadow: 0 0 0 1px #2271b1;
            }

            .${blockID} .fb-post-comment-btn {
                background: #2271b1;
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .${blockID} .fb-post-comment-btn:hover {
                background: #135e96;
            }

                .${blockID} .fb-comment-children {
                    margin-left: 15px;
                    padding-left: 15px;
                }

                .${blockID} .fb-comment-form-header {
                    gap: 10px;
                }

                .${blockID} .fb-comment-form {
                    padding: 20px;
                }
            }

                /*===========================  Desktop Styles ===========================  */

                /** Main Block Style */
                .${blockID} {
                    width: 100%;
                }

                ${showCommentTitle
            ? `
                .${blockID} .fb-comment-count-title {
            ${commentCountTitleColor ? `color: ${commentCountTitleColor};` : ""}

            ${commentCountTitleGlobalTypoSwitcher.fontFamily === true &&
                commentCountTitleGlobalTypographyData.fontFamily
                ? `font-family: ${commentCountTitleGlobalTypographyData.fontFamily};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.fontSize === true &&
                commentCountTitleGlobalTypographyData.fontSize
                ? `font-size: ${commentCountTitleGlobalTypographyData.fontSize};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.fontWeight === true &&
                commentCountTitleGlobalTypographyData.fontWeight
                ? `font-weight: ${commentCountTitleGlobalTypographyData.fontWeight};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.fontStyle === true &&
                commentCountTitleGlobalTypographyData.fontStyle
                ? `font-style: ${commentCountTitleGlobalTypographyData.fontStyle};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.textTransform === true &&
                commentCountTitleGlobalTypographyData.textTransform
                ? `text-transform: ${commentCountTitleGlobalTypographyData.textTransform};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.textDecoration === true &&
                commentCountTitleGlobalTypographyData.textDecoration
                ? `text-decoration: ${commentCountTitleGlobalTypographyData.textDecoration};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.letterSpacing === true &&
                commentCountTitleGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${commentCountTitleGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${commentCountTitleGlobalTypoSwitcher.lineHeight === true &&
                commentCountTitleGlobalTypographyData.lineHeight
                ? `line-height: ${commentCountTitleGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${commentCountTitleGlobalTypoSwitcher.fontFamily === false &&
                commentCountTitleFontFamily
                ? `font-family: ${commentCountTitleFontFamily};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
                commentCountTitleFontSize.Desktop
                ? `font-size: ${commentCountTitleFontSize.Desktop}${commentCountTitleFontSizeUnits.Desktop};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.fontWeight === false &&
                commentCountTitleFontWeight
                ? `font-weight: ${commentCountTitleFontWeight};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.fontStyle === false &&
                commentCountTitleFontStyle
                ? `font-style: ${commentCountTitleFontStyle};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.textTransform === false &&
                commentCountTitleTextTransform
                ? `text-transform: ${commentCountTitleTextTransform};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.textDecoration === false &&
                commentCountTitleTextDecoration
                ? `text-decoration: ${commentCountTitleTextDecoration};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
                commentCountTitleLetterSpacing.Desktop
                ? `letter-spacing: ${commentCountTitleLetterSpacing.Desktop}${commentCountTitleLetterSpacingUnits.Desktop};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
                commentCountTitleLineHeight.Desktop
                ? `line-height: ${commentCountTitleLineHeight.Desktop}${commentCountTitleLineHeightUnits.Desktop};`
                : ""
            }

                        ${commentCountTitleSpacing.Desktop
                ? `margin-bottom: ${commentCountTitleSpacing.Desktop}${commentCountTitleSpacingUnits.Desktop};`
                : ""
            }

            }

            

                .${blockID} .fb-comment-count-title:hover {
                    ${commentCountTitleHoverColor ? `color: ${commentCountTitleHoverColor};` : ""}
                }

                `
            : ""
        }


                    .${blockID} .fb-comments-list {
                        ${commentListBottomSpacing.Desktop
            ? `padding-bottom: ${commentListBottomSpacing.Desktop}${commentListBottomSpacingUnits.Desktop};`
            : ""
        }
                    }

                    .${blockID} .fb-comments-list .fb-comment {
                        ${avatarGap.Desktop
            ? `gap: ${avatarGap.Desktop}${avatarGapUnits.Desktop};`
            : ""
        }
                    }

                .${blockID} .fb-comments-list .fb-comment.fb-comment-parent{
                        ${postCommentPaddingDesktopWidth && postCommentPaddingDesktop.top
            ? `padding: ${postCommentPaddingDesktopWidth};`
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment.fb-comment-child{
                        ${childCommentPaddingDesktopWidth && postCommentPaddingDesktop.top
            ? `padding: ${childCommentPaddingDesktopWidth};`
            : ""
        }

                            ${nestedIndentation.Desktop
            ? `padding-left: ${nestedIndentation.Desktop}${nestedIndentationUnits.Desktop};`
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment .fb-comment-avatar{
                        ${avatarPaddingDesktopWidth && avatarPaddingDesktop.top
            ? `padding: ${avatarPaddingDesktopWidth};`
            : ""
        }

                        ${avatarBorder ? `border: ${avatarBorder};` : ""}
                            ${avatarBorderDesktopWidth && avatarBorderDesktop.top
            ? `border-width: ${avatarBorderDesktopWidth};`
            : ""
        }
                            ${avatarBorderRadiusDesktopWidth && avatarBorderRadiusDesktop.top
            ? `border-radius: ${avatarBorderRadiusDesktopWidth};`
            : ""
        }
                            ${avatarBorderColor ? `border-color: ${avatarBorderColor};` : ""}
                ${avatarBoxShadowCssValue
            ? `box-shadow: ${avatarBoxShadowCssValue};`
            : ""
        }
                        
                }

                .${blockID} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
                        ${avatarSize.Desktop
            ? `width: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
                            height: ${avatarSize.Desktop}${avatarSizeUnits.Desktop};
                            `
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment-child .fb-comment-avatar{
                        ${avatarSize.Desktop
            ? `
                                width: calc(${avatarSize.Desktop}${avatarSizeUnits.Desktop} * 0.8);
                                height: calc(${avatarSize.Desktop}${avatarSizeUnits.Desktop} * 0.8);
                            `
            : ""
        }
                }

                            .${blockID} .fb-comments-list .fb-comment-body .fb-comment-author{

            
            ${authorColor ? `color: ${authorColor};` : ""}

            ${authorGlobalTypoSwitcher.fontFamily === true &&
            authorGlobalTypographyData.fontFamily
            ? `font-family: ${authorGlobalTypographyData.fontFamily};`
            : ""
        }
            ${authorGlobalTypoSwitcher.fontSize === true &&
            authorGlobalTypographyData.fontSize
            ? `font-size: ${authorGlobalTypographyData.fontSize};`
            : ""
        }
            ${authorGlobalTypoSwitcher.fontWeight === true &&
            authorGlobalTypographyData.fontWeight
            ? `font-weight: ${authorGlobalTypographyData.fontWeight};`
            : ""
        }
            ${authorGlobalTypoSwitcher.fontStyle === true &&
            authorGlobalTypographyData.fontStyle
            ? `font-style: ${authorGlobalTypographyData.fontStyle};`
            : ""
        }
            ${authorGlobalTypoSwitcher.textTransform === true &&
            authorGlobalTypographyData.textTransform
            ? `text-transform: ${authorGlobalTypographyData.textTransform};`
            : ""
        }
            ${authorGlobalTypoSwitcher.textDecoration === true &&
            authorGlobalTypographyData.textDecoration
            ? `text-decoration: ${authorGlobalTypographyData.textDecoration};`
            : ""
        }
            ${authorGlobalTypoSwitcher.letterSpacing === true &&
            authorGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${authorGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${authorGlobalTypoSwitcher.lineHeight === true &&
            authorGlobalTypographyData.lineHeight
            ? `line-height: ${authorGlobalTypographyData.lineHeight};`
            : ""
        }

                        ${authorGlobalTypoSwitcher.fontFamily === false && authorFontFamily
            ? `font-family: ${authorFontFamily};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.fontSize === false &&
            authorFontSize.Desktop
            ? `font-size: ${authorFontSize.Desktop}${authorFontSizeUnits.Desktop};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.fontWeight === false && authorFontWeight
            ? `font-weight: ${authorFontWeight};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.fontStyle === false && authorFontStyle
            ? `font-style: ${authorFontStyle};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.textTransform === false &&
            authorTextTransform
            ? `text-transform: ${authorTextTransform};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.textDecoration === false &&
            authorTextDecoration
            ? `text-decoration: ${authorTextDecoration};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.letterSpacing === false &&
            authorLetterSpacing.Desktop
            ? `letter-spacing: ${authorLetterSpacing.Desktop}${authorLetterSpacingUnits.Desktop};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.lineHeight === false &&
            authorLineHeight.Desktop
            ? `line-height: ${authorLineHeight.Desktop}${authorLineHeightUnits.Desktop};`
            : ""
        }
            }

            

                .${blockID} .fb-comments-list .fb-comment-body .fb-comment-author:hover {
                    ${authorHoverColor ? `color: ${authorHoverColor};` : ""}
                }


                    .${blockID} .fb-comments-list .fb-comment-body .fb-comment-meta {

            
            ${commentMetaColor ? `color: ${commentMetaColor};` : ""}

            ${commentMetaGlobalTypoSwitcher.fontFamily === true &&
            commentMetaGlobalTypographyData.fontFamily
            ? `font-family: ${commentMetaGlobalTypographyData.fontFamily};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.fontSize === true &&
            commentMetaGlobalTypographyData.fontSize
            ? `font-size: ${commentMetaGlobalTypographyData.fontSize};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.fontWeight === true &&
            commentMetaGlobalTypographyData.fontWeight
            ? `font-weight: ${commentMetaGlobalTypographyData.fontWeight};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.fontStyle === true &&
            commentMetaGlobalTypographyData.fontStyle
            ? `font-style: ${commentMetaGlobalTypographyData.fontStyle};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.textTransform === true &&
            commentMetaGlobalTypographyData.textTransform
            ? `text-transform: ${commentMetaGlobalTypographyData.textTransform};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.textDecoration === true &&
            commentMetaGlobalTypographyData.textDecoration
            ? `text-decoration: ${commentMetaGlobalTypographyData.textDecoration};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.letterSpacing === true &&
            commentMetaGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${commentMetaGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${commentMetaGlobalTypoSwitcher.lineHeight === true &&
            commentMetaGlobalTypographyData.lineHeight
            ? `line-height: ${commentMetaGlobalTypographyData.lineHeight};`
            : ""
        }

                        ${commentMetaGlobalTypoSwitcher.fontFamily === false &&
            commentMetaFontFamily
            ? `font-family: ${commentMetaFontFamily};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.fontSize === false &&
            commentMetaFontSize.Desktop
            ? `font-size: ${commentMetaFontSize.Desktop}${commentMetaFontSizeUnits.Desktop};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.fontWeight === false &&
            commentMetaFontWeight
            ? `font-weight: ${commentMetaFontWeight};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.fontStyle === false &&
            commentMetaFontStyle
            ? `font-style: ${commentMetaFontStyle};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.textTransform === false &&
            commentMetaTextTransform
            ? `text-transform: ${commentMetaTextTransform};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.textDecoration === false &&
            commentMetaTextDecoration
            ? `text-decoration: ${commentMetaTextDecoration};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.letterSpacing === false &&
            commentMetaLetterSpacing.Desktop
            ? `letter-spacing: ${commentMetaLetterSpacing.Desktop}${commentMetaLetterSpacingUnits.Desktop};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.lineHeight === false &&
            commentMetaLineHeight.Desktop
            ? `line-height: ${commentMetaLineHeight.Desktop}${commentMetaLineHeightUnits.Desktop};`
            : ""
        }
            }

            

                .${blockID} .fb-comments-list .fb-comment-body .fb-comment-meta:hover {
                    ${commentMetaHoverColor ? `color: ${commentMetaHoverColor};` : ""}
                }

                    .${blockID} .fb-comments-list .fb-comment-body .fb-comment-content {
        
            ${messageColor ? `color: ${messageColor};` : ""}

            ${messageGlobalTypoSwitcher.fontFamily === true &&
            messageGlobalTypographyData.fontFamily
            ? `font-family: ${messageGlobalTypographyData.fontFamily};`
            : ""
        }
            ${messageGlobalTypoSwitcher.fontSize === true &&
            messageGlobalTypographyData.fontSize
            ? `font-size: ${messageGlobalTypographyData.fontSize};`
            : ""
        }
            ${messageGlobalTypoSwitcher.fontWeight === true &&
            messageGlobalTypographyData.fontWeight
            ? `font-weight: ${messageGlobalTypographyData.fontWeight};`
            : ""
        }
            ${messageGlobalTypoSwitcher.fontStyle === true &&
            messageGlobalTypographyData.fontStyle
            ? `font-style: ${messageGlobalTypographyData.fontStyle};`
            : ""
        }
            ${messageGlobalTypoSwitcher.textTransform === true &&
            messageGlobalTypographyData.textTransform
            ? `text-transform: ${messageGlobalTypographyData.textTransform};`
            : ""
        }
            ${messageGlobalTypoSwitcher.textDecoration === true &&
            messageGlobalTypographyData.textDecoration
            ? `text-decoration: ${messageGlobalTypographyData.textDecoration};`
            : ""
        }
            ${messageGlobalTypoSwitcher.letterSpacing === true &&
            messageGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${messageGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${messageGlobalTypoSwitcher.lineHeight === true &&
            messageGlobalTypographyData.lineHeight
            ? `line-height: ${messageGlobalTypographyData.lineHeight};`
            : ""
        }

                        ${messageGlobalTypoSwitcher.fontFamily === false &&
            messageFontFamily
            ? `font-family: ${messageFontFamily};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.fontSize === false &&
            messageFontSize.Desktop
            ? `font-size: ${messageFontSize.Desktop}${messageFontSizeUnits.Desktop};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.fontWeight === false &&
            messageFontWeight
            ? `font-weight: ${messageFontWeight};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.fontStyle === false && messageFontStyle
            ? `font-style: ${messageFontStyle};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.textTransform === false &&
            messageTextTransform
            ? `text-transform: ${messageTextTransform};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.textDecoration === false &&
            messageTextDecoration
            ? `text-decoration: ${messageTextDecoration};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.letterSpacing === false &&
            messageLetterSpacing.Desktop
            ? `letter-spacing: ${messageLetterSpacing.Desktop}${messageLetterSpacingUnits.Desktop};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.lineHeight === false &&
            messageLineHeight.Desktop
            ? `line-height: ${messageLineHeight.Desktop}${messageLineHeightUnits.Desktop};`
            : ""
        }
            }

            
            .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply	{
            ${replyButtonGlobalTypoSwitcher.fontFamily === true &&
            replyButtonGlobalTypographyData.fontFamily
            ? `font-family: ${replyButtonGlobalTypographyData.fontFamily};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.fontSize === true &&
            replyButtonGlobalTypographyData.fontSize
            ? `font-size: ${replyButtonGlobalTypographyData.fontSize};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.fontWeight === true &&
            replyButtonGlobalTypographyData.fontWeight
            ? `font-weight: ${replyButtonGlobalTypographyData.fontWeight};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.fontStyle === true &&
            replyButtonGlobalTypographyData.fontStyle
            ? `font-style: ${replyButtonGlobalTypographyData.fontStyle};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.textTransform === true &&
            replyButtonGlobalTypographyData.textTransform
            ? `text-transform: ${replyButtonGlobalTypographyData.textTransform};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.textDecoration === true &&
            replyButtonGlobalTypographyData.textDecoration
            ? `text-decoration: ${replyButtonGlobalTypographyData.textDecoration};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.letterSpacing === true &&
            replyButtonGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${replyButtonGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${replyButtonGlobalTypoSwitcher.lineHeight === true &&
            replyButtonGlobalTypographyData.lineHeight
            ? `line-height: ${replyButtonGlobalTypographyData.lineHeight};`
            : ""
        }

                        ${replyButtonGlobalTypoSwitcher.fontFamily === false &&
            replyButtonFontFamily
            ? `font-family: ${replyButtonFontFamily};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.fontSize === false &&
            replyButtonFontSize.Desktop
            ? `font-size: ${replyButtonFontSize.Desktop}${replyButtonFontSizeUnits.Desktop};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.fontWeight === false &&
            replyButtonFontWeight
            ? `font-weight: ${replyButtonFontWeight};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.fontStyle === false &&
            replyButtonFontStyle
            ? `font-style: ${replyButtonFontStyle};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.textTransform === false &&
            replyButtonTextTransform
            ? `text-transform: ${replyButtonTextTransform};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.textDecoration === false &&
            replyButtonTextDecoration
            ? `text-decoration: ${replyButtonTextDecoration};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.letterSpacing === false &&
            replyButtonLetterSpacing.Desktop
            ? `letter-spacing: ${replyButtonLetterSpacing.Desktop}${replyButtonLetterSpacingUnits.Desktop};`
            : ""
        }

                        ${replyButtonGlobalTypoSwitcher.lineHeight === false &&
            replyButtonLineHeight.Desktop
            ? `line-height: ${replyButtonLineHeight.Desktop}${replyButtonLineHeightUnits.Desktop};`
            : ""
        }

                                        ${replyButtonNormalBackgroundType === "gradient"
            ? `
                                    ${replyButtonNormalCustomGradientSwitcher &&
                replyButtonNormalCustomGradientInputValue
                ? `background: ${replyButtonNormalCustomGradientInputValue};`
                : `background: ${replyButtonNormalGradientColor};`
            }
                                `
            : `
                                    ${replyButtonNormalClassicColor
                ? `background: ${replyButtonNormalClassicColor};`
                : ""
            }
                            `
        }

                                
                                            ${replyButtonPaddingDesktopWidth &&
            replyButtonPaddingDesktop.top
            ? `padding: ${replyButtonPaddingDesktopWidth};`
            : ""
        }

                            ${replyButtonBorder ? `border: ${replyButtonBorder};` : ""}
                            ${replyButtonBorderDesktopWidth && replyButtonBorderDesktop.top
            ? `border-width: ${replyButtonBorderDesktopWidth};`
            : ""
        }
                            ${replyButtonBorderRadiusDesktopWidth &&
            replyButtonBorderRadiusDesktop.top
            ? `border-radius: ${replyButtonBorderRadiusDesktopWidth};`
            : ""
        }
                            ${replyButtonBorderColor ? `border-color: ${replyButtonBorderColor};` : ""}
                ${replyButtonBoxShadowCssValue
            ? `box-shadow: ${replyButtonBoxShadowCssValue};`
            : ""
        }

            }

            .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply a{
                        ${replyButtonColor ? `color: ${replyButtonColor};` : ""}
            }
            

                .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply:hover {
                            ${replyButtonHoverColor ? `color: ${replyButtonHoverColor};` : ""}
                            ${replyButtonHoverBackgroundType === "gradient"
            ? `  
                            ${replyButtonHoverCustomGradientSwitcher &&
                replyButtonHoverCustomGradientInputValue
                ? `background: ${replyButtonHoverCustomGradientInputValue};`
                : `background: ${replyButtonHoverGradientColor};`
            }
                            `
            : `
                                    ${replyButtonHoverClassicColor
                ? `background: ${replyButtonHoverClassicColor};`
                : ""
            }
                            `
        }
                            ${replyButtonBorderHoverColor
            ? `border-color: ${replyButtonBorderHoverColor};`
            : ""
        }
                ${replyButtonBoxShadowHoverCssValue
            ? `box-shadow: ${replyButtonBoxShadowHoverCssValue};`
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply a:hover{
                            ${replyButtonHoverColor ? `color: ${replyButtonHoverColor};` : ""}
                }

                /** comment form */ 
                                ${showCommentForm
            ? `

                    .${blockID} .fb-comment-form	{

                                        ${commentFormNormalBackgroundType === "gradient"
                ? `
                                    ${commentFormNormalCustomGradientSwitcher &&
                    commentFormNormalCustomGradientInputValue
                    ? `background: ${commentFormNormalCustomGradientInputValue};`
                    : `background: ${commentFormNormalGradientColor};`
                }
                                `
                : `
                                    ${commentFormNormalClassicColor
                    ? `background: ${commentFormNormalClassicColor};`
                    : ""
                }
                            `
            }

                                
                                            ${commentFormPaddingDesktopWidth &&
                commentFormPaddingDesktop.top
                ? `padding: ${commentFormPaddingDesktopWidth};`
                : ""
            }

                            ${commentFormBorder ? `border: ${commentFormBorder};` : ""}
                            ${commentFormBorderColor ? `border-color: ${commentFormBorderColor};` : ""}
                            ${commentFormBorderDesktopWidth && commentFormBorderDesktop.top
                ? `border-width: ${commentFormBorderDesktopWidth};`
                : ""
            }
                            ${commentFormBorderRadiusDesktopWidth &&
                commentFormBorderRadiusDesktop.top
                ? `border-radius: ${commentFormBorderRadiusDesktopWidth};`
                : ""
            }
                ${commentFormBoxShadowCssValue
                ? `box-shadow: ${commentFormBoxShadowCssValue};`
                : ""
            }

            }
            

                .${blockID} .fb-comment-form:hover {
                            ${commentFormHoverBackgroundType === "gradient"
                ? `  
                            ${commentFormHoverCustomGradientSwitcher &&
                    commentFormHoverCustomGradientInputValue
                    ? `background: ${commentFormHoverCustomGradientInputValue};`
                    : `background: ${commentFormHoverGradientColor};`
                }
                            `
                : `
                                    ${commentFormHoverClassicColor
                    ? `background: ${commentFormHoverClassicColor};`
                    : ""
                }
                            `
            }
                        
                }

                    
                    .${blockID} .fb-comment-form .fb-comment-form-header {
                                        ${formTitleSpacing.Desktop
                ? `margin-bottom: ${formTitleSpacing.Desktop}${formTitleSpacingUnits.Desktop};`
                : ""
            }
                    }

                                        .${blockID} .fb-comment-form .fb-comment-form-header .fb-reply-title {
            ${formTitleColor ? `color: ${formTitleColor};` : ""}


            ${formTitleGlobalTypoSwitcher.fontFamily === true &&
                formTitleGlobalTypographyData.fontFamily
                ? `font-family: ${formTitleGlobalTypographyData.fontFamily};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.fontSize === true &&
                formTitleGlobalTypographyData.fontSize
                ? `font-size: ${formTitleGlobalTypographyData.fontSize};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.fontWeight === true &&
                formTitleGlobalTypographyData.fontWeight
                ? `font-weight: ${formTitleGlobalTypographyData.fontWeight};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.fontStyle === true &&
                formTitleGlobalTypographyData.fontStyle
                ? `font-style: ${formTitleGlobalTypographyData.fontStyle};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.textTransform === true &&
                formTitleGlobalTypographyData.textTransform
                ? `text-transform: ${formTitleGlobalTypographyData.textTransform};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.textDecoration === true &&
                formTitleGlobalTypographyData.textDecoration
                ? `text-decoration: ${formTitleGlobalTypographyData.textDecoration};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.letterSpacing === true &&
                formTitleGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${formTitleGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${formTitleGlobalTypoSwitcher.lineHeight === true &&
                formTitleGlobalTypographyData.lineHeight
                ? `line-height: ${formTitleGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${formTitleGlobalTypoSwitcher.fontFamily === false &&
                formTitleFontFamily
                ? `font-family: ${formTitleFontFamily};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.fontSize === false &&
                formTitleFontSize.Desktop
                ? `font-size: ${formTitleFontSize.Desktop}${formTitleFontSizeUnits.Desktop};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.fontWeight === false &&
                formTitleFontWeight
                ? `font-weight: ${formTitleFontWeight};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.fontStyle === false &&
                formTitleFontStyle
                ? `font-style: ${formTitleFontStyle};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.textTransform === false &&
                formTitleTextTransform
                ? `text-transform: ${formTitleTextTransform};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.textDecoration === false &&
                formTitleTextDecoration
                ? `text-decoration: ${formTitleTextDecoration};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.letterSpacing === false &&
                formTitleLetterSpacing.Desktop
                ? `letter-spacing: ${formTitleLetterSpacing.Desktop}${formTitleLetterSpacingUnits.Desktop};`
                : ""
            }
                        ${formTitleGlobalTypoSwitcher.lineHeight === false &&
                formTitleLineHeight.Desktop
                ? `line-height: ${formTitleLineHeight.Desktop}${formTitleLineHeightUnits.Desktop};`
                : ""
            }

            }

                            .${blockID} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
            ${cancelReplyColor ? `color: ${cancelReplyColor};` : ""}


            ${cancelReplyGlobalTypoSwitcher.fontFamily === true &&
                cancelReplyGlobalTypographyData.fontFamily
                ? `font-family: ${cancelReplyGlobalTypographyData.fontFamily};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.fontSize === true &&
                cancelReplyGlobalTypographyData.fontSize
                ? `font-size: ${cancelReplyGlobalTypographyData.fontSize};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.fontWeight === true &&
                cancelReplyGlobalTypographyData.fontWeight
                ? `font-weight: ${cancelReplyGlobalTypographyData.fontWeight};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.fontStyle === true &&
                cancelReplyGlobalTypographyData.fontStyle
                ? `font-style: ${cancelReplyGlobalTypographyData.fontStyle};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.textTransform === true &&
                cancelReplyGlobalTypographyData.textTransform
                ? `text-transform: ${cancelReplyGlobalTypographyData.textTransform};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.textDecoration === true &&
                cancelReplyGlobalTypographyData.textDecoration
                ? `text-decoration: ${cancelReplyGlobalTypographyData.textDecoration};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.letterSpacing === true &&
                cancelReplyGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${cancelReplyGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${cancelReplyGlobalTypoSwitcher.lineHeight === true &&
                cancelReplyGlobalTypographyData.lineHeight
                ? `line-height: ${cancelReplyGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${cancelReplyGlobalTypoSwitcher.fontFamily === false &&
                cancelReplyFontFamily
                ? `font-family: ${cancelReplyFontFamily};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.fontSize === false &&
                cancelReplyFontSize.Desktop
                ? `font-size: ${cancelReplyFontSize.Desktop}${cancelReplyFontSizeUnits.Desktop};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.fontWeight === false &&
                cancelReplyFontWeight
                ? `font-weight: ${cancelReplyFontWeight};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.fontStyle === false &&
                cancelReplyFontStyle
                ? `font-style: ${cancelReplyFontStyle};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.textTransform === false &&
                cancelReplyTextTransform
                ? `text-transform: ${cancelReplyTextTransform};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.textDecoration === false &&
                cancelReplyTextDecoration
                ? `text-decoration: ${cancelReplyTextDecoration};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
                cancelReplyLetterSpacing.Desktop
                ? `letter-spacing: ${cancelReplyLetterSpacing.Desktop}${cancelReplyLetterSpacingUnits.Desktop};`
                : ""
            }
                        ${cancelReplyGlobalTypoSwitcher.lineHeight === false &&
                cancelReplyLineHeight.Desktop
                ? `line-height: ${cancelReplyLineHeight.Desktop}${cancelReplyLineHeightUnits.Desktop};`
                : ""
            }

            }

                .${blockID} .fb-comment-form .fb-comment-form-header .fb-cancel-reply:hover{
                            ${cancelReplyHoverColor ? `color: ${cancelReplyHoverColor};` : ""}
                }

                    
                    `
            : ""
        }

                                ${showCommentForm
            ? `
                .${blockID} .fb-comment-form .fb-logged-in-as {
            ${loggedInTextColor ? `color: ${loggedInTextColor};` : ""}

            ${loggedInTextGlobalTypoSwitcher.fontFamily === true &&
                loggedInTextGlobalTypographyData.fontFamily
                ? `font-family: ${loggedInTextGlobalTypographyData.fontFamily};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.fontSize === true &&
                loggedInTextGlobalTypographyData.fontSize
                ? `font-size: ${loggedInTextGlobalTypographyData.fontSize};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.fontWeight === true &&
                loggedInTextGlobalTypographyData.fontWeight
                ? `font-weight: ${loggedInTextGlobalTypographyData.fontWeight};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.fontStyle === true &&
                loggedInTextGlobalTypographyData.fontStyle
                ? `font-style: ${loggedInTextGlobalTypographyData.fontStyle};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.textTransform === true &&
                loggedInTextGlobalTypographyData.textTransform
                ? `text-transform: ${loggedInTextGlobalTypographyData.textTransform};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.textDecoration === true &&
                loggedInTextGlobalTypographyData.textDecoration
                ? `text-decoration: ${loggedInTextGlobalTypographyData.textDecoration};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.letterSpacing === true &&
                loggedInTextGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${loggedInTextGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${loggedInTextGlobalTypoSwitcher.lineHeight === true &&
                loggedInTextGlobalTypographyData.lineHeight
                ? `line-height: ${loggedInTextGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${loggedInTextGlobalTypoSwitcher.fontFamily === false &&
                loggedInTextFontFamily
                ? `font-family: ${loggedInTextFontFamily};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.fontSize === false &&
                loggedInTextFontSize.Desktop
                ? `font-size: ${loggedInTextFontSize.Desktop}${loggedInTextFontSizeUnits.Desktop};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.fontWeight === false &&
                loggedInTextFontWeight
                ? `font-weight: ${loggedInTextFontWeight};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.fontStyle === false &&
                loggedInTextFontStyle
                ? `font-style: ${loggedInTextFontStyle};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.textTransform === false &&
                loggedInTextTextDecoration
                ? `text-transform: ${loggedInTextTextTransform};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.textDecoration === false &&
                loggedInTextTextDecoration
                ? `text-decoration: ${loggedInTextTextDecoration};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
                loggedInTextLetterSpacing.Desktop
                ? `letter-spacing: ${loggedInTextLetterSpacing.Desktop}${loggedInTextLetterSpacingUnits.Desktop};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.lineHeight === false &&
                loggedInTextLineHeight.Desktop
                ? `line-height: ${loggedInTextLineHeight.Desktop}${loggedInTextLineHeightUnits.Desktop};`
                : ""
            }

                                ${formInfoPaddingDesktopWidth &&
                formInfoPaddingDesktop.top
                ? `padding: ${formInfoPaddingDesktopWidth};`
                : ""
            }


                                                                        ${formInfoBorder ? `border: ${formInfoBorder};` : ""}
                            ${formInfoBorderColor ? `border-color: ${formInfoBorderColor};` : ""}
                            ${formInfoBorderDesktopWidth && formInfoBorderDesktop.top
                ? `border-width: ${formInfoBorderDesktopWidth};`
                : ""
            }



                                                ${formInfoBorderRadiusDesktopWidth &&
                formInfoBorderRadiusDesktop.top
                ? `border-radius: ${formInfoBorderRadiusDesktopWidth};`
                : ""
            }

                        ${formInfoSpacing.Desktop
                ? `margin-bottom: ${formInfoSpacing.Desktop}${formInfoSpacingUnits.Desktop};`
                : ""
            }


                                                                ${formInfoNormalBackgroundType === "gradient"
                ? `
                                    ${formInfoNormalCustomGradientSwitcher &&
                    formInfoNormalCustomGradientInputValue
                    ? `background: ${formInfoNormalCustomGradientInputValue};`
                    : `background: ${formInfoNormalGradientColor};`
                }
                                `
                : `
                                    ${formInfoNormalClassicColor
                    ? `background: ${formInfoNormalClassicColor};`
                    : ""
                }
                            `
            }

                                

                        

            }

            

                .${blockID} .fb-comment-form  .fb-logged-in-as:hover {
                    ${loggedInTextHoverColor ? `color: ${loggedInTextHoverColor};` : ""}

                                                ${formInfoHoverBackgroundType === "gradient"
                ? `  
                            ${formInfoHoverCustomGradientSwitcher &&
                    formInfoHoverCustomGradientInputValue
                    ? `background: ${formInfoHoverCustomGradientInputValue};`
                    : `background: ${formInfoHoverGradientColor};`
                }
                            `
                : `
                                    ${formInfoHoverClassicColor ? `background: ${formInfoHoverClassicColor};` : ""}
                            `
            }
                }

                .${blockID} .fb-comment-form .fb-logged-is-as a:hover {
                        ${loggedInLinkHoverColor ? `color : ${loggedInLinkHoverColor};` : ""}
                }


                
                .${blockID} .fb-comment-form .fb-comment-form-element div>input::placeholder , 
                .${blockID} .fb-comment-form .fb-comment-form-element .fb-comment-textarea::placeholder{
                            ${formFieldPlaceholderColor ? `color: ${formFieldPlaceholderColor};` : ""}
                }

                .${blockID} .fb-comment-form .fb-comment-form-element div>input , 
                .${blockID} .fb-comment-form .fb-comment-form-element .fb-comment-textarea {
                


            ${formFieldColor ? `color: ${formFieldColor};` : ""}


            ${formFieldGlobalTypoSwitcher.fontFamily === true &&
                formFieldGlobalTypographyData.fontFamily
                ? `font-family: ${formFieldGlobalTypographyData.fontFamily};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.fontSize === true &&
                formFieldGlobalTypographyData.fontSize
                ? `font-size: ${formFieldGlobalTypographyData.fontSize};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.fontWeight === true &&
                formFieldGlobalTypographyData.fontWeight
                ? `font-weight: ${formFieldGlobalTypographyData.fontWeight};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.fontStyle === true &&
                formFieldGlobalTypographyData.fontStyle
                ? `font-style: ${formFieldGlobalTypographyData.fontStyle};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.textTransform === true &&
                formFieldGlobalTypographyData.textTransform
                ? `text-transform: ${formFieldGlobalTypographyData.textTransform};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.textDecoration === true &&
                formFieldGlobalTypographyData.textDecoration
                ? `text-decoration: ${formFieldGlobalTypographyData.textDecoration};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.letterSpacing === true &&
                formFieldGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${formFieldGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${formFieldGlobalTypoSwitcher.lineHeight === true &&
                formFieldGlobalTypographyData.lineHeight
                ? `line-height: ${formFieldGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${formFieldGlobalTypoSwitcher.fontFamily === false &&
                formFieldFontFamily
                ? `font-family: ${formFieldFontFamily};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.fontSize === false &&
                formFieldFontSize.Desktop
                ? `font-size: ${formFieldFontSize.Desktop}${formFieldFontSizeUnits.Desktop};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.fontWeight === false &&
                formFieldFontWeight
                ? `font-weight: ${formFieldFontWeight};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.fontStyle === false &&
                formFieldFontStyle
                ? `font-style: ${formFieldFontStyle};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.textTransform === false &&
                formFieldTextTransform
                ? `text-transform: ${formFieldTextTransform};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.textDecoration === false &&
                formFieldTextDecoration
                ? `text-decoration: ${formFieldTextDecoration};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.letterSpacing === false &&
                formFieldLetterSpacing.Desktop
                ? `letter-spacing: ${formFieldLetterSpacing.Desktop}${formFieldLetterSpacingUnits.Desktop};`
                : ""
            }

                        ${formFieldGlobalTypoSwitcher.lineHeight === false &&
                formFieldLineHeight.Desktop
                ? `line-height: ${formFieldLineHeight.Desktop}${formFieldLineHeightUnits.Desktop};`
                : ""
            }

                                        ${formFieldNormalBackgroundType === "gradient"
                ? `
                                    ${formFieldNormalCustomGradientSwitcher &&
                    formFieldNormalCustomGradientInputValue
                    ? `background: ${formFieldNormalCustomGradientInputValue};`
                    : `background: ${formFieldNormalGradientColor};`
                }
                                `
                : `
                                    ${formFieldNormalClassicColor
                    ? `background: ${formFieldNormalClassicColor};`
                    : ""
                }
                            `
            }

                                
                                            ${formFieldPaddingDesktopWidth &&
                formFieldPaddingDesktop.top
                ? `padding: ${formFieldPaddingDesktopWidth};`
                : ""
            }

                            ${formFieldBorder ? `border: ${formFieldBorder};` : ""}
                            ${formFieldBorderDesktopWidth && formFieldBorderDesktop.top
                ? `border-width: ${formFieldBorderDesktopWidth};`
                : ""
            }
                            ${formFieldBorderRadiusDesktopWidth &&
                formFieldBorderRadiusDesktop.top
                ? `border-radius: ${formFieldBorderRadiusDesktopWidth};`
                : ""
            }
                            ${formFieldBorderColor ? `border-color: ${formFieldBorderColor};` : ""}


                }


                                                .${blockID} .fb-comment-form .fb-comment-form-element div>input:focus , 
                .${blockID} .fb-comment-form .fb-comment-form-element .fb-comment-textarea:focus {
                                ${formFieldHoverColor ? `color: ${formFieldHoverColor};` : ""}
                            ${formFieldHoverBackgroundType === "gradient"
                ? `  
                            ${formFieldHoverCustomGradientSwitcher &&
                    formFieldHoverCustomGradientInputValue
                    ? `background: ${formFieldHoverCustomGradientInputValue};`
                    : `background: ${formFieldHoverGradientColor};`
                }
                            `
                : `
                                    ${formFieldHoverClassicColor
                    ? `background: ${formFieldHoverClassicColor};`
                    : ""
                }
                            `
            }
                            ${formFieldBorderHoverColor
                ? `border-color: ${formFieldBorderHoverColor};`
                : ""
            }

                }


                            .${blockID} .fb-comment-form .fb-comment-form-element .form-submit .fb-post-comment-btn{
                                    ${buttonWidth.Desktop && buttonWidthUnits.Desktop
                ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontFamily === true &&
                buttonGlobalTypographyData.fontFamily
                ? `font-family: ${buttonGlobalTypographyData.fontFamily};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontSize === true &&
                buttonGlobalTypographyData.fontSize
                ? `font-size: ${buttonGlobalTypographyData.fontSize};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontWeight === true &&
                buttonGlobalTypographyData.fontWeight
                ? `font-weight: ${buttonGlobalTypographyData.fontWeight};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontStyle === true &&
                buttonGlobalTypographyData.fontStyle
                ? `font-style: ${buttonGlobalTypographyData.fontStyle};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.textTransform === true &&
                buttonGlobalTypographyData.textTransform
                ? `text-transform: ${buttonGlobalTypographyData.textTransform};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.textDecoration === true &&
                buttonGlobalTypographyData.textDecoration
                ? `text-decoration: ${buttonGlobalTypographyData.textDecoration};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.letterSpacing === true &&
                buttonGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${buttonGlobalTypographyData.letterSpacing};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.lineHeight === true &&
                buttonGlobalTypographyData.lineHeight
                ? `line-height: ${buttonGlobalTypographyData.lineHeight};`
                : ""
            }
                        
                        ${buttonGlobalTypoSwitcher.fontFamily === false &&
                buttonFontFamily &&
                buttonFontFamily !== "Default"
                ? `font-family: ${buttonFontFamily};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontSize === false &&
                buttonFontSize.Desktop &&
                buttonFontSizeUnits.Desktop
                ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontWeight === false && buttonFontWeight
                ? `font-weight: ${buttonFontWeight};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.fontStyle === false && buttonFontStyle
                ? `font-style: ${buttonFontStyle};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.textTransform === false &&
                buttonTextTransform
                ? `text-transform: ${buttonTextTransform};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.textDecoration === false &&
                buttonTextDecoration
                ? `text-decoration: ${buttonTextDecoration};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.letterSpacing === false &&
                buttonLetterSpacing.Desktop &&
                buttonLetterSpacingUnits.Desktop
                ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};`
                : ""
            }
                        ${buttonGlobalTypoSwitcher.lineHeight === false &&
                buttonLineHeight.Desktop &&
                buttonLineHeightUnits.Desktop
                ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};`
                : ""
            }

                        ${buttonColor ? `color: ${buttonColor};` : ""}

                        ${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}

                        ${buttonBorder ? `border: ${buttonBorder};` : ""}
                        ${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top
                ? `border-width: ${buttonDesktopBorderWidthStr};`
                : ""
            }
                        ${buttonDesktopBorderRadiusStr &&
                buttonDesktopBorderRadiusWidth?.top
                ? `border-radius: ${buttonDesktopBorderRadiusStr};`
                : ""
            }
                        ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ""}
                        ${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ""} 
                        ${buttonDesktopPaddingStr && buttonDesktopPadding?.top
                ? `padding: ${buttonDesktopPaddingStr};`
                : ""
            }

                        ${buttonDesktopMarginStr && buttonDesktopMargin?.top
                ? `margin: ${buttonDesktopMarginStr};`
                : ""
            }

                            transition: all 0.3s ease;
                    }

                    .${blockID} .fb-comment-form .fb-comment-form-element .form-submit .fb-post-comment-btn:hover{
                        ${buttonHoverColor ? `color: ${buttonHoverColor};` : ""}
                        ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
                        ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ""}
                        ${buttonBoxShadowHoverCssValue
                ? `box-shadow: ${buttonBoxShadowHoverCssValue};`
                : ""
            }
                    }
                
                `
            : ""
        }

                /* Advance Control Global Style */
                .${blockID}.fb-post-comment-form-block{
                ${postGlobalPositionType === "default" ? `position: relative;` : ""}
            ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative"
            ? `width: 100%;`
            : ""
        }
            ${postGlobalPositionType !== "default"
            ? `position: ${postGlobalPositionType};`
            : ""
        }
            ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "left" &&
            postGlobalHZLeftOffset.Desktop !== undefined
            ? `left: ${postGlobalHZLeftOffset.Desktop}${postGlobalHZLeftOffsetUnits.Desktop};`
            : ""
        }
            ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "right" &&
            postGlobalHZRightOffset.Desktop !== undefined
            ? `right: ${postGlobalHZRightOffset.Desktop}${postGlobalHZRightOffsetUnits.Desktop};`
            : ""
        }
            ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "top" &&
            postGlobalVRTopOffset.Desktop !== undefined
            ? `top: ${postGlobalVRTopOffset.Desktop}${postGlobalVRTopOffsetUnits.Desktop};`
            : ""
        }
            ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "bottom" &&
            postGlobalVRBottomOffset.Desktop !== undefined
            ? `bottom: ${postGlobalVRBottomOffset.Desktop}${postGlobalVRBottomOffsetUnits.Desktop};`
            : ""
        }


                    ${postGlobalZIndex.Desktop ? `z-index: ${postGlobalZIndex.Desktop};` : ""}
                    ${postGlobalOverflow !== "default"
            ? `overflow: ${postGlobalOverflow};`
            : ""
        }
                                        transition: all 0.3s ease-in-out;				
                    }



                    .${blockID}.fb-post-comment-form-block .fb-post-comment-form{
                    ${postGlobalDesktopPaddingWidth &&
            postGlobalPaddingDesktop.top
            ? `padding: ${postGlobalDesktopPaddingWidth};`
            : ""
        }
                                ${postGlobalDesktopMarginWidth &&
            postGlobalMarginDesktop.top
            ? `margin: ${postGlobalDesktopMarginWidth};`
            : ""
        }

                    ${postGlobalNormalBackgroundType === "gradient"
            ? `  
                        ${postGlobalNormalCustomGradientSwitcher &&
                postGlobalNormalCustomGradientInputValue
                ? `background: ${postGlobalNormalCustomGradientInputValue};`
                : `background: ${postGlobalNormalGradientColor};`
            }
                    `
            : `
                        ${postGlobalNormalClassicColor
                ? `background: ${postGlobalNormalClassicColor};`
                : ""
            }
                    `
        }

                    ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 

                    ${postGlobalDesktopBorderWidth &&
            postGlobalBorderDesktop.top
            ? `border-width: ${postGlobalDesktopBorderWidth};`
            : ""
        }
                    ${postGlobalDesktopBorderRadiusWidth &&
            postGlobalBorderRadiusDesktop.top
            ? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
            : ""
        }
                    ${postGlobalBorderColor
            ? `border-color: ${postGlobalBorderColor};`
            : ""
        }
                    ${postGlobalBoxShadowCssValue
            ? `box-shadow: ${postGlobalBoxShadowCssValue} !important;`
            : ""
        }
                                ${postGlobalNormalBackgroundType === "gradient"
            ? `  
                        ${postGlobalNormalCustomGradientSwitcher &&
                postGlobalNormalCustomGradientInputValue
                ? `background: ${postGlobalNormalCustomGradientInputValue};`
                : `background: ${postGlobalNormalGradientColor};`
            }
                    `
            : `
                        ${postGlobalNormalClassicColor
                ? `background: ${postGlobalNormalClassicColor};`
                : ""
            }
                    `
        }

                }

                .${blockID}.fb-post-comment-form-block .fb-post-comment-form:hover {
                        ${postGlobalHoverBackgroundType === "gradient"
            ? `  
                        ${postGlobalHoverCustomGradientSwitcher &&
                postGlobalHoverCustomGradientInputValue
                ? `background: ${postGlobalHoverCustomGradientInputValue};`
                : `background: ${postGlobalHoverGradientColor};`
            }
                    `
            : `
                        ${postGlobalHoverClassicColor
                ? `background: ${postGlobalHoverClassicColor};`
                : ""
            }

                            ${postGlobalBorderHoverColor
                ? `border-color: ${postGlobalBorderHoverColor};`
                : ""
            }
                        ${postGlobalBoxShadowHoverCssValue
                ? `box-shadow: ${postGlobalBoxShadowHoverCssValue}!important;`
                : ""
            }
                    
                    `
        }
                }


                /*=======================  Tablet Styles =====================  */
                @media only screen and (max-width: 1024px ) {

                    ${showCommentTitle
            ? `
                            .${blockID} .fb-comment-count-title  {
                                ${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
                commentCountTitleFontSize.Tablet
                ? `font-size: ${commentCountTitleFontSize.Tablet}${commentCountTitleFontSizeUnits.Tablet};`
                : ""
            }
                ${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
                commentCountTitleLetterSpacing.Tablet
                ? `letter-spacing: ${commentCountTitleLetterSpacing.Tablet}${commentCountTitleLetterSpacingUnits.Tablet};`
                : ""
            }
                ${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
                commentCountTitleLineHeight.Tablet
                ? `line-height: ${commentCountTitleLineHeight.Tablet}${commentCountTitleLineHeightUnits.Tablet};`
                : ""
            }

                                    ${commentCountTitleSpacing.Tablet
                ? `margin-bottom: ${commentCountTitleSpacing.Tablet}${commentCountTitleSpacingUnits.Tablet};`
                : ""
            }

                        }
                                    `
            : ""
        }

                                            .${blockID} .fb-comments-list {
                        ${commentListBottomSpacing.Tablet
            ? `padding-bottom: ${commentListBottomSpacing.Tablet}${commentListBottomSpacingUnits.Tablet};`
            : ""
        }
                    }

                        .${blockID} .fb-comments-list .fb-comment{
                                ${postCommentPaddingTabletWidth &&
            postCommentPaddingTablet.top
            ? `padding : ${postCommentPaddingTabletWidth};`
            : ""
        }

                                ${avatarGap.Tablet ? `gap: ${avatarGap.Tablet}${avatarGapUnits.Tablet};` : ""}
                        }

                        .${blockID} .fb-comments-list .fb-comment.fb-comment-child{
                                ${childCommentPaddingTabletWidth &&
            postCommentPaddingTablet.top
            ? `padding : ${childCommentPaddingTabletWidth};`
            : ""
        }

                                                            ${nestedIndentation.Tablet
            ? `padding-left: ${nestedIndentation.Tablet}${nestedIndentationUnits.Tablet}`
            : ""
        }
                        }	

                                        .${blockID} .fb-comments-list .fb-comment .fb-comment-avatar{
                        ${avatarPaddingTabletWidth && avatarPaddingTablet.top
            ? `padding: ${avatarPaddingTabletWidth};`
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment .fb-comment-avatar{
                            ${avatarPaddingTabletWidth && avatarPaddingTablet.top
            ? `padding: ${avatarPaddingTabletWidth};`
            : ""
        }
                                    ${avatarBorderTabletWidth && avatarBorderTablet.top
            ? `border-width: ${avatarBorderTabletWidth};`
            : ""
        }
                ${avatarBorderRadiusTabletWidth && avatarBorderRadiusTablet.top
            ? `border-radius: ${avatarBorderRadiusTabletWidth};`
            : ""
        }
                }

                
                .${blockID} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
                        ${avatarSize.Tablet
            ? `width: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
                            height: ${avatarSize.Tablet}${avatarSizeUnits.Tablet};
                            `
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment-child .fb-comment-avatar{
                        ${avatarSize.Tablet
            ? `
                                width: calc(${avatarSize.Tablet}${avatarSizeUnits.Tablet} * 0.8);
                                height: calc(${avatarSize.Tablet}${avatarSizeUnits.Tablet} * 0.8);
                            `
            : ""
        }
                }

                ${blockID} .fb-comments-list .fb-comment-body .fb-comment-author {
                                ${authorGlobalTypoSwitcher.fontSize === false &&
            authorFontSize.Tablet
            ? `font-size: ${authorFontSize.Tablet}${authorFontSizeUnits.Tablet};`
            : ""
        }
                ${authorGlobalTypoSwitcher.letterSpacing === false &&
            authorLetterSpacing.Tablet
            ? `letter-spacing: ${authorLetterSpacing.Tablet}${authorLetterSpacingUnits.Tablet};`
            : ""
        }
                ${authorGlobalTypoSwitcher.lineHeight === false &&
            authorLineHeight.Tablet
            ? `line-height: ${authorLineHeight.Tablet}${authorLineHeightUnits.Tablet};`
            : ""
        }
                        }

                        ${blockID} .fb-comments-list .fb-comment-body .fb-comment-meta {
                            ${commentMetaGlobalTypoSwitcher.fontSize === false &&
            commentMetaFontSize.Tablet
            ? `font-size: ${commentMetaFontSize.Tablet}${commentMetaFontSizeUnits.Tablet};`
            : ""
        }
                ${commentMetaGlobalTypoSwitcher.letterSpacing === false &&
            commentMetaLetterSpacing.Tablet
            ? `letter-spacing: ${commentMetaLetterSpacing.Tablet}${commentMetaLetterSpacingUnits.Tablet};`
            : ""
        }
                ${commentMetaGlobalTypoSwitcher.lineHeight === false &&
            commentMetaLineHeight.Tablet
            ? `line-height: ${commentMetaLineHeight.Tablet}${commentMetaLineHeightUnits.Tablet};`
            : ""
        }
                        }

                            .${blockID} .fb-comments-list .fb-comment-body .fb-comment-content {
                                ${messageGlobalTypoSwitcher.fontSize === false &&
            messageFontSize.Tablet
            ? `font-size: ${messageFontSize.Tablet}${messageFontSizeUnits.Tablet};`
            : ""
        }
                ${messageGlobalTypoSwitcher.letterSpacing === false &&
            messageLetterSpacing.Tablet
            ? `letter-spacing: ${messageLetterSpacing.Tablet}${messageLetterSpacingUnits.Tablet};`
            : ""
        }
                ${messageGlobalTypoSwitcher.lineHeight === false &&
            messageLineHeight.Tablet
            ? `line-height: ${messageLineHeight.Tablet}${messageLineHeightUnits.Tablet};`
            : ""
        }
                        }

                            .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply {
                                ${replyButtonGlobalTypoSwitcher.fontSize === false &&
            replyButtonFontSize.Tablet
            ? `font-size: ${replyButtonFontSize.Tablet}${replyButtonFontSizeUnits.Tablet};`
            : ""
        }
                ${replyButtonGlobalTypoSwitcher.letterSpacing === false &&
            replyButtonLetterSpacing.Tablet
            ? `letter-spacing: ${replyButtonLetterSpacing.Tablet}${replyButtonLetterSpacingUnits.Tablet};`
            : ""
        }
                ${replyButtonGlobalTypoSwitcher.lineHeight === false &&
            replyButtonLineHeight.Tablet
            ? `line-height: ${replyButtonLineHeight.Tablet}${replyButtonLineHeightUnits.Tablet};`
            : ""
        }

                                    ${replyButtonPaddingTabletWidth &&
            replyButtonPaddingTablet.top
            ? `padding: ${replyButtonPaddingTabletWidth};`
            : ""
        }
                                    ${replyButtonBorderTabletWidth && replyButtonBorderTablet.top
            ? `border-width: ${replyButtonBorderTabletWidth};`
            : ""
        }
                ${replyButtonBorderRadiusTabletWidth &&
            replyButtonBorderRadiusTablet.top
            ? `border-radius: ${replyButtonBorderRadiusTabletWidth};`
            : ""
        }

                        }


                        ${showCommentForm
            ? `
                            
                                .${blockID} .fb-comment-form {
                                    ${commentFormPaddingTabletWidth &&
                commentFormPaddingTablet.top
                ? `padding: ${commentFormPaddingTabletWidth};`
                : ""
            }
                                    ${commentFormBorderTabletWidth && commentFormBorderTablet.top
                ? `border-width: ${commentFormBorderTabletWidth};`
                : ""
            }
                ${commentFormBorderRadiusTabletWidth &&
                commentFormBorderRadiusTablet.top
                ? `border-radius: ${commentFormBorderRadiusTabletWidth};`
                : ""
            }

                        }

                            .${blockID} .fb-comment-form .fb-comment-form-header {
                            
                                                                ${formTitleSpacing.Tablet
                ? `margin-bottom: ${formTitleSpacing.Tablet}${formTitleSpacingUnits.Tablet};`
                : ""
            }

                            }

                                .${blockID} .fb-comment-form .fb-comment-form-header .fb-reply-title {
                                ${formTitleGlobalTypoSwitcher.fontSize === false &&
                formTitleFontSize.Tablet
                ? `font-size: ${formTitleFontSize.Tablet}${formTitleFontSizeUnits.Tablet};`
                : ""
            }
                ${formTitleGlobalTypoSwitcher.letterSpacing === false &&
                formTitleLetterSpacing.Tablet
                ? `letter-spacing: ${formTitleLetterSpacing.Tablet}${formTitleLetterSpacingUnits.Tablet};`
                : ""
            }
                ${formTitleGlobalTypoSwitcher.lineHeight === false &&
                formTitleLineHeight.Tablet
                ? `line-height: ${formTitleLineHeight.Tablet}${formTitleLineHeightUnits.Tablet};`
                : ""
            }

                        }
                                .${blockID} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
                                ${cancelReplyGlobalTypoSwitcher.fontSize === false &&
                cancelReplyFontSize.Tablet
                ? `font-size: ${cancelReplyFontSize.Tablet}${cancelReplyFontSizeUnits.Tablet};`
                : ""
            }
                ${cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
                cancelReplyLetterSpacing.Tablet
                ? `letter-spacing: ${cancelReplyLetterSpacing.Tablet}${cancelReplyLetterSpacingUnits.Tablet};`
                : ""
            }
                ${cancelReplyGlobalTypoSwitcher.lineHeight === false &&
                cancelReplyLineHeight.Tablet
                ? `line-height: ${cancelReplyLineHeight.Tablet}${cancelReplyLineHeightUnits.Tablet};`
                : ""
            }

                        }

                        .${blockID} .fb-comment-form .fb-logged-in-as  {
                                ${loggedInTextGlobalTypoSwitcher.fontSize === false &&
                loggedInTextFontSize.Tablet
                ? `font-size: ${loggedInTextFontSize.Tablet}${loggedInTextFontSizeUnits.Tablet};`
                : ""
            }
                ${loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
                loggedInTextLetterSpacing.Tablet
                ? `letter-spacing: ${loggedInTextLetterSpacing.Tablet}${loggedInTextLetterSpacingUnits.Tablet};`
                : ""
            }
                ${loggedInTextGlobalTypoSwitcher.lineHeight === false &&
                loggedInTextLineHeight.Tablet
                ? `line-height: ${loggedInTextLineHeight.Tablet}${loggedInTextLineHeightUnits.Tablet};`
                : ""
            }

                                                ${formInfoBorderTabletWidth && formInfoBorderTablet.top
                ? `border-width: ${formInfoBorderTabletWidth};`
                : ""
            }

                                
                                                ${formInfoBorderRadiusTabletWidth &&
                formInfoBorderRadiusTablet.top
                ? `border-radius: ${formInfoBorderRadiusTabletWidth};`
                : ""
            }

                                        ${formInfoPaddingTabletWidth &&
                formInfoPaddingTablet.top
                ? `padding: ${formInfoPaddingTabletWidth};`
                : ""
            }

                                    ${formInfoSpacing.Tablet
                ? `margin-bottom: ${formInfoSpacing.Tablet}${formInfoSpacingUnits.Tablet};`
                : ""
            }

                        }


                                    .${blockID} .fb-comment-form .fb-comment-form-element div>input , 
                .${blockID} .fb-comment-form .fb-comment-form-element .fb-comment-textarea {
                                ${formFieldGlobalTypoSwitcher.fontSize === false &&
                formFieldFontSize.Tablet
                ? `font-size: ${formFieldFontSize.Tablet}${formFieldFontSizeUnits.Tablet};`
                : ""
            }
                ${formFieldGlobalTypoSwitcher.letterSpacing === false &&
                formFieldLetterSpacing.Tablet
                ? `letter-spacing: ${formFieldLetterSpacing.Tablet}${formFieldLetterSpacingUnits.Tablet};`
                : ""
            }
                ${formFieldGlobalTypoSwitcher.lineHeight === false &&
                formFieldLineHeight.Tablet
                ? `line-height: ${formFieldLineHeight.Tablet}${formFieldLineHeightUnits.Tablet};`
                : ""
            }

                                    ${formFieldPaddingTabletWidth &&
                formFieldPaddingTablet.top
                ? `padding: ${formFieldPaddingTabletWidth};`
                : ""
            }
                                    ${formFieldBorderTabletWidth && formFieldBorderTablet.top
                ? `border-width: ${formFieldBorderTabletWidth};`
                : ""
            }
                ${formFieldBorderRadiusTabletWidth &&
                formFieldBorderRadiusTablet.top
                ? `border-radius: ${formFieldBorderRadiusTabletWidth};`
                : ""
            }

                        }


                        .${blockID} .fb-comment-form .fb-comment-form-element .form-submit .fb-post-comment-btn{
                            ${buttonWidth.Tablet && buttonWidthUnits.Tablet
                ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};`
                : ""
            }
                                ${buttonGlobalTypoSwitcher.fontSize === false &&
                buttonFontSize.Tablet &&
                buttonFontSizeUnits.Tablet
                ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};`
                : ""
            }
                ${buttonGlobalTypoSwitcher.letterSpacing === false &&
                buttonLetterSpacing.Tablet &&
                buttonLetterSpacingUnits.Tablet
                ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};`
                : ""
            }
                ${buttonGlobalTypoSwitcher.lineHeight === false &&
                buttonLineHeight.Tablet &&
                buttonLineHeightUnits.Tablet
                ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};`
                : ""
            }
                                    ${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top
                ? `border-width: ${buttonTabletBorderWidthStr};`
                : ""
            }
                ${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top
                ? `border-radius: ${buttonTabletBorderRadiusStr};`
                : ""
            }
                                    ${buttonTabletPaddingStr && buttonTabPadding?.top
                ? `padding: ${buttonTabletPaddingStr};`
                : ""
            }  
                ${buttonTabletMarginStr && buttonTabMargin?.top
                ? `margin: ${buttonTabletMarginStr};`
                : ""
            } 
                        }


                            `
            : ""
        }



                            /* Advanced Control Global Style - Tablet */
                .${blockID}.fb-post-comment-form-block {
                    ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "left" &&
            postGlobalHZLeftOffset.Tablet !== undefined
            ? `left: ${postGlobalHZLeftOffset.Tablet}${postGlobalHZLeftOffsetUnits.Tablet};`
            : ""
        }
                    ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "right" &&
            postGlobalHZRightOffset.Tablet !== undefined
            ? `right: ${postGlobalHZRightOffset.Tablet}${postGlobalHZRightOffsetUnits.Tablet};`
            : ""
        }
                    ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "top" &&
            postGlobalVRTopOffset.Tablet !== undefined
            ? `top: ${postGlobalVRTopOffset.Tablet}${postGlobalVRTopOffsetUnits.Tablet};`
            : ""
        }
                    ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "bottom" &&
            postGlobalVRBottomOffset.Tablet !== undefined
            ? `bottom: ${postGlobalVRBottomOffset.Tablet}${postGlobalVRBottomOffsetUnits.Tablet};`
            : ""
        }
                    ${postGlobalZIndex.Tablet
            ? `z-index: ${postGlobalZIndex.Tablet}`
            : ""
        }

                }

                .${blockID}.fb-post-comment-form-block .fb-post-comment-form{
                    ${postGlobalTabletPaddingWidth &&
            postGlobalPaddingTablet.top
            ? `padding: ${postGlobalTabletPaddingWidth};`
            : ""
        }
                                        ${postGlobalTabletMarginWidth &&
            postGlobalMarginTablet.top
            ? `margin: ${postGlobalTabletMarginWidth};`
            : ""
        }

                    
                    ${postGlobalTabletBorderWidth && postGlobalBorderTablet.top
            ? `border-width: ${postGlobalTabletBorderWidth};`
            : ""
        }
                        ${postGlobalTabletBorderRadiusWidth &&
            postGlobalBorderRadiusTablet.top
            ? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;`
            : ""
        }
                }

                }
                
                /*===========================  Mobile Styles ===========================  */
                @media only screen and (max-width: 767px) {

                ${showCommentTitle
            ? `
                    .${blockID} .fb-comment-count-title  {
                        ${commentCountTitleGlobalTypoSwitcher.fontSize === false &&
                commentCountTitleFontSize.Mobile
                ? `font-size: ${commentCountTitleFontSize.Mobile}${commentCountTitleFontSizeUnits.Mobile};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.letterSpacing === false &&
                commentCountTitleLetterSpacing.Mobile
                ? `letter-spacing: ${commentCountTitleLetterSpacing.Mobile}${commentCountTitleLetterSpacingUnits.Mobile};`
                : ""
            }
                        ${commentCountTitleGlobalTypoSwitcher.lineHeight === false &&
                commentCountTitleLineHeight.Mobile
                ? `line-height: ${commentCountTitleLineHeight.Mobile}${commentCountTitleLineHeightUnits.Mobile};`
                : ""
            }

                                    ${commentCountTitleSpacing.Mobile
                ? `margin-bottom: ${commentCountTitleSpacing.Mobile}${commentCountTitleSpacingUnits.Mobile};`
                : ""
            }

                    }

                            `
            : ""
        }

                                        .${blockID} .fb-comments-list {
                        ${commentListBottomSpacing.Mobile
            ? `padding-bottom: ${commentListBottomSpacing.Mobile}${commentListBottomSpacingUnits.Mobile};`
            : ""
        }
                    }

                    .${blockID} .fb-comments-list .fb-comment{
                            ${postCommentPaddingMobileWidth && postCommentPaddingMobile.top
            ? `padding: ${postCommentPaddingMobileWidth};`
            : ""
        }

                            ${avatarGap.Mobile ? `gap: ${avatarGap.Mobile}${avatarGapUnits.Mobile};` : ""}
                    }	

                    .${blockID} .fb-comments-list .fb-comment.fb-comment-child{
                            
                            ${childCommentPaddingMobileWidth && postCommentPaddingMobile.top
            ? `padding: ${childCommentPaddingMobileWidth};`
            : ""
        }

                                                        ${nestedIndentation.Mobile
            ? `padding-left: ${nestedIndentation.Mobile}${nestedIndentationUnits.Mobile};`
            : ""
        }

                    }

                                    .${blockID} .fb-comments-list .fb-comment .fb-comment-avatar{
                        ${avatarPaddingMobileWidth && avatarPaddingMobile.top
            ? `padding: ${avatarPaddingMobileWidth};`
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment .fb-comment-avatar{
                    ${avatarPaddingMobileWidth && avatarPaddingMobile.top
            ? `padding: ${avatarPaddingMobileWidth};`
            : ""
        }
                                ${avatarBorderMobileWidth && avatarBorderMobile.top
            ? `border-width: ${avatarBorderMobileWidth};`
            : ""
        }
                ${avatarBorderRadiusMobileWidth && avatarBorderRadiusMobile.top
            ? `border-radius: ${avatarBorderRadiusMobileWidth};`
            : ""
        }
                }

                
                .${blockID} .fb-comments-list .fb-comment-parent .fb-comment-avatar{
                        ${avatarSize.Mobile
            ? `width: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
                            height: ${avatarSize.Mobile}${avatarSizeUnits.Mobile};
                            `
            : ""
        }
                }

                .${blockID} .fb-comments-list .fb-comment-child .fb-comment-avatar{
                        ${avatarSize.Mobile
            ? `
                                width: calc(${avatarSize.Mobile}${avatarSizeUnits.Mobile} * 0.8);
                                height: calc(${avatarSize.Mobile}${avatarSizeUnits.Mobile} * 0.8);
                            `
            : ""
        }
                }

                    ${blockID} .fb-comments-list .fb-comment-body .fb-comment-author {
                        ${authorGlobalTypoSwitcher.fontSize === false &&
            authorFontSize.Mobile
            ? `font-size: ${authorFontSize.Mobile}${authorFontSizeUnits.Mobile};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.letterSpacing === false &&
            authorLetterSpacing.Mobile
            ? `letter-spacing: ${authorLetterSpacing.Mobile}${authorLetterSpacingUnits.Mobile};`
            : ""
        }
                        ${authorGlobalTypoSwitcher.lineHeight === false &&
            authorLineHeight.Mobile
            ? `line-height: ${authorLineHeight.Mobile}${authorLineHeightUnits.Mobile};`
            : ""
        }
                    }

                    ${blockID} .fb-comments-list .fb-comment-body .fb-comment-meta {
                        ${commentMetaGlobalTypoSwitcher.fontSize === false &&
            commentMetaFontSize.Mobile
            ? `font-size: ${commentMetaFontSize.Mobile}${commentMetaFontSizeUnits.Mobile};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.letterSpacing === false &&
            commentMetaLetterSpacing.Mobile
            ? `letter-spacing: ${commentMetaLetterSpacing.Mobile}${commentMetaLetterSpacingUnits.Mobile};`
            : ""
        }
                        ${commentMetaGlobalTypoSwitcher.lineHeight === false &&
            commentMetaLineHeight.Mobile
            ? `line-height: ${commentMetaLineHeight.Mobile}${commentMetaLineHeightUnits.Mobile};`
            : ""
        }
                    }

                    .${blockID} .fb-comments-list .fb-comment-body .fb-comment-content  {
                        ${messageGlobalTypoSwitcher.fontSize === false &&
            messageFontSize.Mobile
            ? `font-size: ${messageFontSize.Mobile}${messageFontSizeUnits.Mobile};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.letterSpacing === false &&
            messageLetterSpacing.Mobile
            ? `letter-spacing: ${messageLetterSpacing.Mobile}${messageLetterSpacingUnits.Mobile};`
            : ""
        }
                        ${messageGlobalTypoSwitcher.lineHeight === false &&
            messageLineHeight.Mobile
            ? `line-height: ${messageLineHeight.Mobile}${messageLineHeightUnits.Mobile};`
            : ""
        }
                    }

                                        .${blockID} .fb-comments-list .fb-comment-body .fb-comment-reply {

                        ${replyButtonGlobalTypoSwitcher.fontSize === false &&
            replyButtonFontSize.Mobile
            ? `font-size: ${replyButtonFontSize.Mobile}${replyButtonFontSizeUnits.Mobile};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.letterSpacing === false &&
            replyButtonLetterSpacing.Mobile
            ? `letter-spacing: ${replyButtonLetterSpacing.Mobile}${replyButtonLetterSpacingUnits.Mobile};`
            : ""
        }
                        ${replyButtonGlobalTypoSwitcher.lineHeight === false &&
            replyButtonLineHeight.Mobile
            ? `line-height: ${replyButtonLineHeight.Mobile}${replyButtonLineHeightUnits.Mobile};`
            : ""
        }

                                        ${replyButtonPaddingMobileWidth &&
            replyButtonPaddingMobile.top
            ? `padding: ${replyButtonPaddingMobileWidth};`
            : ""
        }
                                ${replyButtonBorderMobileWidth && replyButtonBorderMobile.top
            ? `border-width: ${replyButtonBorderMobileWidth};`
            : ""
        }
                ${replyButtonBorderRadiusMobileWidth &&
            replyButtonBorderRadiusMobile.top
            ? `border-radius: ${replyButtonBorderRadiusMobileWidth};`
            : ""
        }

                    }


                    ${showCommentForm
            ? `


                            .${blockID} .fb-comment-form {

                

                                        ${commentFormPaddingMobileWidth &&
                commentFormPaddingMobile.top
                ? `padding: ${commentFormPaddingMobileWidth};`
                : ""
            }
                                ${commentFormBorderMobileWidth && commentFormBorderMobile.top
                ? `border-width: ${commentFormBorderMobileWidth};`
                : ""
            }
                ${commentFormBorderRadiusMobileWidth &&
                commentFormBorderRadiusMobile.top
                ? `border-radius: ${commentFormBorderRadiusMobileWidth};`
                : ""
            }

                    }

                        .${blockID} .fb-comment-form .fb-comment-form-header {
                        
                                                            ${formTitleSpacing.Mobile
                ? `margin-bottom: ${formTitleSpacing.Mobile}${formTitleSpacingUnits.Mobile};`
                : ""
            }

                        }

                            .${blockID} .fb-comment-form .fb-comment-form-header .fb-reply-title {
                                ${formTitleGlobalTypoSwitcher.fontSize === false &&
                formTitleFontSize.Mobile
                ? `font-size: ${formTitleFontSize.Mobile}${formTitleFontSizeUnits.Mobile};`
                : ""
            }
                                ${formTitleGlobalTypoSwitcher.letterSpacing === false &&
                formTitleLetterSpacing.Mobile
                ? `letter-spacing: ${formTitleLetterSpacing.Mobile}${formTitleLetterSpacingUnits.Mobile};`
                : ""
            }
                                ${formTitleGlobalTypoSwitcher.lineHeight === false &&
                formTitleLineHeight.Mobile
                ? `line-height: ${formTitleLineHeight.Mobile}${formTitleLineHeightUnits.Mobile};`
                : ""
            }

                            }

                            .${blockID} .fb-comment-form .fb-comment-form-header .fb-cancel-reply {
                                ${cancelReplyGlobalTypoSwitcher.fontSize === false &&
                cancelReplyFontSize.Mobile
                ? `font-size: ${cancelReplyFontSize.Mobile}${cancelReplyFontSizeUnits.Mobile};`
                : ""
            }
                                ${cancelReplyGlobalTypoSwitcher.letterSpacing === false &&
                cancelReplyLetterSpacing.Mobile
                ? `letter-spacing: ${cancelReplyLetterSpacing.Mobile}${cancelReplyLetterSpacingUnits.Mobile};`
                : ""
            }
                                ${cancelReplyGlobalTypoSwitcher.lineHeight === false &&
                cancelReplyLineHeight.Mobile
                ? `line-height: ${cancelReplyLineHeight.Mobile}${cancelReplyLineHeightUnits.Mobile};`
                : ""
            }

                            }


                    
.${blockID} .fb-comment-form .fb-logged-in-as{
                        ${loggedInTextGlobalTypoSwitcher.fontSize === false &&
                loggedInTextFontSize.Mobile
                ? `font-size: ${loggedInTextFontSize.Mobile}${loggedInTextFontSizeUnits.Mobile};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.letterSpacing === false &&
                loggedInTextLetterSpacing.Mobile
                ? `letter-spacing: ${loggedInTextLetterSpacing.Mobile}${loggedInTextLetterSpacingUnits.Mobile};`
                : ""
            }
                        ${loggedInTextGlobalTypoSwitcher.lineHeight === false &&
                loggedInTextLineHeight.Mobile
                ? `line-height: ${loggedInTextLineHeight.Mobile}${loggedInTextLineHeightUnits.Mobile};`
                : ""
            }

                                ${formInfoPaddingMobileWidth &&
                formInfoPaddingMobile.top
                ? `padding: ${formInfoPaddingMobileWidth};`
                : ""
            }

                                                    ${formInfoBorderMobileWidth && formInfoBorderMobile.top
                ? `border-width: ${formInfoBorderMobileWidth};`
                : ""
            }

                                    
                                                ${formInfoBorderRadiusMobileWidth &&
                formInfoBorderRadiusMobile.top
                ? `border-radius: ${formInfoBorderRadiusMobileWidth};`
                : ""
            }

                                    ${formInfoSpacing.Mobile
                ? `margin-bottom: ${formInfoSpacing.Mobile}${formInfoSpacingUnits.Mobile};`
                : ""
            }

                    }


                                    .${blockID} .fb-comment-form .fb-comment-form-element div>input , 
                .${blockID} .fb-comment-form .fb-comment-form-element .fb-comment-textarea {

                        ${formFieldGlobalTypoSwitcher.fontSize === false &&
                formFieldFontSize.Mobile
                ? `font-size: ${formFieldFontSize.Mobile}${formFieldFontSizeUnits.Mobile};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.letterSpacing === false &&
                formFieldLetterSpacing.Mobile
                ? `letter-spacing: ${formFieldLetterSpacing.Mobile}${formFieldLetterSpacingUnits.Mobile};`
                : ""
            }
                        ${formFieldGlobalTypoSwitcher.lineHeight === false &&
                formFieldLineHeight.Mobile
                ? `line-height: ${formFieldLineHeight.Mobile}${formFieldLineHeightUnits.Mobile};`
                : ""
            }

                                        ${formFieldPaddingMobileWidth &&
                formFieldPaddingMobile.top
                ? `padding: ${formFieldPaddingMobileWidth};`
                : ""
            }
                                ${formFieldBorderMobileWidth && formFieldBorderMobile.top
                ? `border-width: ${formFieldBorderMobileWidth};`
                : ""
            }
                ${formFieldBorderRadiusMobileWidth &&
                formFieldBorderRadiusMobile.top
                ? `border-radius: ${formFieldBorderRadiusMobileWidth};`
                : ""
            }

                    }



                        .${blockID} .fb-comment-form .fb-comment-form-element .form-submit .fb-post-comment-btn{
                            ${buttonWidth.Mobile && buttonWidthUnits.Mobile
                ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};`
                : ""
            }
                                        ${buttonGlobalTypoSwitcher.fontSize === false &&
                buttonFontSize.Mobile &&
                buttonFontSizeUnits.Mobile
                ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};`
                : ""
            }
                ${buttonGlobalTypoSwitcher.letterSpacing === false &&
                buttonLetterSpacing.Mobile &&
                buttonLetterSpacingUnits.Mobile
                ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};`
                : ""
            }
                ${buttonGlobalTypoSwitcher.lineHeight === false &&
                buttonLineHeight.Mobile &&
                buttonLineHeightUnits.Mobile
                ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};`
                : ""
            }
                                    ${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top
                ? `border-width: ${buttonMobileBorderWidthStr};`
                : ""
            }
                ${buttonMobileBorderRadiusStr &&
                buttonMobileBorderRadiusWidth?.top
                ? `border-radius: ${buttonMobileBorderRadiusStr};`
                : ""
            }
                                    ${buttonMobilePaddingStr && buttonMobilePadding?.top
                ? `padding: ${buttonMobilePaddingStr};`
                : ""
            }  
                ${buttonMobileMarginStr && buttonMobileMargin?.top
                ? `margin: ${buttonMobileMarginStr};`
                : ""
            } 
                        }

                        `
            : ""
        }

                                                
                                /* Advance Control Global Style - Mobile */
                .${blockID}.fb-post-comment-form-block {
                        ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "left" &&
            postGlobalHZLeftOffset.Mobile !== undefined
            ? `left: ${postGlobalHZLeftOffset.Mobile}${postGlobalHZLeftOffsetUnits.Mobile};`
            : ""
        }
                        ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalHZOrientationType === "right" &&
            postGlobalHZRightOffset.Mobile !== undefined
            ? `right: ${postGlobalHZRightOffset.Mobile}${postGlobalHZRightOffsetUnits.Mobile};`
            : ""
        }
                        ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "top" &&
            postGlobalVRTopOffset.Mobile !== undefined
            ? `top: ${postGlobalVRTopOffset.Mobile}${postGlobalVRTopOffsetUnits.Mobile};`
            : ""
        }
                        ${postGlobalPositionType !== "default" &&
            postGlobalPositionType !== "relative" &&
            postGlobalVROrientationType === "bottom" &&
            postGlobalVRBottomOffset.Mobile !== undefined
            ? `bottom: ${postGlobalVRBottomOffset.Mobile}${postGlobalVRBottomOffsetUnits.Mobile};`
            : ""
        } 

                        ${postGlobalZIndex.Mobile
            ? `z-index: ${postGlobalZIndex.Mobile}`
            : ""
        }

                        
                }


                .${blockID}.fb-post-comment-form-block .fb-post-comment-form{
                
                        ${postGlobalMobilePaddingWidth &&
            postGlobalPaddingMobile.top
            ? `padding: ${postGlobalMobilePaddingWidth};`
            : ""
        }
                                        ${postGlobalMobileMarginWidth &&
            postGlobalMarginMobile.top
            ? `margin: ${postGlobalMobileMarginWidth};`
            : ""
        }

                             ${postGlobalMobileBorderWidth &&
            postGlobalBorderMobile.top
            ? `border-width: ${postGlobalMobileBorderWidth};`
            : ""
        }
                        ${postGlobalMobileBorderRadiusWidth &&
            postGlobalBorderRadiusMobile.top
            ? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;`
            : ""
        }

                }




            }
                
        }
        
    `;

    const customCss = getCustomCss(commentFormGlobalCustomCSS, `.${blockID} `);
    return `${postCommentFormBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();

}
export default generatePostCommentFormStyle;