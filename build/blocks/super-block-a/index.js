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
    const set = (name, value, scope) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.setObject)(name, value, scope, attributes, setAttributes);
    const get = (name, scope) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.getObject)(name, scope, attributes);

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
      value: this.ctx
    }, this.InspectorControls())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.ControlContext.Provider, {
      value: this.ctx
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
        const get = (name, scope) => (0,_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_4__.getObject)(name, scope, attributes);

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

/***/ "./src/gb-superset/controls/inspector/TestGroupControl.js":
/*!****************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/TestGroupControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gb-superset/controls/inspector */ "./src/gb-superset/controls/inspector/index.js");
/* harmony import */ var _gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gb-superset/supports/control */ "./src/gb-superset/supports/control/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__.GroupControlContainer, {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    ...props,
    name: 'control1',
    label: "My Text Field 1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    ...props,
    name: 'control2',
    label: "My Text Field 2"
  }));
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
/* harmony export */   TestGroupControl: () => (/* reexport safe */ _TestGroupControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   TextControl: () => (/* reexport safe */ _TextControl__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "./src/gb-superset/controls/inspector/Panel.js");
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextControl */ "./src/gb-superset/controls/inspector/TextControl.js");
/* harmony import */ var _icon_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-picker */ "./src/gb-superset/controls/inspector/icon-picker/index.js");
/* harmony import */ var _TestGroupControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestGroupControl */ "./src/gb-superset/controls/inspector/TestGroupControl.js");





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
/* harmony import */ var _getObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getObject */ "./src/gb-superset/supports/control/getObject.js");
/* harmony import */ var _setObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setObject */ "./src/gb-superset/supports/control/setObject.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  let {
    get,
    set
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  if (props.attributes && props.setAttributes) {
    get = (name, scope) => (0,_getObject__WEBPACK_IMPORTED_MODULE_2__["default"])(name, scope, props.attributes);
    set = (name, value, scope) => (0,_setObject__WEBPACK_IMPORTED_MODULE_3__["default"])(name, value, scope, props.attributes, props.setAttributes);
  }

  // Create a state variable
  const [scope, setScope] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('desktop');
  const scopeHandler = (scope, e) => {
    e.preventDefault();
    setScope(scope);
  };

  // Use useEffect to track changes to scope
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('scope has changed', scope);
  }, [scope]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gb-superset-control-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('desktop', e)
  }, "Desktop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('tablet', e)
  }, "Tablet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('mobile', e)
  }, "Mobile")), React.Children.map(props.children, child => {
    let controlGroups = [React.cloneElement(child, {
      ...child.props,
      [props.valueProp]: get(props.name, scope),
      [props.changeProp]: value => set(props.name, value, scope)
    })];
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

/***/ "./src/gb-superset/supports/control/GroupControlContainer.js":
/*!*******************************************************************!*\
  !*** ./src/gb-superset/supports/control/GroupControlContainer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  var _get;
  const {
    get,
    set
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const [groupObject, setGroupObjectSingle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_get = get(props.name, null)) !== null && _get !== void 0 ? _get : {});
  const setGroupObject = newObject => {
    setGroupObjectSingle({
      ...groupObject,
      ...newObject
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof groupObject === 'object') {
      set(props.name, groupObject, null);
    }
  }, [groupObject]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gb-superset-group-control-container"
  }, React.Children.map(props.children, child => {
    let controlGroups = [React.cloneElement(child, {
      ...child.props,
      attributes: groupObject,
      setAttributes: setGroupObject
    })];
    return controlGroups;
  }));
});

/***/ }),

/***/ "./src/gb-superset/supports/control/getObject.js":
/*!*******************************************************!*\
  !*** ./src/gb-superset/supports/control/getObject.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, scope = 'desktop', object) => {
  var _object$name$scope;
  // If scope is null, return the value of the name key from the object
  if (scope === null) return object[name];

  // Try to get the value from the scope key of the name object, default to the desktop key if it's undefined
  return (_object$name$scope = object[name]?.[scope]) !== null && _object$name$scope !== void 0 ? _object$name$scope : object[name]?.['desktop'];
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
/* harmony export */   GroupControlContainer: () => (/* reexport safe */ _GroupControlContainer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   getObject: () => (/* reexport safe */ _getObject__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   setObject: () => (/* reexport safe */ _setObject__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");
/* harmony import */ var _getObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getObject */ "./src/gb-superset/supports/control/getObject.js");
/* harmony import */ var _setObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setObject */ "./src/gb-superset/supports/control/setObject.js");
/* harmony import */ var _ControlContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlContainer */ "./src/gb-superset/supports/control/ControlContainer.js");
/* harmony import */ var _GroupControlContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupControlContainer */ "./src/gb-superset/supports/control/GroupControlContainer.js");







/***/ }),

/***/ "./src/gb-superset/supports/control/setObject.js":
/*!*******************************************************!*\
  !*** ./src/gb-superset/supports/control/setObject.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((name, value, scope, object, setHandler) => {
  // Get the attributeObject from the object, defaulting to an empty object if it's not an object
  const objectValue = typeof object[name] === 'object' ? object[name] : {};

  // Check if scope is null
  if (scope === null) {
    // Merge value with objectValue and set it by handler
    setHandler({
      [name]: {
        ...objectValue,
        ...value
      }
    });
  } else {
    // Set the new value if scope is not null
    setHandler({
      [name]: {
        ...objectValue,
        [scope]: value
      }
    });
  }
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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gb-superset/super-block-a","version":"0.1.0","title":"Super Block #A","category":"widgets","icon":"smiley","description":"Example block scaffolded with Gutenberg Superset.","textdomain":"gb-superset","editorScript":"file:./index.js","attributes":{"content":{"type":"object"},"groupControl":{"type":"object"},"align":{"type":"string"}}}');

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
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.TestGroupControl, {
      label: "My Text Field",
      help: "Additional help text",
      name: "groupControl"
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