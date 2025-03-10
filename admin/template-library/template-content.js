/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; 
import SiteImportModal from "./fullsiteimport";
import FrontisBlocksSidebarFullSite from "../full-site-import/sidebar";

const TemplateCard = ({ imageUrl }) => {
  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Demo import for blocks
  // const handleDemoDataImport = useCallback(() => {
  //   const selectedBlock = window.wp.data
  //     .select('core/block-editor')
  //     .getSelectedBlock();

  //   if (!selectedBlock || !selectedBlock.clientId) {
  //     toast.warn('Please select a block first!');
  //     return;
  //   }

  //   const blockId = selectedBlock.clientId;
  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: blockId
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const blocks = wp.blocks.parse(response.data.content);
  //         replaceBlocks(blockId, blocks);
  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function (xhr, status, error) {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]);

  // demo import for pages
  // const handleDemoDataImport = useCallback(() => {
  //   const selectedBlock = window.wp.data
  //     .select('core/block-editor')
  //     .getSelectedBlock();

  //   const postId = window.wp.data.select('core/editor').getCurrentPostId(); // Get current post ID

  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: selectedBlock ? selectedBlock.clientId : '',
  //       post_id: postId  // Send post ID explicitly
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const { editPost } = wp.data.dispatch('core/editor');

  //         if (selectedBlock) {
  //           // Update selected block
  //           const blocks = wp.blocks.parse(response.data.content);
  //           replaceBlocks(selectedBlock.clientId, blocks);
  //         } else {
  //           // Update full page content
  //           editPost({ content: response.data.content });
  //         }

  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function () {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]);

  //demo import full site

  // const handleDemoDataImport = useCallback(() => {
    // const selectedBlock = window.wp.data
    //   .select('core/block-editor')
    //   .getSelectedBlock();

    // const postId = window.wp.data.select('core/editor').getCurrentPostId(); // Get current post ID

  //   setIsLoading(true);

  //   window.jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_import_demo_data',
  //       security: nonce,
  //       block_id: selectedBlock ? selectedBlock.clientId : '',
  //       post_id: postId  // Send post ID explicitly
  //     },
  //     success: function (response) {
  //       setIsLoading(false);

  //       if (response.success) {
  //         const { replaceBlocks } = wp.data.dispatch('core/block-editor');
  //         const { editPost } = wp.data.dispatch('core/editor');

  //         if (selectedBlock) {
  //           // Update selected block
  //           const blocks = wp.blocks.parse(response.data.content);
  //           replaceBlocks(selectedBlock.clientId, blocks);
  //         } else {
  //           // Update full page content
  //           editPost({ content: response.data.content });
  //         }

  //         toast.success(response.data.message || 'Demo data imported successfully!');
  //       } else {
  //         toast.error('Failed to import demo data: ' + response.data);
  //       }
  //     },
  //     error: function () {
  //       setIsLoading(false);
  //       toast.error('Failed to process request. Please try again.');
  //     }
  //   });
  // }, [ajaxUrl, nonce]); 

  

  const handleFullSiteImport = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <div className="fb-template-library-card">
        <div className="fb-template-library-card-img">
          <img src={imageUrl} alt="Template preview" />
        </div>
        <div className="fb-template-library-card-content">
          <div
            className={`fb-template-library-import ${isLoading ? 'disabled' : ''}`}
            onClick={!isLoading ? handleFullSiteImport : null}
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
            <div className="favourite-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 4.12547L8.5947 4.51554C8.59725 4.51815 8.5998 4.52073 8.60235 4.52329L9 4.12547ZM10.1024 6.02275C10.322 6.24238 10.6782 6.24231 10.8978 6.0226C11.1175 5.80289 11.1174 5.44673 10.8976 5.2271L10.1024 6.02275ZM7.06954 13.7414C5.93279 12.8453 4.6898 11.9702 3.70372 10.8598C2.73692 9.77114 2.0625 8.50087 2.0625 6.85282H0.9375C0.9375 8.85194 1.77038 10.3771 2.86254 11.6068C3.93542 12.8149 5.30308 13.7814 6.37306 14.6249L7.06954 13.7414ZM2.0625 6.85282C2.0625 5.23967 2.97403 3.88688 4.21827 3.31814C5.42705 2.7656 7.05125 2.91193 8.5947 4.51554L9.4053 3.73539C7.57387 1.83263 5.44807 1.51904 3.75057 2.29496C2.08853 3.05468 0.9375 4.81877 0.9375 6.85282H2.0625ZM6.37306 14.6249C6.75724 14.9278 7.16966 15.2507 7.5876 15.4949C8.00543 15.739 8.4822 15.9375 9 15.9375V14.8125C8.7678 14.8125 8.49458 14.722 8.1552 14.5236C7.81598 14.3254 7.46406 14.0524 7.06954 13.7414L6.37306 14.6249ZM11.6269 14.6249C12.6969 13.7814 14.0646 12.8149 15.1375 11.6068C16.2296 10.3771 17.0625 8.85194 17.0625 6.85282H15.9375C15.9375 8.50087 15.2631 9.77114 14.2963 10.8598C13.3102 11.9702 12.0672 12.8453 10.9305 13.7414L11.6269 14.6249ZM17.0625 6.85282C17.0625 4.81877 15.9115 3.05468 14.2494 2.29496C12.5519 1.51904 10.4261 1.83263 8.5947 3.73539L9.4053 4.51554C10.9487 2.91193 12.5729 2.7656 13.7817 3.31814C15.026 3.88688 15.9375 5.23967 15.9375 6.85282H17.0625ZM10.9305 13.7414C10.5359 14.0524 10.184 14.3254 9.8448 14.5236C9.50543 14.722 9.2322 14.8125 9 14.8125V15.9375C9.5178 15.9375 9.99457 15.739 10.4124 15.4949C10.8304 15.2507 11.2427 14.9278 11.6269 14.6249L10.9305 13.7414ZM8.60235 4.52329L10.1024 6.02275L10.8976 5.2271L9.39765 3.72765L8.60235 4.52329Z" fill="#0B0C0E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <SiteImportModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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

