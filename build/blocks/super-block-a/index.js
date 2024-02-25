/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/super-block-a/SaveContent.js":
/*!*************************************************!*\
  !*** ./src/blocks/super-block-a/SaveContent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function content({
  get,
  attributes,
  blockProps
}) {
  // useEffect(() => {
  // 	console.log('content', attributes);
  // }, [attributes]);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('I am super Block #A!', 'gb-superset'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "content: ", get('content')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, JSON.stringify({
    attributes
  }, null, 2)));
}

/***/ }),

/***/ "./src/gb-superset/blockType.js":
/*!**************************************!*\
  !*** ./src/gb-superset/blockType.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ blockType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gb-superset/supports/control */ "./src/gb-superset/supports/control/index.js");






// Defining the blockType class
class blockType {
  // Constructor
  constructor() {
    this.metadata = null;
    this.EditContent = null;
    this.SaveContent = this.throwError('You have to implement the method saveContent!');
    this.InspectorControls = this.throwError('You have to implement the method InspectorControls!');
    this.EditorControls = () => null;
  }

  // Method to throw an error
  throwError(message) {
    return () => {
      throw new Error(message);
    };
  }

  // Method to edit the block
  edit = ({
    attributes,
    setAttributes
  }) => {
    var _this$EditContent;
    // Helper methods to set and get attributes
    const set = (name, scope, value) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.setAttribute)(attributes, setAttributes, name, scope, value);
    const get = (name, scope) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.getAttribute)(attributes, name, scope);

    // Context for the block
    this.ctx = {
      attributes,
      setAttributes,
      set,
      get
    };

    // Block properties
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();

    // Content to render
    const RenderContent = (_this$EditContent = this.EditContent) !== null && _this$EditContent !== void 0 ? _this$EditContent : this.SaveContent;

    // Returning the JSX for the block
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.ControlContext.Provider, {
      value: {
        attributes,
        setAttributes,
        set,
        get
      }
    }, this.InspectorControls())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.ControlContext.Provider, {
      value: {
        attributes,
        setAttributes,
        set,
        get
      }
    }, this.EditorControls())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderContent, {
      attributes,
      get,
      blockProps
    })));
  };

  // Method to register the block
  register = () => {
    // If metadata is not set, throw an error
    if (!this.metadata) {
      throw new Error('You have to set the block metadata!');
    }

    // Content to render
    const RenderContent = this.SaveContent;

    // Registering the block
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(this.metadata.name, {
      edit: this.edit,
      save: ({
        attributes
      }) => {
        // Block properties
        const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();

        // Helper method to get attributes
        const get = (name, scope) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.getAttribute)(attributes, name, scope);

        // Returning the JSX for the block
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          ...blockProps
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderContent, {
          attributes,
          get,
          blockProps
        }));
      }
    });
  };
}

/***/ }),

/***/ "./src/gb-superset/controls/inspector/Panel.js":
/*!*****************************************************!*\
  !*** ./src/gb-superset/controls/inspector/Panel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    ...props
  }, props.children);
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/TextControl.js":
/*!***********************************************************!*\
  !*** ./src/gb-superset/controls/inspector/TextControl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gb-superset/supports/control */ "./src/gb-superset/supports/control/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__.ControlContainer, {
    ...props,
    valueProp: 'value',
    changeProp: 'onChange'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    ...props
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/icon-picker/index.js":
/*!*****************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/icon-picker/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gb-superset/supports/control */ "./src/gb-superset/supports/control/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/index.js":
/*!*****************************************************!*\
  !*** ./src/gb-superset/controls/inspector/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPicker: () => (/* reexport safe */ _icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Panel: () => (/* reexport safe */ _Panel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   TextControl: () => (/* reexport safe */ _TextControl__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "./src/gb-superset/controls/inspector/Panel.js");
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextControl */ "./src/gb-superset/controls/inspector/TextControl.js");
/* harmony import */ var _icon_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-picker */ "./src/gb-superset/controls/inspector/icon-picker/index.js");




/***/ }),

/***/ "./src/gb-superset/supports/control/ControlContainer.js":
/*!**************************************************************!*\
  !*** ./src/gb-superset/supports/control/ControlContainer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const {
    get,
    set
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "control-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(props.children, child => {
    let controlGroups = [react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      ...child.props,
      [props.valueProp]: get(props.name),
      [props.changeProp]: value => set(props.name, 'desktop', value)
    })];
    if (props.responsive === true) {
      controlGroups = [...controlGroups, react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        ...child.props,
        [props.valueProp]: get(props.name, 'tablet'),
        [props.changeProp]: value => set(props.name, 'tablet', value)
      }), react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        ...child.props,
        [props.valueProp]: get(props.name, 'mobile'),
        [props.changeProp]: value => set(props.name, 'mobile', value)
      })];
    }
    return controlGroups;
  }));
});

/***/ }),

/***/ "./src/gb-superset/supports/control/ControlContext.js":
/*!************************************************************!*\
  !*** ./src/gb-superset/supports/control/ControlContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// MyContext.js

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));

/***/ }),

/***/ "./src/gb-superset/supports/control/getAttribute.js":
/*!**********************************************************!*\
  !*** ./src/gb-superset/supports/control/getAttribute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((attributes, name, scope) => {
  var _scope;
  scope = (_scope = scope) !== null && _scope !== void 0 ? _scope : 'desktop';
  let value = attributes[name]?.[scope];
  if (value === undefined) {
    value = attributes[name]?.['desktop'];
  }
  return value;
});

/***/ }),

/***/ "./src/gb-superset/supports/control/index.js":
/*!***************************************************!*\
  !*** ./src/gb-superset/supports/control/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlContainer: () => (/* reexport safe */ _ControlContainer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ControlContext: () => (/* reexport safe */ _ControlContext__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   getAttribute: () => (/* reexport safe */ _getAttribute__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   setAttribute: () => (/* reexport safe */ _setAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");
/* harmony import */ var _getAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttribute */ "./src/gb-superset/supports/control/getAttribute.js");
/* harmony import */ var _setAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setAttribute */ "./src/gb-superset/supports/control/setAttribute.js");
/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlContainer */ "./src/gb-superset/supports/control/ControlContainer.js");






/***/ }),

/***/ "./src/gb-superset/supports/control/setAttribute.js":
/*!**********************************************************!*\
  !*** ./src/gb-superset/supports/control/setAttribute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((attributes, setAttributes, name, scope, value) => {
  // get the attributeObject from the attributes
  let attributeObject = attributes[name];

  // check if the attributeObject is actually an object
  if (attributeObject === undefined || typeof attributeObject !== 'object') {
    attributeObject = {};
  }

  // set the attributeObject to the attributes
  setAttributes({
    [name]: {
      ...attributeObject,
      [scope]: value
    }
  });
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/super-block-a/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/super-block-a/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gb-superset/super-block-a","version":"0.1.0","title":"Super Block #A","category":"widgets","icon":"smiley","description":"Example block scaffolded with Gutenberg Superset.","textdomain":"gb-superset","editorScript":"file:./index.js","attributes":{"content":{"type":"object"},"align":{"type":"string"}}}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/blocks/super-block-a/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/super-block-a/block.json");
/* harmony import */ var _SaveContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaveContent */ "./src/blocks/super-block-a/SaveContent.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gb_superset_blockType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gb-superset/blockType */ "./src/gb-superset/blockType.js");
/* harmony import */ var _gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gb-superset/controls/inspector */ "./src/gb-superset/controls/inspector/index.js");







const block = class extends _gb_superset_blockType__WEBPACK_IMPORTED_MODULE_5__["default"] {
  metadata = _block_json__WEBPACK_IMPORTED_MODULE_1__;
  InspectorControls = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.Panel, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('My control')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Text Field",
      help: "Additional help text",
      name: "content",
      responsive: true,
      state: ['hover', 'focus']
    })));
  };
  EditorControls = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.AlignmentControl, {
      value: this.ctx.attributes.align,
      onChange: v => this.ctx.setAttributes({
        align: v
      })
    }));
  };

  // EditContent = ({ attributes, blockProps }) => {
  // 	return (
  // 		<div { ...blockProps }>
  // 			foo
  // 		</div>
  // 	);
  // }

  SaveContent = _SaveContent__WEBPACK_IMPORTED_MODULE_2__["default"];
};
new block().register();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map