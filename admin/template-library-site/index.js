// index.js
import { createRoot } from "@wordpress/element";
import { Provider } from "react-redux";
import TemplatesLibrary from "./templates";
import { store } from "./store/store";
import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("frontis-dl");

  if (!container) {
    console.warn('Element with ID "frontis-dl" not found.');
    return;
  }

  // Optional: Add wrapper class for styling
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("fb-template-library-button-wrapper");
  container.appendChild(buttonDiv);

  // Create React root and render
  const root = createRoot(buttonDiv);
  root.render(
    <Provider store={store}>
      <TemplatesLibrary />
    </Provider>
  );
});
