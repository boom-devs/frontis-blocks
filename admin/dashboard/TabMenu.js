import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import Dashboard from './overview/Dashboard';
import Blocks from './blocks/Blocks';
import Integration from './integrations/Integration';

import {
    HomeIcon,
    OptionsIcon,
    BlockIcon,
    IntegrationsIcon,
    PricingIcon
} from '../icons'
import Settings from "./settings/Settings";

const TabMenus = applyFilters('frontisblocks-admin-tabs', [
    {
        id: 'general',
        icon: <HomeIcon />,
        label: __("Overview", "frontis-blocks"),
        comp: <Dashboard />
    },
    {
        id: 'blocks',
        icon: <BlockIcon />,
        label: __("Blocks", "frontis-blocks"),
        comp: <Blocks />
    },
    {
        id: 'settings',
        icon: <OptionsIcon />,
        label: __("Settings", "frontis-blocks"),
        comp: <Settings />
    },
    {
        id: 'integrations',
        icon: <IntegrationsIcon />,
        label: __("Integrations", "frontis-blocks"),
        comp: <Integration />
    },
]);

export default TabMenus;
