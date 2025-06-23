/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const TemplateCard = ({ imageUrl, title, isPro = false, id }) => {
  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFullSiteImport = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleDemo = useCallback(() => {
    // Handle demo functionality
    console.log('Demo clicked for:', id);
  }, [id]);

  return (
    <>
      <div
        className="fb-template-library-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="fb-template-library-card-img">
          <img src={imageUrl} alt={title || "Template preview"} />

          {/* Badge */}


          {/* Hover Overlay */}
          {isHovered && (
            <div className="fb-template-overlay">
              <div className="fb-template-overlay-content">
                <button
                  className="fb-demo-btn"
                  onClick={handleDemo}
                >
                  <span>Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>


              </div>
            </div>
          )}
        </div>

        <div className="fb-template-library-card-content">
          <div className={`fb-template-badge ${isPro ? 'pro' : 'free'}`}>
            {isPro ? 'PRO' : 'FREE'}
          </div>
          <h3 className="fb-template-title">{title}</h3>
          <div className="fb-template-actions">
            <button
              className={`fb-import-btn ${isLoading ? 'loading' : ''}`}
              onClick={!isLoading ? handleFullSiteImport : null}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span>Importing...</span>
                  <ClipLoader color="#fff" size={16} />
                </>
              ) : (
                <>
                  <span>Import</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.67 8C2.67 10.95 5.05 13.33 8 13.33C10.95 13.33 13.33 10.95 13.33 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 2.67V9.33M8 9.33L10 7.33M8 9.33L6 7.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>

            <button className="fb-favorite-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3.67l-.36.35c.003.003.006.005.009.008L8 3.67zm.91 1.69c.195.195.51.195.705 0s.195-.51 0-.705l-.705.705zm-2.7 6.82c-1.01-.8-2.13-1.59-2.99-2.58-.84-.97-1.45-2.08-1.45-3.51h-1c0 1.78.75 3.15 1.7 4.23.93 1.06 2.14 1.94 3.1 2.69l.64-.83zm-4.44-6.09c0-1.43.81-2.63 1.89-3.14 1.05-.5 2.47-.37 3.74.98l.71-.71c-1.63-1.69-3.52-1.96-4.97-1.27-1.46.69-2.37 2.21-2.37 4.14h1zm3.61 7.74c.34.27.7.54 1.04.74.34.21.73.38 1.08.38v-1c-.21 0-.44-.08-.72-.25-.28-.17-.57-.4-.91-.67l-.49.8zm4.22 0c.95-.84 2.14-1.72 3.07-2.78.92-1.08 1.65-2.45 1.65-4.23h-1c0 1.43-.6 2.54-1.45 3.51-.86.99-1.98 1.78-2.99 2.58l.72.92zm4.72-7.01c0-1.93-.91-3.45-2.37-4.14-1.45-.69-3.34-.42-4.97 1.27l.71.71c1.27-1.35 2.69-1.48 3.74-.98 1.08.51 1.89 1.71 1.89 3.14h1zm-4.72 7.01c-.34.27-.63.5-.91.67-.28.17-.51.25-.72.25v1c.35 0 .74-.17 1.08-.38.34-.2.7-.47 1.04-.74l-.49-.8zm-1.63-7.74l1.33 1.33.705-.705-1.33-1.33-.705.705z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

const TemplateLibrary = ({ activeTab, activeCategory, data }) => {
  const schema = data?.$schema || {};
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    if (activeTab && activeCategory) {
      const tabData = schema[activeTab];
      const selectedCategory = tabData?.categories?.find(
        (category) => category.id === activeCategory
      );

      if (selectedCategory && selectedCategory.items) {
        setFilteredTemplates(selectedCategory.items);
      } else {
        setFilteredTemplates([]);
      }
    }
  }, [activeTab, activeCategory]);

  return (
    <div className="fb-template-library-store-content">
      <div className="fb-template-library-content-header">
        <h2>All Pages</h2>
        <div className="fb-template-library-tags-wrapper">
          <span>User Experience</span>
          <span>UI Kits</span>
          <span>Templates</span>
          <span>Web Design</span>
          <span>Creative Assets</span>
          <span>Digital Marketing</span>
          <span>Landing Pages</span>
          <span>Prototyping</span>
          <span>E-commerce</span>
        </div>
      </div>
      <div className="fb-template-library-cards">
        {filteredTemplates.map((template, index) => (
          <TemplateCard
            key={template.id}
            id={template.id}
            title={template.title}
            imageUrl={template.image}
            isPro={index % 3 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;