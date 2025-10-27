/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
const TemplateLoader = () => {
  return (
    <div className="fb-template-loader-wrapper">
      <div className="fb-template-loader-inner">
        <span className="fb-template-loader"></span>
      </div>
    </div>
  );
};


const TemplateCategoryLoader = ({ count = 1, width = '100%', height = '30px' }) => {
  const spans = Array.from({ length: count }).map((_, index) => (
    <span
      key={index}
      className="fb-template-category-loader"
      style={{ width, height, display: 'inline-block' }}
    ></span>
  ));

  return (
    <div className="fb-template-category-loader-wrapper">
      {spans}
    </div>);
};

const TemplateContentLoader = () => {
  return (
    <div className="fb-template-content-loader-wrapper">
      <span className="fb-template-content-loader"></span>
    </div>
  );
}

export { TemplateCategoryLoader, TemplateLoader, TemplateContentLoader }