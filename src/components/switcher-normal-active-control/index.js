import { __ } from '@wordpress/i18n';
import { Button, BaseControl, ButtonGroup } from '@wordpress/components';
import './editor.lazy.scss';


const FB_NormalActiveSwitcherControl = ({ label, globalSwitcher, setGlobalSwitcher }) => { 

    const NORMAL_ACTIVE = [
        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
        { label: __('Active', 'frontis-blocks'), value: 'active' },
    ];

    return (
        <div className="fb-setting-switcher-container">
            <BaseControl
                label={label}
                className="fb-setting-switcher-panel-wrapper"
            >
                <ButtonGroup className="fb-setting-switcher-panel-btn">
                    {NORMAL_ACTIVE.map((item, key) => (
                        <Button
                            key={key}
                            onClick={() => setGlobalSwitcher(item.value)} 
                            className={`fb-setting-switcher-panel-btn-switcher ${globalSwitcher === item.value ? 'active' : ''}`}
                        >
                            {item.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </BaseControl>
        </div>
    );
};

export default FB_NormalActiveSwitcherControl;
