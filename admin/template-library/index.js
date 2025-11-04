
import { createRoot } from "@wordpress/element"
import { subscribe } from "@wordpress/data"
import { Provider } from "react-redux";
import TemplatesLibrary from "./templates"
import { store } from "./store/store";
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', function () {
	const buttonDiv = document.createElement('div')
	buttonDiv.classList.add('fb-template-library-button-wrapper')
	const root = createRoot(buttonDiv);
	// root.render(<TemplatesLibrary />);
	root.render(
        <Provider store={store}>
            <TemplatesLibrary />
        </Provider>
    );

	subscribe(() => {
		const toplbar = document.querySelector('.edit-post-header-toolbar')
		if (toplbar) {
			toplbar.appendChild(buttonDiv)
		}
	})
});
