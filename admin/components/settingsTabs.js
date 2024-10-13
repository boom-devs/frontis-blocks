import { __ } from '@wordpress/i18n';
import EditorOptions from './Settings/EditorOptions';
import AssetsGeneration from './Settings/AssetsGeneration';
import VersionControl from './Settings/VersionControl';

const settingsTabs = [
  { id: 'editor', label: __('Editor Options', 'frontis-blocks'), component: EditorOptions },
  { id: 'assets', label: __('Assets Generation', 'frontis-blocks'), component: AssetsGeneration },
  { id: 'version', label: __('Version Control', 'frontis-blocks'), component: VersionControl },
];

export default settingsTabs;
