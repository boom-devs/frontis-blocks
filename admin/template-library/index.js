
import { createRoot } from "@wordpress/element"
import { subscribe } from '@wordpress/data'
import TemplatesLibrary from "./templates"

document.addEventListener('DOMContentLoaded', function () {
	console.log("Hey there i am here")
	const buttonDiv = document.createElement('div')
	buttonDiv.classList.add('fb-template-library-button-wrapper')
	const root = createRoot(buttonDiv);
	root.render(<TemplatesLibrary />);

	subscribe(() => {
		const toplbar = document.querySelector('.edit-post-header-toolbar')
		if (toplbar) {
			toplbar.appendChild(buttonDiv)
		}
	})
});
