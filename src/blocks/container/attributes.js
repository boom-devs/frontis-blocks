const attributes = {
    block_id: {
      type: 'string',
    },
    htmlTag: {
      type: 'string',
      default: 'div',
    },
    layout: {
      type: 'string',
      default: '',
    },
    placeholder: {
        type: 'boolean',
        default: false,
    },
    columns: {
      type: 'number',
      default: 1,
    },
    rows: {
      type: 'number',
      default: 1,
    },
    backgroundColor: {
      type: 'string',
    },
    textColor: {
      type: 'string',
    },
    padding: {
      type: 'object',
      default: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    },
    margin: {
      type: 'object',
      default: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  };