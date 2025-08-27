import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

const REACT_TYPE = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.element") : 0xeac7;

function reactElementToDom(el, parentIsSvg = false) {
  if (el == null || typeof el === "boolean") return null;

  if (typeof el === "string" || typeof el === "number") {
    return document.createTextNode(String(el));
  }

  if (el instanceof Element || el instanceof SVGElement) return el;

  if (el.$$typeof === REACT_TYPE) {
    const { type, props = {} } = el;

    const isSvgTag = parentIsSvg || type === "svg";
    const ns = isSvgTag ? "http://www.w3.org/2000/svg" : undefined;

    const node = ns
      ? document.createElementNS(ns, type)
      : document.createElement(type);

    // set props (except children)
    Object.keys(props).forEach((key) => {
      if (key === "children" || key === "dangerouslySetInnerHTML" || key === "ref") return;

    // className → class
      if (key === "className") {
        node.setAttribute("class", props[key]);
        return;
      }
      // style object
      if (key === "style" && typeof props.style === "object") {
        Object.assign(node.style, props.style);
        return;
      }

      try {
        if (ns) {
          node.setAttribute(key, props[key]);
        } else {
          node.setAttribute(key, props[key]);
        }
      } catch {

      }
    });

    // dangerouslySetInnerHTML
    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      node.innerHTML = props.dangerouslySetInnerHTML.__html;
    } else if (props.children != null) {
      const kids = Array.isArray(props.children) ? props.children : [props.children];
      kids.forEach((kid) => {
        const childNode = reactElementToDom(kid, isSvgTag);
        if (childNode) node.appendChild(childNode);
      });
    }

    return node;
  }

  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fb-query-pagination-wrapper").forEach(wrapper => {
    const prevIconName = wrapper.dataset.paginationPrevIcon || "chevron-left";
    const nextIconName = wrapper.dataset.paginationNextIcon || "chevron-right";

    const prevBtn = wrapper.querySelector(".fb-page-prev .fb-pagination-icon");
    const nextBtn = wrapper.querySelector(".fb-page-next .fb-pagination-icon");

    if (prevBtn) {
      const prevIconRaw = renderSVG(prevIconName);
      console.log(prevIconRaw);         
      const prevSvg = reactElementToDom(prevIconRaw, true);
      if (prevSvg) {
        prevSvg.setAttribute("aria-hidden", "true");
        prevSvg.setAttribute("focusable", "false");
        prevBtn.replaceChildren(prevSvg);
      }
    }

    if (nextBtn) {
      const nextIconRaw = renderSVG(nextIconName);
      const nextSvg = reactElementToDom(nextIconRaw, true);
      if (nextSvg) {
        nextSvg.setAttribute("aria-hidden", "true");
        nextSvg.setAttribute("focusable", "false");
        nextBtn.replaceChildren(nextSvg);
      }
    }
  });
});

