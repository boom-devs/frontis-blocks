import SitePreview from "../sitePreview";

const FullSiteImportContent = ({template}) => {
    
    const previewUrl = template?.preview_url;

  return (
                    <div className="fb-import-preview-panel">
                        <div className="fb-template-preview-card">
                            <SitePreview preview_url={previewUrl} />
                        </div>
                    </div>
  )
}

export default FullSiteImportContent;