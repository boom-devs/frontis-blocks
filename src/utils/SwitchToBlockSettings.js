import { useEffect } from '@wordpress/element';

const SwitchToBlockSettings = (panelRef) => {
    useEffect(() => {
        if (panelRef.current) {
            panelRef.current.addEventListener('click', () => {
                const settingsTabButton = document.getElementById('tabs-1-edit-post/block');
                const settingsPanelButton = document.querySelector('.interface-pinned-items .components-button.is-compact.has-icon[aria-label="Settings"]');
                
                if (settingsTabButton) settingsTabButton.click();
                if (settingsPanelButton && !settingsPanelButton.classList.contains('is-pressed')) {
                    settingsPanelButton.click();
                }
            });
        }
    }, [panelRef]);
};

export default SwitchToBlockSettings;