import { __ } from '@wordpress/i18n';
import { Button, BaseControl, ButtonGroup } from '@wordpress/components';
// import './editor.lazy.scss';


const FB_SwitcherControl = ({ label, globalSwitcher, setGlobalSwitcher }) => {

    const NORMAL_HOVER = [
        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
    ];

    return (
        <div className="fb-setting-switcher-container">
            <BaseControl
                label={label}
                className="fb-setting-switcher-panel-wrapper"
            >
                <ButtonGroup className="fb-setting-switcher-panel-btn">
                    {NORMAL_HOVER.map((item, key) => (
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

export default FB_SwitcherControl;
