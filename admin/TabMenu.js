import { applyFilters } from "@wordpress/hooks";
import {  } from "@wordpress/i18n";
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
        label: ("Dashboard", "frontis-blocks"),
        comp: <Dashboard />
    },
    {
        id: 'blocks',
        icon: <BlockIcon />,
        label: ("Blocks", "frontis-blocks"),
        comp: <Blocks />
    },
    {
        id: 'settings',
        icon: <OptionsIcon />,
        label: ("Settings", "frontis-blocks"),
        comp: <Settings />
    },
    {
        id: 'integrations',
        icon: <IntegrationsIcon />,
        label: ("Integrations", "frontis-blocks"),
        comp: <Integration />
    },
    // {
    //     id: 'custom_icons',
    //     icon: <IntegrationsIcon />,
    //     label: ("Custom icons", "frontis-blocks"),
    //     comp: <CustomIcons />
    // }
]);
// Add pricing tab if not pro
// if (window.frontisBlocksAdmin.isProActive === 'false') {
//     TabMenus.push({
//       id: 'pricing',
//       icon: <PricingIcon />,
//       label: __("Pricing", "frontis-blocks"),
//       comp: <Pricing />
//     });
// }

export default TabMenus;