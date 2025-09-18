import SitePreview from "../sitePreview";

const FullSiteImportContent = ({template}) => {
  return (
                    <div className="fb-import-preview-panel">
                        <div className="fb-template-preview-card">
                            <SitePreview />
                            {/* <div className="fb-preview-info">
                                <h3 className="fb-preview-title">
                                    {template?.title}
                                </h3>
                                <div className="fb-preview-meta">
                                    <span className="fb-preview-category">
                                    {template.categories?.length > 0 &&
                                        template.categories.map((categorie, index) => (
                                        <span key={index}>
                                            {categorie}
                                            {index < template.categories.length - 1 && ', '}
                                        </span>
                                    ))}
                                    </span>
                                    <span className="fb-preview-type">{template.is_premium ? "PRO" : "FREE"}</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
  )
}

export default FullSiteImportContent;