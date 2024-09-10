import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import svgIcon from "../../components/icon-picker/components/svgIcon";

// console.log(fb_blocks_info)


// fetch(fb_blocks_info.plugin_url + 'build/blocks/icon-picker/render.php', {
// 	method: 'POST',
// 	headers: {
// 	  'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify(svgIcon) // Send the object as JSON
//   })
//   .then(response => response.json())
//   .then(data => {
// 	console.log('Success:', data);
//   })
//   .catch(error => {
// 	console.error('Error:', error);
//   });

//
// // Get the SVG content
// const svgContent = renderSVG('address-book');
//
// // Function to create an SVG element from the JSON structure
// function createSVGElement(content) {
// 	// Create an <svg> element
// 	const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//
// 	// Set attributes for the <svg> element
// 	svgElement.setAttribute("xmlns", content.props.xmlns);
// 	svgElement.setAttribute("viewBox", content.props.viewBox);
//
// 	// Create a <path> element
// 	const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
//
// 	// Set the "d" attribute from the JSON structure
// 	pathElement.setAttribute("d", content.props.children.props.d);
//
// 	// Append the <path> to the <svg>
// 	svgElement.appendChild(pathElement);
//
// 	return svgElement;
// }
//
// // Use the function to create an SVG element
// const svgElement = createSVGElement(svgContent);
//
// // Append it to an element by ID
// document.getElementById('icon').appendChild(svgElement);
