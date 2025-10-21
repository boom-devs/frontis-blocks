import React from 'react'

const fullSiteImportModal = ({pages, }) => {
  return (
    <div className='fb-full-site-import-modal'>
      {isImporting && (
        <div>
          <div>{currentStep}</div>
          <progress value={importProgress} max="100" />
        </div>
      )}
    </div>
  )
}

export default fullSiteImportModal