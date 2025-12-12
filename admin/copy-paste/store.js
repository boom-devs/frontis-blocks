import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
    copyStyleState: null,
    copiedBlockName: null,
};

const STORE_NAME = 'frontis-blocks/copy-paste-style';

const actions = {
    setCopyStyle(attributes, blockName) {
        return {
            type: 'SET_COPY_STYLE',
            attributes,
            blockName,
        };
    },
    clearCopyStyle() {
        return {
            type: 'CLEAR_COPY_STYLE',
        };
    },
};

const store = createReduxStore( STORE_NAME, {
    reducer: (state = DEFAULT_STATE, action) => {
        switch (action.type) {
            case 'SET_COPY_STYLE':
                return {
                    ...state,
                    copyStyleState: action.attributes,
                    copiedBlockName: action.blockName,
                };
            case 'CLEAR_COPY_STYLE':
                return {
                    ...state,
                    copyStyleState: null,
                    copiedBlockName: null,
                };
            default:
                return state;
        }
    },

    actions,

    selectors: {
        getCopyStyleState(state) {
            return state.copyStyleState;
        },
        getCopiedBlockName(state) {
            return state.copiedBlockName;
        },
    }

} );

register( store );