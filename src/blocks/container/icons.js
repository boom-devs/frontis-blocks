// File: icons.js
import { SVG, Path, Rect } from '@wordpress/components';

const fullWidth = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="20" height="20" />
  </SVG>
);

const twoColumns = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="9" height="20" />
    <Rect x="13" y="2" width="9" height="20" />
  </SVG>
);

const threeColumns = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="6" height="20" />
    <Rect x="9" y="2" width="6" height="20" />
    <Rect x="16" y="2" width="6" height="20" />
  </SVG>
);

const fourColumns = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="4" height="20" />
    <Rect x="7" y="2" width="4" height="20" />
    <Rect x="13" y="2" width="4" height="20" />
    <Rect x="18" y="2" width="4" height="20" />
  </SVG>
);

const twoRowsTwoColumns = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="9" height="9" />
    <Rect x="13" y="2" width="9" height="9" />
    <Rect x="2" y="13" width="9" height="9" />
    <Rect x="13" y="13" width="9" height="9" />
  </SVG>
);

const threeColumnsWideCenter = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="4" height="20" />
    <Rect x="8" y="2" width="8" height="20" />
    <Rect x="18" y="2" width="4" height="20" />
  </SVG>
);

const twoThirdsOneThird = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="13" height="20" />
    <Rect x="17" y="2" width="5" height="20" />
  </SVG>
);

const oneThirdTwoThirds = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="5" height="20" />
    <Rect x="9" y="2" width="13" height="20" />
  </SVG>
);

const twoRowsThreeColumns = (
  <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Rect x="2" y="2" width="6" height="9" />
    <Rect x="9" y="2" width="6" height="9" />
    <Rect x="16" y="2" width="6" height="9" />
    <Rect x="2" y="13" width="6" height="9" />
    <Rect x="9" y="13" width="6" height="9" />
    <Rect x="16" y="13" width="6" height="9" />
  </SVG>
);

export default {
  fullWidth,
  twoColumns,
  threeColumns,
  fourColumns,
  twoRowsTwoColumns,
  threeColumnsWideCenter,
  twoThirdsOneThird,
  oneThirdTwoThirds,
  twoRowsThreeColumns,
};