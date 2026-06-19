/**
 * Block Icons
 */

import { createElement as fb } from "@wordpress/element";
const iconColor = "#fff";
const fbBlockColor = "#1d2327";
const noColor = "none";

const FB_Block_Icons = {
	advanced_heading: fb(
		"svg",
		{
			version: "1.1",
			id: "bookSpineIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M18 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H18
			  M12 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H12
			  M12 3H15
			  M18 3H15
			  M12 21H15
			  M18 21H15
			  M15 3V21`,
		}),
	),
	animated_heading: fb(
		"svg",
		{
			version: "1.1",
			id: "bookIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M18 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H18
			  M12 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H12
			  M12 3H15
			  M18 3H15
			  M12 21H15
			  M18 21H15
			  M15 3C15 3 15 7 15 12C15 17 15 21 15 21
			  M12 9C8 9 10 15 6 15`,
		}),
	),
	advanced_image: fb(
		"svg",
		{
			version: "1.1",
			id: "imageIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3.5 21H6
			  M9.5 21H21
			  M3 14V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V14
			  M3 14V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V14
			  M3 14L5.58579 11.4142C6.36684 10.6332 7.63316 10.6332 8.41421 11.4142L8.58579 11.5858C9.36683 12.3668 10.6332 12.3668 11.4142 11.5858L13.5858 9.41421C14.3668 8.63316 15.6332 8.63316 16.4142 9.41421L21 14
			  M11 7V7C11 7.55228 10.5523 8 10 8V8C9.44772 8 9 7.55228 9 7V7C9 6.44772 9.44772 6 10 6V6C10.5523 6 11 6.44772 11 7Z`,
		}),
	),
	advanced_video: fb(
		"svg",
		{
			version: "1.1",
			id: "videoIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3.5 21H6
			  M10.5 21H21
			  M14.7142 10.1715L10.3029 12.8183C10.1696 12.8982 10 12.8022 10 12.6468V7.35324C10 7.19778 10.1696 7.10176 10.3029 7.18174L14.7142 9.8285C14.8436 9.90618 14.8436 10.0938 14.7142 10.1715Z
			  M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z`,
		}),
	),
	advanced_button: fb(
		"svg",
		{
			version: "1.1",
			id: "menuIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 17.5H18
			  M6 6.5H18
			  M21 16V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16C3 14.8954 3.89543 14 5 14H19C20.1046 14 21 14.8954 21 16Z
			  M21 5V8C21 9.10457 20.1046 10 19 10H5C3.89543 10 3 9.10457 3 8V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z`,
		}),
	),
	call_to_action: fb(
		"svg",
		{
			version: "1.1",
			id: "sendIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M21 12V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V10C3 11.1046 3.89543 12 5 12H6
			  M14.5 16.5L19 21
			  M14.5 16.5L12.5 21L9 11L19 14.5L14.5 16.5Z`,
		}),
	),
	countdown: fb(
		"svg",
		{
			version: "1.1",
			id: "targetIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "#0B0C0E",
			d: `M20.7 13C20.7 12.6134 20.3866 12.3 20 12.3C19.6134 12.3 19.3 12.6134 19.3 13H20H20.7Z
			  M12 21.7C12.3866 21.7 12.7 21.3866 12.7 21C12.7 20.6134 12.3866 20.3 12 20.3V21V21.7Z
			  M17.1619 6.84817C16.8885 7.12154 16.8885 7.56475 17.1619 7.83812C17.4352 8.11149 17.8785 8.11149 18.1518 7.83812L17.6569 7.34315L17.1619 6.84817Z
			  M19.495 6.49497C19.7683 6.22161 19.7683 5.77839 19.495 5.50503C19.2216 5.23166 18.7784 5.23166 18.505 5.50503L19 6L19.495 6.49497Z
			  M10 2.3C9.6134 2.3 9.3 2.6134 9.3 3C9.3 3.3866 9.6134 3.7 10 3.7V3V2.3Z
			  M14 3.7C14.3866 3.7 14.7 3.3866 14.7 3C14.7 2.6134 14.3866 2.3 14 2.3V3V3.7Z
			  M18.7696 10.2627C18.9147 10.621 19.3228 10.7939 19.6811 10.6489C20.0395 10.5038 20.2124 10.0957 20.0673 9.73735L19.4185 10L18.7696 10.2627Z
			  M19.2435 13.9134C19.1956 14.297 19.4679 14.6468 19.8515 14.6946C20.2351 14.7425 20.5849 14.4702 20.6327 14.0866L19.9381 14L19.2435 13.9134Z
			  M17.8527 17.3638C17.6214 17.6735 17.6849 18.1122 17.9947 18.3435C18.3044 18.5749 18.743 18.5113 18.9744 18.2016L18.4136 17.7827L17.8527 17.3638Z
			  M14.7373 19.7696C14.379 19.9147 14.2061 20.3228 14.3511 20.6811C14.4962 21.0395 14.9043 21.2124 15.2627 21.0673L15 20.4185L14.7373 19.7696Z
			  M19.7075 17.0388C19.8872 16.6965 19.7554 16.2734 19.4131 16.0937C19.0709 15.914 18.6477 16.0458 18.468 16.3881L19.0878 16.7134L19.7075 17.0388Z
			  M16.6899 20.3288C17.0154 20.1202 17.1101 19.6872 16.9014 19.3617C16.6927 19.0363 16.2597 18.9416 15.9343 19.1503L16.3121 19.7395L16.6899 20.3288Z
			  M9.68695 10.3739C9.34117 10.5468 9.20101 10.9673 9.3739 11.313C9.54679 11.6588 9.96726 11.799 10.313 11.6261L10 11L9.68695 10.3739Z
			  M12 10H12.7C12.7 9.7574 12.5744 9.53209 12.368 9.40454C12.1616 9.277 11.9039 9.26541 11.687 9.3739L12 10Z
			  M14 16.7C14.3866 16.7 14.7 16.3866 14.7 16C14.7 15.6134 14.3866 15.3 14 15.3V16V16.7Z
			  M10 15.3C9.6134 15.3 9.3 15.6134 9.3 16C9.3 16.3866 9.6134 16.7 10 16.7V16V15.3Z
			  M12 21V20.3C7.96832 20.3 4.7 17.0317 4.7 13H4H3.3C3.3 17.8049 7.19512 21.7 12 21.7V21Z
			  M4 13H4.7C4.7 8.96832 7.96832 5.7 12 5.7V5V4.3C7.19512 4.3 3.3 8.19512 3.3 13H4Z
			  M17.6569 7.34315L18.1518 7.83812L19.495 6.49497L19 6L18.505 5.50503L17.1619 6.84817L17.6569 7.34315Z
			  M10 3V3.7H12V3V2.3H10V3Z
			  M12 3V3.7H14V3V2.3H12V3Z
			  M12 3H11.3V5H12H12.7V3H12Z
			  M12 5V5.7C15.0625 5.7 17.6862 7.58607 18.7696 10.2627L19.4185 10L20.0673 9.73735C18.7772 6.55027 15.6523 4.3 12 4.3V5Z
			  M20 13H19.3C19.3 13.3096 19.2808 13.6145 19.2435 13.9134L19.9381 14L20.6327 14.0866C20.6772 13.7304 20.7 13.3677 20.7 13H20Z
			  M19.0878 16.7134L18.468 16.3881C18.2884 16.7301 18.0824 17.0562 17.8527 17.3638L18.4136 17.7827L18.9744 18.2016C19.248 17.8353 19.4934 17.4467 19.7075 17.0388L19.0878 16.7134Z
			  M16.3121 19.7395L15.9343 19.1503C15.5574 19.3919 15.157 19.5998 14.7373 19.7696L15 20.4185L15.2627 21.0673C15.7634 20.8646 16.2408 20.6168 16.6899 20.3288L16.3121 19.7395Z
			  M10 11L10.313 11.6261L12.313 10.6261L12 10L11.687 9.3739L9.68695 10.3739L10 11Z
			  M12 10H11.3V16H12H12.7V10H12Z
			  M12 16V16.7H14V16V15.3H12V16Z
			  M12 16V15.3H10V16V16.7H12V16Z`,
		}),
	),
	counter: fb(
		"svg",
		{
			version: "1.1",
			id: "openBookIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M12 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H12
			  M12 5V8
			  M12 5H15H17.8578
			  M12 11V13
			  M12 16V19
			  M12 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H17.8578
			  M6 10L8 9V15
			  M10 15H6
			  M18 8H15C17.5 7 18 5.5 17.8578 5
			  M15 11H16C17.1046 11 18 11.8954 18 13V13.5
			  M18 13.5H16
			  M18 13.5V14C18 15.1046 17.1046 16 16 16H15`,
		}),
	),
	dual_button: fb(
		"svg",
		{
			version: "1.1",
			id: "menuIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 17.5H18
			  M6 6.5H18
			  M21 16V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16C3 14.8954 3.89543 14 5 14H19C20.1046 14 21 14.8954 21 16Z
			  M21 5V8C21 9.10457 20.1046 10 19 10H5C3.89543 10 3 9.10457 3 8V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z`,
		}),
	),

	features_list: fb(
		"svg",
		{
			version: "1.1",
			id: "listIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M10 5H21
			  M10 12H21
			  M10 19H21
			  M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z
			  M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z
			  M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z`,
		}),
	),
	image_gallery: fb(
		"svg",
		{
			version: "1.1",
			id: "imageUploadIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M5 8H16C17.1046 8 18 8.89543 18 10V14
			  M5 8V8C3.89543 8 3 8.89543 3 10V19
			  M5 8L15.1966 3.75141C16.1994 3.3336 17.3523 3.79261 17.7935 4.78529L20.3151 10.459C20.7108 11.3492 20.4075 12.395 19.5969 12.9354L18 14
			  M18 14V19
			  M3 19V19C3 20.1046 3.89543 21 5 21H16C17.1046 21 18 20.1046 18 19V19
			  M3 19L5.42031 16.5797C5.75738 16.2426 6.2855 16.1903 6.68212 16.4547L8.31788 17.5453C8.7145 17.8097 9.24262 17.7574 9.57969 17.4203L12.2929 14.7071C12.6834 14.3166 13.3166 14.3166 13.7071 14.7071L18 19
			  M9 12V12C9 12.5523 8.55228 13 8 13V13C7.44772 13 7 12.5523 7 12V12C7 11.4477 7.44772 11 8 11V11C8.55228 11 9 11.4477 9 12Z`,
		}),
	),
	info_box: fb(
		"svg",
		{
			version: "1.1",
			id: "profileCardIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 15H13
			  M6 18H18
			  M21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z
			  M8 10V10C9.10457 10 10 9.10457 10 8V8C10 6.89543 9.10457 6 8 6V6C6.89543 6 6 6.89543 6 8V8C6 9.10457 6.89543 10 8 10Z`,
		}),
	),
	post_grid: fb(
		"svg",
		{
			version: "1.1",
			id: "gridIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 19V16C3 14.8954 3.89543 14 5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M14 19V16C14 14.8954 14.8954 14 16 14H17.5H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 8V5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M14 8V5C14 3.89543 14.8954 3 16 3H17.5H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H16C14.8954 10 14 9.10457 14 8Z`,
		}),
	),
	pricing_table: fb(
		"svg",
		{
			version: "1.1",
			id: "documentIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M18 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H18
			  M6 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H6
			  M13.5 6H12
			  M10.5 10H12
			  M12 5V6
			  M12 6H11.5C10.9477 6 10.5 6.44772 10.5 7V7C10.5 7.55228 10.9477 8 11.5 8H12H12.5C13.0523 8 13.5 8.44772 13.5 9V9C13.5 9.55228 13.0523 10 12.5 10H12
			  M12 10V11
			  M10 14H14
			  M9 16H15
			  M11 19H13
			  M18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5Z`,
		}),
	),
	team_members: fb(
		"svg",
		{
			version: "1.1",
			id: "userProfileIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			d: `M16.7143 14H7.28571C4.91878 14 3 15.9188 3 18.2857C3 19.2325 3.76751 20 4.71428 20H19.2857C20.2325 20 21 19.2325 21 18.2857C21 15.9188 19.0812 14 16.7143 14Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			d: `M12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4Z`,
		}),
	),
	testimonial: fb(
		"svg",
		{
			version: "1.1",
			id: "commentBoxIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 12H16
			  M6 15H18
			  M6 6H7
			  M9 6H10
			  M12 6H13
			  M13.4063 18.8906L12.416 20.376C12.2181 20.6728 11.7819 20.6728 11.584 20.376L10.5937 18.8906C10.2228 18.3342 9.59834 18 8.92963 18H5C3.89543 18 3 17.1046 3 16V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H15.0704C14.4017 18 13.7772 18.3342 13.4063 18.8906Z`,
		}),
	),
	social_icons: fb(
		"svg",
		{
			version: "1.1",
			id: "shareIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M15 7L9 10.5
			  M15 17L9 13.5
			  M20 18.5V18.5C20 19.8807 18.8807 21 17.5 21V21C16.1193 21 15 19.8807 15 18.5V18.5C15 17.1193 16.1193 16 17.5 16V16C18.8807 16 20 17.1193 20 18.5Z
			  M20 5.5V5.5C20 6.88071 18.8807 8 17.5 8V8C16.1193 8 15 6.88071 15 5.5V5.5C15 4.11929 16.1193 3 17.5 3V3C18.8807 3 20 4.11929 20 5.5Z
			  M9 12V12C9 13.3807 7.88071 14.5 6.5 14.5V14.5C5.11929 14.5 4 13.3807 4 12V12C4 10.6193 5.11929 9.5 6.5 9.5V9.5C7.88071 9.5 9 10.6193 9 12Z`,
		}),
	),
	contact_form: fb(
		"svg",
		{
			version: "1.1",
			id: "formIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 6H13
			  M6 9H18
			  M21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z
			  M8 18H16C17.1046 18 18 17.1046 18 16V16C18 14.8954 17.1046 14 16 14H8C6.89543 14 6 14.8954 6 16V16C6 17.1046 6.89543 18 8 18Z`,
		}),
	),
	progress_bar: fb(
		"svg",
		{
			version: "1.1",
			id: "tableIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M3 12H17
			  M21 12H17
			  M17 12V10
			  M17 12V14
			  M3 5H13
			  M21 5H13
			  M13 5V3
			  M13 5V7
			  M3 19H13
			  M21 19H13
			  M13 19V17
			  M13 19V21`,
		}),
	),
	icon_box: fb(
		"svg",
		{
			version: "1.1",
			id: "idCardIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M8.5 15H15.5
			  M6 18H18
			  M21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z
			  M12 10V10C13.1046 10 14 9.10457 14 8V8C14 6.89543 13.1046 6 12 6V6C10.8954 6 10 6.89543 10 8V8C10 9.10457 10.8954 10 12 10Z`,
		}),
	),
	fluent_form: fb(
		"svg",
		{
			version: "1.1",
			id: "formIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 6H13
			  M6 9H18
			  M21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5Z
			  M8 18H16C17.1046 18 18 17.1046 18 16V16C18 14.8954 17.1046 14 16 14H8C6.89543 14 6 14.8954 6 16V16C6 17.1046 6.89543 18 8 18Z`,
		}),
	),
	advanced_navigation: fb(
		"svg",
		{
			version: "1.1",
			id: "menuLinesIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 5H21
			  M3 12H21
			  M3 19H15`,
		}),
	),
	flip_box: fb(
		"svg",
		{
			version: "1.1",
			id: "pauseIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M12 3V7
			  M12 10V14
			  M12 17V21
			  M8.44721 17.2764L4.44721 19.2764C3.78231 19.6088 3 19.1253 3 18.382V6.61803C3 5.87465 3.78231 5.39116 4.44721 5.72361L8.44721 7.72361C8.786 7.893 9 8.23926 9 8.61803V16.382C9 16.7607 8.786 17.107 8.44721 17.2764Z
			  M15.5528 17.2764L19.5528 19.2764C20.2177 19.6088 21 19.1253 21 18.382V6.61803C21 5.87465 20.2177 5.39116 19.5528 5.72361L15.5528 7.72361C15.214 7.893 15 8.23926 15 8.61803V16.382C15 16.7607 15.214 17.107 15.5528 17.2764Z`,
		}),
	),
	accordion: fb(
		"svg",
		{
			version: "1.1",
			id: "accordionIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",

			d: `M6 17.5H13
			  M16 17L17 18L18 17
			  M6 6.5H13
			  M16 6L17 7L18 6
			  M3 8V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H5C3.89543 10 3 9.10457 3 8Z
			  M21 16V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16C3 14.8954 3.89543 14 5 14H19C20.1046 14 21 14.8954 21 16Z`,
		}),
	),
	container: fb(
		"svg",
		{
			version: "1.1",
			id: "layoutIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 8V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H5C3.89543 10 3 9.10457 3 8Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 19V16C3 14.8954 3.89543 14 5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19Z`,
		}),

		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M14 19V16C14 14.8954 14.8954 14 16 14H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19Z`,
		}),
	),
	slider: fb(
		"svg",
		{
			version: "1.1",
			id: "calendarListIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M7.5 7.5H16
				M6 10.5H18
				M8.5 20.5H9.5
				M11.5 20.5H12.5
				M14.5 20.5H15.5
				M7.5 13.5H16
				M21 5.5V15.5C21 16.6046 20.1046 17.5 19 17.5H5C3.89543 17.5 3 16.6046 3 15.5V5.5C3 4.39543 3.89543 3.5 5 3.5H19C20.1046 3.5 21 4.39543 21 5.5Z`,
		}),
	),
	carousel: fb(
		"svg",
		{
			version: "1.1",
			id: "columnsIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M21 5V5C19.8954 5 19 5.89543 19 7V17C19 18.1046 19.8954 19 21 19V19
			  M3 5V5C4.10457 5 5 5.89543 5 7V17C5 18.1046 4.10457 19 3 19V19
			  M16 7V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17V7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7Z`,
		}),
	),
	loop_builder: fb(
		"svg",
		{
			version: "1.1",
			id: "splitScreenIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H15
			  M9 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H18
			  M9 6L12 9
			  M9 6L12 3
			  M15 18L12 15
			  M15 18L12 21`,
		}),
	),
	google_map: fb(
		"svg",
		{
			version: "1.1",
			id: "buildingIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M15 7L10.1094 3.7396C9.4376 3.29173 8.5624 3.29173 7.8906 3.7396L3.8906 6.40627C3.3342 6.7772 3 7.40166 3 8.07037V19.382C3 20.1253 3.78231 20.6088 4.44721 20.2764L9 18
			  M15 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H15.4721C15.1616 21 14.8554 20.9277 14.5777 20.7889L9 18
			  M15 7V9
			  M9 18V16
			  M15 12V16
			  M9 9V13
			  M15 19V20.5
			  M9 3.5V6`,
		}),
	),
	tabs: fb(
		"svg",
		{
			version: "1.1",
			id: "tabIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6V6
			  M9 3V6H14
			  M9 3H12C13.1046 3 14 3.89543 14 5V6
			  M14 6H19
			  M19 6V5C19 3.89543 18.1046 3 17 3H12
			  M7 12H14
			  M7 16H17`,
		}),
	),
	post_title: fb(
		"svg",
		{
			version: "1.1",
			id: "postTitleIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M3 19L5 13
			  M13 19L11 13
			  M11 13L8.93633 7.49688C8.61189 6.63171 7.38811 6.63171 7.06367 7.49688L5 13
			  M11 13H5
			  M21 13V17.2857C21 18.2325 20.2325 19 19.2857 19H18C16.3431 19 15 17.6569 15 16C15 14.3431 16.3431 13 18 13H21
			  M21 13V12C21 10.8954 20.1046 10 19 10H16`,
		}),
	),
	advanced_paragraph: fb(
		"svg",
		{
			version: "1.1",
			id: "advancedParagraphIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M12 6H21
			  M12 9H21
			  M3 13H21
			  M3 16H21
			  M3 19H21
			  M3 7.5H9
			  M9 7.5L7 5
			  M9 7.5L7 10`,
		}),
	),
	post_category: fb(
		"svg",
		{
			version: "1.1",
			id: "postCategoryIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M6 15V13C6 12.4477 6.44772 12 7 12H12
			  M18 15V13C18 12.4477 17.5523 12 17 12H12
			  M12 12V9
			  M11 9H13C14.1046 9 15 8.10457 15 7V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V7C9 8.10457 9.89543 9 11 9Z
			  M17 21H19C20.1046 21 21 20.1046 21 19V17C21 15.8954 20.1046 15 19 15H17C15.8954 15 15 15.8954 15 17V19C15 20.1046 15.8954 21 17 21Z
			  M5 21H7C8.10457 21 9 20.1046 9 19V17C9 15.8954 8.10457 15 7 15H5C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21Z`,
		}),
	),
	post_comment_form: fb(
		"svg",
		{
			version: "1.1",
			id: "postCommentFormIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M18 12V16C18 17.1046 17.1046 18 16 18H13.9367C13.3432 18 12.7803 18.2636 12.4003 18.7196L10.5 21L8.59969 18.7196C8.2197 18.2636 7.65681 18 7.06325 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6H12
			  M15 6H21
			  M18 9V3
			  M6 14H15
			  M6 11H12`,
		}),
	),
	post_featured_image: fb(
		"svg",
		{
			version: "1.1",
			id: "postFeaturedImageIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinejoin: "round",
			d: `M21 17V18C21 19.1046 20.1046 20 19 20H14
			  M21 17V7V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V7V16
			  M21 17L16.5801 12.5801C15.7372 11.7372 14.3488 11.8141 13.6041 12.7449L11 16
			  M3 16V18C3 19.1046 3.89543 20 5 20H14
			  M3 16L6.3887 13.289C7.27034 12.5837 8.56066 12.7475 9.23809 13.6508L11 16
			  M14 20L11 16
			  M10.5 10C9.67157 10 9 9.32843 9 8.5C9 7.67157 9.67157 7 10.5 7C11.3284 7 12 7.67157 12 8.5C12 9.32843 11.3284 10 10.5 10Z`,
		}),
	),
	news_ticker: fb(
		"svg",
		{
			version: "1.1",
			id: "newsTickerIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "20",
			height: "16",
			viewBox: "0 0 20 16",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			d: `M4 11H11
			  M14 11H16
			  M8 2.5C8 3.32843 7.32843 4 6.5 4H2.5C1.67157 4 1 3.32843 1 2.5C1 1.67157 1.67157 1 2.5 1H6.5C7.32843 1 8 1.67157 8 2.5Z
			  M3 7H17C18.1046 7 19 7.89543 19 9V13C19 14.1046 18.1046 15 17 15H3C1.89543 15 1 14.1046 1 13V9C1 7.89543 1.89543 7 3 7Z`,
		}),
	),
	business_hours: fb(
		"svg",
		{
			version: "1.1",
			id: "businessHoursIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M10.5 18C7.23445 18 4.45636 15.913 3.42676 13
			  M10.5 18C7 13 7 8 10.5 3
			  M10.5 18C10.5102 17.9855 10 18 11 18
			  M3.42676 13C3.15039 12.2181 3 11.3766 3 10.5C3 9.62341 3.15039 8.78195 3.42676 8
			  M3.42676 13H9.5
			  M10.5 3C7.23445 3 4.45636 5.08702 3.42676 8
			  M10.5 3C13.7655 3 16.5436 5.08702 17.5732 8
			  M10.5 3C11.9151 5.02158 12.7581 7.04316 13.0289 9.06475
			  M3.42676 8H17.5732
			  M17.5732 8C17.6877 8.32371 17.7805 8.65762 17.85 9
			  M16 14V16H18
			  M11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z`,
		}),
	),
	breadcrumb: fb(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: "M7 18H3L9 12L3 6H7L13 12L7 18Z",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
		fb("path", {
			d: "M17 12L11 6H15L21 12L15 18H11L17 12Z",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		})
	),
	off_canvas_menu: fb(
		"svg",
		{
			version: "1.1",
			id: "offCanvasMenuIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("rect", {
			x: 2,
			y: 4,
			width: 20,
			height: 16,
			rx: 2.5,
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
		}),
		fb("circle", {
			cx: 6,
			cy: 9,
			r: 1,
			fill: "#0B0C0E",
		}),
		fb("circle", {
			cx: 6,
			cy: 12,
			r: 1,
			fill: "#0B0C0E",
		}),
		fb("circle", {
			cx: 6,
			cy: 15,
			r: 1,
			fill: "#0B0C0E",
		}),
		fb("path", {
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: `M15 9L12 12L15 15`,
		}),
	),
	lottie_animation: fb(
		"svg",
		{
			version: "1.1",
			id: "lottieAnimationIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: `M16 8C16 8 13 8 12 12C11 16 8 16 8 16
				M21 5V19C21 20.1046 20.1046 21 19 21H5
				C3.89543 21 3 20.1046 3 19V5
				C3 3.89543 3.89543 3 5 3H19
				C20.1046 3 21 3.89543 21 5Z`,
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
	),
	rive_animation: fb(
		"svg",
		{
			version: "1.1",
			id: "riveAnimationIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: `M3 3H16C18.7614 3 21 5.23858 21 8C21 10.7614 18.7614 13 16 13H14M7 13H14M20 21L14 13`,
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
	),
	advanced_search: fb(
		"svg",
		{
			version: "1.1",
			id: "advancedSearchIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: `M6.21429 10.5C6.21429 8.35714 8.35714 6.21429 10.5 6.21429M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z`,
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
			strokeLinecap: "round",
		}),
	),
	circle_menu: fb(
		"svg",
		{
			version: "1.1",
			id: "circleMenuIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
			fill: "#0B0C0E",
		}),
		fb("path", {
			d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
			fill: "#0B0C0E",
		}),
		fb("path", {
			d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
			fill: "#0B0C0E",
		}),
		fb("path", {
			d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.5,
			strokeLinecap: "round",
		}),
	),
	stacked_cards: fb(
		"svg",
		{
			version: "1.1",
			id: "stackedCardsIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			className: "frontis-blocks-editor-icons",
		},
		fb("rect", {
			x: "3",
			y: "7",
			width: "12",
			height: "14",
			rx: "2",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
		}),
		fb("rect", {
			x: "6",
			y: "5",
			width: "12",
			height: "14",
			rx: "2",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
		}),
		fb("rect", {
			x: "9",
			y: "3",
			width: "12",
			height: "14",
			rx: "2",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.4,
		})
	),
	back_to_top: fb(
		"svg",
		{
			version: '1.1',
			id: 'backToTopIcon',
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 1024 1024',
			width: '24',
			height: '24',
			fill: 'currentColor',
			className: 'frontis-blocks-editor-icons',
		},
		fb('path', {
			d: 'M536.797267 281.753035c-4.232394-6.344498-10.273994-11.05887-17.347087-13.536294-3.714602-1.481747-7.735172-2.266623-12.144598-2.266623l-0.183172 0-1.147126-0.12075c-0.575098 0-1.026376 0.090051-1.601474 0.150426-4.229325 0-8.18645 0.7552-11.69332 2.145873-7.312546 2.508123-13.385868 7.312546-17.223267 13.355169l-254.17698 254.752078c-5.952572 5.921873-9.18622 13.990642-9.18622 22.691815 0 9.66922 4.110621 19.24839 11.17962 26.318412 7.010671 6.980995 16.075117 10.850116 25.501814 10.850116 8.702196 0 16.861016-3.325745 23.024389-9.457396 0.242524-0.302899 0.544399-0.544399 0.847298-0.847298 0.63445-0.544399 1.388627-1.24127 1.721201-1.783623l195.588607-195.256032 0.393973 469.799876c-0.151449 1.026376-0.151449 1.962701-0.091074 2.870374l0.060375 1.088798c0 17.675568 15.47239 31.513738 35.233456 31.513738 19.942191 0 36.07666-14.140045 36.07666-31.513738l0.364297-473.759047 195.34506 194.98281c0.632403 0.787946 1.328251 1.452071 2.084475 2.087545l0.846274 0.816598c6.104021 6.131651 14.262842 9.457396 22.961968 9.457396 9.428743 0 18.49319-3.868097 25.504884-10.850116 14.07967-14.048971 14.987343-36.016285 1.991354-49.010227L536.797267 281.753035zM887.66338 129.97933 124.346541 129.97933c-17.706267 0-32.073486 14.382569-32.073486 32.028461 0 17.675568 14.367219 32.05916 32.073486 32.05916l763.317862 0c17.677615 0 32.060183-14.383592 32.060183-32.05916C919.723563 144.361899 905.342018 129.97933 887.66338 129.97933',
		}),
	),

	vertical_timeline: fb(
		'svg',
		{
			version: '1.1',
			id: 'timelineIcon',
			xmlns: 'http://www.w3.org/2000/svg',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			className: 'frontis-blocks-editor-icons',
		},
		fb('path', {
			fill: '#0B0C0E',
			fillRule: 'nonzero',
			d: `M15.2496718,13 C16.2161701,13 16.9996718,13.7835017 16.9996718,14.75 L16.9996718,19.25 C16.9996718,20.2164983 16.2161701,21 15.2496718,21 L3.74967178,21 C2.78317347,21 1.99967178,20.2164983 1.99967178,19.25 L1.99967178,14.75 C1.99967178,13.7835017 2.78317347,13 3.74967178,13 L15.2496718,13 Z M20.9999472,14.8988691 L20.9996863,20.25 C20.9996863,20.6642136 20.6638999,21 20.2496863,21 C19.8699905,21 19.5561953,20.7178461 19.5065329,20.3517706 L19.4996863,20.25 L19.499308,14.9117103 C19.7315928,14.9693895 19.9745687,15 20.2246942,15 C20.4927784,15 20.7526497,14.9648361 20.9999472,14.8988691 Z M15.2496718,14.5 L3.74967178,14.5 C3.6116006,14.5 3.49967178,14.6119288 3.49967178,14.75 L3.49967178,19.25 C3.49967178,19.3880712 3.6116006,19.5 3.74967178,19.5 L15.2496718,19.5 C15.387743,19.5 15.4996718,19.3880712 15.4996718,19.25 L15.4996718,14.75 C15.4996718,14.6119288 15.387743,14.5 15.2496718,14.5 Z M20.2494639,10.0919271 C21.3032635,10.0919271 22.1575368,10.9462004 22.1575368,12 C22.1575368,13.0537996 21.3032635,13.9080729 20.2494639,13.9080729 C19.1956643,13.9080729 18.341391,13.0537996 18.341391,12 C18.341391,10.9462004 19.1956643,10.0919271 20.2494639,10.0919271 Z M15.2452829,3 C16.2117813,3 16.9952829,3.78350169 16.9952829,4.75 L16.9952829,9.25 C16.9952829,10.2164983 16.2117813,11 15.2452829,11 L3.74528294,11 C2.77878463,11 1.99528294,10.2164983 1.99528294,9.25 L1.99528294,4.75 C1.99528294,3.8318266 2.70239322,3.07880766 3.60175573,3.0058012 L3.74528294,3 L15.2452829,3 Z M15.2452829,4.5 L3.74528294,4.5 L3.68796024,4.50660268 C3.57751636,4.53251318 3.49528294,4.63165327 3.49528294,4.75 L3.49528294,9.25 C3.49528294,9.38807119 3.60721176,9.5 3.74528294,9.5 L15.2452829,9.5 C15.3833541,9.5 15.4952829,9.38807119 15.4952829,9.25 L15.4952829,4.75 C15.4952829,4.61192881 15.3833541,4.5 15.2452829,4.5 Z M20.2496863,3 C20.6293821,3 20.9431773,3.28215388 20.9928397,3.64822944 L20.9996863,3.75 L20.9999472,9.10113095 C20.7526497,9.0351639 20.4927784,9 20.2246942,9 C19.9745687,9 19.7315928,9.03061049 19.499308,9.0882897 L19.4996863,3.75 C19.4996863,3.33578644 19.8354727,3 20.2496863,3 Z`,
		})
	),

	image_comparison: fb(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			className: 'frontis-blocks-editor-icons',
		},
		fb('path', {
			d: 'M12 3H19C20.1046 3 21 3.89543 21 5V15M21 15L17.4142 11.4142C16.6332 10.6332 15.3668 10.6332 14.5858 11.4142L12 14M21 15V19C21 20.1046 20.1046 21 19 21H15M12 21H15M15 21L12 18',
			stroke: '#8891A5',
			strokeWidth: '1.4',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		}),
		fb('path', {
			d: 'M3 17V19C3 20.1046 3.89543 21 5 21H12V3H5C3.89543 3 3 3.89543 3 5V17ZM3 17L5.58579 14.4142C6.36684 13.6332 7.63316 13.6332 8.41421 14.4142L10 16M10 16L12 14M10 16L12 18M11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5Z',
			stroke: '#0B0C0E',
			strokeWidth: '1.4',
			strokeLinecap: 'round',
		}),
	),
	multi_chart: fb(
     	'svg',
     	{
     		xmlns: 'http://www.w3.org/2000/svg',
     		width: '24',
     		height: '24',
     		viewBox: '0 0 24 24',
     		fill: 'none',
     		className: 'frontis-blocks-editor-icons',
     	},

     	fb('path', {
     		d: 'M19.5 13C19.5 14.5823 19.0308 15.629 18.1518 16.9446C17.2727 18.2602 16.0233 19.2855 14.5615 19.891C13.0997 20.4965 11.4911 20.655 9.93928 20.3463C8.38743 20.0376 6.96197 19.2757 5.84315 18.1569C4.72433 17.038 3.9624 15.6126 3.65372 14.0607C3.34504 12.5089 3.50347 10.9003 4.10897 9.43853C4.71447 7.97672 5.73985 6.72729 7.05544 5.84824C8.37104 4.96919 9.41775 4.5 11 4.5V13H19.5Z',
     		stroke: '#0B0C0E',
     		strokeWidth: '1.4',
     		strokeLinejoin: 'round',
     	}),

     	fb('path', {
     		d: 'M13.5 3.5C14.4193 3.5 15.3295 3.68106 16.1788 4.03284C17.0281 4.38463 17.7997 4.90024 18.4498 5.55025C19.0998 6.20026 19.6154 6.97194 19.9672 7.82122C20.3189 8.6705 20.5 9.58075 20.5 10.5L13.5 10.5V3.5Z',
     		stroke: '#0B0C0E',
     		strokeWidth: '1.4',
     		strokeLinejoin: 'round',
     	}),
     ),

	image_hotspot: fb(
		"svg",
		{
			version: "1.1",
			id: "mobileHotspotIcon",
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			className: "frontis-blocks-editor-icons",
		},
		fb("path", {
			d: "M12 13V21",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
		fb("path", {
			d: "M9 21H15",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
		fb("line", {
			x1: "11.95",
			y1: "12",
			x2: "12.05",
			y2: "12",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
		fb("path", {
			d: "M5.64 18.36A9 9 0 1 1 18.36 18.36",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
		fb("path", {
			d: "M15.54 15.54A5 5 0 1 0 8.46 15.54",
			fill: "none",
			stroke: "#0B0C0E",
			strokeWidth: 1.2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
		}),
	),
};

export const renderFbBlockIcon = (blockName) => (
	<>
		{FB_Block_Icons[blockName]}
		<div className="fb-icon--block-inserter-label">Legacy</div>
	</>
);

export default FB_Block_Icons;
