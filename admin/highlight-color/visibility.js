// only these will be excluded (denylist)
// here add/remove the block name (example: 'core/image', 'core/cover', 'fluentform/guten-block')
export const EXCLUDED_BLOCKS = [
    'frontis-blocks/container',
    'frontis-blocks/fluent-form',
    'frontis-blocks/contact-form-7',
    'frontis-blocks/google-map',
  ];
  
  // helper: if the name is not in the exclude list = allowed
  export const isAllowed = (name) => !EXCLUDED_BLOCKS.includes(name);