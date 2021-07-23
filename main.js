/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,700;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n    overflow-y: scroll;\n}\n\n\n/* fonts */\n\n/* colors */\n:root{\n    --red:#FF0045;\n    --black: #000000;\n    --blue: #0056FF;\n    --lighttan: #EEE9E9;\n\n}\n.home-tab-section, .menu-tab-section, .landing-section, .contact-tab-section{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabbutton{\n    background-color: var(--lighttan);\n    font-family: 'Zilla Slab';\n    padding: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border: black 2px solid;\n    border-radius: 10%;\n    margin: 40px;\n}\n\n.tabbutton:hover, .tabbutton:focus{\n    background-color: var(--black);\n    color: white;\n    cursor: pointer;\n}\n\n/* header section */\nheader{\n    display: grid;\n    width: 800px;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    align-content: center;\n    margin-bottom: 50px;\n    margin-top: 40px;\n    grid-template-rows: 1fr;\n    grid-template-columns: .5fr 3fr 1fr;\n}\n.phohoalogo{\n    width: 200px;\n}\nheader h1{\n    font-size: 70pt;\n    font-family: 'Zilla Slab';\n    color: var(--red);\n    text-transform: uppercase;\n}\n\n/* home tab */\n.home-tab-section{\n    margin-top: 50px;\n}\nh2{\n    font-family: 'Zilla Slab', monospace;\n    font-style: italic;\n    font-size: 40pt;\n    color: var(--red);\n    text-align: center;\n}\nh3{\n    font-family: 'Zilla Slab', monospace;\n    font-size: 20pt;\n    color: var(--black);\n    text-align: center;\n}\n\n.hero{\n    width: 100%;\n    border-bottom: 30px dashed black;\n}\n.hero h3{\n    font-size: 40pt;\n    width: 750px;\n    margin: 0 auto;\n    /* text-align: center; */\n}\n.subtextmain{\n    margin-top: 20px;\n    font-size: 60pt;\n    margin-bottom: 200px;\n}\n\n\n/* hours */\n.hours-section{\n    margin-top: 50px;\n    border-bottom: 30px dashed black;\n    width: 100%;\n}\n.hours-list{\n    font-size: 20pt;\n    width: 300px;\n    margin: 0 auto;\n    margin-bottom: 200px;\n    line-height: 40px;\n}\n/* location */\n.location-section{\n    margin-top: 100px;\n}\np{\n    font-family: sans-serif;\n}\n/* landing section */\n.landing-section{\n    border-top: 30px dashed black;\n}\n\n\n/* menu tab section */\n.menu-tab-section{\n    margin-top: 80px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;AACV;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA,UAAU;;AAGV,WAAW;AACX;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA,aAAa;AACb;IACI,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gCAAgC;AACpC;AACA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,wBAAwB;AAC5B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;;AAGA,UAAU;AACV;IACI,gBAAgB;IAChB,gCAAgC;IAChC,WAAW;AACf;AACA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,iBAAiB;AACrB;AACA,aAAa;AACb;IACI,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA,oBAAoB;AACpB;IACI,6BAA6B;AACjC;;;AAGA,qBAAqB;AACrB;IACI,gBAAgB;AACpB","sourcesContent":["/* reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n    overflow-y: scroll;\n}\n\n\n/* fonts */\n@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,700;1,700&display=swap');\n\n/* colors */\n:root{\n    --red:#FF0045;\n    --black: #000000;\n    --blue: #0056FF;\n    --lighttan: #EEE9E9;\n\n}\n.home-tab-section, .menu-tab-section, .landing-section, .contact-tab-section{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabbutton{\n    background-color: var(--lighttan);\n    font-family: 'Zilla Slab';\n    padding: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border: black 2px solid;\n    border-radius: 10%;\n    margin: 40px;\n}\n\n.tabbutton:hover, .tabbutton:focus{\n    background-color: var(--black);\n    color: white;\n    cursor: pointer;\n}\n\n/* header section */\nheader{\n    display: grid;\n    width: 800px;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    align-content: center;\n    margin-bottom: 50px;\n    margin-top: 40px;\n    grid-template-rows: 1fr;\n    grid-template-columns: .5fr 3fr 1fr;\n}\n.phohoalogo{\n    width: 200px;\n}\nheader h1{\n    font-size: 70pt;\n    font-family: 'Zilla Slab';\n    color: var(--red);\n    text-transform: uppercase;\n}\n\n/* home tab */\n.home-tab-section{\n    margin-top: 50px;\n}\nh2{\n    font-family: 'Zilla Slab', monospace;\n    font-style: italic;\n    font-size: 40pt;\n    color: var(--red);\n    text-align: center;\n}\nh3{\n    font-family: 'Zilla Slab', monospace;\n    font-size: 20pt;\n    color: var(--black);\n    text-align: center;\n}\n\n.hero{\n    width: 100%;\n    border-bottom: 30px dashed black;\n}\n.hero h3{\n    font-size: 40pt;\n    width: 750px;\n    margin: 0 auto;\n    /* text-align: center; */\n}\n.subtextmain{\n    margin-top: 20px;\n    font-size: 60pt;\n    margin-bottom: 200px;\n}\n\n\n/* hours */\n.hours-section{\n    margin-top: 50px;\n    border-bottom: 30px dashed black;\n    width: 100%;\n}\n.hours-list{\n    font-size: 20pt;\n    width: 300px;\n    margin: 0 auto;\n    margin-bottom: 200px;\n    line-height: 40px;\n}\n/* location */\n.location-section{\n    margin-top: 100px;\n}\np{\n    font-family: sans-serif;\n}\n/* landing section */\n.landing-section{\n    border-top: 30px dashed black;\n}\n\n\n/* menu tab section */\n.menu-tab-section{\n    margin-top: 80px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/assets/images/PhoHoaLocation.png":
/*!**********************************************!*\
  !*** ./src/assets/images/PhoHoaLocation.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99ee09f6039cb3fd96c5.png";

/***/ }),

/***/ "./src/assets/images/logo.jpg":
/*!************************************!*\
  !*** ./src/assets/images/logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5621b5b51c2e98880195.jpg";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contact section
let contact = document.createElement('section');
contact.classList.add('contact-tab-section');





// export contact
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_PhoHoaLocation_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/PhoHoaLocation.png */ "./src/assets/images/PhoHoaLocation.png");
// home section
let home = document.createElement('section');
home.classList.add('home-tab-section');


// hero
let hero = document.createElement('div');
hero.classList.add('hero');
let subtextlittle = document.createElement('h3');
subtextlittle.textContent = "Four decades and only one thing on the menu:"; 
let subtextmain = document.createElement('h2');
subtextmain.textContent = "authentic beef pho soup";
subtextmain.classList.add('subtextmain')
hero.appendChild(subtextlittle);  
hero.appendChild(subtextmain);  


// hours
let hours = document.createElement('section');
hours.classList.add('hours-section');
let hoursheadline = document.createElement('h2');
let hoursspecific = document.createElement('h3');
hoursspecific.classList.add('hours-list');
hoursheadline.textContent = "Hours";
hoursspecific.textContent = `
Monday: 7am-8pm
Tuesday: 7am-8pm
Wednesday: 7am-8pm
Thursday: 7am-8pm
Friday: 7am-8pm
Saturday:  7am-8pm
Sunday: 7am-8pm`;
hours.appendChild(hoursheadline);
hours.appendChild(hoursspecific);

// location
let location = document.createElement('section');
location.classList.add('location-section');
let locationtitle = document.createElement('h2'); // location title
locationtitle.textContent = "Located in Little Saigon";
location.appendChild(locationtitle);
let locationaddress = document.createElement('h3'); // location address
locationaddress.textContent = "4717 El Cajon Blvd, San Diego, CA 92115";
location.appendChild(locationaddress);
 // map
const PhoMap = new Image();
PhoMap.src = _assets_images_PhoHoaLocation_png__WEBPACK_IMPORTED_MODULE_0__;
location.appendChild(PhoMap);



home.appendChild(hero);
home.appendChild(hours);
home.appendChild(location);
// export home
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/logo.jpg */ "./src/assets/images/logo.jpg");
// landing section
let landing = document.createElement('section');
landing.classList.add('landing-section');

// HEADER
let header = document.createElement('header');

// img

const PhoLogo = new Image();
PhoLogo.classList.add('phohoalogo');
PhoLogo.src = _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
header.appendChild(PhoLogo);

// pho hoa
let phohoalogotext = document.createElement('h1');
phohoalogotext.textContent = "Pho Hoa";
header.appendChild(phohoalogotext);
// restaurant
let restaurantdiv = document.createElement('div');
header.appendChild(restaurantdiv);
// resaurant para
let restaurantsubtext = document.createElement('p');
restaurantsubtext.textContent = "Restaurant";
restaurantdiv.appendChild(restaurantsubtext);
// est 1984 para
let establishedsubtext = document.createElement('p');
establishedsubtext.textContent = "Est. 1984";
restaurantdiv.appendChild(establishedsubtext);


// nav
let nav = document.createElement('nav');
// link home
let home = document.createElement('a');
home.classList.add('tabbutton');
home.classList.add('home');
home.textContent = "Home"
nav.appendChild(home);
// link menu
let menu = document.createElement('a');
menu.classList.add('tabbutton');
menu.classList.add('menu');
menu.textContent = "Menu"
nav.appendChild(menu);
// link contact
let contact = document.createElement('a');
contact.classList.add('tabbutton');
contact.classList.add('contact');
contact.textContent = "Contact"
nav.appendChild(contact);






// append content to landing
landing.appendChild(header);
landing.appendChild(nav);
// export landing
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landing);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// menu section
let menu = document.createElement('section');
menu.classList.add('menu-tab-section');

// h2 
let phosectionh2 = document.createElement('h2');
phosectionh2.textContent = 'Pho';

// div for menu item 1
let menuitemdiv1 = document.createElement('div');
menuitemdiv1.classList.add('menu-item');

let menuitemnumber = document.createElement('div');
menuitemnumber.classList.add('menu-item-number');
menuitemnumber.textContent = '1';

let menuitem = document.createElement('div');
menuitem.classList.add('menu-item-text');

let menuitemname = document.createElement('p');
menuitemname.classList.add('menu-item-name');
menuitemname.textContent = 'DAC BIET XE LUA (X LARGE BOWL)';

let menuitemdescription = document.createElement('p');
menuitemdescription.classList.add('menu-item-description');
menuitemdescription.textContent = 'Special Combo w/ rare slices of steak, well-done brisket, flank, tendon, and tripe';
menuitem.appendChild(menuitemname);
menuitem.appendChild(menuitemdescription);

let menuitemprice = document.createElement('div');
menuitemprice.classList.add('menu-item-price');
menuitemprice.textContent = '$10.90';

menuitemdiv1.appendChild(menuitemnumber);
menuitemdiv1.appendChild(menuitem);
menuitemdiv1.appendChild(menuitemprice);

// div for menu item 2
let menuitemdiv2 = document.createElement('div');
menuitemdiv2.classList.add('menu-item2');

let menuitemnumber2 = document.createElement('div');
menuitemnumber2.classList.add('menu-item-number');
menuitemnumber2.textContent = '2';

let menuitem2 = document.createElement('div');
menuitem2.classList.add('menu-item-text');

let menuitemname2 = document.createElement('p');
menuitemname2.classList.add('menu-item-name');
menuitemname2.textContent = 'DAC BIET';

let menuitemdescription2 = document.createElement('p');
menuitemdescription2.classList.add('menu-item-description');
menuitemdescription2.textContent = 'Special Combo w/ rare slices of steak, well-done brisket, flank, tendon, and tripe';
menuitem2.appendChild(menuitemname2);
menuitem2.appendChild(menuitemdescription2);

let menuitemprice2 = document.createElement('div');
menuitemprice2.classList.add('menu-item-price');
menuitemprice2.textContent = '$10.20';

menuitemdiv2.appendChild(menuitemnumber2);
menuitemdiv2.appendChild(menuitem2);
menuitemdiv2.appendChild(menuitemprice2);

// append sections to menu tab section

menu.appendChild(phosectionh2);
menu.appendChild(menuitemdiv1);
menu.appendChild(menuitemdiv2);

// export menu
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing */ "./src/landing.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







let content = document.querySelector('#content'); // create content div
content.appendChild(_landing__WEBPACK_IMPORTED_MODULE_1__.default); // append landing



// tab switching behaviour
let hometab = document.querySelector('.tabbutton.home');
let menutab = document.querySelector('.tabbutton.menu');
let contacttab = document.querySelector('.tabbutton.contact');
function switchTabs(e){
    if (e.target.className === "tabbutton home"){
        if (MenuTabOn === true){
            content.removeChild(_menu__WEBPACK_IMPORTED_MODULE_3__.default);
            content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.default);
        }
        if (ContactTabOn === true){
            content.removeChild(_contact__WEBPACK_IMPORTED_MODULE_4__.default);
            content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.default);
        }
        HomeTabOn = true;
        MenuTabOn = false;
        ContactTabOn = false;
    }else if (e.target.className === "tabbutton menu"){
        if (HomeTabOn === true){
            content.removeChild(_home__WEBPACK_IMPORTED_MODULE_2__.default);
            content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__.default);
        }
        if (ContactTabOn === true){
            content.removeChild(_contact__WEBPACK_IMPORTED_MODULE_4__.default);
            content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__.default);
        }
        HomeTabOn = false;
        MenuTabOn = true;
        ContactTabOn = false;
    }else if (e.target.className === "tabbutton contact"){
        if (HomeTabOn === true){
            content.removeChild(_home__WEBPACK_IMPORTED_MODULE_2__.default);
            content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_4__.default);
        }
        if (MenuTabOn === true){
            content.removeChild(_menu__WEBPACK_IMPORTED_MODULE_3__.default);
            content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_4__.default);
        }
        HomeTabOn = false;
        MenuTabOn = false;
        ContactTabOn = true;
    }
}
hometab.addEventListener('click', switchTabs);
menutab.addEventListener('click', switchTabs);
contacttab.addEventListener('click', switchTabs);

// on load
content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.default);
let HomeTabOn = true;
let MenuTabOn = false;
let ContactTabOn = false;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEhBQTBILG9CQUFvQjtBQUM5STtBQUNBLGlqQkFBaWpCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0pBQWdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxTQUFTLHlCQUF5QixHQUFHLHlDQUF5QyxvQkFBb0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsS0FBSywrRUFBK0Usb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSx3Q0FBd0MsZ0NBQWdDLG9CQUFvQix5QkFBeUIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLEdBQUcsdUNBQXVDLHFDQUFxQyxtQkFBbUIsc0JBQXNCLEdBQUcsaUNBQWlDLG9CQUFvQixtQkFBbUIsOEJBQThCLDRC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Q1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVppbGxhK1NsYWI6aXRhbCx3Z2h0QDAsNzAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJlc2V0ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuXFxuLyogZm9udHMgKi9cXG5cXG4vKiBjb2xvcnMgKi9cXG46cm9vdHtcXG4gICAgLS1yZWQ6I0ZGMDA0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibHVlOiAjMDA1NkZGO1xcbiAgICAtLWxpZ2h0dGFuOiAjRUVFOUU5O1xcblxcbn1cXG4uaG9tZS10YWItc2VjdGlvbiwgLm1lbnUtdGFiLXNlY3Rpb24sIC5sYW5kaW5nLXNlY3Rpb24sIC5jb250YWN0LXRhYi1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHR0YW4pO1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogNDBweDtcXG59XFxuXFxuLnRhYmJ1dHRvbjpob3ZlciwgLnRhYmJ1dHRvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDNmciAxZnI7XFxufVxcbi5waG9ob2Fsb2dve1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbmhlYWRlciBoMXtcXG4gICAgZm9udC1zaXplOiA3MHB0O1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogaG9tZSB0YWIgKi9cXG4uaG9tZS10YWItc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuaDJ7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDQwcHQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgze1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVyb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDMwcHggZGFzaGVkIGJsYWNrO1xcbn1cXG4uaGVybyBoM3tcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcbi5zdWJ0ZXh0bWFpbntcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiA2MHB0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuXFxuXFxuLyogaG91cnMgKi9cXG4uaG91cnMtc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMzBweCBkYXNoZWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uaG91cnMtbGlzdHtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi8qIGxvY2F0aW9uICovXFxuLmxvY2F0aW9uLXNlY3Rpb257XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuLyogbGFuZGluZyBzZWN0aW9uICovXFxuLmxhbmRpbmctc2VjdGlvbntcXG4gICAgYm9yZGVyLXRvcDogMzBweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcblxcbi8qIG1lbnUgdGFiIHNlY3Rpb24gKi9cXG4ubWVudS10YWItc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxVQUFVOztBQUdWLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBLGFBQWE7QUFDYjtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7O0FBR0EsVUFBVTtBQUNWO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBLG9CQUFvQjtBQUNwQjtJQUNJLDZCQUE2QjtBQUNqQzs7O0FBR0EscUJBQXFCO0FBQ3JCO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHJlc2V0ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuXFxuLyogZm9udHMgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOml0YWwsd2dodEAwLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBjb2xvcnMgKi9cXG46cm9vdHtcXG4gICAgLS1yZWQ6I0ZGMDA0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibHVlOiAjMDA1NkZGO1xcbiAgICAtLWxpZ2h0dGFuOiAjRUVFOUU5O1xcblxcbn1cXG4uaG9tZS10YWItc2VjdGlvbiwgLm1lbnUtdGFiLXNlY3Rpb24sIC5sYW5kaW5nLXNlY3Rpb24sIC5jb250YWN0LXRhYi1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHR0YW4pO1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogNDBweDtcXG59XFxuXFxuLnRhYmJ1dHRvbjpob3ZlciwgLnRhYmJ1dHRvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDNmciAxZnI7XFxufVxcbi5waG9ob2Fsb2dve1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbmhlYWRlciBoMXtcXG4gICAgZm9udC1zaXplOiA3MHB0O1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogaG9tZSB0YWIgKi9cXG4uaG9tZS10YWItc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuaDJ7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDQwcHQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgze1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVyb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDMwcHggZGFzaGVkIGJsYWNrO1xcbn1cXG4uaGVybyBoM3tcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcbi5zdWJ0ZXh0bWFpbntcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiA2MHB0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuXFxuXFxuLyogaG91cnMgKi9cXG4uaG91cnMtc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMzBweCBkYXNoZWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uaG91cnMtbGlzdHtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi8qIGxvY2F0aW9uICovXFxuLmxvY2F0aW9uLXNlY3Rpb257XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuLyogbGFuZGluZyBzZWN0aW9uICovXFxuLmxhbmRpbmctc2VjdGlvbntcXG4gICAgYm9yZGVyLXRvcDogMzBweCBkYXNoZWQgYmxhY2s7XFxufVxcblxcblxcbi8qIG1lbnUgdGFiIHNlY3Rpb24gKi9cXG4ubWVudS10YWItc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBjb250YWN0IHNlY3Rpb25cbmxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYi1zZWN0aW9uJyk7XG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnRhY3RcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCIvLyBob21lIHNlY3Rpb25cbmxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLXRhYi1zZWN0aW9uJyk7XG5cblxuLy8gaGVyb1xubGV0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xubGV0IHN1YnRleHRsaXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuc3VidGV4dGxpdHRsZS50ZXh0Q29udGVudCA9IFwiRm91ciBkZWNhZGVzIGFuZCBvbmx5IG9uZSB0aGluZyBvbiB0aGUgbWVudTpcIjsgXG5sZXQgc3VidGV4dG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuc3VidGV4dG1haW4udGV4dENvbnRlbnQgPSBcImF1dGhlbnRpYyBiZWVmIHBobyBzb3VwXCI7XG5zdWJ0ZXh0bWFpbi5jbGFzc0xpc3QuYWRkKCdzdWJ0ZXh0bWFpbicpXG5oZXJvLmFwcGVuZENoaWxkKHN1YnRleHRsaXR0bGUpOyAgXG5oZXJvLmFwcGVuZENoaWxkKHN1YnRleHRtYWluKTsgIFxuXG5cbi8vIGhvdXJzXG5sZXQgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3Vycy1zZWN0aW9uJyk7XG5sZXQgaG91cnNoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5sZXQgaG91cnNzcGVjaWZpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5ob3Vyc3NwZWNpZmljLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKTtcbmhvdXJzaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG5ob3Vyc3NwZWNpZmljLnRleHRDb250ZW50ID0gYFxuTW9uZGF5OiA3YW0tOHBtXG5UdWVzZGF5OiA3YW0tOHBtXG5XZWRuZXNkYXk6IDdhbS04cG1cblRodXJzZGF5OiA3YW0tOHBtXG5GcmlkYXk6IDdhbS04cG1cblNhdHVyZGF5OiAgN2FtLThwbVxuU3VuZGF5OiA3YW0tOHBtYDtcbmhvdXJzLmFwcGVuZENoaWxkKGhvdXJzaGVhZGxpbmUpO1xuaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNzcGVjaWZpYyk7XG5cbi8vIGxvY2F0aW9uXG5sZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5sb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1zZWN0aW9uJyk7XG5sZXQgbG9jYXRpb250aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IC8vIGxvY2F0aW9uIHRpdGxlXG5sb2NhdGlvbnRpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGVkIGluIExpdHRsZSBTYWlnb25cIjtcbmxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9udGl0bGUpO1xubGV0IGxvY2F0aW9uYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vIGxvY2F0aW9uIGFkZHJlc3NcbmxvY2F0aW9uYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNDcxNyBFbCBDYWpvbiBCbHZkLCBTYW4gRGllZ28sIENBIDkyMTE1XCI7XG5sb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbmFkZHJlc3MpO1xuaW1wb3J0IE1hcCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvUGhvSG9hTG9jYXRpb24ucG5nJzsgLy8gbWFwXG5jb25zdCBQaG9NYXAgPSBuZXcgSW1hZ2UoKTtcblBob01hcC5zcmMgPSBNYXA7XG5sb2NhdGlvbi5hcHBlbmRDaGlsZChQaG9NYXApO1xuXG5cblxuaG9tZS5hcHBlbmRDaGlsZChoZXJvKTtcbmhvbWUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuaG9tZS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4vLyBleHBvcnQgaG9tZVxuZXhwb3J0IGRlZmF1bHQgaG9tZSIsIi8vIGxhbmRpbmcgc2VjdGlvblxubGV0IGxhbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5sYW5kaW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctc2VjdGlvbicpO1xuXG4vLyBIRUFERVJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuLy8gaW1nXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbG9nby5qcGcnO1xuY29uc3QgUGhvTG9nbyA9IG5ldyBJbWFnZSgpO1xuUGhvTG9nby5jbGFzc0xpc3QuYWRkKCdwaG9ob2Fsb2dvJyk7XG5QaG9Mb2dvLnNyYyA9IExvZ287XG5oZWFkZXIuYXBwZW5kQ2hpbGQoUGhvTG9nbyk7XG5cbi8vIHBobyBob2FcbmxldCBwaG9ob2Fsb2dvdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5waG9ob2Fsb2dvdGV4dC50ZXh0Q29udGVudCA9IFwiUGhvIEhvYVwiO1xuaGVhZGVyLmFwcGVuZENoaWxkKHBob2hvYWxvZ290ZXh0KTtcbi8vIHJlc3RhdXJhbnRcbmxldCByZXN0YXVyYW50ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudGRpdik7XG4vLyByZXNhdXJhbnQgcGFyYVxubGV0IHJlc3RhdXJhbnRzdWJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucmVzdGF1cmFudHN1YnRleHQudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIjtcbnJlc3RhdXJhbnRkaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudHN1YnRleHQpO1xuLy8gZXN0IDE5ODQgcGFyYVxubGV0IGVzdGFibGlzaGVkc3VidGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmVzdGFibGlzaGVkc3VidGV4dC50ZXh0Q29udGVudCA9IFwiRXN0LiAxOTg0XCI7XG5yZXN0YXVyYW50ZGl2LmFwcGVuZENoaWxkKGVzdGFibGlzaGVkc3VidGV4dCk7XG5cblxuLy8gbmF2XG5sZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4vLyBsaW5rIGhvbWVcbmxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG5uYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4vLyBsaW5rIG1lbnVcbmxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudS5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xubWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG5uYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4vLyBsaW5rIGNvbnRhY3RcbmxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG5uYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cblxuXG5cblxuXG4vLyBhcHBlbmQgY29udGVudCB0byBsYW5kaW5nXG5sYW5kaW5nLmFwcGVuZENoaWxkKGhlYWRlcik7XG5sYW5kaW5nLmFwcGVuZENoaWxkKG5hdik7XG4vLyBleHBvcnQgbGFuZGluZ1xuZXhwb3J0IGRlZmF1bHQgbGFuZGluZyIsIi8vIG1lbnUgc2VjdGlvblxubGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLXNlY3Rpb24nKTtcblxuLy8gaDIgXG5sZXQgcGhvc2VjdGlvbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBob3NlY3Rpb25oMi50ZXh0Q29udGVudCA9ICdQaG8nO1xuXG4vLyBkaXYgZm9yIG1lbnUgaXRlbSAxXG5sZXQgbWVudWl0ZW1kaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51aXRlbWRpdjEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbmxldCBtZW51aXRlbW51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1udW1iZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW51bWJlcicpO1xubWVudWl0ZW1udW1iZXIudGV4dENvbnRlbnQgPSAnMSc7XG5cbmxldCBtZW51aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRleHQnKTtcblxubGV0IG1lbnVpdGVtbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVpdGVtbmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xubWVudWl0ZW1uYW1lLnRleHRDb250ZW50ID0gJ0RBQyBCSUVUIFhFIExVQSAoWCBMQVJHRSBCT1dMKSc7XG5cbmxldCBtZW51aXRlbWRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubWVudWl0ZW1kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbm1lbnVpdGVtZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnU3BlY2lhbCBDb21ibyB3LyByYXJlIHNsaWNlcyBvZiBzdGVhaywgd2VsbC1kb25lIGJyaXNrZXQsIGZsYW5rLCB0ZW5kb24sIGFuZCB0cmlwZSc7XG5tZW51aXRlbS5hcHBlbmRDaGlsZChtZW51aXRlbW5hbWUpO1xubWVudWl0ZW0uYXBwZW5kQ2hpbGQobWVudWl0ZW1kZXNjcmlwdGlvbik7XG5cbmxldCBtZW51aXRlbXByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51aXRlbXByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xubWVudWl0ZW1wcmljZS50ZXh0Q29udGVudCA9ICckMTAuOTAnO1xuXG5tZW51aXRlbWRpdjEuYXBwZW5kQ2hpbGQobWVudWl0ZW1udW1iZXIpO1xubWVudWl0ZW1kaXYxLmFwcGVuZENoaWxkKG1lbnVpdGVtKTtcbm1lbnVpdGVtZGl2MS5hcHBlbmRDaGlsZChtZW51aXRlbXByaWNlKTtcblxuLy8gZGl2IGZvciBtZW51IGl0ZW0gMlxubGV0IG1lbnVpdGVtZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1kaXYyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbTInKTtcblxubGV0IG1lbnVpdGVtbnVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1udW1iZXIyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1udW1iZXInKTtcbm1lbnVpdGVtbnVtYmVyMi50ZXh0Q29udGVudCA9ICcyJztcblxubGV0IG1lbnVpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10ZXh0Jyk7XG5cbmxldCBtZW51aXRlbW5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xubWVudWl0ZW1uYW1lMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xubWVudWl0ZW1uYW1lMi50ZXh0Q29udGVudCA9ICdEQUMgQklFVCc7XG5cbmxldCBtZW51aXRlbWRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVpdGVtZGVzY3JpcHRpb24yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xubWVudWl0ZW1kZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSAnU3BlY2lhbCBDb21ibyB3LyByYXJlIHNsaWNlcyBvZiBzdGVhaywgd2VsbC1kb25lIGJyaXNrZXQsIGZsYW5rLCB0ZW5kb24sIGFuZCB0cmlwZSc7XG5tZW51aXRlbTIuYXBwZW5kQ2hpbGQobWVudWl0ZW1uYW1lMik7XG5tZW51aXRlbTIuYXBwZW5kQ2hpbGQobWVudWl0ZW1kZXNjcmlwdGlvbjIpO1xuXG5sZXQgbWVudWl0ZW1wcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVpdGVtcHJpY2UyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xubWVudWl0ZW1wcmljZTIudGV4dENvbnRlbnQgPSAnJDEwLjIwJztcblxubWVudWl0ZW1kaXYyLmFwcGVuZENoaWxkKG1lbnVpdGVtbnVtYmVyMik7XG5tZW51aXRlbWRpdjIuYXBwZW5kQ2hpbGQobWVudWl0ZW0yKTtcbm1lbnVpdGVtZGl2Mi5hcHBlbmRDaGlsZChtZW51aXRlbXByaWNlMik7XG5cbi8vIGFwcGVuZCBzZWN0aW9ucyB0byBtZW51IHRhYiBzZWN0aW9uXG5cbm1lbnUuYXBwZW5kQ2hpbGQocGhvc2VjdGlvbmgyKTtcbm1lbnUuYXBwZW5kQ2hpbGQobWVudWl0ZW1kaXYxKTtcbm1lbnUuYXBwZW5kQ2hpbGQobWVudWl0ZW1kaXYyKTtcblxuLy8gZXhwb3J0IG1lbnVcbmV4cG9ydCBkZWZhdWx0IG1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxhbmRpbmcgZnJvbSAnLi9sYW5kaW5nJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7IC8vIGNyZWF0ZSBjb250ZW50IGRpdlxuY29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKTsgLy8gYXBwZW5kIGxhbmRpbmdcblxuXG5cbi8vIHRhYiBzd2l0Y2hpbmcgYmVoYXZpb3VyXG5sZXQgaG9tZXRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJidXR0b24uaG9tZScpO1xubGV0IG1lbnV0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiYnV0dG9uLm1lbnUnKTtcbmxldCBjb250YWN0dGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmJ1dHRvbi5jb250YWN0Jyk7XG5mdW5jdGlvbiBzd2l0Y2hUYWJzKGUpe1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFiYnV0dG9uIGhvbWVcIil7XG4gICAgICAgIGlmIChNZW51VGFiT24gPT09IHRydWUpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51KTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENvbnRhY3RUYWJPbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRhY3QpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcbiAgICAgICAgfVxuICAgICAgICBIb21lVGFiT24gPSB0cnVlO1xuICAgICAgICBNZW51VGFiT24gPSBmYWxzZTtcbiAgICAgICAgQ29udGFjdFRhYk9uID0gZmFsc2U7XG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YWJidXR0b24gbWVudVwiKXtcbiAgICAgICAgaWYgKEhvbWVUYWJPbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGhvbWUpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ29udGFjdFRhYk9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFjdCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICB9XG4gICAgICAgIEhvbWVUYWJPbiA9IGZhbHNlO1xuICAgICAgICBNZW51VGFiT24gPSB0cnVlO1xuICAgICAgICBDb250YWN0VGFiT24gPSBmYWxzZTtcbiAgICB9ZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhYmJ1dHRvbiBjb250YWN0XCIpe1xuICAgICAgICBpZiAoSG9tZVRhYk9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNZW51VGFiT24gPT09IHRydWUpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51KTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIH1cbiAgICAgICAgSG9tZVRhYk9uID0gZmFsc2U7XG4gICAgICAgIE1lbnVUYWJPbiA9IGZhbHNlO1xuICAgICAgICBDb250YWN0VGFiT24gPSB0cnVlO1xuICAgIH1cbn1cbmhvbWV0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUYWJzKTtcbm1lbnV0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUYWJzKTtcbmNvbnRhY3R0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUYWJzKTtcblxuLy8gb24gbG9hZFxuY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcbmxldCBIb21lVGFiT24gPSB0cnVlO1xubGV0IE1lbnVUYWJPbiA9IGZhbHNlO1xubGV0IENvbnRhY3RUYWJPbiA9IGZhbHNlOyJdLCJzb3VyY2VSb290IjoiIn0=