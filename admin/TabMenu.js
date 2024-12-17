import { applyFilters } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";
import {
    Dashboard,
    Blocks,
    Settings,
    Integration,
    Pricing,
	CustomIcons
} from "./components";

import {
    HomeIcon,
    OptionsIcon,
    BlockIcon,
    IntegrationsIcon,
    PricingIcon
} from './icons'

const TabMenus = applyFilters('frontisblocks/admin/tabs', [
    {
        id: 'general',
        icon: <HomeIcon />,
        label: __("Dashboard", "frontis-blocks"),
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
    }
]);
export default TabMenus;
