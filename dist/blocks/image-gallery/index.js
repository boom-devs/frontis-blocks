/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/blocks/image-gallery/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/image-gallery/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  GalleryType: {
    type: "string",
    "default": "grid"
  },
  GalleryItems: {
    type: "array",
    "default": [
    // You can define some default items if needed
    {
      id: 'image-1',
      title: 'Image 1',
      desc: '',
      column: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      row: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      image: {
        id: 0,
        url: '',
        alt: '',
        width: '',
        height: ''
      }
    }, {
      id: 'image-2',
      title: 'Image 2',
      desc: '',
      column: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      row: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      image: {
        id: 0,
        url: '',
        alt: '',
        width: '',
        height: ''
      }
    }, {
      id: 'image-3',
      title: 'Image 3',
      desc: '',
      column: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      row: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      image: {
        id: 0,
        url: '',
        alt: '',
        width: '',
        height: ''
      }
    }]
  },
  GalleryItemHeightDesktop: {
    type: "number",
    "default": 200
  },
  GalleryItemHeightTablet: {
    type: "number",
    "default": 200
  },
  GalleryItemHeightMobile: {
    type: "number",
    "default": 200
  },
  GalleryItemHeightUnits: {
    type: "string",
    "default": "px"
  },
  ImageWidthDesktop: {
    type: "number",
    "default": 100
  },
  ImageWidthTab: {
    type: "number",
    "default": 100
  },
  ImageWidthMobile: {
    type: "number",
    "default": 100
  },
  ImageWidthUnits: {
    type: "string",
    "default": "%"
  },
  ImageHeightDesktop: {
    type: "number",
    "default": 100
  },
  ImageHeightTab: {
    type: "number",
    "default": 100
  },
  ImageHeightMobile: {
    type: "number",
    "default": 100
  },
  ImageHeightUnits: {
    type: "string",
    "default": "%"
  },
  ImageOverlayStyle: {
    type: "string",
    "default": "none"
  },
  ImageOverlayStyleType: {
    type: "string",
    "default": "top"
  },
  ImageOverlayColor: {
    type: "string",
    "default": "rgba(0 0 0 / 0.7)"
  },
  GalleryColumnNumberDesktop: {
    type: "number",
    "default": 3
  },
  GalleryColumnNumberTablet: {
    type: "number",
    "default": 2
  },
  GalleryColumnNumberMobile: {
    type: "number",
    "default": 1
  },
  GalleryImageGapDesktop: {
    type: "number",
    "default": 20
  },
  GalleryImageGapTablet: {
    type: "number",
    "default": 15
  },
  GalleryImageGapMobile: {
    type: "number",
    "default": 10
  },
  GalleryImageGapUnits: {
    type: "string",
    "default": "px"
  },
  ImageAlignment: {
    type: "string",
    "default": "left"
  },
  ImageFitCover: {
    type: "boolan",
    "default": true
  },
  GalleryButtonSwitcher: {
    type: "boolean",
    "default": false
  },
  GalleryButtonText: {
    type: "string",
    "default": 'See More'
  },
  GalleryButtonLink: {
    type: "string",
    "default": '#'
  },
  GalleryButtonAlignment: {
    type: "string",
    "default": "center"
  },
  GalleryButtonFontFamily: {
    type: "string",
    "default": "inherit"
  },
  GalleryButtonFontSizeDesktop: {
    type: "number",
    "default": 18
  },
  GalleryButtonFontSizeTablet: {
    type: "number",
    "default": 18
  },
  GalleryButtonFontSizeMobile: {
    type: "number",
    "default": 18
  },
  GalleryButtonFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  GalleryButtonFontWeight: {
    type: "string",
    "default": "600"
  },
  GalleryButtonFontStyle: {
    type: "string",
    "default": "normal"
  },
  GalleryButtonTextTransform: {
    type: "string",
    "default": "none"
  },
  GalleryButtonTextDecoration: {
    type: "string",
    "default": "none"
  },
  GalleryButtonLetterSpacingDesktop: {
    type: "number",
    "default": 0
  },
  GalleryButtonLetterSpacingTablet: {
    type: "number",
    "default": 0
  },
  GalleryButtonLetterSpacingMobile: {
    type: "number",
    "default": 0
  },
  GalleryButtonLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  GalleryButtonLineHeightDesktop: {
    type: "number",
    "default": "inherit"
  },
  GalleryButtonLineHeightTablet: {
    type: "number",
    "default": "inherit"
  },
  GalleryButtonLineHeightMobile: {
    type: "number",
    "default": "inherit"
  },
  GalleryButtonLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  GalleryButtonColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryButtonColor: {
    type: "string",
    "default": "#000"
  },
  GalleryButtonHoverColor: {
    type: 'string',
    "default": "#000"
  },
  GalleryButtonBGColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryButtonBGColor: {
    type: "string",
    "default": "transparent"
  },
  GalleryButtonBGHoverColor: {
    type: 'string',
    "default": "transparent"
  },
  ButtonBorder: {
    type: 'string',
    "default": "none"
  },
  ButtonBorderColor: {
    type: 'string'
  },
  ButtonBorderHoverColor: {
    type: 'string'
  },
  ButtonBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  ButtonPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  ButtonDesktopPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonTabPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonMobilePadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonPaddingLink: {
    type: "boolean",
    "default": true
  },
  ButtonMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  ButtonDesktopMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonTabMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonMobileMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonMarginLink: {
    type: "boolean",
    "default": true
  },
  ButtonBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  ButtonDesktopBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonTabBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonMobileBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonBorderLink: {
    type: "boolean",
    "default": true
  },
  ButtonBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  ButtonDesktopBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonTabBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonMobileBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  ButtonBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  GalleryIconColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryIconColor: {
    type: "string",
    "default": "#fff"
  },
  GalleryIconHoverColor: {
    type: 'string',
    "default": "#fff"
  },
  GalleryIconBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryIconBgColor: {
    type: "string",
    "default": "#000"
  },
  GalleryIconBgHoverColor: {
    type: 'string',
    "default": "#000"
  },
  GalleryIconSizeDesktop: {
    type: "number",
    "default": 25
  },
  GalleryIconSizeTablet: {
    type: "number",
    "default": 25
  },
  GalleryIconSizeMobile: {
    type: "number",
    "default": 25
  },
  GalleryIconSizeUnits: {
    type: "string",
    "default": "px"
  },
  GalleryIconBgSizeDesktop: {
    type: "number",
    "default": 60
  },
  GalleryIconBgSizeTablet: {
    type: "number",
    "default": 60
  },
  GalleryIconBgSizeMobile: {
    type: "number",
    "default": 60
  },
  GalleryIconBgSizeUnits: {
    type: "string",
    "default": "px"
  },
  GalleryIconSpacingDesktop: {
    type: "number",
    "default": 20
  },
  GalleryIconSpacingTablet: {
    type: "number",
    "default": 20
  },
  GalleryIconSpacingMobile: {
    type: "number",
    "default": 20
  },
  GalleryIconSpacingUnits: {
    type: "string",
    "default": "px"
  },
  GalleryTitleFontFamily: {
    type: "string",
    "default": "inherit"
  },
  GalleryTitleFontSizeDesktop: {
    type: "number",
    "default": 18
  },
  GalleryTitleFontSizeTablet: {
    type: "number",
    "default": 18
  },
  GalleryTitleFontSizeMobile: {
    type: "number",
    "default": 18
  },
  GalleryTitleFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  GalleryTitleFontWeight: {
    type: "string",
    "default": "600"
  },
  GalleryTitleFontStyle: {
    type: "string",
    "default": "normal"
  },
  GalleryTitleTextTransform: {
    type: "string",
    "default": "none"
  },
  GalleryTitleTextDecoration: {
    type: "string",
    "default": "none"
  },
  GalleryTitleLetterSpacingDesktop: {
    type: "number",
    "default": 0
  },
  GalleryTitleLetterSpacingTablet: {
    type: "number",
    "default": 0
  },
  GalleryTitleLetterSpacingMobile: {
    type: "number",
    "default": 0
  },
  GalleryTitleLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  GalleryTitleLineHeightDesktop: {
    type: "number",
    "default": "inherit"
  },
  GalleryTitleLineHeightTablet: {
    type: "number",
    "default": "inherit"
  },
  GalleryTitleLineHeightMobile: {
    type: "number",
    "default": "inherit"
  },
  GalleryTitleLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  GalleryTitleColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryTitleColor: {
    type: "string",
    "default": "#000"
  },
  GalleryTitleHoverColor: {
    type: 'string',
    "default": "#000"
  },
  GalleryDescFontFamily: {
    type: "string",
    "default": "inherit"
  },
  GalleryDescFontSizeDesktop: {
    type: "number",
    "default": 14
  },
  GalleryDescFontSizeTablet: {
    type: "number",
    "default": 14
  },
  GalleryDescFontSizeMobile: {
    type: "number",
    "default": 14
  },
  GalleryDescFontSizeUnits: {
    type: "string",
    "default": "px"
  },
  GalleryDescFontWeight: {
    type: "string",
    "default": "400"
  },
  GalleryDescFontStyle: {
    type: "string",
    "default": "normal"
  },
  GalleryDescTextTransform: {
    type: "string",
    "default": "none"
  },
  GalleryDescTextDecoration: {
    type: "string",
    "default": "none"
  },
  GalleryDescLetterSpacingDesktop: {
    type: "number"
  },
  GalleryDescLetterSpacingTablet: {
    type: "number"
  },
  GalleryDescLetterSpacingMobile: {
    type: "number"
  },
  GalleryDescLetterSpacingUnits: {
    type: "string",
    "default": "px"
  },
  GalleryDescLineHeightDesktop: {
    type: "number",
    "default": "inherit"
  },
  GalleryDescLineHeightTablet: {
    type: "number",
    "default": "inherit"
  },
  GalleryDescLineHeightMobile: {
    type: "number",
    "default": "inherit"
  },
  GalleryDescLineHeightUnits: {
    type: "string",
    "default": "px"
  },
  GalleryDescColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryDescColor: {
    type: "string",
    "default": "#000"
  },
  GalleryDescHoverColor: {
    type: 'string',
    "default": "#000"
  },
  GalleryZIndex: {
    type: "number"
  },
  GalleryPaddingUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  GalleryDesktopPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryTabPadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryMobilePadding: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryPaddingLink: {
    type: "boolean",
    "default": true
  },
  GalleryMarginUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  GalleryDesktopMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryTabMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryMobileMargin: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryMarginLink: {
    type: "boolean",
    "default": true
  },
  GalleryBgColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryBgColor: {
    type: "string"
  },
  GalleryBgHoverColor: {
    type: 'string'
  },
  GalleryBorder: {
    type: 'string',
    "default": "none"
  },
  GalleryBorderColor: {
    type: 'string'
  },
  GalleryBorderHoverColor: {
    type: 'string'
  },
  GalleryBorderColorSwitcher: {
    type: "string",
    "default": "normal"
  },
  GalleryBorderUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  GalleryDesktopBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryTabBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryMobileBorderWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryBorderLink: {
    type: "boolean",
    "default": true
  },
  GalleryBorderRadiusUnits: {
    type: 'object',
    "default": {
      Desktop: 'px',
      Tablet: 'px',
      Mobile: 'px'
    }
  },
  GalleryDesktopBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryTabBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryMobileBorderRadiusWidth: {
    type: "object",
    "default": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  GalleryBorderRadiusLink: {
    type: "boolean",
    "default": true
  },
  GalleryDesktopSwitcher: {
    type: "boolean",
    "default": false
  },
  GalleryTabletSwitcher: {
    type: "boolean",
    "default": false
  },
  GalleryMobileSwitcher: {
    type: "boolean",
    "default": false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/image-gallery/constants/constants.js":
/*!*********************************************************!*\
  !*** ./src/blocks/image-gallery/constants/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_STYLES: () => (/* binding */ BORDER_STYLES),
/* harmony export */   FONT_FAMILYS: () => (/* binding */ FONT_FAMILYS),
/* harmony export */   HEADING: () => (/* binding */ HEADING),
/* harmony export */   ICON_ALIGN: () => (/* binding */ ICON_ALIGN),
/* harmony export */   NORMAL_HOVER: () => (/* binding */ NORMAL_HOVER),
/* harmony export */   SEPERATOR_STYLES: () => (/* binding */ SEPERATOR_STYLES),
/* harmony export */   SUBTITLE_MARGIN: () => (/* binding */ SUBTITLE_MARGIN),
/* harmony export */   TEXT_ALIGN: () => (/* binding */ TEXT_ALIGN),
/* harmony export */   TITLE_MARGIN: () => (/* binding */ TITLE_MARGIN),
/* harmony export */   UNIT_TYPES: () => (/* binding */ UNIT_TYPES),
/* harmony export */   WRAPPER_BG: () => (/* binding */ WRAPPER_BG),
/* harmony export */   WRAPPER_BORDER_SHADOW: () => (/* binding */ WRAPPER_BORDER_SHADOW),
/* harmony export */   WRAPPER_MARGIN: () => (/* binding */ WRAPPER_MARGIN),
/* harmony export */   WRAPPER_PADDING: () => (/* binding */ WRAPPER_PADDING),
/* harmony export */   separator_ICON_SIZE: () => (/* binding */ separator_ICON_SIZE),
/* harmony export */   separator_LINE_SIZE: () => (/* binding */ separator_LINE_SIZE),
/* harmony export */   separator_MARGIN: () => (/* binding */ separator_MARGIN),
/* harmony export */   separator_WIDTH: () => (/* binding */ separator_WIDTH)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



// the consts defined here should be unique from one another
var WRAPPER_BG = "wrprBg";
var WRAPPER_MARGIN = "wrpMargin";
var WRAPPER_PADDING = "wrpPadding";
var WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
var TITLE_MARGIN = "titleMargin";
var SUBTITLE_MARGIN = "subtitleMargin";
var separator_MARGIN = "separatorMargin";
var separator_LINE_SIZE = "separatorLineSize";
var separator_ICON_SIZE = "separatorIconSize";
var separator_WIDTH = "separatorWidth";
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
var HEADING = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H1", "frontis-blocks"),
  value: "h1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H2", "frontis-blocks"),
  value: "h2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H3", "frontis-blocks"),
  value: "h3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H4", "frontis-blocks"),
  value: "h4"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H5", "frontis-blocks"),
  value: "h5"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("H6", "frontis-blocks"),
  value: "h6"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("P", "frontis-blocks"),
  value: "p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Div", "frontis-blocks"),
  value: "span"
}];
var SEPERATOR_STYLES = [{
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
var FONT_FAMILYS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ABeeZee", "frontis-blocks"),
  value: "ABeeZee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abel", "frontis-blocks"),
  value: "Abel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abhaya Libre", "frontis-blocks"),
  value: "Abhaya Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abril Fatface", "frontis-blocks"),
  value: "Abril Fatface"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Abyssinica SIL", "frontis-blocks"),
  value: "Abyssinica SIL"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aclonica", "frontis-blocks"),
  value: "Aclonica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Acme", "frontis-blocks"),
  value: "Acme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Actor", "frontis-blocks"),
  value: "Actor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adamina", "frontis-blocks"),
  value: "Adamina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adobe Blank", "frontis-blocks"),
  value: "Adobe Blank"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Advent Pro", "frontis-blocks"),
  value: "Advent Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aguafina Script", "frontis-blocks"),
  value: "Aguafina Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Akronim", "frontis-blocks"),
  value: "Akronim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("aksarabaligalang", "frontis-blocks"),
  value: "aksarabaligalang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aladin", "frontis-blocks"),
  value: "Aladin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aldrich", "frontis-blocks"),
  value: "Aldrich"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alef", "frontis-blocks"),
  value: "Alef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("alefhebrew", "frontis-blocks"),
  value: "alefhebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya", "frontis-blocks"),
  value: "Alegreya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans", "frontis-blocks"),
  value: "Alegreya Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya Sans SC", "frontis-blocks"),
  value: "Alegreya Sans SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alegreya SC", "frontis-blocks"),
  value: "Alegreya SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aleo", "frontis-blocks"),
  value: "Aleo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alex Brush", "frontis-blocks"),
  value: "Alex Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alfa Slab One", "frontis-blocks"),
  value: "Alfa Slab One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alice", "frontis-blocks"),
  value: "Alice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike", "frontis-blocks"),
  value: "Alike"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alike Angular", "frontis-blocks"),
  value: "Alike Angular"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allan", "frontis-blocks"),
  value: "Allan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta", "frontis-blocks"),
  value: "Allerta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allerta Stencil", "frontis-blocks"),
  value: "Allerta Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allura", "frontis-blocks"),
  value: "Allura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra", "frontis-blocks"),
  value: "Almendra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra Display", "frontis-blocks"),
  value: "Almendra Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Almendra SC", "frontis-blocks"),
  value: "Almendra SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amarante", "frontis-blocks"),
  value: "Amarante"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amaranth", "frontis-blocks"),
  value: "Amaranth"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amatic SC", "frontis-blocks"),
  value: "Amatic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amethysta", "frontis-blocks"),
  value: "Amethysta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiko", "frontis-blocks"),
  value: "Amiko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amiri", "frontis-blocks"),
  value: "Amiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Amita", "frontis-blocks"),
  value: "Amita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("amstelvaralpha", "frontis-blocks"),
  value: "amstelvaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anaheim", "frontis-blocks"),
  value: "Anaheim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada", "frontis-blocks"),
  value: "Andada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andada SC", "frontis-blocks"),
  value: "Andada SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Andika", "frontis-blocks"),
  value: "Andika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Angkor", "frontis-blocks"),
  value: "Angkor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Annie Use Your Telescope", "frontis-blocks"),
  value: "Annie Use Your Telescope"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anonymous Pro", "frontis-blocks"),
  value: "Anonymous Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic", "frontis-blocks"),
  value: "Antic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Didone", "frontis-blocks"),
  value: "Antic Didone"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antic Slab", "frontis-blocks"),
  value: "Antic Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anton", "frontis-blocks"),
  value: "Anton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Antonio", "frontis-blocks"),
  value: "Antonio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arapey", "frontis-blocks"),
  value: "Arapey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus", "frontis-blocks"),
  value: "Arbutus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arbutus Slab", "frontis-blocks"),
  value: "Arbutus Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Architects Daughter", "frontis-blocks"),
  value: "Architects Daughter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo", "frontis-blocks"),
  value: "Archivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Black", "frontis-blocks"),
  value: "Archivo Black"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Archivo Narrow", "frontis-blocks"),
  value: "Archivo Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("archivovfbeta", "frontis-blocks"),
  value: "archivovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aref Ruqaa", "frontis-blocks"),
  value: "Aref Ruqaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arima Madurai", "frontis-blocks"),
  value: "Arima Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arimo", "frontis-blocks"),
  value: "Arimo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arizonia", "frontis-blocks"),
  value: "Arizonia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Armata", "frontis-blocks"),
  value: "Armata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arsenal", "frontis-blocks"),
  value: "Arsenal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Artifika", "frontis-blocks"),
  value: "Artifika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arvo", "frontis-blocks"),
  value: "Arvo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arya", "frontis-blocks"),
  value: "Arya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap", "frontis-blocks"),
  value: "Asap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asap Condensed", "frontis-blocks"),
  value: "Asap Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("asapvfbeta", "frontis-blocks"),
  value: "asapvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asar", "frontis-blocks"),
  value: "Asar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asset", "frontis-blocks"),
  value: "Asset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assistant", "frontis-blocks"),
  value: "Assistant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Astloch", "frontis-blocks"),
  value: "Astloch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Asul", "frontis-blocks"),
  value: "Asul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Athiti", "frontis-blocks"),
  value: "Athiti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Atomic Age", "frontis-blocks"),
  value: "Atomic Age"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aubrey", "frontis-blocks"),
  value: "Aubrey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Audiowide", "frontis-blocks"),
  value: "Audiowide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autour One", "frontis-blocks"),
  value: "Autour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average", "frontis-blocks"),
  value: "Average"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Average Sans", "frontis-blocks"),
  value: "Average Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Gruesa Libre", "frontis-blocks"),
  value: "Averia Gruesa Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Libre", "frontis-blocks"),
  value: "Averia Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Sans Libre", "frontis-blocks"),
  value: "Averia Sans Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Averia Serif Libre", "frontis-blocks"),
  value: "Averia Serif Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612", "frontis-blocks"),
  value: "B612"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("B612 Mono", "frontis-blocks"),
  value: "B612 Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bad Script", "frontis-blocks"),
  value: "Bad Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahiana", "frontis-blocks"),
  value: "Bahiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bahianita", "frontis-blocks"),
  value: "Bahianita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bai Jamjuree", "frontis-blocks"),
  value: "Bai Jamjuree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo", "frontis-blocks"),
  value: "Baloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhai", "frontis-blocks"),
  value: "Baloo Bhai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaijaan", "frontis-blocks"),
  value: "Baloo Bhaijaan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Bhaina", "frontis-blocks"),
  value: "Baloo Bhaina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Chettan", "frontis-blocks"),
  value: "Baloo Chettan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Da", "frontis-blocks"),
  value: "Baloo Da"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Paaji", "frontis-blocks"),
  value: "Baloo Paaji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tamma", "frontis-blocks"),
  value: "Baloo Tamma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Tammudu", "frontis-blocks"),
  value: "Baloo Tammudu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baloo Thambi", "frontis-blocks"),
  value: "Baloo Thambi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Balthazar", "frontis-blocks"),
  value: "Balthazar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bangers", "frontis-blocks"),
  value: "Bangers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow", "frontis-blocks"),
  value: "Barlow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Condensed", "frontis-blocks"),
  value: "Barlow Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barlow Semi Condensed", "frontis-blocks"),
  value: "Barlow Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barriecito", "frontis-blocks"),
  value: "Barriecito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Barrio", "frontis-blocks"),
  value: "Barrio"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Basic", "frontis-blocks"),
  value: "Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Battambang", "frontis-blocks"),
  value: "Battambang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Baumans", "frontis-blocks"),
  value: "Baumans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bayon", "frontis-blocks"),
  value: "Bayon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belgrano", "frontis-blocks"),
  value: "Belgrano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bellefair", "frontis-blocks"),
  value: "Bellefair"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Belleza", "frontis-blocks"),
  value: "Belleza"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("BenchNine", "frontis-blocks"),
  value: "BenchNine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bentham", "frontis-blocks"),
  value: "Bentham"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Berkshire Swash", "frontis-blocks"),
  value: "Berkshire Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Beth Ellen", "frontis-blocks"),
  value: "Beth Ellen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bevan", "frontis-blocks"),
  value: "Bevan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bhavuka", "frontis-blocks"),
  value: "Bhavuka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigelow Rules", "frontis-blocks"),
  value: "Bigelow Rules"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bigshot One", "frontis-blocks"),
  value: "Bigshot One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo", "frontis-blocks"),
  value: "Bilbo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilbo Swash Caps", "frontis-blocks"),
  value: "Bilbo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme", "frontis-blocks"),
  value: "Bio Rhyme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bio Rhyme Expanded", "frontis-blocks"),
  value: "Bio Rhyme Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Biryani", "frontis-blocks"),
  value: "Biryani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bitter", "frontis-blocks"),
  value: "Bitter"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black And White Picture", "frontis-blocks"),
  value: "Black And White Picture"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Han Sans", "frontis-blocks"),
  value: "Black Han Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black Ops One", "frontis-blocks"),
  value: "Black Ops One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bokor", "frontis-blocks"),
  value: "Bokor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bonbon", "frontis-blocks"),
  value: "Bonbon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Boogaloo", "frontis-blocks"),
  value: "Boogaloo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One", "frontis-blocks"),
  value: "Bowlby One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bowlby One SC", "frontis-blocks"),
  value: "Bowlby One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Brawler", "frontis-blocks"),
  value: "Brawler"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bree Serif", "frontis-blocks"),
  value: "Bree Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace", "frontis-blocks"),
  value: "Bruno Ace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bruno Ace SC", "frontis-blocks"),
  value: "Bruno Ace SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubblegum Sans", "frontis-blocks"),
  value: "Bubblegum Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bubbler One", "frontis-blocks"),
  value: "Bubbler One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buda", "frontis-blocks"),
  value: "Buda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buenard", "frontis-blocks"),
  value: "Buenard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee", "frontis-blocks"),
  value: "Bungee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Hairline", "frontis-blocks"),
  value: "Bungee Hairline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Inline", "frontis-blocks"),
  value: "Bungee Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Outline", "frontis-blocks"),
  value: "Bungee Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bungee Shade", "frontis-blocks"),
  value: "Bungee Shade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman", "frontis-blocks"),
  value: "Butcherman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butcherman Caps", "frontis-blocks"),
  value: "Butcherman Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Butterfly Kids", "frontis-blocks"),
  value: "Butterfly Kids"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin", "frontis-blocks"),
  value: "Cabin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Condensed", "frontis-blocks"),
  value: "Cabin Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cabin Sketch", "frontis-blocks"),
  value: "Cabin Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("cabinvfbeta", "frontis-blocks"),
  value: "cabinvfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caesar Dressing", "frontis-blocks"),
  value: "Caesar Dressing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cagliostro", "frontis-blocks"),
  value: "Cagliostro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cairo", "frontis-blocks"),
  value: "Cairo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Calligraffitti", "frontis-blocks"),
  value: "Calligraffitti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambay", "frontis-blocks"),
  value: "Cambay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cambo", "frontis-blocks"),
  value: "Cambo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Candal", "frontis-blocks"),
  value: "Candal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantarell", "frontis-blocks"),
  value: "Cantarell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantata One", "frontis-blocks"),
  value: "Cantata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cantora One", "frontis-blocks"),
  value: "Cantora One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capriola", "frontis-blocks"),
  value: "Capriola"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cardo", "frontis-blocks"),
  value: "Cardo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carme", "frontis-blocks"),
  value: "Carme"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic", "frontis-blocks"),
  value: "Carrois Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carrois Gothic SC", "frontis-blocks"),
  value: "Carrois Gothic SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carter One", "frontis-blocks"),
  value: "Carter One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Catamaran", "frontis-blocks"),
  value: "Catamaran"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caudex", "frontis-blocks"),
  value: "Caudex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat", "frontis-blocks"),
  value: "Caveat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Caveat Brush", "frontis-blocks"),
  value: "Caveat Brush"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cedarville Cursive", "frontis-blocks"),
  value: "Cedarville Cursive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ceviche One", "frontis-blocks"),
  value: "Ceviche One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chakra Petch", "frontis-blocks"),
  value: "Chakra Petch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa", "frontis-blocks"),
  value: "Changa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Changa One", "frontis-blocks"),
  value: "Changa One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chango", "frontis-blocks"),
  value: "Chango"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charm", "frontis-blocks"),
  value: "Charm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Charmonman", "frontis-blocks"),
  value: "Charmonman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chau Philomene One", "frontis-blocks"),
  value: "Chau Philomene One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chela One", "frontis-blocks"),
  value: "Chela One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chelsea Market", "frontis-blocks"),
  value: "Chelsea Market"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chenla", "frontis-blocks"),
  value: "Chenla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Cream Soda", "frontis-blocks"),
  value: "Cherry Cream Soda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cherry Swash", "frontis-blocks"),
  value: "Cherry Swash"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chewy", "frontis-blocks"),
  value: "Chewy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chicle", "frontis-blocks"),
  value: "Chicle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chilanka", "frontis-blocks"),
  value: "Chilanka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chivo", "frontis-blocks"),
  value: "Chivo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Chonburi", "frontis-blocks"),
  value: "Chonburi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel", "frontis-blocks"),
  value: "Cinzel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cinzel Decorative", "frontis-blocks"),
  value: "Cinzel Decorative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clicker Script", "frontis-blocks"),
  value: "Clicker Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda", "frontis-blocks"),
  value: "Coda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coda Caption", "frontis-blocks"),
  value: "Coda Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Codystar", "frontis-blocks"),
  value: "Codystar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coiny", "frontis-blocks"),
  value: "Coiny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Combo", "frontis-blocks"),
  value: "Combo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comfortaa", "frontis-blocks"),
  value: "Comfortaa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coming Soon", "frontis-blocks"),
  value: "Coming Soon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Concert One", "frontis-blocks"),
  value: "Concert One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Condiment", "frontis-blocks"),
  value: "Condiment"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content", "frontis-blocks"),
  value: "Content"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contrail One", "frontis-blocks"),
  value: "Contrail One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Convergence", "frontis-blocks"),
  value: "Convergence"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cookie", "frontis-blocks"),
  value: "Cookie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Copse", "frontis-blocks"),
  value: "Copse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corben", "frontis-blocks"),
  value: "Corben"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant", "frontis-blocks"),
  value: "Cormorant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Garamond", "frontis-blocks"),
  value: "Cormorant Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Infant", "frontis-blocks"),
  value: "Cormorant Infant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant SC", "frontis-blocks"),
  value: "Cormorant SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Unicase", "frontis-blocks"),
  value: "Cormorant Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cormorant Upright", "frontis-blocks"),
  value: "Cormorant Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Courgette", "frontis-blocks"),
  value: "Courgette"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cousine", "frontis-blocks"),
  value: "Cousine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Coustard", "frontis-blocks"),
  value: "Coustard"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Covered By Your Grace", "frontis-blocks"),
  value: "Covered By Your Grace"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crafty Girls", "frontis-blocks"),
  value: "Crafty Girls"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster", "frontis-blocks"),
  value: "Creepster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Creepster Caps", "frontis-blocks"),
  value: "Creepster Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crete Round", "frontis-blocks"),
  value: "Crete Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Pro", "frontis-blocks"),
  value: "Crimson Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crimson Text", "frontis-blocks"),
  value: "Crimson Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Croissant One", "frontis-blocks"),
  value: "Croissant One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crushed", "frontis-blocks"),
  value: "Crushed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cuprum", "frontis-blocks"),
  value: "Cuprum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cute Font", "frontis-blocks"),
  value: "Cute Font"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive", "frontis-blocks"),
  value: "Cutive"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cutive Mono", "frontis-blocks"),
  value: "Cutive Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Damion", "frontis-blocks"),
  value: "Damion"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dancing Script", "frontis-blocks"),
  value: "Dancing Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dangrek", "frontis-blocks"),
  value: "Dangrek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Darker Grotesque", "frontis-blocks"),
  value: "Darker Grotesque"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dawning of a New Day", "frontis-blocks"),
  value: "Dawning of a New Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Days One", "frontis-blocks"),
  value: "Days One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("decovaralpha", "frontis-blocks"),
  value: "decovaralpha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dekko", "frontis-blocks"),
  value: "Dekko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius", "frontis-blocks"),
  value: "Delius"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Swash Caps", "frontis-blocks"),
  value: "Delius Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delius Unicase", "frontis-blocks"),
  value: "Delius Unicase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Della Respira", "frontis-blocks"),
  value: "Della Respira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Denk One", "frontis-blocks"),
  value: "Denk One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Devonshire", "frontis-blocks"),
  value: "Devonshire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhurjati", "frontis-blocks"),
  value: "Dhurjati"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dhyana", "frontis-blocks"),
  value: "Dhyana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Didact Gothic", "frontis-blocks"),
  value: "Didact Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digital Numbers", "frontis-blocks"),
  value: "Digital Numbers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata", "frontis-blocks"),
  value: "Diplomata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diplomata SC", "frontis-blocks"),
  value: "Diplomata SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Sans", "frontis-blocks"),
  value: "DM Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Display", "frontis-blocks"),
  value: "DM Serif Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DM Serif Text", "frontis-blocks"),
  value: "DM Serif Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do Hyeon", "frontis-blocks"),
  value: "Do Hyeon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dokdo", "frontis-blocks"),
  value: "Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Domine", "frontis-blocks"),
  value: "Domine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Donegal One", "frontis-blocks"),
  value: "Donegal One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Doppio One", "frontis-blocks"),
  value: "Doppio One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dorsa", "frontis-blocks"),
  value: "Dorsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dosis", "frontis-blocks"),
  value: "Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dr Sugiyama", "frontis-blocks"),
  value: "Dr Sugiyama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duru Sans", "frontis-blocks"),
  value: "Duru Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynalight", "frontis-blocks"),
  value: "Dynalight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eagle Lake", "frontis-blocks"),
  value: "Eagle Lake"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("East Sea Dokdo", "frontis-blocks"),
  value: "East Sea Dokdo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater", "frontis-blocks"),
  value: "Eater"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eater Caps", "frontis-blocks"),
  value: "Eater Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB Garamond", "frontis-blocks"),
  value: "EB Garamond"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Economica", "frontis-blocks"),
  value: "Economica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Eczar", "frontis-blocks"),
  value: "Eczar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ek Mukta", "frontis-blocks"),
  value: "Ek Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("El Messiri", "frontis-blocks"),
  value: "El Messiri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Electrolize", "frontis-blocks"),
  value: "Electrolize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie", "frontis-blocks"),
  value: "Elsie"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Elsie Swash Caps", "frontis-blocks"),
  value: "Elsie Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emblema One", "frontis-blocks"),
  value: "Emblema One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Emilys Candy", "frontis-blocks"),
  value: "Emilys Candy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans", "frontis-blocks"),
  value: "Encode Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Condensed", "frontis-blocks"),
  value: "Encode Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Expanded", "frontis-blocks"),
  value: "Encode Sans Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Condensed", "frontis-blocks"),
  value: "Encode Sans Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Encode Sans Semi Expanded", "frontis-blocks"),
  value: "Encode Sans Semi Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Engagement", "frontis-blocks"),
  value: "Engagement"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Englebert", "frontis-blocks"),
  value: "Englebert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enriqueta", "frontis-blocks"),
  value: "Enriqueta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Erica One", "frontis-blocks"),
  value: "Erica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Esteban", "frontis-blocks"),
  value: "Esteban"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Euphoria Script", "frontis-blocks"),
  value: "Euphoria Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ewert", "frontis-blocks"),
  value: "Ewert"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo", "frontis-blocks"),
  value: "Exo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Exo 2", "frontis-blocks"),
  value: "Exo 2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expletus Sans", "frontis-blocks"),
  value: "Expletus Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fahkwang", "frontis-blocks"),
  value: "Fahkwang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fanwood Text", "frontis-blocks"),
  value: "Fanwood Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farro", "frontis-blocks"),
  value: "Farro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Farsan", "frontis-blocks"),
  value: "Farsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate", "frontis-blocks"),
  value: "Fascinate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fascinate Inline", "frontis-blocks"),
  value: "Fascinate Inline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faster One", "frontis-blocks"),
  value: "Faster One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fasthand", "frontis-blocks"),
  value: "Fasthand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fauna One", "frontis-blocks"),
  value: "Fauna One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Faustina", "frontis-blocks"),
  value: "Faustina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("faustinavfbeta", "frontis-blocks"),
  value: "faustinavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federant", "frontis-blocks"),
  value: "Federant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Federo", "frontis-blocks"),
  value: "Federo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Felipa", "frontis-blocks"),
  value: "Felipa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fenix", "frontis-blocks"),
  value: "Fenix"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Finger Paint", "frontis-blocks"),
  value: "Finger Paint"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Code", "frontis-blocks"),
  value: "Fira Code"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Mono", "frontis-blocks"),
  value: "Fira Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans", "frontis-blocks"),
  value: "Fira Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Condensed", "frontis-blocks"),
  value: "Fira Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fira Sans Extra Condensed", "frontis-blocks"),
  value: "Fira Sans Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjalla One", "frontis-blocks"),
  value: "Fjalla One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fjord One", "frontis-blocks"),
  value: "Fjord One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flamenco", "frontis-blocks"),
  value: "Flamenco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flavors", "frontis-blocks"),
  value: "Flavors"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fondamento", "frontis-blocks"),
  value: "Fondamento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fontdiner Swanky", "frontis-blocks"),
  value: "Fontdiner Swanky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forum", "frontis-blocks"),
  value: "Forum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Francois One", "frontis-blocks"),
  value: "Francois One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frank Ruhl Libre", "frontis-blocks"),
  value: "Frank Ruhl Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freckle Face", "frontis-blocks"),
  value: "Freckle Face"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredericka the Great", "frontis-blocks"),
  value: "Fredericka the Great"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fredoka One", "frontis-blocks"),
  value: "Fredoka One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Freehand", "frontis-blocks"),
  value: "Freehand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fresca", "frontis-blocks"),
  value: "Fresca"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Frijole", "frontis-blocks"),
  value: "Frijole"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fruktur", "frontis-blocks"),
  value: "Fruktur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fugaz One", "frontis-blocks"),
  value: "Fugaz One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gabriela", "frontis-blocks"),
  value: "Gabriela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gaegu", "frontis-blocks"),
  value: "Gaegu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gafata", "frontis-blocks"),
  value: "Gafata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galada", "frontis-blocks"),
  value: "Galada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galdeano", "frontis-blocks"),
  value: "Galdeano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Galindo", "frontis-blocks"),
  value: "Galindo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gamja Flower", "frontis-blocks"),
  value: "Gamja Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gayathri", "frontis-blocks"),
  value: "Gayathri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gemunu Libre", "frontis-blocks"),
  value: "Gemunu Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Basic", "frontis-blocks"),
  value: "Gentium Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gentium Book Basic", "frontis-blocks"),
  value: "Gentium Book Basic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geo", "frontis-blocks"),
  value: "Geo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar", "frontis-blocks"),
  value: "Geostar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Geostar Fill", "frontis-blocks"),
  value: "Geostar Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Germania One", "frontis-blocks"),
  value: "Germania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Didot", "frontis-blocks"),
  value: "GFS Didot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GFS Neohellenic", "frontis-blocks"),
  value: "GFS Neohellenic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gidugu", "frontis-blocks"),
  value: "Gidugu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gilda Display", "frontis-blocks"),
  value: "Gilda Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Give You Glory", "frontis-blocks"),
  value: "Give You Glory"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glass Antiqua", "frontis-blocks"),
  value: "Glass Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Glegoo", "frontis-blocks"),
  value: "Glegoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gloria Hallelujah", "frontis-blocks"),
  value: "Gloria Hallelujah"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goblin One", "frontis-blocks"),
  value: "Goblin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gochi Hand", "frontis-blocks"),
  value: "Gochi Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gorditas", "frontis-blocks"),
  value: "Gorditas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gothic A1", "frontis-blocks"),
  value: "Gothic A1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Goudy Bookletter 1911", "frontis-blocks"),
  value: "Goudy Bookletter 1911"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Graduate", "frontis-blocks"),
  value: "Graduate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grand Hotel", "frontis-blocks"),
  value: "Grand Hotel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gravitas One", "frontis-blocks"),
  value: "Gravitas One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Great Vibes", "frontis-blocks"),
  value: "Great Vibes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grenze", "frontis-blocks"),
  value: "Grenze"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Griffy", "frontis-blocks"),
  value: "Griffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gruppo", "frontis-blocks"),
  value: "Gruppo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gudea", "frontis-blocks"),
  value: "Gudea"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gugi", "frontis-blocks"),
  value: "Gugi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gurajada", "frontis-blocks"),
  value: "Gurajada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Habibi", "frontis-blocks"),
  value: "Habibi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Halant", "frontis-blocks"),
  value: "Halant"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hammersmith One", "frontis-blocks"),
  value: "Hammersmith One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei", "frontis-blocks"),
  value: "Hanalei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanalei Fill", "frontis-blocks"),
  value: "Hanalei Fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Handlee", "frontis-blocks"),
  value: "Handlee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hanna", "frontis-blocks"),
  value: "hanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("hannari", "frontis-blocks"),
  value: "hannari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hanuman", "frontis-blocks"),
  value: "Hanuman"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Happy Monkey", "frontis-blocks"),
  value: "Happy Monkey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Harmattan", "frontis-blocks"),
  value: "Harmattan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Headland One", "frontis-blocks"),
  value: "Headland One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heebo", "frontis-blocks"),
  value: "Heebo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Henny Penny", "frontis-blocks"),
  value: "Henny Penny"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hermeneus One", "frontis-blocks"),
  value: "Hermeneus One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Herr Von Muellerhoff", "frontis-blocks"),
  value: "Herr Von Muellerhoff"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hi Melody", "frontis-blocks"),
  value: "Hi Melody"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind", "frontis-blocks"),
  value: "Hind"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Colombo", "frontis-blocks"),
  value: "Hind Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Guntur", "frontis-blocks"),
  value: "Hind Guntur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Jalandhar", "frontis-blocks"),
  value: "Hind Jalandhar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Kochi", "frontis-blocks"),
  value: "Hind Kochi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Madurai", "frontis-blocks"),
  value: "Hind Madurai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Mysuru", "frontis-blocks"),
  value: "Hind Mysuru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Siliguri", "frontis-blocks"),
  value: "Hind Siliguri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hind Vadodara", "frontis-blocks"),
  value: "Hind Vadodara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Holtwood One SC", "frontis-blocks"),
  value: "Holtwood One SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homemade Apple", "frontis-blocks"),
  value: "Homemade Apple"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Homenaje", "frontis-blocks"),
  value: "Homenaje"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Mono", "frontis-blocks"),
  value: "IBM Plex Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans", "frontis-blocks"),
  value: "IBM Plex Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Sans Condensed", "frontis-blocks"),
  value: "IBM Plex Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IBM Plex Serif", "frontis-blocks"),
  value: "IBM Plex Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceberg", "frontis-blocks"),
  value: "Iceberg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Iceland", "frontis-blocks"),
  value: "Iceland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica", "frontis-blocks"),
  value: "IM Fell Double Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Double Pica SC", "frontis-blocks"),
  value: "IM Fell Double Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica", "frontis-blocks"),
  value: "IM Fell DW Pica"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell DW Pica SC", "frontis-blocks"),
  value: "IM Fell DW Pica SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English", "frontis-blocks"),
  value: "IM Fell English"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell English SC", "frontis-blocks"),
  value: "IM Fell English SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon", "frontis-blocks"),
  value: "IM Fell French Canon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell French Canon SC", "frontis-blocks"),
  value: "IM Fell French Canon SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer", "frontis-blocks"),
  value: "IM Fell Great Primer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("IM Fell Great Primer SC", "frontis-blocks"),
  value: "IM Fell Great Primer SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Imprima", "frontis-blocks"),
  value: "Imprima"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inconsolata", "frontis-blocks"),
  value: "Inconsolata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inder", "frontis-blocks"),
  value: "Inder"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Indie Flower", "frontis-blocks"),
  value: "Indie Flower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inika", "frontis-blocks"),
  value: "Inika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inknut Antiqua", "frontis-blocks"),
  value: "Inknut Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Irish Grover", "frontis-blocks"),
  value: "Irish Grover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Istok Web", "frontis-blocks"),
  value: "Istok Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italiana", "frontis-blocks"),
  value: "Italiana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italianno", "frontis-blocks"),
  value: "Italianno"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Itim", "frontis-blocks"),
  value: "Itim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois", "frontis-blocks"),
  value: "Jacques Francois"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jacques Francois Shadow", "frontis-blocks"),
  value: "Jacques Francois Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jaldi", "frontis-blocks"),
  value: "Jaldi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejugothic", "frontis-blocks"),
  value: "jejugothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejuhallasan", "frontis-blocks"),
  value: "jejuhallasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jejumyeongjo", "frontis-blocks"),
  value: "jejumyeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jim Nightshade", "frontis-blocks"),
  value: "Jim Nightshade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jockey One", "frontis-blocks"),
  value: "Jockey One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jolly Lodger", "frontis-blocks"),
  value: "Jolly Lodger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jomhuria", "frontis-blocks"),
  value: "Jomhuria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("jomolhari", "frontis-blocks"),
  value: "jomolhari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans", "frontis-blocks"),
  value: "Josefin Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Sans Std Light", "frontis-blocks"),
  value: "Josefin Sans Std Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Josefin Slab", "frontis-blocks"),
  value: "Josefin Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Joti One", "frontis-blocks"),
  value: "Joti One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jua", "frontis-blocks"),
  value: "Jua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Judson", "frontis-blocks"),
  value: "Judson"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julee", "frontis-blocks"),
  value: "Julee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Julius Sans One", "frontis-blocks"),
  value: "Julius Sans One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Junge", "frontis-blocks"),
  value: "Junge"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Jura", "frontis-blocks"),
  value: "Jura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Another Hand", "frontis-blocks"),
  value: "Just Another Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Just Me Again Down Here", "frontis-blocks"),
  value: "Just Me Again Down Here"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("K2D", "frontis-blocks"),
  value: "K2D"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kadwa", "frontis-blocks"),
  value: "Kadwa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kalam", "frontis-blocks"),
  value: "Kalam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kameron", "frontis-blocks"),
  value: "Kameron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kanit", "frontis-blocks"),
  value: "Kanit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kantumruy", "frontis-blocks"),
  value: "Kantumruy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla", "frontis-blocks"),
  value: "Karla"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Inclined", "frontis-blocks"),
  value: "Karla Tamil Inclined"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karla Tamil Upright", "frontis-blocks"),
  value: "Karla Tamil Upright"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Karma", "frontis-blocks"),
  value: "Karma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Katibeh", "frontis-blocks"),
  value: "Katibeh"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kaushan Script", "frontis-blocks"),
  value: "Kaushan Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavivanar", "frontis-blocks"),
  value: "Kavivanar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kavoon", "frontis-blocks"),
  value: "Kavoon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kdam Thmor", "frontis-blocks"),
  value: "Kdam Thmor"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keania One", "frontis-blocks"),
  value: "Keania One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kelly Slab", "frontis-blocks"),
  value: "Kelly Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kenia", "frontis-blocks"),
  value: "Kenia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khand", "frontis-blocks"),
  value: "Khand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khmer", "frontis-blocks"),
  value: "Khmer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Khula", "frontis-blocks"),
  value: "Khula"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("khyay", "frontis-blocks"),
  value: "khyay"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kirang Haerang", "frontis-blocks"),
  value: "Kirang Haerang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kite One", "frontis-blocks"),
  value: "Kite One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Knewave", "frontis-blocks"),
  value: "Knewave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kodchasan", "frontis-blocks"),
  value: "Kodchasan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("KoHo", "frontis-blocks"),
  value: "KoHo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kokoro", "frontis-blocks"),
  value: "kokoro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("kopubbatang", "frontis-blocks"),
  value: "kopubbatang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kotta One", "frontis-blocks"),
  value: "Kotta One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Koulen", "frontis-blocks"),
  value: "Koulen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kranky", "frontis-blocks"),
  value: "Kranky"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kreon", "frontis-blocks"),
  value: "Kreon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kristi", "frontis-blocks"),
  value: "Kristi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krona One", "frontis-blocks"),
  value: "Krona One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Krub", "frontis-blocks"),
  value: "Krub"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kumar One", "frontis-blocks"),
  value: "Kumar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Kurale", "frontis-blocks"),
  value: "Kurale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("La Belle Aurore", "frontis-blocks"),
  value: "La Belle Aurore"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lacquer", "frontis-blocks"),
  value: "Lacquer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Laila", "frontis-blocks"),
  value: "Laila"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lakki Reddy", "frontis-blocks"),
  value: "Lakki Reddy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lalezar", "frontis-blocks"),
  value: "Lalezar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lancelot", "frontis-blocks"),
  value: "Lancelot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangdon", "frontis-blocks"),
  value: "laomuangdon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laomuangkhong", "frontis-blocks"),
  value: "laomuangkhong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("laosanspro", "frontis-blocks"),
  value: "laosanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lateef", "frontis-blocks"),
  value: "Lateef"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lato", "frontis-blocks"),
  value: "Lato"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("League Script", "frontis-blocks"),
  value: "League Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Leckerli One", "frontis-blocks"),
  value: "Leckerli One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ledger", "frontis-blocks"),
  value: "Ledger"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lekton", "frontis-blocks"),
  value: "Lekton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemon", "frontis-blocks"),
  value: "Lemon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lemonada", "frontis-blocks"),
  value: "Lemonada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128", "frontis-blocks"),
  value: "Libre Barcode 128"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 128 Text", "frontis-blocks"),
  value: "Libre Barcode 128 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39", "frontis-blocks"),
  value: "Libre Barcode 39"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended", "frontis-blocks"),
  value: "Libre Barcode 39 Extended"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Extended Text", "frontis-blocks"),
  value: "Libre Barcode 39 Extended Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Barcode 39 Text", "frontis-blocks"),
  value: "Libre Barcode 39 Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Baskerville", "frontis-blocks"),
  value: "Libre Baskerville"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Display", "frontis-blocks"),
  value: "Libre Caslon Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Caslon Text", "frontis-blocks"),
  value: "Libre Caslon Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Libre Franklin", "frontis-blocks"),
  value: "Libre Franklin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Life Savers", "frontis-blocks"),
  value: "Life Savers"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lilita One", "frontis-blocks"),
  value: "Lilita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lily Script One", "frontis-blocks"),
  value: "Lily Script One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Limelight", "frontis-blocks"),
  value: "Limelight"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Linden Hill", "frontis-blocks"),
  value: "Linden Hill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Literata", "frontis-blocks"),
  value: "Literata"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Liu Jian Mao Cao", "frontis-blocks"),
  value: "Liu Jian Mao Cao"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Livvic", "frontis-blocks"),
  value: "Livvic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster", "frontis-blocks"),
  value: "Lobster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lobster Two", "frontis-blocks"),
  value: "Lobster Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Bengali", "frontis-blocks"),
  value: "Lohit Bengali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lohit Tamil", "frontis-blocks"),
  value: "Lohit Tamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("lohitdevanagari", "frontis-blocks"),
  value: "lohitdevanagari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Outline", "frontis-blocks"),
  value: "Londrina Outline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Shadow", "frontis-blocks"),
  value: "Londrina Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Sketch", "frontis-blocks"),
  value: "Londrina Sketch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Londrina Solid", "frontis-blocks"),
  value: "Londrina Solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Long Cang", "frontis-blocks"),
  value: "Long Cang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lora", "frontis-blocks"),
  value: "Lora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Love Ya Like A Sister", "frontis-blocks"),
  value: "Love Ya Like A Sister"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loved by the King", "frontis-blocks"),
  value: "Loved by the King"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lovers Quarrel", "frontis-blocks"),
  value: "Lovers Quarrel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Luckiest Guy", "frontis-blocks"),
  value: "Luckiest Guy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lusitana", "frontis-blocks"),
  value: "Lusitana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lustria", "frontis-blocks"),
  value: "Lustria"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ma Shan Zheng", "frontis-blocks"),
  value: "Ma Shan Zheng"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo", "frontis-blocks"),
  value: "Macondo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Macondo Swash Caps", "frontis-blocks"),
  value: "Macondo Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mada", "frontis-blocks"),
  value: "Mada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Magra", "frontis-blocks"),
  value: "Magra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maiden Orange", "frontis-blocks"),
  value: "Maiden Orange"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maitree", "frontis-blocks"),
  value: "Maitree"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Major Mono Display", "frontis-blocks"),
  value: "Major Mono Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mako", "frontis-blocks"),
  value: "Mako"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mali", "frontis-blocks"),
  value: "Mali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mallanna", "frontis-blocks"),
  value: "Mallanna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mandali", "frontis-blocks"),
  value: "Mandali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manjari", "frontis-blocks"),
  value: "Manjari"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manuale", "frontis-blocks"),
  value: "Manuale"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus", "frontis-blocks"),
  value: "Marcellus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marcellus SC", "frontis-blocks"),
  value: "Marcellus SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marck Script", "frontis-blocks"),
  value: "Marck Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margarine", "frontis-blocks"),
  value: "Margarine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marko One", "frontis-blocks"),
  value: "Marko One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marmelad", "frontis-blocks"),
  value: "Marmelad"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel", "frontis-blocks"),
  value: "Martel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Martel Sans", "frontis-blocks"),
  value: "Martel Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Marvel", "frontis-blocks"),
  value: "Marvel"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate", "frontis-blocks"),
  value: "Mate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mate SC", "frontis-blocks"),
  value: "Mate SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maven Pro", "frontis-blocks"),
  value: "Maven Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mavenprovfbeta", "frontis-blocks"),
  value: "mavenprovfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("McLaren", "frontis-blocks"),
  value: "McLaren"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meddon", "frontis-blocks"),
  value: "Meddon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("MedievalSharp", "frontis-blocks"),
  value: "MedievalSharp"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medula One", "frontis-blocks"),
  value: "Medula One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meera Inimai", "frontis-blocks"),
  value: "Meera Inimai"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Megrim", "frontis-blocks"),
  value: "Megrim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Meie Script", "frontis-blocks"),
  value: "Meie Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merge One", "frontis-blocks"),
  value: "Merge One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda", "frontis-blocks"),
  value: "Merienda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merienda One", "frontis-blocks"),
  value: "Merienda One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather", "frontis-blocks"),
  value: "Merriweather"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Merriweather Sans", "frontis-blocks"),
  value: "Merriweather Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mervale Script", "frontis-blocks"),
  value: "Mervale Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal", "frontis-blocks"),
  value: "Metal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metal Mania", "frontis-blocks"),
  value: "Metal Mania"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metamorphous", "frontis-blocks"),
  value: "Metamorphous"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Metrophobic", "frontis-blocks"),
  value: "Metrophobic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miama", "frontis-blocks"),
  value: "Miama"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Michroma", "frontis-blocks"),
  value: "Michroma"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Milonga", "frontis-blocks"),
  value: "Milonga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian", "frontis-blocks"),
  value: "Miltonian"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miltonian Tattoo", "frontis-blocks"),
  value: "Miltonian Tattoo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mina", "frontis-blocks"),
  value: "Mina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miniver", "frontis-blocks"),
  value: "Miniver"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miriam Libre", "frontis-blocks"),
  value: "Miriam Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Fajardose", "frontis-blocks"),
  value: "Miss Fajardose"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Miss Saint Delafield", "frontis-blocks"),
  value: "Miss Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modak", "frontis-blocks"),
  value: "Modak"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modern Antiqua", "frontis-blocks"),
  value: "Modern Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molengo", "frontis-blocks"),
  value: "Molengo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Molle", "frontis-blocks"),
  value: "Molle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monda", "frontis-blocks"),
  value: "Monda"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monofett", "frontis-blocks"),
  value: "Monofett"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monoton", "frontis-blocks"),
  value: "Monoton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Monsieur La Doulaise", "frontis-blocks"),
  value: "Monsieur La Doulaise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montaga", "frontis-blocks"),
  value: "Montaga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montez", "frontis-blocks"),
  value: "Montez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat", "frontis-blocks"),
  value: "Montserrat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Alternates", "frontis-blocks"),
  value: "Montserrat Alternates"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Montserrat Subrayada", "frontis-blocks"),
  value: "Montserrat Subrayada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moul", "frontis-blocks"),
  value: "Moul"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Moulpali", "frontis-blocks"),
  value: "Moulpali"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mountains of Christmas", "frontis-blocks"),
  value: "Mountains of Christmas"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse Memoirs", "frontis-blocks"),
  value: "Mouse Memoirs"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("mplus1p", "frontis-blocks"),
  value: "mplus1p"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedford", "frontis-blocks"),
  value: "Mr Bedford"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Bedfort", "frontis-blocks"),
  value: "Mr Bedfort"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr Dafoe", "frontis-blocks"),
  value: "Mr Dafoe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mr De Haviland", "frontis-blocks"),
  value: "Mr De Haviland"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Saint Delafield", "frontis-blocks"),
  value: "Mrs Saint Delafield"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mrs Sheppards", "frontis-blocks"),
  value: "Mrs Sheppards"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta", "frontis-blocks"),
  value: "Mukta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Mahee", "frontis-blocks"),
  value: "Mukta Mahee"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Malar", "frontis-blocks"),
  value: "Mukta Malar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mukta Vaani", "frontis-blocks"),
  value: "Mukta Vaani"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muli", "frontis-blocks"),
  value: "Muli"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("myanmarsanspro", "frontis-blocks"),
  value: "myanmarsanspro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mystery Quest", "frontis-blocks"),
  value: "Mystery Quest"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Brush Script", "frontis-blocks"),
  value: "Nanum Brush Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic", "frontis-blocks"),
  value: "Nanum Gothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Gothic Coding", "frontis-blocks"),
  value: "Nanum Gothic Coding"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Myeongjo", "frontis-blocks"),
  value: "Nanum Myeongjo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nanum Pen Script", "frontis-blocks"),
  value: "Nanum Pen Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NATS", "frontis-blocks"),
  value: "NATS"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neucha", "frontis-blocks"),
  value: "Neucha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Neuton", "frontis-blocks"),
  value: "Neuton"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("New Rocker", "frontis-blocks"),
  value: "New Rocker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("News Cycle", "frontis-blocks"),
  value: "News Cycle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nicomoji", "frontis-blocks"),
  value: "nicomoji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niconne", "frontis-blocks"),
  value: "Niconne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("nikukyu", "frontis-blocks"),
  value: "nikukyu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Niramit", "frontis-blocks"),
  value: "Niramit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nixie One", "frontis-blocks"),
  value: "Nixie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nobile", "frontis-blocks"),
  value: "Nobile"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nokora", "frontis-blocks"),
  value: "Nokora"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Norican", "frontis-blocks"),
  value: "Norican"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer", "frontis-blocks"),
  value: "Nosifer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nosifer Caps", "frontis-blocks"),
  value: "Nosifer Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Notable", "frontis-blocks"),
  value: "Notable"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nothing You Could Do", "frontis-blocks"),
  value: "Nothing You Could Do"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noticia Text", "frontis-blocks"),
  value: "Noticia Text"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Sans", "frontis-blocks"),
  value: "Noto Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Noto Serif", "frontis-blocks"),
  value: "Noto Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("notosanstamil", "frontis-blocks"),
  value: "notosanstamil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Cut", "frontis-blocks"),
  value: "Nova Cut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Flat", "frontis-blocks"),
  value: "Nova Flat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Mono", "frontis-blocks"),
  value: "Nova Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Oval", "frontis-blocks"),
  value: "Nova Oval"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Round", "frontis-blocks"),
  value: "Nova Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Script", "frontis-blocks"),
  value: "Nova Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Slim", "frontis-blocks"),
  value: "Nova Slim"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nova Square", "frontis-blocks"),
  value: "Nova Square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("NTR", "frontis-blocks"),
  value: "NTR"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Numans", "frontis-blocks"),
  value: "Numans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito", "frontis-blocks"),
  value: "Nunito"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nunito Sans", "frontis-blocks"),
  value: "Nunito Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Odor Mean Chey", "frontis-blocks"),
  value: "Odor Mean Chey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Offside", "frontis-blocks"),
  value: "Offside"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("OFL Sorts Mill Goudy TT", "frontis-blocks"),
  value: "OFL Sorts Mill Goudy TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Old Standard TT", "frontis-blocks"),
  value: "Old Standard TT"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oldenburg", "frontis-blocks"),
  value: "Oldenburg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script", "frontis-blocks"),
  value: "Oleo Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oleo Script Swash Caps", "frontis-blocks"),
  value: "Oleo Script Swash Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans", "frontis-blocks"),
  value: "Open Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Sans Condensed", "frontis-blocks"),
  value: "Open Sans Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrew", "frontis-blocks"),
  value: "opensanshebrew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("opensanshebrewcondensed", "frontis-blocks"),
  value: "opensanshebrewcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oranienbaum", "frontis-blocks"),
  value: "Oranienbaum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orbitron", "frontis-blocks"),
  value: "Orbitron"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oregano", "frontis-blocks"),
  value: "Oregano"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Orienta", "frontis-blocks"),
  value: "Orienta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Original Surfer", "frontis-blocks"),
  value: "Original Surfer"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oswald", "frontis-blocks"),
  value: "Oswald"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Over the Rainbow", "frontis-blocks"),
  value: "Over the Rainbow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock", "frontis-blocks"),
  value: "Overlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlock SC", "frontis-blocks"),
  value: "Overlock SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass", "frontis-blocks"),
  value: "Overpass"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overpass Mono", "frontis-blocks"),
  value: "Overpass Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ovo", "frontis-blocks"),
  value: "Ovo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen", "frontis-blocks"),
  value: "Oxygen"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oxygen Mono", "frontis-blocks"),
  value: "Oxygen Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pacifico", "frontis-blocks"),
  value: "Pacifico"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padauk", "frontis-blocks"),
  value: "Padauk"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin", "frontis-blocks"),
  value: "Palanquin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Palanquin Dark", "frontis-blocks"),
  value: "Palanquin Dark"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pangolin", "frontis-blocks"),
  value: "Pangolin"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paprika", "frontis-blocks"),
  value: "Paprika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Parisienne", "frontis-blocks"),
  value: "Parisienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passero One", "frontis-blocks"),
  value: "Passero One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Passion One", "frontis-blocks"),
  value: "Passion One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pathway Gothic One", "frontis-blocks"),
  value: "Pathway Gothic One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand", "frontis-blocks"),
  value: "Patrick Hand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patrick Hand SC", "frontis-blocks"),
  value: "Patrick Hand SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattaya", "frontis-blocks"),
  value: "Pattaya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Patua One", "frontis-blocks"),
  value: "Patua One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pavanam", "frontis-blocks"),
  value: "Pavanam"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Paytone One", "frontis-blocks"),
  value: "Paytone One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pecita", "frontis-blocks"),
  value: "Pecita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peddana", "frontis-blocks"),
  value: "Peddana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Peralta", "frontis-blocks"),
  value: "Peralta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Permanent Marker", "frontis-blocks"),
  value: "Permanent Marker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petit Formal Script", "frontis-blocks"),
  value: "Petit Formal Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Petrona", "frontis-blocks"),
  value: "Petrona"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phetsarath", "frontis-blocks"),
  value: "Phetsarath"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Philosopher", "frontis-blocks"),
  value: "Philosopher"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Piedra", "frontis-blocks"),
  value: "Piedra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pinyon Script", "frontis-blocks"),
  value: "Pinyon Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pirata One", "frontis-blocks"),
  value: "Pirata One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Plaster", "frontis-blocks"),
  value: "Plaster"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Play", "frontis-blocks"),
  value: "Play"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playball", "frontis-blocks"),
  value: "Playball"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display", "frontis-blocks"),
  value: "Playfair Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Playfair Display SC", "frontis-blocks"),
  value: "Playfair Display SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Podkova", "frontis-blocks"),
  value: "Podkova"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("podkovavfbeta", "frontis-blocks"),
  value: "podkovavfbeta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poetsen One", "frontis-blocks"),
  value: "Poetsen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poiret One", "frontis-blocks"),
  value: "Poiret One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poller One", "frontis-blocks"),
  value: "Poller One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poly", "frontis-blocks"),
  value: "Poly"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pompiere", "frontis-blocks"),
  value: "Pompiere"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ponnala", "frontis-blocks"),
  value: "Ponnala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pontano Sans", "frontis-blocks"),
  value: "Pontano Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poor Story", "frontis-blocks"),
  value: "Poor Story"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Poppins", "frontis-blocks"),
  value: "Poppins"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Sans", "frontis-blocks"),
  value: "Port Lligat Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Port Lligat Slab", "frontis-blocks"),
  value: "Port Lligat Slab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Porter Sans Block", "frontis-blocks"),
  value: "Porter Sans Block"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Colombo", "frontis-blocks"),
  value: "Post No Bills Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Post No Bills Jaffna", "frontis-blocks"),
  value: "Post No Bills Jaffna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pragati Narrow", "frontis-blocks"),
  value: "Pragati Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preahvihear", "frontis-blocks"),
  value: "Preahvihear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press Start 2P", "frontis-blocks"),
  value: "Press Start 2P"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pridi", "frontis-blocks"),
  value: "Pridi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Princess Sofia", "frontis-blocks"),
  value: "Princess Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prociono", "frontis-blocks"),
  value: "Prociono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prompt", "frontis-blocks"),
  value: "Prompt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Prosto One", "frontis-blocks"),
  value: "Prosto One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Proza Libre", "frontis-blocks"),
  value: "Proza Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Mono", "frontis-blocks"),
  value: "PT Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans", "frontis-blocks"),
  value: "PT Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Caption", "frontis-blocks"),
  value: "PT Sans Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Sans Narrow", "frontis-blocks"),
  value: "PT Sans Narrow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif", "frontis-blocks"),
  value: "PT Serif"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PT Serif Caption", "frontis-blocks"),
  value: "PT Serif Caption"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Puritan", "frontis-blocks"),
  value: "Puritan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Purple Purse", "frontis-blocks"),
  value: "Purple Purse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pushster", "frontis-blocks"),
  value: "Pushster"
}, {
  label: "Quando",
  value: "Quando"
}, {
  label: "Quantico",
  value: "Quantico"
}, {
  label: "Quattrocento",
  value: "Quattrocento"
}, {
  label: "Quattrocento Sans",
  value: "Quattrocento Sans"
}, {
  label: "Questrial",
  value: "Questrial"
}, {
  label: "Quicksand",
  value: "Quicksand"
}, {
  label: "Quintessential",
  value: "Quintessential"
}, {
  label: "Qwigley",
  value: "Qwigley"
}, {
  label: "Racing Sans One",
  value: "Racing Sans One"
}, {
  label: "Radley",
  value: "Radley"
}, {
  label: "Rajdhani",
  value: "Rajdhani"
}, {
  label: "Rakkas",
  value: "Rakkas"
}, {
  label: "Raleway",
  value: "Raleway"
}, {
  label: "Raleway Dots",
  value: "Raleway Dots"
}, {
  label: "Ramabhadra",
  value: "Ramabhadra"
}, {
  label: "Ramaraja",
  value: "Ramaraja"
}, {
  label: "Rambla",
  value: "Rambla"
}, {
  label: "Rammetto One",
  value: "Rammetto One"
}, {
  label: "Ranchers",
  value: "Ranchers"
}, {
  label: "Rancho",
  value: "Rancho"
}, {
  label: "Ranga",
  value: "Ranga"
}, {
  label: "Rasa",
  value: "Rasa"
}, {
  label: "Rationale",
  value: "Rationale"
}, {
  label: "Ravi Prakash",
  value: "Ravi Prakash"
}, {
  label: "Red Hat Display",
  value: "Red Hat Display"
}, {
  label: "Red Hat Text",
  value: "Red Hat Text"
}, {
  label: "Redacted",
  value: "Redacted"
}, {
  label: "Redacted Script",
  value: "Redacted Script"
}, {
  label: "Redressed",
  value: "Redressed"
}, {
  label: "Reem Kufi",
  value: "Reem Kufi"
}, {
  label: "Reenie Beanie",
  value: "Reenie Beanie"
}, {
  label: "Revalia",
  value: "Revalia"
}, {
  label: "Rhodium Libre",
  value: "Rhodium Libre"
}, {
  label: "Ribeye",
  value: "Ribeye"
}, {
  label: "Ribeye Marrow",
  value: "Ribeye Marrow"
}, {
  label: "Righteous",
  value: "Righteous"
}, {
  label: "Risque",
  value: "Risque"
}, {
  label: "Roboto",
  value: "Roboto"
}, {
  label: "Roboto Condensed",
  value: "Roboto Condensed"
}, {
  label: "Roboto Mono",
  value: "Roboto Mono"
}, {
  label: "Roboto Slab",
  value: "Roboto Slab"
}, {
  label: "Rochester",
  value: "Rochester"
}, {
  label: "Rock Salt",
  value: "Rock Salt"
}, {
  label: "Rokkitt",
  value: "Rokkitt"
}, {
  label: "Romanesco",
  value: "Romanesco"
}, {
  label: "Ropa Sans",
  value: "Ropa Sans"
}, {
  label: "Rosario",
  value: "Rosario"
}, {
  label: "Rosarivo",
  value: "Rosarivo"
}, {
  label: "Rouge Script",
  value: "Rouge Script"
}, {
  label: "roundedmplus1c",
  value: "roundedmplus1c"
}, {
  label: "Rozha One",
  value: "Rozha One"
}, {
  label: "Rubik",
  value: "Rubik"
}, {
  label: "Rubik Mono One",
  value: "Rubik Mono One"
}, {
  label: "Rubik One",
  value: "Rubik One"
}, {
  label: "Ruda",
  value: "Ruda"
}, {
  label: "Rufina",
  value: "Rufina"
}, {
  label: "Ruge Boogie",
  value: "Ruge Boogie"
}, {
  label: "Ruluko",
  value: "Ruluko"
}, {
  label: "Rum Raisin",
  value: "Rum Raisin"
}, {
  label: "Ruslan Display",
  value: "Ruslan Display"
}, {
  label: "Russo One",
  value: "Russo One"
}, {
  label: "Ruthie",
  value: "Ruthie"
}, {
  label: "Rye",
  value: "Rye"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sacramento", "frontis-blocks"),
  value: "Sacramento"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sahitya", "frontis-blocks"),
  value: "Sahitya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sail", "frontis-blocks"),
  value: "Sail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira", "frontis-blocks"),
  value: "Saira"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Condensed", "frontis-blocks"),
  value: "Saira Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Extra Condensed", "frontis-blocks"),
  value: "Saira Extra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Semi Condensed", "frontis-blocks"),
  value: "Saira Semi Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saira Stencil One", "frontis-blocks"),
  value: "Saira Stencil One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Salsa", "frontis-blocks"),
  value: "Salsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sanchez", "frontis-blocks"),
  value: "Sanchez"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sancreek", "frontis-blocks"),
  value: "Sancreek"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansation", "frontis-blocks"),
  value: "Sansation"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita", "frontis-blocks"),
  value: "Sansita"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sansita One", "frontis-blocks"),
  value: "Sansita One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarabun", "frontis-blocks"),
  value: "Sarabun"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarala", "frontis-blocks"),
  value: "Sarala"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarina", "frontis-blocks"),
  value: "Sarina"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sarpanch", "frontis-blocks"),
  value: "Sarpanch"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Satisfy", "frontis-blocks"),
  value: "Satisfy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabigothic", "frontis-blocks"),
  value: "sawarabigothic"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("sawarabimincho", "frontis-blocks"),
  value: "sawarabimincho"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scada", "frontis-blocks"),
  value: "Scada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scheherazade", "frontis-blocks"),
  value: "Scheherazade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Schoolbell", "frontis-blocks"),
  value: "Schoolbell"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scope One", "frontis-blocks"),
  value: "Scope One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seaweed Script", "frontis-blocks"),
  value: "Seaweed Script"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Secular One", "frontis-blocks"),
  value: "Secular One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan", "frontis-blocks"),
  value: "Sedan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedan SC", "frontis-blocks"),
  value: "Sedan SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave", "frontis-blocks"),
  value: "Sedgwick Ave"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sedgwick Ave Display", "frontis-blocks"),
  value: "Sedgwick Ave Display"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangang", "frontis-blocks"),
  value: "seoulhangang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulhangangcondensed", "frontis-blocks"),
  value: "seoulhangangcondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsan", "frontis-blocks"),
  value: "seoulnamsan"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsancondensed", "frontis-blocks"),
  value: "seoulnamsancondensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("seoulnamsanvertical", "frontis-blocks"),
  value: "seoulnamsanvertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sevillana", "frontis-blocks"),
  value: "Sevillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Seymour One", "frontis-blocks"),
  value: "Seymour One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light", "frontis-blocks"),
  value: "Shadows Into Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shadows Into Light Two", "frontis-blocks"),
  value: "Shadows Into Light Two"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shanti", "frontis-blocks"),
  value: "Shanti"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share", "frontis-blocks"),
  value: "Share"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech", "frontis-blocks"),
  value: "Share Tech"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Tech Mono", "frontis-blocks"),
  value: "Share Tech Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shojumaru", "frontis-blocks"),
  value: "Shojumaru"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Short Stack", "frontis-blocks"),
  value: "Short Stack"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrikhand", "frontis-blocks"),
  value: "Shrikhand"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siamreap", "frontis-blocks"),
  value: "Siamreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Siemreap", "frontis-blocks"),
  value: "Siemreap"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sigmar One", "frontis-blocks"),
  value: "Sigmar One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika", "frontis-blocks"),
  value: "Signika"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Signika Negative", "frontis-blocks"),
  value: "Signika Negative"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Simonetta", "frontis-blocks"),
  value: "Simonetta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Day", "frontis-blocks"),
  value: "Single Day"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sintony", "frontis-blocks"),
  value: "Sintony"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sirin Stencil", "frontis-blocks"),
  value: "Sirin Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sitara", "frontis-blocks"),
  value: "Sitara"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Six Caps", "frontis-blocks"),
  value: "Six Caps"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skranji", "frontis-blocks"),
  value: "Skranji"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 13px", "frontis-blocks"),
  value: "Slabo 13px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slabo 27px", "frontis-blocks"),
  value: "Slabo 27px"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slackey", "frontis-blocks"),
  value: "Slackey"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smokum", "frontis-blocks"),
  value: "Smokum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smythe", "frontis-blocks"),
  value: "Smythe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sniglet", "frontis-blocks"),
  value: "Sniglet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snippet", "frontis-blocks"),
  value: "Snippet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Snowburst One", "frontis-blocks"),
  value: "Snowburst One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofadi One", "frontis-blocks"),
  value: "Sofadi One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sofia", "frontis-blocks"),
  value: "Sofia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solway", "frontis-blocks"),
  value: "Solway"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Song Myung", "frontis-blocks"),
  value: "Song Myung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sonsie One", "frontis-blocks"),
  value: "Sonsie One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sorts Mill Goudy", "frontis-blocks"),
  value: "Sorts Mill Goudy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("souliyo", "frontis-blocks"),
  value: "souliyo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Code Pro", "frontis-blocks"),
  value: "Source Code Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Sans Pro", "frontis-blocks"),
  value: "Source Sans Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Source Serif Pro", "frontis-blocks"),
  value: "Source Serif Pro"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space Mono", "frontis-blocks"),
  value: "Space Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Elite", "frontis-blocks"),
  value: "Special Elite"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spectral", "frontis-blocks"),
  value: "Spectral"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spicy Rice", "frontis-blocks"),
  value: "Spicy Rice"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spinnaker", "frontis-blocks"),
  value: "Spinnaker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spirax", "frontis-blocks"),
  value: "Spirax"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Squada One", "frontis-blocks"),
  value: "Squada One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sree Krushnadevaraya", "frontis-blocks"),
  value: "Sree Krushnadevaraya"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sriracha", "frontis-blocks"),
  value: "Sriracha"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Srisakdi", "frontis-blocks"),
  value: "Srisakdi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Staatliches", "frontis-blocks"),
  value: "Staatliches"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalemate", "frontis-blocks"),
  value: "Stalemate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalin One", "frontis-blocks"),
  value: "Stalin One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stalinist One", "frontis-blocks"),
  value: "Stalinist One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stardos Stencil", "frontis-blocks"),
  value: "Stardos Stencil"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Condensed", "frontis-blocks"),
  value: "Stint Ultra Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stint Ultra Expanded", "frontis-blocks"),
  value: "Stint Ultra Expanded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stoke", "frontis-blocks"),
  value: "Stoke"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strait", "frontis-blocks"),
  value: "Strait"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strong", "frontis-blocks"),
  value: "Strong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stylish", "frontis-blocks"),
  value: "Stylish"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sue Ellen Francisco", "frontis-blocks"),
  value: "Sue Ellen Francisco"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suez One", "frontis-blocks"),
  value: "Suez One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sumana", "frontis-blocks"),
  value: "Sumana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunflower", "frontis-blocks"),
  value: "Sunflower"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sunshiney", "frontis-blocks"),
  value: "Sunshiney"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Supermercado One", "frontis-blocks"),
  value: "Supermercado One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sura", "frontis-blocks"),
  value: "Sura"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suranna", "frontis-blocks"),
  value: "Suranna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suravaram", "frontis-blocks"),
  value: "Suravaram"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Suwannaphum", "frontis-blocks"),
  value: "Suwannaphum"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swanky and Moo Moo", "frontis-blocks"),
  value: "Swanky and Moo Moo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Syncopate", "frontis-blocks"),
  value: "Syncopate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tajawal", "frontis-blocks"),
  value: "Tajawal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tangerine", "frontis-blocks"),
  value: "Tangerine"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taprom", "frontis-blocks"),
  value: "Taprom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tauri", "frontis-blocks"),
  value: "Tauri"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taviraj", "frontis-blocks"),
  value: "Taviraj"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teko", "frontis-blocks"),
  value: "Teko"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Telex", "frontis-blocks"),
  value: "Telex"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenali Ramakrishna", "frontis-blocks"),
  value: "Tenali Ramakrishna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tenor Sans", "frontis-blocks"),
  value: "Tenor Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis", "frontis-blocks"),
  value: "Terminal Dosis"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Terminal Dosis Light", "frontis-blocks"),
  value: "Terminal Dosis Light"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Me One", "frontis-blocks"),
  value: "Text Me One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thabit", "frontis-blocks"),
  value: "Thabit"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("tharlon", "frontis-blocks"),
  value: "tharlon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thasadith", "frontis-blocks"),
  value: "Thasadith"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The Girl Next Door", "frontis-blocks"),
  value: "The Girl Next Door"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tienne", "frontis-blocks"),
  value: "Tienne"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tillana", "frontis-blocks"),
  value: "Tillana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Timmana", "frontis-blocks"),
  value: "Timmana"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tinos", "frontis-blocks"),
  value: "Tinos"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titan One", "frontis-blocks"),
  value: "Titan One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Titillium Web", "frontis-blocks"),
  value: "Titillium Web"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trade Winds", "frontis-blocks"),
  value: "Trade Winds"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trirong", "frontis-blocks"),
  value: "Trirong"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trocchi", "frontis-blocks"),
  value: "Trocchi"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trochut", "frontis-blocks"),
  value: "Trochut"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trykker", "frontis-blocks"),
  value: "Trykker"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tuffy", "frontis-blocks"),
  value: "Tuffy"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tulpen One", "frontis-blocks"),
  value: "Tulpen One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu", "frontis-blocks"),
  value: "Ubuntu"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Condensed", "frontis-blocks"),
  value: "Ubuntu Condensed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ubuntu Mono", "frontis-blocks"),
  value: "Ubuntu Mono"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ultra", "frontis-blocks"),
  value: "Ultra"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uncial Antiqua", "frontis-blocks"),
  value: "Uncial Antiqua"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underdog", "frontis-blocks"),
  value: "Underdog"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unica One", "frontis-blocks"),
  value: "Unica One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturCook", "frontis-blocks"),
  value: "UnifrakturCook"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("UnifrakturMaguntia", "frontis-blocks"),
  value: "UnifrakturMaguntia"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unkempt", "frontis-blocks"),
  value: "Unkempt"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unlock", "frontis-blocks"),
  value: "Unlock"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unna", "frontis-blocks"),
  value: "Unna"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vampiro One", "frontis-blocks"),
  value: "Vampiro One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela", "frontis-blocks"),
  value: "Varela"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varela Round", "frontis-blocks"),
  value: "Varela Round"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Varta", "frontis-blocks"),
  value: "Varta"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vast Shadow", "frontis-blocks"),
  value: "Vast Shadow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vesper Libre", "frontis-blocks"),
  value: "Vesper Libre"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vibur", "frontis-blocks"),
  value: "Vibur"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vidaloka", "frontis-blocks"),
  value: "Vidaloka"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viga", "frontis-blocks"),
  value: "Viga"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voces", "frontis-blocks"),
  value: "Voces"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Volkhov", "frontis-blocks"),
  value: "Volkhov"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn", "frontis-blocks"),
  value: "Vollkorn"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vollkorn SC", "frontis-blocks"),
  value: "Vollkorn SC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Voltaire", "frontis-blocks"),
  value: "Voltaire"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("VT323", "frontis-blocks"),
  value: "VT323"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Waiting for the Sunrise", "frontis-blocks"),
  value: "Waiting for the Sunrise"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wallpoet", "frontis-blocks"),
  value: "Wallpoet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Walter Turncoat", "frontis-blocks"),
  value: "Walter Turncoat"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Warnes", "frontis-blocks"),
  value: "Warnes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wellfleet", "frontis-blocks"),
  value: "Wellfleet"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wendy One", "frontis-blocks"),
  value: "Wendy One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wire One", "frontis-blocks"),
  value: "Wire One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Work Sans", "frontis-blocks"),
  value: "Work Sans"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yaldevi Colombo", "frontis-blocks"),
  value: "Yaldevi Colombo"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yanone Kaffeesatz", "frontis-blocks"),
  value: "Yanone Kaffeesatz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yantramanav", "frontis-blocks"),
  value: "Yantramanav"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yatra One", "frontis-blocks"),
  value: "Yatra One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yellowtail", "frontis-blocks"),
  value: "Yellowtail"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeon Sung", "frontis-blocks"),
  value: "Yeon Sung"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yeseva One", "frontis-blocks"),
  value: "Yeseva One"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yesteryear", "frontis-blocks"),
  value: "Yesteryear"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yinmar", "frontis-blocks"),
  value: "Yinmar"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yrsa", "frontis-blocks"),
  value: "Yrsa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL KuaiLe", "frontis-blocks"),
  value: "ZCOOL KuaiLe"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL QingKe HuangYou", "frontis-blocks"),
  value: "ZCOOL QingKe HuangYou"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ZCOOL XiaoWei", "frontis-blocks"),
  value: "ZCOOL XiaoWei"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zeyada", "frontis-blocks"),
  value: "Zeyada"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zhi Mang Xing", "frontis-blocks"),
  value: "Zhi Mang Xing"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zilla Slab Highlight", "frontis-blocks"),
  value: "Zilla Slab Highlight"
}];

/***/ }),

/***/ "./src/blocks/image-gallery/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/image-gallery/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icon-picker/components/icon-picker/controls/renderIcon */ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/blocks/image-gallery/inspector.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image-gallery/editor.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






function Edit(_ref) {
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes,
    clientId = _ref.clientId;
  var blockID = attributes.blockID,
    GalleryItems = attributes.GalleryItems,
    DeviceType = attributes.DeviceType,
    GalleryType = attributes.GalleryType,
    ImageOverlayStyle = attributes.ImageOverlayStyle,
    GalleryButtonSwitcher = attributes.GalleryButtonSwitcher,
    GalleryButtonText = attributes.GalleryButtonText,
    GalleryButtonLink = attributes.GalleryButtonLink;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "fb-gallery-main-wrapper ".concat(blockID)
  });
  var handleChangeItem = function handleChangeItem(id, key, value) {
    var updatedItems = GalleryItems.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, value)) : item;
    });
    setAttributes({
      GalleryItems: updatedItems
    });
  };

  // console.log(attributes);

  // const gridSpan = GalleryType == 'mesonry' ? {
  //     gridRow: DeviceType == 'Desktop' ? item.row?.desktop > 1 && `span-${item.row?.desktop}` : DeviceType == 'Tablet' ? item.row?.tablet > 1 && `span-${item.row?.tablet}` : item.row?.mobile > 1 && `span-${item.row?.mobile}`,
  //     gridColumn: DeviceType == 'Desktop' ? item.column?.desktop > 1 && `span-${item.column?.desktop}` : DeviceType == 'Tablet' ? item.column?.tablet > 1 && `span-${item.column?.tablet}` : item.column?.mobile > 1 && `span-${item.column?.mobile}`,
  // } : '';

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-wrapper "
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-items"
  }, GalleryItems.map(function (item) {
    var _item$image, _item$row, _item$row2, _item$row3, _item$row4, _item$row5, _item$row6, _item$column, _item$column2, _item$column3, _item$column4, _item$column5, _item$column6;
    return item !== null && item !== void 0 && (_item$image = item.image) !== null && _item$image !== void 0 && _item$image.url ? /*#__PURE__*/React.createElement("a", {
      key: item.id,
      className: "fb-image-gallery-item",
      style: _objectSpread({}, GalleryType === 'mesonry' && {
        gridRow: DeviceType === 'Desktop' ? ((_item$row = item.row) === null || _item$row === void 0 ? void 0 : _item$row.desktop) > 1 ? "span ".concat((_item$row2 = item.row) === null || _item$row2 === void 0 ? void 0 : _item$row2.desktop) : 'unset' : DeviceType === 'Tablet' ? ((_item$row3 = item.row) === null || _item$row3 === void 0 ? void 0 : _item$row3.tablet) > 1 ? "span ".concat((_item$row4 = item.row) === null || _item$row4 === void 0 ? void 0 : _item$row4.tablet) : 'unset' : ((_item$row5 = item.row) === null || _item$row5 === void 0 ? void 0 : _item$row5.mobile) > 1 ? "span ".concat((_item$row6 = item.row) === null || _item$row6 === void 0 ? void 0 : _item$row6.mobile) : 'unset',
        gridColumn: DeviceType === 'Desktop' ? ((_item$column = item.column) === null || _item$column === void 0 ? void 0 : _item$column.desktop) > 1 ? "span ".concat((_item$column2 = item.column) === null || _item$column2 === void 0 ? void 0 : _item$column2.desktop) : 'unset' : DeviceType === 'Tablet' ? ((_item$column3 = item.column) === null || _item$column3 === void 0 ? void 0 : _item$column3.tablet) > 1 ? "span ".concat((_item$column4 = item.column) === null || _item$column4 === void 0 ? void 0 : _item$column4.tablet) : 'unset' : ((_item$column5 = item.column) === null || _item$column5 === void 0 ? void 0 : _item$column5.mobile) > 1 ? "span ".concat((_item$column6 = item.column) === null || _item$column6 === void 0 ? void 0 : _item$column6.mobile) : 'unset'
      })
    }, /*#__PURE__*/React.createElement("img", {
      className: "fb-image-gallery-image",
      src: item.image.url,
      alt: item.image.alt
    }), ImageOverlayStyle === 'overlay' && /*#__PURE__*/React.createElement("span", {
      className: "fb-image-overlay"
    })) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
      onSelect: function onSelect(media) {
        return handleChangeItem(item.id, 'image', {
          id: media.id,
          url: media.url,
          alt: media.alt,
          width: media.width,
          height: media.height
        });
      },
      allowedTypes: ['image'],
      multiple: false,
      labels: {
        title: 'Add Author Image'
      }
    });
  })), GalleryButtonSwitcher && /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-btn-wrapper"
  }, /*#__PURE__*/React.createElement("a", {
    href: GalleryButtonLink,
    className: "fb-image-gallery-btn"
  }, GalleryButtonText))))));
}

/***/ }),

/***/ "./src/blocks/image-gallery/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/image-gallery/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image-gallery/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/image-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/image-gallery/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/image-gallery/block.json");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes.js */ "./src/blocks/image-gallery/attributes.js");



/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: _attributes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/image-gallery/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/image-gallery/inspector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/constants */ "./src/blocks/image-gallery/constants/constants.js");
/* harmony import */ var _sortableItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortableItem */ "./src/blocks/image-gallery/sortableItem.js");
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/image-gallery/editor.scss");
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/spacing */ "./src/components/spacing/index.js");
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
    GalleryType = attributes.GalleryType,
    GalleryItems = attributes.GalleryItems,
    GalleryItemHeightDesktop = attributes.GalleryItemHeightDesktop,
    GalleryItemHeightTablet = attributes.GalleryItemHeightTablet,
    GalleryItemHeightMobile = attributes.GalleryItemHeightMobile,
    GalleryItemHeightUnits = attributes.GalleryItemHeightUnits,
    ImageOverlayStyle = attributes.ImageOverlayStyle,
    ImageOverlayStyleType = attributes.ImageOverlayStyleType,
    ImageOverlayColor = attributes.ImageOverlayColor,
    GalleryColumnNumberDesktop = attributes.GalleryColumnNumberDesktop,
    GalleryColumnNumberTablet = attributes.GalleryColumnNumberTablet,
    GalleryColumnNumberMobile = attributes.GalleryColumnNumberMobile,
    GalleryImageGapDesktop = attributes.GalleryImageGapDesktop,
    GalleryImageGapTablet = attributes.GalleryImageGapTablet,
    GalleryImageGapMobile = attributes.GalleryImageGapMobile,
    GalleryImageGapUnits = attributes.GalleryImageGapUnits,
    GalleryButtonSwitcher = attributes.GalleryButtonSwitcher,
    GalleryButtonText = attributes.GalleryButtonText,
    GalleryButtonLink = attributes.GalleryButtonLink,
    ImageAlignment = attributes.ImageAlignment,
    ImageFitCover = attributes.ImageFitCover,
    ImageWidthDesktop = attributes.ImageWidthDesktop,
    ImageWidthTab = attributes.ImageWidthTab,
    ImageWidthMobile = attributes.ImageWidthMobile,
    ImageWidthUnits = attributes.ImageWidthUnits,
    ImageHeightDesktop = attributes.ImageHeightDesktop,
    ImageHeightTab = attributes.ImageHeightTab,
    ImageHeightMobile = attributes.ImageHeightMobile,
    ImageHeightUnits = attributes.ImageHeightUnits,
    GalleryButtonAlignment = attributes.GalleryButtonAlignment,
    GalleryButtonFontFamily = attributes.GalleryButtonFontFamily,
    GalleryButtonFontSizeDesktop = attributes.GalleryButtonFontSizeDesktop,
    GalleryButtonFontSizeTablet = attributes.GalleryButtonFontSizeTablet,
    GalleryButtonFontSizeMobile = attributes.GalleryButtonFontSizeMobile,
    GalleryButtonFontSizeUnits = attributes.GalleryButtonFontSizeUnits,
    GalleryButtonFontWeight = attributes.GalleryButtonFontWeight,
    GalleryButtonFontStyle = attributes.GalleryButtonFontStyle,
    GalleryButtonTextTransform = attributes.GalleryButtonTextTransform,
    GalleryButtonTextDecoration = attributes.GalleryButtonTextDecoration,
    GalleryButtonLetterSpacingDesktop = attributes.GalleryButtonLetterSpacingDesktop,
    GalleryButtonLetterSpacingTablet = attributes.GalleryButtonLetterSpacingTablet,
    GalleryButtonLetterSpacingMobile = attributes.GalleryButtonLetterSpacingMobile,
    GalleryButtonLetterSpacingUnits = attributes.GalleryButtonLetterSpacingUnits,
    GalleryButtonLineHeightDesktop = attributes.GalleryButtonLineHeightDesktop,
    GalleryButtonLineHeightTablet = attributes.GalleryButtonLineHeightTablet,
    GalleryButtonLineHeightMobile = attributes.GalleryButtonLineHeightMobile,
    GalleryButtonLineHeightUnits = attributes.GalleryButtonLineHeightUnits,
    GalleryButtonColorSwitcher = attributes.GalleryButtonColorSwitcher,
    GalleryButtonColor = attributes.GalleryButtonColor,
    GalleryButtonHoverColor = attributes.GalleryButtonHoverColor,
    GalleryButtonBGColorSwitcher = attributes.GalleryButtonBGColorSwitcher,
    GalleryButtonBGColor = attributes.GalleryButtonBGColor,
    GalleryButtonBGHoverColor = attributes.GalleryButtonBGHoverColor,
    ButtonBorder = attributes.ButtonBorder,
    ButtonBorderColor = attributes.ButtonBorderColor,
    ButtonBorderHoverColor = attributes.ButtonBorderHoverColor,
    ButtonBorderColorSwitcher = attributes.ButtonBorderColorSwitcher,
    ButtonPaddingUnits = attributes.ButtonPaddingUnits,
    ButtonDesktopPadding = attributes.ButtonDesktopPadding,
    ButtonTabPadding = attributes.ButtonTabPadding,
    ButtonMobilePadding = attributes.ButtonMobilePadding,
    ButtonPaddingLink = attributes.ButtonPaddingLink,
    ButtonMarginUnits = attributes.ButtonMarginUnits,
    ButtonDesktopMargin = attributes.ButtonDesktopMargin,
    ButtonTabMargin = attributes.ButtonTabMargin,
    ButtonMobileMargin = attributes.ButtonMobileMargin,
    ButtonMarginLink = attributes.ButtonMarginLink,
    ButtonBorderUnits = attributes.ButtonBorderUnits,
    ButtonDesktopBorderWidth = attributes.ButtonDesktopBorderWidth,
    ButtonTabBorderWidth = attributes.ButtonTabBorderWidth,
    ButtonMobileBorderWidth = attributes.ButtonMobileBorderWidth,
    ButtonBorderLink = attributes.ButtonBorderLink,
    ButtonBorderRadiusUnits = attributes.ButtonBorderRadiusUnits,
    ButtonDesktopBorderRadiusWidth = attributes.ButtonDesktopBorderRadiusWidth,
    ButtonTabBorderRadiusWidth = attributes.ButtonTabBorderRadiusWidth,
    ButtonMobileBorderRadiusWidth = attributes.ButtonMobileBorderRadiusWidth,
    ButtonBorderRadiusLink = attributes.ButtonBorderRadiusLink,
    GalleryZIndex = attributes.GalleryZIndex,
    GalleryPaddingUnits = attributes.GalleryPaddingUnits,
    GalleryDesktopPadding = attributes.GalleryDesktopPadding,
    GalleryTabPadding = attributes.GalleryTabPadding,
    GalleryMobilePadding = attributes.GalleryMobilePadding,
    GalleryPaddingLink = attributes.GalleryPaddingLink,
    GalleryMarginUnits = attributes.GalleryMarginUnits,
    GalleryDesktopMargin = attributes.GalleryDesktopMargin,
    GalleryTabMargin = attributes.GalleryTabMargin,
    GalleryMobileMargin = attributes.GalleryMobileMargin,
    GalleryMarginLink = attributes.GalleryMarginLink,
    GalleryBgColorSwitcher = attributes.GalleryBgColorSwitcher,
    GalleryBgColor = attributes.GalleryBgColor,
    GalleryBgHoverColor = attributes.GalleryBgHoverColor,
    GalleryBorder = attributes.GalleryBorder,
    GalleryBorderColor = attributes.GalleryBorderColor,
    GalleryBorderHoverColor = attributes.GalleryBorderHoverColor,
    GalleryBorderColorSwitcher = attributes.GalleryBorderColorSwitcher,
    GalleryBorderUnits = attributes.GalleryBorderUnits,
    GalleryDesktopBorderWidth = attributes.GalleryDesktopBorderWidth,
    GalleryTabBorderWidth = attributes.GalleryTabBorderWidth,
    GalleryMobileBorderWidth = attributes.GalleryMobileBorderWidth,
    GalleryBorderLink = attributes.GalleryBorderLink,
    GalleryBorderRadiusUnits = attributes.GalleryBorderRadiusUnits,
    GalleryDesktopBorderRadiusWidth = attributes.GalleryDesktopBorderRadiusWidth,
    GalleryTabBorderRadiusWidth = attributes.GalleryTabBorderRadiusWidth,
    GalleryMobileBorderRadiusWidth = attributes.GalleryMobileBorderRadiusWidth,
    GalleryBorderRadiusLink = attributes.GalleryBorderRadiusLink,
    GalleryDesktopSwitcher = attributes.GalleryDesktopSwitcher,
    GalleryTabletSwitcher = attributes.GalleryTabletSwitcher,
    GalleryMobileSwitcher = attributes.GalleryMobileSwitcher;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (clientId && typeof clientId === 'string') {
      setAttributes({
        blockID: "fb-gallery-" + clientId.slice(0, 8)
      });
    }
  }, [clientId]);
  var handleDragEnd = function handleDragEnd(event) {
    var active = event.active,
      over = event.over;
    if (active && over && active.id !== over.id) {
      var oldIndex = GalleryItems.findIndex(function (item) {
        return item.id === active.id;
      });
      var newIndex = GalleryItems.findIndex(function (item) {
        return item.id === over.id;
      });
      var updatedItems = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.arrayMove)(GalleryItems, oldIndex, newIndex);
      setAttributes({
        GalleryItems: updatedItems
      });
    }
  };
  var handleAddItem = function handleAddItem() {
    var newItem = {
      id: "image-".concat(GalleryItems.length + 1),
      title: "Image ".concat(GalleryItems.length + 1),
      column: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      row: {
        desktop: 0,
        tablet: 0,
        mobile: 0
      },
      image: {
        id: 0
      }
    };
    setAttributes({
      GalleryItems: [].concat(_toConsumableArray(GalleryItems), [newItem])
    });
  };
  var handleChangeItem = function handleChangeItem(id, key, value) {
    var updatedItems = GalleryItems.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, value)) : item;
    });
    setAttributes({
      GalleryItems: updatedItems
    });
  };
  var handleDeleteItem = function handleDeleteItem(id) {
    var updatedItems = GalleryItems.filter(function (item) {
      return item.id !== id;
    });
    setAttributes({
      GalleryItems: updatedItems
    });
  };
  var handleRemoveMedia = function handleRemoveMedia(id, key, value) {
    var updatedItems = GalleryItems.map(function (item) {
      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, value)) : item;
    });
    setAttributes({
      GalleryItems: updatedItems
    });
  };

  // Button Margin Functionb
  var handleButtonMarginUnitChange = function handleButtonMarginUnitChange(event, position) {
    var value = event.target.value;
    if (ButtonMarginLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            ButtonDesktopMargin: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabMargin: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileMargin: {
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
            ButtonDesktopMargin: _objectSpread(_objectSpread({}, ButtonDesktopMargin), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabMargin: _objectSpread(_objectSpread({}, ButtonTabMargin), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileMargin: _objectSpread(_objectSpread({}, ButtonMobileMargin), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleButtonMarginCombineBtn = function handleButtonMarginCombineBtn() {
    setAttributes({
      ButtonMarginLink: !ButtonMarginLink
    });
  };
  var handleButtonMarginUnitsHandler = function handleButtonMarginUnitsHandler(unit) {
    setAttributes({
      ButtonMarginUnits: _objectSpread(_objectSpread({}, ButtonMarginUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var ButtonMarginDesktopWidth = "".concat(ButtonDesktopMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.left).concat(ButtonMarginUnits[DeviceType]);
  var ButtonMarginTabletWidth = "".concat(ButtonTabMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.left).concat(ButtonMarginUnits[DeviceType]);
  var ButtonMarginMobileWidth = "".concat(ButtonMobileMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.left).concat(ButtonMarginUnits[DeviceType]);

  // Button Padding Functionb
  var handleButtonPaddingUnitChange = function handleButtonPaddingUnitChange(event, position) {
    var value = event.target.value;
    if (ButtonPaddingLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            ButtonDesktopPadding: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabPadding: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobilePadding: {
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
            ButtonDesktopPadding: _objectSpread(_objectSpread({}, ButtonDesktopPadding), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabPadding: _objectSpread(_objectSpread({}, ButtonTabPadding), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobilePadding: _objectSpread(_objectSpread({}, ButtonMobilePadding), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleButtonPaddingCombineBtn = function handleButtonPaddingCombineBtn() {
    setAttributes({
      ButtonPaddingLink: !ButtonPaddingLink
    });
  };
  var handleButtonPaddingUnitsHandler = function handleButtonPaddingUnitsHandler(unit) {
    setAttributes({
      ButtonPaddingUnits: _objectSpread(_objectSpread({}, ButtonPaddingUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var ButtonPaddingDesktopWidth = "".concat(ButtonDesktopPadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.left).concat(ButtonPaddingUnits[DeviceType]);
  var ButtonPaddingTabletWidth = "".concat(ButtonTabPadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.left).concat(ButtonPaddingUnits[DeviceType]);
  var ButtonPaddingMobileWidth = "".concat(ButtonMobilePadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.left).concat(ButtonPaddingUnits[DeviceType]);

  // Button Border Function
  var handleButtonBorderUnitChange = function handleButtonBorderUnitChange(event, position) {
    var value = event.target.value;
    if (ButtonBorderLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            ButtonDesktopBorderWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabBorderWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileBorderWidth: {
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
            ButtonDesktopBorderWidth: _objectSpread(_objectSpread({}, ButtonDesktopBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabBorderWidth: _objectSpread(_objectSpread({}, ButtonTabBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileBorderWidth: _objectSpread(_objectSpread({}, ButtonMobileBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleButtonBorderCombineBtn = function handleButtonBorderCombineBtn() {
    setAttributes({
      ButtonBorderLink: !ButtonBorderLink
    });
  };
  var handleButtonBorderUnitsHandler = function handleButtonBorderUnitsHandler(unit) {
    setAttributes({
      ButtonBorderUnits: _objectSpread(_objectSpread({}, ButtonBorderUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var ButtonBorderDesktopWidth = "".concat(ButtonDesktopBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);
  var ButtonBorderTabletWidth = "".concat(ButtonTabBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);
  var ButtonBorderMobileWidth = "".concat(ButtonMobileBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);

  // Button BorderRadius Function
  var handleButtonBorderRadiusUnitChange = function handleButtonBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (ButtonBorderRadiusLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            ButtonDesktopBorderRadiusWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabBorderRadiusWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileBorderRadiusWidth: {
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
            ButtonDesktopBorderRadiusWidth: _objectSpread(_objectSpread({}, ButtonDesktopBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            ButtonTabBorderRadiusWidth: _objectSpread(_objectSpread({}, ButtonTabBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            ButtonMobileBorderRadiusWidth: _objectSpread(_objectSpread({}, ButtonMobileBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleButtonBorderRadiusCombineBtn = function handleButtonBorderRadiusCombineBtn() {
    setAttributes({
      ButtonBorderRadiusLink: !ButtonBorderRadiusLink
    });
  };
  var handleButtonBorderRadiusUnitsHandler = function handleButtonBorderRadiusUnitsHandler(unit) {
    setAttributes({
      ButtonBorderRadiusUnits: _objectSpread(_objectSpread({}, ButtonBorderRadiusUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var ButtonBorderRadiusDesktopWidth = "".concat(ButtonDesktopBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);
  var ButtonBorderRadiusTabletWidth = "".concat(ButtonTabBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);
  var ButtonBorderRadiusMobileWidth = "".concat(ButtonMobileBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);

  // Gallery Margin Functionb
  var handleGalleryMarginUnitChange = function handleGalleryMarginUnitChange(event, position) {
    var value = event.target.value;
    if (GalleryMarginLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            GalleryDesktopMargin: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabMargin: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileMargin: {
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
            GalleryDesktopMargin: _objectSpread(_objectSpread({}, GalleryDesktopMargin), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabMargin: _objectSpread(_objectSpread({}, GalleryTabMargin), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileMargin: _objectSpread(_objectSpread({}, GalleryMobileMargin), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGalleryMarginCombineBtn = function handleGalleryMarginCombineBtn() {
    setAttributes({
      GalleryMarginLink: !GalleryMarginLink
    });
  };
  var handleGalleryMarginUnitsHandler = function handleGalleryMarginUnitsHandler(unit) {
    setAttributes({
      GalleryMarginUnits: _objectSpread(_objectSpread({}, GalleryMarginUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var GalleryMarginDesktopWidth = "".concat(GalleryDesktopMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.left).concat(GalleryMarginUnits[DeviceType]);
  var GalleryMarginTabletWidth = "".concat(GalleryTabMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.left).concat(GalleryMarginUnits[DeviceType]);
  var GalleryMarginMobileWidth = "".concat(GalleryMobileMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.left).concat(GalleryMarginUnits[DeviceType]);

  // Gallery Padding Functionb
  var handleGalleryPaddingUnitChange = function handleGalleryPaddingUnitChange(event, position) {
    var value = event.target.value;
    if (GalleryPaddingLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            GalleryDesktopPadding: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabPadding: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobilePadding: {
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
            GalleryDesktopPadding: _objectSpread(_objectSpread({}, GalleryDesktopPadding), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabPadding: _objectSpread(_objectSpread({}, GalleryTabPadding), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobilePadding: _objectSpread(_objectSpread({}, GalleryMobilePadding), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGalleryPaddingCombineBtn = function handleGalleryPaddingCombineBtn() {
    setAttributes({
      GalleryPaddingLink: !GalleryPaddingLink
    });
  };
  var handleGalleryPaddingUnitsHandler = function handleGalleryPaddingUnitsHandler(unit) {
    setAttributes({
      GalleryPaddingUnits: _objectSpread(_objectSpread({}, GalleryPaddingUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var GalleryPaddingDesktopWidth = "".concat(GalleryDesktopPadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.left).concat(GalleryPaddingUnits[DeviceType]);
  var GalleryPaddingTabletWidth = "".concat(GalleryTabPadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.left).concat(GalleryPaddingUnits[DeviceType]);
  var GalleryPaddingMobileWidth = "".concat(GalleryMobilePadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.left).concat(GalleryPaddingUnits[DeviceType]);

  // Gallery BorderWidth Function
  var handleGalleryBorderUnitChange = function handleGalleryBorderUnitChange(event, position) {
    var value = event.target.value;
    if (GalleryBorderLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            GalleryDesktopBorderWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabBorderWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileBorderWidth: {
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
            GalleryDesktopBorderWidth: _objectSpread(_objectSpread({}, GalleryDesktopBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabBorderWidth: _objectSpread(_objectSpread({}, GalleryTabBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileBorderWidth: _objectSpread(_objectSpread({}, GalleryMobileBorderWidth), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGalleryBorderCombineBtn = function handleGalleryBorderCombineBtn() {
    setAttributes({
      GalleryBorderLink: !GalleryBorderLink
    });
  };
  var handleGalleryBorderUnitsHandler = function handleGalleryBorderUnitsHandler(unit) {
    setAttributes({
      GalleryBorderUnits: _objectSpread(_objectSpread({}, GalleryBorderUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var GalleryBorderDesktopWidth = "".concat(GalleryDesktopBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);
  var GalleryBorderTabletWidth = "".concat(GalleryTabBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);
  var GalleryBorderMobileWidth = "".concat(GalleryMobileBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);

  // Gallery BorderRadiusWidth Function
  var handleGalleryBorderRadiusUnitChange = function handleGalleryBorderRadiusUnitChange(event, position) {
    var value = event.target.value;
    if (GalleryBorderRadiusLink) {
      switch (DeviceType) {
        case 'Desktop':
          setAttributes({
            GalleryDesktopBorderRadiusWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabBorderRadiusWidth: {
              top: value,
              right: value,
              bottom: value,
              left: value
            }
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileBorderRadiusWidth: {
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
            GalleryDesktopBorderRadiusWidth: _objectSpread(_objectSpread({}, GalleryDesktopBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Tablet':
          setAttributes({
            GalleryTabBorderRadiusWidth: _objectSpread(_objectSpread({}, GalleryTabBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        case 'Mobile':
          setAttributes({
            GalleryMobileBorderRadiusWidth: _objectSpread(_objectSpread({}, GalleryMobileBorderRadiusWidth), {}, _defineProperty({}, position, value))
          });
          break;
        default:
          break;
      }
    }
  };
  var handleGalleryBorderRadiusCombineBtn = function handleGalleryBorderRadiusCombineBtn() {
    setAttributes({
      GalleryBorderRadiusLink: !GalleryBorderRadiusLink
    });
  };
  var handleGalleryBorderRadiusUnitsHandler = function handleGalleryBorderRadiusUnitsHandler(unit) {
    setAttributes({
      GalleryBorderRadiusUnits: _objectSpread(_objectSpread({}, GalleryBorderRadiusUnits), {}, _defineProperty({}, DeviceType, unit))
    });
  };
  var GalleryBorderRadiusDesktopWidth = "".concat(GalleryDesktopBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  var GalleryBorderRadiusTabletWidth = "".concat(GalleryTabBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  var GalleryBorderRadiusMobileWidth = "".concat(GalleryMobileBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n                .fb-gallery-main-wrapper.".concat(blockID, " {\n                    position: relative;\n                    ").concat(GalleryBgColor !== undefined ? "background-color: ".concat(GalleryBgColor, ";") : '', ";\n                    padding: ").concat(GalleryPaddingDesktopWidth, ";\n                    margin: ").concat(GalleryMarginDesktopWidth, ";\n                    border-style: ").concat(GalleryBorder, ";\n                    border-width: ").concat(GalleryBorderDesktopWidth, ";\n                    ").concat(GalleryBorderColor !== undefined ? "border-color: ".concat(GalleryBorderColor, ";") : '', ";\n                    border-radius: ").concat(GalleryBorderRadiusDesktopWidth, ";\n                    transition: all .3s ease-in-out;\n                    ").concat(GalleryZIndex !== undefined ? "z-index: ".concat(GalleryZIndex) : '', ";\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, ":hover {\n                    ").concat(GalleryBgHoverColor !== undefined ? "background-color: ".concat(GalleryBgHoverColor, ";") : '', ";\n                    ").concat(GalleryBorderHoverColor !== undefined ? "border-color: ".concat(GalleryBorderHoverColor, ";") : '', ";\n                }\n\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items {\n                    grid-template-columns: repeat(").concat(DeviceType == 'Desktop' ? GalleryColumnNumberDesktop : DeviceType == 'Tablet' ? GalleryColumnNumberTablet : GalleryColumnNumberMobile, ", 1fr);\n                    grid-gap: ").concat(DeviceType == 'Desktop' ? GalleryImageGapDesktop : DeviceType == 'Tablet' ? GalleryImageGapTablet : GalleryImageGapMobile).concat(GalleryImageGapUnits, ";\n                    grid-auto-rows: ").concat(DeviceType == 'Desktop' ? GalleryItemHeightDesktop : DeviceType == 'Tablet' ? GalleryItemHeightTablet : GalleryItemHeightMobile).concat(GalleryItemHeightUnits, ";\n                }\n                \n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {\n                    position: absolute;\n                    top: 0;\n                    ").concat(ImageAlignment === 'left' && 'left: 0', ";\n                    ").concat(ImageAlignment === 'right' && 'right: 0; left: unset', ";\n                    ").concat(ImageAlignment === 'center' && 'left: 50%', ";\n                    ").concat(ImageAlignment === 'center' && 'transform: translateX(-50%);', ";\n                    width: ").concat(DeviceType == 'Desktop' ? ImageWidthDesktop : DeviceType == 'Tablet' ? ImageWidthTab : ImageWidthMobile).concat(ImageWidthUnits, ";\n                    height: ").concat(DeviceType == 'Desktop' ? ImageHeightDesktop : DeviceType == 'Tablet' ? ImageHeightTab : ImageHeightMobile).concat(ImageHeightUnits, ";\n                    ").concat(ImageFitCover === true && 'object-fit: cover', ";\n                    ").concat(ImageOverlayStyle == 'black_white' && 'filter: grayscale(100%)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyle == 'black_white' && 'filter: grayscale(0)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {\n                    ").concat(GalleryButtonSwitcher == true && 'display: flex', ";\n                    ").concat(GalleryButtonSwitcher == true && "justify-content: ".concat(GalleryButtonAlignment), ";\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                    ").concat(GalleryButtonSwitcher == true && "border-style: ".concat(ButtonBorder), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher !== undefined && "border-color: ".concat(ButtonBorderColor), ";\n                    ").concat(GalleryButtonSwitcher == true && "border-width: ".concat(ButtonBorderDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-family: ".concat(GalleryButtonFontFamily), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-size: ".concat(DeviceType == 'Desktop' ? GalleryButtonFontSizeDesktop : DeviceType == 'Tablet' ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile).concat(GalleryButtonFontSizeUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-weight: ".concat(GalleryButtonFontWeight), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-style: ".concat(GalleryButtonFontStyle), ";\n                    ").concat(GalleryButtonSwitcher == true && "text-transform: ".concat(GalleryButtonTextTransform), ";\n                    ").concat(GalleryButtonSwitcher == true && "text-decoration: ".concat(GalleryButtonTextDecoration), ";\n                    ").concat(GalleryButtonSwitcher == true && "letter-spacing: ".concat(DeviceType == 'Desktop' ? GalleryButtonLetterSpacingDesktop : DeviceType == 'Tablet' ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile).concat(GalleryButtonLetterSpacingUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && "line-height: ".concat(DeviceType == 'Desktop' ? GalleryButtonLineHeightDesktop : DeviceType == 'Tablet' ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile).concat(GalleryButtonLineHeightUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && "color: ".concat(GalleryButtonColor), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && "background-color: ".concat(GalleryButtonBGColor), ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && "color: ".concat(GalleryButtonHoverColor), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && "background-color: ".concat(GalleryButtonBGHoverColor), ";\n                    transition: all 0.3s ease-in-out;\n                }\n                    \n                @media only screen and (max-width: 1024px) {\n                    .fb-gallery-main-wrapper.").concat(blockID, " {\n                        padding: ").concat(GalleryPaddingTabletWidth, ";\n                        margin: ").concat(GalleryMarginTabletWidth, ";\n                        border-radius: ").concat(GalleryBorderRadiusTabletWidth, ";\n                    }\n\n                    .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                        ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusTabletWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginTabletWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingTabletWidth), ";\n                    }\n                }\n\n                @media only screen and (max-width: 767px) {\n                    .fb-gallery-main-wrapper.").concat(blockID, " {\n                        padding: ").concat(GalleryPaddingMobileWidth, ";\n                        margin: ").concat(GalleryMarginMobileWidth, ";\n                        border-radius: ").concat(GalleryBorderRadiusMobileWidth, ";\n                    }\n\n                    .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                        ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusMobileWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginMobileWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingMobileWidth), ";\n                    }\n                }\n\n            "), ImageOverlayStyle === 'overlay' && "\n                .fb-gallery-main-wrapper.".concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.001)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.05)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {\n                    position: absolute;\n                    content: '';\n                    ").concat(ImageOverlayStyleType === 'top' && 'top: -100%', ";\n                    ").concat(ImageOverlayStyleType === 'top' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType === 'bottom' && 'top: 100%', ";\n                    ").concat(ImageOverlayStyleType === 'bottom' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType === 'left' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType === 'left' && 'left: -100%', ";\n                    ").concat(ImageOverlayStyleType === 'right' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType === 'right' && 'left: 100%', ";\n                    width: 100%;\n                    height: 100%;\n                    background-color: ").concat(ImageOverlayColor, ";\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: all 0.3s ease-in-out;\n                }  \n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {\n                    ").concat(ImageOverlayStyleType == 'top' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType == 'bottom' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType == 'left' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType == 'right' && 'left: 0', ";\n                    visibility: visible;\n                    opacity: 1;\n                    transition: all 0.3s ease-in-out;\n                }\n            ")), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
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
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery Layout", "frontis-blocks"),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layouts", "frontis-blocks"),
      className: "fb-setting-layouts-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      value: attributes.GalleryType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Layout", "frontis-blocks"),
        value: "gird"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mesonry Layout", "frontis-blocks"),
        value: "mesonry"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          GalleryType: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Styles", "frontis-blocks"),
      className: "fb-setting-image-style-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      value: attributes.ImageOverlayStyle,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
        value: "none"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Black & White", "frontis-blocks"),
        value: "black_white"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Overlay", "frontis-blocks"),
        value: "overlay"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          ImageOverlayStyle: value
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-columns-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? GalleryColumnNumberDesktop : DeviceType === "Tablet" ? GalleryColumnNumberTablet : GalleryColumnNumberMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            GalleryColumnNumberDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            GalleryColumnNumberTablet: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            GalleryColumnNumberMobile: value
          });
        }
      },
      min: 1,
      max: 12,
      allowReset: true,
      resetFallbackValue: 3
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Row Height", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-units-type"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-units-type-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            GalleryItemHeightUnits: item.value
          });
        },
        className: "fb-setting-image-gap-units-switcher ".concat(GalleryImageGapUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-gap-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? GalleryItemHeightDesktop : DeviceType === "Tablet" ? GalleryItemHeightTablet : GalleryItemHeightMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            GalleryItemHeightDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            GalleryItemHeightTablet: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            GalleryItemHeightMobile: value
          });
        }
      },
      min: 1,
      max: 1000,
      allowReset: true,
      resetFallbackValue: 250
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-spacing-inner-container"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Gap", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-gap-units"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-image-gap-units-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            GalleryImageGapUnits: item.value
          });
        },
        className: "fb-setting-image-gap-units-switcher ".concat(GalleryImageGapUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-gap-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? GalleryImageGapDesktop : DeviceType === "Tablet" ? GalleryImageGapTablet : GalleryImageGapMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            GalleryImageGapDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            GalleryImageGapTablet: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            GalleryImageGapMobile: value
          });
        }
      },
      min: 0,
      max: 100,
      allowReset: true,
      resetFallbackValue: 24
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Gallery Item", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-gallery-wrapper"
    }, /*#__PURE__*/React.createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.closestCenter,
      onDragEnd: handleDragEnd
    }, /*#__PURE__*/React.createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_4__.SortableContext, {
      items: GalleryItems.map(function (item) {
        return item.id;
      })
    }, /*#__PURE__*/React.createElement("ul", {
      className: "dnd-items-wrapper"
    }, GalleryItems.map(function (item) {
      return /*#__PURE__*/React.createElement(_sortableItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: item.id,
        id: item.id,
        item: item,
        setAttributes: setAttributes,
        DeviceType: DeviceType,
        GalleryType: GalleryType,
        GalleryColumnNumberMobile: GalleryColumnNumberMobile,
        GalleryColumnNumberTablet: GalleryColumnNumberTablet,
        GalleryColumnNumberDesktop: GalleryColumnNumberDesktop,
        handleChangeItem: handleChangeItem,
        handleDeleteItem: handleDeleteItem,
        handleRemoveMedia: handleRemoveMedia
      });
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      isPrimary: true,
      onClick: handleAddItem
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Image", "frontis-blocks"))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Button", "frontis-blocks"),
      className: "fb-setting-gallery-button-toggle",
      checked: GalleryButtonSwitcher,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryButtonSwitcher: value
        });
      }
    }), GalleryButtonSwitcher == true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text", "frontis-blocks"),
      value: GalleryButtonText,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryButtonText: value
        });
      },
      className: "sh-heading-text"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Link", "frontis-blocks"),
      value: GalleryButtonLink,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryButtonLink: value
        });
      },
      className: "sh-heading-text"
    })))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Setting", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-blocks"),
      id: "fb-setting-image-alignment",
      className: "fb-setting-image-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-image-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            ImageAlignment: item.value
          });
        },
        className: "fb-setting-image-alignment-single-btn ".concat(ImageAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-width-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-width-header"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Width", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-width-units"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-image-width-units-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            ImageWidthUnits: item.value
          });
        },
        className: "fb-setting-image-width-units-switcher ".concat(ImageWidthUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-width-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? ImageWidthDesktop : DeviceType === "Tablet" ? ImageWidthTab : ImageWidthMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            ImageWidthDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            ImageWidthTab: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            ImageWidthMobile: value
          });
        }
      },
      min: 1,
      max: ImageWidthUnits === '%' ? 100 : 800,
      allowReset: true,
      resetFallbackValue: 100
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-height-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-height-header"
    }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Height", "frontis-blocks"),
      device: DeviceType,
      deviceHandler: function deviceHandler(newDevice) {
        return setAttributes({
          DeviceType: newDevice
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-height-units"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-image-height-units-wrap"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            ImageHeightUnits: item.value
          });
        },
        className: "fb-setting-image-height-units-switcher ".concat(ImageHeightUnits === item.value ? 'active' : '')
      }, item.label);
    })))), /*#__PURE__*/React.createElement("div", {
      className: "fb-setting-image-height-rangecontrol"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      value: DeviceType === "Desktop" ? ImageHeightDesktop : DeviceType === "Tablet" ? ImageHeightTab : ImageHeightMobile,
      onChange: function onChange(value) {
        if (DeviceType === "Desktop") {
          setAttributes({
            ImageHeightDesktop: value
          });
        } else if (DeviceType === "Tablet") {
          setAttributes({
            ImageHeightTab: value
          });
        } else if (DeviceType === "Mobile") {
          setAttributes({
            ImageHeightMobile: value
          });
        }
      },
      min: 1,
      max: ImageHeightUnits === '%' ? 100 : 800,
      allowReset: true,
      resetFallbackValue: 100
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Object Fit Cover", "frontis-blocks"),
      className: "fb-setting-image-fit-toggle",
      checked: ImageFitCover,
      onChange: function onChange(value) {
        return setAttributes({
          ImageFitCover: value
        });
      }
    })), ImageOverlayStyle == 'overlay' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Styles", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Styles", "frontis-blocks"),
      className: "fb-setting-image-style-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      value: attributes.ImageOverlayStyleType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("From Top", "frontis-blocks"),
        value: "top"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("From Bottom", "frontis-blocks"),
        value: "bottom"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("From Left", "frontis-blocks"),
        value: "left"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("From Right", "frontis-blocks"),
        value: "right"
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In Out", "frontis-blocks"),
        value: "zoominout"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          ImageOverlayStyleType: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Color", "frontis-blocks"),
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
          color: ImageOverlayColor,
          onChange: function onChange(value) {
            return setAttributes({
              ImageOverlayColor: value
            });
          },
          enableAlpha: true
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-color-label"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Colors", "frontis-blocks")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ColorPalette, {
          colors: [{
            color: '#000000b3'
          }, {
            color: '#ebc4c4b3'
          }, {
            color: '#6ca170b3'
          }, {
            color: '#6eb3cbb3'
          }, {
            color: '#b27ecbb3'
          }],
          disableCustomColors: true,
          value: ImageOverlayColor,
          onChange: function onChange(value) {
            return setAttributes({
              ImageOverlayColor: value
            });
          }
        }))));
      }
    }))), GalleryButtonSwitcher == true && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery Button", "frontis-blocks"),
      initialOpen: false,
      className: "fb-setting-gallery-button-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "frontis-blocks"),
      id: "fb-setting-image-alignment",
      className: "fb-setting-image-alignment"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-image-alignment-group-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.TEXT_ALIGN.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            GalleryButtonAlignment: item.value
          });
        },
        className: "fb-setting-image-alignment-single-btn ".concat(GalleryButtonAlignment === item.value ? 'active' : '')
      }, item.label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "frontis-blocks"),
      className: "fb-setting-typography"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-dropdown-icon-wrapper",
      contentClassName: "fb-setting-dropdown-icon-content",
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
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Typography Settings", "frontis-blocks"),
          className: "fb-setting-dropdown-icon-btn"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
          icon: "edit",
          className: "fb-setting-dropdown-icon"
        }));
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-typography-popup"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
          className: "fb-setting-typography-popup-inner"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontfamily-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "frontis-blocks"),
          options: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.FONT_FAMILYS,
          value: GalleryButtonFontFamily,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonFontFamily: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-header"
        }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
          labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "frontis-blocks"),
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
                GalleryButtonFontSizeUnits: item.value
              });
            },
            className: "fb-setting-fontsize-units-switcher ".concat(GalleryButtonFontSizeUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontsize-rangecontrol"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
          value: DeviceType === "Desktop" ? GalleryButtonFontSizeDesktop : DeviceType === "Tablet" ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile,
          onChange: function onChange(value) {
            if (DeviceType === "Desktop") {
              setAttributes({
                GalleryButtonFontSizeDesktop: value
              });
            } else if (DeviceType === "Tablet") {
              setAttributes({
                GalleryButtonFontSizeTablet: value
              });
            } else if (DeviceType === "Mobile") {
              setAttributes({
                GalleryButtonFontSizeMobile: value
              });
            }
          },
          min: 1,
          max: 200,
          allowReset: true,
          resetFallbackValue: 18
        }))), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontweight-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "frontis-blocks"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "frontis-blocks"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "frontis-blocks"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "frontis-blocks"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "frontis-blocks"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "frontis-blocks"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "frontis-blocks"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "frontis-blocks"),
            value: "800"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "frontis-blocks"),
            value: "900"
          }],
          value: GalleryButtonFontWeight,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonFontWeight: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-fontstyle-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Style", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "frontis-blocks"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Italic", "frontis-blocks"),
            value: "italic"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Oblique", "frontis-blocks"),
            value: "oblique"
          }],
          value: GalleryButtonFontStyle,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonFontStyle: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-texttransform-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Transform", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "frontis-blocks"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "frontis-blocks"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "frontis-blocks"),
            value: "lowercase"
          }],
          value: GalleryButtonTextTransform,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonTextTransform: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-textdecoration-wrapper"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Decoration", "frontis-blocks"),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "frontis-blocks"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "frontis-blocks"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "frontis-blocks"),
            value: "overline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "frontis-blocks"),
            value: "line-through"
          }],
          value: GalleryButtonTextDecoration,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonTextDecoration: value
            });
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-header"
        }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
          labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Letter Spacing", "frontis-blocks"),
          device: DeviceType,
          deviceHandler: function deviceHandler(newDevice) {
            return setAttributes({
              DeviceType: newDevice
            });
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-letterspacing-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
          className: "fb-setting-letterspacing-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                GalleryButtonLetterSpacingUnits: item.value
              });
            },
            className: "fb-setting-letterspacing-units-switcher ".concat(GalleryButtonLetterSpacingUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
          value: DeviceType === "Desktop" ? GalleryButtonLetterSpacingDesktop : DeviceType === "Tablet" ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile,
          onChange: function onChange(value) {
            if (DeviceType === "Desktop") {
              setAttributes({
                GalleryButtonLetterSpacingDesktop: value
              });
            } else if (DeviceType === "Tablet") {
              setAttributes({
                GalleryButtonLetterSpacingTablet: value
              });
            } else if (DeviceType === "Mobile") {
              setAttributes({
                GalleryButtonLetterSpacingMobile: value
              });
            }
          },
          min: -10,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: 0
        })), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-wrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-header"
        }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
          labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Height", "frontis-blocks"),
          device: DeviceType,
          deviceHandler: function deviceHandler(newDevice) {
            return setAttributes({
              DeviceType: newDevice
            });
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "fb-setting-lineheight-units"
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
          className: "fb-setting-lineheight-units-wrap"
        }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.UNIT_TYPES.map(function (item, key) {
          return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            key: key,
            onClick: function onClick() {
              return setAttributes({
                GalleryButtonLineHeightUnits: item.value
              });
            },
            className: "fb-setting-lineheight-units-switcher ".concat(GalleryButtonLineHeightUnits === item.value ? 'active' : '')
          }, item.label);
        })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
          value: DeviceType === "Desktop" ? GalleryButtonLineHeightDesktop : DeviceType === "Tablet" ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile,
          onChange: function onChange(value) {
            if (DeviceType === "Desktop") {
              setAttributes({
                GalleryButtonLineHeightDesktop: value
              });
            } else if (DeviceType === "Tablet") {
              setAttributes({
                GalleryButtonLineHeightTablet: value
              });
            } else if (DeviceType === "Mobile") {
              setAttributes({
                GalleryButtonLineHeightMobile: value
              });
            }
          },
          min: 1,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: undefined
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "frontis-blocks"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            GalleryButtonColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(GalleryButtonColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), GalleryButtonColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
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
          color: GalleryButtonColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonColor: value
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
          value: GalleryButtonColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonColor: value
            });
          }
        }))));
      }
    })), GalleryButtonColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
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
          color: GalleryButtonHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonHoverColor: value
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
          value: GalleryButtonHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "frontis-blocks"),
      className: "fb-setting-color-panel-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
      className: "fb-setting-color-panel-btn"
    }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__.NORMAL_HOVER.map(function (item, key) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        key: key,
        onClick: function onClick() {
          return setAttributes({
            GalleryButtonBGColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(GalleryButtonBGColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), GalleryButtonBGColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref6) {
        var isOpen = _ref6.isOpen,
          onToggle = _ref6.onToggle;
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
          color: GalleryButtonBGColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonBGColor: value
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
          value: GalleryButtonBGColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonBGColor: value
            });
          }
        }))));
      }
    })), GalleryButtonBGColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref7) {
        var isOpen = _ref7.isOpen,
          onToggle = _ref7.onToggle;
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
          color: GalleryButtonBGHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonBGHoverColor: value
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
          value: GalleryButtonBGHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryButtonBGHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleButtonMarginUnitsHandler,
      spacingUnits: ButtonMarginUnits,
      spacingDesktop: ButtonDesktopMargin,
      spacingTablet: ButtonTabMargin,
      spacingMobile: ButtonMobileMargin,
      handleSpacingUnitHandler: handleButtonMarginUnitChange,
      spacingCombineBtn: ButtonMarginLink,
      spacingCombineBtnHandler: handleButtonMarginCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleButtonPaddingUnitsHandler,
      spacingUnits: ButtonPaddingUnits,
      spacingDesktop: ButtonDesktopPadding,
      spacingTablet: ButtonTabPadding,
      spacingMobile: ButtonMobilePadding,
      handleSpacingUnitHandler: handleButtonPaddingUnitChange,
      spacingCombineBtn: ButtonPaddingLink,
      spacingCombineBtnHandler: handleButtonPaddingCombineBtn,
      setAttributes: setAttributes
    })), GalleryButtonSwitcher == true && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Border & Border radius", "frontis-blocks"),
      initialOpen: false,
      className: "fb-setting-border-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: ButtonBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          ButtonBorder: value
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
            ButtonBorderColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(ButtonBorderColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), ButtonBorderColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref8) {
        var isOpen = _ref8.isOpen,
          onToggle = _ref8.onToggle;
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
          color: ButtonBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              ButtonBorderColor: value
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
          value: ButtonBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              ButtonBorderColor: value
            });
          }
        }))));
      }
    })), GalleryBorderColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref9) {
        var isOpen = _ref9.isOpen,
          onToggle = _ref9.onToggle;
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
          color: ButtonBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              ButtonBorderHoverColor: value
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
          value: ButtonBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              ButtonBorderHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleButtonBorderUnitsHandler,
      spacingUnits: ButtonBorderUnits,
      spacingDesktop: ButtonDesktopBorderWidth,
      spacingTablet: ButtonTabBorderWidth,
      spacingMobile: ButtonMobileBorderWidth,
      handleSpacingUnitHandler: handleButtonBorderUnitChange,
      spacingCombineBtn: ButtonBorderLink,
      spacingCombineBtnHandler: handleButtonBorderCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius Width", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleButtonBorderRadiusUnitsHandler,
      spacingUnits: ButtonBorderRadiusUnits,
      spacingDesktop: ButtonDesktopBorderRadiusWidth,
      spacingTablet: ButtonTabBorderRadiusWidth,
      spacingMobile: ButtonMobileBorderRadiusWidth,
      handleSpacingUnitHandler: handleButtonBorderRadiusUnitChange,
      spacingCombineBtn: ButtonBorderRadiusLink,
      spacingCombineBtnHandler: handleButtonBorderRadiusCombineBtn,
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
      value: GalleryZIndex,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryZIndex: value === 0 ? undefined : value
        });
      },
      min: 1,
      max: 100,
      step: 1,
      allowReset: true,
      resetFallbackValue: undefined
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding & Margin", "frontis-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleGalleryMarginUnitsHandler,
      spacingUnits: GalleryMarginUnits,
      spacingDesktop: GalleryDesktopMargin,
      spacingTablet: GalleryTabMargin,
      spacingMobile: GalleryMobileMargin,
      handleSpacingUnitHandler: handleGalleryMarginUnitChange,
      spacingCombineBtn: GalleryMarginLink,
      spacingCombineBtnHandler: handleGalleryMarginCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Padding", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleGalleryPaddingUnitsHandler,
      spacingUnits: GalleryPaddingUnits,
      spacingDesktop: GalleryDesktopPadding,
      spacingTablet: GalleryTabPadding,
      spacingMobile: GalleryMobilePadding,
      handleSpacingUnitHandler: handleGalleryPaddingUnitChange,
      spacingCombineBtn: GalleryPaddingLink,
      spacingCombineBtnHandler: handleGalleryPaddingCombineBtn,
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
            GalleryBgColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(GalleryBgColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), GalleryBgColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref10) {
        var isOpen = _ref10.isOpen,
          onToggle = _ref10.onToggle;
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
          color: GalleryBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBgColor: value
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
          value: GalleryBgColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBgColor: value
            });
          }
        }))));
      }
    })), GalleryBgColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref11) {
        var isOpen = _ref11.isOpen,
          onToggle = _ref11.onToggle;
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
          color: GalleryBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBgHoverColor: value
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
          value: GalleryBgHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBgHoverColor: value
            });
          }
        }))));
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Border radius", "frontis-blocks"),
      initialOpen: false,
      className: "fb-setting-border-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Style", "frontis-blocks"),
      value: GalleryBorder,
      options: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.BORDER_STYLES,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryBorder: value
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
            GalleryBorderColorSwitcher: item.value
          });
        },
        className: "fb-setting-color-panel-btn-switchr ".concat(GalleryBorderColorSwitcher === item.value ? 'active' : '')
      }, item.label);
    }))), GalleryBorderColorSwitcher === 'normal' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nomal Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref12) {
        var isOpen = _ref12.isOpen,
          onToggle = _ref12.onToggle;
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
          color: GalleryBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBorderColor: value
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
          value: GalleryBorderColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBorderColor: value
            });
          }
        }))));
      }
    })), GalleryBorderColorSwitcher === 'hover' && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Color", "frontis-blocks"),
      className: "fb-setting-color-setting-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
      className: "fb-setting-color-setting-icon-dropdown",
      contentClassName: "fb-setting-color-setting-icon-dropdown-content",
      popoverProps: {
        placement: 'bottom-start'
      },
      renderToggle: function renderToggle(_ref13) {
        var isOpen = _ref13.isOpen,
          onToggle = _ref13.onToggle;
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
          color: GalleryBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBorderHoverColor: value
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
          value: GalleryBorderHoverColor,
          onChange: function onChange(value) {
            return setAttributes({
              GalleryBorderHoverColor: value
            });
          }
        }))));
      }
    })), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleGalleryBorderUnitsHandler,
      spacingUnits: GalleryBorderUnits,
      spacingDesktop: GalleryDesktopBorderWidth,
      spacingTablet: GalleryTabBorderWidth,
      spacingMobile: GalleryMobileBorderWidth,
      handleSpacingUnitHandler: handleGalleryBorderUnitChange,
      spacingCombineBtn: GalleryBorderLink,
      spacingCombineBtnHandler: handleGalleryBorderCombineBtn,
      setAttributes: setAttributes
    }), /*#__PURE__*/React.createElement(_components_spacing__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius Width", "frontis-blocks"),
      DeviceType: DeviceType,
      spacingUnitsHandler: handleGalleryBorderRadiusUnitsHandler,
      spacingUnits: GalleryBorderRadiusUnits,
      spacingDesktop: GalleryDesktopBorderRadiusWidth,
      spacingTablet: GalleryTabBorderRadiusWidth,
      spacingMobile: GalleryMobileBorderRadiusWidth,
      handleSpacingUnitHandler: handleGalleryBorderRadiusUnitChange,
      spacingCombineBtn: GalleryBorderRadiusLink,
      spacingCombineBtnHandler: handleGalleryBorderRadiusCombineBtn,
      setAttributes: setAttributes
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Responsive Control", "frontis-blocks"),
      initialOpen: false,
      className: "fb-setting-responsive-control-wrapper"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide on Desktop", "frontis-blocks"),
      className: "fb-setting-responsive-control",
      checked: GalleryDesktopSwitcher,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryDesktopSwitcher: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide on Tablet", "frontis-blocks"),
      className: "fb-setting-responsive-control",
      checked: GalleryTabletSwitcher,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryTabletSwitcher: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide on Mobile", "frontis-blocks"),
      className: "fb-setting-responsive-control",
      checked: GalleryMobileSwitcher,
      onChange: function onChange(value) {
        return setAttributes({
          GalleryMobileSwitcher: value
        });
      }
    }))))));
  }))));
}

/***/ }),

/***/ "./src/blocks/image-gallery/save.js":
/*!******************************************!*\
  !*** ./src/blocks/image-gallery/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon_picker_components_icon_picker_controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icon-picker/components/icon-picker/controls/renderIcon */ "./src/components/icon-picker/components/icon-picker/controls/renderIcon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/image-gallery/style.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


 // Ensure you have styles for the front end if needed

function Save(_ref) {
  var attributes = _ref.attributes;
  var blockID = attributes.blockID,
    DeviceType = attributes.DeviceType,
    GalleryType = attributes.GalleryType,
    GalleryItems = attributes.GalleryItems,
    GalleryItemHeightDesktop = attributes.GalleryItemHeightDesktop,
    GalleryItemHeightTablet = attributes.GalleryItemHeightTablet,
    GalleryItemHeightMobile = attributes.GalleryItemHeightMobile,
    GalleryItemHeightUnits = attributes.GalleryItemHeightUnits,
    ImageOverlayStyle = attributes.ImageOverlayStyle,
    ImageOverlayStyleType = attributes.ImageOverlayStyleType,
    ImageOverlayColor = attributes.ImageOverlayColor,
    GalleryColumnNumberDesktop = attributes.GalleryColumnNumberDesktop,
    GalleryColumnNumberTablet = attributes.GalleryColumnNumberTablet,
    GalleryColumnNumberMobile = attributes.GalleryColumnNumberMobile,
    GalleryImageGapDesktop = attributes.GalleryImageGapDesktop,
    GalleryImageGapTablet = attributes.GalleryImageGapTablet,
    GalleryImageGapMobile = attributes.GalleryImageGapMobile,
    GalleryImageGapUnits = attributes.GalleryImageGapUnits,
    GalleryButtonSwitcher = attributes.GalleryButtonSwitcher,
    GalleryButtonText = attributes.GalleryButtonText,
    GalleryButtonLink = attributes.GalleryButtonLink,
    ImageAlignment = attributes.ImageAlignment,
    ImageFitCover = attributes.ImageFitCover,
    ImageWidthDesktop = attributes.ImageWidthDesktop,
    ImageWidthTab = attributes.ImageWidthTab,
    ImageWidthMobile = attributes.ImageWidthMobile,
    ImageWidthUnits = attributes.ImageWidthUnits,
    ImageHeightDesktop = attributes.ImageHeightDesktop,
    ImageHeightTab = attributes.ImageHeightTab,
    ImageHeightMobile = attributes.ImageHeightMobile,
    ImageHeightUnits = attributes.ImageHeightUnits,
    GalleryButtonAlignment = attributes.GalleryButtonAlignment,
    GalleryButtonFontFamily = attributes.GalleryButtonFontFamily,
    GalleryButtonFontSizeDesktop = attributes.GalleryButtonFontSizeDesktop,
    GalleryButtonFontSizeTablet = attributes.GalleryButtonFontSizeTablet,
    GalleryButtonFontSizeMobile = attributes.GalleryButtonFontSizeMobile,
    GalleryButtonFontSizeUnits = attributes.GalleryButtonFontSizeUnits,
    GalleryButtonFontWeight = attributes.GalleryButtonFontWeight,
    GalleryButtonFontStyle = attributes.GalleryButtonFontStyle,
    GalleryButtonTextTransform = attributes.GalleryButtonTextTransform,
    GalleryButtonTextDecoration = attributes.GalleryButtonTextDecoration,
    GalleryButtonLetterSpacingDesktop = attributes.GalleryButtonLetterSpacingDesktop,
    GalleryButtonLetterSpacingTablet = attributes.GalleryButtonLetterSpacingTablet,
    GalleryButtonLetterSpacingMobile = attributes.GalleryButtonLetterSpacingMobile,
    GalleryButtonLetterSpacingUnits = attributes.GalleryButtonLetterSpacingUnits,
    GalleryButtonLineHeightDesktop = attributes.GalleryButtonLineHeightDesktop,
    GalleryButtonLineHeightTablet = attributes.GalleryButtonLineHeightTablet,
    GalleryButtonLineHeightMobile = attributes.GalleryButtonLineHeightMobile,
    GalleryButtonLineHeightUnits = attributes.GalleryButtonLineHeightUnits,
    GalleryButtonColorSwitcher = attributes.GalleryButtonColorSwitcher,
    GalleryButtonColor = attributes.GalleryButtonColor,
    GalleryButtonHoverColor = attributes.GalleryButtonHoverColor,
    GalleryButtonBGColorSwitcher = attributes.GalleryButtonBGColorSwitcher,
    GalleryButtonBGColor = attributes.GalleryButtonBGColor,
    GalleryButtonBGHoverColor = attributes.GalleryButtonBGHoverColor,
    ButtonBorder = attributes.ButtonBorder,
    ButtonBorderColor = attributes.ButtonBorderColor,
    ButtonBorderHoverColor = attributes.ButtonBorderHoverColor,
    ButtonBorderColorSwitcher = attributes.ButtonBorderColorSwitcher,
    ButtonPaddingUnits = attributes.ButtonPaddingUnits,
    ButtonDesktopPadding = attributes.ButtonDesktopPadding,
    ButtonTabPadding = attributes.ButtonTabPadding,
    ButtonMobilePadding = attributes.ButtonMobilePadding,
    ButtonPaddingLink = attributes.ButtonPaddingLink,
    ButtonMarginUnits = attributes.ButtonMarginUnits,
    ButtonDesktopMargin = attributes.ButtonDesktopMargin,
    ButtonTabMargin = attributes.ButtonTabMargin,
    ButtonMobileMargin = attributes.ButtonMobileMargin,
    ButtonMarginLink = attributes.ButtonMarginLink,
    ButtonBorderUnits = attributes.ButtonBorderUnits,
    ButtonDesktopBorderWidth = attributes.ButtonDesktopBorderWidth,
    ButtonTabBorderWidth = attributes.ButtonTabBorderWidth,
    ButtonMobileBorderWidth = attributes.ButtonMobileBorderWidth,
    ButtonBorderLink = attributes.ButtonBorderLink,
    ButtonBorderRadiusUnits = attributes.ButtonBorderRadiusUnits,
    ButtonDesktopBorderRadiusWidth = attributes.ButtonDesktopBorderRadiusWidth,
    ButtonTabBorderRadiusWidth = attributes.ButtonTabBorderRadiusWidth,
    ButtonMobileBorderRadiusWidth = attributes.ButtonMobileBorderRadiusWidth,
    ButtonBorderRadiusLink = attributes.ButtonBorderRadiusLink,
    GalleryZIndex = attributes.GalleryZIndex,
    GalleryPaddingUnits = attributes.GalleryPaddingUnits,
    GalleryDesktopPadding = attributes.GalleryDesktopPadding,
    GalleryTabPadding = attributes.GalleryTabPadding,
    GalleryMobilePadding = attributes.GalleryMobilePadding,
    GalleryPaddingLink = attributes.GalleryPaddingLink,
    GalleryMarginUnits = attributes.GalleryMarginUnits,
    GalleryDesktopMargin = attributes.GalleryDesktopMargin,
    GalleryTabMargin = attributes.GalleryTabMargin,
    GalleryMobileMargin = attributes.GalleryMobileMargin,
    GalleryMarginLink = attributes.GalleryMarginLink,
    GalleryBgColorSwitcher = attributes.GalleryBgColorSwitcher,
    GalleryBgColor = attributes.GalleryBgColor,
    GalleryBgHoverColor = attributes.GalleryBgHoverColor,
    GalleryBorder = attributes.GalleryBorder,
    GalleryBorderColor = attributes.GalleryBorderColor,
    GalleryBorderHoverColor = attributes.GalleryBorderHoverColor,
    GalleryBorderColorSwitcher = attributes.GalleryBorderColorSwitcher,
    GalleryBorderUnits = attributes.GalleryBorderUnits,
    GalleryDesktopBorderWidth = attributes.GalleryDesktopBorderWidth,
    GalleryTabBorderWidth = attributes.GalleryTabBorderWidth,
    GalleryMobileBorderWidth = attributes.GalleryMobileBorderWidth,
    GalleryBorderLink = attributes.GalleryBorderLink,
    GalleryBorderRadiusUnits = attributes.GalleryBorderRadiusUnits,
    GalleryDesktopBorderRadiusWidth = attributes.GalleryDesktopBorderRadiusWidth,
    GalleryTabBorderRadiusWidth = attributes.GalleryTabBorderRadiusWidth,
    GalleryMobileBorderRadiusWidth = attributes.GalleryMobileBorderRadiusWidth,
    GalleryBorderRadiusLink = attributes.GalleryBorderRadiusLink,
    GalleryDesktopSwitcher = attributes.GalleryDesktopSwitcher,
    GalleryTabletSwitcher = attributes.GalleryTabletSwitcher,
    GalleryMobileSwitcher = attributes.GalleryMobileSwitcher;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "fb-gallery-main-wrapper ".concat(blockID)
  });
  var ButtonMarginDesktopWidth = "".concat(ButtonDesktopMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonDesktopMargin.left).concat(ButtonMarginUnits[DeviceType]);
  var ButtonMarginTabletWidth = "".concat(ButtonTabMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonTabMargin.left).concat(ButtonMarginUnits[DeviceType]);
  var ButtonMarginMobileWidth = "".concat(ButtonMobileMargin.top).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.right).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.bottom).concat(ButtonMarginUnits[DeviceType], " ").concat(ButtonMobileMargin.left).concat(ButtonMarginUnits[DeviceType]);
  var ButtonPaddingDesktopWidth = "".concat(ButtonDesktopPadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonDesktopPadding.left).concat(ButtonPaddingUnits[DeviceType]);
  var ButtonPaddingTabletWidth = "".concat(ButtonTabPadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonTabPadding.left).concat(ButtonPaddingUnits[DeviceType]);
  var ButtonPaddingMobileWidth = "".concat(ButtonMobilePadding.top).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.right).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.bottom).concat(ButtonPaddingUnits[DeviceType], " ").concat(ButtonMobilePadding.left).concat(ButtonPaddingUnits[DeviceType]);
  var ButtonBorderDesktopWidth = "".concat(ButtonDesktopBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonDesktopBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);
  var ButtonBorderTabletWidth = "".concat(ButtonTabBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonTabBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);
  var ButtonBorderMobileWidth = "".concat(ButtonMobileBorderWidth.top).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.right).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.bottom).concat(ButtonBorderUnits[DeviceType], " ").concat(ButtonMobileBorderWidth.left).concat(ButtonBorderUnits[DeviceType]);
  var ButtonBorderRadiusDesktopWidth = "".concat(ButtonDesktopBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonDesktopBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);
  var ButtonBorderRadiusTabletWidth = "".concat(ButtonTabBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonTabBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);
  var ButtonBorderRadiusMobileWidth = "".concat(ButtonMobileBorderRadiusWidth.top).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.right).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.bottom).concat(ButtonBorderRadiusUnits[DeviceType], " ").concat(ButtonMobileBorderRadiusWidth.left).concat(ButtonBorderRadiusUnits[DeviceType]);
  var GalleryMarginDesktopWidth = "".concat(GalleryDesktopMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryDesktopMargin.left).concat(GalleryMarginUnits[DeviceType]);
  var GalleryMarginTabletWidth = "".concat(GalleryTabMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryTabMargin.left).concat(GalleryMarginUnits[DeviceType]);
  var GalleryMarginMobileWidth = "".concat(GalleryMobileMargin.top).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.right).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.bottom).concat(GalleryMarginUnits[DeviceType], " ").concat(GalleryMobileMargin.left).concat(GalleryMarginUnits[DeviceType]);
  var GalleryPaddingDesktopWidth = "".concat(GalleryDesktopPadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryDesktopPadding.left).concat(GalleryPaddingUnits[DeviceType]);
  var GalleryPaddingTabletWidth = "".concat(GalleryTabPadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryTabPadding.left).concat(GalleryPaddingUnits[DeviceType]);
  var GalleryPaddingMobileWidth = "".concat(GalleryMobilePadding.top).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.right).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.bottom).concat(GalleryPaddingUnits[DeviceType], " ").concat(GalleryMobilePadding.left).concat(GalleryPaddingUnits[DeviceType]);
  var GalleryBorderDesktopWidth = "".concat(GalleryDesktopBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryDesktopBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);
  var GalleryBorderTabletWidth = "".concat(GalleryTabBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryTabBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);
  var GalleryBorderMobileWidth = "".concat(GalleryMobileBorderWidth.top).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.right).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.bottom).concat(GalleryBorderUnits[DeviceType], " ").concat(GalleryMobileBorderWidth.left).concat(GalleryBorderUnits[DeviceType]);
  var GalleryBorderRadiusDesktopWidth = "".concat(GalleryDesktopBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryDesktopBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  var GalleryBorderRadiusTabletWidth = "".concat(GalleryTabBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryTabBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  var GalleryBorderRadiusMobileWidth = "".concat(GalleryMobileBorderRadiusWidth.top).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.right).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.bottom).concat(GalleryBorderRadiusUnits[DeviceType], " ").concat(GalleryMobileBorderRadiusWidth.left).concat(GalleryBorderRadiusUnits[DeviceType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n                .fb-gallery-main-wrapper.".concat(blockID, " {\n                    position: relative;\n                    ").concat(GalleryBgColor !== undefined ? "background-color: ".concat(GalleryBgColor, ";") : '', ";\n                    padding: ").concat(GalleryPaddingDesktopWidth, ";\n                    margin: ").concat(GalleryMarginDesktopWidth, ";\n                    border-style: ").concat(GalleryBorder, ";\n                    border-width: ").concat(GalleryBorderDesktopWidth, ";\n                    ").concat(GalleryBorderColor !== undefined ? "border-color: ".concat(GalleryBorderColor, ";") : '', ";\n                    border-radius: ").concat(GalleryBorderRadiusDesktopWidth, ";\n                    transition: all .3s ease-in-out;\n                    ").concat(GalleryZIndex !== undefined ? "z-index: ".concat(GalleryZIndex) : '', ";\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, ":hover {\n                    ").concat(GalleryBgHoverColor !== undefined ? "background-color: ".concat(GalleryBgHoverColor, ";") : '', ";\n                    ").concat(GalleryBorderHoverColor !== undefined ? "border-color: ".concat(GalleryBorderHoverColor, ";") : '', ";\n                }\n\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items {\n                    grid-template-columns: repeat(").concat(DeviceType == 'Desktop' ? GalleryColumnNumberDesktop : DeviceType == 'Tablet' ? GalleryColumnNumberTablet : GalleryColumnNumberMobile, ", 1fr);\n                    grid-gap: ").concat(DeviceType == 'Desktop' ? GalleryImageGapDesktop : DeviceType == 'Tablet' ? GalleryImageGapTablet : GalleryImageGapMobile).concat(GalleryImageGapUnits, ";\n                    grid-auto-rows: ").concat(DeviceType == 'Desktop' ? GalleryItemHeightDesktop : DeviceType == 'Tablet' ? GalleryItemHeightTablet : GalleryItemHeightMobile).concat(GalleryItemHeightUnits, ";\n                }\n                \n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {\n                    position: absolute;\n                    top: 0;\n                    ").concat(ImageAlignment === 'left' && 'left: 0', ";\n                    ").concat(ImageAlignment === 'right' && 'right: 0; left: unset', ";\n                    ").concat(ImageAlignment === 'center' && 'left: 50%', ";\n                    ").concat(ImageAlignment === 'center' && 'transform: translateX(-50%);', ";\n                    width: ").concat(DeviceType == 'Desktop' ? ImageWidthDesktop : DeviceType == 'Tablet' ? ImageWidthTab : ImageWidthMobile).concat(ImageWidthUnits, ";\n                    height: ").concat(DeviceType == 'Desktop' ? ImageHeightDesktop : DeviceType == 'Tablet' ? ImageHeightTab : ImageHeightMobile).concat(ImageHeightUnits, ";\n                    ").concat(ImageFitCover === true && 'object-fit: cover', ";\n                    ").concat(ImageOverlayStyle == 'black_white' && 'filter: grayscale(100%)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyle == 'black_white' && 'filter: grayscale(0)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {\n                    ").concat(GalleryButtonSwitcher == true && 'display: flex', ";\n                    ").concat(GalleryButtonSwitcher == true && "justify-content: ".concat(GalleryButtonAlignment), ";\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                    ").concat(GalleryButtonSwitcher == true && "border-style: ".concat(ButtonBorder), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher !== undefined && "border-color: ".concat(ButtonBorderColor), ";\n                    ").concat(GalleryButtonSwitcher == true && "border-width: ".concat(ButtonBorderDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingDesktopWidth), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-family: ".concat(GalleryButtonFontFamily), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-size: ".concat(DeviceType == 'Desktop' ? GalleryButtonFontSizeDesktop : DeviceType == 'Tablet' ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile).concat(GalleryButtonFontSizeUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-weight: ".concat(GalleryButtonFontWeight), ";\n                    ").concat(GalleryButtonSwitcher == true && "font-style: ".concat(GalleryButtonFontStyle), ";\n                    ").concat(GalleryButtonSwitcher == true && "text-transform: ".concat(GalleryButtonTextTransform), ";\n                    ").concat(GalleryButtonSwitcher == true && "text-decoration: ".concat(GalleryButtonTextDecoration), ";\n                    ").concat(GalleryButtonSwitcher == true && "letter-spacing: ".concat(DeviceType == 'Desktop' ? GalleryButtonLetterSpacingDesktop : DeviceType == 'Tablet' ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile).concat(GalleryButtonLetterSpacingUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && "line-height: ".concat(DeviceType == 'Desktop' ? GalleryButtonLineHeightDesktop : DeviceType == 'Tablet' ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile).concat(GalleryButtonLineHeightUnits), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && "color: ".concat(GalleryButtonColor), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && "background-color: ".concat(GalleryButtonBGColor), ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && "color: ".concat(GalleryButtonHoverColor), ";\n                    ").concat(GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && "background-color: ".concat(GalleryButtonBGHoverColor), ";\n                    transition: all 0.3s ease-in-out;\n                }\n                    \n                @media only screen and (max-width: 1024px) {\n                    .fb-gallery-main-wrapper.").concat(blockID, " {\n                        padding: ").concat(GalleryPaddingTabletWidth, ";\n                        margin: ").concat(GalleryMarginTabletWidth, ";\n                        border-radius: ").concat(GalleryBorderRadiusTabletWidth, ";\n                    }\n\n                    .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                        ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusTabletWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginTabletWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingTabletWidth), ";\n                    }\n                }\n\n                @media only screen and (max-width: 767px) {\n                    .fb-gallery-main-wrapper.").concat(blockID, " {\n                        padding: ").concat(GalleryPaddingMobileWidth, ";\n                        margin: ").concat(GalleryMarginMobileWidth, ";\n                        border-radius: ").concat(GalleryBorderRadiusMobileWidth, ";\n                    }\n\n                    .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {\n                        ").concat(GalleryButtonSwitcher == true && "border-radius: ".concat(ButtonBorderRadiusMobileWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "margin: ".concat(ButtonMarginMobileWidth), ";\n                        ").concat(GalleryButtonSwitcher == true && "padding: ".concat(ButtonPaddingMobileWidth), ";\n                    }\n                }\n\n            "), ImageOverlayStyle === 'overlay' && "\n                .fb-gallery-main-wrapper.".concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.001)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {\n                    ").concat(ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.05)', ";\n                    transition: all 0.3s ease-in-out;\n                }\n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {\n                    position: absolute;\n                    content: '';\n                    ").concat(ImageOverlayStyleType === 'top' && 'top: -100%', ";\n                    ").concat(ImageOverlayStyleType === 'top' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType === 'bottom' && 'top: 100%', ";\n                    ").concat(ImageOverlayStyleType === 'bottom' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType === 'left' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType === 'left' && 'left: -100%', ";\n                    ").concat(ImageOverlayStyleType === 'right' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType === 'right' && 'left: 100%', ";\n                    width: 100%;\n                    height: 100%;\n                    background-color: ").concat(ImageOverlayColor, ";\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: all 0.3s ease-in-out;\n                }  \n                .fb-gallery-main-wrapper.").concat(blockID, " .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {\n                    ").concat(ImageOverlayStyleType == 'top' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType == 'bottom' && 'top: 0', ";\n                    ").concat(ImageOverlayStyleType == 'left' && 'left: 0', ";\n                    ").concat(ImageOverlayStyleType == 'right' && 'left: 0', ";\n                    visibility: visible;\n                    opacity: 1;\n                    transition: all 0.3s ease-in-out;\n                }\n            ")), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-wrapper "
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-items"
  }, GalleryItems.map(function (item) {
    var _item$image, _item$row, _item$row2, _item$row3, _item$row4, _item$row5, _item$row6, _item$column, _item$column2, _item$column3, _item$column4, _item$column5, _item$column6;
    return (item === null || item === void 0 || (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.url) && /*#__PURE__*/React.createElement("a", {
      key: item.id,
      className: "fb-image-gallery-item",
      style: _objectSpread({}, GalleryType === 'mesonry' && {
        gridRow: DeviceType === 'Desktop' ? ((_item$row = item.row) === null || _item$row === void 0 ? void 0 : _item$row.desktop) > 1 ? "span ".concat((_item$row2 = item.row) === null || _item$row2 === void 0 ? void 0 : _item$row2.desktop) : 'unset' : DeviceType === 'Tablet' ? ((_item$row3 = item.row) === null || _item$row3 === void 0 ? void 0 : _item$row3.tablet) > 1 ? "span ".concat((_item$row4 = item.row) === null || _item$row4 === void 0 ? void 0 : _item$row4.tablet) : 'unset' : ((_item$row5 = item.row) === null || _item$row5 === void 0 ? void 0 : _item$row5.mobile) > 1 ? "span ".concat((_item$row6 = item.row) === null || _item$row6 === void 0 ? void 0 : _item$row6.mobile) : 'unset',
        gridColumn: DeviceType === 'Desktop' ? ((_item$column = item.column) === null || _item$column === void 0 ? void 0 : _item$column.desktop) > 1 ? "span ".concat((_item$column2 = item.column) === null || _item$column2 === void 0 ? void 0 : _item$column2.desktop) : 'unset' : DeviceType === 'Tablet' ? ((_item$column3 = item.column) === null || _item$column3 === void 0 ? void 0 : _item$column3.tablet) > 1 ? "span ".concat((_item$column4 = item.column) === null || _item$column4 === void 0 ? void 0 : _item$column4.tablet) : 'unset' : ((_item$column5 = item.column) === null || _item$column5 === void 0 ? void 0 : _item$column5.mobile) > 1 ? "span ".concat((_item$column6 = item.column) === null || _item$column6 === void 0 ? void 0 : _item$column6.mobile) : 'unset'
      })
    }, /*#__PURE__*/React.createElement("img", {
      className: "fb-image-gallery-image",
      src: item.image.url,
      alt: item.image.alt
    }), ImageOverlayStyle === 'overlay' && /*#__PURE__*/React.createElement("span", {
      className: "fb-image-overlay"
    }));
  })), GalleryButtonSwitcher && /*#__PURE__*/React.createElement("div", {
    className: "fb-image-gallery-btn-wrapper"
  }, /*#__PURE__*/React.createElement("a", {
    href: GalleryButtonLink,
    className: "fb-image-gallery-btn"
  }, GalleryButtonText))))));
}

/***/ }),

/***/ "./src/blocks/image-gallery/sortableItem.js":
/*!**************************************************!*\
  !*** ./src/blocks/image-gallery/sortableItem.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_responsive_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/responsive-control */ "./src/components/responsive-control/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function SortableItem(_ref) {
  var _item$column, _item$column2, _item$column3, _item$row, _item$row2, _item$row3;
  var DeviceType = _ref.DeviceType,
    GalleryColumnNumberMobile = _ref.GalleryColumnNumberMobile,
    GalleryColumnNumberTablet = _ref.GalleryColumnNumberTablet,
    GalleryColumnNumberDesktop = _ref.GalleryColumnNumberDesktop,
    GalleryType = _ref.GalleryType,
    id = _ref.id,
    item = _ref.item,
    handleChangeItem = _ref.handleChangeItem,
    handleDeleteItem = _ref.handleDeleteItem,
    handleRemoveMedia = _ref.handleRemoveMedia,
    setAttributes = _ref.setAttributes;
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
  // const [FeatureIconAlign, setFeatureIconAlign] = useState( ICON_ALIGN[1].value );

  var style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Transform.toString(transform),
    transition: transition
  };
  var toggleOpen = function toggleOpen() {
    return setIsOpen(!isOpen);
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
  }, item.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gallery Image", "frontis-blocks")), /*#__PURE__*/React.createElement("span", _extends({
    className: "sortable-sort"
  }, listeners, {
    style: {
      cursor: 'grab'
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    icon: "move",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort", "frontis-blocks")
  })), /*#__PURE__*/React.createElement("span", {
    className: "sortable-delete"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "frontis-blocks"),
    onClick: function onClick() {
      return handleDeleteItem(item.id);
    }
  }))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "sortable-item-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-image-upload-field-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: function onSelect(media) {
      return handleChangeItem(item.id, 'image', {
        id: media.id,
        url: media.url,
        alt: media.alt,
        width: media.width,
        height: media.height
      });
    },
    type: "image",
    value: item.image.id,
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: item.image.id == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, item.image.id == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image', 'frontis-block'), item.image.id != 0 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveWrapper, {
        naturalWidth: item.image.width,
        naturalHeight: item.image.height
      }, /*#__PURE__*/React.createElement("img", {
        src: item.image.url
      })));
    }
  })), item.image.id != 0 && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalHStack, {
    className: "editor-post-featured-image__actions"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    className: "editor-post-featured-image__action",
    onClick: function onClick() {
      return handleRemoveMedia(item.id, 'image', {
        id: 0,
        url: '',
        alt: '',
        width: '',
        height: ''
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'frontis-block')), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace image', 'frontis-block'),
    value: item.image.id,
    onSelect: function onSelect(media) {
      return handleChangeItem(item.id, 'image', {
        id: media.id,
        url: media.url,
        alt: media.alt,
        width: media.width,
        height: media.height
      });
    },
    type: "image",
    render: function render(_ref3) {
      var open = _ref3.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "editor-post-featured-image__action",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace', 'frontis-block'));
    }
  })))), GalleryType == 'mesonry' && /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-header"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Span", "frontis-blocks"),
    device: DeviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        DeviceType: newDevice
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-rangecontrol"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: DeviceType === "Desktop" ? (_item$column = item.column) === null || _item$column === void 0 ? void 0 : _item$column.desktop : DeviceType === "Tablet" ? (_item$column2 = item.column) === null || _item$column2 === void 0 ? void 0 : _item$column2.tablet : (_item$column3 = item.column) === null || _item$column3 === void 0 ? void 0 : _item$column3.mobile,
    onChange: function onChange(value) {
      if (DeviceType === "Desktop") {
        handleChangeItem(item.id, 'column', _objectSpread(_objectSpread({}, item.column), {}, {
          desktop: value
        }));
      } else if (DeviceType === "Tablet") {
        handleChangeItem(item.id, 'column', _objectSpread(_objectSpread({}, item.column), {}, {
          tablet: value
        }));
      } else if (DeviceType === "Mobile") {
        handleChangeItem(item.id, 'column', _objectSpread(_objectSpread({}, item.column), {}, {
          mobile: value
        }));
      }
    },
    min: 1,
    max: DeviceType === "Desktop" ? GalleryColumnNumberDesktop : DeviceType === "Tablet" ? GalleryColumnNumberTablet : GalleryColumnNumberMobile,
    allowReset: true,
    resetFallbackValue: 0
  }))), GalleryType == 'mesonry' && /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-header"
  }, /*#__PURE__*/React.createElement(_Components_responsive_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Span", "frontis-blocks"),
    device: DeviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        DeviceType: newDevice
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fb-setting-columns-rangecontrol"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    value: DeviceType === "Desktop" ? (_item$row = item.row) === null || _item$row === void 0 ? void 0 : _item$row.desktop : DeviceType === "Tablet" ? (_item$row2 = item.row) === null || _item$row2 === void 0 ? void 0 : _item$row2.tablet : (_item$row3 = item.row) === null || _item$row3 === void 0 ? void 0 : _item$row3.mobile,
    onChange: function onChange(value) {
      if (DeviceType === "Desktop") {
        handleChangeItem(item.id, 'row', _objectSpread(_objectSpread({}, item.row), {}, {
          desktop: value
        }));
      } else if (DeviceType === "Tablet") {
        handleChangeItem(item.id, 'row', _objectSpread(_objectSpread({}, item.row), {}, {
          tablet: value
        }));
      } else if (DeviceType === "Mobile") {
        handleChangeItem(item.id, 'row', _objectSpread(_objectSpread({}, item.row), {}, {
          mobile: value
        }));
      }
    },
    min: 1,
    max: 4,
    allowReset: true,
    resetFallbackValue: 0
  }))))));
}

/***/ }),

/***/ "./src/components/icon-picker/components/icon-picker/controls/parseIcon.js":
/*!*********************************************************************************!*\
  !*** ./src/components/icon-picker/components/icon-picker/controls/parseIcon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _parseIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseIcon */ "./src/components/icon-picker/components/icon-picker/controls/parseIcon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */


var _window$FrontisBlocks = window.FrontisBlocksData,
  ajaxUrl = _window$FrontisBlocks.ajaxUrl,
  nonce = _window$FrontisBlocks.nonce;
var url = 'https://svg-icons.boomdevs.com/';
var token = 'b9e9d7516943744aed44d0be39217694a92784ce737e07c9e12397eca99fded0';

// Function to check if data exists in localStorage
var getDataFromLocalStorage = function getDataFromLocalStorage() {
  var data = localStorage.getItem('iconData');
  data = data ? JSON.parse(data) : null;
  var customIconData = localStorage.getItem('iconCustomData');
  customIconData = customIconData ? JSON.parse(customIconData) : null;
  return _objectSpread(_objectSpread({}, data), customIconData);
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
    localStorage.setItem('iconData', JSON.stringify(data));
    return data;
  })["catch"](function (error) {
    console.error('Error fetching SVG icons:', error);
    return null;
  });
};
var fetchCustomIcons = function fetchCustomIcons() {
  return new Promise(function (resolve, reject) {
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_custom_icons_category',
        security: nonce
      }
    }).done(function (response) {
      if (response && response.data) {
        localStorage.setItem('iconCustomData', JSON.stringify(response.data.icons));
        resolve(response.data.icons);
      } else {
        resolve(null); // Resolve with null if no icons data
      }
    }).fail(function (error) {
      console.error('Error fetching custom icons:', error);
      reject(error); // Reject the promise if there is an error
    });
  });
};
function generateSvg(svgArgData) {
  var svgData = svgArgData.svg.solid;
  var width = svgData.width;
  var height = svgData.height;
  var viewBox = svgData.viewBox;
  var elements = svgData.elements;

  // Start the SVG string
  var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(width, "\" height=\"").concat(height, "\" viewBox=\"").concat(viewBox, "\">\n");

  // Loop through each element and create the appropriate SVG tag
  elements.forEach(function (element) {
    var type = element.type;
    var attributes = element.attributes;

    // Start the tag for the current SVG element
    svg += "<".concat(type);

    // Add each attribute
    for (var attr in attributes) {
      if (attributes.hasOwnProperty(attr)) {
        svg += " ".concat(attr, "=\"").concat(attributes[attr], "\""); // Use double quotes for HTML attributes
      }
    }

    // Close the tag for the current SVG element
    svg += " />\n";
  });

  // Close the SVG tag
  svg += "</svg>";

  // Return the complete HTML string
  return svg;
}

// Get data from localStorage or fetch from API
function renderSVG(svg) {
  var _fontAwesome$svg;
  var setAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  svg = (0,_parseIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(svg);
  var data = getDataFromLocalStorage();
  if (!data) {
    var customIconData = '';
    fetchCustomIcons().then(function (icons) {
      if (icons) {
        customIconData = icons;
      }
    });
    fetchFromApi().then(function (fetchedData) {
      data = fetchedData;
    });
    data = _objectSpread(_objectSpread({}, data), customIconData);
  }
  var svgIcon = data;
  if (!svgIcon) {
    return;
  }
  var fontAwesome;
  fontAwesome = svgIcon[svg];
  if (!fontAwesome) {
    return null;
  }
  var fontAwesomeSvg = (_fontAwesome$svg = fontAwesome.svg) !== null && _fontAwesome$svg !== void 0 && _fontAwesome$svg.brands ? fontAwesome.svg.brands : fontAwesome.svg.solid;
  var viewBox = "0 0 ".concat(fontAwesomeSvg.width, " ").concat(fontAwesomeSvg.height);
  var path = fontAwesomeSvg.path;
  var align = null;
  if (fontAwesome.hasOwnProperty('custom_icons') && fontAwesome.custom_icons) {
    return generateSvg(fontAwesome);
  } else {
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSVG);

/***/ }),

/***/ "./src/components/responsive-control/index.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-control/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FB_ResponsiveControl)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);



function FB_ResponsiveControl(_ref) {
  var labelText = _ref.labelText,
    device = _ref.device,
    deviceHandler = _ref.deviceHandler;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store),
    setDeviceType = _useDispatch.setDeviceType;
  var handleDevice = function handleDevice(deviceName) {
    deviceHandler(deviceName);
    setDeviceType(deviceName);
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
    deviceType = _ref.deviceType,
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
    if (deviceType === 'Desktop') {
      return spacingDesktop[position];
    } else if (deviceType === 'Tablet') {
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
    device: deviceType,
    deviceHandler: function deviceHandler(newDevice) {
      return setAttributes({
        deviceType: newDevice
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
      className: "fb-setting-units-type-switcher ".concat(spacingUnits[deviceType] === item.value ? 'active' : '')
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

/***/ "./src/blocks/image-gallery/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/image-gallery/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/image-gallery/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/image-gallery/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spacing/editor.lazy.scss":
/*!*************************************************!*\
  !*** ./src/components/spacing/editor.lazy.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/image-gallery/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/image-gallery/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"frontis-blocks/image-gallery","version":"1.0.0","title":"Image Gallery","category":"frontis-blocks","icon":"editor-ul","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"anchor":false,"align":["wide","full"],"customClassName":false},"textdomain":"frontis-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/image-gallery/index": 0,
/******/ 			"blocks/image-gallery/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/image-gallery/style-index"], () => (__webpack_require__("./src/blocks/image-gallery/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map