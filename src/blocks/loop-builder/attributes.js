const attributes = {
	blockID: {
	  type: 'string',
	  default: ''
	},
	templateType: {
	  type: 'string',
	  default: 'grid'
	},
	postTypes: {
	  type: 'string',
	  default: 'post'
	},
	itemsPerPage: {
	  type: 'number',
	  default: 6
	},
	columns: {
	  type: 'object',
	  default: {
		desktop: 3,
		tablet: 2,
		mobile: 1
	  }
	},
	gap: {
	  type: 'object',
	  default: {
		desktop: 20,
		tablet: 15,
		mobile: 10
	  }
	},
	sortBy: {
	  type: 'string',
	  default: 'date_desc'
	},
	taxonomyFilter: {
	  type: 'string',
	  default: ''
	},
	filterTerms: {
	  type: 'array',
	  default: []
	},
	showPagination: {
	  type: 'string',
	  default: 'none'
	},
	cardElements: {
	  type: 'object',
	  default: {
		image: true,
		title: true,
		excerpt: true,
		meta: false,
		button: false
	  }
	},
	imageSize: {
	  type: 'string',
	  default: 'medium'
	},
	excerptLength: {
	  type: 'number',
	  default: 25
	},
	metaElements: {
	  type: 'object',
	  default: {
		author: false,
		date: true,
		comments: false,
		categories: true
	  }
	},
	buttonText: {
	  type: 'string',
	  default: 'Read More'
	},
	// Styling attributes
	cardStyle: {
	  type: 'object',
	  default: {
		backgroundColor: '#ffffff',
		borderRadius: 5,
		padding: 20,
		boxShadow: false
	  }
	},
	titleStyle: {
	  type: 'object',
	  default: {
		color: '#333333',
		fontSize: {
		  desktop: 20,
		  tablet: 18,
		  mobile: 16
		},
		marginBottom: 10
	  }
	},
	imageStyle: {
	  type: 'object',
	  default: {
		borderRadius: 5,
		marginBottom: 15
	  }
	},
	buttonStyle: {
	  type: 'object',
	  default: {
		backgroundColor: '#0066CC',
		textColor: '#ffffff',
		borderRadius: 4,
		padding: {
		  vertical: 8,
		  horizontal: 16
		}
	  }
	}
  };
  
  export default attributes;