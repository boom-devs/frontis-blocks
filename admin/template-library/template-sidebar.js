import { useState, useEffect } from "@wordpress/element";

const TemplateSidebar = ({ activeTab, activeCategory, setActiveCategory,data }) => {

  // Extract sections from the schema
  const schema = data.$schema;
  const categories = activeTab ? Object.values(schema[activeTab]?.categories || {}) : [];

  // const [activeCategory, setActiveCategory] = useState(null);
  // Set first category as active by default
  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].id);
    }
  }, [categories]);
  return (
    <div className="fb-template-library-store-sidebar">
      <div className="fb-template-category-wrapper">
        <div className="fb-template-category-label">
          <h2>Categories</h2>
        </div>
        <div className="fb-template-category">
          <span className="fb-tl-free">Free</span>
          <span className="fb-tl-pro">Pro</span>
        </div>
      </div>
      {/* Categories Section */}
      <div className="fb-template-library-store-sidebar-tabs">

        {categories.map((category) => (
          <button
            key={category.id}
            className={`fb-template-library-store-sidebar-tab ${activeCategory === category.id ? 'active' : ''
              }`}
            onClick={() => setActiveCategory(category.id)}
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