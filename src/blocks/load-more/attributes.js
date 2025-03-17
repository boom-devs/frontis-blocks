const attributes = {
	blockID: {
	  type: 'string',
	  default: '',
	},
	postType: {
	  type: 'string',
	  default: 'post',
	},
	postsPerPage: {
	  type: 'number',
	  default: 4,
	},
	loadMoreCount: {
	  type: 'number',
	  default: 4,
	},
	orderBy: {
	  type: 'string',
	  default: 'date',
	},
	order: {
	  type: 'string',
	  default: 'DESC',
	},
	showLoadMoreButton: {
	  type: 'boolean',
	  default: true,
	},
	showFeaturedImage: {
	  type: 'boolean',
	  default: true,
	},
	showTitle: {
	  type: 'boolean',
	  default: true,
	},
	showContent: {
	  type: 'boolean',
	  default: true,
	},
	showCategories: {
	  type: 'boolean',
	  default: true,
	},
	alternateLayout: {
	  type: 'boolean',
	  default: true,
	}
  };
  
  export default attributes;