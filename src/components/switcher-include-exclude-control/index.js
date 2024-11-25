import { __ } from '@wordpress/i18n';
import { Button, BaseControl, ButtonGroup } from '@wordpress/components';
import './editor.lazy.scss';


const FB_IncludeExcludeSwitcherControl = ({ label, globalSwitcher, setGlobalSwitcher }) => { 

    const INCLUDE_EXCLUDE = [
        { label: __('Include', 'frontis-blocks'), value: 'include' },
        { label: __('Exclude', 'frontis-blocks'), value: 'exclude' },
    ];

    return (
        <div className="fb-setting-switcher-container">
            <BaseControl
                label={label}
                className="fb-setting-switcher-panel-wrapper"
            >
                <ButtonGroup className="fb-setting-switcher-panel-btn">
                    {INCLUDE_EXCLUDE.map((item, key) => (
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

export default FB_IncludeExcludeSwitcherControl;
