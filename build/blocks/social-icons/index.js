/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenText: () => (/* binding */ HiddenText),
/* harmony export */   LiveRegion: () => (/* binding */ LiveRegion),
/* harmony export */   useAnnouncement: () => (/* binding */ useAnnouncement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const hiddenStyles = {
  display: 'none'
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  // Hide element visually but keep it readable by screen readers
  const visuallyHidden = {
    position: 'fixed',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const announce = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}


//# sourceMappingURL=accessibility.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/core/dist/core.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@dnd-kit/core/dist/core.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoScrollActivator: () => (/* binding */ AutoScrollActivator),
/* harmony export */   DndContext: () => (/* binding */ DndContext),
/* harmony export */   DragOverlay: () => (/* binding */ DragOverlay),
/* harmony export */   KeyboardCode: () => (/* binding */ KeyboardCode),
/* harmony export */   KeyboardSensor: () => (/* binding */ KeyboardSensor),
/* harmony export */   MeasuringFrequency: () => (/* binding */ MeasuringFrequency),
/* harmony export */   MeasuringStrategy: () => (/* binding */ MeasuringStrategy),
/* harmony export */   MouseSensor: () => (/* binding */ MouseSensor),
/* harmony export */   PointerSensor: () => (/* binding */ PointerSensor),
/* harmony export */   TouchSensor: () => (/* binding */ TouchSensor),
/* harmony export */   TraversalOrder: () => (/* binding */ TraversalOrder),
/* harmony export */   applyModifiers: () => (/* binding */ applyModifiers),
/* harmony export */   closestCenter: () => (/* binding */ closestCenter),
/* harmony export */   closestCorners: () => (/* binding */ closestCorners),
/* harmony export */   defaultAnnouncements: () => (/* binding */ defaultAnnouncements),
/* harmony export */   defaultCoordinates: () => (/* binding */ defaultCoordinates),
/* harmony export */   defaultDropAnimation: () => (/* binding */ defaultDropAnimationConfiguration),
/* harmony export */   defaultDropAnimationSideEffects: () => (/* binding */ defaultDropAnimationSideEffects),
/* harmony export */   defaultScreenReaderInstructions: () => (/* binding */ defaultScreenReaderInstructions),
/* harmony export */   getClientRect: () => (/* binding */ getClientRect),
/* harmony export */   getFirstCollision: () => (/* binding */ getFirstCollision),
/* harmony export */   getScrollableAncestors: () => (/* binding */ getScrollableAncestors),
/* harmony export */   pointerWithin: () => (/* binding */ pointerWithin),
/* harmony export */   rectIntersection: () => (/* binding */ rectIntersection),
/* harmony export */   useDndContext: () => (/* binding */ useDndContext),
/* harmony export */   useDndMonitor: () => (/* binding */ useDndMonitor),
/* harmony export */   useDraggable: () => (/* binding */ useDraggable),
/* harmony export */   useDroppable: () => (/* binding */ useDroppable),
/* harmony export */   useSensor: () => (/* binding */ useSensor),
/* harmony export */   useSensors: () => (/* binding */ useSensors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/accessibility */ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js");





const DndMonitorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDndMonitor(listener) {
  const registerListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DndMonitorContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!registerListener) {
      throw new Error('useDndMonitor must be used within a children of <DndContext>');
    }

    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}

function useDndMonitorProvider() {
  const [listeners] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new Set());
  const registerListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_ref => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach(listener => {
      var _listener$type;

      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}

const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },

  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;

    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }

    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },

  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;

    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }

    return "Draggable item " + active.id + " was dropped.";
  },

  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }

};

function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = (0,_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.useAnnouncement)();
  const liveRegionId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)("DndLiveRegion");
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },

    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;

      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },

    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },

    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },

    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }

  }), [announce, announcements]));

  if (!mounted) {
    return null;
  }

  const markup = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  }));
  return container ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(markup, container) : markup;
}

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop() {}

function useSensor(sensor, options) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});

/**
 * Returns the distance between two points
 */
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getRelativeTransformOrigin(event, rect) {
  const eventCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event);

  if (!eventCoordinates) {
    return '0 0';
  }

  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return transformOrigin.x + "% " + transformOrigin.y + "%";
}

/**
 * Sort collisions from smallest to greatest value
 */
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */

function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */

function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }

  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

/**
 * Returns the coordinates of the center of a given ClientRect
 */

function centerOfRectangle(rect, left, top) {
  if (left === void 0) {
    left = rect.left;
  }

  if (top === void 0) {
    top = rect.top;
  }

  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */


const closestCenter = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: distBetween
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */

const closestCorners = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the intersecting rectangle area between two rectangles
 */

function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */

const rectIntersection = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }

  return collisions.sort(sortCollisionsDesc);
};

/**
 * Check if a given point is contained within a bounding rectangle
 */

function isPointWithinRect(point, rect) {
  const {
    top,
    left,
    bottom,
    right
  } = rect;
  return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */


const pointerWithin = _ref => {
  let {
    droppableContainers,
    droppableRects,
    pointerCoordinates
  } = _ref;

  if (!pointerCoordinates) {
    return [];
  }

  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
      /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */
      const corners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner) => {
        return accumulator + distanceBetween(pointerCoordinates, corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), { ...rect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function parseTransform(transform) {
  if (transform.startsWith('matrix3d(')) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith('matrix(')) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }

  return null;
}

function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);

  if (!parsedTransform) {
    return rect;
  }

  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

const defaultOptions = {
  ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */

function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  let rect = element.getBoundingClientRect();

  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(element);

    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }

  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */

function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}

function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(node).getComputedStyle(node);
  }

  return computedStyle.position === 'fixed';
}

function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(element);
  }

  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.some(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  });
}

function getScrollableAncestors(element, limit) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }

    if (!node) {
      return scrollParents;
    }

    if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isDocument)(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(node) || (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isSVGElement)(node)) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(node);

    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  if (!element) {
    return scrollParents;
  }

  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}

function getScrollableElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM || !element) {
    return null;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element;
  }

  if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isNode)(element)) {
    return null;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isDocument)(element) || element === (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(element).scrollingElement) {
    return window;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element)) {
    return element;
  }

  return null;
}

function getScrollXCoordinate(element) {
  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element.scrollX;
  }

  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element.scrollY;
  }

  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function isDocumentScrollingElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;

  if (acceleration === void 0) {
    acceleration = 10;
  }

  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }

  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}

function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  if (!element) {
    return;
  }

  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);

  if (!firstScrollableAncestor) {
    return;
  }

  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  }
}

const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect
    };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }

    Object.defineProperty(this, 'rect', {
      enumerable: false
    });
  }

}

class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };

    this.target = target;
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(target) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  const {
    EventTarget
  } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target);
  return target instanceof EventTarget ? target : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["DragStart"] = "dragstart";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;

  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target));
    this.windowListeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;

    if (node) {
      scrollIntoViewIfNeeded(node);
    }

    onStart(defaultCoordinates);
  }

  handleKeyDown(event) {
    if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;

      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });

      if (newCoordinates) {
        const coordinatesDelta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;

            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }

            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }

            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;

            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }

            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }

            break;
          }
        }

        this.handleMove(event, (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;

      if (activator && event.target !== activator) {
        return false;
      }

      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget) {
    var _getEventCoordinates;

    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }

    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target));
    this.initialCoordinates = (_getEventCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    var _getEventCoordinates2;

    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (_getEventCoordinates2 = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(initialCoordinates, coordinates); // Constraint validation

    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }

      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }

      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onEnd
    } = this.props;
    this.detach();
    onEnd();
  }

  handleCancel() {
    const {
      onCancel
    } = this.props;
    this.detach();
    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useInterval)();
  const scrollSpeed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  const scrollDirection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const autoScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrollContainerRect = scrollableAncestorRects[index];

      if (!scrollContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

      for (const axis of ['x', 'y']) {
        if (!scrollIntent[axis][direction[axis]]) {
          speed[axis] = 0;
          direction[axis] = 0;
        }
      }

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(scrollIntent), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};

function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(delta);
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousIntent => {
    if (disabled || !previousDelta || !previousIntent) {
      // Reset scroll intent tracking when auto-scrolling is disabled
      return defaultScrollIntent;
    }

    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    }; // Keep track of the user intent to scroll in each direction for both axis

    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id !== null ? draggableNodes.get(id) : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(cachedNode => {
    var _ref;

    if (id === null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(containers);
  const disabled = isDisabled();
  const disabledRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(disabled);
  const measureDroppableContainers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (ids) {
    if (ids === void 0) {
      ids = [];
    }

    if (disabledRef.current) {
      return;
    }

    setQueue(value => {
      if (value === null) {
        return ids;
      }

      return value.concat(ids.filter(id => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const droppableRects = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = new Map();

      for (let container of containers) {
        if (!container) {
          continue;
        }

        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          // This container does not need to be re-measured
          map.set(container.id, container.rect.current);
          continue;
        }

        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;

        if (rect) {
          map.set(container.id, rect);
        }
      }

      return map;
    }

    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }

    measureDroppableContainers();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (queue && queue.length > 0) {
      setQueue(null);
    }
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(queue)]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      measureDroppableContainers();
      timeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

function useInitialValue(value, computeFn) {
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!value) {
      return null;
    }

    if (previousValue) {
      return previousValue;
    }

    return typeof computeFn === 'function' ? computeFn(value) : value;
  }, [computeFn, value]);
}

function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}

/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */

function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)(callback);
  const mutationObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
      return undefined;
    }

    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}

/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */

function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)(callback);
  const resizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
      return undefined;
    }

    const {
      ResizeObserver
    } = window;
    return new ResizeObserver(handleResize);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}

function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}

function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }

  const [rect, measureRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, null);
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }

      for (const record of records) {
        const {
          type,
          target
        } = record;

        if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }

  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    measureRect();

    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;

  function reducer(currentRect) {
    if (!element) {
      return null;
    }

    if (element.isConnected === false) {
      var _ref;

      // Fall back to last rect we measured if the element is
      // no longer connected to the DOM.
      return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
    }

    const newRect = measure(element);

    if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
      return currentRect;
    }

    return newRect;
  }
}

function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(node);
  const ancestors = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }

  const initialScrollOffsets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    initialScrollOffsets.current = null;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  dependencies);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;

    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }

    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}

function useSensorSetup(sensors) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM) {
      return;
    }

    const teardownFns = sensors.map(_ref => {
      let {
        sensor
      } = _ref;
      return sensor.setup == null ? void 0 : sensor.setup();
    });
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(_ref2 => {
    let {
      sensor
    } = _ref2;
    return sensor;
  }));
}

function useSyntheticListeners(listeners, id) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;

      acc[eventName] = event => {
        handler(event, id);
      };

      return acc;
    }, {});
  }, [listeners, id]);
}

function useWindowRect(element) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}

const defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(firstElement) : null);
  const [rects, measureRects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, defaultValue$2);
  const resizeObserver = useResizeObserver({
    callback: measureRects
  });

  if (elements.length > 0 && rects === defaultValue$2) {
    measureRects();
  }

  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (elements.length) {
      elements.forEach(element => resizeObserver == null ? void 0 : resizeObserver.observe(element));
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      measureRects();
    }
  }, [elements]);
  return rects;

  function reducer() {
    if (!elements.length) {
      return defaultValue$2;
    }

    return elements.map(element => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
  }
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(entries => {
    for (const {
      target
    } of entries) {
      if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(target)) {
        setRect(rect => {
          const newRect = measure(target);
          return rect ? { ...rect,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();

    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }

    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)(handleNodeChange);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(_ref => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /*#__PURE__*/new Map(),
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ''
  },
  dispatch: noop,
  draggableNodes: /*#__PURE__*/new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultInternalContext);
const PublicContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultPublicContext);

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (!state.draggable.active) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const previousActivatorEvent = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(activatorEvent);
  const previousActiveId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }

    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(previousActivatorEvent)) {
        return;
      }

      if (document.activeElement === previousActivatorEvent.target) {
        // No need to restore focus
        return;
      }

      const draggableNode = draggableNodes.get(previousActiveId);

      if (!draggableNode) {
        return;
      }

      const {
        activatorNode,
        node
      } = draggableNode;

      if (!activatorNode.current && !node.current) {
        return;
      }

      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }

          const focusableNode = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.findFirstFocusableNode)(element);

          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}

function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

function useMeasuringConfiguration(config) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    draggable: { ...defaultMeasuringConfiguration.draggable,
      ...(config == null ? void 0 : config.draggable)
    },
    droppable: { ...defaultMeasuringConfiguration.droppable,
      ...(config == null ? void 0 : config.droppable)
    },
    dragOverlay: { ...defaultMeasuringConfiguration.dragOverlay,
      ...(config == null ? void 0 : config.dragOverlay)
    }
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]);
}

function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    x,
    y
  } = typeof config === 'boolean' ? {
    x: config,
    y: config
  } : config;
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    const disabled = !x && !y;

    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }

    if (initialized.current || !initialRect) {
      // Return early if layout shift scroll compensation was already attempted
      // or if there is no initialRect to compare to.
      return;
    } // Get the most up to date node ref for the active draggable


    const node = activeNode == null ? void 0 : activeNode.node.current;

    if (!node || node.isConnected === false) {
      // Return early if there is no attached node ref or if the node is
      // disconnected from the document.
      return;
    }

    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);

    if (!x) {
      rectDelta.x = 0;
    }

    if (!y) {
      rectDelta.y = 0;
    } // Only perform layout shift scroll compensation once


    initialized.current = true;

    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);

      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}

const ActiveDraggableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;

(function (Status) {
  Status[Status["Uninitialized"] = 0] = "Uninitialized";
  Status[Status["Initializing"] = 1] = "Initializing";
  Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));

const DndContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function DndContext(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId ? draggableNodes.get(activeId) : null;
  const activeRects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    initial: null,
    translated: null
  });
  const active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [activeSensor, setActiveSensor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const latestProps = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(props, Object.values(props));
  const draggableDescribedById = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)("DndDescribedBy", id);
  const enabledDroppableContainers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activatorEvent ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node

  const windowRect = useWindowRect(draggingNode ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(draggingNode) : null); // Get scrollable ancestors of the dragging node

  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers

  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated

  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured

  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, 'id');
  const [over, setOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // When there is no drag overlay used, we need to account for the
  // window scroll delta

  const appliedTranslate = usesDragOverlay ? modifiedTranslate : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const instantiateSensor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, _ref2) => {
    let {
      sensor: Sensor,
      options
    } = _ref2;

    if (activeRef.current == null) {
      return;
    }

    const activeNode = draggableNodes.get(activeRef.current);

    if (!activeNode) {
      return;
    }

    const activatorEvent = event.nativeEvent;
    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: activatorEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (id == null) {
          return;
        }

        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          active: {
            id,
            data: draggableNode.data,
            rect: activeRects
          }
        };
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          onDragStart == null ? void 0 : onDragStart(event);
          setStatus(Status.Initializing);
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          dispatchMonitorEvent({
            type: 'onDragStart',
            event
          });
        });
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setActiveSensor(sensorInstance);
      setActivatorEvent(event.nativeEvent);
    });

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          collisions,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            activatorEvent,
            active: active,
            collisions,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          dispatch({
            type
          });
          setStatus(Status.Uninitialized);
          setOver(null);
          setActiveSensor(null);
          setActivatorEvent(null);
          const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';

          if (event) {
            const handler = latestProps.current[eventName];
            handler == null ? void 0 : handler(event);
            dispatchMonitorEvent({
              type: eventName,
              event
            });
          }
        });
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes]);
  const bindActivatorToSensorInstantiator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active);

      if ( // Another sensor is already instantiating
      activeRef.current !== null || // No active draggable
      !activeDraggableNode || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);

      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      activatorEvent,
      collisions,
      over
    } = sensorContext.current;

    if (!active || !activatorEvent) {
      return;
    }

    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      onDragMove == null ? void 0 : onDragMove(event);
      dispatchMonitorEvent({
        type: 'onDragMove',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setOver(over);
      onDragOver == null ? void 0 : onDragOver(event);
      dispatchMonitorEvent({
        type: 'onDragOver',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({ ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InternalContext.Provider, {
    value: internalContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PublicContext.Provider, {
    value: publicContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Accessibility, { ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

const NullContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const defaultRole = 'button';
const ID_PREFIX = 'Droppable';
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const {
    role = defaultRole,
    roleDescription = 'draggable',
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const [activatorNode, setActivatorNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(data);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    draggableNodes.set(id, {
      id,
      key,
      node,
      activatorNode,
      data: dataRef
    });
    return () => {
      const node = draggableNodes.get(id);

      if (node && node.key === key) {
        draggableNodes.delete(id);
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes, id]);
  const memoizedAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    role,
    tabIndex,
    'aria-disabled': disabled,
    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
    'aria-roledescription': roleDescription,
    'aria-describedby': ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}

function useDndContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PublicContext);
}

const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const previous = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled
  });
  const resizeObserverConnected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const callbackId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = { ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!resizeObserverConnected.current) {
      // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
      // assuming the element is rendered and displayed.
      resizeObserverConnected.current = true;
      return;
    }

    if (callbackId.current != null) {
      clearTimeout(callbackId.current);
    }

    callbackId.current = setTimeout(() => {
      measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
      callbackId.current = null;
    }, resizeObserverTimeout);
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [resizeObserverTimeout]);
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }

    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }

    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)(handleNodeChange);
  const dataRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(data);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }

    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    dispatch({
      type: Action.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect,
        data: dataRef
      }
    });
    return () => dispatch({
      type: Action.UnregisterDroppable,
      key,
      id
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}

function AnimationManager(_ref) {
  let {
    animation,
    children
  } = _ref;
  const [clonedChildren, setClonedChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousChildren = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(children);

  if (!children && !clonedChildren && previousChildren) {
    setClonedChildren(previousChildren);
  }

  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!element) {
      return;
    }

    const key = clonedChildren == null ? void 0 : clonedChildren.key;
    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;

    if (key == null || id == null) {
      setClonedChildren(null);
      return;
    }

    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children, clonedChildren ? (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(clonedChildren, {
    ref: setElement
  }) : null);
}

const defaultTransform = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function NullifiedContextProvider(_ref) {
  let {
    children
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InternalContext.Provider, {
    value: defaultInternalContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveDraggableContext.Provider, {
    value: defaultTransform
  }, children));
}

const baseStyles = {
  position: 'fixed',
  touchAction: 'none'
};

const defaultTransition = activatorEvent => {
  const isKeyboardActivator = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(activatorEvent);
  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};

const PositionedOverlay = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultTransition
  } = _ref;

  if (!rect) {
    return null;
  }

  const scaleAdjustedTransform = adjustScale ? transform : { ...transform,
    scaleX: 1,
    scaleY: 1
  };
  const styles = { ...baseStyles,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(scaleAdjustedTransform),
    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
    ...style
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(as, {
    className,
    style: styles,
    ref
  }, children);
});

const defaultDropAnimationSideEffects = options => _ref => {
  let {
    active,
    dragOverlay
  } = _ref;
  const originalStyles = {};
  const {
    styles,
    className
  } = options;

  if (styles != null && styles.active) {
    for (const [key, value] of Object.entries(styles.active)) {
      if (value === undefined) {
        continue;
      }

      originalStyles[key] = active.node.style.getPropertyValue(key);
      active.node.style.setProperty(key, value);
    }
  }

  if (styles != null && styles.dragOverlay) {
    for (const [key, value] of Object.entries(styles.dragOverlay)) {
      if (value === undefined) {
        continue;
      }

      dragOverlay.node.style.setProperty(key, value);
    }
  }

  if (className != null && className.active) {
    active.node.classList.add(className.active);
  }

  if (className != null && className.dragOverlay) {
    dragOverlay.node.classList.add(className.dragOverlay);
  }

  return function cleanup() {
    for (const [key, value] of Object.entries(originalStyles)) {
      active.node.style.setProperty(key, value);
    }

    if (className != null && className.active) {
      active.node.classList.remove(className.active);
    }
  };
};

const defaultKeyframeResolver = _ref2 => {
  let {
    transform: {
      initial,
      final
    }
  } = _ref2;
  return [{
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(initial)
  }, {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(final)
  }];
};

const defaultDropAnimationConfiguration = {
  duration: 250,
  easing: 'ease',
  keyframes: defaultKeyframeResolver,
  sideEffects: /*#__PURE__*/defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0'
      }
    }
  })
};
function useDropAnimation(_ref3) {
  let {
    config,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  } = _ref3;
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)((id, node) => {
    if (config === null) {
      return;
    }

    const activeDraggable = draggableNodes.get(id);

    if (!activeDraggable) {
      return;
    }

    const activeNode = activeDraggable.node.current;

    if (!activeNode) {
      return;
    }

    const measurableNode = getMeasurableNode(node);

    if (!measurableNode) {
      return;
    }

    const {
      transform
    } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(node).getComputedStyle(node);
    const parsedTransform = parseTransform(transform);

    if (!parsedTransform) {
      return;
    }

    const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
    return animation({
      active: {
        id,
        data: activeDraggable.data,
        node: activeNode,
        rect: measuringConfiguration.draggable.measure(activeNode)
      },
      draggableNodes,
      dragOverlay: {
        node,
        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform
    });
  });
}

function createDefaultDropAnimation(options) {
  const {
    duration,
    easing,
    sideEffects,
    keyframes
  } = { ...defaultDropAnimationConfiguration,
    ...options
  };
  return _ref4 => {
    let {
      active,
      dragOverlay,
      transform,
      ...rest
    } = _ref4;

    if (!duration) {
      // Do not animate if animation duration is zero.
      return;
    }

    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top
    };
    const scale = {
      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale
    };
    const animationKeyframes = keyframes({ ...rest,
      active,
      dragOverlay,
      transform: {
        initial: transform,
        final: finalTransform
      }
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];

    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
      // The start and end keyframes are the same, infer that there is no animation needed.
      return;
    }

    const cleanup = sideEffects == null ? void 0 : sideEffects({
      active,
      dragOverlay,
      ...rest
    });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: 'forwards'
    });
    return new Promise(resolve => {
      animation.onfinish = () => {
        cleanup == null ? void 0 : cleanup();
        resolve();
      };
    });
  };
}

let key = 0;
function useKey(id) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (id == null) {
      return;
    }

    key++;
    return key;
  }, [id]);
}

const DragOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_ref => {
  let {
    adjustScale = false,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement = 'div',
    className,
    zIndex = 999
  } = _ref;
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ActiveDraggableContext);
  const key = useKey(active == null ? void 0 : active.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const initialRect = useInitialValue(activeNodeRect);
  const dropAnimation = useDropAnimation({
    config: dropAnimationConfig,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  }); // We need to wait for the active node to be measured before connecting the drag overlay ref
  // otherwise collisions can be computed against a mispositioned drag overlay

  const ref = initialRect ? dragOverlay.setRef : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NullifiedContextProvider, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimationManager, {
    animation: dropAnimation
  }, active && key ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionedOverlay, {
    key: key,
    id: active.id,
    ref: ref,
    as: wrapperElement,
    activatorEvent: activatorEvent,
    adjustScale: adjustScale,
    className: className,
    transition: transition,
    rect: initialRect,
    style: {
      zIndex,
      ...style
    },
    transform: modifiedTransform
  }, children) : null));
});


//# sourceMappingURL=core.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableContext: () => (/* binding */ SortableContext),
/* harmony export */   arrayMove: () => (/* binding */ arrayMove),
/* harmony export */   arraySwap: () => (/* binding */ arraySwap),
/* harmony export */   defaultAnimateLayoutChanges: () => (/* binding */ defaultAnimateLayoutChanges),
/* harmony export */   defaultNewIndexGetter: () => (/* binding */ defaultNewIndexGetter),
/* harmony export */   hasSortableData: () => (/* binding */ hasSortableData),
/* harmony export */   horizontalListSortingStrategy: () => (/* binding */ horizontalListSortingStrategy),
/* harmony export */   rectSortingStrategy: () => (/* binding */ rectSortingStrategy),
/* harmony export */   rectSwappingStrategy: () => (/* binding */ rectSwappingStrategy),
/* harmony export */   sortableKeyboardCoordinates: () => (/* binding */ sortableKeyboardCoordinates),
/* harmony export */   useSortable: () => (/* binding */ useSortable),
/* harmony export */   verticalListSortingStrategy: () => (/* binding */ verticalListSortingStrategy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");




/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */
function arraySwap(array, from, to) {
  const newArray = array.slice();
  newArray[from] = array[to];
  newArray[to] = array[from];
  return newArray;
}

function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index) => {
    const rect = rects.get(id);

    if (rect) {
      accumulator[index] = rect;
    }

    return accumulator;
  }, Array(items.length));
}

function isValidIndex(index) {
  return index !== null && index >= 0;
}

function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function normalizeDisabled(disabled) {
  if (typeof disabled === 'boolean') {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }

  return disabled;
}

// To-do: We should be calculating scale transformation
const defaultScale = {
  scaleX: 1,
  scaleY: 1
};
const horizontalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    rects,
    activeNodeRect: fallbackActiveRect,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  const itemGap = getItemGap(rects, index, activeIndex);

  if (index === activeIndex) {
    const newIndexRect = rects[overIndex];

    if (!newIndexRect) {
      return null;
    }

    return {
      x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
      y: 0,
      ...defaultScale
    };
  }

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap,
      y: 0,
      ...defaultScale
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap,
      y: 0,
      ...defaultScale
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale
  };
};

function getItemGap(rects, index, activeIndex) {
  const currentRect = rects[index];
  const previousRect = rects[index - 1];
  const nextRect = rects[index + 1];

  if (!currentRect || !previousRect && !nextRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
  }

  return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
}

const rectSortingStrategy = _ref => {
  let {
    rects,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index];
  const newRect = newRects[index];

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

const rectSwappingStrategy = _ref => {
  let {
    activeIndex,
    index,
    rects,
    overIndex
  } = _ref;
  let oldRect;
  let newRect;

  if (index === activeIndex) {
    oldRect = rects[index];
    newRect = rects[overIndex];
  }

  if (index === overIndex) {
    oldRect = rects[index];
    newRect = rects[activeIndex];
  }

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

// To-do: We should be calculating scale transformation
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }

  const itemGap = getItemGap$1(rects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};

function getItemGap$1(clientRects, index, activeIndex) {
  const currentRect = clientRects[index];
  const previousRect = clientRects[index - 1];
  const nextRect = clientRects[index + 1];

  if (!currentRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }

  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}

const ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDndContext)();
  const containerId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => userDefinedItems.map(item => typeof item === 'object' && 'id' in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    activeIndex,
    containerId,
    disabled,
    disableTransforms,
    items,
    overIndex,
    useDragOverlay,
    sortedRects: getSortedRects(items, droppableRects),
    strategy
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

const defaultNewIndexGetter = _ref => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = _ref2 => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;

  if (!transition || !wasDragging) {
    return false;
  }

  if (previousItems !== items && index === newIndex) {
    return false;
  }

  if (isSorting) {
    return true;
  }

  return newIndex !== index && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: 'linear'
});
const defaultAttributes = {
  roleDescription: 'sortable'
};

/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */

function useDerivedTransform(_ref) {
  let {
    disabled,
    index,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(index);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;

      if (initial) {
        const current = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getClientRect)(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };

        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }

    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}

function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index = items.indexOf(id);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const itemsAfterCurrentSortable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable)({
    id,
    data,
    attributes: { ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useCombinedRefs)(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index;
  const activeId = active == null ? void 0 : active.id;
  const previous = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }

    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }

    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeId === previous.current.activeId) {
      return;
    }

    if (activeId && !previous.current.activeId) {
      previous.current.activeId = activeId;
      return;
    }

    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };

  function getTransition() {
    if ( // Temporarily disable transitions for a single frame to set up derived transforms
    derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
    itemsHaveChanged && previous.current.newIndex === index) {
      return disabledTransition;
    }

    if (shouldDisplaceDragSource && !(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(activatorEvent) || !transition) {
      return undefined;
    }

    if (isSorting || shouldAnimateLayoutChanges) {
      return _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({ ...transition,
        property: transitionProperty
      });
    }

    return undefined;
  }
}

function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;

  if (typeof localDisabled === 'boolean') {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }

  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}

function hasSortableData(entry) {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
    return true;
  }

  return false;
}

const directions = [_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left];
const sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;

  if (directions.includes(event.code)) {
    event.preventDefault();

    if (!active || !collisionRect) {
      return;
    }

    const filteredContainers = [];
    droppableContainers.getEnabled().forEach(entry => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }

      const rect = droppableRects.get(entry.id);

      if (!rect) {
        return;
      }

      switch (event.code) {
        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }

          break;
      }
    });
    const collisions = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.closestCorners)({
      active,
      collisionRect: collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    let closestId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getFirstCollision)(collisions, 'id');

    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }

    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;

      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getScrollableAncestors)(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset.x && offset.y ? rectCoordinates : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(rectCoordinates, offset);
        return newCoordinates;
      }
    }
  }

  return undefined;
};

function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}

function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  if (!isSameContainer(a, b)) {
    return false;
  }

  return a.data.current.sortable.index < b.data.current.sortable.index;
}


//# sourceMappingURL=sortable.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSS: () => (/* binding */ CSS),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   findFirstFocusableNode: () => (/* binding */ findFirstFocusableNode),
/* harmony export */   getEventCoordinates: () => (/* binding */ getEventCoordinates),
/* harmony export */   getOwnerDocument: () => (/* binding */ getOwnerDocument),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   hasViewportRelativeCoordinates: () => (/* binding */ hasViewportRelativeCoordinates),
/* harmony export */   isDocument: () => (/* binding */ isDocument),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isKeyboardEvent: () => (/* binding */ isKeyboardEvent),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement),
/* harmony export */   isTouchEvent: () => (/* binding */ isTouchEvent),
/* harmony export */   isWindow: () => (/* binding */ isWindow),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   useCombinedRefs: () => (/* binding */ useCombinedRefs),
/* harmony export */   useEvent: () => (/* binding */ useEvent),
/* harmony export */   useInterval: () => (/* binding */ useInterval),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   useLatestValue: () => (/* binding */ useLatestValue),
/* harmony export */   useLazyMemo: () => (/* binding */ useLazyMemo),
/* harmony export */   useNodeRef: () => (/* binding */ useNodeRef),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useUniqueId: () => (/* binding */ useUniqueId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
  elementString === '[object global]';
}

function isNode(node) {
  return 'nodeType' in node;
}

function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;

  if (!target) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (!isNode(target)) {
    return window;
  }

  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}

function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}

function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

function getOwnerDocument(target) {
  if (!target) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (!isNode(target)) {
    return document;
  }

  if (isDocument(target)) {
    return target;
  }

  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }

  return document;
}

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEvent(handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}

function useInterval() {
  const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }

  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (element !== node.current) {
      onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
    }

    node.current = element;
  }, //eslint-disable-next-line
  []);
  return [node, setNodeRef];
}

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return function (object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }

  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function isTouchEvent(event) {
  if (!event) {
    return false;
  }

  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return null;
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }

  return element.querySelector(SELECTOR);
}


//# sourceMappingURL=utilities.esm.js.map


/***/ }),

/***/ "./src/blocks/social-icons/attributes.js":
/*!***********************************************!*\
  !*** ./src/blocks/social-icons/attributes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var attributes = {
  blockID: {
    type: "string",
    "default": ""
  },
  DeviceType: {
    type: "string",
    "default": "Desktop"
  },
  socialIconZIndex: {
    type: "number"
  },
  socialItems: {
    type: "array",
    "default": [{
      id: 'item-1',
      socialIcon: 'facebook-f',
      socialIconColorSwitcher: 'normal',
      socialIconColor: '#3b5998',
      socialIconHoverColor: '#3b5998',
      socialIconUrl: '#',
      socialIconTargetUrl: false
    }, {
      id: 'item-2',
      socialIcon: 'x-twitter',
      socialIconColorSwitcher: 'normal',
      socialIconColor: '#3b5998',
      socialIconHoverColor: '#3b5998',
      socialIconUrl: '#',
      socialIconTargetUrl: false
    }, {
      id: 'item-3',
      socialIcon: 'youtube',
      socialIconColorSwitcher: 'normal',
      socialIconColor: '#3b5998',
      socialIconHoverColor: '#3b5998',
      socialIconUrl: '#',
      socialIconTargetUrl: false
    }, {
      id: 'item-4',
      socialIcon: 'behance',
      socialIconColorSwitcher: 'normal',
      socialIconColor: '#3b5998',
      socialIconHoverColor: '#3b5998',
      socialIconUrl: '#',
      socialIconTargetUrl: false
    }],
    items: {
      type: "object",
      properties: {
        id: {
          type: "string",
          "default": ""
        },
        Title: {
          type: "string",
          "default": ""
        },
        socialIcon: {
          type: 'string',
          "default": 'check'
        },
        socialIconColorSwitcher: {
          type: "string",
          "default": "normal"
        },
        socialIconColor: {
          type: "string"
        },
        socialIconHoverColor: {
          type: 'string'
        },
        socialIconUrl: {
          type: "string",
          "default": ""
        },
        socialIconTargetUrl: {
          type: "boolean"
        }
      }
    }
  },
  // socialIconSizeUnits: {
  // 	type: 'object',
  // 	default: {
  // 		Desktop: 'px',
  // 		Tablet: 'px',
  // 		Mobile: 'px'
  // 	}
  // },
  socialIconSizeUnits: {
    type: "string",
    "default": "px"
  },
  socialIconSizeDesktop: {
    type: "number",
    "default": 25
  },
  socialIconSizeTablet: {
    type: "number",
    "default": 25
  },
  socialIconSizeMobile: {
    type: "number",
    "default": 25
  },
  socialIconPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  socialIconPaddingDesktop: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialIconPaddingTablet: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialIconPaddingMobile: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialIconPaddingLink: {
    type: "boolean",
    "default": true
  },
  socialPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  socialPaddingDesktop: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialPaddingTablet: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialPaddingMobile: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialPaddingLink: {
    type: "boolean",
    "default": true
  },
  socialMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  socialMarginDesktop: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialMarginTablet: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialMarginMobile: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialMarginLink: {
    type: "boolean",
    "default": true
  },
  socialBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  socialBgColor: {
    type: "string"
  },
  socialBgHoverColor: {
    type: 'string'
  },
  socialBorder: {
    type: 'string',
    "default": "none"
  },
  socialBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  socialBorderColor: {
    type: 'string'
  },
  socialBorderHoverColor: {
    type: 'string'
  },
  socialBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  socialBorderDesktop: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderTablet: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderMobile: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderLink: {
    type: "boolean",
    "default": true
  },
  socialBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  socialBorderRadiusDesktop: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderRadiusTablet: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderRadiusMobile: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  socialBorderRadiusLink: {
    type: "boolean",
    "default": true
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/social-icons/constants/constants.js":
/*!********************************************************!*\
  !*** ./src/blocks/social-icons/constants/constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   ICON_ALIGN: () => (/* binding */ ICON_ALIGN),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var NORMAL_HOVER = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var ICON_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon"),
  value: "icon"
}];
var TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignleft"
  })),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-aligncenter"
  })),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(/*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    icon: "editor-alignright"
  })),
  value: "right"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "frontis-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "frontis-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "frontis-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "frontis-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "frontis-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "frontis-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "frontis-blocks"),
  value: "ridge"
}];

/***/ }),

/***/ "./src/blocks/social-icons/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/social-icons/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icon-picker/components/icon-picker/controls/renderIcon */ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/social-icons/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/social-icons/editor.scss");





function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    socialItems = attributes.socialItems,
    socialIconUrl = attributes.socialIconUrl,
    socialIconTargetUrl = attributes.socialIconTargetUrl;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "fb-social-main-wrapper ".concat(blockID)
  });
  var handleSocialClick = function handleSocialClick(event) {
    event.preventDefault();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "fb-social-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-social-links-wrapper"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "fb-socials"
  }, socialItems.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id,
      className: "fb-social-list-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: "fb-advanced-button",
      href: socialIconUrl,
      target: socialIconTargetUrl ? '_blank' : undefined,
      rel: socialIconTargetUrl ? 'noopener noreferrer' : undefined,
      onClick: handleSocialClick
    }, item.socialIcon ? (0,_components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(item.socialIcon) : ''));
  }))))));
}

/***/ }),

/***/ "./src/blocks/social-icons/index.js":
/*!******************************************!*\
  !*** ./src/blocks/social-icons/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/social-icons/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/social-icons/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/social-icons/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/social-icons/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes.js */ "./src/blocks/social-icons/attributes.js");



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/social-icons/inspector.js":
/*!**********************************************!*\
  !*** ./src/blocks/social-icons/inspector.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspector)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/constants */ "./src/blocks/social-icons/constants/constants.js");
/* harmony import */ var _sortableItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortableItem */ "./src/blocks/social-icons/sortableItem.js");
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _Components_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing */ "./src/components/spacing/index.js");
/* harmony import */ var _Components_range_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range-control */ "./src/components/range-control/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/social-icons/editor.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }












function Inspector(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    DeviceType = attributes.DeviceType,
    socialIconZIndex = attributes.socialIconZIndex,
    socialItems = attributes.socialItems,
    socialIconSizeUnits = attributes.socialIconSizeUnits,
    socialIconSizeDesktop = attributes.socialIconSizeDesktop,
    socialIconSizeTablet = attributes.socialIconSizeTablet,
    socialIconSizeMobile = attributes.socialIconSizeMobile,
    socialIconPaddingUnits = attributes.socialIconPaddingUnits,
    socialIconPaddingDesktop = attributes.socialIconPaddingDesktop,
    socialIconPaddingTablet = attributes.socialIconPaddingTablet,
    socialIconPaddingMobile = attributes.socialIconPaddingMobile,
    socialIconPaddingLink = attributes.socialIconPaddingLink,
    socialPaddingUnits = attributes.socialPaddingUnits,
    socialPaddingDesktop = attributes.socialPaddingDesktop,
    socialPaddingTablet = attributes.socialPaddingTablet,
    socialPaddingMobile = attributes.socialPaddingMobile,
    socialPaddingLink = attributes.socialPaddingLink,
    socialMarginUnits = attributes.socialMarginUnits,
    socialMarginDesktop = attributes.socialMarginDesktop,
    socialMarginTablet = attributes.socialMarginTablet,
    socialMarginMobile = attributes.socialMarginMobile,
    socialMarginLink = attributes.socialMarginLink,
    socialBgColorSwitcher = attributes.socialBgColorSwitcher,
    socialBgColor = attributes.socialBgColor,
    socialBgHoverColor = attributes.socialBgHoverColor,
    socialBorder = attributes.socialBorder,
    socialBorderColorSwitcher = attributes.socialBorderColorSwitcher,
    socialBorderColor = attributes.socialBorderColor,
    socialBorderHoverColor = attributes.socialBorderHoverColor,
    socialBorderUnits = attributes.socialBorderUnits,
    socialBorderDesktop = attributes.socialBorderDesktop,
    socialBorderTablet = attributes.socialBorderTablet,
    socialBorderMobile = attributes.socialBorderMobile,
    socialBorderLink = attributes.socialBorderLink,
    socialBorderRadiusUnits = attributes.socialBorderRadiusUnits,
    socialBorderRadiusDesktop = attributes.socialBorderRadiusDesktop,
    socialBorderRadiusTablet = attributes.socialBorderRadiusTablet,
    socialBorderRadiusMobile = attributes.socialBorderRadiusMobile,
    socialBorderRadiusLink = attributes.socialBorderRadiusLink;
  console.log(socialPaddingDesktop);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (clientId && typeof clientId === 'string') {
      setAttributes({
        blockID: "fb-Social-" + clientId.slice(0, 8)
      });
    }
  }, [clientId]);
  var handleDragEnd = function handleDragEnd(event) {
    var active = event.active,
      over = event.over;
    if (active && over && active.id !== over.id) {
      var oldIndex = socialItems.findIndex(function (item) {
        return item.id === active.id;
      });
      var newIndex = socialItems.findIndex(function (item) {
        return item.id === over.id;
      });
      var updatedItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.arrayMove)(socialItems, oldIndex, newIndex);
      setAttributes({
        socialItems: updatedItems
      });
    }
  };
  var handleAddItem = function handleAddItem() {
    var newItem = {
      id: "item-".concat(socialItems.length + 1),
      Title: "Social Item ".concat(socialItems.length + 1),
      socialIconUrl: '',
      socialIcon: 'behance'
    };
    setAttributes({
      socialItems: [].concat(_toConsumableArray(socialItems), [newItem])
    });
  };
  var handleChangeItem = function handleChangeItem(id, key, value) {
    var updatedItems = socialItems.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, value)) : item;
    });
    setAttributes({
      socialItems: updatedItems
    });
  };
  var handleDeleteItem = function handleDeleteItem(id) {
    var updatedItems = socialItems.filter(function (item) {
      return item.id !== id;
    });
    setAttributes({
      socialItems: updatedItems
    });
  };

  /** Start Icon padding */
  var handleSocialIconPaddingUnitChange = function handleSocialIconPaddingUnitChange(event, position) {
    var value = event.target.value;
    if (socialIconPaddingLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialIconPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            socialIconPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            socialIconPaddingMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialIconPaddingDesktop: _objectSpread(_objectSpread({}, socialIconPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            socialIconPaddingTablet: _objectSpread(_objectSpread({}, socialIconPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            socialIconPaddingMobile: _objectSpread(_objectSpread({}, socialIconPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleSocialIconPaddingCombineBtn = function handleSocialIconPaddingCombineBtn() {
    setAttributes({
      socialIconPaddingLink: !socialIconPaddingLink
    });
  };
  var socialIconspacingUnitsHandler = function socialIconspacingUnitsHandler(unit) {
    setAttributes({
      socialIconPaddingUnits: _objectSpread(_objectSpread({}, socialIconPaddingUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  /** Default padding for desktop (using desktop_padding) */
  var IconPaddingDesktop = "".concat(socialIconPaddingDesktop.top).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingDesktop.right).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingDesktop.bottom).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingDesktop.left).concat(socialIconPaddingUnits[DeviceType]);
  var IconPaddingTablet = "".concat(socialIconPaddingTablet.top).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingTablet.right).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingTablet.bottom).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingTablet.left).concat(socialIconPaddingUnits[DeviceType]);
  var IconPaddingMobile = "".concat(socialIconPaddingMobile.top).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingMobile.right).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingMobile.bottom).concat(socialIconPaddingUnits[DeviceType], " ").concat(socialIconPaddingMobile.left).concat(socialIconPaddingUnits[DeviceType]);
  /** End Padding */

  console.log(IconPaddingDesktop);
  console.log(IconPaddingTablet);
  console.log(IconPaddingMobile);

  /** Start Global padding */
  var handleSocialPaddingUnitChange = function handleSocialPaddingUnitChange(event, position) {
    var value = event.target.value;
    if (socialPaddingLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialPaddingDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            socialPaddingTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            socialPaddingMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialPaddingDesktop: _objectSpread(_objectSpread({}, socialPaddingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            socialPaddingTablet: _objectSpread(_objectSpread({}, socialPaddingTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            socialPaddingMobile: _objectSpread(_objectSpread({}, socialPaddingMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleSocialPaddingCombineBtn = function handleSocialPaddingCombineBtn() {
    setAttributes({
      socialPaddingLink: !socialPaddingLink
    });
  };
  var handleSocialPaddingUnitsHandler = function handleSocialPaddingUnitsHandler(unit) {
    setAttributes({
      socialPaddingUnits: _objectSpread(_objectSpread({}, socialPaddingUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  /** end Global padding */

  /** Default padding for desktop (using desktop_padding) */
  var DesktopPadding = "".concat(socialPaddingDesktop.top).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingDesktop.right).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingDesktop.bottom).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingDesktop.left).concat(socialPaddingUnits[DeviceType]);
  var TabletPadding = "".concat(socialPaddingTablet.top).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingTablet.right).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingTablet.bottom).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingTablet.left).concat(socialPaddingUnits[DeviceType]);
  var MobilePadding = "".concat(socialPaddingMobile.top).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingMobile.right).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingMobile.bottom).concat(socialPaddingUnits[DeviceType], " ").concat(socialPaddingMobile.left).concat(socialPaddingUnits[DeviceType]);
  /** End Padding */

  /** Start Global margin */
  var handleSocialMarginUnitChange = function handleSocialMarginUnitChange(event, position) {
    var value = event.target.value;
    if (socialMarginLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialMarginDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            socialMarginTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            socialMarginMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialMarginDesktop: _objectSpread(_objectSpread({}, socialMargingDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            socialMarginTablet: _objectSpread(_objectSpread({}, socialMarginTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            socialMarginMobile: _objectSpread(_objectSpread({}, socialMarginMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleSocialMarginCombineBtn = function handleSocialMarginCombineBtn() {
    setAttributes({
      socialMarginLink: !socialMarginLink
    });
  };
  var handleSocialMarginUnitsHandler = function handleSocialMarginUnitsHandler(unit) {
    setAttributes({
      socialMarginUnits: _objectSpread(_objectSpread({}, socialMarginUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  /** end Global margin */

  var DesktopMargin = "".concat(socialMarginDesktop.top).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginDesktop.right).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginDesktop.bottom).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginDesktop.left).concat(socialMarginUnits[DeviceType]);
  var TabletMargin = "".concat(socialMarginTablet.top).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginTablet.right).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginTablet.bottom).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginTablet.left).concat(socialMarginUnits[DeviceType]);
  var MobileMargin = "".concat(socialMarginMobile.top).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginMobile.right).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginMobile.bottom).concat(socialMarginUnits[DeviceType], " ").concat(socialMarginMobile.left).concat(socialMarginUnits[DeviceType]);
  /** End Margin */

  /** Start Global border */
  var handleSocialBorderUnitChange = function handleSocialBorderUnitChange(event, position) {
    var value = event.target.value;
    if (socialBorderLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialBorderDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            socialBorderTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            socialBorderMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialBorderDesktop: _objectSpread(_objectSpread({}, socialBorderDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            socialBorderTablet: _objectSpread(_objectSpread({}, socialBorderTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            socialBorderMobile: _objectSpread(_objectSpread({}, socialBorderMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleSocialBorderCombineBtn = function handleSocialBorderCombineBtn() {
    setAttributes({
      socialBorderLink: !socialBorderLink
    });
  };
  var handleSocialBorderUnitsHandler = function handleSocialBorderUnitsHandler(unit) {
    setAttributes({
      socialBorderUnits: _objectSpread(_objectSpread({}, socialBorderUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  /** end Global border */
  var BorderDesktopWidth = "".concat(socialBorderDesktop.top).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderDesktop.right).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderDesktop.bottom).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderDesktop.left).concat(socialBorderUnits[DeviceType]);
  var BorderTabletWidth = "".concat(socialBorderTablet.top).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderTablet.right).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderTablet.bottom).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderTablet.left).concat(socialBorderUnits[DeviceType]);
  var BorderMobileWidth = "".concat(socialBorderMobile.top).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderMobile.right).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderMobile.bottom).concat(socialBorderUnits[DeviceType], " ").concat(socialBorderMobile.left).concat(socialBorderUnits[DeviceType]);
  /** End Border */

  /** Start Global border radius*/
  var handleSocialBorderRadiusUnitChange = function handleSocialBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (socialBorderRadiusLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialBorderRadiusDesktop: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            socialBorderRadiusTablet: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            socialBorderRadiusMobile: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        default:
          break;
      }
    } else {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            socialBorderRadiusDesktop: _objectSpread(_objectSpread({}, socialBorderRadiusDesktop), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            socialBorderRadiusTablet: _objectSpread(_objectSpread({}, socialBorderRadiusTablet), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            socialBorderRadiusMobile: _objectSpread(_objectSpread({}, socialBorderRadiusMobile), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleSocialBorderRadiusCombineBtn = function handleSocialBorderRadiusCombineBtn() {
    setAttributes({
      socialBorderRadiusLink: !socialBorderRadiusLink
    });
  };
  var handleSocialBorderRadiusUnitsHandler = function handleSocialBorderRadiusUnitsHandler(unit) {
    setAttributes({
      socialBorderRadiusUnits: _objectSpread(_objectSpread({}, socialBorderRadiusUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  /** end Global border */

  var BorderRadiusDesktopWidth = "".concat(socialBorderRadiusDesktop.top).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusDesktop.right).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusDesktop.bottom).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusDesktop.left).concat(socialBorderRadiusUnits[DeviceType]);
  var BorderRadiusTabletWidth = "".concat(socialBorderRadiusTablet.top).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusTablet.right).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusTablet.bottom).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusTablet.left).concat(socialBorderRadiusUnits[DeviceType]);
  var BorderRadiusMobileWidth = "".concat(socialBorderRadiusMobile.top).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusMobile.right).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusMobile.bottom).concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusUnits[DeviceType], " ").concat(socialBorderRadiusMobile.left).concat(socialBorderRadiusUnits[DeviceType]);
  /** End Border Radius */

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n                .fb-social-main-wrapper.".concat(blockID, " {\n                    z-index: ").concat(socialIconZIndex !== undefined ? socialIconZIndex : '', ";\n                }\n                .fb-social-wrapper {\n                    ").concat(socialBgColor !== undefined ? "background-color: ".concat(socialBgColor, ";") : '', ";\n                    padding: ").concat(DesktopPadding, ";\n                    margin: ").concat(DesktopMargin, ";\n                    border: ").concat(socialBorder, ";\n                    border-width: ").concat(BorderDesktopWidth, ";\n                    border-radius: ").concat(BorderRadiusDesktopWidth, " !important;\n                    ").concat(socialBorderColor !== undefined ? "border-color: ".concat(socialBorderColor, ";") : '', ";\n                    transition: all .3s ease-in-out;\n                }\n                .fb-social-wrapper:hover {\n                    ").concat(socialBgHoverColor !== undefined ? "background-color: ".concat(socialBgHoverColor, ";") : '', ";\n                    ").concat(socialBorderHoverColor !== undefined ? "border-color: ".concat(socialBorderHoverColor, ";") : '', ";\n                }\n\n                @media only screen and (max-width: 1024px) {\n\n                    .fb-social-wrapper {\n                        padding: ").concat(TabletPadding, ";\n                        margin: ").concat(TabletMargin, ";\n                        border-width: ").concat(BorderTabletWidth, ";\n                        border-radius: ").concat(BorderRadiusTabletWidth, " !important;\n                    }\n                }\n\n                @media only screen and (max-width: 767px) {\n                    .fb-social-wrapper {\n                        padding: ").concat(MobilePadding, ";\n                        margin: ").concat(MobileMargin, ";\n                        border-width: ").concat(BorderMobileWidth, ";\n                        border-radius: ").concat(BorderRadiusMobileWidth, " !important;\n                    }\n                }\n\n            ")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-inspector-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TabPanel, {
    className: "fb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: "General",
      className: "fb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "fb-tab styles"
    }, {
      name: "advanced",
      title: "Advanced",
      className: "fb-tab advanced"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "fb-tab-controls" + tab.name
    }, tab.name === 'general' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Social Items", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-Social-wrapper"
    }, /*#__PURE__*/React.createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React.createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
      items: socialItems.map(function (item) {
        return item.id;
      })
    }, /*#__PURE__*/React.createElement("ul", {
      className: "dnd-items-wrapper"
    }, socialItems.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_sortableItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: item.id,
        id: item.id,
        item: item,
        handleChangeItem: handleChangeItem,
        handleDeleteItem: handleDeleteItem,
        index: index
      });
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      isPrimary: true,
      onClick: handleAddItem
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Social Item", "frontis-blocks"))))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-fontsize-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-fontsize-header"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-fontsize-units"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-fontsize-units-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            socialIconSizeUnits: item.value
          });
        },
        className: "fb-setting-fontsize-units-switcher ".concat(socialIconSizeUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-fontsize-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? socialIconSizeDesktop : DeviceType === "Tablet" ? socialIconSizeTablet : socialIconSizeMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            socialIconSizeDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            socialIconSizeTablet: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            socialIconSizeMobile: value
          });
        }
      },
      min: 1,
      max: 100,
      allowReset: true,
      resetFallbackValue: 20
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: socialIconspacingUnitsHandler,
      spacingUnits: socialIconPaddingUnits,
      spacingDesktop: socialIconPaddingDesktop,
      spacingTablet: socialIconPaddingTablet,
      spacingMobile: socialIconPaddingMobile,
      handleSpacingUnitHandler: handleSocialIconPaddingUnitChange,
      spacingCombineBtn: socialIconPaddingLink,
      spacingCombineBtnHandler: handleSocialIconPaddingCombineBtn,
      setAttributes: setAttributes
    }))), tab.name === "advanced" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-advanced-tab-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-inner-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Z Index", "frontis-blocks"),
      initialOpen: true,
      className: "fb-setting-z-index-header"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: socialIconZIndex,
      onChange: function onChange(value) {
        return setAttributes({
          socialIconZIndex: value === 0 ? undefined : value
        });
      },
      min: 1,
      max: 10000,
      step: 1,
      allowReset: true,
      resetFallbackValue: 100
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding and Margin", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleSocialPaddingUnitsHandler,
      spacingUnits: socialPaddingUnits,
      spacingDesktop: socialPaddingDesktop,
      spacingTablet: socialPaddingTablet,
      spacingMobile: socialPaddingMobile,
      handleSpacingUnitHandler: handleSocialPaddingUnitChange,
      spacingCombineBtn: socialPaddingLink,
      spacingCombineBtnHandler: handleSocialPaddingCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleSocialMarginUnitsHandler,
      spacingUnits: socialMarginUnits,
      spacingDesktop: socialMarginDesktop,
      spacingTablet: socialMarginTablet,
      spacingMobile: socialMarginMobile,
      handleSpacingUnitHandler: handleSocialMarginUnitChange,
      spacingCombineBtn: socialMarginLink,
      spacingCombineBtnHandler: handleSocialMarginCombineBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: "Background Color",
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            socialBgColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(socialBgColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), socialBgColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref2) {
        var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
          color: socialBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBgColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: socialBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBgColor: value
            });
          }
        }))));
      }
    })), socialBgColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref3) {
        var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
          color: socialBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBgHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: socialBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBgHoverColor: value
            });
          }
        }))));
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border and Radius", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: socialBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          socialBorder: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "frontis-blocks"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            socialBorderColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(socialBorderColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), socialBorderColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref4) {
        var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-normal-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
          color: socialBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBorderColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: socialBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBorderColor: value
            });
          }
        }))));
      }
    })), socialBorderColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref5) {
        var isOpen = _ref5.isOpen,
          onToggle = _ref5.onToggle;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-color-setting-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
          icon: "color-picker",
          className: "fb-setting-color-setting-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-setting-icon-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          className: "fb-setting-color-setting-icon-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPicker, {
          color: socialBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBorderHoverColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-hover-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPalette, {
          colors: [{
            color: '#F72585'
          }, {
            color: '#7209B7'
          }, {
            color: '#3A0CA3'
          }, {
            color: '#4361EE'
          }, {
            color: '#4CC9F0'
          }],
          disableCustomColors: true,
          value: socialBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              socialBorderHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleSocialBorderUnitsHandler,
      spacingUnits: socialBorderUnits,
      spacingDesktop: socialBorderDesktop,
      spacingTablet: socialBorderTablet,
      spacingMobile: socialBorderMobile,
      handleSpacingUnitHandler: handleSocialBorderUnitChange,
      spacingCombineBtn: socialBorderLink,
      spacingCombineBtnHandler: handleSocialBorderCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_Components_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radius Border", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleSocialBorderRadiusUnitsHandler,
      spacingUnits: socialBorderRadiusUnits,
      spacingDesktop: socialBorderRadiusDesktop,
      spacingTablet: socialBorderRadiusTablet,
      spacingMobile: socialBorderRadiusMobile,
      handleSpacingUnitHandler: handleSocialBorderRadiusUnitChange,
      spacingCombineBtn: socialBorderRadiusLink,
      spacingCombineBtnHandler: handleSocialBorderRadiusCombineBtn,
      setAttributes: setAttributes
    }))))));
  }))));
}

/***/ }),

/***/ "./src/blocks/social-icons/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/social-icons/save.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icon-picker/components/icon-picker/controls/renderIcon */ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js");


function save(_ref) {
  var attributes = _ref.attributes;
  var blockID = attributes.blockID,
    socialItems = attributes.socialItems,
    socialIconUrl = attributes.socialIconUrl,
    socialIconTargetUrl = attributes.socialIconTargetUrl;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "fb-social-main-wrapper ".concat(blockID)
  });
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "fb-social-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-social-links-wrapper"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "fb-socials"
  }, socialItems.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id,
      className: "fb-social-list-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: "fb-advanced-button",
      href: socialIconUrl,
      target: socialIconTargetUrl ? '_blank' : undefined,
      rel: socialIconTargetUrl ? 'noopener noreferrer' : undefined
    }, item.socialIcon ? (0,_components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(item.socialIcon) : ''));
  })))));
}

/***/ }),

/***/ "./src/blocks/social-icons/sortableItem.js":
/*!*************************************************!*\
  !*** ./src/blocks/social-icons/sortableItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortableItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icon_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/constants */ "./src/blocks/social-icons/constants/constants.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





 // Adjust the import path as needed
 // Adjust the import path as needed

function SortableItem(_ref) {
  var id = _ref.id,
    item = _ref.item,
    handleChangeItem = _ref.handleChangeItem,
    handleDeleteItem = _ref.handleDeleteItem,
    index = _ref.index;
  var _useSortable = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable)({
      id: id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(item.socialIconColorSwitcher),
    _useState4 = _slicedToArray(_useState3, 2),
    activeColorSwitcher = _useState4[0],
    setActiveColorSwitcher = _useState4[1];
  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Transform.toString(transform),
    transition: transition,
    backgroundColor: item.socialIconBgColor || 'transparent' // Set default background color
  };
  var toggleOpen = function toggleOpen() {
    return setIsOpen(!isOpen);
  };

  // Event handlers for updating item attributes
  var iconHandler = function iconHandler(IconName) {
    handleChangeItem(item.id, 'socialIcon', IconName);
  };
  var updateColorSwitcher = function updateColorSwitcher(value) {
    handleChangeItem(item.id, 'socialIconColorSwitcher', value);
    setActiveColorSwitcher(value);
  };
  var updateNormalColor = function updateNormalColor(color) {
    handleChangeItem(item.id, 'socialIconColor', color.hex);
  };
  var updateHoverColor = function updateHoverColor(color) {
    handleChangeItem(item.id, 'socialIconHoverColor', color.hex);
  };
  return /*#__PURE__*/React.createElement("li", _extends({
    className: "sortable-item",
    ref: setNodeRef
  }, attributes, {
    style: style
  }), /*#__PURE__*/React.createElement("div", {
    className: "sortable-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sortable-title",
    onClick: toggleOpen
  }, item.Title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Social Item ".concat(index + 1), "frontis-blocks")), /*#__PURE__*/React.createElement("span", _extends({
    className: "sortable-sort"
  }, listeners, {
    style: {
      cursor: 'grab'
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: "move",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort", "frontis-blocks"),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move item", "frontis-blocks")
  })), /*#__PURE__*/React.createElement("span", {
    className: "sortable-delete"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "frontis-blocks"),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete item", "frontis-blocks"),
    onClick: function onClick() {
      return handleDeleteItem(item.id);
    }
  }))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "sortable-item-content"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "frontis-blocks")
  }, /*#__PURE__*/React.createElement(_components_icon_picker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: item.socialIcon,
    setIconHandler: iconHandler
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Switcher", "frontis-blocks")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "fb-setting-color-panel-btn"
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.NORMAL_HOVER.map(function (switcher, key) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: key,
      onClick: function onClick() {
        return updateColorSwitcher(switcher.value);
      },
      className: "fb-setting-color-panel-btn-switchr ".concat(activeColorSwitcher === switcher.value ? 'active' : '')
    }, switcher.label);
  }))), activeColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal Color", "frontis-blocks"),
    className: "fb-setting-color-setting-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    className: "fb-setting-color-setting-icon-dropdown",
    contentClassName: "fb-setting-color-setting-icon-dropdown-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "fb-setting-color-setting-icon-btn"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
        icon: "color-picker",
        className: "fb-setting-color-setting-icon"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-setting-icon-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
        className: "fb-setting-color-setting-icon-popup-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-normal-color"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
        color: item.socialIconColor,
        onChange: updateNormalColor,
        enableAlpha: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
        colors: [{
          color: '#F72585'
        }, {
          color: '#7209B7'
        }, {
          color: '#3A0CA3'
        }, {
          color: '#4361EE'
        }, {
          color: '#4CC9F0'
        }],
        disableCustomColors: true,
        value: item.socialIconColor,
        onChange: updateNormalColor
      }))));
    }
  })), activeColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Color", "frontis-blocks"),
    className: "fb-setting-color-setting-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    className: "fb-setting-color-setting-icon-dropdown",
    contentClassName: "fb-setting-color-setting-icon-dropdown-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "fb-setting-color-setting-icon-btn"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
        icon: "color-picker",
        className: "fb-setting-color-setting-icon"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-color-setting-icon-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
        className: "fb-setting-color-setting-icon-popup-inner"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-hover-color"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
        color: item.socialIconHoverColor,
        onChange: updateHoverColor,
        enableAlpha: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "fb-setting-hover-color-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
        colors: [{
          color: '#F72585'
        }, {
          color: '#7209B7'
        }, {
          color: '#3A0CA3'
        }, {
          color: '#4361EE'
        }, {
          color: '#4CC9F0'
        }],
        disableCustomColors: true,
        value: item.socialIconHoverColor,
        onChange: updateHoverColor
      }))));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-link-control-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("URL", "frontis-blocks")
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-link-control-inner-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: item.socialIconUrl,
    onChange: function onChange(value) {
      return handleChangeItem(item.id, 'socialIconUrl', value);
    },
    className: "fb-link-control-url",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://', 'frontis-blocks')
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    className: "fb-setting-dropdown-icon-wrapper",
    contentClassName: "fb-setting-dropdown-icon-content",
    popoverProps: {
      placement: 'bottom-start'
    },
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
        onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "primary",
        onClick: onToggle,
        "aria-expanded": isOpen,
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Typography Settings", "frontis-blocks"),
        className: "fb-setting-dropdown-icon-btn"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
        icon: "color-picker",
        className: "fb-setting-dropdown-icon"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "fb-link-control-icon-popup"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
        className: "fb-link-control-icon-popup-inner"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Open in new tab", "frontis-blocks"),
        checked: item.socialIconTargetUrl,
        onChange: function onChange(value) {
          return handleChangeItem(item.id, 'socialIconTargetUrl', value);
        }
      })));
    }
  }))))));
}

/***/ }),

/***/ "./src/components/icon-picker/components/defaultSvgIcon.js":
/*!*****************************************************************!*\
  !*** ./src/components/icon-picker/components/defaultSvgIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var defaultIcons = [["0", "1", "2", "3", "4", "5", "6", "7"], ["8", "9", "42-group", "500px", "a", "accessible-icon", "accusoft", "address-book"], ["address-card", "adn", "adversal", "affiliatetheme", "airbnb", "algolia", "align-center", "align-justify"], ["align-left", "align-right", "alipay", "amazon", "amazon-pay", "amilia", "anchor", "anchor-circle-check"], ["anchor-circle-exclamation", "anchor-circle-xmark", "anchor-lock", "android", "angellist", "angle-down", "angle-left", "angle-right"], ["angle-up", "angles-down", "angles-left", "angles-right", "angles-up", "angrycreative", "angular", "ankh"], ["app-store", "app-store-ios", "apper", "apple", "apple-pay", "apple-whole", "archway", "arrow-down"], ["arrow-down-1-9", "arrow-down-9-1", "arrow-down-a-z", "arrow-down-long", "arrow-down-short-wide", "arrow-down-up-across-line", "arrow-down-up-lock", "arrow-down-wide-short"], ["arrow-down-z-a", "arrow-left", "arrow-left-long", "arrow-pointer", "arrow-right", "arrow-right-arrow-left", "arrow-right-from-bracket", "arrow-right-long"], ["arrow-right-to-bracket", "arrow-right-to-city", "arrow-rotate-left", "arrow-rotate-right", "arrow-trend-down", "arrow-trend-up", "arrow-turn-down", "arrow-turn-up"], ["arrow-up", "arrow-up-1-9", "arrow-up-9-1", "arrow-up-a-z", "arrow-up-from-bracket", "arrow-up-from-ground-water", "arrow-up-from-water-pump", "arrow-up-long"], ["arrow-up-right-dots", "arrow-up-right-from-square", "arrow-up-short-wide", "arrow-up-wide-short", "arrow-up-z-a", "arrows-down-to-line", "arrows-down-to-people", "arrows-left-right"], ["arrows-left-right-to-line", "arrows-rotate", "arrows-spin", "arrows-split-up-and-left", "arrows-to-circle", "arrows-to-dot", "arrows-to-eye", "arrows-turn-right"], ["arrows-turn-to-dots", "arrows-up-down", "arrows-up-down-left-right", "arrows-up-to-line", "artstation", "asterisk", "asymmetrik", "at"], ["atlassian", "atom", "audible", "audio-description", "austral-sign", "autoprefixer", "avianex", "aviato"], ["award", "aws", "b", "baby", "baby-carriage", "backward", "backward-fast", "backward-step"], ["bacon", "bacteria", "bacterium", "bag-shopping", "bahai", "baht-sign", "ban", "ban-smoking"], ["bandage", "bandcamp", "barcode", "bars", "bars-progress", "bars-staggered", "baseball", "baseball-bat-ball"], ["basket-shopping", "basketball", "bath", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters"], ["battle-net", "bed", "bed-pulse", "beer-mug-empty", "behance", "behance-square", "bell", "bell-concierge"], ["bell-slash", "bezier-curve", "bicycle", "bilibili", "bimobject", "binoculars", "biohazard", "bitbucket"], ["bitcoin", "bitcoin-sign", "bity", "black-tie", "blackberry", "blender", "blender-phone", "blog"], ["blogger", "blogger-b", "bluetooth", "bluetooth-b", "bold", "bolt", "bolt-lightning", "bomb"], ["bone", "bong", "book", "book-atlas", "book-bible", "book-bookmark", "book-journal-whills", "book-medical"], ["book-open", "book-open-reader", "book-quran", "book-skull", "bookmark", "bootstrap", "border-all", "border-none"], ["border-top-left", "bore-hole", "bots", "bottle-droplet", "bottle-water", "bowl-food", "bowl-rice", "bowling-ball"], ["box", "box-archive", "box-open", "box-tissue", "boxes-packing", "boxes-stacked", "braille", "brain"], ["brazilian-real-sign", "bread-slice", "bridge", "bridge-circle-check", "bridge-circle-exclamation", "bridge-circle-xmark", "bridge-lock", "bridge-water"], ["briefcase", "briefcase-medical", "broom", "broom-ball", "brush", "btc", "bucket", "buffer"], ["bug", "bug-slash", "bugs", "building", "building-circle-arrow-right", "building-circle-check", "building-circle-exclamation", "building-circle-xmark"], ["building-columns", "building-flag", "building-lock", "building-ngo", "building-shield", "building-un", "building-user", "building-wheat"], ["bullhorn", "bullseye", "burger", "buromobelexperte", "burst", "bus", "bus-simple", "business-time"], ["buy-n-large", "buysellads", "c", "cake-candles", "calculator", "calendar", "calendar-check", "calendar-day"], ["calendar-days", "calendar-minus", "calendar-plus", "calendar-week", "calendar-xmark", "camera", "camera-retro", "camera-rotate"], ["campground", "canadian-maple-leaf", "candy-cane", "cannabis", "capsules", "car", "car-battery", "car-burst"], ["car-on", "car-rear", "car-side", "car-tunnel", "caravan", "caret-down", "caret-left", "caret-right"], ["caret-up", "carrot", "cart-arrow-down", "cart-flatbed", "cart-flatbed-suitcase", "cart-plus", "cart-shopping", "cash-register"], ["cat", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard"], ["cc-paypal", "cc-stripe", "cc-visa", "cedi-sign", "cent-sign", "centercode", "centos", "certificate"], ["chair", "chalkboard", "chalkboard-user", "champagne-glasses", "charging-station", "chart-area", "chart-bar", "chart-column"], ["chart-gantt", "chart-line", "chart-pie", "chart-simple", "check", "check-double", "check-to-slot", "cheese"], ["chess", "chess-bishop", "chess-board", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook"], ["chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "child-dress", "child-reaching", "child-rifle"], ["children", "chrome", "chromecast", "church", "circle", "circle-arrow-down", "circle-arrow-left", "circle-arrow-right"], ["circle-arrow-up", "circle-check", "circle-chevron-down", "circle-chevron-left", "circle-chevron-right", "circle-chevron-up", "circle-dollar-to-slot", "circle-dot"], ["circle-down", "circle-exclamation", "circle-h", "circle-half-stroke", "circle-info", "circle-left", "circle-minus", "circle-nodes"], ["circle-notch", "circle-pause", "circle-play", "circle-plus", "circle-question", "circle-radiation", "circle-right", "circle-stop"], ["circle-up", "circle-user", "circle-xmark", "city", "clapperboard", "clipboard", "clipboard-check", "clipboard-list"], ["clipboard-question", "clipboard-user", "clock", "clock-rotate-left", "clone", "closed-captioning", "cloud", "cloud-arrow-down"], ["cloud-arrow-up", "cloud-bolt", "cloud-meatball", "cloud-moon", "cloud-moon-rain", "cloud-rain", "cloud-showers-heavy", "cloud-showers-water"], ["cloud-sun", "cloud-sun-rain", "cloudflare", "cloudscale", "cloudsmith", "cloudversify", "clover", "cmplid"], ["code", "code-branch", "code-commit", "code-compare", "code-fork", "code-merge", "code-pull-request", "codepen"], ["codiepie", "coins", "colon-sign", "comment", "comment-dollar", "comment-dots", "comment-medical", "comment-slash"], ["comment-sms", "comments", "comments-dollar", "compact-disc", "compass", "compass-drafting", "compress", "computer"], ["computer-mouse", "confluence", "connectdevelop", "contao", "cookie", "cookie-bite", "copy", "copyright"], ["cotton-bureau", "couch", "cow", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu"], ["creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus"], ["creative-commons-share", "creative-commons-zero", "credit-card", "critical-role", "crop", "crop-simple", "cross", "crosshairs"], ["crow", "crown", "crutch", "cruzeiro-sign", "css3", "css3-alt", "cube", "cubes"], ["cubes-stacked", "cuttlefish", "d", "d-and-d", "d-and-d-beyond", "dailymotion", "dashcube", "database"], ["deezer", "delete-left", "delicious", "democrat", "deploydog", "deskpro", "desktop", "dev"], ["deviantart", "dharmachakra", "dhl", "diagram-next", "diagram-predecessor", "diagram-project", "diagram-successor", "diamond"], ["diamond-turn-right", "diaspora", "dice", "dice-d20", "dice-d6", "dice-five", "dice-four", "dice-one"], ["dice-six", "dice-three", "dice-two", "digg", "digital-ocean", "discord", "discourse", "disease"], ["display", "divide", "dna", "dochub", "docker", "dog", "dollar-sign", "dolly"], ["dong-sign", "door-closed", "door-open", "dove", "down-left-and-up-right-to-center", "down-long", "download", "draft2digital"], ["dragon", "draw-polygon", "dribbble", "dribbble-square", "dropbox", "droplet", "droplet-slash", "drum"], ["drum-steelpan", "drumstick-bite", "drupal", "dumbbell", "dumpster", "dumpster-fire", "dungeon", "dyalog"], ["e", "ear-deaf", "ear-listen", "earlybirds", "earth-africa", "earth-americas", "earth-asia", "earth-europe"], ["earth-oceania", "ebay", "edge", "edge-legacy", "egg", "eject", "elementor", "elevator"], ["ellipsis", "ellipsis-vertical", "ello", "ember", "empire", "envelope", "envelope-circle-check", "envelope-open"], ["envelope-open-text", "envelopes-bulk", "envira", "equals", "eraser", "erlang", "ethereum", "ethernet"], ["etsy", "euro-sign", "evernote", "exclamation", "expand", "expeditedssl", "explosion", "eye"], ["eye-dropper", "eye-low-vision", "eye-slash", "f", "face-angry", "face-dizzy", "face-flushed", "face-frown"], ["face-frown-open", "face-grimace", "face-grin", "face-grin-beam", "face-grin-beam-sweat", "face-grin-hearts", "face-grin-squint", "face-grin-squint-tears"], ["face-grin-stars", "face-grin-tears", "face-grin-tongue", "face-grin-tongue-squint", "face-grin-tongue-wink", "face-grin-wide", "face-grin-wink", "face-kiss"], ["face-kiss-beam", "face-kiss-wink-heart", "face-laugh", "face-laugh-beam", "face-laugh-squint", "face-laugh-wink", "face-meh", "face-meh-blank"], ["face-rolling-eyes", "face-sad-cry", "face-sad-tear", "face-smile", "face-smile-beam", "face-smile-wink", "face-surprise", "face-tired"], ["facebook", "facebook-f", "facebook-messenger", "facebook-square", "fan", "fantasy-flight-games", "faucet", "faucet-drip"], ["fax", "feather", "feather-pointed", "fedex", "fedora", "ferry", "figma", "file"], ["file-arrow-down", "file-arrow-up", "file-audio", "file-circle-check", "file-circle-exclamation", "file-circle-minus", "file-circle-plus", "file-circle-question"], ["file-circle-xmark", "file-code", "file-contract", "file-csv", "file-excel", "file-export", "file-image", "file-import"], ["file-invoice", "file-invoice-dollar", "file-lines", "file-medical", "file-pdf", "file-pen", "file-powerpoint", "file-prescription"], ["file-shield", "file-signature", "file-video", "file-waveform", "file-word", "file-zipper", "fill", "fill-drip"], ["film", "filter", "filter-circle-dollar", "filter-circle-xmark", "fingerprint", "fire", "fire-burner", "fire-extinguisher"], ["fire-flame-curved", "fire-flame-simple", "firefox", "firefox-browser", "first-order", "first-order-alt", "firstdraft", "fish"], ["fish-fins", "flag", "flag-checkered", "flag-usa", "flask", "flask-vial", "flickr", "flipboard"], ["floppy-disk", "florin-sign", "fly", "folder", "folder-closed", "folder-minus", "folder-open", "folder-plus"], ["folder-tree", "font", "font-awesome", "fonticons", "fonticons-fi", "football", "fort-awesome", "fort-awesome-alt"], ["forumbee", "forward", "forward-fast", "forward-step", "foursquare", "franc-sign", "free-code-camp", "freebsd"], ["frog", "fulcrum", "futbol", "g", "galactic-republic", "galactic-senate", "gamepad", "gas-pump"], ["gauge", "gauge-high", "gauge-simple", "gauge-simple-high", "gavel", "gear", "gears", "gem"], ["genderless", "get-pocket", "gg", "gg-circle", "ghost", "gift", "gifts", "git"], ["git-alt", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter"], ["glass-water", "glass-water-droplet", "glasses", "glide", "glide-g", "globe", "gofore", "golang"], ["golf-ball-tee", "goodreads", "goodreads-g", "google", "google-drive", "google-pay", "google-play", "google-plus"], ["google-plus-g", "google-plus-square", "google-wallet", "gopuram", "graduation-cap", "gratipay", "grav", "greater-than"], ["greater-than-equal", "grip", "grip-lines", "grip-lines-vertical", "grip-vertical", "gripfire", "group-arrows-rotate", "grunt"], ["guarani-sign", "guilded", "guitar", "gulp", "gun", "h", "hacker-news", "hacker-news-square"], ["hackerrank", "hammer", "hamsa", "hand", "hand-back-fist", "hand-dots", "hand-fist", "hand-holding"], ["hand-holding-dollar", "hand-holding-droplet", "hand-holding-hand", "hand-holding-heart", "hand-holding-medical", "hand-lizard", "hand-middle-finger", "hand-peace"], ["hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-scissors", "hand-sparkles", "hand-spock"], ["handcuffs", "hands", "hands-asl-interpreting", "hands-bound", "hands-bubbles", "hands-clapping", "hands-holding", "hands-holding-child"], ["hands-holding-circle", "hands-praying", "handshake", "handshake-angle", "handshake-simple", "handshake-simple-slash", "handshake-slash", "hanukiah"], ["hard-drive", "hashnode", "hashtag", "hat-cowboy", "hat-cowboy-side", "hat-wizard", "head-side-cough", "head-side-cough-slash"], ["head-side-mask", "head-side-virus", "heading", "headphones", "headphones-simple", "headset", "heart", "heart-circle-bolt"], ["heart-circle-check", "heart-circle-exclamation", "heart-circle-minus", "heart-circle-plus", "heart-circle-xmark", "heart-crack", "heart-pulse", "helicopter"], ["helicopter-symbol", "helmet-safety", "helmet-un", "highlighter", "hill-avalanche", "hill-rockslide", "hippo", "hips"], ["hire-a-helper", "hive", "hockey-puck", "holly-berry", "hooli", "hornbill", "horse", "horse-head"], ["hospital", "hospital-user", "hot-tub-person", "hotdog", "hotel", "hotjar", "hourglass", "hourglass-empty"], ["hourglass-end", "hourglass-start", "house", "house-chimney", "house-chimney-crack", "house-chimney-medical", "house-chimney-user", "house-chimney-window"], ["house-circle-check", "house-circle-exclamation", "house-circle-xmark", "house-crack", "house-fire", "house-flag", "house-flood-water", "house-flood-water-circle-arrow-right"], ["house-laptop", "house-lock", "house-medical", "house-medical-circle-check", "house-medical-circle-exclamation", "house-medical-circle-xmark", "house-medical-flag", "house-signal"], ["house-tsunami", "house-user", "houzz", "hryvnia-sign", "html5", "hubspot", "hurricane", "i"], ["i-cursor", "ice-cream", "icicles", "icons", "id-badge", "id-card", "id-card-clip", "ideal"], ["igloo", "image", "image-portrait", "images", "imdb", "inbox", "indent", "indian-rupee-sign"], ["industry", "infinity", "info", "instagram", "instagram-square", "instalod", "intercom", "internet-explorer"], ["invision", "ioxhost", "italic", "itch-io", "itunes", "itunes-note", "j", "jar"], ["jar-wheat", "java", "jedi", "jedi-order", "jenkins", "jet-fighter", "jet-fighter-up", "jira"], ["joget", "joint", "joomla", "js", "js-square", "jsfiddle", "jug-detergent", "k"], ["kaaba", "kaggle", "key", "keybase", "keyboard", "keycdn", "khanda", "kickstarter"], ["kickstarter-k", "kip-sign", "kit-medical", "kitchen-set", "kiwi-bird", "korvue", "l", "land-mine-on"], ["landmark", "landmark-dome", "landmark-flag", "language", "laptop", "laptop-code", "laptop-file", "laptop-medical"], ["laravel", "lari-sign", "lastfm", "lastfm-square", "layer-group", "leaf", "leanpub", "left-long"], ["left-right", "lemon", "less", "less-than", "less-than-equal", "life-ring", "lightbulb", "line"], ["lines-leaning", "link", "link-slash", "linkedin", "linkedin-in", "linode", "linux", "lira-sign"], ["list", "list-check", "list-ol", "list-ul", "litecoin-sign", "location-arrow", "location-crosshairs", "location-dot"], ["location-pin", "location-pin-lock", "lock", "lock-open", "locust", "lungs", "lungs-virus", "lyft"], ["m", "magento", "magnet", "magnifying-glass", "magnifying-glass-arrow-right", "magnifying-glass-chart", "magnifying-glass-dollar", "magnifying-glass-location"], ["magnifying-glass-minus", "magnifying-glass-plus", "mailchimp", "manat-sign", "mandalorian", "map", "map-location", "map-location-dot"], ["map-pin", "markdown", "marker", "mars", "mars-and-venus", "mars-and-venus-burst", "mars-double", "mars-stroke"], ["mars-stroke-right", "mars-stroke-up", "martini-glass", "martini-glass-citrus", "martini-glass-empty", "mask", "mask-face", "mask-ventilator"], ["masks-theater", "mastodon", "mattress-pillow", "maxcdn", "maximize", "mdb", "medal", "medapps"], ["medium", "medrt", "meetup", "megaport", "memory", "mendeley", "menorah", "mercury"], ["message", "meteor", "microblog", "microchip", "microphone", "microphone-lines", "microphone-lines-slash", "microphone-slash"], ["microscope", "microsoft", "mill-sign", "minimize", "minus", "mitten", "mix", "mixcloud"], ["mixer", "mizuni", "mobile", "mobile-button", "mobile-retro", "mobile-screen", "mobile-screen-button", "modx"], ["monero", "money-bill", "money-bill-1", "money-bill-1-wave", "money-bill-transfer", "money-bill-trend-up", "money-bill-wave", "money-bill-wheat"], ["money-bills", "money-check", "money-check-dollar", "monument", "moon", "mortar-pestle", "mosque", "mosquito"], ["mosquito-net", "motorcycle", "mound", "mountain", "mountain-city", "mountain-sun", "mug-hot", "mug-saucer"], ["music", "n", "naira-sign", "napster", "neos", "network-wired", "neuter", "newspaper"], ["nfc-directional", "nfc-symbol", "nimblr", "node", "node-js", "not-equal", "note-sticky", "notes-medical"], ["npm", "ns8", "nutritionix", "o", "object-group", "object-ungroup", "octopus-deploy", "odnoklassniki"], ["odnoklassniki-square", "oil-can", "oil-well", "old-republic", "om", "opencart", "openid", "opera"], ["optin-monster", "orcid", "osi", "otter", "outdent", "p", "padlet", "page4"], ["pagelines", "pager", "paint-roller", "paintbrush", "palette", "palfed", "pallet", "panorama"], ["paper-plane", "paperclip", "parachute-box", "paragraph", "passport", "paste", "patreon", "pause"], ["paw", "paypal", "peace", "pen", "pen-clip", "pen-fancy", "pen-nib", "pen-ruler"], ["pen-to-square", "pencil", "people-arrows-left-right", "people-carry-box", "people-group", "people-line", "people-pulling", "people-robbery"], ["people-roof", "pepper-hot", "perbyte", "percent", "periscope", "person", "person-arrow-down-to-line", "person-arrow-up-from-line"], ["person-biking", "person-booth", "person-breastfeeding", "person-burst", "person-cane", "person-chalkboard", "person-circle-check", "person-circle-exclamation"], ["person-circle-minus", "person-circle-plus", "person-circle-question", "person-circle-xmark", "person-digging", "person-dots-from-line", "person-dress", "person-dress-burst"], ["person-drowning", "person-falling", "person-falling-burst", "person-half-dress", "person-harassing", "person-hiking", "person-military-pointing", "person-military-rifle"], ["person-military-to-person", "person-praying", "person-pregnant", "person-rays", "person-rifle", "person-running", "person-shelter", "person-skating"], ["person-skiing", "person-skiing-nordic", "person-snowboarding", "person-swimming", "person-through-window", "person-walking", "person-walking-arrow-loop-left", "person-walking-arrow-right"], ["person-walking-dashed-line-arrow-right", "person-walking-luggage", "person-walking-with-cane", "peseta-sign", "peso-sign", "phabricator", "phoenix-framework", "phoenix-squadron"], ["phone", "phone-flip", "phone-slash", "phone-volume", "photo-film", "php", "pied-piper", "pied-piper-alt"], ["pied-piper-hat", "pied-piper-pp", "pied-piper-square", "piggy-bank", "pills", "pinterest", "pinterest-p", "pinterest-square"], ["pix", "pizza-slice", "place-of-worship", "plane", "plane-arrival", "plane-circle-check", "plane-circle-exclamation", "plane-circle-xmark"], ["plane-departure", "plane-lock", "plane-slash", "plane-up", "plant-wilt", "plate-wheat", "play", "playstation"], ["plug", "plug-circle-bolt", "plug-circle-check", "plug-circle-exclamation", "plug-circle-minus", "plug-circle-plus", "plug-circle-xmark", "plus"], ["plus-minus", "podcast", "poo", "poo-storm", "poop", "power-off", "prescription", "prescription-bottle"], ["prescription-bottle-medical", "print", "product-hunt", "pump-medical", "pump-soap", "pushed", "puzzle-piece", "python"], ["q", "qq", "qrcode", "question", "quinscape", "quora", "quote-left", "quote-right"], ["r", "r-project", "radiation", "radio", "rainbow", "ranking-star", "raspberry-pi", "ravelry"], ["react", "reacteurope", "readme", "rebel", "receipt", "record-vinyl", "rectangle-ad", "rectangle-list"], ["rectangle-xmark", "recycle", "red-river", "reddit", "reddit-alien", "reddit-square", "redhat", "registered"], ["renren", "repeat", "reply", "reply-all", "replyd", "republican", "researchgate", "resolving"], ["restroom", "retweet", "rev", "ribbon", "right-from-bracket", "right-left", "right-long", "right-to-bracket"], ["ring", "road", "road-barrier", "road-bridge", "road-circle-check", "road-circle-exclamation", "road-circle-xmark", "road-lock"], ["road-spikes", "robot", "rocket", "rocketchat", "rockrms", "rotate", "rotate-left", "rotate-right"], ["route", "rss", "ruble-sign", "rug", "ruler", "ruler-combined", "ruler-horizontal", "ruler-vertical"], ["rupee-sign", "rupiah-sign", "rust", "s", "sack-dollar", "sack-xmark", "safari", "sailboat"], ["salesforce", "sass", "satellite", "satellite-dish", "scale-balanced", "scale-unbalanced", "scale-unbalanced-flip", "schlix"], ["school", "school-circle-check", "school-circle-exclamation", "school-circle-xmark", "school-flag", "school-lock", "scissors", "screenpal"], ["screwdriver", "screwdriver-wrench", "scribd", "scroll", "scroll-torah", "sd-card", "searchengin", "section"], ["seedling", "sellcast", "sellsy", "server", "servicestack", "shapes", "share", "share-from-square"], ["share-nodes", "sheet-plastic", "shekel-sign", "shield", "shield-cat", "shield-dog", "shield-halved", "shield-heart"], ["shield-virus", "ship", "shirt", "shirtsinbulk", "shoe-prints", "shop", "shop-lock", "shop-slash"], ["shopify", "shopware", "shower", "shrimp", "shuffle", "shuttle-space", "sign-hanging", "signal"], ["signature", "signs-post", "sim-card", "simplybuilt", "sink", "sistrix", "sitemap", "sith"], ["sitrox", "sketch", "skull", "skull-crossbones", "skyatlas", "skype", "slack", "slash"], ["sleigh", "sliders", "slideshare", "smog", "smoking", "snapchat", "snapchat-square", "snowflake"], ["snowman", "snowplow", "soap", "socks", "solar-panel", "sort", "sort-down", "sort-up"], ["soundcloud", "sourcetree", "spa", "spaghetti-monster-flying", "speakap", "speaker-deck", "spell-check", "spider"], ["spinner", "splotch", "spoon", "spotify", "spray-can", "spray-can-sparkles", "square", "square-arrow-up-right"], ["square-caret-down", "square-caret-left", "square-caret-right", "square-caret-up", "square-check", "square-envelope", "square-font-awesome", "square-font-awesome-stroke"], ["square-full", "square-h", "square-minus", "square-nfi", "square-parking", "square-pen", "square-person-confined", "square-phone"], ["square-phone-flip", "square-plus", "square-poll-horizontal", "square-poll-vertical", "square-root-variable", "square-rss", "square-share-nodes", "square-up-right"], ["square-virus", "square-xmark", "squarespace", "stack-exchange", "stack-overflow", "stackpath", "staff-aesculapius", "stairs"], ["stamp", "star", "star-and-crescent", "star-half", "star-half-stroke", "star-of-david", "star-of-life", "staylinked"], ["steam", "steam-square", "steam-symbol", "sterling-sign", "stethoscope", "sticker-mule", "stop", "stopwatch"], ["stopwatch-20", "store", "store-slash", "strava", "street-view", "strikethrough", "stripe", "stripe-s"], ["stroopwafel", "studiovinari", "stumbleupon", "stumbleupon-circle", "subscript", "suitcase", "suitcase-medical", "suitcase-rolling"], ["sun", "sun-plant-wilt", "superpowers", "superscript", "supple", "suse", "swatchbook", "swift"], ["symfony", "synagogue", "syringe", "t", "table", "table-cells", "table-cells-large", "table-columns"], ["table-list", "table-tennis-paddle-ball", "tablet", "tablet-button", "tablet-screen-button", "tablets", "tachograph-digital", "tag"], ["tags", "tape", "tarp", "tarp-droplet", "taxi", "teamspeak", "teeth", "teeth-open"], ["telegram", "temperature-arrow-down", "temperature-arrow-up", "temperature-empty", "temperature-full", "temperature-half", "temperature-high", "temperature-low"], ["temperature-quarter", "temperature-three-quarters", "tencent-weibo", "tenge-sign", "tent", "tent-arrow-down-to-line", "tent-arrow-left-right", "tent-arrow-turn-left"], ["tent-arrows-down", "tents", "terminal", "text-height", "text-slash", "text-width", "the-red-yeti", "themeco"], ["themeisle", "thermometer", "think-peaks", "thumbs-down", "thumbs-up", "thumbtack", "ticket", "ticket-simple"], ["tiktok", "timeline", "toggle-off", "toggle-on", "toilet", "toilet-paper", "toilet-paper-slash", "toilet-portable"], ["toilets-portable", "toolbox", "tooth", "torii-gate", "tornado", "tower-broadcast", "tower-cell", "tower-observation"], ["tractor", "trade-federation", "trademark", "traffic-light", "trailer", "train", "train-subway", "train-tram"], ["transgender", "trash", "trash-arrow-up", "trash-can", "trash-can-arrow-up", "tree", "tree-city", "trello"], ["triangle-exclamation", "trophy", "trowel", "trowel-bricks", "truck", "truck-arrow-right", "truck-droplet", "truck-fast"], ["truck-field", "truck-field-un", "truck-front", "truck-medical", "truck-monster", "truck-moving", "truck-pickup", "truck-plane"], ["truck-ramp-box", "tty", "tumblr", "tumblr-square", "turkish-lira-sign", "turn-down", "turn-up", "tv"], ["twitch", "twitter", "x-twitter", "twitter-square", "typo3", "u", "uber", "ubuntu"], ["uikit", "umbraco", "umbrella", "umbrella-beach", "uncharted", "underline", "uniregistry", "unity"], ["universal-access", "unlock", "unlock-keyhole", "unsplash", "untappd", "up-down", "up-down-left-right", "up-long"], ["up-right-and-down-left-from-center", "up-right-from-square", "upload", "ups", "usb", "user", "user-astronaut", "user-check"], ["user-clock", "user-doctor", "user-gear", "user-graduate", "user-group", "user-injured", "user-large", "user-large-slash"], ["user-lock", "user-minus", "user-ninja", "user-nurse", "user-pen", "user-plus", "user-secret", "user-shield"], ["user-slash", "user-tag", "user-tie", "user-xmark", "users", "users-between-lines", "users-gear", "users-line"], ["users-rays", "users-rectangle", "users-slash", "users-viewfinder", "usps", "ussunnah", "utensils", "v"], ["vaadin", "van-shuttle", "vault", "vector-square", "venus", "venus-double", "venus-mars", "vest"], ["vest-patches", "viacoin", "viadeo", "viadeo-square", "vial", "vial-circle-check", "vial-virus", "vials"], ["viber", "video", "video-slash", "vihara", "vimeo", "vimeo-square", "vimeo-v", "vine"], ["virus", "virus-covid", "virus-covid-slash", "virus-slash", "viruses", "vk", "vnv", "voicemail"], ["volcano", "volleyball", "volume-high", "volume-low", "volume-off", "volume-xmark", "vr-cardboard", "vuejs"], ["w", "walkie-talkie", "wallet", "wand-magic", "wand-magic-sparkles", "wand-sparkles", "warehouse", "watchman-monitoring"], ["water", "water-ladder", "wave-square", "waze", "weebly", "weibo", "weight-hanging", "weight-scale"], ["weixin", "whatsapp", "whatsapp-square", "wheat-awn", "wheat-awn-circle-exclamation", "wheelchair", "wheelchair-move", "whiskey-glass"], ["whmcs", "wifi", "wikipedia-w", "wind", "window-maximize", "window-minimize", "window-restore", "windows"], ["wine-bottle", "wine-glass", "wine-glass-empty", "wirsindhandwerk", "wix", "wizards-of-the-coast", "wodu", "wolf-pack-battalion"], ["won-sign", "wordpress", "wordpress-simple", "worm", "wpbeginner", "wpexplorer", "wpforms", "wpressr"], ["wrench", "x", "x-ray", "xbox", "xing", "xing-square", "xmark", "xmarks-lines"], ["y", "y-combinator", "yahoo", "yammer", "yandex", "yandex-international", "yarn", "yelp"], ["yen-sign", "yin-yang", "yoast", "youtube", "youtube-square", "z", "zhihu"]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultIcons);

/***/ }),

/***/ "./src/components/icon-picker/components/fetchSvgicons.js":
/*!****************************************************************!*\
  !*** ./src/components/icon-picker/components/fetchSvgicons.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var fetchSvgIcons = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var url, token, getDataFromLocalStorage, fetchFromApi, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = 'https://svg-icons.boomdevs.com/';
          token = 'b9e9d7516943744aed44d0be39217694a92784ce737e07c9e12397eca99fded0'; // Function to check if data exists in localStorage
          getDataFromLocalStorage = function getDataFromLocalStorage() {
            var data = localStorage.getItem('iconData');
            return data ? JSON.parse(data) : null;
          }; // Fetch SVG icons from the API
          fetchFromApi = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var response, _data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return fetch(url, {
                      method: 'GET',
                      headers: {
                        'Authorization': "Bearer ".concat(token),
                        'Content-Type': 'application/json'
                      }
                    });
                  case 3:
                    response = _context.sent;
                    if (response.ok) {
                      _context.next = 6;
                      break;
                    }
                    throw new Error('Network response was not ok');
                  case 6:
                    _context.next = 8;
                    return response.json();
                  case 8:
                    _data = _context.sent;
                    localStorage.setItem('iconData', JSON.stringify(_data)); // Store data in localStorage
                    return _context.abrupt("return", _data);
                  case 13:
                    _context.prev = 13;
                    _context.t0 = _context["catch"](0);
                    console.error('Error fetching SVG icons:', _context.t0);
                    return _context.abrupt("return", null);
                  case 17:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 13]]);
            }));
            return function fetchFromApi() {
              return _ref2.apply(this, arguments);
            };
          }(); // Get data from localStorage or fetch from API
          data = getDataFromLocalStorage();
          if (data) {
            _context2.next = 9;
            break;
          }
          _context2.next = 8;
          return fetchFromApi();
        case 8:
          data = _context2.sent;
        case 9:
          return _context2.abrupt("return", data);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchSvgIcons() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchSvgIcons);

/***/ }),

/***/ "./src/components/icon-picker/components/icon-picker/controls/parseIcon.js":
/*!*********************************************************************************!*\
  !*** ./src/components/icon-picker/components/icon-picker/controls/parseIcon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function parseSVG(svg) {
  svg = svg.replace('far ', '');
  svg = svg.replace('fas ', '');
  svg = svg.replace('fab ', '');
  svg = svg.replace('fa-', '');
  svg = svg.replace('fa ', '');
  return svg;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseSVG);

/***/ }),

/***/ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js":
/*!**********************************************************************************!*\
  !*** ./src/components/icon-picker/components/icon-picker/controls/renderIcon.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parseIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseIcon */ "./src/components/icon-picker/components/icon-picker/controls/parseIcon.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */


var url = 'https://svg-icons.boomdevs.com/';
var token = 'b9e9d7516943744aed44d0be39217694a92784ce737e07c9e12397eca99fded0';

// Function to check if data exists in localStorage
var getDataFromLocalStorage = function getDataFromLocalStorage() {
  var data = localStorage.getItem('iconData');
  return data ? JSON.parse(data) : null;
};

// Fetch SVG icons from the API
var fetchFromApi = function fetchFromApi() {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': "Bearer ".concat(token),
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(function (data) {
    localStorage.setItem('iconData', JSON.stringify(data)); // Store data in localStorage
    return data;
  })["catch"](function (error) {
    console.error('Error fetching SVG icons:', error);
    return null;
  });
};

// Get data from localStorage or fetch from API

function renderSVG(svg) {
  var _fontAwesome$svg;
  var setAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  svg = (0,_parseIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(svg);
  var data = getDataFromLocalStorage();
  if (!data) {
    fetchFromApi().then(function (fetchedData) {
      data = fetchedData;
      // console.log(data); // Log or use the fetched data
    });
  }
  var svgIcon = data;
  var fontAwesome;
  fontAwesome = svgIcon[svg];
  if (!fontAwesome) {
    return null;
  }
  var fontAwesomeSvg = (_fontAwesome$svg = fontAwesome.svg) !== null && _fontAwesome$svg !== void 0 && _fontAwesome$svg.brands ? fontAwesome.svg.brands : fontAwesome.svg.solid;
  var viewBox = "0 0 ".concat(fontAwesomeSvg.width, " ").concat(fontAwesomeSvg.height);
  var path = fontAwesomeSvg.path;
  var align = null;
  switch (svg) {
    case 'align-center':
      align = {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z'
      };
      break;
    case 'align-left':
      align = {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z'
      };
      break;
    case 'align-right':
      align = {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z'
      };
      break;
    case 'align-justify':
      align = {
        d: 'M0 0H18V2H0V0ZM0 5.00001H18V7.00001H0V5.00001ZM0 10H18V12H0V10Z'
      };
      break;
  }
  if (align) {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "12",
      viewBox: "0 0 18 12",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", align));
  }
  return !setAttributes || 'not_set' === setAttributes ? /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: viewBox
  }, extraProps), /*#__PURE__*/React.createElement("path", {
    d: path
  })) : /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "20",
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: viewBox
  }, extraProps), /*#__PURE__*/React.createElement("path", {
    d: path
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSVG);

/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FBIconPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icon-picker/controls/renderIcon */ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js");
/* harmony import */ var _components_defaultSvgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/defaultSvgIcon */ "./src/components/icon-picker/components/defaultSvgIcon.js");
/* harmony import */ var _Components_icon_picker_components_fetchSvgicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/icon-picker/components/fetchSvgicons */ "./src/components/icon-picker/components/fetchSvgicons.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/components/icon-picker/editor.scss");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








function FBIconPicker(props) {
  var value = props.value,
    setIconHandler = props.setIconHandler;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showIconPicker = _useState2[0],
    setIconPickerModal = _useState2[1];
  var closeModal = function closeModal() {
    return setIconPickerModal(false);
  };
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    insertIcon = _useState4[0],
    setInsertIcon = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_defaultSvgIcon__WEBPACK_IMPORTED_MODULE_4__["default"]),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultIcons = _useState6[0],
    setDefaultIcons = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_defaultSvgIcon__WEBPACK_IMPORTED_MODULE_4__["default"]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredDefaultIcons = _useState8[0],
    setFilteredDefaultIcons = _useState8[1];
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('all-icons'),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedCat = _useState10[0],
    setSelectedCat = _useState10[1];
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    svgIcon = _useState12[0],
    setSvgIcon = _useState12[1];
  var iconPickerModal = function iconPickerModal() {
    setIconPickerModal(true);
  };

  // Insert icon
  var fbInsertIcon = function fbInsertIcon() {
    setIconHandler(insertIcon);
    setIconPickerModal(false);
  };
  var categories = [{
    slug: 'all-icons',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Icons', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'brands',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brands', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'business',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Business', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'communication',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Communication', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'design',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Design', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'education',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Education', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'environment',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Environment', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'lifestyle-and-hobbies',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lifestyle', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'science-and-technology',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Science', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'social',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Social', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'travel',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Travel', 'ultimate-addons-for-gutenberg')
  }, {
    slug: 'others',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Others', 'ultimate-addons-for-gutenberg')
  }];

  // Filter icon list
  var filterIconList = function filterIconList(cat) {
    var filteredIcons = [];
    var currentGroup = [];
    setSelectedCat(cat.slug);
    if ('all-icons' === cat.slug) {
      setFilteredDefaultIcons(defaultIcons);
    } else if ('others' === cat.slug) {
      for (var defaultIcon in svgIcon) {
        if (0 === svgIcon[defaultIcon].custom_categories.length) {
          // Add matching icon to the current group
          currentGroup.push(defaultIcon);

          // If the current group is full (like 8 icons), push it to filteredIcons
          if (currentGroup.length === 8) {
            filteredIcons.push(currentGroup);
            currentGroup = []; // Start a new group
          }
        }
      }
      if (currentGroup.length > 0) {
        filteredIcons.push(currentGroup);
      }
      setFilteredDefaultIcons(filteredIcons);
    } else {
      for (var _defaultIcon in svgIcon) {
        // Loop through each icon group in svgIcon
        if (svgIcon[_defaultIcon].custom_categories.includes(cat.slug)) {
          // Add matching icon to the current group
          currentGroup.push(_defaultIcon);
        }

        // If the current group is full (like 8 icons), push it to filteredIcons
        if (currentGroup.length === 8) {
          filteredIcons.push(currentGroup);
          currentGroup = []; // Start a new group
        }
      }
      if (currentGroup.length > 0) {
        filteredIcons.push(currentGroup);
      }
      setFilteredDefaultIcons(filteredIcons);
    }
  };

  // Filter using search
  var searchFilter = function searchFilter(searchKey) {
    setSelectedCat('all-icons');
    if (searchKey.target.value !== '') {
      var data = filteredDefaultIcons;
      var searchKeyword = searchKey.target.value; // Replace with your search keyword

      var filteredData = data.map(function (subArray) {
        return subArray.filter(function (item) {
          return item.toLowerCase().split(/[-\s]/).some(function (word) {
            return word.includes(searchKeyword.toLowerCase());
          });
        });
      }).filter(function (subArray) {
        return subArray.length > 0;
      });
      setFilteredDefaultIcons(filteredData);
    } else {
      setFilteredDefaultIcons(defaultIcons);
    }
  };

  // Render icon list.
  var renderIconList = function renderIconList() {
    if (!filteredDefaultIcons.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "uagb-ip-icons icon-not-found"
      }, /*#__PURE__*/React.createElement("div", {
        className: "uagb-icon-not-available"
      }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Icons Found', 'ultimate-addons-for-gutenberg'))));
    }
    var iconTitle = function iconTitle(actualTitle) {
      if (!actualTitle) {
        return '';
      }
      return actualTitle.length < 11 ? actualTitle : actualTitle.slice(0, 10) + '..';
    };
    var fbIconClasses = function fbIconClasses(classes) {
      return classes.filter(Boolean).join(' ');
    };
    function cellRenderer(renderer) {
      var _svgIcon$currentIcon;
      var columnIndex = renderer.columnIndex,
        key = renderer.key,
        rowIndex = renderer.rowIndex,
        style = renderer.style;
      var currentIcon = filteredDefaultIcons[rowIndex][columnIndex];
      if (!currentIcon) {
        return null;
      }
      var iconClass = fbIconClasses([value === currentIcon && 'default', currentIcon === insertIcon && 'selected']);
      var actualTitle = (_svgIcon$currentIcon = svgIcon[currentIcon]) !== null && _svgIcon$currentIcon !== void 0 && _svgIcon$currentIcon.label ? svgIcon[currentIcon].label : '';
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        style: style,
        className: 'fb_icon_box'
      }, /*#__PURE__*/React.createElement("div", {
        className: "fb_icon ".concat(iconClass),
        onClick: function onClick() {
          if (value !== currentIcon) {
            setInsertIcon(currentIcon);
          }
        }
      }, (0,_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(currentIcon), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
        text: actualTitle
      }, /*#__PURE__*/React.createElement("span", null, iconTitle(actualTitle)))));
    }
    var heightAndWidth = 400 / 8;
    return /*#__PURE__*/React.createElement("div", {
      className: "fb_icon_picker_icons_list"
    }, /*#__PURE__*/React.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      cellRenderer: cellRenderer,
      columnCount: filteredDefaultIcons.length,
      columnWidth: 8 === filteredDefaultIcons.length ? heightAndWidth - 2 : 100,
      height: 400,
      rowCount: filteredDefaultIcons.length,
      rowHeight: 8 === filteredDefaultIcons.length ? heightAndWidth : 100,
      width: 400,
      autoContainerWidth: true
    }));
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_Components_icon_picker_components_fetchSvgicons__WEBPACK_IMPORTED_MODULE_5__["default"])().then(function (icons) {
      if (icons) {
        setSvgIcon(icons);
      }
    });
  }, []);
  return /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb_icon_picker_wrapper",
    onClick: function onClick() {
      return iconPickerModal();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Change icon'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change icon', 'frontis-blocks')), insertIcon !== '' && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setInsertIcon('');
    },
    className: 'remove'
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'icon_placeholder'
  }, insertIcon !== '' ? (0,_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(insertIcon) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
  })))))), /*#__PURE__*/React.createElement("div", null, showIconPicker && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    onRequestClose: closeModal,
    className: 'fb_icon_picker_wrapper_modal'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_modal_wrapper'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_inner'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_header'
  }, /*#__PURE__*/React.createElement("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Library', 'frontis-blocks')), /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_search'
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"
  }))), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return searchFilter(e);
    },
    type: 'text',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'frontis-blocks')
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_body'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_categories'
  }, categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return filterIconList(category);
      },
      className: "fb_icon_picker_wrapper_category ".concat(selectedCat === category.slug ? 'selected' : ''),
      key: index
    }, category.title);
  })), /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_icons_list'
  }, renderIconList())), /*#__PURE__*/React.createElement("div", {
    className: 'fb_icon_picker_wrapper_footer'
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "secondary",
    onClick: fbInsertIcon
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert icon', 'frontis-blocks')))))), "Icon picker"));
}

/***/ }),

/***/ "./src/components/range-control/index.js":
/*!***********************************************!*\
  !*** ./src/components/range-control/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_RangeControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/range-control/editor.lazy.scss");





function FB_RangeControl(_ref) {
  var label = _ref.label,
    DeviceType = _ref.DeviceType,
    rangeUnitsHandler = _ref.rangeUnitsHandler,
    rangeUnit = _ref.rangeUnit,
    rangeDesktopValue = _ref.rangeDesktopValue,
    rangeTabletValue = _ref.rangeTabletValue,
    rangeMobileValue = _ref.rangeMobileValue,
    setAttributes = _ref.setAttributes;
  var UNIT_TYPES = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }];

  // Function to handle range unit change
  var setRangeUnit = function setRangeUnit(unit) {
    rangeUnitsHandler(unit);
  };

  // Function to handle range value change based on DeviceType
  var handleRangeChange = function handleRangeChange(value) {
    if (DeviceType === 'Desktop') {
      setAttributes({
        rangeDesktopValue: value
      });
    } else if (DeviceType === 'Tablet') {
      setAttributes({
        rangeTabletValue: value
      });
    } else if (DeviceType === 'Mobile') {
      setAttributes({
        rangeMobileValue: value
      });
    }
  };

  // Get the current range value based on the DeviceType
  var getCurrentRangeValue = function getCurrentRangeValue() {
    if (DeviceType === 'Desktop') {
      return rangeDesktopValue;
    } else if (DeviceType === 'Tablet') {
      return rangeTabletValue;
    } else if (DeviceType === 'Mobile') {
      return rangeMobileValue;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-fontsize-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-fontsize-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: DeviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        DeviceType: newDevice
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "fb-setting-units-type-wrap"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: key,
      onClick: function onClick() {
        return setRangeUnit(item.value);
      },
      className: "fb-setting-units-type-switcher ".concat(rangeUnit[DeviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-fontsize-rangecontrol"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: getCurrentRangeValue,
    onChange: function onChange(e) {
      return handleRangeChange(e);
    },
    min: 1,
    max: 100,
    allowReset: true,
    resetFallbackValue: 20
  })));
}

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_ResponsiveControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device,
    deviceHandler = _ref.deviceHandler;
  var handleDevice = function handleDevice(deviceName) {
    deviceHandler(deviceName);
    if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch) {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType(deviceName);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-label-wrapper"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fb-setting-label-text"
  }, labelText), /*#__PURE__*/React.createElement("div", {
    className: "fb-responsive-device-wrapper"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-desktop-device ".concat(device === 'Desktop' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Desktop');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "7",
    viewBox: "0 0 8 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-tablet-device ".concat(device === 'Tablet' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Tablet');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "7",
    viewBox: "0 0 6 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "fb-responsive-mobile-device ".concat(device === 'Mobile' ? 'active' : ''),
    onClick: function onClick() {
      return handleDevice('Mobile');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "7",
    viewBox: "0 0 4 7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
  }))))));
}

/***/ }),

/***/ "./src/components/spacing/index.js":
/*!*****************************************!*\
  !*** ./src/components/spacing/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_Spacing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/spacing/editor.lazy.scss");
// eslint-disable-next-line import/no-extraneous-dependencies



// eslint-disable-next-line import/no-unresolved


function FB_Spacing(_ref) {
  var label = _ref.label,
    DeviceType = _ref.DeviceType,
    spacingUnitsHandler = _ref.spacingUnitsHandler,
    spacingUnits = _ref.spacingUnits,
    spacingDesktop = _ref.spacingDesktop,
    spacingTablet = _ref.spacingTablet,
    spacingMobile = _ref.spacingMobile,
    handleSpacingUnitHandler = _ref.handleSpacingUnitHandler,
    spacingCombineBtn = _ref.spacingCombineBtn,
    spacingCombineBtnHandler = _ref.spacingCombineBtnHandler,
    setAttributes = _ref.setAttributes;
  var handleSpacingUnit = function handleSpacingUnit(event, position) {
    handleSpacingUnitHandler(event, position);
  };
  var handleMarginLinkToggle = function handleMarginLinkToggle() {
    spacingCombineBtnHandler();
  };
  var UNIT_TYPES = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }];

  // Get spacing value
  var getSpacingValue = function getSpacingValue(position) {
    if (DeviceType === 'Desktop') {
      return spacingDesktop[position];
    } else if (DeviceType === 'Tablet') {
      return spacingTablet[position];
    }
    return spacingMobile[position];
  };
  var setSpacingUnit = function setSpacingUnit(unit) {
    spacingUnitsHandler(unit);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-inner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-label-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, 'frontis-blocks'),
    device: DeviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        DeviceType: newDevice
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-units-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: "fb-setting-units-type-wrap"
  }, UNIT_TYPES.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: key,
      onClick: function onClick() {
        return setSpacingUnit(item.value);
      },
      className: "fb-setting-units-type-switcher ".concat(spacingUnits[DeviceType] === item.value ? 'active' : '')
    }, item.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "top",
    value: getSpacingValue('top'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'top');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "right",
    value: getSpacingValue('right'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'right');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "bottom",
    value: getSpacingValue('bottom'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'bottom');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'frontis-blocks')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "left",
    value: getSpacingValue('left'),
    onChange: function onChange(e) {
      return handleSpacingUnit(e, 'left');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fb-setting-spacing-input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "fb-setting-spacing-input-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "dashicons ".concat(spacingCombineBtn ? 'dashicons-admin-links' : 'dashicons-editor-unlink', " ").concat(spacingCombineBtn ? 'is-checked' : ''),
    onClick: handleMarginLinkToggle
  })))));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/canUseDOM.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollbarSize.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scrollbarSize)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),

/***/ "./src/blocks/social-icons/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/social-icons/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/social-icons/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/social-icons/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/icon-picker/editor.scss":
/*!************************************************!*\
  !*** ./src/components/icon-picker/editor.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/range-control/editor.lazy.scss":
/*!*******************************************************!*\
  !*** ./src/components/range-control/editor.lazy.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spacing/editor.lazy.scss":
/*!*************************************************!*\
  !*** ./src/components/spacing/editor.lazy.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArrowKeyStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_columnStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_columnStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_rowStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_rowStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onKeyDown", function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;

      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;

        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;

        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;

        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onSectionRendered", function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;
      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrowKeyStepper, [{
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;
      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children;

      var _this$_getScrollState3 = this._getScrollState(),
          scrollToColumn = _this$_getScrollState3.scrollToColumn,
          scrollToRow = _this$_getScrollState3.scrollToRow;

      return react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props,
          isControlled = _this$props3.isControlled,
          onScrollToChange = _this$props3.onScrollToChange;

      if (typeof onScrollToChange === 'function') {
        onScrollToChange({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }

      if (!isControlled) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return {};
      }

      if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) {
        return _objectSpread({}, prevState, {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow,
          instanceProps: {
            prevScrollToColumn: nextProps.scrollToColumn,
            prevScrollToRow: nextProps.scrollToRow
          }
        });
      }

      return {};
    }
  }]);

  return ArrowKeyStepper;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  "columnCount": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "disabled": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,
  "isControlled": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,
  "mode": prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["cells", "edges"]).isRequired,
  "onScrollToChange": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired,
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ArrowKeyStepper, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
});

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__.polyfill)(ArrowKeyStepper);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowKeyStepper);




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowKeyStepper: () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   bpfrpt_proptype_ScrollIndices: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_ScrollIndices),
/* harmony export */   "default": () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_ScrollIndices: () => (/* binding */ bpfrpt_proptype_ScrollIndices)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_ScrollIndices =  false ? 0 : {
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutoSizer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var AutoSizer = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AutoSizer, _React$Component);

  function AutoSizer() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutoSizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AutoSizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_parentNode", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_autoSizer", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_window", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_detectElementResize", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onResize", function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;

      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;
        var win = _this._window || window;
        var style = win.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });

          onResize({
            height: height,
            width: width
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setRef", function (autoSizer) {
      _this._autoSizer = autoSizer;
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutoSizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = (0,_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_8__["default"])(nonce, this._window);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          disableHeight = _this$props2.disableHeight,
          disableWidth = _this$props2.disableWidth,
          style = _this$props2.style;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }
      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */


      return react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: className,
        ref: this._setRef,
        style: _objectSpread({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }]);

  return AutoSizer;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  /** Function responsible for rendering children.*/
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,

  /** Optional custom CSS class name to attach to root AutoSizer element.  */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Default height to use for initial render; useful for SSR */
  "defaultHeight": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),

  /** Default width to use for initial render; useful for SSR */
  "defaultWidth": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),

  /** Disable dynamic :height property */
  "disableHeight": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,

  /** Disable dynamic :width property */
  "disableWidth": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool).isRequired,

  /** Nonce of the inlined stylesheet for Content Security Policy */
  "nonce": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Callback to be invoked on-resize */
  "onResize": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(AutoSizer, "defaultProps", {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
});




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoSizer: () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js");



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellMeasurer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);








var _class, _temp;




/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CellMeasurer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_child", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_measure", function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('CellMeasurer registerChild expects to be passed Element or null');
      }

      _this._child = element;

      if (element) {
        _this._maybeMeasureCell();
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return typeof children === 'function' ? children({
        measure: this._measure,
        registerChild: this._registerChild
      }) : children;
    }
  }, {
    key: "_getCellMeasurements",
    value: function _getCellMeasurements() {
      var cache = this.props.cache;
      var node = this._child || (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.

        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }

        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660

        if (styleWidth) {
          node.style.width = styleWidth;
        }

        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return {
          height: height,
          width: width
        };
      } else {
        return {
          height: 0,
          width: 0
        };
      }
    }
  }, {
    key: "_maybeMeasureCell",
    value: function _maybeMeasureCell() {
      var _this$props2 = this.props,
          cache = _this$props2.cache,
          _this$props2$columnIn = _this$props2.columnIndex,
          columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn,
          parent = _this$props2.parent,
          _this$props2$rowIndex = _this$props2.rowIndex,
          rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;

      if (!cache.has(rowIndex, columnIndex)) {
        var _this$_getCellMeasure2 = this._getCellMeasurements(),
            height = _this$_getCellMeasure2.height,
            width = _this$_getCellMeasure2.width;

        cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.

        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "cache": function cache() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache === "function" ? _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache.isRequired ? _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache.isRequired : _types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache : prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape(_types__WEBPACK_IMPORTED_MODULE_9__.bpfrpt_proptype_CellMeasureCache).isRequired).apply(this, arguments);
  },
  "children": prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node)]).isRequired,
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),
  "parent": prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    invalidateCellSizeAfterRender: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
    recomputeGridSize: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
  }).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)
}), _temp); // Used for DEV mode warning check

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(CellMeasurer, "__internalCellMeasurerFlag", false);



if (true) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_HEIGHT: () => (/* binding */ DEFAULT_HEIGHT),
/* harmony export */   DEFAULT_WIDTH: () => (/* binding */ DEFAULT_WIDTH),
/* harmony export */   "default": () => (/* binding */ CellMeasurerCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");



var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache =
/*#__PURE__*/
function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurerCache);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellHeightCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellWidthCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnWidthCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowHeightCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_defaultHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_defaultWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_minHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_minWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_keyMapper", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_hasFixedHeight", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_hasFixedWidth", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnCount", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowCount", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
    });

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;
    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;
    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (true) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurerCache, [{
    key: "clear",
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }

      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      } // Size is cached per cell so we don't have to re-measure if cells are re-ordered.


      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "_updateCachedColumnAndRowSizes",
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;

        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }

        var columnKey = this._keyMapper(0, columnIndex);

        this._columnWidthCache[columnKey] = columnWidth;
      }

      if (!this._hasFixedHeight) {
        var rowHeight = 0;

        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }

        var rowKey = this._keyMapper(rowIndex, 0);

        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();



function defaultKeyMapper(rowIndex, columnIndex) {
  return "".concat(rowIndex, "-").concat(columnIndex);
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellMeasurer: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   CellMeasurerCache: () => (/* reexport safe */ _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js");
/* harmony import */ var _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellMeasurerCache */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_CellMeasureCache: () => (/* binding */ bpfrpt_proptype_CellMeasureCache)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellMeasureCache =  false ? 0 : {
  "hasFixedWidth": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "hasFixedHeight": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "has": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "set": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "getHeight": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired,
  "getWidth": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Collection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Collection.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CollectionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CollectionView */ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js");
/* harmony import */ var _utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionData */ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js");
/* harmony import */ var _utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getUpdatedOffsetForIndex */ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");














/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Collection, _React$PureComponent);

  function Collection(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Collection);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Collection).call(this, props, context));
    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)

    _this._cellCache = [];
    _this._isScrollingChange = _this._isScrollingChange.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Collection, [{
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }
    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];

      this._collectionView.recomputeCellSizesAndPositions();
    }
    /** React lifecycle methods */

  }, {
    key: "render",
    value: function render() {
      var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

      return react__WEBPACK_IMPORTED_MODULE_8__.createElement(_CollectionView__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }
    /** CellLayoutManager interface */

  }, {
    key: "calculateSizeAndPositionData",
    value: function calculateSizeAndPositionData() {
      var _this$props = this.props,
          cellCount = _this$props.cellCount,
          cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter,
          sectionSize = _this$props.sectionSize;

      var data = (0,_utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }
    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: "getLastRenderedIndices",
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }
    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: "getScrollPositionForCell",
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;

      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];
        scrollLeft = (0,_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });
        scrollTop = (0,_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: "cellRenderers",
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _this$props2 = this.props,
          cellGroupRenderer = _this$props2.cellGroupRenderer,
          cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });
      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({
            index: index
          });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: "_isScrollingChange",
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: "_setCollectionViewRef",
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Collection, "defaultProps", {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
});


Collection.propTypes =  true ? {
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Number of cells in Collection.
   */
  cellCount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)
} : 0;

function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;
  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({
      index: index
    });
    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    }; // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.

    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/CollectionView.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollectionView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CollectionView)).call.apply(_getPrototypeOf2, [this].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onSectionRenderedMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScrollMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])(false));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invokeOnSectionRenderedHelper", function () {
      var _this$props = _this.props,
          cellLayoutManager = _this$props.cellLayoutManager,
          onSectionRendered = _this$props.onSectionRendered;

      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_updateScrollPositionForScrollToCell", function () {
      var _this$props2 = _this.props,
          cellLayoutManager = _this$props2.cellLayoutManager,
          height = _this$props2.height,
          scrollToAlignment = _this$props2.scrollToAlignment,
          scrollToCell = _this$props2.scrollToCell,
          width = _this$props2.width;
      var _this$state = _this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;

      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== _this._scrollingContainer) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.


      var _this$props3 = _this.props,
          cellLayoutManager = _this$props3.cellLayoutManager,
          height = _this$props3.height,
          isScrollingChange = _this$props3.isScrollingChange,
          width = _this$props3.width;
      var scrollbarSize = _this._scrollbarSize;

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)

        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      _this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    });

    _this._scrollbarSize = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();

    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }

    return _this;
  }
  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollectionView, [{
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          cellLayoutManager = _this$props4.cellLayoutManager,
          scrollLeft = _this$props4.scrollLeft,
          scrollToCell = _this$props4.scrollToCell,
          scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = (0,dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      } // Update onSectionRendered callback.


      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props5 = this.props,
          height = _this$props5.height,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToCell = _this$props5.scrollToCell,
          width = _this$props5.width;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollPositionChangeReason = _this$state2.scrollPositionChangeReason,
          scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Update scroll offsets if the current :scrollToCell values requires it


      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoHeight = _this$props6.autoHeight,
          cellCount = _this$props6.cellCount,
          cellLayoutManager = _this$props6.cellLayoutManager,
          className = _this$props6.className,
          height = _this$props6.height,
          horizontalOverscanSize = _this$props6.horizontalOverscanSize,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          style = _this$props6.style,
          verticalOverscanSize = _this$props6.verticalOverscanSize,
          width = _this$props6.width;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollLeft = _this$state3.scrollLeft,
          scrollTop = _this$state3.scrollTop; // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      }; // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: "grid",
        style: _objectSpread({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;
        isScrollingChange(false);
        _this2._disablePointerEventsTimeoutId = null;

        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      }

      return null;
    }
  }]);

  return CollectionView;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(CollectionView, "defaultProps", {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
});

CollectionView.propTypes =  true ? {
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Number of cells in collection.
   */
  cellCount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object).isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  isScrollingChange: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired
} : 0;
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__.polyfill)(CollectionView);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionView);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Section.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Section.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section =
/*#__PURE__*/
function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this._indexMap = {};
    this._indices = [];
  }
  /** Add a cell to this section. */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "addCellIndex",
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;

        this._indices.push(index);
      }
    }
    /** Get all cell indices that have been added to this section. */

  }, {
    key: "getCellIndices",
    value: function getCellIndices() {
      return this._indices;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
    }
  }]);

  return Section;
}();





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/SectionManager.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SectionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./node_modules/react-virtualized/dist/es/Collection/Section.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */

var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager =
/*#__PURE__*/
function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SectionManager);

    this._sectionSize = sectionSize;
    this._cellMetadata = [];
    this._sections = {};
  }
  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SectionManager, [{
    key: "getCellIndices",
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;
      var indices = {};
      this.getSections({
        height: height,
        width: width,
        x: x,
        y: y
      }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      }); // Object keys are strings; this function returns numbers

      return Object.keys(indices).map(function (index) {
        return indices[index];
      });
    }
    /** Get size and position information for the cell specified. */

  }, {
    key: "getCellMetadata",
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;
      return this._cellMetadata[index];
    }
    /** Get all Sections overlapping the specified region. */

  }, {
    key: "getSections",
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;
      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = "".concat(sectionX, ".").concat(sectionY);

          if (!this._sections[key]) {
            this._sections[key] = new _Section__WEBPACK_IMPORTED_MODULE_2__["default"]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }
    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: "getTotalSectionCount",
    value: function getTotalSectionCount() {
      return Object.keys(this._sections).length;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      var _this = this;

      return Object.keys(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }
    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: "registerCell",
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;
      this._cellMetadata[index] = cellMetadatum;
      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({
          index: index
        });
      });
    }
  }]);

  return SectionManager;
}();





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _Collection__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/Collection.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Collection__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_Index: () => (/* binding */ bpfrpt_proptype_Index),
/* harmony export */   bpfrpt_proptype_PositionInfo: () => (/* binding */ bpfrpt_proptype_PositionInfo),
/* harmony export */   bpfrpt_proptype_ScrollPosition: () => (/* binding */ bpfrpt_proptype_ScrollPosition),
/* harmony export */   bpfrpt_proptype_SizeAndPositionInfo: () => (/* binding */ bpfrpt_proptype_SizeAndPositionInfo),
/* harmony export */   bpfrpt_proptype_SizeInfo: () => (/* binding */ bpfrpt_proptype_SizeInfo)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_Index =  false ? 0 : {
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_PositionInfo =  false ? 0 : {
  "x": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "y": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_ScrollPosition =  false ? 0 : {
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_SizeAndPositionInfo =  false ? 0 : {
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "x": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "y": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_SizeInfo =  false ? 0 : {
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculateSizeAndPositionData)
/* harmony export */ });
/* harmony import */ var _SectionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SectionManager */ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js");

function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;
  var cellMetadata = [];
  var sectionManager = new _SectionManager__WEBPACK_IMPORTED_MODULE_0__["default"](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({
      index: index
    });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnSizer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ColumnSizer, _React$PureComponent);

  function ColumnSizer(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ColumnSizer);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnSizer).call(this, props, context));
    _this._registerChild = _this._registerChild.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ColumnSizer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          columnMaxWidth = _this$props.columnMaxWidth,
          columnMinWidth = _this$props.columnMinWidth,
          columnCount = _this$props.columnCount,
          width = _this$props.width;

      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          columnMaxWidth = _this$props2.columnMaxWidth,
          columnMinWidth = _this$props2.columnMinWidth,
          columnCount = _this$props2.columnCount,
          width = _this$props2.width;
      var safeColumnMinWidth = columnMinWidth || 1;
      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);
      var adjustedWidth = Math.min(width, columnWidth * columnCount);
      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);


ColumnSizer.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /** Optional minimum allowed column width */
  columnMinWidth: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /** Number of columns in Grid or Table child */
  columnCount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number).isRequired,

  /** Width of Grid or Table child */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnSizer: () => (/* reexport safe */ _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/Grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/Grid.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SCROLLING_RESET_TIME_INTERVAL: () => (/* binding */ DEFAULT_SCROLLING_RESET_TIME_INTERVAL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionDataAndUpdateScrollOffset */ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js");
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony import */ var _utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/updateScrollIndexHelper */ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js");
/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);









var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Grid);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Grid).call(this, props));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onGridRenderedMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScrollMemoizer", (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_12__["default"])(false));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_deferredInvalidateColumnIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_deferredInvalidateRowIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_recomputeScrollLeftFlag", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_recomputeScrollTopFlag", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_horizontalScrollBarSize", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_verticalScrollBarSize", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_scrollbarPresenceChanged", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_scrollingContainer", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_childrenToDisplay", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_columnStartIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_columnStopIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_rowStartIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_rowStopIndex", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedColumnStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedColumnStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedRowStartIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_renderedRowStopIndex", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initialScrollTop", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initialScrollLeft", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_disablePointerEventsTimeoutId", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_styleCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_cellCache", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_debounceScrollEndedCallback", function () {
      _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_invokeOnGridRenderedHelper", function () {
      var onSectionRendered = _this.props.onSectionRendered;

      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });

    var columnSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }

    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }

    return _this;
  }
  /**
   * Gets offsets for a given cell and alignment.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = _objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._debounceScrollEnded();

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          autoWidth = _this$props.autoWidth,
          height = _this$props.height,
          width = _this$props.width;
      var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;

      var _this$props3 = this.props,
          scrollToColumn = _this$props3.scrollToColumn,
          scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */

  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          getScrollbarSize = _this$props4.getScrollbarSize,
          height = _this$props4.height,
          scrollLeft = _this$props4.scrollLeft,
          scrollToColumn = _this$props4.scrollToColumn,
          scrollTop = _this$props4.scrollTop,
          scrollToRow = _this$props4.scrollToRow,
          width = _this$props4.width;
      var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.


      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = _objectSpread({}, prevState, {
            needToResetStyleCache: false
          });

          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`


      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }

        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.


      var sizeIsBiggerThanZero = height > 0 && width > 0;

      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }

      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback


      this._invokeOnGridRenderedHelper(); // Initialize onScroll callback


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props5 = this.props,
          autoHeight = _this$props5.autoHeight,
          autoWidth = _this$props5.autoWidth,
          columnCount = _this$props5.columnCount,
          height = _this$props5.height,
          rowCount = _this$props5.rowCount,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToColumn = _this$props5.scrollToColumn,
          scrollToRow = _this$props5.scrollToRow,
          width = _this$props5.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
          scrollTop = _this$state.scrollTop,
          instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218


      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.


      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;

        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0,_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__["default"])({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;

        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0,_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_14__["default"])({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners


      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoContainerWidth = _this$props6.autoContainerWidth,
          autoHeight = _this$props6.autoHeight,
          autoWidth = _this$props6.autoWidth,
          className = _this$props6.className,
          containerProps = _this$props6.containerProps,
          containerRole = _this$props6.containerRole,
          containerStyle = _this$props6.containerStyle,
          height = _this$props6.height,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          role = _this$props6.role,
          style = _this$props6.style,
          tabIndex = _this$props6.tabIndex,
          width = _this$props6.width;
      var _this$state2 = this.state,
          instanceProps = _this$state2.instanceProps,
          needToResetStyleCache = _this$state2.needToResetStyleCache;

      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset


      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here


      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23


      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props['aria-label'],
        "aria-readonly": this.props['aria-readonly'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({}, gridStyle, {}, style),
        tabIndex: tabIndex
      }), childrenToDisplay.length > 0 && react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: _objectSpread({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnGridRenderedHelper()

        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).


          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._disablePointerEventsTimeoutId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_18__.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;

      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      } // If scrolling is controlled outside this component, clear cache when scrolling stops


      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }

      var maybeStateA;
      var maybeStateB;
      (0,_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0,_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();

      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;
      return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",

    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }

      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;

      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }

      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;

      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }

      return {};
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "propTypes",  false ? 0 : {
  "aria-label": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,
  "aria-readonly": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),

  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  "autoContainerWidth": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  "autoWidth": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /** Responsible for rendering a cell given an row and column index.  */
  "cellRenderer": function cellRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRenderer).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a group of cells given their index ranges.  */
  "cellRangeRenderer": function cellRangeRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellRangeRenderer).isRequired).apply(this, arguments);
  },

  /** Optional custom CSS class name to attach to root Grid element.  */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string),

  /** Number of columns in grid.  */
  "columnCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
  "columnWidth": function columnWidth() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Unfiltered props for the Grid container. */
  "containerProps": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),

  /** ARIA role for the cell-container.  */
  "containerRole": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,

  /** Optional inline style applied to inner cell-container */
  "containerStyle": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object).isRequired,

  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  "deferredMeasurementCache": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),

  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  "estimatedColumnSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Exposed for testing purposes only.  */
  "getScrollbarSize": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Optional custom id to attach to root Grid element.  */
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string),

  /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),

  /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */
  "isScrollingOptOut": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool).isRequired,

  /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
  "noContentRenderer": function noContentRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */
  "onScrollbarPresenceChange": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /** Callback invoked with information about the section of the Grid that was just rendered.  */
  "onSectionRendered": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func).isRequired,

  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanColumnCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  "overscanRowCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** ARIA role for the grid element.  */
  "role": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().string).isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  "rowHeight": function rowHeight() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Number of rows in grid.  */
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Horizontal offset. */
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment === "function" ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment.isRequired ? _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment.isRequired : _types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment : prop_types__WEBPACK_IMPORTED_MODULE_19___default().shape(_types__WEBPACK_IMPORTED_MODULE_20__.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Column index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToColumn": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Vertical offset. */
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToRow": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired,

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object).isRequired,

  /** Tab index for focus */
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number),

  /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_19___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Grid, "defaultProps", {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_15__["default"],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_16__["default"],
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_13__["default"],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_17__.polyfill)(Grid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);
















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_DIRECTION_BACKWARD: () => (/* binding */ SCROLL_DIRECTION_BACKWARD),
/* harmony export */   SCROLL_DIRECTION_FORWARD: () => (/* binding */ SCROLL_DIRECTION_FORWARD),
/* harmony export */   SCROLL_DIRECTION_HORIZONTAL: () => (/* binding */ SCROLL_DIRECTION_HORIZONTAL),
/* harmony export */   SCROLL_DIRECTION_VERTICAL: () => (/* binding */ SCROLL_DIRECTION_VERTICAL),
/* harmony export */   "default": () => (/* binding */ defaultOverscanIndicesGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellRangeRenderer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.

  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.

      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };
      var renderedCell = void 0; // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028

      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (true) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (true) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;
        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SCROLL_DIRECTION_BACKWARD: () => (/* binding */ SCROLL_DIRECTION_BACKWARD),
/* harmony export */   SCROLL_DIRECTION_FORWARD: () => (/* binding */ SCROLL_DIRECTION_FORWARD),
/* harmony export */   SCROLL_DIRECTION_HORIZONTAL: () => (/* binding */ SCROLL_DIRECTION_HORIZONTAL),
/* harmony export */   SCROLL_DIRECTION_VERTICAL: () => (/* binding */ SCROLL_DIRECTION_VERTICAL),
/* harmony export */   "default": () => (/* binding */ defaultOverscanIndicesGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Grid: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   accessibilityOverscanIndicesGetter: () => (/* reexport safe */ _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   bpfrpt_proptype_Alignment: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_Alignment),
/* harmony export */   bpfrpt_proptype_CellPosition: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellPosition),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_CellSize: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_CellSize),
/* harmony export */   bpfrpt_proptype_NoContentRenderer: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_NoContentRenderer),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetter: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_OverscanIndicesGetter),
/* harmony export */   bpfrpt_proptype_RenderedSection: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_RenderedSection),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.bpfrpt_proptype_Scroll),
/* harmony export */   "default": () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   defaultCellRangeRenderer: () => (/* reexport safe */ _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   defaultOverscanIndicesGetter: () => (/* reexport safe */ _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/Grid.js");
/* harmony import */ var _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessibilityOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js");
/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");






















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_Alignment: () => (/* binding */ bpfrpt_proptype_Alignment),
/* harmony export */   bpfrpt_proptype_CellCache: () => (/* binding */ bpfrpt_proptype_CellCache),
/* harmony export */   bpfrpt_proptype_CellPosition: () => (/* binding */ bpfrpt_proptype_CellPosition),
/* harmony export */   bpfrpt_proptype_CellRangeRenderer: () => (/* binding */ bpfrpt_proptype_CellRangeRenderer),
/* harmony export */   bpfrpt_proptype_CellRangeRendererParams: () => (/* binding */ bpfrpt_proptype_CellRangeRendererParams),
/* harmony export */   bpfrpt_proptype_CellRenderer: () => (/* binding */ bpfrpt_proptype_CellRenderer),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* binding */ bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_CellSize: () => (/* binding */ bpfrpt_proptype_CellSize),
/* harmony export */   bpfrpt_proptype_CellSizeGetter: () => (/* binding */ bpfrpt_proptype_CellSizeGetter),
/* harmony export */   bpfrpt_proptype_NoContentRenderer: () => (/* binding */ bpfrpt_proptype_NoContentRenderer),
/* harmony export */   bpfrpt_proptype_OverscanIndices: () => (/* binding */ bpfrpt_proptype_OverscanIndices),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetter: () => (/* binding */ bpfrpt_proptype_OverscanIndicesGetter),
/* harmony export */   bpfrpt_proptype_OverscanIndicesGetterParams: () => (/* binding */ bpfrpt_proptype_OverscanIndicesGetterParams),
/* harmony export */   bpfrpt_proptype_RenderedSection: () => (/* binding */ bpfrpt_proptype_RenderedSection),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* binding */ bpfrpt_proptype_Scroll),
/* harmony export */   bpfrpt_proptype_ScrollbarPresenceChange: () => (/* binding */ bpfrpt_proptype_ScrollbarPresenceChange),
/* harmony export */   bpfrpt_proptype_StyleCache: () => (/* binding */ bpfrpt_proptype_StyleCache),
/* harmony export */   bpfrpt_proptype_VisibleCellRange: () => (/* binding */ bpfrpt_proptype_VisibleCellRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


var bpfrpt_proptype_CellPosition =  false ? 0 : {
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_CellRendererParams =  false ? 0 : {
  "columnIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "isVisible": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
var bpfrpt_proptype_CellRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellCache =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired);
var bpfrpt_proptype_StyleCache =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired);
var bpfrpt_proptype_CellRangeRendererParams =  false ? 0 : {
  "cellCache": prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired).isRequired,
  "cellRenderer": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  "columnSizeAndPositionManager": function columnSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any).isRequired).apply(this, arguments);
  },
  "columnStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "deferredMeasurementCache": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  "horizontalOffsetAdjustment": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "isScrollingOptOut": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "rowSizeAndPositionManager": function rowSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any).isRequired).apply(this, arguments);
  },
  "rowStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "styleCache": prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired).isRequired,
  "verticalOffsetAdjustment": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "visibleColumnIndices": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  "visibleRowIndices": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
var bpfrpt_proptype_CellRangeRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellSizeGetter =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_CellSize =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]);
var bpfrpt_proptype_NoContentRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_Scroll =  false ? 0 : {
  "clientHeight": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "clientWidth": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollHeight": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollLeft": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "scrollWidth": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_ScrollbarPresenceChange =  false ? 0 : {
  "horizontal": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "vertical": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  "size": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_RenderedSection =  false ? 0 : {
  "columnOverscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnOverscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "columnStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowOverscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowOverscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "rowStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndicesGetterParams =  false ? 0 : {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  "direction": prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["horizontal", "vertical"]).isRequired,
  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  "scrollDirection": prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([-1, 1]).isRequired,
  // Number of rows or columns in the current axis
  "cellCount": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // Maximum number of cells to over-render in either direction
  "overscanCellsCount": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // Begin of range of visible cells
  "startIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  // End of range of visible cells
  "stopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndices =  false ? 0 : {
  "overscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,
  "overscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
var bpfrpt_proptype_OverscanIndicesGetter =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func);
var bpfrpt_proptype_Alignment =  false ? 0 : prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["auto", "end", "start", "center"]);
var bpfrpt_proptype_VisibleCellRange =  false ? 0 : {
  "start": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  "stop": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};




















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellSizeAndPositionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");




/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager =
/*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  // Used in deferred mode to track which cells have been queued for measurement.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellSizeAndPositionManager);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellSizeAndPositionData", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_lastMeasuredIndex", -1);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_lastBatchedIndex", -1);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellCount", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellSizeGetter", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_estimatedCellSize", void 0);

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var size = this._cellSizeGetter({
            index: i
          }); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.


          if (size === undefined || isNaN(size)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: 0
            };
            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: size
            };
            offset += size;
            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;

        case 'end':
          idealOffset = minOffset;
          break;

        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;

        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;
      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;

      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      } // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.


      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScalingCellSizeAndPositionManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js");
/* harmony import */ var _maxElementSize_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maxElementSize.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");







/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager =
/*#__PURE__*/
function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === void 0 ? (0,_maxElementSize_js__WEBPACK_IMPORTED_MODULE_5__.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["maxScrollSize"]);

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScalingCellSizeAndPositionManager);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_cellSizeAndPositionManager", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_maxScrollSize", void 0);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_4__["default"](params);
    this._maxScrollSize = maxScrollSize;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScalingCellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }
    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calculateSizeAndPositionDataAndUpdateScrollOffset)
/* harmony export */ });
/**
 * Helper method that determines when to recalculate row or column metadata.
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMaxElementSize: () => (/* binding */ getMaxElementSize)
/* harmony export */ });
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome;
};

var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }

  return DEFAULT_MAX_ELEMENT_SIZE;
};

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateScrollIndexHelper)
/* harmony export */ });
/* harmony import */ var _ScalingCellSizeAndPositionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScalingCellSizeAndPositionManager.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");

/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.

  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfiniteLoader),
/* harmony export */   forceUpdateReactVirtualizedComponent: () => (/* binding */ forceUpdateReactVirtualizedComponent),
/* harmony export */   isRangeVisible: () => (/* binding */ isRangeVisible),
/* harmony export */   scanForUnloadedRanges: () => (/* binding */ scanForUnloadedRanges)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");











/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(InfiniteLoader, _React$PureComponent);

  function InfiniteLoader(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InfiniteLoader);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InfiniteLoader).call(this, props, context));
    _this._loadMoreRowsMemoizer = (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__["default"])();
    _this._onRowsRendered = _this._onRowsRendered.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._registerChild = _this._registerChild.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InfiniteLoader, [{
    key: "resetLoadMoreRowsCache",
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = (0,_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_9__["default"])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_loadUnloadedRanges",
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;
      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);

        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: "_onRowsRendered",
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;
      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: "_doStuff",
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2,
          _this3 = this;

      var _this$props = this.props,
          isRowLoaded = _this$props.isRowLoaded,
          minimumBatchSize = _this$props.minimumBatchSize,
          rowCount = _this$props.rowCount,
          threshold = _this$props.threshold;
      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      }); // For memoize comparison

      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(unloadedRanges.map(function (_ref3) {
        var startIndex = _ref3.startIndex,
            stopIndex = _ref3.stopIndex;
        return [startIndex, stopIndex];
      })));

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: {
          squashedUnloadedRanges: squashedUnloadedRanges
        }
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(InfiniteLoader, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
});


InfiniteLoader.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired
} : 0;
function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref4.lastRenderedStopIndex,
      startIndex = _ref4.startIndex,
      stopIndex = _ref4.stopIndex;
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */

function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded,
      minimumBatchSize = _ref5.minimumBatchSize,
      rowCount = _ref5.rowCount,
      startIndex = _ref5.startIndex,
      stopIndex = _ref5.stopIndex;
  var unloadedRanges = [];
  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({
      index: index
    });

    if (!loaded) {
      rangeStopIndex = index;

      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });
      rangeStartIndex = rangeStopIndex = null;
    }
  } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.


  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({
        index: _index
      })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  } // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.


  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({
        index: _index2
      })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}
/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */

function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteLoader: () => (/* reexport safe */ _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/List.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/List.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);









var _class, _temp;




/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "Grid", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_cellRenderer", function (_ref) {
      var parent = _ref.parent,
          rowIndex = _ref.rowIndex,
          style = _ref.style,
          isScrolling = _ref.isScrolling,
          isVisible = _ref.isVisible,
          key = _ref.key;
      var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');

      if (widthDescriptor && widthDescriptor.writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_setRef", function (ref) {
      _this.Grid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;
      var onScroll = _this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_onSectionRendered", function (_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
          rowStartIndex = _ref3.rowStartIndex,
          rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(List, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment,
          index = _ref4.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$columnIndex = _ref6.columnIndex,
          columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex,
          _ref6$rowIndex = _ref6.rowIndex,
          rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          noRowsRenderer = _this$props.noRowsRenderer,
          scrollToIndex = _this$props.scrollToIndex,
          width = _this$props.width;
      var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('ReactVirtualized__List', className);
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, "propTypes",  false ? 0 : {
  "aria-label": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool).isRequired,

  /** Optional CSS class name */
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  "estimatedRowSize": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Height constraint for list (determines how many actual rows are rendered) */
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  "noRowsRenderer": function noRowsRenderer() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },

  /** Callback invoked with information about the slice of rows that were just rendered.  */
  "onRowsRendered": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,

  /** See Grid#overscanIndicesGetter */
  "overscanIndicesGetter": function overscanIndicesGetter() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  "overscanRowCount": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  "rowHeight": function rowHeight() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  "rowRenderer": function rowRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer === "function" ? _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer.isRequired ? _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer.isRequired : _types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_types__WEBPACK_IMPORTED_MODULE_12__.bpfrpt_proptype_RowRenderer).isRequired).apply(this, arguments);
  },

  /** Number of rows in list. */
  "rowCount": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** See Grid#scrollToAlignment */
  "scrollToAlignment": function scrollToAlignment() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment === "function" ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment.isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment.isRequired : _Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment : prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape(_Grid__WEBPACK_IMPORTED_MODULE_8__.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  "scrollToIndex": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired,

  /** Vertical offset. */
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),

  /** Optional inline style */
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,

  /** Tab index for focus */
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),

  /** Width of list */
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_8__.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_RowRendererParams),
/* harmony export */   "default": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/List.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_RenderedRows: () => (/* binding */ bpfrpt_proptype_RenderedRows),
/* harmony export */   bpfrpt_proptype_RowRenderer: () => (/* binding */ bpfrpt_proptype_RowRenderer),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* binding */ bpfrpt_proptype_RowRendererParams),
/* harmony export */   bpfrpt_proptype_Scroll: () => (/* binding */ bpfrpt_proptype_Scroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var bpfrpt_proptype_RowRendererParams =  false ? 0 : {
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  "isVisible": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  "parent": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  "style": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
var bpfrpt_proptype_RowRenderer =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func);
var bpfrpt_proptype_RenderedRows =  false ? 0 : {
  "overscanStartIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "overscanStopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "startIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "stopIndex": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
var bpfrpt_proptype_Scroll =  false ? 0 : {
  "clientHeight": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "scrollHeight": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/Masonry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SCROLLING_RESET_TIME_INTERVAL: () => (/* binding */ DEFAULT_SCROLLING_RESET_TIME_INTERVAL),
/* harmony export */   bpfrpt_proptype_CellMeasurerCache: () => (/* binding */ bpfrpt_proptype_CellMeasurerCache),
/* harmony export */   bpfrpt_proptype_Positioner: () => (/* binding */ bpfrpt_proptype_Positioner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _PositionCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PositionCache */ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var emptyObject = {};
/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Masonry, _React$PureComponent);

  function Masonry() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Masonry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Masonry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isScrolling: false,
      scrollTop: 0
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_debounceResetIsScrollingId", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invalidateOnUpdateStartIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_invalidateOnUpdateStopIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionCache", new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_startIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_startIndexMemoized", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_stopIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_stopIndexMemoized", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_debounceResetIsScrollingCallback", function () {
      _this.setState({
        isScrolling: false
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onScroll", function (event) {
      var height = _this.props.height;
      var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.

      if (eventScrollTop !== scrollTop) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.


      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Masonry, [{
    key: "clearCellPositions",
    value: function clearCellPositions() {
      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();
      this.forceUpdate();
    } // HACK This method signature was intended for Grid

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: "recomputeCellPositions",
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;
      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();

      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();

      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          cellCount = _this$props.cellCount,
          cellMeasurerCache = _this$props.cellMeasurerCache,
          cellRenderer = _this$props.cellRenderer,
          className = _this$props.className,
          height = _this$props.height,
          id = _this$props.id,
          keyMapper = _this$props.keyMapper,
          overscanByPixels = _this$props.overscanByPixels,
          role = _this$props.role,
          style = _this$props.style,
          tabIndex = _this$props.tabIndex,
          width = _this$props.width,
          rowDirection = _this$props.rowDirection;
      var _this$state = this.state,
          isScrolling = _this$state.isScrolling,
          scrollTop = _this$state.scrollTop;
      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;
      var startIndex = 0;
      var stopIndex;

      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        var _style;

        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }

        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index)
          }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "position", 'absolute'), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "top", top), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_style, "width", cellMeasurerCache.getWidth(index)), _style)
        }));
      }); // We need to measure additional cells for this layout


      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }

      this._startIndex = startIndex;
      this._stopIndex = stopIndex;
      return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('ReactVirtualized__Masonry', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({
          boxSizing: 'border-box',
          direction: 'ltr',
          height: autoHeight ? 'auto' : height,
          overflowX: 'hidden',
          overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
          position: 'relative',
          width: width,
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform'
        }, style),
        tabIndex: tabIndex
      }, react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "ReactVirtualized__Masonry__innerScrollContainer",
        style: {
          width: '100%',
          height: estimateTotalHeight,
          maxWidth: '100%',
          maxHeight: estimateTotalHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }
      }, children));
    }
  }, {
    key: "_checkInvalidateOnUpdate",
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var startIndex = this._invalidateOnUpdateStartIndex;
        var stopIndex = this._invalidateOnUpdateStopIndex;
        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells

        this._populatePositionCache(startIndex, stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: "_debounceResetIsScrolling",
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._debounceResetIsScrollingId) {
        (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_getEstimatedTotalHeight",
    value: function _getEstimatedTotalHeight() {
      var _this$props2 = this.props,
          cellCount = _this$props2.cellCount,
          cellMeasurerCache = _this$props2.cellMeasurerCache,
          width = _this$props2.width;
      var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: "_invokeOnScrollCallback",
    value: function _invokeOnScrollCallback() {
      var _this$props3 = this.props,
          height = _this$props3.height,
          onScroll = _this$props3.onScroll;
      var scrollTop = this.state.scrollTop;

      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });
        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: "_invokeOnCellsRenderedCallback",
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var onCellsRendered = this.props.onCellsRendered;
        onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });
        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: "_populatePositionCache",
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _this$props4 = this.props,
          cellMeasurerCache = _this$props4.cellMeasurerCache,
          cellPositioner = _this$props4.cellPositioner;

      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            left = _cellPositioner.left,
            top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }

      return null;
    }
  }]);

  return Masonry;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  "autoHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool).isRequired,
  "cellCount": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "cellMeasurerCache": function cellMeasurerCache() {
    return (typeof CellMeasurerCache === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(CellMeasurerCache).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "cellPositioner": function cellPositioner() {
    return (typeof Positioner === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(Positioner).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "cellRenderer": function cellRenderer() {
    return (typeof CellRenderer === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(CellRenderer).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
  "height": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),
  "keyMapper": function keyMapper() {
    return (typeof KeyMapper === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(KeyMapper).isRequired : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any).isRequired).apply(this, arguments);
  },
  "onCellsRendered": function onCellsRendered() {
    return (typeof OnCellsRenderedCallback === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(OnCellsRenderedCallback) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  },
  "onScroll": function onScroll() {
    return (typeof OnScrollCallback === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(OnScrollCallback) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  },
  "overscanByPixels": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "role": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string).isRequired,
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "tabIndex": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "width": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "rowDirection": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string).isRequired,
  "scrollTop": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Masonry, "defaultProps", {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: 'ltr'
});

function identity(value) {
  return value;
}

function noop() {}

var bpfrpt_proptype_CellMeasurerCache =  false ? 0 : {
  "defaultHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "defaultWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,
  "getHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,
  "getWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired
};
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__.polyfill)(Masonry);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Masonry);
var bpfrpt_proptype_Positioner =  false ? 0 : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func);





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PositionCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vendor_intervalTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendor/intervalTree */ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js");






// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache =
/*#__PURE__*/
function () {
  function PositionCache() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PositionCache);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_columnSizeMap", {});

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_intervalTree", (0,_vendor_intervalTree__WEBPACK_IMPORTED_MODULE_4__["default"])());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_leftMap", {});
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PositionCache, [{
    key: "estimateTotalHeight",
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    } // Render all cells visible within the viewport range defined.

  }, {
    key: "range",
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);

      this._leftMap[index] = left;
      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];

      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: "shortestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: "tallestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCellPositioner)
/* harmony export */ });
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");
function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
  var columnHeights;
  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;

    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;
    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];

    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;
    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;
  return cellPositioner;
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Masonry: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createCellPositioner: () => (/* reexport safe */ _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCellPositioner */ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js");
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CellMeasurerCacheDecorator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");





/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator =
/*#__PURE__*/
function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CellMeasurerCacheDecorator);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_cellMeasurerCache", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_columnIndexOffset", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rowIndexOffset", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    });

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CellMeasurerCacheDecorator, [{
    key: "clear",
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CellMeasurerCacheDecorator */ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MultiGrid, _React$PureComponent);

  function MultiGrid(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MultiGrid);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MultiGrid).call(this, props, context));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_deferredInvalidateColumnIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_deferredInvalidateRowIndex", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_bottomLeftGridRef", function (ref) {
      _this._bottomLeftGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_bottomRightGridRef", function (ref) {
      _this._bottomRightGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererBottomLeftGrid", function (_ref) {
      var rowIndex = _ref.rowIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["rowIndex"]);

      var _this$props = _this.props,
          cellRenderer = _this$props.cellRenderer,
          fixedRowCount = _this$props.fixedRowCount,
          rowCount = _this$props.rowCount;

      if (rowIndex === rowCount - fixedRowCount) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this),
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererBottomRightGrid", function (_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["columnIndex", "rowIndex"]);

      var _this$props2 = _this.props,
          cellRenderer = _this$props2.cellRenderer,
          fixedColumnCount = _this$props2.fixedColumnCount,
          fixedRowCount = _this$props2.fixedRowCount;
      return cellRenderer(_objectSpread({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this),
        rowIndex: rowIndex + fixedRowCount
      }));
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_cellRendererTopRightGrid", function (_ref3) {
      var columnIndex = _ref3.columnIndex,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["columnIndex"]);

      var _this$props3 = _this.props,
          cellRenderer = _this$props3.cellRenderer,
          columnCount = _this$props3.columnCount,
          fixedColumnCount = _this$props3.fixedColumnCount;

      if (columnIndex === columnCount - fixedColumnCount) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)
        }));
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_columnWidthRightGrid", function (_ref4) {
      var index = _ref4.index;
      var _this$props4 = _this.props,
          columnCount = _this$props4.columnCount,
          fixedColumnCount = _this$props4.fixedColumnCount,
          columnWidth = _this$props4.columnWidth;
      var _this$state = _this.state,
          scrollbarSize = _this$state.scrollbarSize,
          showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({
        index: index + fixedColumnCount
      }) : columnWidth;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScroll", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      _this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll(scrollInfo);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollbarPresenceChange", function (_ref5) {
      var horizontal = _ref5.horizontal,
          size = _ref5.size,
          vertical = _ref5.vertical;
      var _this$state2 = _this.state,
          showHorizontalScrollbar = _this$state2.showHorizontalScrollbar,
          showVerticalScrollbar = _this$state2.showVerticalScrollbar;

      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        _this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });

        var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;

        if (typeof onScrollbarPresenceChange === 'function') {
          onScrollbarPresenceChange({
            horizontal: horizontal,
            size: size,
            vertical: vertical
          });
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollLeft", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      _this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: _this.state.scrollTop
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_onScrollTop", function (scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      _this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: _this.state.scrollLeft
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_rowHeightBottomGrid", function (_ref6) {
      var index = _ref6.index;
      var _this$props5 = _this.props,
          fixedRowCount = _this$props5.fixedRowCount,
          rowCount = _this$props5.rowCount,
          rowHeight = _this$props5.rowHeight;
      var _this$state3 = _this.state,
          scrollbarSize = _this$state3.scrollbarSize,
          showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({
        index: index + fixedRowCount
      }) : rowHeight;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_topLeftGridRef", function (ref) {
      _this._topLeftGrid = ref;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_topRightGridRef", function (ref) {
      _this._topRightGrid = ref;
    });

    var deferredMeasurementCache = props.deferredMeasurementCache,
        _fixedColumnCount = props.fixedColumnCount,
        _fixedRowCount = props.fixedRowCount;

    _this._maybeCalculateCachedStyles(true);

    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_11__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiGrid, [{
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$columnIndex = _ref8.columnIndex,
          columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex,
          _ref8$rowIndex = _ref8.rowIndex,
          rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;

      var _this$props6 = this.props,
          fixedColumnCount = _this$props6.fixedColumnCount,
          fixedRowCount = _this$props6.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;

      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          scrollLeft = _this$props7.scrollLeft,
          scrollTop = _this$props7.scrollTop;

      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          onScroll = _this$props8.onScroll,
          onSectionRendered = _this$props8.onSectionRendered,
          onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange,
          scrollLeftProp = _this$props8.scrollLeft,
          scrollToColumn = _this$props8.scrollToColumn,
          scrollTopProp = _this$props8.scrollTop,
          scrollToRow = _this$props8.scrollToRow,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props8, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);

      this._prepareForRender(); // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      } // scrollTop and scrollLeft props are explicitly filtered out and ignored


      var _this$state4 = this.state,
          scrollLeft = _this$state4.scrollLeft,
          scrollTop = _this$state4.scrollTop;
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerOuterStyle
      }, react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height = props.height;

      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;

      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({
              index: index
            });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width = props.width;

      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;

      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({
              index: index
            });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }
    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props9 = this.props,
          columnWidth = _this$props9.columnWidth,
          enableFixedColumnScroll = _this$props9.enableFixedColumnScroll,
          enableFixedRowScroll = _this$props9.enableFixedRowScroll,
          height = _this$props9.height,
          fixedColumnCount = _this$props9.fixedColumnCount,
          fixedRowCount = _this$props9.fixedRowCount,
          rowHeight = _this$props9.rowHeight,
          style = _this$props9.style,
          styleBottomLeftGrid = _this$props9.styleBottomLeftGrid,
          styleBottomRightGrid = _this$props9.styleBottomRightGrid,
          styleTopLeftGrid = _this$props9.styleTopLeftGrid,
          styleTopRightGrid = _this$props9.styleTopRightGrid,
          width = _this$props9.width;
      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;

      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = _objectSpread({
          height: height,
          overflow: 'visible',
          // Let :focus outline show through
          width: width
        }, style);
      }

      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };
        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible',
          // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }

      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles();

      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;

      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
          height = this._getBottomGridHeight(props),
          width = this._getLeftGridWidth(props),
          scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
          gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;

      var bottomLeftGrid = react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));

      if (hideBottomLeftGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: _objectSpread({}, this._bottomLeftGridStyle, {
            height: height,
            width: width,
            overflowY: 'hidden'
          })
        }, bottomLeftGrid);
      }

      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;
      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;

      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft,
          hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state5 = this.state,
          showHorizontalScrollbar = _this$state5.showHorizontalScrollbar,
          scrollbarSize = _this$state5.scrollbarSize;

      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
          height = this._getTopGridHeight(props),
          width = this._getRightGridWidth(props),
          additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;

      var gridHeight = height,
          style = this._topRightGridStyle;

      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = _objectSpread({}, this._topRightGridStyle, {
          left: 0
        });
      }

      var topRightGrid = react__WEBPACK_IMPORTED_MODULE_9__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));

      if (hideTopRightGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: _objectSpread({}, this._topRightGridStyle, {
            height: height,
            width: width,
            overflowX: 'hidden'
          })
        }, topRightGrid);
      }

      return topRightGrid;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);

  return MultiGrid;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(MultiGrid, "defaultProps", {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
});

MultiGrid.propTypes =  true ? {
  classNameBottomLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameBottomRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameTopLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  classNameTopRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string).isRequired,
  enableFixedColumnScroll: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool).isRequired,
  enableFixedRowScroll: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool).isRequired,
  fixedColumnCount: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number).isRequired,
  fixedRowCount: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().number).isRequired,
  onScrollbarPresenceChange: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleBottomLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleBottomRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleTopLeftGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  styleTopRightGrid: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object).isRequired,
  hideTopRightGridScrollbar: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),
  hideBottomLeftGridScrollbar: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)
} : 0;
(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_10__.polyfill)(MultiGrid);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiGrid);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiGrid: () => (/* reexport safe */ _MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollSync)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScrollSync, _React$PureComponent);

  function ScrollSync(props, context) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSync);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollSync).call(this, props, context));
    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };
    _this._onScroll = _this._onScroll.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSync, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          clientHeight = _this$state.clientHeight,
          clientWidth = _this$state.clientWidth,
          scrollHeight = _this$state.scrollHeight,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop,
          scrollWidth = _this$state.scrollWidth;
      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;
      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);


ScrollSync.propTypes =  true ? {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollSync: () => (/* reexport safe */ _ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Column.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Column.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");











/**
 * Describes the header and cell contents of a table column.
 */

var Column =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Column, _React$Component);

  function Column() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Column);

    return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Column).apply(this, arguments));
  }

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Column, "defaultProps", {
  cellDataGetter: _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__["default"],
  cellRenderer: _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__["default"],
  defaultSortDirection: _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__["default"],
  style: {}
});


Column.propTypes =  true ? {
  /** Optional aria-label value to set on the column header */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),

  /** Optional CSS class to apply to cell */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Uniquely identifies the row-data attribute corresponding to this cell */
  dataKey: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().any).isRequired,

  /** Optional direction to be used when clicked the first time */
  defaultSortDirection: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].DESC]),

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),

  /** Flex grow style; defaults to 0 */
  flexGrow: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Flex shrink style; defaults to 1 */
  flexShrink: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Optional CSS class to apply to this column's header */
  headerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired,

  /** Optional inline style to apply to this column's header */
  headerStyle: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Optional id to set on the column header */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),

  /** Header label for this column */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Minimum width of column. */
  minWidth: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number),

  /** Optional inline style to apply to cell */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number).isRequired
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortDirection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortDirection);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortIndicator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortIndicator)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");




/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */

function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;
  var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].DESC
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24"
  }, sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M7 14l5-5 5 5z"
  }) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}
SortIndicator.propTypes =  true ? {
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_2__["default"].DESC])
} : 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Table.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Table.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony import */ var _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultHeaderRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Table, _React$PureComponent);

  function Table(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Table);

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Table).call(this, props));
    _this.state = {
      scrollbarWidth: 0
    };
    _this._createColumn = _this._createColumn.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._createRow = _this._createRow.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onScroll = _this._onScroll.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onSectionRendered = _this._onSectionRendered.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._setRef = _this._setRef.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = (0,react_dom__WEBPACK_IMPORTED_MODULE_11__.findDOMNode)(this.Grid);

        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }

      return 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disableHeader = _this$props.disableHeader,
          gridClassName = _this$props.gridClassName,
          gridStyle = _this$props.gridStyle,
          headerHeight = _this$props.headerHeight,
          headerRowRenderer = _this$props.headerRowRenderer,
          height = _this$props.height,
          id = _this$props.id,
          noRowsRenderer = _this$props.noRowsRenderer,
          rowClassName = _this$props.rowClassName,
          rowStyle = _this$props.rowStyle,
          scrollToIndex = _this$props.scrollToIndex,
          style = _this$props.style,
          width = _this$props.width;
      var scrollbarWidth = this.state.scrollbarWidth;
      var availableRowsHeight = disableHeader ? height : height - headerHeight;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: -1
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: -1
      }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up

      this._cachedColumnStyles = [];
      react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = _objectSpread({
          overflow: 'hidden'
        }, flexStyles);
      }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.

      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-colcount": react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).length,
        "aria-rowcount": this.props.rowCount,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table', className),
        id: id,
        role: "grid",
        style: style
      }, !disableHeader && headerRowRenderer({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__headerRow', rowClass),
        columns: this._getHeaderColumns(),
        style: _objectSpread({
          height: headerHeight,
          overflow: 'hidden',
          paddingRight: scrollbarWidth,
          width: width
        }, rowStyleObject)
      }), react__WEBPACK_IMPORTED_MODULE_10__.createElement(_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        "aria-readonly": null,
        autoContainerWidth: true,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__Grid', gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width,
        columnCount: 1,
        height: availableRowsHeight,
        id: undefined,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: "rowgroup",
        scrollbarWidth: scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: _objectSpread({}, gridStyle, {
          overflowX: 'hidden'
        })
      })));
    }
  }, {
    key: "_createColumn",
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;
      var cellData = cellDataGetter({
        columnData: columnData,
        dataKey: dataKey,
        rowData: rowData
      });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var onClick = function onClick(event) {
        onColumnClick && onColumnClick({
          columnData: columnData,
          dataKey: dataKey,
          event: event
        });
      };

      var style = this._cachedColumnStyles[columnIndex];
      var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942

      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-colindex": columnIndex + 1,
        "aria-describedby": id,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__rowColumn', className),
        key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
        onClick: onClick,
        role: "gridcell",
        style: style,
        title: title
      }, renderedCell);
    }
  }, {
    key: "_createHeader",
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _this$props2 = this.props,
          headerClassName = _this$props2.headerClassName,
          headerStyle = _this$props2.headerStyle,
          onHeaderClick = _this$props2.onHeaderClick,
          sort = _this$props2.sort,
          sortBy = _this$props2.sortBy,
          sortDirection = _this$props2.sortDirection;
      var _column$props2 = column.props,
          columnData = _column$props2.columnData,
          dataKey = _column$props2.dataKey,
          defaultSortDirection = _column$props2.defaultSortDirection,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label;
      var sortEnabled = !disableSort && sort;
      var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });

      var style = this._getFlexStyleForColumn(column, _objectSpread({}, headerStyle, {}, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });
      var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.

        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC ? _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC : _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC;

        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({
            columnData: columnData,
            dataKey: dataKey,
            event: event
          });
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerAriaSort = 'none';
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC ? 'ascending' : 'descending';
      } // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942


      return react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
        "aria-label": headerAriaLabel,
        "aria-sort": headerAriaSort,
        className: classNames,
        id: id,
        key: 'Header-Col' + index,
        onClick: headerOnClick,
        onKeyDown: headerOnKeyDown,
        role: "columnheader",
        style: style,
        tabIndex: headerTabIndex
      }, renderedHeader);
    }
  }, {
    key: "_createRow",
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _this$props3 = this.props,
          children = _this$props3.children,
          onRowClick = _this$props3.onRowClick,
          onRowDoubleClick = _this$props3.onRowDoubleClick,
          onRowRightClick = _this$props3.onRowRightClick,
          onRowMouseOver = _this$props3.onRowMouseOver,
          onRowMouseOut = _this$props3.onRowMouseOut,
          rowClassName = _this$props3.rowClassName,
          rowGetter = _this$props3.rowGetter,
          rowRenderer = _this$props3.rowRenderer,
          rowStyle = _this$props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: index
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: index
      }) : rowStyle;
      var rowData = rowGetter({
        index: index
      });
      var columns = react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });
      var className = (0,clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Table__row', rowClass);

      var flattenedStyle = _objectSpread({}, style, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      }, rowStyleObject);

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }
    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: "_getFlexStyleForColumn",
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");

      var style = _objectSpread({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: "_getHeaderColumns",
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          disableHeader = _this$props4.disableHeader;
      var items = disableHeader ? [] : react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(children);
      return items.map(function (column, index) {
        return _this4._createHeader({
          column: column,
          index: index
        });
      });
    }
  }, {
    key: "_getRowHeight",
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight({
        index: rowIndex
      }) : rowHeight;
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    }
  }, {
    key: "_onSectionRendered",
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: "_setRef",
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: "_setScrollbarWidth",
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();
      this.setState({
        scrollbarWidth: scrollbarWidth
      });
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_10__.PureComponent);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Table, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_12__.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer: _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_13__["default"],
  headerRowRenderer: _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_14__["default"],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});


Table.propTypes =  true ? {
  /** This is just set on the grid top element. */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** This is just set on the grid top element. */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /** One or more Columns describing the data displayed in this row */
  children: function children(props) {
    var children = react__WEBPACK_IMPORTED_MODULE_10__.Children.toArray(props.children);

    for (var i = 0; i < children.length; i++) {
      var childType = children[i].type;

      if (childType !== _Column__WEBPACK_IMPORTED_MODULE_9__["default"] && !(childType.prototype instanceof _Column__WEBPACK_IMPORTED_MODULE_9__["default"])) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Disable rendering the header at all */
  disableHeader: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Optional CSS class to apply to all column headers */
  headerClassName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Fixed height of header row */
  headerHeight: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Fixed/available height for out DOM element */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Optional id */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Optional callback when a column is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onColumnClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Optional callback when a column's header is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onHeaderClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func).isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]).isRequired,

  /** Number of rows in table. */
  rowCount: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Optional custom inline style to attach to table rows. */
  rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_16___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func)]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired,

  /** Vertical offset. */
  scrollTop: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),

  /**
   * Sort function to be called if a sortable header is clicked.
   * Should implement the following interface: ({
   *   defaultSortDirection: 'ASC' | 'DESC',
   *   event: MouseEvent,
   *   sortBy: string,
   *   sortDirection: SortDirection
   * }): void
   */
  sort: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_16___default().oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_15__["default"].DESC]),

  /** Optional inline style */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),

  /** Tab index for focus */
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),

  /** Width of list */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number).isRequired
} : 0;


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/createMultiSort.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMultiSort)
/* harmony export */ });
function createMultiSort(sortCallback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultSortBy = _ref.defaultSortBy,
      _ref$defaultSortDirec = _ref.defaultSortDirection,
      defaultSortDirection = _ref$defaultSortDirec === void 0 ? {} : _ref$defaultSortDirec;

  if (!sortCallback) {
    throw Error("Required parameter \"sortCallback\" not specified");
  }

  var sortBy = defaultSortBy || [];
  var sortDirection = {};
  sortBy.forEach(function (dataKey) {
    sortDirection[dataKey] = defaultSortDirection[dataKey] !== undefined ? defaultSortDirection[dataKey] : 'ASC';
  });

  function sort(_ref2) {
    var defaultSortDirection = _ref2.defaultSortDirection,
        event = _ref2.event,
        dataKey = _ref2.sortBy;

    if (event.shiftKey) {
      // Shift + click appends a column to existing criteria
      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
        sortBy.push(dataKey);
      }
    } else if (event.ctrlKey || event.metaKey) {
      // Control + click removes column from sort (if pressent)
      var index = sortBy.indexOf(dataKey);

      if (index >= 0) {
        sortBy.splice(index, 1);
        delete sortDirection[dataKey];
      }
    } else {
      // Clear sortBy array of all non-selected keys
      sortBy.length = 0;
      sortBy.push(dataKey); // Clear sortDirection object of all non-selected keys

      var sortDirectionKeys = Object.keys(sortDirection);
      sortDirectionKeys.forEach(function (key) {
        if (key !== dataKey) delete sortDirection[key];
      }); // If key is already selected, reverse sort direction.
      // Else, set sort direction to default direction.

      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
      }
    } // Notify application code


    sortCallback({
      sortBy: sortBy,
      sortDirection: sortDirection
    });
  }

  return {
    sort: sort,
    sortBy: sortBy,
    sortDirection: sortDirection
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellDataGetter)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultCellRenderer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultHeaderRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: typeof label === 'string' ? label : null
  }, label)];

  if (showSortIndicator) {
    children.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SortIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "SortIndicator",
      sortDirection: sortDirection
    }));
  }

  return children;
}
defaultHeaderRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_HeaderRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_HeaderRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultHeaderRowRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    role: "row",
    style: style
  }, columns);
}
defaultHeaderRowRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_HeaderRowRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_1__.bpfrpt_proptype_HeaderRowRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultRowRenderer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;
  var a11yProps = {
    'aria-rowindex': index + 1
  };

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a11yProps, {
    className: className,
    key: key,
    role: "row",
    style: style
  }), columns);
}
defaultRowRenderer.propTypes =  false ? 0 : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_RowRendererParams === (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any) ? {} : _types__WEBPACK_IMPORTED_MODULE_2__.bpfrpt_proptype_RowRendererParams;



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Column: () => (/* reexport safe */ _Column__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SortDirection: () => (/* reexport safe */ _SortDirection__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   SortIndicator: () => (/* reexport safe */ _SortIndicator__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Table: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   createMultiSort: () => (/* reexport safe */ _createMultiSort__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultCellDataGetter: () => (/* reexport safe */ _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   defaultCellRenderer: () => (/* reexport safe */ _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   defaultHeaderRenderer: () => (/* reexport safe */ _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   defaultHeaderRowRenderer: () => (/* reexport safe */ _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   defaultRowRenderer: () => (/* reexport safe */ _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _createMultiSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMultiSort */ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js");
/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony import */ var _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultHeaderRowRenderer.js */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");
/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/Table.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Table__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/types.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/types.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_CellDataGetterParams: () => (/* binding */ bpfrpt_proptype_CellDataGetterParams),
/* harmony export */   bpfrpt_proptype_CellRendererParams: () => (/* binding */ bpfrpt_proptype_CellRendererParams),
/* harmony export */   bpfrpt_proptype_HeaderRendererParams: () => (/* binding */ bpfrpt_proptype_HeaderRendererParams),
/* harmony export */   bpfrpt_proptype_HeaderRowRendererParams: () => (/* binding */ bpfrpt_proptype_HeaderRowRendererParams),
/* harmony export */   bpfrpt_proptype_RowRendererParams: () => (/* binding */ bpfrpt_proptype_RowRendererParams)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellDataGetterParams =  false ? 0 : {
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }
};
var bpfrpt_proptype_CellRendererParams =  false ? 0 : {
  "cellData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "rowIndex": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired
};
var bpfrpt_proptype_HeaderRowRendererParams =  false ? 0 : {
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "columns": prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }).isRequired,
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }
};
var bpfrpt_proptype_HeaderRendererParams =  false ? 0 : {
  "columnData": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "dataKey": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "disableSort": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  "label": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  "sortBy": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  "sortDirection": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
var bpfrpt_proptype_RowRendererParams =  false ? 0 : {
  "className": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  "columns": prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }).isRequired,
  "index": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number).isRequired,
  "isScrolling": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool).isRequired,
  "onRowClick": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowDoubleClick": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowMouseOver": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "onRowMouseOut": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  "rowData": function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "style": function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  },
  "key": (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SCROLLING_TIMEOUT: () => (/* binding */ IS_SCROLLING_TIMEOUT),
/* harmony export */   "default": () => (/* binding */ WindowScroller)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_onScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/onScroll */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js");
/* harmony import */ var _utils_dimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/dimensions */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js");
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);








var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _getPrototypeOf2;

    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WindowScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WindowScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_window", getWindow());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionFromTop", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_positionFromLeft", 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_detectElementResize", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_child", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", _objectSpread({}, (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getDimensions)(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }

      _this._child = element;

      _this.updatePosition();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onChildScroll", function (_ref) {
      var scrollTop = _ref.scrollTop;

      if (_this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_registerResizeListener", function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_unregisterResizeListener", function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_onResize", function () {
      _this.updatePosition();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "__handleWindowScrollEvent", function () {
      if (!_this._isMounted) {
        return;
      }

      var onScroll = _this.props.onScroll;
      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        var scrollOffset = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getScrollOffset)(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        onScroll({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "__resetIsScrolling", function () {
      _this.setState({
        isScrolling: false
      });
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WindowScroller, [{
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var thisNode = this._child || react_dom__WEBPACK_IMPORTED_MODULE_8__.findDOMNode(this);

      if (thisNode instanceof Element && scrollElement) {
        var offset = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getPositionOffset)(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = (0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_10__.getDimensions)(scrollElement, this.props);

      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = (0,_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_11__["default"])();
      this.updatePosition(scrollElement);

      if (scrollElement) {
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.registerScrollListener)(this, scrollElement);

        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;

      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.unregisterScrollListener)(this, prevScrollElement);
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.registerScrollListener)(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);

        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        (0,_utils_onScroll__WEBPACK_IMPORTED_MODULE_9__.unregisterScrollListener)(this, scrollElement);

        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state,
          isScrolling = _this$state2.isScrolling,
          scrollTop = _this$state2.scrollTop,
          scrollLeft = _this$state2.scrollLeft,
          height = _this$state2.height,
          width = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }]);

  return WindowScroller;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes",  false ? 0 : {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  "children": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Callback to be invoked on-resize: ({ height, width }) */
  "onResize": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  "onScroll": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  "scrollElement": prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().any), function () {
    return (typeof Element === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_12___default().instanceOf(Element) : (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any)).apply(this, arguments);
  }]),

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  "scrollingResetTimeInterval": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /** Height used for server-side rendering */
  "serverHeight": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired,

  /** Width used for server-side rendering */
  "serverWidth": (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number).isRequired
}), _temp);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(WindowScroller, "defaultProps", {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
});




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IS_SCROLLING_TIMEOUT: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_0__.IS_SCROLLING_TIMEOUT),
/* harmony export */   WindowScroller: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDimensions: () => (/* binding */ getDimensions),
/* harmony export */   getPositionOffset: () => (/* binding */ getPositionOffset),
/* harmony export */   getScrollOffset: () => (/* binding */ getScrollOffset)
/* harmony export */ });
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
// TODO Move this into WindowScroller and import from there
var isWindow = function isWindow(element) {
  return element === window;
};

var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};

function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}
/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */

function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);

    var _elementRect = getBoundingBox(element);

    var _containerRect = getBoundingBox(container);

    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}
/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */

function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerScrollListener: () => (/* binding */ registerScrollListener),
/* harmony export */   unregisterScrollListener: () => (/* binding */ unregisterScrollListener)
/* harmony export */ });
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _WindowScroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WindowScroller.js */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");

var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.requestAnimationTimeout)(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = 'none';
  }

  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }

  mountedInstances.push(component);
}
function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });

  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);

    if (disablePointerEventsTimeoutId) {
      (0,_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowKeyStepper: () => (/* reexport safe */ _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__.ArrowKeyStepper),
/* harmony export */   AutoSizer: () => (/* reexport safe */ _AutoSizer__WEBPACK_IMPORTED_MODULE_1__.AutoSizer),
/* harmony export */   CellMeasurer: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.CellMeasurer),
/* harmony export */   CellMeasurerCache: () => (/* reexport safe */ _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.CellMeasurerCache),
/* harmony export */   Collection: () => (/* reexport safe */ _Collection__WEBPACK_IMPORTED_MODULE_3__.Collection),
/* harmony export */   Column: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.Column),
/* harmony export */   ColumnSizer: () => (/* reexport safe */ _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__.ColumnSizer),
/* harmony export */   Grid: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.Grid),
/* harmony export */   InfiniteLoader: () => (/* reexport safe */ _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__.InfiniteLoader),
/* harmony export */   List: () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_7__.List),
/* harmony export */   Masonry: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_8__.Masonry),
/* harmony export */   MultiGrid: () => (/* reexport safe */ _MultiGrid__WEBPACK_IMPORTED_MODULE_9__.MultiGrid),
/* harmony export */   ScrollSync: () => (/* reexport safe */ _ScrollSync__WEBPACK_IMPORTED_MODULE_10__.ScrollSync),
/* harmony export */   SortDirection: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.SortDirection),
/* harmony export */   SortIndicator: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.SortIndicator),
/* harmony export */   Table: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.Table),
/* harmony export */   WindowScroller: () => (/* reexport safe */ _WindowScroller__WEBPACK_IMPORTED_MODULE_12__.WindowScroller),
/* harmony export */   accessibilityOverscanIndicesGetter: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.accessibilityOverscanIndicesGetter),
/* harmony export */   createMasonryCellPositioner: () => (/* reexport safe */ _Masonry__WEBPACK_IMPORTED_MODULE_8__.createCellPositioner),
/* harmony export */   createTableMultiSort: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.createMultiSort),
/* harmony export */   defaultCellRangeRenderer: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.defaultCellRangeRenderer),
/* harmony export */   defaultOverscanIndicesGetter: () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_5__.defaultOverscanIndicesGetter),
/* harmony export */   defaultTableCellDataGetter: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultCellDataGetter),
/* harmony export */   defaultTableCellRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultCellRenderer),
/* harmony export */   defaultTableHeaderRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultHeaderRenderer),
/* harmony export */   defaultTableHeaderRowRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultHeaderRowRenderer),
/* harmony export */   defaultTableRowRenderer: () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_11__.defaultRowRenderer)
/* harmony export */ });
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js");
/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/index.js");
/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/index.js");
/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js");
/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/index.js");
/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js");














/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/animationFrame.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caf: () => (/* binding */ caf),
/* harmony export */   raf: () => (/* binding */ raf)
/* harmony export */ });
// Properly handle server-side rendering.
var win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/


var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
var caf = cancel;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCallbackMemoizer)
/* harmony export */ });
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var cachedIndices = {};
  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;
    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });
    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUpdatedOffsetForIndex)
/* harmony export */ });
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;
  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;

    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bpfrpt_proptype_AnimationTimeoutId: () => (/* binding */ bpfrpt_proptype_AnimationTimeoutId),
/* harmony export */   cancelAnimationTimeout: () => (/* binding */ cancelAnimationTimeout),
/* harmony export */   requestAnimationTimeout: () => (/* binding */ requestAnimationTimeout)
/* harmony export */ });
/* harmony import */ var _animationFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationFrame */ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var bpfrpt_proptype_AnimationTimeoutId =  false ? 0 : {
  "id": (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.caf)(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.raf)(timeout);
    }
  };

  var frame = {
    id: (0,_animationFrame__WEBPACK_IMPORTED_MODULE_0__.raf)(timeout)
  };
  return frame;
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/
function _GEA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GEP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GTP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LTP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LEP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function _EQP(a, l, h, y, c) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);

    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDetectElementResize)
/* harmony export */ });
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/
function createDetectElementResize(nonce, hostWindow) {
  // Check `document` and `window` in case of server-side rendering
  var _window;

  if (typeof hostWindow !== 'undefined') {
    _window = hostWindow;
  } else if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = __webpack_require__.g;
  }

  var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };

      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);

      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }

      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;

          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */


    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = _window.document.createElement('fakeelement');

      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;

        var elementStyle = _window.getComputedStyle(element);

        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }

        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';

        if (window.trustedTypes) {
          var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
            createHTML: function createHTML() {
              return resizeTriggersHtml;
            }
          });
          element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
        } else {
          element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
        }

        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };

          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }

      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);

        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);

          element.__resizeTriggers__.__animationListener__ = null;
        }

        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/intervalTree.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWrapper)
/* harmony export */ });
/* harmony import */ var _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearchBounds */ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js");
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);

  if (idx < 0) {
    return NOT_FOUND;
  }

  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);

  if (this.left) {
    this.left.intervals(result);
  }

  if (this.right) {
    this.right.intervals(result);
  }

  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;

  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin);
    var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;

  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }

    var rw = this.right ? this.right.count : 0;

    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.left.remove(interval);

    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }

    var lw = this.left ? this.left.count : 0;

    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.right.remove(interval);

    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }

    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;

        while (n.right) {
          p = n;
          n = n.right;
        }

        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }

        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }

      return SUCCESS;
    }

    for (var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }

      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);

        for (var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }

    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];

  if (d) {
    return d;
  }

  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];

  if (d) {
    return d;
  }

  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }

  var pts = [];

  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }

  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];

  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];

    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  } //Split center intervals


  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees


function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);

    if (r === EMPTY) {
      this.root = null;
    }

    return r !== NOT_FOUND;
  }

  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }

    return 0;
  }
});
Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }

    return [];
  }
});
function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }

  return new IntervalTree(createIntervalTree(intervals));
}

/***/ }),

/***/ "./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/node_modules/clsx/dist/clsx.m.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./src/blocks/social-icons/block.json":
/*!********************************************!*\
  !*** ./src/blocks/social-icons/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/social-icons","version":"1.0.0","title":"Social Icons","category":"frontis-blocks","icon":"facebook-alt","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/social-icons/index": 0,
/******/ 			"blocks/social-icons/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontis_blocks"] = self["webpackChunkfrontis_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/social-icons/style-index"], () => (__webpack_require__("./src/blocks/social-icons/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map