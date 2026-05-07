const attributes = {
	preset: {
		type: "string",
		default: "preset1",
	},
	triggerOn: {
		type: "string",
		default: "hover",
	},
	items: {
		type: "array",
		default: [
			{
				id: 1,
				title: "Discover Unique",
				subtitle: "Explore the world",
				description:
					"A breathtaking journey through landscapes that will leave you inspired.",
				imageUrl: "",
				imageId: 0,
				buttonText: "Read More",
				buttonUrl: "#",
			},
			{
				id: 2,
				title: "Adventure Awaits",
				subtitle: "Push your limits",
				description:
					"Challenge yourself with extreme adventures for the fearless.",
				imageUrl: "",
				imageId: 0,
				buttonText: "Read More",
				buttonUrl: "#",
			},
			{
				id: 3,
				title: "Wild Nature",
				subtitle: "Feel the wilderness",
				description:
					"Immerse yourself in raw, untamed nature unlike anything you have experienced.",
				imageUrl: "",
				imageId: 0,
				buttonText: "Read More",
				buttonUrl: "#",
			},
			{
				id: 4,
				title: "Urban Stories",
				subtitle: "City of dreams",
				description:
					"Every city has a soul. Find it in hidden corners and vibrant streets.",
				imageUrl: "",
				imageId: 0,
				buttonText: "Read More",
				buttonUrl: "#",
			},
			{
				id: 5,
				title: "Ocean Deep",
				subtitle: "Dive into blue",
				description:
					"The ocean holds secrets that only the brave dare to uncover.",
				imageUrl: "",
				imageId: 0,
				buttonText: "Read More",
				buttonUrl: "#",
			},
		],
	},
	height: {
		type: "number",
		default: 500,
	},
	borderRadius: {
		type: "number",
		default: 16,
	},
	accentColor: {
		type: "string",
		default: "#ffffff",
	},
	overlayColor: {
		type: "string",
		default: "#000000",
	},
	overlayOpacity: {
		type: "number",
		default: 40,
	},
	showNumbers: {
		type: "boolean",
		default: true,
	},
	showButton: {
		type: "boolean",
		default: true,
	},
};

export default attributes;
