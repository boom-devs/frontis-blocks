import { useState, useEffect } from "@wordpress/element";

const TemplateSidebar = ({activeTab, data}) => {
    // Extract sections from the schema
    const schema = data.$schema;
    const categories = activeTab ? Object.values(schema[activeTab]?.categories || {}) : [];
  
    return (
      <div className="fb-template-library-store-sidebar">
        
        {/* Categories Section */}
        <div className="fb-template-library-store-sidebar-tabs">
          
          {categories.map((category) => (
          <button
            key={category.id}
            className="fb-template-library-store-sidebar-tab"
          >
            <span className="fb-template-library-store-sidebar-tab-name">
              {category.name}
            </span>
            <span className="fb-template-library-store-sidebar-tab-count">
              {String(category.count).padStart(2, "0")}
            </span>
          </button>
        ))}
        </div>
      </div>
    );
  };

export default TemplateSidebar;