
const FullSiteImportContent = ({template}) => {
  return (
                    <div className="fb-import-preview-panel">
                        <div className="fb-template-preview-card">
                            <img
                                src={`https://leech-better-moose.ngrok-free.app/storage/${template?.image}`}
                                alt={template?.title}
                                className="fb-preview-image"
                            />
                            <div className="fb-preview-info">
                                <h3 className="fb-preview-title">
                                    {template?.title || 'Renovate - Home Decor Website Template'}
                                </h3>
                                <div className="fb-preview-meta">
                                    <span className="fb-preview-category">Construction</span>
                                    <span className="fb-preview-type">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default FullSiteImportContent;