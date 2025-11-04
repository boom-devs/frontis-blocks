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

export default TemplateLoader;