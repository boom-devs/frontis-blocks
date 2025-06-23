
import { createRoot } from "@wordpress/element"
import { subscribe } from '@wordpress/data'
import TemplatesLibrary from "./templates"
import './style.scss';

document.addEventListener('DOMContentLoaded', function () {
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