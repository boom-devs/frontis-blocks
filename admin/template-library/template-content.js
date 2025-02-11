/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; // Lightweight loader for UI

const TemplateCard = ({ imageUrl }) => {
  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoDataImport = useCallback(() => {
    const selectedBlock = window.wp.data
      .select('core/block-editor')
      .getSelectedBlock();

    if (!selectedBlock || !selectedBlock.clientId) {
      toast.warn('Please select a block first!');
      return;
    }

    const blockId = selectedBlock.clientId;
    setIsLoading(true);

    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_import_demo_data',
        security: nonce,
        block_id: blockId
      },
      success: function (response) {
        setIsLoading(false);

        if (response.success) {
          const { replaceBlocks } = wp.data.dispatch('core/block-editor');
          const blocks = wp.blocks.parse(response.data.content);
          replaceBlocks(blockId, blocks);
          toast.success(response.data.message || 'Demo data imported successfully!');
        } else {
          toast.error('Failed to import demo data: ' + response.data);
        }
      },
      error: function (xhr, status, error) {
        setIsLoading(false);
        toast.error('Failed to process request. Please try again.');
      }
    });
  }, [ajaxUrl, nonce]);

  return (
    <>
    <div className="fb-template-library-card">
      <div className="fb-template-library-card-img">
        <img src={imageUrl} alt="Template preview" />
      </div>
      <div className="fb-template-library-card-content">
        <div
          className={`fb-template-library-import ${isLoading ? 'disabled' : ''}`}
          onClick={!isLoading ? handleDemoDataImport : null}
        >
          <span>{isLoading ? 'Importing...' : 'Import'}</span>
          {isLoading ? (
            <ClipLoader color="#fff" size={18} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9 3V10.5M9 10.5L11.25 8.25M9 10.5L6.75 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className="fb-template-library-save">
          <div className="save-wrapper">
            <span>Save library</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14.671 5.25C14.8426 4.27142 14.0895 3.375 13.096 3.375H4.90317C3.90968 3.375 3.15667 4.27142 3.32814 5.25" stroke="#555E72" strokeWidth="1.5" />
              <path d="M13.1249 3.375C13.1462 3.18069 13.1569 3.08351 13.157 3.00326C13.1587 2.23554 12.5804 1.59048 11.8171 1.50857C11.7373 1.5 11.6395 1.5 11.4441 1.5H6.55574C6.36026 1.5 6.26251 1.5 6.18271 1.50857C5.41938 1.59048 4.8411 2.23554 4.84278 3.00326C4.84295 3.08351 4.85359 3.18068 4.87487 3.375" stroke="#555E72" strokeWidth="1.5" />
              <path d="M11.25 13.5H6.75" stroke="#555E72" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M1.78763 10.3448C1.45311 7.97205 1.28585 6.78574 1.99674 6.01787C2.70763 5.25 3.97319 5.25 6.50429 5.25H11.4957C14.0268 5.25 15.2923 5.25 16.0033 6.01787C16.7141 6.78574 16.5469 7.97205 16.2124 10.3448L15.8951 12.5947C15.6328 14.4554 15.5017 15.3857 14.8288 15.9429C14.1559 16.5 13.1634 16.5 11.1785 16.5H6.82152C4.83661 16.5 3.84415 16.5 3.17126 15.9429C2.49836 15.3857 2.3672 14.4554 2.10486 12.5947L1.78763 10.3448Z" stroke="#555E72" strokeWidth="1.5" />
            </svg>
          </div>
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
      <div className="fb-template-library-cards">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            imageUrl={template.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;

