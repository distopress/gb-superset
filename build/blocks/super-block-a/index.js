/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/super-block-a/SaveContent.js":
/*!*************************************************!*\
  !*** ./src/blocks/super-block-a/SaveContent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/gb-superset/controls/inspector/AlignmentMatrixControl.js":
/*!**********************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/AlignmentMatrixControl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    changeProp: 'onChange',
    className: "gb-superset-alignment-matrix-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalAlignmentMatrixControl, {
    ...props
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/AnglePickerControl.js":
/*!******************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/AnglePickerControl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    changeProp: 'onChange',
    className: "gb-superset-angle-picker-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.AnglePickerControl, {
    ...props
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/BorderBoxControl.js":
/*!****************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/BorderBoxControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const colors = [{
    name: 'White',
    color: '#ffffff'
  }, {
    name: 'Black',
    color: '#000000'
  }, {
    name: 'Gray',
    color: '#808080'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__.ControlContainer, {
    ...props,
    valueProp: 'value',
    changeProp: 'onChange',
    className: "gb-superset-border-box-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    ...props,
    colors: colors
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/BorderControl.js":
/*!*************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/BorderControl.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const colors = [{
    name: 'White',
    color: '#ffffff'
  }, {
    name: 'Black',
    color: '#000000'
  }, {
    name: 'Gray',
    color: '#808080'
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__.ControlContainer, {
    ...props,
    valueProp: 'value',
    changeProp: 'onChange',
    className: "gb-superset-border-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderControl, {
    ...props,
    colors: colors
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/BoxControl.js":
/*!**********************************************************!*\
  !*** ./src/gb-superset/controls/inspector/BoxControl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    changeProp: 'onChange',
    className: "gb-superset-box-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    ...props
  }));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/Panel.js":
/*!*****************************************************!*\
  !*** ./src/gb-superset/controls/inspector/Panel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    ...props,
    className: "gb-superset-panel"
  }, props.children);
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/TabPanel.js":
/*!********************************************************!*\
  !*** ./src/gb-superset/controls/inspector/TabPanel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const {
    tabs,
    children,
    ...Props
  } = props;
  const Tabs = tabs.map(tab => {
    const Tab = tab.replace(/\s/g, '').toLowerCase();
    return {
      name: Tab || '',
      // required
      title: tab || '',
      // required
      className: `tab-${Tab}`
    };
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_supports_control__WEBPACK_IMPORTED_MODULE_2__.ControlContainer, {
    ...Props,
    className: "gb-superset-tab-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    ...Props,
    tabs: Tabs,
    activeClass: "active"
  }, tab => React.Children.map(children, child => {
    if (child.props.content.toLowerCase() === tab?.name) {
      return child;
    }
    return null;
  })));
});

/***/ }),

/***/ "./src/gb-superset/controls/inspector/TestGroupControl.js":
/*!****************************************************************!*\
  !*** ./src/gb-superset/controls/inspector/TestGroupControl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    ...props,
    className: "my-awesome-test-group-control"
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

"use strict";
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
    changeProp: 'onChange',
    className: "gb-superset-text-control"
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentMatrixControl: () => (/* reexport safe */ _AlignmentMatrixControl__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   AnglePickerControl: () => (/* reexport safe */ _AnglePickerControl__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   BorderBoxControl: () => (/* reexport safe */ _BorderBoxControl__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   BorderControl: () => (/* reexport safe */ _BorderControl__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   BoxControl: () => (/* reexport safe */ _BoxControl__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   IconPicker: () => (/* reexport safe */ _icon_picker__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Panel: () => (/* reexport safe */ _Panel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   TabPanel: () => (/* reexport safe */ _TabPanel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   TestGroupControl: () => (/* reexport safe */ _TestGroupControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   TextControl: () => (/* reexport safe */ _TextControl__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "./src/gb-superset/controls/inspector/Panel.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanel */ "./src/gb-superset/controls/inspector/TabPanel.js");
/* harmony import */ var _BoxControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoxControl */ "./src/gb-superset/controls/inspector/BoxControl.js");
/* harmony import */ var _icon_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-picker */ "./src/gb-superset/controls/inspector/icon-picker/index.js");
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextControl */ "./src/gb-superset/controls/inspector/TextControl.js");
/* harmony import */ var _BorderControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BorderControl */ "./src/gb-superset/controls/inspector/BorderControl.js");
/* harmony import */ var _TestGroupControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TestGroupControl */ "./src/gb-superset/controls/inspector/TestGroupControl.js");
/* harmony import */ var _BorderBoxControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BorderBoxControl */ "./src/gb-superset/controls/inspector/BorderBoxControl.js");
/* harmony import */ var _AnglePickerControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnglePickerControl */ "./src/gb-superset/controls/inspector/AnglePickerControl.js");
/* harmony import */ var _AlignmentMatrixControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AlignmentMatrixControl */ "./src/gb-superset/controls/inspector/AlignmentMatrixControl.js");











/***/ }),

/***/ "./src/gb-superset/supports/control/ControlContainer.js":
/*!**************************************************************!*\
  !*** ./src/gb-superset/supports/control/ControlContainer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");
/* harmony import */ var _getObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getObject */ "./src/gb-superset/supports/control/getObject.js");
/* harmony import */ var _setObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setObject */ "./src/gb-superset/supports/control/setObject.js");







// This is a functional component that uses the ControlContext to get and set values
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  // Destructure get and set from the context
  let {
    get,
    set
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ControlContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  // If attributes and setAttributes props are provided, override get and set
  if (props.attributes && props.setAttributes) {
    get = (name, scope) => (0,_getObject__WEBPACK_IMPORTED_MODULE_3__["default"])(name, scope, props.attributes);
    set = (name, value, scope) => (0,_setObject__WEBPACK_IMPORTED_MODULE_4__["default"])(name, value, scope, props.attributes, props.setAttributes);
  }

  // Create a state variable for scope with initial value 'desktop'
  const [scope, setScope] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('desktop');

  // Handler function for changing the scope
  const scopeHandler = (scope, e) => {
    e.preventDefault();
    setScope(scope);
  };

  // Use useEffect to log when the scope changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('scope has changed', scope);
  }, [scope]);

  // Render the component
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.extraClassName, props.className, 'gb-superset-control-container')
  }, props.responsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('desktop', e)
  }, "Desktop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('tablet', e)
  }, "Tablet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: e => scopeHandler('mobile', e)
  }, "Mobile")), React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      ...child.props,
      [props.valueProp]: get(props.name, scope),
      [props.changeProp]: value => set(props.name, value, scope)
    });
  }));
});

/***/ }),

/***/ "./src/gb-superset/supports/control/ControlContext.js":
/*!************************************************************!*\
  !*** ./src/gb-superset/supports/control/ControlContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// create context for control

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));

/***/ }),

/***/ "./src/gb-superset/supports/control/GroupControlContainer.js":
/*!*******************************************************************!*\
  !*** ./src/gb-superset/supports/control/GroupControlContainer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ControlContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlContext */ "./src/gb-superset/supports/control/ControlContext.js");





// This is a functional component that uses the ControlContext to get and set group objects
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  var _get;
  // Destructure get and set from the context
  const {
    get,
    set
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ControlContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  // Create a state variable for groupObject with initial value from get function or an empty object
  const [groupObject, setGroupObjectState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_get = get(props.name, null)) !== null && _get !== void 0 ? _get : {});

  // Function to set the groupObject state
  const setGroupObject = newObject => {
    setGroupObjectState(prevGroupObject => ({
      ...prevGroupObject,
      ...newObject
    }));
  };

  // Use useEffect to set the groupObject in the context when it changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof groupObject === 'object') {
      set(props.name, groupObject, null);
    }
  }, [groupObject]);

  // Render the component
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.extraClassName, props.className, 'gb-superset-group-control-container')
  }, React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      ...child.props,
      attributes: groupObject,
      setAttributes: setGroupObject
    });
  }));
});

/***/ }),

/***/ "./src/gb-superset/supports/control/getObject.js":
/*!*******************************************************!*\
  !*** ./src/gb-superset/supports/control/getObject.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
module.exports = window["React"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/super-block-a/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/super-block-a/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gb-superset/super-block-a","version":"0.1.0","title":"Super Block #A","category":"widgets","icon":"smiley","description":"Example block scaffolded with Gutenberg Superset.","textdomain":"gb-superset","editorScript":"file:./index.js","attributes":{"content":{"type":"object"},"groupControl":{"type":"object"},"align":{"type":"string"},"alignmentMatrix":{"type":"object"},"anglePicker":{"type":"object"},"borderBox":{"type":"object"},"border":{"type":"object"},"box":{"type":"object"}}}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
      name: "groupControl",
      responsive: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.TabPanel
    // initialTabName="advance"
    // orientation="horizontal"
    , {
      tabs: ['Settings', 'Styles', 'Advance']
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      content: "Settings"
    }, "For Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      content: "Styles"
    }, "For Styles"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      content: "Advance"
    }, "For Advance")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.Panel, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('My All Control')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.AlignmentMatrixControl, {
      label: "Background Position",
      name: "alignmentMatrix"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.AnglePickerControl, {
      label: "Angle Picker",
      name: "anglePicker"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.BorderBoxControl, {
      label: "Border Box",
      name: "borderBox"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.BorderControl, {
      label: "Border",
      name: "border"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gb_superset_controls_inspector__WEBPACK_IMPORTED_MODULE_6__.BoxControl, {
      label: "Box Control",
      name: "box",
      allowReset: true
      // splitOnAxis={true}
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