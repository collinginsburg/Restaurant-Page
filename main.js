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
___CSS_LOADER_EXPORT___.push([module.id, "/* reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n    overflow-y: scroll;\n}\n\n\n/* fonts */\n\n/* colors */\n:root{\n    --red:#FF0045;\n    --black: #000000;\n    --blue: #0056FF;\n    --lighttan: #EEE9E9;\n\n}\n.home-tab-section, .menu-tab-section, .landing-section, .contact-tab-section{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabbutton{\n    background-color: var(--lighttan);\n    font-family: 'Zilla Slab';\n    font-size: 20px;\n    padding: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border: black 2px solid;\n    border-radius: 10px;\n    margin: 40px;\n}\n\n.tabbutton:hover, .tabbutton:focus{\n    background-color: var(--black);\n    color: white;\n    cursor: pointer;\n}\n\n/* header section */\nheader{\n    display: grid;\n    width: 820px;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    align-content: center;\n    margin-bottom: 50px;\n    margin-top: 40px;\n    grid-template-rows: 1fr;\n    grid-template-columns: .5fr 3fr 1fr;\n}\n.phohoalogo{\n    width: 150px;\n}\nheader h1{\n    font-size: 70pt;\n    font-family: 'Zilla Slab';\n    color: var(--red);\n    text-transform: uppercase;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\nheader p{\n    font-family: sans-serif;\n    font-weight: 600;\n    font-size: 35px;\n    text-transform:uppercase;\n    color: var(--blue);\n}\nheader p:last-child{\n    text-align: center;\n    font-weight: 500;\n    font-size: 20px;\n    text-transform:uppercase;\n}\n\n/* home tab */\n.home-tab-section{\n    margin-top: 50px;\n}\nh2{\n    font-family: 'Zilla Slab', monospace;\n    font-style: italic;\n    font-size: 40pt;\n    color: var(--red);\n    text-align: center;\n}\nh3{\n    font-family: 'Zilla Slab', monospace;\n    font-size: 20pt;\n    color: var(--black);\n    text-align: center;\n}\n.hero{\n    width: 100%;\n    /* margin-top: 100px; */\n    /* border-bottom: 30px dashed black; */\n}\n.hero h3{\n    font-size: 40pt;\n    width: 750px;\n    margin: 0 auto;\n    /* text-align: center; */\n}\n.subtextmain{\n    margin-top: 20px;\n    font-size: 60pt;\n    margin-bottom: 200px;\n}\n/* hours */\n.hours-section{\n    margin-top: 100px;\n    /* border-bottom: 30px dashed black; */\n    width: 100%;\n}\n.hours-list{\n    font-size: 20pt;\n    width: 300px;\n    margin: 0 auto;\n    margin-top: 15px;\n    margin-bottom: 200px;\n    line-height: 40px;\n}\n/* location */\n.location-section{\n    margin-top: 200px;\n    margin-bottom: 200px;\n    display: flex;\n    flex-direction: column;\n}\n.location-section h3{\n    margin-top: 20px;\n}\n.pho-location-image{\n    margin-top: 40px;\n}\n\n\n\n\n\n\n\n/* landing section */\n.landing-section{\n    /* border-top: 30px dashed black; */\n\n}\n\n\n\n/* menu tab section */\n.menu-tab-section{\n\n    margin-top: 80px;\n    font-family: 'Zilla Slab';\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n.menu-item{\n    display: grid;\n    font-size: 30px;\n    margin-top: 20px;\n    grid-template-columns: 30px 600px 100px;\n}\n.menu-item p:last-child{\n    font-family: sans-serif;\n    font-size: 15px;\n}\n.menu-item-price{\n    color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;AACV;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA,UAAU;;AAGV,WAAW;AACX;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,mCAAmC;AACvC;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;AAC5B;;AAEA,aAAa;AACb;IACI,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,oCAAoC;IACpC,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,uBAAuB;IACvB,sCAAsC;AAC1C;AACA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,wBAAwB;AAC5B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;AACA,UAAU;AACV;IACI,iBAAiB;IACjB,sCAAsC;IACtC,WAAW;AACf;AACA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;AACrB;AACA,aAAa;AACb;IACI,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;;;;;;;AAQA,oBAAoB;AACpB;IACI,mCAAmC;;AAEvC;;;;AAIA,qBAAqB;AACrB;;IAEI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,uCAAuC;AAC3C;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB","sourcesContent":["/* reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n    overflow-y: scroll;\n}\n\n\n/* fonts */\n@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,700;1,700&display=swap');\n\n/* colors */\n:root{\n    --red:#FF0045;\n    --black: #000000;\n    --blue: #0056FF;\n    --lighttan: #EEE9E9;\n\n}\n.home-tab-section, .menu-tab-section, .landing-section, .contact-tab-section{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.tabbutton{\n    background-color: var(--lighttan);\n    font-family: 'Zilla Slab';\n    font-size: 20px;\n    padding: 10px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border: black 2px solid;\n    border-radius: 10px;\n    margin: 40px;\n}\n\n.tabbutton:hover, .tabbutton:focus{\n    background-color: var(--black);\n    color: white;\n    cursor: pointer;\n}\n\n/* header section */\nheader{\n    display: grid;\n    width: 820px;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    align-content: center;\n    margin-bottom: 50px;\n    margin-top: 40px;\n    grid-template-rows: 1fr;\n    grid-template-columns: .5fr 3fr 1fr;\n}\n.phohoalogo{\n    width: 150px;\n}\nheader h1{\n    font-size: 70pt;\n    font-family: 'Zilla Slab';\n    color: var(--red);\n    text-transform: uppercase;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\nheader p{\n    font-family: sans-serif;\n    font-weight: 600;\n    font-size: 35px;\n    text-transform:uppercase;\n    color: var(--blue);\n}\nheader p:last-child{\n    text-align: center;\n    font-weight: 500;\n    font-size: 20px;\n    text-transform:uppercase;\n}\n\n/* home tab */\n.home-tab-section{\n    margin-top: 50px;\n}\nh2{\n    font-family: 'Zilla Slab', monospace;\n    font-style: italic;\n    font-size: 40pt;\n    color: var(--red);\n    text-align: center;\n}\nh3{\n    font-family: 'Zilla Slab', monospace;\n    font-size: 20pt;\n    color: var(--black);\n    text-align: center;\n}\n.hero{\n    width: 100%;\n    /* margin-top: 100px; */\n    /* border-bottom: 30px dashed black; */\n}\n.hero h3{\n    font-size: 40pt;\n    width: 750px;\n    margin: 0 auto;\n    /* text-align: center; */\n}\n.subtextmain{\n    margin-top: 20px;\n    font-size: 60pt;\n    margin-bottom: 200px;\n}\n/* hours */\n.hours-section{\n    margin-top: 100px;\n    /* border-bottom: 30px dashed black; */\n    width: 100%;\n}\n.hours-list{\n    font-size: 20pt;\n    width: 300px;\n    margin: 0 auto;\n    margin-top: 15px;\n    margin-bottom: 200px;\n    line-height: 40px;\n}\n/* location */\n.location-section{\n    margin-top: 200px;\n    margin-bottom: 200px;\n    display: flex;\n    flex-direction: column;\n}\n.location-section h3{\n    margin-top: 20px;\n}\n.pho-location-image{\n    margin-top: 40px;\n}\n\n\n\n\n\n\n\n/* landing section */\n.landing-section{\n    /* border-top: 30px dashed black; */\n\n}\n\n\n\n/* menu tab section */\n.menu-tab-section{\n\n    margin-top: 80px;\n    font-family: 'Zilla Slab';\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n.menu-item{\n    display: grid;\n    font-size: 30px;\n    margin-top: 20px;\n    grid-template-columns: 30px 600px 100px;\n}\n.menu-item p:last-child{\n    font-family: sans-serif;\n    font-size: 15px;\n}\n.menu-item-price{\n    color: var(--blue);\n}"],"sourceRoot":""}]);
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
PhoMap.classList.add('pho-location-image');
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
menuitemnumber.textContent = '1.';

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
menuitemdiv2.classList.add('menu-item');

let menuitemnumber2 = document.createElement('div');
menuitemnumber2.classList.add('menu-item-number');
menuitemnumber2.textContent = '2.';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEhBQTBILG9CQUFvQjtBQUM5STtBQUNBLGlqQkFBaWpCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0pBQWdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxTQUFTLHlCQUF5QixHQUFHLHlDQUF5QyxvQkFBb0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsS0FBSywrRUFBK0Usb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSx3Q0FBd0MsZ0NBQWdDLHNCQUFzQixvQkFBb0IseUJBQXlCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLHVDQUF1QyxxQ0FBcUMsbUJBQW1CLHNCQUFzQixHQUFHLGlDQUFpQyxvQkFBb0IsbUJBQW1CLDhC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V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNXO0FBQ047QUFDQTtBQUNNOzs7QUFHaEMsaURBQWlEO0FBQ2pELG9CQUFvQiw2Q0FBTyxFQUFFOzs7O0FBSTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBDQUFJO0FBQ3BDLGdDQUFnQywwQ0FBSTtBQUNwQztBQUNBO0FBQ0EsZ0NBQWdDLDZDQUFPO0FBQ3ZDLGdDQUFnQywwQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdDQUFnQywwQ0FBSTtBQUNwQyxnQ0FBZ0MsMENBQUk7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBTztBQUN2QyxnQ0FBZ0MsMENBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnQ0FBZ0MsMENBQUk7QUFDcEMsZ0NBQWdDLDZDQUFPO0FBQ3ZDO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQUk7QUFDcEMsZ0NBQWdDLDZDQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBSTtBQUN4QjtBQUNBO0FBQ0EseUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WmlsbGErU2xhYjppdGFsLHdnaHRAMCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcmVzZXQgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5cXG4vKiBmb250cyAqL1xcblxcbi8qIGNvbG9ycyAqL1xcbjpyb290e1xcbiAgICAtLXJlZDojRkYwMDQ1O1xcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcbiAgICAtLWJsdWU6ICMwMDU2RkY7XFxuICAgIC0tbGlnaHR0YW46ICNFRUU5RTk7XFxuXFxufVxcbi5ob21lLXRhYi1zZWN0aW9uLCAubWVudS10YWItc2VjdGlvbiwgLmxhbmRpbmctc2VjdGlvbiwgLmNvbnRhY3QtdGFiLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFiYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHRhbik7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYic7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbn1cXG5cXG4udGFiYnV0dG9uOmhvdmVyLCAudGFiYnV0dG9uOmZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBoZWFkZXIgc2VjdGlvbiAqL1xcbmhlYWRlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDgyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgM2ZyIDFmcjtcXG59XFxuLnBob2hvYWxvZ297XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXNpemU6IDcwcHQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYic7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5oZWFkZXIgcHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcbmhlYWRlciBwOmxhc3QtY2hpbGR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XFxufVxcblxcbi8qIGhvbWUgdGFiICovXFxuLmhvbWUtdGFiLXNlY3Rpb257XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbmgye1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5oM3tcXG4gICAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlcm97XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBtYXJnaW4tdG9wOiAxMDBweDsgKi9cXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMzBweCBkYXNoZWQgYmxhY2s7ICovXFxufVxcbi5oZXJvIGgze1xcbiAgICBmb250LXNpemU6IDQwcHQ7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuLnN1YnRleHRtYWlue1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDYwcHQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xcbn1cXG4vKiBob3VycyAqL1xcbi5ob3Vycy1zZWN0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMzBweCBkYXNoZWQgYmxhY2s7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uaG91cnMtbGlzdHtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcbi8qIGxvY2F0aW9uICovXFxuLmxvY2F0aW9uLXNlY3Rpb257XFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmxvY2F0aW9uLXNlY3Rpb24gaDN7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5waG8tbG9jYXRpb24taW1hZ2V7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qIGxhbmRpbmcgc2VjdGlvbiAqL1xcbi5sYW5kaW5nLXNlY3Rpb257XFxuICAgIC8qIGJvcmRlci10b3A6IDMwcHggZGFzaGVkIGJsYWNrOyAqL1xcblxcbn1cXG5cXG5cXG5cXG4vKiBtZW51IHRhYiBzZWN0aW9uICovXFxuLm1lbnUtdGFiLXNlY3Rpb257XFxuXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYic7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZW51LWl0ZW17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDYwMHB4IDEwMHB4O1xcbn1cXG4ubWVudS1pdGVtIHA6bGFzdC1jaGlsZHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLm1lbnUtaXRlbS1wcmljZXtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLFVBQVU7O0FBR1YsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0EsVUFBVTtBQUNWO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7Ozs7Ozs7QUFRQSxvQkFBb0I7QUFDcEI7SUFDSSxtQ0FBbUM7O0FBRXZDOzs7O0FBSUEscUJBQXFCO0FBQ3JCOztJQUVJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHJlc2V0ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuXFxuLyogZm9udHMgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOml0YWwsd2dodEAwLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBjb2xvcnMgKi9cXG46cm9vdHtcXG4gICAgLS1yZWQ6I0ZGMDA0NTtcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1ibHVlOiAjMDA1NkZGO1xcbiAgICAtLWxpZ2h0dGFuOiAjRUVFOUU5O1xcblxcbn1cXG4uaG9tZS10YWItc2VjdGlvbiwgLm1lbnUtdGFiLXNlY3Rpb24sIC5sYW5kaW5nLXNlY3Rpb24sIC5jb250YWN0LXRhYi1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHR0YW4pO1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogNDBweDtcXG59XFxuXFxuLnRhYmJ1dHRvbjpob3ZlciwgLnRhYmJ1dHRvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA4MjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDNmciAxZnI7XFxufVxcbi5waG9ob2Fsb2dve1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbmhlYWRlciBoMXtcXG4gICAgZm9udC1zaXplOiA3MHB0O1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuaGVhZGVyIHB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5oZWFkZXIgcDpsYXN0LWNoaWxke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcbn1cXG5cXG4vKiBob21lIHRhYiAqL1xcbi5ob21lLXRhYi1zZWN0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5oMntcXG4gICAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogNDBwdDtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaDN7XFxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZXJve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogbWFyZ2luLXRvcDogMTAwcHg7ICovXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDMwcHggZGFzaGVkIGJsYWNrOyAqL1xcbn1cXG4uaGVybyBoM3tcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcbi5zdWJ0ZXh0bWFpbntcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiA2MHB0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG59XFxuLyogaG91cnMgKi9cXG4uaG91cnMtc2VjdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDMwcHggZGFzaGVkIGJsYWNrOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmhvdXJzLWxpc3R7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4vKiBsb2NhdGlvbiAqL1xcbi5sb2NhdGlvbi1zZWN0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5sb2NhdGlvbi1zZWN0aW9uIGgze1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ucGhvLWxvY2F0aW9uLWltYWdle1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBsYW5kaW5nIHNlY3Rpb24gKi9cXG4ubGFuZGluZy1zZWN0aW9ue1xcbiAgICAvKiBib3JkZXItdG9wOiAzMHB4IGRhc2hlZCBibGFjazsgKi9cXG5cXG59XFxuXFxuXFxuXFxuLyogbWVudSB0YWIgc2VjdGlvbiAqL1xcbi5tZW51LXRhYi1zZWN0aW9ue1xcblxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4ubWVudS1pdGVte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCA2MDBweCAxMDBweDtcXG59XFxuLm1lbnUtaXRlbSBwOmxhc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5tZW51LWl0ZW0tcHJpY2V7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBjb250YWN0IHNlY3Rpb25cbmxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYi1zZWN0aW9uJyk7XG5cblxuXG5cblxuLy8gZXhwb3J0IGNvbnRhY3RcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCIvLyBob21lIHNlY3Rpb25cbmxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLXRhYi1zZWN0aW9uJyk7XG5cblxuLy8gaGVyb1xubGV0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xubGV0IHN1YnRleHRsaXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuc3VidGV4dGxpdHRsZS50ZXh0Q29udGVudCA9IFwiRm91ciBkZWNhZGVzIGFuZCBvbmx5IG9uZSB0aGluZyBvbiB0aGUgbWVudTpcIjsgXG5sZXQgc3VidGV4dG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuc3VidGV4dG1haW4udGV4dENvbnRlbnQgPSBcImF1dGhlbnRpYyBiZWVmIHBobyBzb3VwXCI7XG5zdWJ0ZXh0bWFpbi5jbGFzc0xpc3QuYWRkKCdzdWJ0ZXh0bWFpbicpXG5oZXJvLmFwcGVuZENoaWxkKHN1YnRleHRsaXR0bGUpOyAgXG5oZXJvLmFwcGVuZENoaWxkKHN1YnRleHRtYWluKTsgIFxuXG5cbi8vIGhvdXJzXG5sZXQgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5ob3Vycy5jbGFzc0xpc3QuYWRkKCdob3Vycy1zZWN0aW9uJyk7XG5sZXQgaG91cnNoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5sZXQgaG91cnNzcGVjaWZpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5ob3Vyc3NwZWNpZmljLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKTtcbmhvdXJzaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG5ob3Vyc3NwZWNpZmljLnRleHRDb250ZW50ID0gYFxuTW9uZGF5OiA3YW0tOHBtXG5UdWVzZGF5OiA3YW0tOHBtXG5XZWRuZXNkYXk6IDdhbS04cG1cblRodXJzZGF5OiA3YW0tOHBtXG5GcmlkYXk6IDdhbS04cG1cblNhdHVyZGF5OiAgN2FtLThwbVxuU3VuZGF5OiA3YW0tOHBtYDtcbmhvdXJzLmFwcGVuZENoaWxkKGhvdXJzaGVhZGxpbmUpO1xuaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNzcGVjaWZpYyk7XG5cbi8vIGxvY2F0aW9uXG5sZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5sb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1zZWN0aW9uJyk7XG5sZXQgbG9jYXRpb250aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7IC8vIGxvY2F0aW9uIHRpdGxlXG5sb2NhdGlvbnRpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGVkIGluIExpdHRsZSBTYWlnb25cIjtcbmxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9udGl0bGUpO1xubGV0IGxvY2F0aW9uYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vIGxvY2F0aW9uIGFkZHJlc3NcbmxvY2F0aW9uYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNDcxNyBFbCBDYWpvbiBCbHZkLCBTYW4gRGllZ28sIENBIDkyMTE1XCI7XG5sb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbmFkZHJlc3MpO1xuaW1wb3J0IE1hcCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvUGhvSG9hTG9jYXRpb24ucG5nJzsgLy8gbWFwXG5jb25zdCBQaG9NYXAgPSBuZXcgSW1hZ2UoKTtcblBob01hcC5jbGFzc0xpc3QuYWRkKCdwaG8tbG9jYXRpb24taW1hZ2UnKTtcblBob01hcC5zcmMgPSBNYXA7XG5sb2NhdGlvbi5hcHBlbmRDaGlsZChQaG9NYXApO1xuXG5cblxuaG9tZS5hcHBlbmRDaGlsZChoZXJvKTtcbmhvbWUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuaG9tZS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4vLyBleHBvcnQgaG9tZVxuZXhwb3J0IGRlZmF1bHQgaG9tZSIsIi8vIGxhbmRpbmcgc2VjdGlvblxubGV0IGxhbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5sYW5kaW5nLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctc2VjdGlvbicpO1xuXG4vLyBIRUFERVJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuLy8gaW1nXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbG9nby5qcGcnO1xuY29uc3QgUGhvTG9nbyA9IG5ldyBJbWFnZSgpO1xuUGhvTG9nby5jbGFzc0xpc3QuYWRkKCdwaG9ob2Fsb2dvJyk7XG5QaG9Mb2dvLnNyYyA9IExvZ287XG5oZWFkZXIuYXBwZW5kQ2hpbGQoUGhvTG9nbyk7XG5cbi8vIHBobyBob2FcbmxldCBwaG9ob2Fsb2dvdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5waG9ob2Fsb2dvdGV4dC50ZXh0Q29udGVudCA9IFwiUGhvIEhvYVwiO1xuaGVhZGVyLmFwcGVuZENoaWxkKHBob2hvYWxvZ290ZXh0KTtcbi8vIHJlc3RhdXJhbnRcbmxldCByZXN0YXVyYW50ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudGRpdik7XG4vLyByZXNhdXJhbnQgcGFyYVxubGV0IHJlc3RhdXJhbnRzdWJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucmVzdGF1cmFudHN1YnRleHQudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIjtcbnJlc3RhdXJhbnRkaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudHN1YnRleHQpO1xuLy8gZXN0IDE5ODQgcGFyYVxubGV0IGVzdGFibGlzaGVkc3VidGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmVzdGFibGlzaGVkc3VidGV4dC50ZXh0Q29udGVudCA9IFwiRXN0LiAxOTg0XCI7XG5yZXN0YXVyYW50ZGl2LmFwcGVuZENoaWxkKGVzdGFibGlzaGVkc3VidGV4dCk7XG5cblxuLy8gbmF2XG5sZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4vLyBsaW5rIGhvbWVcbmxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG5uYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4vLyBsaW5rIG1lbnVcbmxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubWVudS5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xubWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiXG5uYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4vLyBsaW5rIGNvbnRhY3RcbmxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29udGFjdC5jbGFzc0xpc3QuYWRkKCd0YWJidXR0b24nKTtcbmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG5uYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cblxuXG5cblxuXG4vLyBhcHBlbmQgY29udGVudCB0byBsYW5kaW5nXG5sYW5kaW5nLmFwcGVuZENoaWxkKGhlYWRlcik7XG5sYW5kaW5nLmFwcGVuZENoaWxkKG5hdik7XG4vLyBleHBvcnQgbGFuZGluZ1xuZXhwb3J0IGRlZmF1bHQgbGFuZGluZyIsIi8vIG1lbnUgc2VjdGlvblxubGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiLXNlY3Rpb24nKTtcblxuLy8gaDIgXG5sZXQgcGhvc2VjdGlvbmgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBob3NlY3Rpb25oMi50ZXh0Q29udGVudCA9ICdQaG8nO1xuXG4vLyBkaXYgZm9yIG1lbnUgaXRlbSAxXG5sZXQgbWVudWl0ZW1kaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51aXRlbWRpdjEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbmxldCBtZW51aXRlbW51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1udW1iZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW51bWJlcicpO1xubWVudWl0ZW1udW1iZXIudGV4dENvbnRlbnQgPSAnMS4nO1xuXG5sZXQgbWVudWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10ZXh0Jyk7XG5cbmxldCBtZW51aXRlbW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5tZW51aXRlbW5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcbm1lbnVpdGVtbmFtZS50ZXh0Q29udGVudCA9ICdEQUMgQklFVCBYRSBMVUEgKFggTEFSR0UgQk9XTCknO1xuXG5sZXQgbWVudWl0ZW1kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVpdGVtZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2NyaXB0aW9uJyk7XG5tZW51aXRlbWRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1NwZWNpYWwgQ29tYm8gdy8gcmFyZSBzbGljZXMgb2Ygc3RlYWssIHdlbGwtZG9uZSBicmlza2V0LCBmbGFuaywgdGVuZG9uLCBhbmQgdHJpcGUnO1xubWVudWl0ZW0uYXBwZW5kQ2hpbGQobWVudWl0ZW1uYW1lKTtcbm1lbnVpdGVtLmFwcGVuZENoaWxkKG1lbnVpdGVtZGVzY3JpcHRpb24pO1xuXG5sZXQgbWVudWl0ZW1wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1wcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbm1lbnVpdGVtcHJpY2UudGV4dENvbnRlbnQgPSAnJDEwLjkwJztcblxubWVudWl0ZW1kaXYxLmFwcGVuZENoaWxkKG1lbnVpdGVtbnVtYmVyKTtcbm1lbnVpdGVtZGl2MS5hcHBlbmRDaGlsZChtZW51aXRlbSk7XG5tZW51aXRlbWRpdjEuYXBwZW5kQ2hpbGQobWVudWl0ZW1wcmljZSk7XG5cbi8vIGRpdiBmb3IgbWVudSBpdGVtIDJcbmxldCBtZW51aXRlbWRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVpdGVtZGl2Mi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxubGV0IG1lbnVpdGVtbnVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudWl0ZW1udW1iZXIyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1udW1iZXInKTtcbm1lbnVpdGVtbnVtYmVyMi50ZXh0Q29udGVudCA9ICcyLic7XG5cbmxldCBtZW51aXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVpdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGV4dCcpO1xuXG5sZXQgbWVudWl0ZW1uYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbm1lbnVpdGVtbmFtZTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLW5hbWUnKTtcbm1lbnVpdGVtbmFtZTIudGV4dENvbnRlbnQgPSAnREFDIEJJRVQnO1xuXG5sZXQgbWVudWl0ZW1kZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5tZW51aXRlbWRlc2NyaXB0aW9uMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbm1lbnVpdGVtZGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gJ1NwZWNpYWwgQ29tYm8gdy8gcmFyZSBzbGljZXMgb2Ygc3RlYWssIHdlbGwtZG9uZSBicmlza2V0LCBmbGFuaywgdGVuZG9uLCBhbmQgdHJpcGUnO1xubWVudWl0ZW0yLmFwcGVuZENoaWxkKG1lbnVpdGVtbmFtZTIpO1xubWVudWl0ZW0yLmFwcGVuZENoaWxkKG1lbnVpdGVtZGVzY3JpcHRpb24yKTtcblxubGV0IG1lbnVpdGVtcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51aXRlbXByaWNlMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbm1lbnVpdGVtcHJpY2UyLnRleHRDb250ZW50ID0gJyQxMC4yMCc7XG5cbm1lbnVpdGVtZGl2Mi5hcHBlbmRDaGlsZChtZW51aXRlbW51bWJlcjIpO1xubWVudWl0ZW1kaXYyLmFwcGVuZENoaWxkKG1lbnVpdGVtMik7XG5tZW51aXRlbWRpdjIuYXBwZW5kQ2hpbGQobWVudWl0ZW1wcmljZTIpO1xuXG4vLyBhcHBlbmQgc2VjdGlvbnMgdG8gbWVudSB0YWIgc2VjdGlvblxuXG5tZW51LmFwcGVuZENoaWxkKHBob3NlY3Rpb25oMik7XG5tZW51LmFwcGVuZENoaWxkKG1lbnVpdGVtZGl2MSk7XG5tZW51LmFwcGVuZENoaWxkKG1lbnVpdGVtZGl2Mik7XG5cbi8vIGV4cG9ydCBtZW51XG5leHBvcnQgZGVmYXVsdCBtZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsYW5kaW5nIGZyb20gJy4vbGFuZGluZyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpOyAvLyBjcmVhdGUgY29udGVudCBkaXZcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZyk7IC8vIGFwcGVuZCBsYW5kaW5nXG5cblxuXG4vLyB0YWIgc3dpdGNoaW5nIGJlaGF2aW91clxubGV0IGhvbWV0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiYnV0dG9uLmhvbWUnKTtcbmxldCBtZW51dGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmJ1dHRvbi5tZW51Jyk7XG5sZXQgY29udGFjdHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJidXR0b24uY29udGFjdCcpO1xuZnVuY3Rpb24gc3dpdGNoVGFicyhlKXtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhYmJ1dHRvbiBob21lXCIpe1xuICAgICAgICBpZiAoTWVudVRhYk9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb250YWN0VGFiT24gPT09IHRydWUpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250YWN0KTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgICAgIH1cbiAgICAgICAgSG9tZVRhYk9uID0gdHJ1ZTtcbiAgICAgICAgTWVudVRhYk9uID0gZmFsc2U7XG4gICAgICAgIENvbnRhY3RUYWJPbiA9IGZhbHNlO1xuICAgIH1lbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFiYnV0dG9uIG1lbnVcIil7XG4gICAgICAgIGlmIChIb21lVGFiT24gPT09IHRydWUpe1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChob21lKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENvbnRhY3RUYWJPbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRhY3QpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgfVxuICAgICAgICBIb21lVGFiT24gPSBmYWxzZTtcbiAgICAgICAgTWVudVRhYk9uID0gdHJ1ZTtcbiAgICAgICAgQ29udGFjdFRhYk9uID0gZmFsc2U7XG4gICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YWJidXR0b24gY29udGFjdFwiKXtcbiAgICAgICAgaWYgKEhvbWVUYWJPbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGhvbWUpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWVudVRhYk9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICB9XG4gICAgICAgIEhvbWVUYWJPbiA9IGZhbHNlO1xuICAgICAgICBNZW51VGFiT24gPSBmYWxzZTtcbiAgICAgICAgQ29udGFjdFRhYk9uID0gdHJ1ZTtcbiAgICB9XG59XG5ob21ldGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFicyk7XG5tZW51dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFicyk7XG5jb250YWN0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFicyk7XG5cbi8vIG9uIGxvYWRcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG5sZXQgSG9tZVRhYk9uID0gdHJ1ZTtcbmxldCBNZW51VGFiT24gPSBmYWxzZTtcbmxldCBDb250YWN0VGFiT24gPSBmYWxzZTsiXSwic291cmNlUm9vdCI6IiJ9