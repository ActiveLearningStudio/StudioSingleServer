/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dist.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/style.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".h5p-advanced-blanks {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* Text */\r\n\r\n.h5p-advanced-blanks #h5p-cloze-container p,\r\n.h5p-advanced-blanks #h5p-cloze-container div {\r\n    line-height: 1.8em;\r\n    margin: 0 0 1em;\r\n    text-align: justify;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n    .h5p-advanced-blanks #h5p-cloze-container p,\r\n    .h5p-advanced-blanks #h5p-cloze-container div {\r\n        text-align: unset;\r\n    }\r\n}\r\n\r\n\r\n/* Input */\r\n\r\n.h5p-advanced-blanks .h5p-input-wrapper {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input {\r\n    font-family: H5PDroidSans, sans-serif;\r\n    font-size: 1em;\r\n    border-radius: 0.25em;\r\n    border: 1px solid #a0a0a0;\r\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.h5p-advanced-blanks .blank input.h5p-text-input {\r\n  max-width: calc(100vw - 64px);\r\n}\r\n\r\n.h5p-advanced-blanks .blank select.h5p-text-input {\r\n  max-width: calc(100vw - 36px);\r\n}\r\n\r\n/* IE + Chrome specific fixes */\r\n\r\n.h5p-text-input::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n:not(.correct).blank.has-tip button {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* Select mode */\r\n\r\nselect.h5p-text-input {\r\n    appearance: button;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: button;\r\n}\r\n\r\n\r\n/* Showing solution input */\r\n\r\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\r\n    border: 1px dashed #9dd8bb;\r\n    color: #255c41;\r\n    background: #FFFFFF;\r\n}\r\n\r\n\r\n/* Focussed input */\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\r\n    border-color: #7fb8ff;\r\n}\r\n\r\n\r\n/* Correctly answered input */\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\r\n    background: #9dd8bb;\r\n    border: 1px solid #9dd8bb;\r\n    color: #255c41;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;    \r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    text-decoration: none;\r\n    content: \"\\f00c\";\r\n    font-family: 'H5PFontAwesome4';\r\n    color: #255c41;\r\n}\r\n\r\n\r\n/* Incorrect answers */\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-text-input {\r\n    background-color: #f7d0d0;\r\n    border: 1px solid #f7d0d0;\r\n    color: #b71c1c;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Spelling errors */\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\r\n    background-color: #ffff99;\r\n    border: 1px solid #ffff99;\r\n    color: black;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Buttons */\r\n\r\n.h5p-advanced-blanks .blank button {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n\r\n/* Highlight in spelling mistake marker */\r\n\r\n.spelling-mistake .missing-character,\r\n.spelling-mistake .mistaken-character {\r\n    color: red;\r\n    font-weight: bold;\r\n    -webkit-animation-duration: 500ms;\r\n            animation-duration: 500ms;\r\n    -webkit-animation-name: blink-color;\r\n            animation-name: blink-color;\r\n    -webkit-animation-iteration-count: 13;\r\n            animation-iteration-count: 13;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n.spelling-mistake .mistaken-character {\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n/* Highlights in text */\r\n\r\n.h5p-advanced-blanks .highlighted {\r\n    background-color: rgba(255, 0, 0, 0.2);\r\n    padding: 0.4em;\r\n    margin: -0.4em;\r\n    -webkit-animation-duration: 1000ms;\r\n            animation-duration: 1000ms;\r\n    -webkit-animation-name: blink-background-color;\r\n            animation-name: blink-background-color;\r\n    -webkit-animation-iteration-count: 3;\r\n            animation-iteration-count: 3;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n@keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n\r\n/* Others */\r\n\r\n.h5p-advanced-blanks .invisible {\r\n    visibility: collapse;\r\n}\r\n\r\n\r\n/* Tips */\r\n\r\n.h5p-advanced-blanks .h5p-tip-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  right: 0.4em;\r\n  font-size: 1em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\r\n    padding-right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\r\n    right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\r\n    padding-right: 3.5em;\r\n}\r\n\r\n/* improves appearance of h5p tip shadows */\r\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\r\n  color: black;\r\n  opacity: 0.13;\r\n}\r\n\r\n/* pending feedback marker */\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\r\n    display: none;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\r\n    font-size: large;    \r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\r\n    -webkit-animation-iteration-count: 2;\r\n            animation-iteration-count: 2;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    position: absolute;\r\n    left: -0.4em;\r\n    top: -0.7em;\r\n    content: \"\\f05a\";\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #b71c1c;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #ffff00;\r\n    text-shadow: 0px 0px 0.5em black;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    2%,\r\n    20% {\r\n        -webkit-transform: translate3d(-0.5px, 0, 0);\r\n                transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        -webkit-transform: translate3d(1px, 0, 0);\r\n                transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        -webkit-transform: translate3d(-2px, 0, 0);\r\n                transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        -webkit-transform: translate3d(2px, 0, 0);\r\n                transform: translate3d(2px, 0, 0);\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    2%,\r\n    20% {\r\n        -webkit-transform: translate3d(-0.5px, 0, 0);\r\n                transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        -webkit-transform: translate3d(1px, 0, 0);\r\n                transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        -webkit-transform: translate3d(-2px, 0, 0);\r\n                transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        -webkit-transform: translate3d(2px, 0, 0);\r\n                transform: translate3d(2px, 0, 0);\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/diff/dist/diff.js":
/*!****************************************!*\
  !*** ./node_modules/diff/dist/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function Diff() {}
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return value.split('');
    },
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }

  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }

  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF

  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();

  wordDiff.equals = function (left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }

    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, options) {
    options = generateOptions(options, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }
  function diffWordsWithSpace(oldStr, newStr, options) {
    return wordDiff.diff(oldStr, newStr, options);
  }

  var lineDiff = new Diff();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }
  function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  var sentenceDiff = new Diff();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  var cssDiff = new Diff();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;

  jsonDiff.castInput = function (value) {
    var _this$options = this.options,
        undefinedReplacement = _this$options.undefinedReplacement,
        _this$options$stringi = _this$options.stringifyReplacer,
        stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
      return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed. Accepts an optional replacer

  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    if (replacer) {
      obj = replacer(key, obj);
    }

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (_typeof(obj) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);

      var sortedKeys = [],
          _key;

      for (_key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  var arrayDiff = new Diff();

  arrayDiff.tokenize = function (value) {
    return value.slice();
  };

  arrayDiff.join = arrayDiff.removeEmpty = function (value) {
    return value;
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }

  function parsePatch(uniDiff) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        var data = fileHeader[2].split('\t', 2);
        var fileName = data[0].replace(/\\\\/g, '\\');

        if (/^".*"$/.test(fileName)) {
          fileName = fileName.substr(1, fileName.length - 2);
        }

        index[keyPrefix + 'FileName'] = fileName;
        index[keyPrefix + 'Header'] = (data[1] || '').trim();
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: +chunkHeader[2] || 1,
        newStart: +chunkHeader[3],
        newLines: +chunkHeader[4] || 1,
        lines: [],
        linedelimiters: []
      };
      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }

  // Iterator that traverses in the range of [min, max], stepping
  // by distance from a given start position. I.e. for [0, 4], with
  // start of 2, this will iterate 2, 3, 1, 4, 0.
  function distanceIterator (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text length, then
      // hunk can't fit on the text. Return undefined

    };
  }

  function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) {
      return line === patchContent;
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL,
        addEOFNL;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line;

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator = distanceIterator(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    var diffOffset = 0;

    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

      diffOffset += _hunk.newLines - _hunk.oldLines;

      if (_toPos < 0) {
        // Creating a new file
        _toPos = 0;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line,
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.

  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }

  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff = diffLines(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;

    var _loop = function _loop(i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        var _curRange;

        // If we have previous context, start with that
        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes


        (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            var _curRange2;

            // Overlapping
            (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
          } else {
            var _curRange3;

            // end the range and output
            var contextSize = Math.min(lines.length, options.context);

            (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);
              var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

              if (!oldEOFNewline && noNlBeforeAdds) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              }

              if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      _loop(i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    var ret = [];

    if (oldFileName == newFileName) {
      ret.push('Index: ' + oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i];
      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }
  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }

  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return arrayStartsWith(a, b);
  }
  function arrayStartsWith(array, start) {
    if (start.length > array.length) {
      return false;
    }

    for (var i = 0; i < start.length; i++) {
      if (start[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines),
        oldLines = _calcOldNewLineCount.oldLines,
        newLines = _calcOldNewLineCount.newLines;

    if (oldLines !== undefined) {
      hunk.oldLines = oldLines;
    } else {
      delete hunk.oldLines;
    }

    if (newLines !== undefined) {
      hunk.newLines = newLines;
    } else {
      delete hunk.newLines;
    }
  }
  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return parsePatch(param)[0];
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return structuredPatch(undefined, undefined, base, param);
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        var _hunk$lines;

        // Mine inserted
        (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        var _hunk$lines2;

        // Theirs inserted
        (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        var _hunk$lines3;

        (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));

        return;
      } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        var _hunk$lines4;

        (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));

        return;
      }
    } else if (arrayEqual(myChanges, theirChanges)) {
      var _hunk$lines5;

      (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      var _hunk$lines6;

      (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function (line) {
      if (typeof line !== 'string') {
        var myCount = calcOldNewLineCount(line.mine);
        var theirCount = calcOldNewLineCount(line.theirs);

        if (oldLines !== undefined) {
          if (myCount.oldLines === theirCount.oldLines) {
            oldLines += myCount.oldLines;
          } else {
            oldLines = undefined;
          }
        }

        if (newLines !== undefined) {
          if (myCount.newLines === theirCount.newLines) {
            newLines += myCount.newLines;
          } else {
            newLines = undefined;
          }
        }
      } else {
        if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
          newLines++;
        }

        if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
          oldLines++;
        }
      }
    });
    return {
      oldLines: oldLines,
      newLines: newLines
    };
  }

  // See: http://code.google.com/p/google-diff-match-patch/wiki/API
  function convertChangesToDMP(changes) {
    var ret = [],
        change,
        operation;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }

  /* See LICENSE file for terms of use */

  exports.Diff = Diff;
  exports.diffChars = diffChars;
  exports.diffWords = diffWords;
  exports.diffWordsWithSpace = diffWordsWithSpace;
  exports.diffLines = diffLines;
  exports.diffTrimmedLines = diffTrimmedLines;
  exports.diffSentences = diffSentences;
  exports.diffCss = diffCss;
  exports.diffJson = diffJson;
  exports.diffArrays = diffArrays;
  exports.structuredPatch = structuredPatch;
  exports.createTwoFilesPatch = createTwoFilesPatch;
  exports.createPatch = createPatch;
  exports.applyPatch = applyPatch;
  exports.applyPatches = applyPatches;
  exports.parsePatch = parsePatch;
  exports.merge = merge;
  exports.convertChangesToDMP = convertChangesToDMP;
  exports.convertChangesToXML = convertChangesToXML;
  exports.canonicalize = canonicalize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/entries/dist.ts":
/*!*****************************!*\
  !*** ./src/entries/dist.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
var app_1 = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.ts");
// Load library
H5P = H5P || {};
H5P.AdvancedBlanks = app_1.default;


/***/ }),

/***/ "./src/lib/helpers.ts":
/*!****************************!*\
  !*** ./src/lib/helpers.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getLongestString(strings) {
    return strings.reduce(function (prev, current) { return current.length > prev.length ? current : prev; }, "");
}
exports.getLongestString = getLongestString;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.shuffleArray = shuffleArray;


/***/ }),

/***/ "./src/lib/ractive-events-keys.ts":
/*!****************************************!*\
  !*** ./src/lib/ractive-events-keys.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// TODO can we just declare the keydownHandler once? using `this`?
function makeKeyDefinition(code) {
    return function (node, fire) {
        function keydownHandler(event) {
            var which = event.which || event.keyCode;
            if (code && which === code) {
                event.preventDefault();
                fire({
                    node: node,
                    original: event
                });
            }
            else if (!code && [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function (c) { return c === which; }).length === 0) {
                fire({
                    node: node,
                    original: event
                });
            }
        }
        node.addEventListener('keydown', keydownHandler, false);
        return {
            teardown: function () {
                node.removeEventListener('keydown', keydownHandler, false);
            }
        };
    };
}
exports.enter = makeKeyDefinition(13);
exports.tab = makeKeyDefinition(9);
exports.escape = makeKeyDefinition(27);
exports.space = makeKeyDefinition(32);
exports.leftarrow = makeKeyDefinition(37);
exports.rightarrow = makeKeyDefinition(39);
exports.downarrow = makeKeyDefinition(40);
exports.uparrow = makeKeyDefinition(38);
exports.anykey = makeKeyDefinition();


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ./content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var data_repository_1 = __webpack_require__(/*! ./services/data-repository */ "./src/scripts/services/data-repository.ts");
var cloze_controller_1 = __webpack_require__(/*! ./controllers/cloze-controller */ "./src/scripts/controllers/cloze-controller.ts");
var localization_1 = __webpack_require__(/*! ./services/localization */ "./src/scripts/services/localization.ts");
var settings_1 = __webpack_require__(/*! ./services/settings */ "./src/scripts/services/settings.ts");
var message_service_1 = __webpack_require__(/*! ./services/message-service */ "./src/scripts/services/message-service.ts");
var unwrapper_1 = __webpack_require__(/*! ./helpers/unwrapper */ "./src/scripts/helpers/unwrapper.ts");
var xapi_1 = __webpack_require__(/*! ./models/xapi */ "./src/scripts/models/xapi.ts");
var permutations_1 = __webpack_require__(/*! ./helpers/permutations */ "./src/scripts/helpers/permutations.ts");
var States;
(function (States) {
    States["ongoing"] = "ongoing";
    States["checking"] = "checking";
    States["showingSolutions"] = "showing-solution";
    States["submittedAnswers"] = "submitted-answer";
    States["finished"] = "finished";
    States["showingSolutionsEmbedded"] = "showing-solution-embedded";
})(States || (States = {}));
var AdvancedBlanks = /** @class */ (function (_super) {
    __extends(AdvancedBlanks, _super);
    /**
     * @constructor
     *
     * @param {object} config
     * @param {string} contentId
     * @param {object} contentData
     */
    function AdvancedBlanks(config, contentId, contentData) {
        if (contentData === void 0) { contentData = {}; }
        var _this = _super.call(this) || this;
        /**
         * Indicates if user has entered any answer so far.
         */
        _this.answered = false;
        /**
         * Indicates if user has submitted answer.
         */
        _this.submitted = false;
        /**
         * Indicates if user is in show solution mode.
         */
        _this.showSolutionMode = false;
        /**
         * Called from outside when the score of the cloze has changed.
         */
        _this.onScoreChanged = function (score, maxScore) {
            if (_this.clozeController.isFullyFilledOut) {
                _this.transitionState();
                if (_this.state !== States.finished)
                    _this.state = States.checking;
                _this.showFeedback();
            }
            else {
                _this.setFeedback("", score, maxScore);
            }
            _this.transitionState();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.onTyped = function () {
            if (_this.state === States.checking) {
                _this.state = States.ongoing;
                _this.toggleButtonVisibility(_this.state);
            }
            _this.triggerXAPI('interacted');
            _this.answered = true;
        };
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPICompleted();
            }
        };
        /**
         * Overrides the attach method of the superclass (H5P.Question) and calls it
         * at the same time. (equivalent to super.attach($container)).
         * This is necessary, as Ractive needs to be initialized with an existing DOM
         * element. DOM elements are created in H5P.Question.attach, so initializing
         * Ractive in registerDomElements doesn't work.
         */
        _this.attach = (function (original) {
            return function ($container) {
                original($container);
                _this.clozeController.initialize(_this.container.get(0), $container);
                if (_this.clozeController.deserializeCloze(_this.previousState)) {
                    _this.answered = _this.clozeController.isFilledOut;
                    if (_this.settings.autoCheck)
                        _this.onCheckAnswer();
                    _this.toggleButtonVisibility(_this.state);
                }
            };
        })(_this.attach);
        /**
         * Called by H5P.Question.attach(). Creates all content elements and registers them
         * with H5P.Question.
         */
        _this.registerDomElements = function () {
            this.registerMedia();
            this.setIntroduction(this.repository.getTaskDescription());
            this.container = this.jQuery("<div/>", { "class": "h5p-advanced-blanks" });
            this.setContent(this.container);
            this.registerButtons();
            this.moveToState(States.ongoing);
        };
        _this.onCheckAnswer = function () {
            _this.clozeController.checkAll();
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
            _this.transitionState();
            if (_this.state !== States.finished)
                _this.state = States.checking;
            _this.showFeedback();
            _this.toggleButtonVisibility(_this.state);
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPICompleted();
            }
        };
        _this.onSubmitAnswer = function () {
            _this.submitted = true;
            _this.state = States.submittedAnswers;
            _this.toggleButtonVisibility(_this.state);
            _this.triggerXAPISubmittedCurriki();
            _this.addSubmitAnswerFeedback();
        };
        /**
         * Add submit answer feedback div
         */
        _this.addSubmitAnswerFeedback = function () {
            // var $submit_message = '<div class="submit-answer-feedback" style = "color: red">Result has been submitted successfully</div>';
            // H5P.jQuery('.h5p-question-buttons').after($submit_message);
        };
        /**
         * Remove submit answer feedback div
         */
        _this.removeSubmitAnswerFeedback = function () {
            H5P.jQuery('.submit-answer-feedback').remove();
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function () {
            _this.showSolutionMode = true;
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
            if (_this.submitted) {
                _this.removeSubmitAnswerFeedback();
            }
        };
        _this.onRetry = function () {
            /* XAPI restart the activityStartTime */
            _this.activityStartTime = Date.now();
            _this.removeFeedback();
            _this.removeSubmitAnswerFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.showSolutionMode = false;
            _this.submitted = false;
            _this.moveToState(States.ongoing);
        };
        _this.getCurrentState = function () {
            return _this.clozeController.serializeCloze();
        };
        /****************************************
         * Implementation of Question contract  *
         ****************************************/
        _this.getAnswerGiven = function () {
            return _this.answered || _this.clozeController.maxScore === 0;
        };
        _this.getScore = function (fromCheckAnswer) {
            if (!fromCheckAnswer) {
                _this.onCheckAnswer();
            }
            return _this.clozeController.currentScore;
        };
        _this.getMaxScore = function () {
            return _this.clozeController.maxScore;
        };
        _this.showSolutions = function () {
            _this.onCheckAnswer();
            _this.onShowSolution();
            _this.moveToState(States.showingSolutionsEmbedded);
        };
        _this.resetTask = function () {
            _this.onRetry();
        };
        /***
         * XApi implementation
         */
        /**
         * Trigger xAPI answered event
         */
        _this.triggerXAPIAnswered = function () {
            _this.answered = true;
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            _this.trigger(xAPIEvent);
        };
        /**
         * Trigger xAPI completed event
         */
        _this.triggerXAPICompleted = function () {
            _this.triggerXAPIScored(_this.clozeController.currentScore, _this.clozeController.maxScore, 'completed');
        };
        /**
         * Trigger xAPI submitted curriki event
         */
        _this.triggerXAPISubmittedCurriki = function () {
            _this.triggerXAPIScored(_this.clozeController.currentScore, _this.clozeController.maxScore, 'submitted-curriki');
        };
        /**
         * Get xAPI data.
         * Contract used by report rendering engine.
         *
         * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
         */
        _this.getXAPIData = function () {
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            return {
                statement: xAPIEvent.data.statement
            };
        };
        /**
         * Generate xAPI object definition used in xAPI statements.
         * @return {Object}
         */
        _this.getxAPIDefinition = function () {
            var definition = new xapi_1.XAPIActivityDefinition();
            definition.description = {
                'en-US': '<p>' + _this.repository.getTaskDescription() + '</p>' + _this.repository.getClozeText()
            };
            definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
            definition.interactionType = 'fill-in'; // We use the 'fill-in' type even in select mode, as the xAPI format for selections doesn't really cater for sequences.
            definition.correctResponsesPattern = [];
            var correctResponsesPatternPrefix = '{case_matters=' + _this.settings.caseSensitive + '}';
            // xAPI forces us to create solution patterns for all possible solution combinations
            var correctAnswerPermutations = permutations_1.createPermutations(_this.clozeController.getCorrectAnswerList());
            for (var _i = 0, correctAnswerPermutations_1 = correctAnswerPermutations; _i < correctAnswerPermutations_1.length; _i++) {
                var permutation = correctAnswerPermutations_1[_i];
                definition.correctResponsesPattern.push(correctResponsesPatternPrefix + permutation.join('[,]'));
            }
            return definition;
        };
        /**
         * Add the question itself to the definition part of an xAPIEvent
         */
        _this.addQuestionToXAPI = function (xAPIEvent) {
            var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
            _this.jQuery.extend(definition, _this.getxAPIDefinition());
        };
        /**
         * Add the response part to an xAPI event
         *
         * @param {H5P.XAPIEvent} xAPIEvent
         *  The xAPI event we will add a response to
         */
        _this.addResponseToXAPI = function (xAPIEvent) {
            xAPIEvent.setScoredResult(_this.clozeController.currentScore, _this.clozeController.maxScore, _this);
            xAPIEvent.data.statement.result.response = _this.getxAPIResponse();
        };
        /**
         * Generate xAPI user response, used in xAPI statements.
         * @return {string} User answers separated by the "[,]" pattern
         */
        _this.getxAPIResponse = function () {
            var usersAnswers = _this.getCurrentState();
            return usersAnswers.join('[,]');
        };
        config = H5P.jQuery.extend(true, {}, {
            currikisettings: {
                disableSubmitButton: false,
                currikil10n: {
                    submitAnswer: "Submit"
                }
            },
        }, config);
        _this.jQuery = H5P.jQuery;
        _this.contentId = contentId;
        var unwrapper = new unwrapper_1.Unrwapper(_this.jQuery);
        _this.settings = new settings_1.H5PSettings(config);
        _this.localization = new localization_1.H5PLocalization(config);
        _this.repository = new data_repository_1.H5PDataRepository(config, _this.settings, _this.localization, _this.jQuery, unwrapper);
        _this.messageService = new message_service_1.MessageService(_this.jQuery);
        blank_loader_1.BlankLoader.initialize(_this.settings, _this.localization, _this.jQuery, _this.messageService);
        _this.clozeController = new cloze_controller_1.ClozeController(_this.repository, _this.settings, _this.localization, _this.messageService);
        _this.clozeController.onScoreChanged = _this.onScoreChanged;
        _this.clozeController.onSolved = _this.onSolved;
        _this.clozeController.onAutoChecked = _this.onAutoChecked;
        _this.clozeController.onTyped = _this.onTyped;
        if (contentData && contentData.previousState)
            _this.previousState = contentData.previousState;
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
    };
    /**
     * @returns JQuery - The outer h5p container. The library can add dialogues to this
     * element.
     */
    AdvancedBlanks.prototype.getH5pContainer = function () {
        var $content = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content');
        var $containerParents = $content.parents('.h5p-container');
        // select find container to attach dialogs to
        var $container;
        if ($containerParents.length !== 0) {
            // use parent highest up if any
            $container = $containerParents.last();
        }
        else if ($content.length !== 0) {
            $container = $content;
        }
        else {
            $container = this.jQuery(document.body);
        }
        return $container;
    };
    AdvancedBlanks.prototype.registerMedia = function () {
        var media = this.repository.getMedia();
        if (!media || !media.library)
            return;
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
            if (media.params.file) {
                this.setImage(media.params.file.path, {
                    disableImageZooming: this.settings.disableImageZooming,
                    alt: media.params.alt
                });
            }
        }
        else if (type === 'H5P.Video') {
            if (media.params.sources) {
                this.setVideo(media);
            }
        }
    };
    AdvancedBlanks.prototype.registerButtons = function () {
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', 'Check Answers', this.onCheckAnswer, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
        if (!this.settings.disableSubmitButton) {
            // Submit answer button
            this.addButton('submit-answer', this.localization.getObjectForStructure(localization_1.LocalizationStructures.currikiSettings).currikil10n.submitAnswer, this.onSubmitAnswer, true);
        }
        // Show solution button
        this.addButton('show-solution', this.localization.getTextFromLabel(localization_1.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton);
        // Try again button
        if (this.settings.enableRetry === true) {
            this.addButton('try-again', this.localization.getTextFromLabel(localization_1.LocalizationLabels.retryButton), this.onRetry, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmRetryDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmRetry),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
    };
    AdvancedBlanks.prototype.showFeedback = function () {
        var scoreText = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(localization_1.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace('@score', this.clozeController.currentScore).replace('@total', this.clozeController.maxScore);
        this.setFeedback(scoreText, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(localization_1.LocalizationLabels.scoreBarLabel));
    };
    /**
     * Shows are hides buttons depending on the current state and settings made
     * by the content creator.
     * @param  {States} state
     */
    AdvancedBlanks.prototype.moveToState = function (state) {
        this.state = state;
        this.toggleButtonVisibility(state);
    };
    AdvancedBlanks.prototype.toggleButtonVisibility = function (state) {
        if (this.settings.enableSolutionsButton) {
            if (!this.showSolutionMode && ((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing) || (state === States.submittedAnswers && !this.clozeController.isSolved))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions || state === States.submittedAnswers)) {
            this.showButton('try-again');
        }
        else {
            this.hideButton('try-again');
        }
        if (state === States.ongoing && this.settings.enableCheckButton) {
            this.showButton('check-answer');
        }
        else {
            this.hideButton('check-answer');
        }
        if (!this.settings.disableSubmitButton) {
            if (!this.submitted && (state === States.checking || state === States.showingSolutions || state === States.finished)) {
                this.showButton('submit-answer');
            }
            else {
                this.hideButton('submit-answer');
            }
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
            this.hideButton('submit-answer');
        }
        this.trigger('resize');
    };
    return AdvancedBlanks;
}(H5P.Question));
exports.default = AdvancedBlanks;


/***/ }),

/***/ "./src/scripts/content-loaders/blank-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/blank-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var blank_1 = __webpack_require__(/*! ../models/blank */ "./src/scripts/models/blank.ts");
var message_1 = __webpack_require__(/*! ../models/message */ "./src/scripts/models/message.ts");
var BlankLoader = /** @class */ (function () {
    function BlankLoader(settings, localization, jquery, messageService) {
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.messageService = messageService;
    }
    BlankLoader.initialize = function (settings, localization, jquery, messageService) {
        this._instance = new BlankLoader(settings, localization, jquery, messageService);
        return this._instance;
    };
    Object.defineProperty(BlankLoader, "instance", {
        get: function () {
            if (this._instance)
                return this._instance;
            throw "BlankLoader must be initialized before use.";
        },
        enumerable: true,
        configurable: true
    });
    BlankLoader.prototype.decodeHtml = function (html) {
        var elem = document.createElement('textarea');
        elem.innerHTML = html;
        return elem.value;
    };
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id);
        if (correctText) {
            correctText = this.decodeHtml(correctText);
            blank.addCorrectAnswer(new answer_1.Answer(correctText, "", false, 0, this.settings));
        }
        blank.setHint(new message_1.Message(hintText ? hintText : "", false, 0));
        if (incorrectAnswers) {
            for (var _i = 0, incorrectAnswers_1 = incorrectAnswers; _i < incorrectAnswers_1.length; _i++) {
                var h5pIncorrectAnswer = incorrectAnswers_1[_i];
                blank.addIncorrectAnswer(this.decodeHtml(h5pIncorrectAnswer.incorrectAnswerText), h5pIncorrectAnswer.incorrectAnswerFeedback, h5pIncorrectAnswer.showHighlight, h5pIncorrectAnswer.highlight);
            }
        }
        return blank;
    };
    BlankLoader.prototype.replaceSnippets = function (blank, snippets) {
        var _this = this;
        blank.correctAnswers.concat(blank.incorrectAnswers)
            .forEach(function (answer) { return answer.message.text = _this.getStringWithSnippets(answer.message.text, snippets); });
        blank.hint.text = this.getStringWithSnippets(blank.hint.text, snippets);
    };
    BlankLoader.prototype.getStringWithSnippets = function (text, snippets) {
        if (!text || text === undefined)
            return "";
        if (!snippets)
            return text;
        for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
            var snippet = snippets_1[_i];
            if (snippet.name === undefined || snippet.name === "" || snippet.text === undefined || snippet.text === "")
                continue;
            text = text.replace("@" + snippet.name, snippet.text);
        }
        return text;
    };
    /**
     * Adds the highlight objects to the answers in the correct and incorrect answer list.
     * @param  {Highlight[]} highlightsBefore - All highlights coming before the blank.
     * @param  {Highlight[]} highlightsAfter - All highlights coming after the blank.
     */
    BlankLoader.prototype.linkHighlightIdToObject = function (blank, highlightsBefore, highlightsAfter) {
        for (var _i = 0, _a = blank.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        for (var _b = 0, _c = blank.incorrectAnswers; _b < _c.length; _b++) {
            var answer = _c[_b];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        blank.hint.linkHighlight(highlightsBefore, highlightsAfter);
    };
    return BlankLoader;
}());
exports.BlankLoader = BlankLoader;


/***/ }),

/***/ "./src/scripts/content-loaders/cloze-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/cloze-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ./blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_element_1 = __webpack_require__(/*! ../models/cloze-element */ "./src/scripts/models/cloze-element.ts");
var highlight_1 = __webpack_require__(/*! ../models/highlight */ "./src/scripts/models/highlight.ts");
var cloze_1 = __webpack_require__(/*! ../models/cloze */ "./src/scripts/models/cloze.ts");
/**
 * Loads a cloze object.
 */
var ClozeLoader = /** @class */ (function () {
    function ClozeLoader() {
    }
    /**
     * @param  {string} html - The html string that contains the cloze with blanks marking and highlight markings.
     * @param  {Blank[]} blanks - All blanks as entered by the content author.
     * @returns Cloze
     */
    ClozeLoader.createCloze = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        html = ClozeLoader.normalizeBlankMarkings(html);
        var conversionResult = ClozeLoader.convertMarkupToSpans(html, blanks);
        html = conversionResult.html;
        orderedAllElementsList = conversionResult.orderedAllElementsList;
        highlightInstances = conversionResult.highlightInstances;
        blanksInstances = conversionResult.blanksInstances;
        ClozeLoader.linkHighlightsObjects(orderedAllElementsList, highlightInstances, blanksInstances);
        var cloze = new cloze_1.Cloze();
        cloze.html = html;
        cloze.blanks = blanksInstances;
        cloze.highlights = highlightInstances;
        return cloze;
    };
    /**
    * Converts !!signal!! highlight markup and ___  blank markup into <span>...</span>.
    * Returns the resulting html string and three lists of all active elements used in the cloze:
    *    orderedAllElements: highlights and blanks in the order of appearance in the html.
    *    highlightInstances: only highlights in the order of appearance
    *    blanksInstances: only blanks in the order of appearance
    * @param  {string} html
    * @param  {Blank[]} blanks
    * @returns Lists of active elements (see description).
    */
    ClozeLoader.convertMarkupToSpans = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        var exclamationMarkRegExp = /!!(.{1,40}?)!!/i;
        var highlightCounter = 0;
        var blankCounter = 0;
        // Searches the html string for highlights and blanks and inserts spans. 
        do {
            var nextHighlightMatch = html.match(exclamationMarkRegExp);
            var nextBlankIndex = html.indexOf(ClozeLoader.normalizedBlankMarker);
            if (nextHighlightMatch && ((nextHighlightMatch.index < nextBlankIndex) || (nextBlankIndex < 0))) {
                // next active element is a highlight
                var highlight = new highlight_1.Highlight(nextHighlightMatch[1], "highlight_" + highlightCounter);
                highlightInstances.push(highlight);
                orderedAllElementsList.push(highlight);
                html = html.replace(exclamationMarkRegExp, "<span id='container_highlight_" + highlightCounter + "'></span>");
                highlightCounter++;
            }
            else if (nextBlankIndex >= 0) {
                // next active element is a blank
                if (blankCounter >= blanks.length) {
                    // if the blank is not in the repository (The content author has marked too many blanks in the text, but not entered correct answers.)
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span></span>");
                }
                else {
                    var blank = blanks[blankCounter];
                    blanksInstances.push(blank);
                    orderedAllElementsList.push(blank);
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span id='container_" + blank.id + "'></span>");
                    blankCounter++;
                }
            }
        } while (nextHighlightMatch || (nextBlankIndex >= 0));
        return {
            html: html,
            orderedAllElementsList: orderedAllElementsList,
            highlightInstances: highlightInstances,
            blanksInstances: blanksInstances
        };
    };
    /**
     * Looks for all instances of marked blanks and replaces them with ___.
     * @param  {string} html
     * @returns string
     */
    ClozeLoader.normalizeBlankMarkings = function (html) {
        var underlineBlankRegEx = /_{3,}/g;
        html = html.replace(underlineBlankRegEx, ClozeLoader.normalizedBlankMarker);
        return html;
    };
    /**
    * Iterates through all blanks and calls their linkHighlightIdsToObjects(...).
    * @param orderedAllElementsList
    * @param highlightInstances
    * @param blanksInstances
    */
    ClozeLoader.linkHighlightsObjects = function (orderedAllElementsList, highlightInstances, blanksInstances) {
        for (var _i = 0, blanksInstances_1 = blanksInstances; _i < blanksInstances_1.length; _i++) {
            var blank = blanksInstances_1[_i];
            var nextBlankIndexInArray = orderedAllElementsList.indexOf(blank);
            var highlightsBeforeBlank = orderedAllElementsList
                .slice(0, nextBlankIndexInArray)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; })
                .reverse();
            var highlightsAfterBlank = orderedAllElementsList
                .slice(nextBlankIndexInArray + 1)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; });
            blank_loader_1.BlankLoader.instance.linkHighlightIdToObject(blank, highlightsBeforeBlank, highlightsAfterBlank);
        }
    };
    ClozeLoader.normalizedBlankMarker = '___';
    return ClozeLoader;
}());
exports.ClozeLoader = ClozeLoader;


/***/ }),

/***/ "./src/scripts/controllers/cloze-controller.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/cloze-controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_loader_1 = __webpack_require__(/*! ../content-loaders/cloze-loader */ "./src/scripts/content-loaders/cloze-loader.ts");
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var RactiveEventsKeys = __webpack_require__(/*! ../../lib/ractive-events-keys */ "./src/lib/ractive-events-keys.ts");
var ClozeController = /** @class */ (function () {
    function ClozeController(repository, settings, localization, MessageService) {
        var _this = this;
        this.repository = repository;
        this.settings = settings;
        this.localization = localization;
        this.MessageService = MessageService;
        // Storage of the ractive objects that link models and views
        this.highlightRactives = {};
        this.blankRactives = {};
        this.checkAll = function () {
            _this.cloze.hideAllHighlights();
            for (var _i = 0, _a = _this.cloze.blanks; _i < _a.length; _i++) {
                var blank = _a[_i];
                if ((!blank.isCorrect) && blank.enteredText !== "")
                    blank.evaluateAttempt(true, true);
            }
            _this.refreshCloze();
            _this.checkAndNotifyCompleteness();
        };
        this.textTyped = function (blank) {
            blank.onTyped();
            if (_this.onTyped)
                _this.onTyped();
            _this.refreshCloze();
        };
        this.focus = function (blank) {
            blank.onFocussed();
            _this.refreshCloze();
        };
        this.displayFeedback = function (blank) {
            blank.onDisplayFeedback();
            _this.refreshCloze();
        };
        this.showHint = function (blank) {
            _this.cloze.hideAllHighlights();
            blank.showHint();
            _this.refreshCloze();
        };
        this.requestCloseTooltip = function (blank) {
            blank.removeTooltip();
            _this.refreshCloze();
            _this.jquery.find("#" + blank.id).focus();
        };
        this.checkBlank = function (blank, cause) {
            if ((cause === 'blur' || cause === 'change')) {
                blank.lostFocus();
            }
            if (cause === 'change' && _this.onTyped) {
                _this.onTyped();
            }
            if (_this.settings.autoCheck) {
                if (!blank.enteredText || blank.enteredText === "")
                    return;
                _this.cloze.hideAllHighlights();
                blank.evaluateAttempt(false);
                _this.checkAndNotifyCompleteness();
                _this.refreshCloze();
                _this.onAutoChecked();
            }
            if ((cause === 'enter')
                && ((_this.settings.autoCheck && blank.isCorrect && !_this.isSolved)
                    || !_this.settings.autoCheck)) {
                // move to next blank
                var index = _this.cloze.blanks.indexOf(blank);
                var nextId;
                while (index < _this.cloze.blanks.length - 1 && !nextId) {
                    index++;
                    if (!_this.cloze.blanks[index].isCorrect)
                        nextId = _this.cloze.blanks[index].id;
                }
                if (nextId)
                    _this.jquery.find("#" + nextId).focus();
            }
        };
        this.reset = function () {
            _this.cloze.reset();
            _this.refreshCloze();
        };
        this.showSolutions = function () {
            _this.cloze.showSolutions();
            _this.refreshCloze();
        };
        this.checkAndNotifyCompleteness = function () {
            if (_this.onScoreChanged)
                _this.onScoreChanged(_this.currentScore, _this.maxScore);
            if (_this.cloze.isSolved) {
                if (_this.onSolved)
                    _this.onSolved();
                return true;
            }
            return false;
        };
    }
    Object.defineProperty(ClozeController.prototype, "maxScore", {
        get: function () {
            return this.cloze.blanks.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "currentScore", {
        get: function () {
            var score = this.cloze.blanks.filter(function (b) { return b.isCorrect; }).length;
            return Math.max(0, score);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "allBlanksEntered", {
        get: function () {
            if (this.cloze)
                return this.cloze.blanks.every(function (blank) { return blank.isError || blank.isCorrect || blank.isRetry; });
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isSolved", {
        get: function () {
            return this.cloze.isSolved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.some(function (b) { return b.enteredText !== ''; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFullyFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.every(function (b) { return b.enteredText !== ''; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets up all blanks, the cloze itself and the ractive bindings.
     * @param  {HTMLElement} root
     */
    ClozeController.prototype.initialize = function (root, jquery) {
        this.jquery = jquery;
        this.isSelectCloze = this.settings.clozeType === enums_1.ClozeType.Select ? true : false;
        var blanks = this.repository.getBlanks();
        if (this.isSelectCloze && this.settings.selectAlternatives === enums_1.SelectAlternatives.All) {
            for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
                var blank = blanks_1[_i];
                var otherBlanks = blanks.filter(function (v) { return v !== blank; });
                blank.loadChoicesFromOtherBlanks(otherBlanks);
            }
        }
        var snippets = this.repository.getSnippets();
        blanks.forEach(function (blank) { return blank_loader_1.BlankLoader.instance.replaceSnippets(blank, snippets); });
        this.cloze = cloze_loader_1.ClozeLoader.createCloze(this.repository.getClozeText(), blanks);
        var containers = this.createAndAddContainers(root);
        containers.cloze.innerHTML = this.cloze.html;
        this.createRactiveBindings();
    };
    ClozeController.prototype.createAndAddContainers = function (addTo) {
        var clozeContainerElement = document.createElement('div');
        clozeContainerElement.id = 'h5p-cloze-container';
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
        }
        else {
            clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
        }
        addTo.appendChild(clozeContainerElement);
        return {
            cloze: clozeContainerElement
        };
    };
    ClozeController.prototype.createHighlightBinding = function (highlight) {
        this.highlightRactives[highlight.id] = new Ractive({
            el: '#container_' + highlight.id,
            template: __webpack_require__(/*! ../views/highlight.ractive.html */ "./src/scripts/views/highlight.ractive.html"),
            data: {
                object: highlight
            }
        });
    };
    ClozeController.prototype.createBlankBinding = function (blank) {
        var ractive = new Ractive({
            el: '#container_' + blank.id,
            template: __webpack_require__(/*! ../views/blank.ractive.html */ "./src/scripts/views/blank.ractive.html"),
            data: {
                isSelectCloze: this.isSelectCloze,
                blank: blank
            },
            events: {
                enter: RactiveEventsKeys.enter,
                escape: RactiveEventsKeys.escape,
                anykey: RactiveEventsKeys.anykey
            }
        });
        ractive.on("checkBlank", this.checkBlank);
        ractive.on("showHint", this.showHint);
        ractive.on("textTyped", this.textTyped);
        ractive.on("closeMessage", this.requestCloseTooltip);
        ractive.on("focus", this.focus);
        ractive.on("displayFeedback", this.displayFeedback);
        this.blankRactives[blank.id] = ractive;
    };
    ClozeController.prototype.createRactiveBindings = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            this.createHighlightBinding(highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            this.createBlankBinding(blank);
        }
    };
    /**
     * Updates all views of highlights and blanks. Can be called when a model
     * was changed
     */
    ClozeController.prototype.refreshCloze = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            var highlightRactive = this.highlightRactives[highlight.id];
            highlightRactive.set("object", highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            var blankRactive = this.blankRactives[blank.id];
            blankRactive.set("blank", blank);
        }
    };
    ClozeController.prototype.serializeCloze = function () {
        return this.cloze.serialize();
    };
    ClozeController.prototype.deserializeCloze = function (data) {
        if (!this.cloze || !data)
            return false;
        this.cloze.deserialize(data);
        this.refreshCloze();
        return true;
    };
    ClozeController.prototype.getCorrectAnswerList = function () {
        if (!this.cloze || this.cloze.blanks.length === 0)
            return [[]];
        var result = [];
        for (var _i = 0, _a = this.cloze.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            result.push(blank.getCorrectAnswers());
        }
        return result;
    };
    return ClozeController;
}());
exports.ClozeController = ClozeController;


/***/ }),

/***/ "./src/scripts/helpers/permutations.ts":
/*!*********************************************!*\
  !*** ./src/scripts/helpers/permutations.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a list of all possible permutations of a list of lists.
 * @param list The list to permute over.
 */
function createPermutations(list) {
    var output = [[]];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var currentSublist = list_1[_i];
        var newOutput = [];
        for (var _a = 0, currentSublist_1 = currentSublist; _a < currentSublist_1.length; _a++) {
            var sublistObject = currentSublist_1[_a];
            for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
                var o = output_1[_b];
                var newList = o.slice();
                newList.push(sublistObject);
                newOutput.push(newList);
            }
        }
        output = newOutput;
    }
    return output;
}
exports.createPermutations = createPermutations;


/***/ }),

/***/ "./src/scripts/helpers/unwrapper.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpers/unwrapper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class cleans html strings.
 */
var Unrwapper = /** @class */ (function () {
    function Unrwapper(jquery) {
        this.jquery = jquery;
    }
    /**
     * Cleans html strings by removing the outmost html tag of the string if there is only one tag.
     * Examples:  "<p>my text</p>"" becomes "my text"
     *            "<p>text 1</p><p>text 2</p2>" stays
     * @param html The html string
     * @returns the cleaned html string
     */
    Unrwapper.prototype.unwrap = function (html) {
        var parsed = this.jquery(html);
        if (parsed.length !== 1) {
            return html;
        }
        var unwrapped = parsed.unwrap().html();
        return unwrapped;
    };
    return Unrwapper;
}());
exports.Unrwapper = Unrwapper;


/***/ }),

/***/ "./src/scripts/models/answer.ts":
/*!**************************************!*\
  !*** ./src/scripts/models/answer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = __webpack_require__(/*! ./message */ "./src/scripts/models/message.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Correctness;
(function (Correctness) {
    Correctness[Correctness["ExactMatch"] = 0] = "ExactMatch";
    Correctness[Correctness["CloseMatch"] = 1] = "CloseMatch";
    Correctness[Correctness["NoMatch"] = 2] = "NoMatch";
})(Correctness = exports.Correctness || (exports.Correctness = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(usedAnswer) {
        this.usedAnswer = usedAnswer;
        this.correctness = Correctness.NoMatch;
        this.characterDifferenceCount = 0;
        this.usedAlternative = "";
    }
    return Evaluation;
}());
exports.Evaluation = Evaluation;
/**
 * Represents a possible answer the content author enters for a blank, e.g. the correct or an incorrect answer.
 */
var Answer = /** @class */ (function () {
    /**
     * @param  {string} answerText - The expected answer. Alternatives are separated by | or ; . (e.g. "Alternative 1|Alternative 2|Alternative 3|..."  -or- "Alternative 1;Alternative 2;Alternative 3")
     * @param  {string} reaction - The tooltip that should be displayed. Format: Tooltip Text;!!-1!! !!+1!!
     */
    function Answer(answerText, reaction, showHighlight, highlight, settings) {
        this.settings = settings;
        this.alternatives = answerText.split(/\//).map(function (s) { return s.trim(); });
        this.message = new message_1.Message(reaction, showHighlight, highlight);
        if (answerText.trim() === "") {
            this.appliesAlways = true;
        }
        else {
            this.appliesAlways = false;
        }
    }
    /**
     * Looks through the object's message ids and stores the references to the highlight object for these ids.
     * @param  {Highlight[]} highlightsBefore
     * @param  {Highlight[]} highlightsAfter
     */
    Answer.prototype.linkHighlightIdToObject = function (highlightsBefore, highlightsAfter) {
        this.message.linkHighlight(highlightsBefore, highlightsAfter);
    };
    /**
     * Turns on the highlights set by the content author for this answer.
     */
    Answer.prototype.activateHighlight = function () {
        if (this.message.highlightedElement)
            this.message.highlightedElement.isHighlighted = true;
    };
    Answer.prototype.cleanString = function (text) {
        text = text.trim();
        return text.replace(/\s{2,}/g, " ");
    };
    /**
     * Looks through the diff and checks how many character change operations are needed to turn one string into the other. Should return the same results as the Levensthein distance.
     * @param  {[{added?:boolean, boolean: removed?, string: value}]} diff - as returned by jsdiff
     * @returns number - the count of changes (replace, add, delete) needed to change the text from one string to the other
     */
    Answer.prototype.getChangesCountFromDiff = function (diff) {
        var totalChangesCount = 0;
        var lastType = "";
        var lastCount = 0;
        for (var _i = 0, diff_1 = diff; _i < diff_1.length; _i++) {
            var element = diff_1[_i];
            if (element.removed) {
                totalChangesCount += element.value.length;
                lastType = "removed";
            }
            else if (element.added) {
                if (lastType === "removed") {
                    if (lastCount < element.value.length) {
                        totalChangesCount += element.value.length - lastCount;
                    }
                }
                else {
                    totalChangesCount += element.value.length;
                }
                lastType = "added";
            }
            else {
                lastType = "same";
            }
            lastCount = element.value.length;
        }
        return totalChangesCount;
    };
    /**
     * Returns how many characters can be wrong to still be counted as a spelling mistake.
     * If spelling mistakes are turned off through the settings, it will return 0.
     * @param  {string} text
     * @returns number
     */
    Answer.prototype.getAcceptableSpellingMistakes = function (text) {
        var acceptableTypoCount;
        if (this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors) // TODO: consider removal
            acceptableTypoCount = Math.floor(text.length / 10) + 1;
        else
            acceptableTypoCount = 0;
        return acceptableTypoCount;
    };
    /**
     * Checks if the text entered by the user in an ettempt is matched by the answer,
     * @param  {string} attempt The text entered by the user.
     * @returns Evaluation indicates if the entered text is matched by the answer.
     */
    Answer.prototype.evaluateAttempt = function (attempt) {
        var cleanedAttempt = this.cleanString(attempt);
        var evaluation = new Evaluation(this);
        for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
            var alternative = _a[_i];
            var cleanedAlternative = this.cleanString(alternative);
            var diff = jsdiff.diffChars(cleanedAlternative, cleanedAttempt, { ignoreCase: !this.settings.caseSensitive });
            var changeCount = this.getChangesCountFromDiff(diff);
            if (changeCount === 0) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.ExactMatch;
                return evaluation;
            }
            if (changeCount <= this.getAcceptableSpellingMistakes(alternative)
                && (evaluation.characterDifferenceCount === 0 || changeCount < evaluation.characterDifferenceCount)) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.CloseMatch;
                evaluation.characterDifferenceCount = changeCount;
            }
        }
        return evaluation;
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/scripts/models/blank.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/blank.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
var answer_1 = __webpack_require__(/*! ./answer */ "./src/scripts/models/answer.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/scripts/models/enums.ts");
var localization_1 = __webpack_require__(/*! ../services/localization */ "./src/scripts/services/localization.ts");
var helpers_1 = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Blank = /** @class */ (function (_super) {
    __extends(Blank, _super);
    /**
     * Add incorrect answers after initializing the object. Call finishInitialization()
     * when done.
     * @param  {ISettings} settings
     * @param  {string} id
     * @param  {string} correctText?
     * @param  {string} hintText?
     */
    function Blank(settings, localization, jquery, messageService, id) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
        _this.enteredText = "";
        _this.correctAnswers = new Array();
        _this.incorrectAnswers = new Array();
        _this.choices = new Array();
        _this.type = cloze_element_1.ClozeElementType.Blank;
        _this.id = id;
        return _this;
    }
    /**
    * Call this method when all incorrect answers have been added.
    */
    Blank.prototype.finishInitialization = function () {
        if (this.settings.clozeType === enums_1.ClozeType.Select && this.settings.selectAlternatives === enums_1.SelectAlternatives.Alternatives) {
            this.loadChoicesFromOwnAlternatives();
        }
        this.calculateMinTextLength();
    };
    Blank.prototype.addCorrectAnswer = function (answer) {
        this.correctAnswers.push(answer);
    };
    Blank.prototype.getCorrectAnswers = function () {
        var result = [];
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            result = result.concat(answer.alternatives);
        }
        return result;
    };
    Blank.prototype.setHint = function (message) {
        this.hint = message;
        this.hasHint = this.hint.text !== "";
    };
    /**
     * Adds the incorrect answer to the list.
     * @param text - What the user must enter.
     * @param reaction  - What the user gets displayed when he enteres the text.
     */
    Blank.prototype.addIncorrectAnswer = function (text, reaction, showHighlight, highlight) {
        this.incorrectAnswers.push(new answer_1.Answer(text, reaction, showHighlight, highlight, this.settings));
    };
    /**
     * Returns how many characters the input box must have be to allow for all correct answers.
     */
    // TODO: refactor
    Blank.prototype.calculateMinTextLength = function () {
        var answers = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var correctAnswer = _a[_i];
            answers.push(helpers_1.getLongestString(correctAnswer.alternatives));
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            for (var _b = 0, _c = this.incorrectAnswers; _b < _c.length; _b++) {
                var incorrectAnswer = _c[_b];
                answers.push(helpers_1.getLongestString(incorrectAnswer.alternatives));
            }
        }
        var longestAnswer = helpers_1.getLongestString(answers);
        var l = longestAnswer.length;
        this.minTextLength = Math.max(10, l - (l % 10) + 10);
    };
    /**
     * Creates a list of choices from all alternatives provided by
     * the correct and incorrect answers.
     */
    Blank.prototype.loadChoicesFromOwnAlternatives = function () {
        this.choices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                this.choices.push(alternative);
            }
        }
        for (var _d = 0, _e = this.incorrectAnswers; _d < _e.length; _d++) {
            var answer = _e[_d];
            for (var _f = 0, _g = answer.alternatives; _f < _g.length; _f++) {
                var alternative = _g[_f];
                this.choices.push(alternative);
            }
        }
        this.choices = helpers_1.shuffleArray(this.choices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
     * Creates a list of choices from all correct answers of the cloze.
     * @param otherBlanks All OTHER blanks in the cloze. (excludes the current one!)
     */
    Blank.prototype.loadChoicesFromOtherBlanks = function (otherBlanks) {
        var ownChoices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                ownChoices.push(alternative);
            }
        }
        var otherChoices = new Array();
        for (var _d = 0, otherBlanks_1 = otherBlanks; _d < otherBlanks_1.length; _d++) {
            var otherBlank = otherBlanks_1[_d];
            for (var _e = 0, _f = otherBlank.correctAnswers; _e < _f.length; _e++) {
                var answer = _f[_e];
                for (var _g = 0, _h = answer.alternatives; _g < _h.length; _g++) {
                    var alternative = _h[_g];
                    otherChoices.push(alternative);
                }
            }
        }
        otherChoices = helpers_1.shuffleArray(otherChoices);
        var maxChoices = this.settings.selectAlternativeRestriction;
        if (maxChoices === undefined || maxChoices === 0)
            maxChoices = ownChoices.length + otherChoices.length;
        var leftOverChoices = maxChoices - ownChoices.length;
        for (var x = 0; x < leftOverChoices && x < otherChoices.length; x++) {
            if (ownChoices.indexOf(otherChoices[x]) >= 0) {
                leftOverChoices++;
            }
            else {
                ownChoices.push(otherChoices[x]);
            }
        }
        this.choices = helpers_1.shuffleArray(ownChoices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
    * Clears the blank from all entered text and hides popups.
    */
    Blank.prototype.reset = function () {
        this.enteredText = "";
        this.lastCheckedText = "";
        this.removeTooltip();
        this.setAnswerState(enums_1.MessageType.None);
        this.hasPendingFeedback = false;
    };
    /**
     * Sets the blank to a state in which the correct solution if shown if the user
     * hasn't entered a correct one so far.
     */
    Blank.prototype.showSolution = function () {
        this.evaluateAttempt(true);
        this.removeTooltip();
        if (this.isCorrect)
            return;
        this.enteredText = this.correctAnswers[0].alternatives[0];
        this.setAnswerState(enums_1.MessageType.ShowSolution);
    };
    Blank.prototype.onFocussed = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            this.setAnswerState(enums_1.MessageType.None);
            this.lastCheckedText = "";
        }
    };
    Blank.prototype.onDisplayFeedback = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
    };
    Blank.prototype.displayTooltip = function (message, type, surpressTooltip, id) {
        if (!surpressTooltip)
            this.messageService.show(id ? id : this.id, message, this, type);
        else {
            this.hasPendingFeedback = true;
        }
    };
    Blank.prototype.removeTooltip = function () {
        this.messageService.hide();
    };
    Blank.prototype.setTooltipErrorText = function (message, surpressTooltip) {
        if (message.highlightedElement) {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip, message.highlightedElement.id);
        }
        else {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip);
        }
    };
    Blank.prototype.getSpellingMistakeMessage = function (expectedText, enteredText) {
        var message = this.localization.getTextFromLabel(localization_1.LocalizationLabels.typoMessage);
        var diff = jsdiff.diffChars(expectedText, enteredText, { ignoreCase: !this.settings.caseSensitive });
        var mistakeSpan = this.jquery("<span/>", { "class": "spelling-mistake" });
        for (var index = 0; index < diff.length; index++) {
            var part = diff[index];
            var spanClass = '';
            if (part.removed) {
                if (index === diff.length - 1 || !diff[index + 1].added) {
                    part.value = part.value.replace(/./g, "_");
                    spanClass = 'missing-character';
                }
                else {
                    continue;
                }
            }
            if (part.added) {
                spanClass = 'mistaken-character';
            }
            var span = this.jquery("<span/>", { "class": spanClass, "html": part.value.replace(" ", "&nbsp;") });
            mistakeSpan.append(span);
        }
        message = message.replace("@mistake", this.jquery("<span/>").append(mistakeSpan).html());
        return message;
    };
    /**
     * Checks if the entered text is the correct answer or one of the
     * incorrect ones and gives the user feedback accordingly.
     */
    Blank.prototype.evaluateAttempt = function (surpressTooltips, forceCheck) {
        var _this = this;
        if (!this.hasPendingFeedback && this.lastCheckedText === this.enteredText && !forceCheck)
            return;
        this.lastCheckedText = this.enteredText.toString();
        this.hasPendingFeedback = false;
        this.removeTooltip();
        var exactCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var exactIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        if (exactCorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Correct);
            if (!this.settings.caseSensitive) {
                this.enteredText = exactCorrectMatches[0].usedAlternative;
            }
            return;
        }
        if (exactIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(exactIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        if (closeCorrectMatches.length > 0) {
            if (this.settings.warnSpellingErrors) {
                this.displayTooltip(this.getSpellingMistakeMessage(closeCorrectMatches[0].usedAlternative, this.enteredText), enums_1.MessageType.Retry, surpressTooltips);
                this.setAnswerState(enums_1.MessageType.Retry);
                return;
            }
            if (this.settings.acceptSpellingErrors) {
                this.setAnswerState(enums_1.MessageType.Correct);
                this.enteredText = closeCorrectMatches[0].usedAlternative;
                return;
            }
        }
        if (closeIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(closeIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        var alwaysApplyingAnswers = this.incorrectAnswers.filter(function (a) { return a.appliesAlways; });
        if (alwaysApplyingAnswers && alwaysApplyingAnswers.length > 0) {
            this.showErrorTooltip(alwaysApplyingAnswers[0], surpressTooltips);
        }
        this.setAnswerState(enums_1.MessageType.Error);
    };
    Blank.prototype.onTyped = function () {
        this.setAnswerState(enums_1.MessageType.None);
        this.lastCheckedText = "";
        this.removeTooltip();
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
    };
    /**
     * Sets the boolean properties isCorrect, is Error and isRetry according to thepassed  messageType.
     * @param messageType
     */
    Blank.prototype.setAnswerState = function (messageType) {
        this.isCorrect = false;
        this.isError = false;
        this.isRetry = false;
        this.isShowingSolution = false;
        switch (messageType) {
            case enums_1.MessageType.Correct:
                this.isCorrect = true;
                break;
            case enums_1.MessageType.Error:
                this.isError = true;
                break;
            case enums_1.MessageType.Retry:
                this.isRetry = true;
                break;
            case enums_1.MessageType.ShowSolution:
                this.isShowingSolution = true;
                break;
        }
    };
    Blank.prototype.showErrorTooltip = function (answer, surpressTooltip) {
        if (answer.message && answer.message.text) {
            this.setTooltipErrorText(answer.message, surpressTooltip);
        }
        if (!surpressTooltip) {
            answer.activateHighlight();
        }
    };
    /**
     * Displays the hint in the tooltip.
     */
    Blank.prototype.showHint = function () {
        if (this.isShowingSolution || this.isCorrect)
            return;
        this.removeTooltip();
        if (this.hint && this.hint.text !== "") {
            this.displayTooltip(this.hint.text, enums_1.MessageType.Retry, false);
            if (this.hint.highlightedElement) {
                this.hint.highlightedElement.isHighlighted = true;
            }
        }
    };
    Blank.prototype.serialize = function () {
        return this.enteredText;
    };
    Blank.prototype.deserialize = function (data) {
        this.enteredText = data;
    };
    return Blank;
}(cloze_element_1.ClozeElement));
exports.Blank = Blank;


/***/ }),

/***/ "./src/scripts/models/cloze-element.ts":
/*!*********************************************!*\
  !*** ./src/scripts/models/cloze-element.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClozeElementType;
(function (ClozeElementType) {
    ClozeElementType[ClozeElementType["Blank"] = 0] = "Blank";
    ClozeElementType[ClozeElementType["Highlight"] = 1] = "Highlight";
})(ClozeElementType = exports.ClozeElementType || (exports.ClozeElementType = {}));
var ClozeElement = /** @class */ (function () {
    function ClozeElement() {
    }
    return ClozeElement;
}());
exports.ClozeElement = ClozeElement;


/***/ }),

/***/ "./src/scripts/models/cloze.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/cloze.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the cloze. Instantiate with static createCloze().
 */
var Cloze = /** @class */ (function () {
    function Cloze() {
    }
    Object.defineProperty(Cloze.prototype, "isSolved", {
        /**
         * Returns true if all blanks were entered correctly.
         * @returns boolean
         */
        get: function () {
            return this.blanks.every(function (b) { return b.isCorrect === true; });
        },
        enumerable: true,
        configurable: true
    });
    Cloze.prototype.hideAllHighlights = function () {
        for (var _i = 0, _a = this.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            highlight.isHighlighted = false;
        }
    };
    Cloze.prototype.reset = function () {
        this.hideAllHighlights();
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.reset();
        }
    };
    Cloze.prototype.showSolutions = function () {
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.showSolution();
        }
        this.hideAllHighlights();
    };
    Cloze.prototype.serialize = function () {
        var cloze = [];
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            cloze.push(blank.serialize());
        }
        return cloze;
    };
    Cloze.prototype.deserialize = function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index >= this.blanks.length)
                return;
            var blank = this.blanks[index];
            blank.deserialize(data[index]);
        }
    };
    return Cloze;
}());
exports.Cloze = Cloze;


/***/ }),

/***/ "./src/scripts/models/enums.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/enums.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 0] = "Error";
    MessageType[MessageType["Correct"] = 1] = "Correct";
    MessageType[MessageType["Retry"] = 2] = "Retry";
    MessageType[MessageType["ShowSolution"] = 3] = "ShowSolution";
    MessageType[MessageType["None"] = 4] = "None";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ClozeType;
(function (ClozeType) {
    ClozeType[ClozeType["Type"] = 0] = "Type";
    ClozeType[ClozeType["Select"] = 1] = "Select";
})(ClozeType = exports.ClozeType || (exports.ClozeType = {}));
var SelectAlternatives;
(function (SelectAlternatives) {
    SelectAlternatives[SelectAlternatives["Alternatives"] = 0] = "Alternatives";
    SelectAlternatives[SelectAlternatives["All"] = 1] = "All";
})(SelectAlternatives = exports.SelectAlternatives || (exports.SelectAlternatives = {}));


/***/ }),

/***/ "./src/scripts/models/highlight.ts":
/*!*****************************************!*\
  !*** ./src/scripts/models/highlight.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
/**
 * Represents a highlight in the cloze.
 */
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(text, id) {
        var _this = _super.call(this) || this;
        _this.type = cloze_element_1.ClozeElementType.Highlight;
        _this.text = text;
        _this.id = id;
        _this.isHighlighted = false;
        return _this;
    }
    return Highlight;
}(cloze_element_1.ClozeElement));
exports.Highlight = Highlight;


/***/ }),

/***/ "./src/scripts/models/message.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/message.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a message that the content author has specified to be a reaction
 * to an user's answer.
 */
var Message = /** @class */ (function () {
    function Message(text, showHighlight, relativeHighlightPosition) {
        var _this = this;
        this.text = text;
        this.relativeHighlightPosition = relativeHighlightPosition;
        this.linkHighlight = function (highlightsBefore, highlightsAfter) {
            if (!_this.relativeHighlightPosition)
                return;
            if (_this.relativeHighlightPosition < 0 && (0 - _this.relativeHighlightPosition - 1) < highlightsBefore.length) {
                _this.highlightedElement = highlightsBefore[0 - _this.relativeHighlightPosition - 1];
            }
            else if (_this.relativeHighlightPosition > 0 && (_this.relativeHighlightPosition - 1 < highlightsAfter.length)) {
                _this.highlightedElement = highlightsAfter[_this.relativeHighlightPosition - 1];
            }
        };
        if (!showHighlight)
            this.relativeHighlightPosition = undefined;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/scripts/models/snippet.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/snippet.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A snippet is a text block that is put into placed marked in feedback texts or hints.
 */
var Snippet = /** @class */ (function () {
    /**
     * Constructs the snippet.
     * @param name The name of the snippet that is used when it is referenced in a feedbacktext (without the snippet marker @)
     * @param text The snippet itself (html)
     */
    function Snippet(name, text) {
        this.name = name;
        this.text = text;
    }
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./src/scripts/models/xapi.ts":
/*!************************************!*\
  !*** ./src/scripts/models/xapi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XAPIActivityDefinition = /** @class */ (function () {
    function XAPIActivityDefinition() {
    }
    return XAPIActivityDefinition;
}());
exports.XAPIActivityDefinition = XAPIActivityDefinition;


/***/ }),

/***/ "./src/scripts/services/data-repository.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/data-repository.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var snippet_1 = __webpack_require__(/*! ../models/snippet */ "./src/scripts/models/snippet.ts");
/**
 * Wraps around the h5p config object and provides access to the content.
 */
var H5PDataRepository = /** @class */ (function () {
    function H5PDataRepository(h5pConfigData, settings, localization, jquery, unwrapper) {
        this.h5pConfigData = h5pConfigData;
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.unwrapper = unwrapper;
    }
    /**
     * Returns the blank text of the cloze (as HTML markup).
     */
    H5PDataRepository.prototype.getClozeText = function () {
        return this.h5pConfigData.content.blanksText;
    };
    // TODO: remove or implement
    H5PDataRepository.prototype.getFeedbackText = function () {
        return "";
    };
    H5PDataRepository.prototype.getMedia = function () {
        return this.h5pConfigData.media;
    };
    H5PDataRepository.prototype.getTaskDescription = function () {
        return this.h5pConfigData.content.task;
    };
    H5PDataRepository.prototype.getBlanks = function () {
        var blanks = new Array();
        if (!this.h5pConfigData.content.blanksList)
            return blanks;
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("cloze" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList);
            blank.finishInitialization();
            blanks.push(blank);
        }
        return blanks;
    };
    H5PDataRepository.prototype.getSnippets = function () {
        var snippets = new Array();
        if (!this.h5pConfigData.snippets)
            return snippets;
        for (var i = 0; i < this.h5pConfigData.snippets.length; i++) {
            var raw_snippet = this.h5pConfigData.snippets[i];
            var snippet = new snippet_1.Snippet(raw_snippet.snippetName, this.unwrapper.unwrap(raw_snippet.snippetText));
            snippets.push(snippet);
        }
        return snippets;
    };
    return H5PDataRepository;
}());
exports.H5PDataRepository = H5PDataRepository;


/***/ }),

/***/ "./src/scripts/services/localization.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/localization.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalizationLabels;
(function (LocalizationLabels) {
    LocalizationLabels["showSolutionButton"] = "showSolutions";
    LocalizationLabels["retryButton"] = "tryAgain";
    LocalizationLabels["checkAllButton"] = "checkAnswer";
    LocalizationLabels["notFilledOutWarning"] = "notFilledOut";
    LocalizationLabels["tipButton"] = "tipLabel";
    LocalizationLabels["typoMessage"] = "spellingMistakeWarning";
    LocalizationLabels["scoreBarLabel"] = "scoreBarLabel";
})(LocalizationLabels = exports.LocalizationLabels || (exports.LocalizationLabels = {}));
var LocalizationStructures;
(function (LocalizationStructures) {
    LocalizationStructures["confirmCheck"] = "confirmCheck";
    LocalizationStructures["confirmRetry"] = "confirmRetry";
    LocalizationStructures["overallFeedback"] = "overallFeedback";
    LocalizationStructures["currikiSettings"] = "currikisettings";
})(LocalizationStructures = exports.LocalizationStructures || (exports.LocalizationStructures = {}));
/**
 * Provides localization services.
 */
var H5PLocalization = /** @class */ (function () {
    function H5PLocalization(h5pConfiguration) {
        this.h5pConfiguration = h5pConfiguration;
    }
    /**
     * Returns the localized string that is represented by the identifier.
     * @param  {string} localizableStringIdentifier
     * @returns string
     */
    H5PLocalization.prototype.getText = function (localizableStringIdentifier) {
        return this.h5pConfiguration[localizableStringIdentifier];
    };
    H5PLocalization.prototype.labelToString = function (label) {
        return label.toString();
    };
    /**
     * Returns the localized string for the label.
     * @param  {LocalizationLabels} label
     * @returns string
     */
    H5PLocalization.prototype.getTextFromLabel = function (label) {
        return this.getText(this.labelToString(label));
    };
    H5PLocalization.prototype.getObjectForStructure = function (structure) {
        return this.h5pConfiguration[structure.toString()];
    };
    return H5PLocalization;
}());
exports.H5PLocalization = H5PLocalization;


/***/ }),

/***/ "./src/scripts/services/message-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/message-service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var MessageService = /** @class */ (function () {
    function MessageService(jQuery) {
        this.jQuery = jQuery;
    }
    MessageService.prototype.show = function (elementId, message, blank, type) {
        if (!type)
            type = enums_1.MessageType.None;
        var elements = this.jQuery("#" + elementId);
        if (elements.length > 0) {
            this.speechBubble = new H5P.JoubelSpeechBubble(elements, message);
            this.associatedBlank = blank;
        }
    };
    MessageService.prototype.hide = function () {
        if (this.speechBubble) {
            try {
                this.speechBubble.remove();
            }
            catch (exception) {
            }
        }
        this.speechBubble = undefined;
        this.associatedBlank = undefined;
    };
    MessageService.prototype.isActive = function (blank) {
        return this.associatedBlank === blank;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/scripts/services/settings.ts":
/*!******************************************!*\
  !*** ./src/scripts/services/settings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var H5PSettings = /** @class */ (function () {
    function H5PSettings(h5pConfigData) {
        this.clozeType = enums_1.ClozeType.Type;
        this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        this.selectAlternativeRestriction = 5;
        this.enableRetry = true;
        this.enableSolutionsButton = true;
        this.enableCheckButton = true;
        this.disableSubmitButton = false;
        this.autoCheck = false;
        this.caseSensitive = false;
        this.warnSpellingErrors = true;
        this.acceptSpellingErrors = false;
        this.showSolutionsRequiresInput = true;
        this.confirmCheckDialog = false;
        this.confirmRetryDialog = false;
        this.disableImageZooming = false;
        if (h5pConfigData.behaviour.mode === 'selection') {
            this.clozeType = enums_1.ClozeType.Select;
        }
        else {
            this.clozeType = enums_1.ClozeType.Type;
        }
        if (h5pConfigData.behaviour.selectAlternatives === 'all') {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        else if (h5pConfigData.behaviour.selectAlternatives === 'alternatives') {
            this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        }
        else {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        this.selectAlternativeRestriction = h5pConfigData.behaviour.selectAlternativeRestriction;
        this.enableRetry = h5pConfigData.behaviour.enableRetry;
        this.enableSolutionsButton = h5pConfigData.behaviour.enableSolutionsButton;
        this.enableCheckButton = h5pConfigData.behaviour.enableCheckButton;
        this.autoCheck = h5pConfigData.behaviour.autoCheck;
        this.caseSensitive = h5pConfigData.behaviour.caseSensitive;
        this.warnSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "warn";
        this.acceptSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "accept";
        this.showSolutionsRequiresInput = h5pConfigData.behaviour.showSolutionsRequiresInput;
        this.confirmCheckDialog = h5pConfigData.behaviour.confirmCheckDialog;
        this.confirmRetryDialog = h5pConfigData.behaviour.confirmRetryDialog;
        this.disableImageZooming = h5pConfigData.behaviour.disableImageZooming;
        if (h5pConfigData.currikisettings) {
            this.disableSubmitButton = h5pConfigData.currikisettings.disableSubmitButton;
        }
        this.enforceLogic();
    }
    /**
     * This method sets sensible default values for settings hidden with showWhen
     */
    H5PSettings.prototype.enforceLogic = function () {
        if (this.clozeType === enums_1.ClozeType.Type) {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
            this.selectAlternativeRestriction = 0;
        }
        else {
            if (this.selectAlternativeRestriction === enums_1.SelectAlternatives.Alternatives) {
                this.selectAlternativeRestriction = 0;
            }
            this.warnSpellingErrors = false;
            this.acceptSpellingErrors = false;
            this.caseSensitive = false;
        }
    };
    return H5PSettings;
}());
exports.H5PSettings = H5PSettings;


/***/ }),

/***/ "./src/scripts/views/blank.ractive.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/blank.ractive.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\r\n  {{#unless isSelectCloze}}\r\n    <span class=\"h5p-input-wrapper\">\r\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \r\n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', blank)\" \r\n             on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n             on-blur=\"@this.fire('checkBlank', blank, 'blur')\" \r\n             on-focus=\"@this.fire('focus', blank)\"\r\n             on-anykey=\"@this.fire('textTyped', blank)\"\r\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\r\n             class=\"h5p-text-input\"\r\n             autocomplete=\"off\"\r\n             autocapitalize=\"off\"/>\r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n        {{/if}}\r\n    </span>    \r\n  {{/unless}}\r\n  {{#if isSelectCloze}}\r\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', blank)\">\r\n        &#xf05a;\r\n      </button>\r\n      <span class=\"h5p-input-wrapper\">      \r\n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\r\n              on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n              on-change=\"@this.fire('checkBlank', blank, 'change')\"\r\n              on-focus=\"@this.fire('focus', blank)\"              \r\n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \r\n              size=\"1\"\r\n              class=\"h5p-text-input\">\r\n        {{#each blank.choices}}\r\n          <option>{{this}}</option>\r\n        {{/each}}\r\n      </select>                     \r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n      {{/if}}     \r\n    </span>\r\n  {{/if}}\r\n</span>";

/***/ }),

/***/ "./src/scripts/views/highlight.ractive.html":
/*!**************************************************!*\
  !*** ./src/scripts/views/highlight.ractive.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span {{#object.isHighlighted}}class=\"highlighted\"{{/if}} id=\"{{object.id}}\">{{{object.text}}}</span>";

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlcnMvY2xvemUtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Blcm11dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Vud3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYW5zd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9ibGFuay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9oaWdobGlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3hhcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2hpZ2hsaWdodC5yYWN0aXZlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZTM4MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2Rpc3QudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oNXAtYWR2YW5jZWQtYmxhbmtzIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUZXh0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcclxcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSW5wdXQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWlucHV0LXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBINVBEcm9pZFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxyXFxuICAgIHBhZGRpbmc6IDAuMTg3NWVtIDEuNWVtIDAuMTg3NWVtIDAuNWVtO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGlucHV0Lmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDY0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJRSArIENocm9tZSBzcGVjaWZpYyBmaXhlcyAqL1xcclxcblxcclxcbi5oNXAtdGV4dC1pbnB1dDo6LW1zLWNsZWFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuOm5vdCguY29ycmVjdCkuYmxhbmsuaGFzLXRpcCBidXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNlbGVjdCBtb2RlICovXFxyXFxuXFxyXFxuc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTaG93aW5nIHNvbHV0aW9uIGlucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnNob3dpbmctc29sdXRpb24gLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM5ZGQ4YmI7XFxyXFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb2N1c3NlZCBpbnB1dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayAuaDVwLXRleHQtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gMCAjN2ZiOGZmO1xcclxcbiAgICBib3JkZXItY29sb3I6ICM3ZmI4ZmY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIENvcnJlY3RseSBhbnN3ZXJlZCBpbnB1dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5ZGQ4YmI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZGQ4YmI7XFxyXFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwLjVlbTsgICAgXFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcclxcbiAgICBjb2xvcjogIzI1NWM0MTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSW5jb3JyZWN0IGFuc3dlcnMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDBkMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDBkMDtcXHJcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMC41ZW07XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU3BlbGxpbmcgZXJyb3JzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmOTk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuNWVtO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXHJcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEJ1dHRvbnMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHQgaW4gc3BlbGxpbmcgbWlzdGFrZSBtYXJrZXIgKi9cXHJcXG5cXHJcXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzc2luZy1jaGFyYWN0ZXIsXFxyXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWNvbG9yO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1jb2xvciB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rLWNvbG9yIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBjb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zcGVsbGluZy1taXN0YWtlIC5taXN0YWtlbi1jaGFyYWN0ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0cyBpbiB0ZXh0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxyXFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgICBtYXJnaW46IC0wLjRlbTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmstYmFja2dyb3VuZC1jb2xvcjtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbmstYmFja2dyb3VuZC1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWJhY2tncm91bmQtY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE90aGVycyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5pbnZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGlwcyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtdGlwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICByaWdodDogMC40ZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXA6bm90KC5jb3JyZWN0KTpub3QoLmVycm9yKTpub3QoLnJldHJ5KSAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcclxcbiAgICByaWdodDogMi4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdC5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMy41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIGltcHJvdmVzIGFwcGVhcmFuY2Ugb2YgaDVwIHRpcCBzaGFkb3dzICovXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmpvdWJlbC1pY29uLXRpcC1ub3JtYWwgLmg1cC1pY29uLXNoYWRvdzpiZWZvcmUge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC4xMztcXHJcXG59XFxyXFxuXFxyXFxuLyogcGVuZGluZyBmZWVkYmFjayBtYXJrZXIgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbms6bm90KC5oYXMtcGVuZGluZy1mZWVkYmFjaykgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBhbmltYXRpb246IHNoYWtlIDNzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIHJldmVyc2U7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAtMC40ZW07XFxyXFxuICAgIHRvcDogLTAuN2VtO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwNWFcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuZXJyb3IuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXHJcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5yZXRyeS5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBjb2xvcjogI2ZmZmYwMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMC41ZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAgIDIlLFxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA0JSxcXHJcXG4gICAgMTclIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNiUsXFxyXFxuICAgIDEwJSxcXHJcXG4gICAgMTUlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA5JSxcXHJcXG4gICAgMTMlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAgIDIlLFxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA0JSxcXHJcXG4gICAgMTclIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNiUsXFxyXFxuICAgIDEwJSxcXHJcXG4gICAgMTUlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA5JSxcXHJcXG4gICAgMTMlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qIVxuXG4gZGlmZiB2NC4wLjFcblxuU29mdHdhcmUgTGljZW5zZSBBZ3JlZW1lbnQgKEJTRCBMaWNlbnNlKVxuXG5Db3B5cmlnaHQgKGMpIDIwMDktMjAxNSwgS2V2aW4gRGVja2VyIDxrcGRlY2tlckBnbWFpbC5jb20+XG5cbkFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2Ugb2YgdGhpcyBzb2Z0d2FyZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbmFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlXG4gIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbiAgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlXG4gIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlclxuICBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgS2V2aW4gRGVja2VyIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcbiAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvclxuICB3cml0dGVuIHBlcm1pc3Npb24uXG5cblRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUlxuSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUlxuQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVJcbklOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVRcbk9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbkBsaWNlbnNlXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLkRpZmYgPSB7fSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gRGlmZigpIHt9XG4gIERpZmYucHJvdG90eXBlID0ge1xuICAgIGRpZmY6IGZ1bmN0aW9uIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcblxuXG4gICAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcbiAgICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICAgIG5ld1N0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShuZXdTdHJpbmcpKTtcbiAgICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgICB2YXIgZWRpdExlbmd0aCA9IDE7XG4gICAgICB2YXIgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcbiAgICAgIHZhciBiZXN0UGF0aCA9IFt7XG4gICAgICAgIG5ld1BvczogLTEsXG4gICAgICAgIGNvbXBvbmVudHM6IFtdXG4gICAgICB9XTsgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcblxuICAgICAgdmFyIG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuXG4gICAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICAgIHJldHVybiBkb25lKFt7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLFxuICAgICAgICAgIGNvdW50OiBuZXdTdHJpbmcubGVuZ3RoXG4gICAgICAgIH1dKTtcbiAgICAgIH0gLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuXG5cbiAgICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgICBmb3IgKHZhciBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICAgIHZhciBiYXNlUGF0aCA9IHZvaWQgMDtcblxuICAgICAgICAgIHZhciBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICAgIHJlbW92ZVBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggKyAxXSxcbiAgICAgICAgICAgICAgX29sZFBvcyA9IChyZW1vdmVQYXRoID8gcmVtb3ZlUGF0aC5uZXdQb3MgOiAwKSAtIGRpYWdvbmFsUGF0aDtcblxuICAgICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgICAvLyBObyBvbmUgZWxzZSBpcyBnb2luZyB0byBhdHRlbXB0IHRvIHVzZSB0aGlzIHZhbHVlLCBjbGVhciBpdFxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNhbkFkZCA9IGFkZFBhdGggJiYgYWRkUGF0aC5uZXdQb3MgKyAxIDwgbmV3TGVuLFxuICAgICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gX29sZFBvcyAmJiBfb2xkUG9zIDwgb2xkTGVuO1xuXG4gICAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgICAvLyBhbmQgZG9lcyBub3QgcGFzcyB0aGUgYm91bmRzIG9mIHRoZSBkaWZmIGdyYXBoXG5cblxuICAgICAgICAgIGlmICghY2FuQWRkIHx8IGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGNsb25lUGF0aChyZW1vdmVQYXRoKTtcbiAgICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGFkZFBhdGg7IC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG5cbiAgICAgICAgICAgIGJhc2VQYXRoLm5ld1BvcysrO1xuICAgICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX29sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7IC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgX29sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9uZShidWlsZFZhbHVlcyhzZWxmLCBiYXNlUGF0aC5jb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgc2VsZi51c2VMb25nZXN0VG9rZW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IGJhc2VQYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRMZW5ndGgrKztcbiAgICAgIH0gLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcbiAgICAgIC8vIGlzIHByb2R1Y2VkLlxuXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAoZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGJlIHNhZmUuXG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAoZWRpdExlbmd0aCA+IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhlY0VkaXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWRpdExlbmd0aCA8PSBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG5cbiAgICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVzaENvbXBvbmVudDogZnVuY3Rpb24gcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgdmFyIGxhc3QgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGNsb25lIGhlcmUgYXMgdGhlIGNvbXBvbmVudCBjbG9uZSBvcGVyYXRpb24gaXMganVzdFxuICAgICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgICBjb3VudDogbGFzdC5jb3VudCArIDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBleHRyYWN0Q29tbW9uOiBmdW5jdGlvbiBleHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKSB7XG4gICAgICB2YXIgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG5ld1BvcyA9IGJhc2VQYXRoLm5ld1BvcyxcbiAgICAgICAgICBvbGRQb3MgPSBuZXdQb3MgLSBkaWFnb25hbFBhdGgsXG4gICAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAobmV3UG9zICsgMSA8IG5ld0xlbiAmJiBvbGRQb3MgKyAxIDwgb2xkTGVuICYmIHRoaXMuZXF1YWxzKG5ld1N0cmluZ1tuZXdQb3MgKyAxXSwgb2xkU3RyaW5nW29sZFBvcyArIDFdKSkge1xuICAgICAgICBuZXdQb3MrKztcbiAgICAgICAgb2xkUG9zKys7XG4gICAgICAgIGNvbW1vbkNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgIGNvdW50OiBjb21tb25Db3VudFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYmFzZVBhdGgubmV3UG9zID0gbmV3UG9zO1xuICAgICAgcmV0dXJuIG9sZFBvcztcbiAgICB9LFxuICAgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFbXB0eTogZnVuY3Rpb24gcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGNhc3RJbnB1dDogZnVuY3Rpb24gY2FzdElucHV0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKGNoYXJzKSB7XG4gICAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICB2YXIgY29tcG9uZW50UG9zID0gMCxcbiAgICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICAgIG5ld1BvcyA9IDAsXG4gICAgICAgIG9sZFBvcyA9IDA7XG5cbiAgICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcblxuICAgICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBDb21tb24gY2FzZVxuXG4gICAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBSZXZlcnNlIGFkZCBhbmQgcmVtb3ZlIHNvIHJlbW92ZXMgYXJlIG91dHB1dCBmaXJzdCB0byBtYXRjaCBjb21tb24gY29udmVudGlvblxuICAgICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cblxuICAgICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgICB2YXIgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gU3BlY2lhbCBjYXNlIGhhbmRsZSBmb3Igd2hlbiBvbmUgdGVybWluYWwgaXMgaWdub3JlZCAoaS5lLiB3aGl0ZXNwYWNlKS5cbiAgICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cblxuXG4gICAgdmFyIGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuXG4gICAgaWYgKGNvbXBvbmVudExlbiA+IDEgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnICYmIChsYXN0Q29tcG9uZW50LmFkZGVkIHx8IGxhc3RDb21wb25lbnQucmVtb3ZlZCkgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgICBjb21wb25lbnRzLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3UG9zOiBwYXRoLm5ld1BvcyxcbiAgICAgIGNvbXBvbmVudHM6IHBhdGguY29tcG9uZW50cy5zbGljZSgwKVxuICAgIH07XG4gIH1cblxuICB2YXIgY2hhcmFjdGVyRGlmZiA9IG5ldyBEaWZmKCk7XG4gIGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZWZhdWx0cy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvL1xuICAvLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcbiAgLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXG4gIC8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuICAvLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxuICAvLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxuICAvLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbiAgLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxuICAvLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cbiAgLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4gIC8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcbiAgLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcbiAgLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuICAvLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcbiAgLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcbiAgLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcblxuICB2YXIgZXh0ZW5kZWRXb3JkQ2hhcnMgPSAvXltBLVphLXpcXHhDMC1cXHUwMkM2XFx1MDJDOC1cXHUwMkQ3XFx1MDJERS1cXHUwMkZGXFx1MUUwMC1cXHUxRUZGXSskLztcbiAgdmFyIHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuICB2YXIgd29yZERpZmYgPSBuZXcgRGlmZigpO1xuXG4gIHdvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCk7XG4gIH07XG5cbiAgd29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFsoKVtcXF17fSdcIl18XFxiKS8pOyAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgICAgaWYgKCF0b2tlbnNbaSArIDFdICYmIHRva2Vuc1tpICsgMl0gJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pICYmIGV4dGVuZGVkV29yZENoYXJzLnRlc3QodG9rZW5zW2kgKyAyXSkpIHtcbiAgICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICAgIHRva2Vucy5zcGxpY2UoaSArIDEsIDIpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmV29yZHMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cbiAgZnVuY3Rpb24gZGlmZldvcmRzV2l0aFNwYWNlKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHdvcmREaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIGxpbmVEaWZmID0gbmV3IERpZmYoKTtcblxuICBsaW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZXRMaW5lcyA9IFtdLFxuICAgICAgICBsaW5lc0FuZE5ld2xpbmVzID0gdmFsdWUuc3BsaXQoLyhcXG58XFxyXFxuKS8pOyAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcblxuICAgIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICAgIH0gLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGxpbmVzQW5kTmV3bGluZXNbaV07XG5cbiAgICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXRMaW5lcztcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHZhciBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKGNhbGxiYWNrLCB7XG4gICAgICBpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgc2VudGVuY2VEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oXFxTLis/Wy4hP10pKD89XFxzK3wkKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZTZW50ZW5jZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgY3NzRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgdmFyIG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIGpzb25EaWZmID0gbmV3IERpZmYoKTsgLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbiAgLy8gZGFuZ2xpbmcgY29tbWEgYW5kIHRoZSBvdGhlciBkb2Vzbid0LiBUdXJucyBvdXQgaW5jbHVkaW5nIHRoZSBkYW5nbGluZyBjb21tYSB5aWVsZHMgdGhlIG5pY2VzdCBvdXRwdXQ6XG5cbiAganNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcbiAganNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcblxuICBqc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdW5kZWZpbmVkUmVwbGFjZW1lbnQgPSBfdGhpcyRvcHRpb25zLnVuZGVmaW5lZFJlcGxhY2VtZW50LFxuICAgICAgICBfdGhpcyRvcHRpb25zJHN0cmluZ2kgPSBfdGhpcyRvcHRpb25zLnN0cmluZ2lmeVJlcGxhY2VyLFxuICAgICAgICBzdHJpbmdpZnlSZXBsYWNlciA9IF90aGlzJG9wdGlvbnMkc3RyaW5naSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWRSZXBsYWNlbWVudCA6IHY7XG4gICAgfSA6IF90aGlzJG9wdGlvbnMkc3RyaW5naTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbiAgfTtcblxuICBqc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykge1xuICAgIHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgfSAvLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHByZXNlbmNlIG9mIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgYmFpbGluZyBvdXQgd2hlbiBlbmNvdW50ZXJpbmcgYW5cbiAgLy8gb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgXCJzdGFja1wiIG9mIGl0ZW1zIGJlaW5nIHByb2Nlc3NlZC4gQWNjZXB0cyBhbiBvcHRpb25hbCByZXBsYWNlclxuXG4gIGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KSB7XG4gICAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICAgIGlmIChyZXBsYWNlcikge1xuICAgICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICAgIH1cblxuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2Fub25pY2FsaXplZE9iajtcblxuICAgIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gICAgfVxuXG4gICAgaWYgKG9iaiAmJiBvYmoudG9KU09OKSB7XG4gICAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0ge307XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIHZhciBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgICAgX2tleTtcblxuICAgICAgZm9yIChfa2V5IGluIG9iaikge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgc29ydGVkS2V5cy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNvcnRlZEtleXMuc29ydCgpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfa2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtfa2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpbX2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwgX2tleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIHZhciBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGFycmF5RGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICB9O1xuXG4gIGFycmF5RGlmZi5qb2luID0gYXJyYXlEaWZmLnJlbW92ZUVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZBcnJheXMob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBhdGNoKHVuaURpZmYpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgICBkZWxpbWl0ZXJzID0gdW5pRGlmZi5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0ge307XG4gICAgICBsaXN0LnB1c2goaW5kZXgpOyAvLyBQYXJzZSBkaWZmIG1ldGFkYXRhXG5cbiAgICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkaWZmc3RyW2ldOyAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuXG4gICAgICAgIGlmICgvXihcXC1cXC1cXC18XFwrXFwrXFwrfEBAKVxccy8udGVzdChsaW5lKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIERpZmYgaW5kZXhcblxuXG4gICAgICAgIHZhciBoZWFkZXIgPSAvXig/OkluZGV4OnxkaWZmKD86IC1yIFxcdyspKylcXHMrKC4rPylcXHMqJC8uZXhlYyhsaW5lKTtcblxuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgICB9IC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgICAvLyB0aGVyZSdzIG5vIHRlY2huaWNhbCBpc3N1ZXMgdG8gaGF2ZSBhbiBpc29sYXRlZCBodW5rIHdpdGhvdXQgZmlsZSBoZWFkZXJcblxuXG4gICAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuICAgICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTsgLy8gUGFyc2UgaHVua3NcblxuICAgICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgX2xpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICAgIGlmICgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8udGVzdChfbGluZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KF9saW5lKSkge1xuICAgICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKF9saW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KF9saW5lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAgIC8vIGFyZSBjb25zdW1lZC5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgICB2YXIgZmlsZUhlYWRlciA9IC9eKC0tLXxcXCtcXCtcXCspXFxzKyguKikkLy5leGVjKGRpZmZzdHJbaV0pO1xuXG4gICAgICBpZiAoZmlsZUhlYWRlcikge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgICB2YXIgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBkYXRhWzBdLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyk7XG5cbiAgICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdIZWFkZXInXSA9IChkYXRhWzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IC8vIFBhcnNlcyBhIGh1bmtcbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhhdCB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIGEgaHVuay5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgICAgdmFyIGNodW5rSGVhZGVySW5kZXggPSBpLFxuICAgICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcbiAgICAgIHZhciBodW5rID0ge1xuICAgICAgICBvbGRTdGFydDogK2NodW5rSGVhZGVyWzFdLFxuICAgICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICAgIG5ld0xpbmVzOiArY2h1bmtIZWFkZXJbNF0gfHwgMSxcbiAgICAgICAgbGluZXM6IFtdLFxuICAgICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICAgIH07XG4gICAgICB2YXIgYWRkQ291bnQgPSAwLFxuICAgICAgICAgIHJlbW92ZUNvdW50ID0gMDtcblxuICAgICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAgIC8vIEJ1dCB0aGV5IGNvdWxkIGJlIHRoZSBoZWFkZXIgZm9yIHRoZSBuZXh0IGZpbGUuIFRoZXJlZm9yZSBwcnVuZSBzdWNoIGNhc2VzIG91dC5cbiAgICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwICYmIGkgKyAyIDwgZGlmZnN0ci5sZW5ndGggJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwICYmIGRpZmZzdHJbaSArIDJdLmluZGV4T2YoJ0BAJykgPT09IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gZGlmZnN0ci5sZW5ndGggLSAxID8gJyAnIDogZGlmZnN0cltpXVswXTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgICBodW5rLmxpbmVzLnB1c2goZGlmZnN0cltpXSk7XG4gICAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IC8vIEhhbmRsZSB0aGUgZW1wdHkgYmxvY2sgY291bnQgY2FzZVxuXG5cbiAgICAgIGlmICghYWRkQ291bnQgJiYgaHVuay5uZXdMaW5lcyA9PT0gMSkge1xuICAgICAgICBodW5rLm5ld0xpbmVzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZW1vdmVDb3VudCAmJiBodW5rLm9sZExpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgICAgfSAvLyBQZXJmb3JtIG9wdGlvbmFsIHNhbml0eSBjaGVja2luZ1xuXG5cbiAgICAgIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZGVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW1vdmVDb3VudCAhPT0gaHVuay5vbGRMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh1bms7XG4gICAgfVxuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgcGFyc2VJbmRleCgpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4gIC8vIGJ5IGRpc3RhbmNlIGZyb20gYSBnaXZlbiBzdGFydCBwb3NpdGlvbi4gSS5lLiBmb3IgWzAsIDRdLCB3aXRoXG4gIC8vIHN0YXJ0IG9mIDIsIHRoaXMgd2lsbCBpdGVyYXRlIDIsIDMsIDEsIDQsIDAuXG4gIGZ1bmN0aW9uIGRpc3RhbmNlSXRlcmF0b3IgKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gICAgdmFyIHdhbnRGb3J3YXJkID0gdHJ1ZSxcbiAgICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICAgIGxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJleW9uZCB0ZXh0IGxlbmd0aCwgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgICAvLyBhZnRlciBvZmZzZXQgbG9jYXRpb24gKG9yIGRlc2lyZWQgbG9jYXRpb24gb24gZmlyc3QgaXRlcmF0aW9uKVxuXG5cbiAgICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xuICAgICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIGlmICghZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJlZm9yZSB0ZXh0IGJlZ2lubmluZywgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgICAvLyBiZWZvcmUgb2Zmc2V0IGxvY2F0aW9uXG5cblxuICAgICAgICBpZiAobWluTGluZSA8PSBzdGFydCAtIGxvY2FsT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICAgIH0gLy8gV2UgdHJpZWQgdG8gZml0IGh1bmsgYmVmb3JlIHRleHQgYmVnaW5uaW5nIGFuZCBiZXlvbmQgdGV4dCBsZW5ndGgsIHRoZW5cbiAgICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG5cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaChzb3VyY2UsIHVuaURpZmYpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1bmlEaWZmKSkge1xuICAgICAgaWYgKHVuaURpZmYubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgICAgfVxuXG4gICAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcbiAgICB9IC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBpbnB1dFxuXG5cbiAgICB2YXIgbGluZXMgPSBzb3VyY2Uuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgICBodW5rcyA9IHVuaURpZmYuaHVua3MsXG4gICAgICAgIGNvbXBhcmVMaW5lID0gb3B0aW9ucy5jb21wYXJlTGluZSB8fCBmdW5jdGlvbiAobGluZU51bWJlciwgbGluZSwgb3BlcmF0aW9uLCBwYXRjaENvbnRlbnQpIHtcbiAgICAgIHJldHVybiBsaW5lID09PSBwYXRjaENvbnRlbnQ7XG4gICAgfSxcbiAgICAgICAgZXJyb3JDb3VudCA9IDAsXG4gICAgICAgIGZ1enpGYWN0b3IgPSBvcHRpb25zLmZ1enpGYWN0b3IgfHwgMCxcbiAgICAgICAgbWluTGluZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDAsXG4gICAgICAgIHJlbW92ZUVPRk5MLFxuICAgICAgICBhZGRFT0ZOTDtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBodW5rRml0cyhodW5rLCB0b1Bvcykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcsXG4gICAgICAgICAgICBjb250ZW50ID0gbGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xuICAgICAgICAgICAgZXJyb3JDb3VudCsrO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvUG9zKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBTZWFyY2ggYmVzdCBmaXQgb2Zmc2V0cyBmb3IgZWFjaCBodW5rIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBvbmVzXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBodW5rID0gaHVua3NbaV0sXG4gICAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgICAgbG9jYWxPZmZzZXQgPSAwLFxuICAgICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgICAgZm9yICg7IGxvY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQ7IGxvY2FsT2Zmc2V0ID0gaXRlcmF0b3IoKSkge1xuICAgICAgICBpZiAoaHVua0ZpdHMoaHVuaywgdG9Qb3MgKyBsb2NhbE9mZnNldCkpIHtcbiAgICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgICAvLyB0byBmaXQgb3ZlciBhbHJlYWR5IHBhdGNoZWQgdGV4dFxuXG5cbiAgICAgIG1pbkxpbmUgPSBodW5rLm9mZnNldCArIGh1bmsub2xkU3RhcnQgKyBodW5rLm9sZExpbmVzO1xuICAgIH0gLy8gQXBwbHkgcGF0Y2ggaHVua3NcblxuXG4gICAgdmFyIGRpZmZPZmZzZXQgPSAwO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGh1bmtzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9odW5rID0gaHVua3NbX2ldLFxuICAgICAgICAgIF90b1BvcyA9IF9odW5rLm9sZFN0YXJ0ICsgX2h1bmsub2Zmc2V0ICsgZGlmZk9mZnNldCAtIDE7XG5cbiAgICAgIGRpZmZPZmZzZXQgKz0gX2h1bmsubmV3TGluZXMgLSBfaHVuay5vbGRMaW5lcztcblxuICAgICAgaWYgKF90b1BvcyA8IDApIHtcbiAgICAgICAgLy8gQ3JlYXRpbmcgYSBuZXcgZmlsZVxuICAgICAgICBfdG9Qb3MgPSAwO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9odW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBsaW5lID0gX2h1bmsubGluZXNbal0sXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgICAgY29udGVudCA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSxcbiAgICAgICAgICAgIGRlbGltaXRlciA9IF9odW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAxKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzT3BlcmF0aW9uID0gX2h1bmsubGluZXNbaiAtIDFdID8gX2h1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcblxuICAgICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcblxuXG4gICAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgICBkZWxpbWl0ZXJzLnBvcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICAgIGxpbmVzLnB1c2goJycpO1xuICAgICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xuICB9IC8vIFdyYXBwZXIgdGhhdCBzdXBwb3J0cyBtdWx0aXBsZSBmaWxlIHBhdGNoZXMgdmlhIGNhbGxiYWNrcy5cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXModW5pRGlmZiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0luZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG5cbiAgICAgIGlmICghaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5sb2FkRmlsZShpbmRleCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cGRhdGVkQ29udGVudCA9IGFwcGx5UGF0Y2goZGF0YSwgaW5kZXgsIG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9jZXNzSW5kZXgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gNDtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gICAgZGlmZi5wdXNoKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGxpbmVzOiBbXVxuICAgIH0pOyAvLyBBcHBlbmQgYW4gZW1wdHkgdmFsdWUgdG8gbWFrZSBjbGVhbnVwIGVhc2llclxuXG4gICAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICByZXR1cm4gJyAnICsgZW50cnk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaHVua3MgPSBbXTtcbiAgICB2YXIgb2xkUmFuZ2VTdGFydCA9IDAsXG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwLFxuICAgICAgICBjdXJSYW5nZSA9IFtdLFxuICAgICAgICBvbGRMaW5lID0gMSxcbiAgICAgICAgbmV3TGluZSA9IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgICBjdXJyZW50LmxpbmVzID0gbGluZXM7XG5cbiAgICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgICB2YXIgX2N1clJhbmdlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgcHJldmlvdXMgY29udGV4dCwgc3RhcnQgd2l0aCB0aGF0XG4gICAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAgIHZhciBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IG5ld0xpbmU7XG5cbiAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBPdXRwdXQgb3VyIGNoYW5nZXNcblxuXG4gICAgICAgIChfY3VyUmFuZ2UgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UsIF90b0NvbnN1bWFibGVBcnJheShsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgICB9KSkpOyAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICAgIGlmIChvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdmFyIF9jdXJSYW5nZTI7XG5cbiAgICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgICAoX2N1clJhbmdlMiA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZTIsIF90b0NvbnN1bWFibGVBcnJheShjb250ZXh0TGluZXMobGluZXMpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfY3VyUmFuZ2UzO1xuXG4gICAgICAgICAgICAvLyBlbmQgdGhlIHJhbmdlIGFuZCBvdXRwdXRcbiAgICAgICAgICAgIHZhciBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcblxuICAgICAgICAgICAgKF9jdXJSYW5nZTMgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dExpbmVzKGxpbmVzLnNsaWNlKDAsIGNvbnRleHRTaXplKSkpKTtcblxuICAgICAgICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgICBvbGRMaW5lczogb2xkTGluZSAtIG9sZFJhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICAgIG5ld0xpbmVzOiBuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgICBsaW5lczogY3VyUmFuZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpID49IGRpZmYubGVuZ3RoIC0gMiAmJiBsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0KSB7XG4gICAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICAgIHZhciBvbGRFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3Qob2xkU3RyKTtcbiAgICAgICAgICAgICAgdmFyIG5ld0VPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChuZXdTdHIpO1xuICAgICAgICAgICAgICB2YXIgbm9ObEJlZm9yZUFkZHMgPSBsaW5lcy5sZW5ndGggPT0gMCAmJiBjdXJSYW5nZS5sZW5ndGggPiBodW5rLm9sZExpbmVzO1xuXG4gICAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiBub05sQmVmb3JlQWRkcykge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmICFub05sQmVmb3JlQWRkcyB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICAgIGN1clJhbmdlLnB1c2goJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZEZpbGVOYW1lOiBvbGRGaWxlTmFtZSxcbiAgICAgIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLFxuICAgICAgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgICBodW5rczogaHVua3NcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGlmZiA9IHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgaWYgKG9sZEZpbGVOYW1lID09IG5ld0ZpbGVOYW1lKSB7XG4gICAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBvbGRGaWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICByZXQucHVzaCgnLS0tICcgKyBkaWZmLm9sZEZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm9sZEhlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5vbGRIZWFkZXIpKTtcbiAgICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xuICAgICAgcmV0LnB1c2goJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXMgKyAnICsnICsgaHVuay5uZXdTdGFydCArICcsJyArIGh1bmsubmV3TGluZXMgKyAnIEBAJyk7XG4gICAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQYXRjaChmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gYXJyYXlTdGFydHNXaXRoKGFycmF5LCBzdGFydCkge1xuICAgIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICAgIHZhciBfY2FsY09sZE5ld0xpbmVDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyksXG4gICAgICAgIG9sZExpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQub2xkTGluZXMsXG4gICAgICAgIG5ld0xpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQubmV3TGluZXM7XG5cbiAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5vbGRMaW5lcyA9IG9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgICB9XG5cbiAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gICAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgICB0aGVpcnMgPSBsb2FkUGF0Y2godGhlaXJzLCBiYXNlKTtcbiAgICB2YXIgcmV0ID0ge307IC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgICAvLyBMZWF2aW5nIHNhbml0eSBjaGVja3Mgb24gdGhpcyB0byB0aGUgQVBJIGNvbnN1bWVyIHRoYXQgbWF5IGtub3cgbW9yZSBhYm91dCB0aGVcbiAgICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuXG4gICAgaWYgKG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4KSB7XG4gICAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgICB9XG5cbiAgICBpZiAobWluZS5uZXdGaWxlTmFtZSB8fCB0aGVpcnMubmV3RmlsZU5hbWUpIHtcbiAgICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSB0aGVpcnMub2xkRmlsZU5hbWUgfHwgbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gdGhlaXJzLm5ld0hlYWRlciB8fCBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRGaWxlTmFtZSwgdGhlaXJzLm9sZEZpbGVOYW1lKTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3SGVhZGVyLCB0aGVpcnMubmV3SGVhZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQuaHVua3MgPSBbXTtcbiAgICB2YXIgbWluZUluZGV4ID0gMCxcbiAgICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgICAgdGhlaXJzT2Zmc2V0ID0gMDtcblxuICAgIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfSxcbiAgICAgICAgICB0aGVpcnNDdXJyZW50ID0gdGhlaXJzLmh1bmtzW3RoZWlyc0luZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfTtcblxuICAgICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayhtaW5lQ3VycmVudCwgbWluZU9mZnNldCkpO1xuICAgICAgICBtaW5lSW5kZXgrKztcbiAgICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgICB9IGVsc2UgaWYgKGh1bmtCZWZvcmUodGhlaXJzQ3VycmVudCwgbWluZUN1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE92ZXJsYXAsIG1lcmdlIGFzIGJlc3Qgd2UgY2FuXG4gICAgICAgIHZhciBtZXJnZWRIdW5rID0ge1xuICAgICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgICAgb2xkTGluZXM6IDAsXG4gICAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgICAgbGluZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZUluZGV4Kys7XG4gICAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkUGF0Y2gocGFyYW0sIGJhc2UpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAvXkluZGV4Oi9tLnRlc3QocGFyYW0pKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiYXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgICByZXR1cm4gcGF0Y2gubmV3RmlsZU5hbWUgJiYgcGF0Y2gubmV3RmlsZU5hbWUgIT09IHBhdGNoLm9sZEZpbGVOYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICAgIGlmIChtaW5lID09PSB0aGVpcnMpIHtcbiAgICAgIHJldHVybiBtaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleC5jb25mbGljdCA9IHRydWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5lOiBtaW5lLFxuICAgICAgICB0aGVpcnM6IHRoZWlyc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gICAgcmV0dXJuIHRlc3Qub2xkU3RhcnQgPCBjaGVjay5vbGRTdGFydCAmJiB0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcyA8IGNoZWNrLm9sZFN0YXJ0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVIdW5rKGh1bmssIG9mZnNldCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCxcbiAgICAgIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsXG4gICAgICBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAgIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XG4gICAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gICAgdmFyIG1pbmUgPSB7XG4gICAgICBvZmZzZXQ6IG1pbmVPZmZzZXQsXG4gICAgICBsaW5lczogbWluZUxpbmVzLFxuICAgICAgaW5kZXg6IDBcbiAgICB9LFxuICAgICAgICB0aGVpciA9IHtcbiAgICAgIG9mZnNldDogdGhlaXJPZmZzZXQsXG4gICAgICBsaW5lczogdGhlaXJMaW5lcyxcbiAgICAgIGluZGV4OiAwXG4gICAgfTsgLy8gSGFuZGxlIGFueSBsZWFkaW5nIGNvbnRlbnRcblxuICAgIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIGluc2VydExlYWRpbmcoaHVuaywgdGhlaXIsIG1pbmUpOyAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG5cbiAgICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcblxuICAgICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgICAgbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM7XG5cbiAgICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgICAoX2h1bmskbGluZXMgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sbGVjdENoYW5nZShtaW5lKSkpO1xuICAgICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczI7XG5cbiAgICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICAgIChfaHVuayRsaW5lczIgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzMiwgX3RvQ29uc3VtYWJsZUFycmF5KGNvbGxlY3RDaGFuZ2UodGhlaXIpKSk7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgLy8gTWluZSByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICAvLyBUaGVpciByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgICAvLyBDb250ZXh0IGlkZW50aXR5XG4gICAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgICAgdGhlaXIuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgICAgY29uZmxpY3QoaHVuaywgY29sbGVjdENoYW5nZShtaW5lKSwgY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgICAgfVxuICAgIH0gLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG5cblxuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcbiAgICBjYWxjTGluZUNvdW50KGh1bmspO1xuICB9XG5cbiAgZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gICAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UodGhlaXIpO1xuXG4gICAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgICBpZiAoYXJyYXlTdGFydHNXaXRoKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQodGhlaXIsIG15Q2hhbmdlcywgbXlDaGFuZ2VzLmxlbmd0aCAtIHRoZWlyQ2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczM7XG5cbiAgICAgICAgKF9odW5rJGxpbmVzMyA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMzLCBfdG9Db25zdW1hYmxlQXJyYXkobXlDaGFuZ2VzKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChhcnJheVN0YXJ0c1dpdGgodGhlaXJDaGFuZ2VzLCBteUNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldChtaW5lLCB0aGVpckNoYW5nZXMsIHRoZWlyQ2hhbmdlcy5sZW5ndGggLSBteUNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM0O1xuXG4gICAgICAgIChfaHVuayRsaW5lczQgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoZWlyQ2hhbmdlcykpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgICB2YXIgX2h1bmskbGluZXM1O1xuXG4gICAgICAoX2h1bmskbGluZXM1ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczUsIF90b0NvbnN1bWFibGVBcnJheShteUNoYW5nZXMpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIsIHN3YXApIHtcbiAgICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG5cbiAgICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgICAgdmFyIF9odW5rJGxpbmVzNjtcblxuICAgICAgKF9odW5rJGxpbmVzNiA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM2LCBfdG9Db25zdW1hYmxlQXJyYXkodGhlaXJDaGFuZ2VzLm1lcmdlZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICAgIGh1bmsuY29uZmxpY3QgPSB0cnVlO1xuICAgIGh1bmsubGluZXMucHVzaCh7XG4gICAgICBjb25mbGljdDogdHJ1ZSxcbiAgICAgIG1pbmU6IG1pbmUsXG4gICAgICB0aGVpcnM6IHRoZWlyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgICBpbnNlcnQub2Zmc2V0Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0VHJhaWxpbmcoaHVuaywgaW5zZXJ0KSB7XG4gICAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0Q2hhbmdlKHN0YXRlKSB7XG4gICAgdmFyIHJldCA9IFtdLFxuICAgICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG5cbiAgICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdOyAvLyBHcm91cCBhZGRpdGlvbnMgdGhhdCBhcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VidHJhY3Rpb25zIGFuZCB0cmVhdCB0aGVtIGFzIG9uZSBcImF0b21pY1wiIG1vZGlmeSBjaGFuZ2UuXG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gJysnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICAgIHJldC5wdXNoKGxpbmUpO1xuICAgICAgICBzdGF0ZS5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0KHN0YXRlLCBtYXRjaENoYW5nZXMpIHtcbiAgICB2YXIgY2hhbmdlcyA9IFtdLFxuICAgICAgICBtZXJnZWQgPSBbXSxcbiAgICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XTsgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgICBpZiAobWF0Y2hbMF0gPT09ICcrJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29udGV4dENoYW5nZXMgPSBjb250ZXh0Q2hhbmdlcyB8fCBjaGFuZ2VbMF0gIT09ICcgJztcbiAgICAgIG1lcmdlZC5wdXNoKG1hdGNoKTtcbiAgICAgIG1hdGNoSW5kZXgrKzsgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAgIC8vIHRvIHB1bGwgaW4gdGhlIHJlbWFpbmluZyBjb250ZXh0IGFmdGVyIHRoaXNcblxuICAgICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaC5zdWJzdHIoMSkgPT09IGNoYW5nZS5zdWJzdHIoMSkpIHtcbiAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJyAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH1cblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkLnB1c2gobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXgrK10pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXJnZWQ6IG1lcmdlZCxcbiAgICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gICAgcmV0dXJuIGNoYW5nZXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjaGFuZ2UpIHtcbiAgICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZUNvbnRlbnQgPSByZW1vdmVDaGFuZ2VzW3JlbW92ZUNoYW5nZXMubGVuZ3RoIC0gZGVsdGEgKyBpXS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5pbmRleCArPSBkZWx0YTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNPbGROZXdMaW5lQ291bnQobGluZXMpIHtcbiAgICB2YXIgb2xkTGluZXMgPSAwO1xuICAgIHZhciBuZXdMaW5lcyA9IDA7XG4gICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbXlDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS5taW5lKTtcbiAgICAgICAgdmFyIHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm9sZExpbmVzID09PSB0aGVpckNvdW50Lm9sZExpbmVzKSB7XG4gICAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbGRMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICAgIG5ld0xpbmVzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJy0nIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZExpbmVzOiBvbGRMaW5lcyxcbiAgICAgIG5ld0xpbmVzOiBuZXdMaW5lc1xuICAgIH07XG4gIH1cblxuICAvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuICBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvRE1QKGNoYW5nZXMpIHtcbiAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goW29wZXJhdGlvbiwgY2hhbmdlLnZhbHVlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9YTUwoY2hhbmdlcykge1xuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8ZGVsPicpO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzwvZGVsPicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQuam9pbignJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVIVE1MKHMpIHtcbiAgICB2YXIgbiA9IHM7XG4gICAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIC8qIFNlZSBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zIG9mIHVzZSAqL1xuXG4gIGV4cG9ydHMuRGlmZiA9IERpZmY7XG4gIGV4cG9ydHMuZGlmZkNoYXJzID0gZGlmZkNoYXJzO1xuICBleHBvcnRzLmRpZmZXb3JkcyA9IGRpZmZXb3JkcztcbiAgZXhwb3J0cy5kaWZmV29yZHNXaXRoU3BhY2UgPSBkaWZmV29yZHNXaXRoU3BhY2U7XG4gIGV4cG9ydHMuZGlmZkxpbmVzID0gZGlmZkxpbmVzO1xuICBleHBvcnRzLmRpZmZUcmltbWVkTGluZXMgPSBkaWZmVHJpbW1lZExpbmVzO1xuICBleHBvcnRzLmRpZmZTZW50ZW5jZXMgPSBkaWZmU2VudGVuY2VzO1xuICBleHBvcnRzLmRpZmZDc3MgPSBkaWZmQ3NzO1xuICBleHBvcnRzLmRpZmZKc29uID0gZGlmZkpzb247XG4gIGV4cG9ydHMuZGlmZkFycmF5cyA9IGRpZmZBcnJheXM7XG4gIGV4cG9ydHMuc3RydWN0dXJlZFBhdGNoID0gc3RydWN0dXJlZFBhdGNoO1xuICBleHBvcnRzLmNyZWF0ZVR3b0ZpbGVzUGF0Y2ggPSBjcmVhdGVUd29GaWxlc1BhdGNoO1xuICBleHBvcnRzLmNyZWF0ZVBhdGNoID0gY3JlYXRlUGF0Y2g7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaCA9IGFwcGx5UGF0Y2g7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaGVzID0gYXBwbHlQYXRjaGVzO1xuICBleHBvcnRzLnBhcnNlUGF0Y2ggPSBwYXJzZVBhdGNoO1xuICBleHBvcnRzLm1lcmdlID0gbWVyZ2U7XG4gIGV4cG9ydHMuY29udmVydENoYW5nZXNUb0RNUCA9IGNvbnZlcnRDaGFuZ2VzVG9ETVA7XG4gIGV4cG9ydHMuY29udmVydENoYW5nZXNUb1hNTCA9IGNvbnZlcnRDaGFuZ2VzVG9YTUw7XG4gIGV4cG9ydHMuY2Fub25pY2FsaXplID0gY2Fub25pY2FsaXplO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEFkdmFuY2VkQmxhbmtzIGZyb20gJy4uL3NjcmlwdHMvYXBwJztcclxuXHJcbi8vIExvYWQgbGlicmFyeVxyXG5INVAgPSBINVAgfHwge307XHJcbkg1UC5BZHZhbmNlZEJsYW5rcyA9IEFkdmFuY2VkQmxhbmtzOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0U3RyaW5nKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyaW5ncy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQubGVuZ3RoID4gcHJldi5sZW5ndGggPyBjdXJyZW50IDogcHJldiwgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXk6IGFueVtdKSB7XHJcbiAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgIGFycmF5W2pdID0gdGVtcDtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59IiwiLy8gVE9ETyBjYW4gd2UganVzdCBkZWNsYXJlIHRoZSBrZXlkb3duSGFuZGxlciBvbmNlPyB1c2luZyBgdGhpc2A/XHJcbmZ1bmN0aW9uIG1ha2VLZXlEZWZpbml0aW9uKGNvZGU/OiBudW1iZXIpIHtcclxuICByZXR1cm4gKG5vZGUsIGZpcmUpID0+IHtcclxuICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgIHZhciB3aGljaCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XHJcblxyXG4gICAgICBpZiAoY29kZSAmJiB3aGljaCA9PT0gY29kZSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGZpcmUoe1xyXG4gICAgICAgICAgbm9kZSxcclxuICAgICAgICAgIG9yaWdpbmFsOiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFjb2RlICYmIFsxNiwgMTcsIDE4LCAzNSwgMzYsIDEzLCA5LCAyNywgMzIsIDM3LCAzOSwgNDAsIDM4XS5maWx0ZXIoYyA9PiBjID09PSB3aGljaCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZmlyZSh7XHJcbiAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRlYXJkb3duKCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudGVyID0gbWFrZUtleURlZmluaXRpb24oMTMpO1xyXG5leHBvcnQgY29uc3QgdGFiID0gbWFrZUtleURlZmluaXRpb24oOSk7XHJcbmV4cG9ydCBjb25zdCBlc2NhcGUgPSBtYWtlS2V5RGVmaW5pdGlvbigyNyk7XHJcbmV4cG9ydCBjb25zdCBzcGFjZSA9IG1ha2VLZXlEZWZpbml0aW9uKDMyKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWZ0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzNyk7XHJcbmV4cG9ydCBjb25zdCByaWdodGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzkpO1xyXG5leHBvcnQgY29uc3QgZG93bmFycm93ID0gbWFrZUtleURlZmluaXRpb24oNDApO1xyXG5leHBvcnQgY29uc3QgdXBhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM4KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbnlrZXkgPSBtYWtlS2V5RGVmaW5pdGlvbigpOyIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgSDVQRGF0YVJlcG9zaXRvcnksIElEYXRhUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgQ2xvemVDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9jbG96ZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMsIExvY2FsaXphdGlvblN0cnVjdHVyZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzLCBINVBTZXR0aW5ncyB9IGZyb20gXCIuL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuL2hlbHBlcnMvdW53cmFwcGVyJztcclxuaW1wb3J0IHsgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB9IGZyb20gJy4vbW9kZWxzL3hhcGknO1xyXG5pbXBvcnQgeyBjcmVhdGVQZXJtdXRhdGlvbnMgfSBmcm9tICcuL2hlbHBlcnMvcGVybXV0YXRpb25zJztcclxuXHJcblxyXG5lbnVtIFN0YXRlcyB7XHJcbiAgb25nb2luZyA9ICdvbmdvaW5nJyxcclxuICBjaGVja2luZyA9ICdjaGVja2luZycsXHJcbiAgc2hvd2luZ1NvbHV0aW9ucyA9ICdzaG93aW5nLXNvbHV0aW9uJyxcclxuICBzdWJtaXR0ZWRBbnN3ZXJzID0gJ3N1Ym1pdHRlZC1hbnN3ZXInLFxyXG4gIGZpbmlzaGVkID0gJ2ZpbmlzaGVkJyxcclxuICBzaG93aW5nU29sdXRpb25zRW1iZWRkZWQgPSAnc2hvd2luZy1zb2x1dGlvbi1lbWJlZGRlZCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWR2YW5jZWRCbGFua3MgZXh0ZW5kcyAoSDVQLlF1ZXN0aW9uIGFzIHsgbmV3KCk6IGFueTsgfSkge1xyXG5cclxuICBwcml2YXRlIGNsb3plQ29udHJvbGxlcjogQ2xvemVDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5O1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncztcclxuICBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uO1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGpRdWVyeTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50SWQ6IHN0cmluZztcclxuICBwcml2YXRlIHByZXZpb3VzU3RhdGU6IGFueTtcclxuICBwcml2YXRlIHN0YXRlOiBTdGF0ZXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGhhcyBlbnRlcmVkIGFueSBhbnN3ZXIgc28gZmFyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYW5zd2VyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdXNlciBoYXMgc3VibWl0dGVkIGFuc3dlci5cclxuICAgKi9cclxuICBwcml2YXRlIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdXNlciBpcyBpbiBzaG93IHNvbHV0aW9uIG1vZGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaG93U29sdXRpb25Nb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWRcclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGVudERhdGFcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSwgY29udGVudElkOiBzdHJpbmcsIGNvbnRlbnREYXRhOiBhbnkgPSB7fSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbmZpZyA9IEg1UC5qUXVlcnkuZXh0ZW5kKHRydWUsIHt9LCB7XHJcbiAgICAgICAgY3VycmlraXNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyaWtpbDEwbjoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QW5zd2VyOiBcIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSwgY29uZmlnKTtcclxuICAgIHRoaXMualF1ZXJ5ID0gSDVQLmpRdWVyeTtcclxuICAgIHRoaXMuY29udGVudElkID0gY29udGVudElkO1xyXG5cclxuICAgIGxldCB1bndyYXBwZXIgPSBuZXcgVW5yd2FwcGVyKHRoaXMualF1ZXJ5KTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IEg1UFNldHRpbmdzKGNvbmZpZyk7XHJcbiAgICB0aGlzLmxvY2FsaXphdGlvbiA9IG5ldyBINVBMb2NhbGl6YXRpb24oY29uZmlnKTtcclxuICAgIHRoaXMucmVwb3NpdG9yeSA9IG5ldyBINVBEYXRhUmVwb3NpdG9yeShjb25maWcsIHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCA8SlF1ZXJ5U3RhdGljPnRoaXMualF1ZXJ5LCB1bndyYXBwZXIpO1xyXG4gICAgdGhpcy5tZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSh0aGlzLmpRdWVyeSk7XHJcbiAgICBCbGFua0xvYWRlci5pbml0aWFsaXplKHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCB0aGlzLmpRdWVyeSwgdGhpcy5tZXNzYWdlU2VydmljZSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIgPSBuZXcgQ2xvemVDb250cm9sbGVyKHRoaXMucmVwb3NpdG9yeSwgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMubWVzc2FnZVNlcnZpY2UpO1xyXG5cclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uU2NvcmVDaGFuZ2VkID0gdGhpcy5vblNjb3JlQ2hhbmdlZDtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uU29sdmVkID0gdGhpcy5vblNvbHZlZDtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uQXV0b0NoZWNrZWQgPSB0aGlzLm9uQXV0b0NoZWNrZWQ7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vblR5cGVkID0gdGhpcy5vblR5cGVkO1xyXG5cclxuICAgIGlmIChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5wcmV2aW91c1N0YXRlKVxyXG4gICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBjb250ZW50RGF0YS5wcmV2aW91c1N0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIGZyb20gb3V0c2lkZSB3aGVuIHRoZSBzY29yZSBvZiB0aGUgY2xvemUgaGFzIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvblNjb3JlQ2hhbmdlZCA9IChzY29yZTogbnVtYmVyLCBtYXhTY29yZTogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuY2hlY2tpbmc7XHJcbiAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRGZWVkYmFjayhcIlwiLCBzY29yZSwgbWF4U2NvcmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcclxuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Tb2x2ZWQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblR5cGVkID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZykge1xyXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLm9uZ29pbmc7XHJcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dG9DaGVja2VkID0gKCkgPT4ge1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSSgnaW50ZXJhY3RlZCcpO1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XHJcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJYQVBJQ29tcGxldGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZXMgdGhlIGF0dGFjaCBtZXRob2Qgb2YgdGhlIHN1cGVyY2xhc3MgKEg1UC5RdWVzdGlvbikgYW5kIGNhbGxzIGl0XHJcbiAgICogYXQgdGhlIHNhbWUgdGltZS4gKGVxdWl2YWxlbnQgdG8gc3VwZXIuYXR0YWNoKCRjb250YWluZXIpKS5cclxuICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSwgYXMgUmFjdGl2ZSBuZWVkcyB0byBiZSBpbml0aWFsaXplZCB3aXRoIGFuIGV4aXN0aW5nIERPTVxyXG4gICAqIGVsZW1lbnQuIERPTSBlbGVtZW50cyBhcmUgY3JlYXRlZCBpbiBINVAuUXVlc3Rpb24uYXR0YWNoLCBzbyBpbml0aWFsaXppbmcgXHJcbiAgICogUmFjdGl2ZSBpbiByZWdpc3RlckRvbUVsZW1lbnRzIGRvZXNuJ3Qgd29yay5cclxuICAgKi9cclxuICBhdHRhY2ggPSAoKG9yaWdpbmFsKSA9PiB7XHJcbiAgICByZXR1cm4gKCRjb250YWluZXIpID0+IHtcclxuICAgICAgb3JpZ2luYWwoJGNvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY2xvemVDb250cm9sbGVyLmluaXRpYWxpemUodGhpcy5jb250YWluZXIuZ2V0KDApLCAkY29udGFpbmVyKTtcclxuICAgICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmRlc2VyaWFsaXplQ2xvemUodGhpcy5wcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZWQgPSB0aGlzLmNsb3plQ29udHJvbGxlci5pc0ZpbGxlZE91dDtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spXHJcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KSh0aGlzLmF0dGFjaCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBieSBINVAuUXVlc3Rpb24uYXR0YWNoKCkuIENyZWF0ZXMgYWxsIGNvbnRlbnQgZWxlbWVudHMgYW5kIHJlZ2lzdGVycyB0aGVtXHJcbiAgICogd2l0aCBINVAuUXVlc3Rpb24uXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJEb21FbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJNZWRpYSgpO1xyXG4gICAgdGhpcy5zZXRJbnRyb2R1Y3Rpb24odGhpcy5yZXBvc2l0b3J5LmdldFRhc2tEZXNjcmlwdGlvbigpKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KFwiPGRpdi8+XCIsIHsgXCJjbGFzc1wiOiBcImg1cC1hZHZhbmNlZC1ibGFua3NcIiB9KTtcclxuICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xyXG5cclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMgSlF1ZXJ5IC0gVGhlIG91dGVyIGg1cCBjb250YWluZXIuIFRoZSBsaWJyYXJ5IGNhbiBhZGQgZGlhbG9ndWVzIHRvIHRoaXNcclxuICAgKiBlbGVtZW50LiBcclxuICAgKi9cclxuICBwcml2YXRlIGdldEg1cENvbnRhaW5lcigpOiBKUXVlcnkge1xyXG4gICAgdmFyICRjb250ZW50ID0gdGhpcy5qUXVlcnkoJ1tkYXRhLWNvbnRlbnQtaWQ9XCInICsgdGhpcy5jb250ZW50SWQgKyAnXCJdLmg1cC1jb250ZW50Jyk7XHJcbiAgICB2YXIgJGNvbnRhaW5lclBhcmVudHMgPSAkY29udGVudC5wYXJlbnRzKCcuaDVwLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIHNlbGVjdCBmaW5kIGNvbnRhaW5lciB0byBhdHRhY2ggZGlhbG9ncyB0b1xyXG4gICAgdmFyICRjb250YWluZXI7XHJcbiAgICBpZiAoJGNvbnRhaW5lclBhcmVudHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIC8vIHVzZSBwYXJlbnQgaGlnaGVzdCB1cCBpZiBhbnlcclxuICAgICAgJGNvbnRhaW5lciA9ICRjb250YWluZXJQYXJlbnRzLmxhc3QoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCRjb250ZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAkY29udGFpbmVyID0gJGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJGNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3Rlck1lZGlhKCkge1xyXG4gICAgdmFyIG1lZGlhID0gdGhpcy5yZXBvc2l0b3J5LmdldE1lZGlhKCk7XHJcbiAgICBpZiAoIW1lZGlhIHx8ICFtZWRpYS5saWJyYXJ5KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIHR5cGUgPSBtZWRpYS5saWJyYXJ5LnNwbGl0KCcgJylbMF07XHJcbiAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcclxuICAgICAgaWYgKG1lZGlhLnBhcmFtcy5maWxlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbWFnZShtZWRpYS5wYXJhbXMuZmlsZS5wYXRoLCB7XHJcbiAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnNldHRpbmdzLmRpc2FibGVJbWFnZVpvb21pbmcsXHJcbiAgICAgICAgICBhbHQ6IG1lZGlhLnBhcmFtcy5hbHRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ0g1UC5WaWRlbycpIHtcclxuICAgICAgaWYgKG1lZGlhLnBhcmFtcy5zb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJCdXR0b25zKCkge1xyXG4gICAgdmFyICRjb250YWluZXIgPSB0aGlzLmdldEg1cENvbnRhaW5lcigpO1xyXG5cclxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spIHtcclxuICAgICAgLy8gQ2hlY2sgYW5zd2VyIGJ1dHRvblxyXG4gICAgICB0aGlzLmFkZEJ1dHRvbignY2hlY2stYW5zd2VyJywgJ0NoZWNrIEFuc3dlcnMnLFxyXG4gICAgICAgIHRoaXMub25DaGVja0Fuc3dlciwgdHJ1ZSwge30sIHtcclxuICAgICAgICAgIGNvbmZpcm1hdGlvbkRpYWxvZzoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybUNoZWNrRGlhbG9nLFxyXG4gICAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtQ2hlY2spLFxyXG4gICAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5zZXR0aW5ncy5kaXNhYmxlU3VibWl0QnV0dG9uKSB7XHJcbiAgICAgIC8vIFN1Ym1pdCBhbnN3ZXIgYnV0dG9uXHJcbiAgICAgIHRoaXMuYWRkQnV0dG9uKCdzdWJtaXQtYW5zd2VyJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY3VycmlraVNldHRpbmdzKS5jdXJyaWtpbDEwbi5zdWJtaXRBbnN3ZXIsXHJcbiAgICAgICAgICB0aGlzLm9uU3VibWl0QW5zd2VyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IHNvbHV0aW9uIGJ1dHRvblxyXG4gICAgdGhpcy5hZGRCdXR0b24oJ3Nob3ctc29sdXRpb24nLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5zaG93U29sdXRpb25CdXR0b24pLFxyXG4gICAgICB0aGlzLm9uU2hvd1NvbHV0aW9uLCB0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbik7XHJcblxyXG4gICAgLy8gVHJ5IGFnYWluIGJ1dHRvblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnJldHJ5QnV0dG9uKSxcclxuICAgICAgICB0aGlzLm9uUmV0cnksIHRydWUsIHt9LCB7XHJcbiAgICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnNldHRpbmdzLmNvbmZpcm1SZXRyeURpYWxvZyxcclxuICAgICAgICAgICAgbDEwbjogdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY29uZmlybVJldHJ5KSxcclxuICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgICAgICRwYXJlbnRFbGVtZW50OiAkY29udGFpbmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hlY2tBbnN3ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5jaGVja0FsbCgpO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcclxuICAgIHRoaXMudHJpZ2dlclhBUElBbnN3ZXJlZCgpO1xyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxyXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xyXG5cclxuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG5cclxuICAgIGlmKHRoaXMuY2xvemVDb250cm9sbGVyLmlzRnVsbHlGaWxsZWRPdXQpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyWEFQSUNvbXBsZXRlZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWJtaXRBbnN3ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXRlID0gU3RhdGVzLnN1Ym1pdHRlZEFuc3dlcnM7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJU3VibWl0dGVkQ3VycmlraSgpO1xyXG4gICAgdGhpcy5hZGRTdWJtaXRBbnN3ZXJGZWVkYmFjaygpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBzdWJtaXQgYW5zd2VyIGZlZWRiYWNrIGRpdlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkU3VibWl0QW5zd2VyRmVlZGJhY2sgPSAgKCkgPT4ge1xyXG4gICAgLy8gdmFyICRzdWJtaXRfbWVzc2FnZSA9ICc8ZGl2IGNsYXNzPVwic3VibWl0LWFuc3dlci1mZWVkYmFja1wiIHN0eWxlID0gXCJjb2xvcjogcmVkXCI+UmVzdWx0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk8L2Rpdj4nO1xyXG4gICAgLy8gSDVQLmpRdWVyeSgnLmg1cC1xdWVzdGlvbi1idXR0b25zJykuYWZ0ZXIoJHN1Ym1pdF9tZXNzYWdlKTtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBzdWJtaXQgYW5zd2VyIGZlZWRiYWNrIGRpdlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlU3VibWl0QW5zd2VyRmVlZGJhY2sgPSAgKCkgPT4ge1xyXG4gICAgSDVQLmpRdWVyeSgnLnN1Ym1pdC1hbnN3ZXItZmVlZGJhY2snKS5yZW1vdmUoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNTb2x2ZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuZmluaXNoZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNob3dTb2x1dGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2hvd1NvbHV0aW9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5zaG93aW5nU29sdXRpb25zKTtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnNob3dTb2x1dGlvbnMoKTtcclxuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XHJcbiAgICBpZih0aGlzLnN1Ym1pdHRlZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZVN1Ym1pdEFuc3dlckZlZWRiYWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblJldHJ5ID0gKCkgPT4ge1xyXG4gICAgLyogWEFQSSByZXN0YXJ0IHRoZSBhY3Rpdml0eVN0YXJ0VGltZSAqL1xyXG4gICAgdGhpcy5hY3Rpdml0eVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnJlbW92ZUZlZWRiYWNrKCk7XHJcbiAgICB0aGlzLnJlbW92ZVN1Ym1pdEFuc3dlckZlZWRiYWNrKCk7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5yZXNldCgpO1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93U29sdXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzaG93RmVlZGJhY2soKSB7XHJcbiAgICB2YXIgc2NvcmVUZXh0ID0gSDVQLlF1ZXN0aW9uLmRldGVybWluZU92ZXJhbGxGZWVkYmFjayh0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5vdmVyYWxsRmVlZGJhY2spLCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUgLyB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSkucmVwbGFjZSgnQHNjb3JlJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlKS5yZXBsYWNlKCdAdG90YWwnLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSk7XHJcbiAgICB0aGlzLnNldEZlZWRiYWNrKHNjb3JlVGV4dCwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSwgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuc2NvcmVCYXJMYWJlbCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYXJlIGhpZGVzIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBzZXR0aW5ncyBtYWRlXHJcbiAgICogYnkgdGhlIGNvbnRlbnQgY3JlYXRvci5cclxuICAgKiBAcGFyYW0gIHtTdGF0ZXN9IHN0YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtb3ZlVG9TdGF0ZShzdGF0ZTogU3RhdGVzKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlOiBTdGF0ZXMpIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbikge1xyXG4gICAgICBpZiAoIXRoaXMuc2hvd1NvbHV0aW9uTW9kZSAmJiAoKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcpXHJcbiAgICAgICAgfHwgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIHN0YXRlID09PSBTdGF0ZXMub25nb2luZykgfHwgKHN0YXRlID09PSBTdGF0ZXMuc3VibWl0dGVkQW5zd2VycyAmJiAhdGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNTb2x2ZWQpKVxyXG4gICAgICAgICYmICghdGhpcy5zZXR0aW5ncy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5maW5pc2hlZCB8fCBzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMgfHwgc3RhdGUgPT09IFN0YXRlcy5zdWJtaXR0ZWRBbnN3ZXJzKSkge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ3RyeS1hZ2FpbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGVDaGVja0J1dHRvbikge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuZGlzYWJsZVN1Ym1pdEJ1dHRvbikge1xyXG4gICAgICBpZighdGhpcy5zdWJtaXR0ZWQgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zIHx8IHN0YXRlID09PSBTdGF0ZXMuZmluaXNoZWQpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uKCdzdWJtaXQtYW5zd2VyJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWRlQnV0dG9uKCdzdWJtaXQtYW5zd2VyJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpIHtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdzaG93LXNvbHV0aW9uJyk7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignc3VibWl0LWFuc3dlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJpZ2dlcigncmVzaXplJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlID0gKCk6IHN0cmluZ1tdID0+IHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5zZXJpYWxpemVDbG96ZSgpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogSW1wbGVtZW50YXRpb24gb2YgUXVlc3Rpb24gY29udHJhY3QgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBwdWJsaWMgZ2V0QW5zd2VyR2l2ZW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJlZCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSA9PT0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTY29yZSA9IChmcm9tQ2hlY2tBbnN3ZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgaWYoIWZyb21DaGVja0Fuc3dlcikge1xyXG4gICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWF4U2NvcmUgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29sdXRpb25zID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoZWNrQW5zd2VyKCk7XHJcbiAgICB0aGlzLm9uU2hvd1NvbHV0aW9uKCk7XHJcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0VGFzayA9ICgpID0+IHtcclxuICAgIHRoaXMub25SZXRyeSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqKlxyXG4gICAqIFhBcGkgaW1wbGVtZW50YXRpb25cclxuICAgKi9cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgeEFQSSBhbnN3ZXJlZCBldmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB0cmlnZ2VyWEFQSUFuc3dlcmVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgICB2YXIgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcclxuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHRoaXMudHJpZ2dlcih4QVBJRXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgeEFQSSBjb21wbGV0ZWQgZXZlbnRcclxuICAgKi9cclxuICBwdWJsaWMgdHJpZ2dlclhBUElDb21wbGV0ZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJU2NvcmVkKHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUsICdjb21wbGV0ZWQnKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHhBUEkgc3VibWl0dGVkIGN1cnJpa2kgZXZlbnRcclxuICAgKi9cclxuICBwdWJsaWMgdHJpZ2dlclhBUElTdWJtaXR0ZWRDdXJyaWtpID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSVNjb3JlZCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCAnc3VibWl0dGVkLWN1cnJpa2knKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgeEFQSSBkYXRhLlxyXG4gICAqIENvbnRyYWN0IHVzZWQgYnkgcmVwb3J0IHJlbmRlcmluZyBlbmdpbmUuXHJcbiAgICpcclxuICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTZ9XHJcbiAgICovXHJcbiAgcHVibGljIGdldFhBUElEYXRhID0gKCkgPT4ge1xyXG4gICAgdmFyIHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUoJ2Fuc3dlcmVkJyk7XHJcbiAgICB0aGlzLmFkZFF1ZXN0aW9uVG9YQVBJKHhBUElFdmVudCk7XHJcbiAgICB0aGlzLmFkZFJlc3BvbnNlVG9YQVBJKHhBUElFdmVudCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0ZW1lbnQ6IHhBUElFdmVudC5kYXRhLnN0YXRlbWVudFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZSB4QVBJIG9iamVjdCBkZWZpbml0aW9uIHVzZWQgaW4geEFQSSBzdGF0ZW1lbnRzLlxyXG4gICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0eEFQSURlZmluaXRpb24gPSAoKTogWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiA9PiB7XHJcbiAgICB2YXIgZGVmaW5pdGlvbiA9IG5ldyBYQVBJQWN0aXZpdHlEZWZpbml0aW9uKCk7XHJcbiAgICBkZWZpbml0aW9uLmRlc2NyaXB0aW9uID0ge1xyXG4gICAgICAnZW4tVVMnOiAnPHA+JyArIHRoaXMucmVwb3NpdG9yeS5nZXRUYXNrRGVzY3JpcHRpb24oKSArICc8L3A+JyArIHRoaXMucmVwb3NpdG9yeS5nZXRDbG96ZVRleHQoKVxyXG4gICAgfTtcclxuICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xyXG4gICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUgPSAnZmlsbC1pbic7IC8vIFdlIHVzZSB0aGUgJ2ZpbGwtaW4nIHR5cGUgZXZlbiBpbiBzZWxlY3QgbW9kZSwgYXMgdGhlIHhBUEkgZm9ybWF0IGZvciBzZWxlY3Rpb25zIGRvZXNuJ3QgcmVhbGx5IGNhdGVyIGZvciBzZXF1ZW5jZXMuXHJcbiAgICBkZWZpbml0aW9uLmNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuID0gW107XHJcbiAgICBsZXQgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggPSAne2Nhc2VfbWF0dGVycz0nICsgdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlICsgJ30nO1xyXG5cclxuICAgIC8vIHhBUEkgZm9yY2VzIHVzIHRvIGNyZWF0ZSBzb2x1dGlvbiBwYXR0ZXJucyBmb3IgYWxsIHBvc3NpYmxlIHNvbHV0aW9uIGNvbWJpbmF0aW9uc1xyXG4gICAgbGV0IGNvcnJlY3RBbnN3ZXJQZXJtdXRhdGlvbnMgPSBjcmVhdGVQZXJtdXRhdGlvbnModGhpcy5jbG96ZUNvbnRyb2xsZXIuZ2V0Q29ycmVjdEFuc3dlckxpc3QoKSk7XHJcbiAgICBmb3IgKGxldCBwZXJtdXRhdGlvbiBvZiBjb3JyZWN0QW5zd2VyUGVybXV0YXRpb25zKSB7XHJcbiAgICAgIGRlZmluaXRpb24uY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4ucHVzaChjb3JyZWN0UmVzcG9uc2VzUGF0dGVyblByZWZpeCArIHBlcm11dGF0aW9uLmpvaW4oJ1ssXScpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZpbml0aW9uO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgcXVlc3Rpb24gaXRzZWxmIHRvIHRoZSBkZWZpbml0aW9uIHBhcnQgb2YgYW4geEFQSUV2ZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFkZFF1ZXN0aW9uVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pO1xyXG4gICAgdGhpcy5qUXVlcnkuZXh0ZW5kKGRlZmluaXRpb24sIHRoaXMuZ2V0eEFQSURlZmluaXRpb24oKSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIHRoZSByZXNwb25zZSBwYXJ0IHRvIGFuIHhBUEkgZXZlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SDVQLlhBUElFdmVudH0geEFQSUV2ZW50XHJcbiAgICogIFRoZSB4QVBJIGV2ZW50IHdlIHdpbGwgYWRkIGEgcmVzcG9uc2UgdG9cclxuICAgKi9cclxuICBwdWJsaWMgYWRkUmVzcG9uc2VUb1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XHJcbiAgICB4QVBJRXZlbnQuc2V0U2NvcmVkUmVzdWx0KHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUsIHRoaXMpO1xyXG4gICAgeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50LnJlc3VsdC5yZXNwb25zZSA9IHRoaXMuZ2V0eEFQSVJlc3BvbnNlKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgeEFQSSB1c2VyIHJlc3BvbnNlLCB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVzZXIgYW5zd2VycyBzZXBhcmF0ZWQgYnkgdGhlIFwiWyxdXCIgcGF0dGVyblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXR4QVBJUmVzcG9uc2UgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIHZhciB1c2Vyc0Fuc3dlcnMgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIHVzZXJzQW5zd2Vycy5qb2luKCdbLF0nKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL2hpZ2hsaWdodCc7XHJcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4uL21vZGVscy9hbnN3ZXInO1xyXG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi9tb2RlbHMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi4vbW9kZWxzL3NuaXBwZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rTG9hZGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBCbGFua0xvYWRlcjtcclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoc2V0dGluZ3M6IElTZXR0aW5ncywgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpOiBCbGFua0xvYWRlciB7XHJcbiAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBCbGFua0xvYWRlcihzZXR0aW5ncywgbG9jYWxpemF0aW9uLCBqcXVlcnksIG1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEJsYW5rTG9hZGVyIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZSlcclxuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG5cclxuICAgIHRocm93IFwiQmxhbmtMb2FkZXIgbXVzdCBiZSBpbml0aWFsaXplZCBiZWZvcmUgdXNlLlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWNvZGVIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gZWxlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVCbGFuayhpZDogc3RyaW5nLCBjb3JyZWN0VGV4dDogc3RyaW5nLCBoaW50VGV4dDogc3RyaW5nLCBpbmNvcnJlY3RBbnN3ZXJzOiBhbnlbXSk6IEJsYW5rIHtcclxuICAgIHZhciBibGFuayA9IG5ldyBCbGFuayh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qcXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UsIGlkKVxyXG4gICAgaWYgKGNvcnJlY3RUZXh0KSB7XHJcbiAgICAgIGNvcnJlY3RUZXh0ID0gdGhpcy5kZWNvZGVIdG1sKGNvcnJlY3RUZXh0KTtcclxuICAgICAgYmxhbmsuYWRkQ29ycmVjdEFuc3dlcihuZXcgQW5zd2VyKGNvcnJlY3RUZXh0LCBcIlwiLCBmYWxzZSwgMCwgdGhpcy5zZXR0aW5ncykpO1xyXG4gICAgfVxyXG4gICAgYmxhbmsuc2V0SGludChuZXcgTWVzc2FnZShoaW50VGV4dCA/IGhpbnRUZXh0IDogXCJcIiwgZmFsc2UsIDApKTtcclxuXHJcbiAgICBpZiAoaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBmb3IgKHZhciBoNXBJbmNvcnJlY3RBbnN3ZXIgb2YgaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICAgIGJsYW5rLmFkZEluY29ycmVjdEFuc3dlcih0aGlzLmRlY29kZUh0bWwoaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlclRleHQpLCBoNXBJbmNvcnJlY3RBbnN3ZXIuaW5jb3JyZWN0QW5zd2VyRmVlZGJhY2ssIGg1cEluY29ycmVjdEFuc3dlci5zaG93SGlnaGxpZ2h0LCBoNXBJbmNvcnJlY3RBbnN3ZXIuaGlnaGxpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBibGFuaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXBsYWNlU25pcHBldHMoYmxhbms6IEJsYW5rLCBzbmlwcGV0czogU25pcHBldFtdKSB7XHJcbiAgICBibGFuay5jb3JyZWN0QW5zd2Vycy5jb25jYXQoYmxhbmsuaW5jb3JyZWN0QW5zd2VycylcclxuICAgICAgLmZvckVhY2goYW5zd2VyID0+IGFuc3dlci5tZXNzYWdlLnRleHQgPSB0aGlzLmdldFN0cmluZ1dpdGhTbmlwcGV0cyhhbnN3ZXIubWVzc2FnZS50ZXh0LCBzbmlwcGV0cykpO1xyXG4gICAgYmxhbmsuaGludC50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYmxhbmsuaGludC50ZXh0LCBzbmlwcGV0cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0cmluZ1dpdGhTbmlwcGV0cyh0ZXh0OiBzdHJpbmcsIHNuaXBwZXRzOiBTbmlwcGV0W10pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZXh0IHx8IHRleHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYoIXNuaXBwZXRzKVxyXG4gICAgICByZXR1cm4gdGV4dDsgICAgXHJcblxyXG4gICAgZm9yICh2YXIgc25pcHBldCBvZiBzbmlwcGV0cykge1xyXG4gICAgICBpZiAoc25pcHBldC5uYW1lID09PSB1bmRlZmluZWQgfHwgc25pcHBldC5uYW1lID09PSBcIlwiIHx8IHNuaXBwZXQudGV4dCA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQudGV4dCA9PT0gXCJcIilcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcIkBcIiArIHNuaXBwZXQubmFtZSwgc25pcHBldC50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhlIGhpZ2hsaWdodCBvYmplY3RzIHRvIHRoZSBhbnN3ZXJzIGluIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2VyIGxpc3QuXHJcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmUgLSBBbGwgaGlnaGxpZ2h0cyBjb21pbmcgYmVmb3JlIHRoZSBibGFuay5cclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0FmdGVyIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGFmdGVyIHRoZSBibGFuay5cclxuICAgKi9cclxuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoYmxhbms6IEJsYW5rLCBoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkge1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIGJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5pbmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJsYW5rLmhpbnQubGlua0hpZ2hsaWdodChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4vYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2Nsb3plLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xyXG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhIGNsb3plIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbG96ZUxvYWRlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplZEJsYW5rTWFya2VyID0gJ19fXyc7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sIC0gVGhlIGh0bWwgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGNsb3plIHdpdGggYmxhbmtzIG1hcmtpbmcgYW5kIGhpZ2hsaWdodCBtYXJraW5ncy5cclxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3MgLSBBbGwgYmxhbmtzIGFzIGVudGVyZWQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yLlxyXG4gICAqIEByZXR1cm5zIENsb3plXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG96ZShodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IENsb3plIHtcclxuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBodG1sID0gQ2xvemVMb2FkZXIubm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sKTtcclxuXHJcbiAgICB2YXIgY29udmVyc2lvblJlc3VsdCA9IENsb3plTG9hZGVyLmNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWwsIGJsYW5rcyk7XHJcbiAgICBodG1sID0gY29udmVyc2lvblJlc3VsdC5odG1sO1xyXG4gICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCA9IGNvbnZlcnNpb25SZXN1bHQub3JkZXJlZEFsbEVsZW1lbnRzTGlzdDtcclxuICAgIGhpZ2hsaWdodEluc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuaGlnaGxpZ2h0SW5zdGFuY2VzO1xyXG4gICAgYmxhbmtzSW5zdGFuY2VzID0gY29udmVyc2lvblJlc3VsdC5ibGFua3NJbnN0YW5jZXM7XHJcblxyXG4gICAgQ2xvemVMb2FkZXIubGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsIGhpZ2hsaWdodEluc3RhbmNlcywgYmxhbmtzSW5zdGFuY2VzKTtcclxuXHJcbiAgICB2YXIgY2xvemUgPSBuZXcgQ2xvemUoKTtcclxuICAgIGNsb3plLmh0bWwgPSBodG1sO1xyXG4gICAgY2xvemUuYmxhbmtzID0gYmxhbmtzSW5zdGFuY2VzO1xyXG4gICAgY2xvemUuaGlnaGxpZ2h0cyA9IGhpZ2hsaWdodEluc3RhbmNlcztcclxuXHJcbiAgICByZXR1cm4gY2xvemU7XHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogQ29udmVydHMgISFzaWduYWwhISBoaWdobGlnaHQgbWFya3VwIGFuZCBfX18gIGJsYW5rIG1hcmt1cCBpbnRvIDxzcGFuPi4uLjwvc3Bhbj4uXHJcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0aW5nIGh0bWwgc3RyaW5nIGFuZCB0aHJlZSBsaXN0cyBvZiBhbGwgYWN0aXZlIGVsZW1lbnRzIHVzZWQgaW4gdGhlIGNsb3plOlxyXG4gICAqICAgIG9yZGVyZWRBbGxFbGVtZW50czogaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlIGluIHRoZSBodG1sLlxyXG4gICAqICAgIGhpZ2hsaWdodEluc3RhbmNlczogb25seSBoaWdobGlnaHRzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlXHJcbiAgICogICAgYmxhbmtzSW5zdGFuY2VzOiBvbmx5IGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbFxyXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rc1xyXG4gICAqIEByZXR1cm5zIExpc3RzIG9mIGFjdGl2ZSBlbGVtZW50cyAoc2VlIGRlc2NyaXB0aW9uKS5cclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0TWFya3VwVG9TcGFucyhodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IHsgaHRtbDogc3RyaW5nLCBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdIH0ge1xyXG4gICAgdmFyIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIHZhciBleGNsYW1hdGlvbk1hcmtSZWdFeHAgPSAvISEoLnsxLDQwfT8pISEvaTtcclxuICAgIHZhciBoaWdobGlnaHRDb3VudGVyID0gMDtcclxuICAgIGxldCBibGFua0NvdW50ZXIgPSAwO1xyXG5cclxuICAgIC8vIFNlYXJjaGVzIHRoZSBodG1sIHN0cmluZyBmb3IgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGFuZCBpbnNlcnRzIHNwYW5zLiBcclxuICAgIGRvIHtcclxuICAgICAgdmFyIG5leHRIaWdobGlnaHRNYXRjaCA9IGh0bWwubWF0Y2goZXhjbGFtYXRpb25NYXJrUmVnRXhwKTtcclxuICAgICAgdmFyIG5leHRCbGFua0luZGV4ID0gaHRtbC5pbmRleE9mKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XHJcblxyXG4gICAgICBpZiAobmV4dEhpZ2hsaWdodE1hdGNoICYmICgobmV4dEhpZ2hsaWdodE1hdGNoLmluZGV4IDwgbmV4dEJsYW5rSW5kZXgpIHx8IChuZXh0QmxhbmtJbmRleCA8IDApKSkge1xyXG4gICAgICAgIC8vIG5leHQgYWN0aXZlIGVsZW1lbnQgaXMgYSBoaWdobGlnaHRcclxuICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodChuZXh0SGlnaGxpZ2h0TWF0Y2hbMV0sIGBoaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfWApO1xyXG4gICAgICAgIGhpZ2hsaWdodEluc3RhbmNlcy5wdXNoKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShleGNsYW1hdGlvbk1hcmtSZWdFeHAsIGA8c3BhbiBpZD0nY29udGFpbmVyX2hpZ2hsaWdodF8ke2hpZ2hsaWdodENvdW50ZXJ9Jz48L3NwYW4+YCk7XHJcbiAgICAgICAgaGlnaGxpZ2h0Q291bnRlcisrO1xyXG4gICAgICB9IGVsc2UgaWYgKG5leHRCbGFua0luZGV4ID49IDApIHtcclxuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgYmxhbmtcclxuICAgICAgICBpZiAoYmxhbmtDb3VudGVyID49IGJsYW5rcy5sZW5ndGgpIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBibGFuayBpcyBub3QgaW4gdGhlIHJlcG9zaXRvcnkgKFRoZSBjb250ZW50IGF1dGhvciBoYXMgbWFya2VkIHRvbyBtYW55IGJsYW5rcyBpbiB0aGUgdGV4dCwgYnV0IG5vdCBlbnRlcmVkIGNvcnJlY3QgYW5zd2Vycy4pXHJcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgXCI8c3Bhbj48L3NwYW4+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHZhciBibGFuayA9IGJsYW5rc1tibGFua0NvdW50ZXJdO1xyXG4gICAgICAgICAgYmxhbmtzSW5zdGFuY2VzLnB1c2goYmxhbmspO1xyXG4gICAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGJsYW5rKTtcclxuICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl8ke2JsYW5rLmlkfSc+PC9zcGFuPmApO1xyXG4gICAgICAgICAgYmxhbmtDb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aGlsZSAobmV4dEhpZ2hsaWdodE1hdGNoIHx8IChuZXh0QmxhbmtJbmRleCA+PSAwKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCxcclxuICAgICAgaGlnaGxpZ2h0SW5zdGFuY2VzOiBoaWdobGlnaHRJbnN0YW5jZXMsXHJcbiAgICAgIGJsYW5rc0luc3RhbmNlczogYmxhbmtzSW5zdGFuY2VzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9va3MgZm9yIGFsbCBpbnN0YW5jZXMgb2YgbWFya2VkIGJsYW5rcyBhbmQgcmVwbGFjZXMgdGhlbSB3aXRoIF9fXy4gXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXHJcbiAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIHVuZGVybGluZUJsYW5rUmVnRXggPSAvX3szLH0vZztcclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UodW5kZXJsaW5lQmxhbmtSZWdFeCwgQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyKTtcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGJsYW5rcyBhbmQgY2FsbHMgdGhlaXIgbGlua0hpZ2hsaWdodElkc1RvT2JqZWN0cyguLi4pLlxyXG4gICAqIEBwYXJhbSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0IFxyXG4gICAqIEBwYXJhbSBoaWdobGlnaHRJbnN0YW5jZXMgXHJcbiAgICogQHBhcmFtIGJsYW5rc0luc3RhbmNlcyBcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBsaW5rSGlnaGxpZ2h0c09iamVjdHMob3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSk6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzSW5zdGFuY2VzKSB7XHJcbiAgICAgIHZhciBuZXh0QmxhbmtJbmRleEluQXJyYXkgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LmluZGV4T2YoYmxhbmspO1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxyXG4gICAgICAgIC5zbGljZSgwLCBuZXh0QmxhbmtJbmRleEluQXJyYXkpXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXHJcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KVxyXG4gICAgICAgIC5yZXZlcnNlKCk7XHJcbiAgICAgIHZhciBoaWdobGlnaHRzQWZ0ZXJCbGFuayA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3RcclxuICAgICAgICAuc2xpY2UobmV4dEJsYW5rSW5kZXhJbkFycmF5ICsgMSlcclxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcclxuICAgICAgICAubWFwKGUgPT4gZSBhcyBIaWdobGlnaHQpO1xyXG4gICAgICBCbGFua0xvYWRlci5pbnN0YW5jZS5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChibGFuaywgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rLCBoaWdobGlnaHRzQWZ0ZXJCbGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xyXG5pbXBvcnQgeyBDbG96ZUxvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXInO1xyXG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcclxuaW1wb3J0IHsgSURhdGFSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcclxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL21vZGVscy9oaWdobGlnaHRcIjtcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBSYWN0aXZlRXZlbnRzS2V5cyBmcm9tICcuLi8uLi9saWIvcmFjdGl2ZS1ldmVudHMta2V5cyc7XHJcblxyXG5pbnRlcmZhY2UgU2NvcmVDaGFuZ2VkIHtcclxuICAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBdXRvQ2hlY2tlZCB7XHJcbiAgKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTb2x2ZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVHlwZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvemVDb250cm9sbGVyIHtcclxuICBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5O1xyXG5cclxuICBwcml2YXRlIGNsb3plOiBDbG96ZTtcclxuICBwcml2YXRlIGlzU2VsZWN0Q2xvemU6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBvblNjb3JlQ2hhbmdlZDogU2NvcmVDaGFuZ2VkO1xyXG4gIHB1YmxpYyBvbkF1dG9DaGVja2VkOiBBdXRvQ2hlY2tlZDtcclxuICBwdWJsaWMgb25Tb2x2ZWQ6IFNvbHZlZDtcclxuICBwdWJsaWMgb25UeXBlZDogVHlwZWQ7XHJcblxyXG4gIC8vIFN0b3JhZ2Ugb2YgdGhlIHJhY3RpdmUgb2JqZWN0cyB0aGF0IGxpbmsgbW9kZWxzIGFuZCB2aWV3c1xyXG4gIHByaXZhdGUgaGlnaGxpZ2h0UmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgYmxhbmtSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBnZXQgbWF4U2NvcmUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTY29yZSgpOiBudW1iZXIge1xyXG4gICAgdmFyIHNjb3JlID0gdGhpcy5jbG96ZS5ibGFua3MuZmlsdGVyKGIgPT4gYi5pc0NvcnJlY3QpLmxlbmd0aDtcclxuICAgIHJldHVybiBNYXRoLm1heCgwLCBzY29yZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFsbEJsYW5rc0VudGVyZWQoKSB7XHJcbiAgICBpZiAodGhpcy5jbG96ZSlcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLmV2ZXJ5KGJsYW5rID0+IGJsYW5rLmlzRXJyb3IgfHwgYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzUmV0cnkpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmlzU29sdmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0ZpbGxlZE91dCgpIHtcclxuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLnNvbWUoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRnVsbHlGaWxsZWRPdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShiID0+IGIuZW50ZXJlZFRleHQgIT09ICcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUgTWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHVwIGFsbCBibGFua3MsIHRoZSBjbG96ZSBpdHNlbGYgYW5kIHRoZSByYWN0aXZlIGJpbmRpbmdzLlxyXG4gICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290XHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZShyb290OiBIVE1MRWxlbWVudCwganF1ZXJ5OiBKUXVlcnkpIHtcclxuICAgIHRoaXMuanF1ZXJ5ID0ganF1ZXJ5O1xyXG4gICAgdGhpcy5pc1NlbGVjdENsb3plID0gdGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgdmFyIGJsYW5rcyA9IHRoaXMucmVwb3NpdG9yeS5nZXRCbGFua3MoKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdENsb3plICYmIHRoaXMuc2V0dGluZ3Muc2VsZWN0QWx0ZXJuYXRpdmVzID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsKSB7XHJcbiAgICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rcykge1xyXG4gICAgICAgIGxldCBvdGhlckJsYW5rcyA9IGJsYW5rcy5maWx0ZXIodiA9PiB2ICE9PSBibGFuayk7XHJcbiAgICAgICAgYmxhbmsubG9hZENob2ljZXNGcm9tT3RoZXJCbGFua3Mob3RoZXJCbGFua3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNuaXBwZXRzID0gdGhpcy5yZXBvc2l0b3J5LmdldFNuaXBwZXRzKCk7XHJcbiAgICBibGFua3MuZm9yRWFjaChibGFuayA9PiBCbGFua0xvYWRlci5pbnN0YW5jZS5yZXBsYWNlU25pcHBldHMoYmxhbmssIHNuaXBwZXRzKSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZSA9IENsb3plTG9hZGVyLmNyZWF0ZUNsb3plKHRoaXMucmVwb3NpdG9yeS5nZXRDbG96ZVRleHQoKSwgYmxhbmtzKTtcclxuXHJcbiAgICB2YXIgY29udGFpbmVycyA9IHRoaXMuY3JlYXRlQW5kQWRkQ29udGFpbmVycyhyb290KTtcclxuICAgIGNvbnRhaW5lcnMuY2xvemUuaW5uZXJIVE1MID0gdGhpcy5jbG96ZS5odG1sO1xyXG4gICAgdGhpcy5jcmVhdGVSYWN0aXZlQmluZGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWxsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgaWYgKCghYmxhbmsuaXNDb3JyZWN0KSAmJiBibGFuay5lbnRlcmVkVGV4dCAhPT0gXCJcIilcclxuICAgICAgICBibGFuay5ldmFsdWF0ZUF0dGVtcHQodHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgdGhpcy5jaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcygpO1xyXG4gIH1cclxuXHJcbiAgdGV4dFR5cGVkID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsub25UeXBlZCgpO1xyXG4gICAgaWYgKHRoaXMub25UeXBlZClcclxuICAgICAgdGhpcy5vblR5cGVkKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICBibGFuay5vbkZvY3Vzc2VkKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheUZlZWRiYWNrID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsub25EaXNwbGF5RmVlZGJhY2soKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBzaG93SGludCA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcclxuICAgIGJsYW5rLnNob3dIaW50KCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdENsb3NlVG9vbHRpcCA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIGJsYW5rLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgYmxhbmsuaWQpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0JsYW5rID0gKGJsYW5rOiBCbGFuaywgY2F1c2U6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKChjYXVzZSA9PT0gJ2JsdXInIHx8IGNhdXNlID09PSAnY2hhbmdlJykpIHtcclxuICAgICAgYmxhbmsubG9zdEZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdXNlID09PSAnY2hhbmdlJyAmJiB0aGlzLm9uVHlwZWQpIHtcclxuICAgICAgdGhpcy5vblR5cGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XHJcbiAgICAgIGlmICghYmxhbmsuZW50ZXJlZFRleHQgfHwgYmxhbmsuZW50ZXJlZFRleHQgPT09IFwiXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgICBibGFuay5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICAgIHRoaXMub25BdXRvQ2hlY2tlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKChjYXVzZSA9PT0gJ2VudGVyJylcclxuICAgICAgJiYgKCh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBibGFuay5pc0NvcnJlY3QgJiYgIXRoaXMuaXNTb2x2ZWQpXHJcbiAgICAgICAgfHwgIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSkge1xyXG4gICAgICAvLyBtb3ZlIHRvIG5leHQgYmxhbmtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jbG96ZS5ibGFua3MuaW5kZXhPZihibGFuayk7XHJcbiAgICAgIHZhciBuZXh0SWQ7XHJcbiAgICAgIHdoaWxlIChpbmRleCA8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCAtIDEgJiYgIW5leHRJZCkge1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaXNDb3JyZWN0KVxyXG4gICAgICAgICAgbmV4dElkID0gdGhpcy5jbG96ZS5ibGFua3NbaW5kZXhdLmlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV4dElkKVxyXG4gICAgICAgIHRoaXMuanF1ZXJ5LmZpbmQoXCIjXCIgKyBuZXh0SWQpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvemUucmVzZXQoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBzaG93U29sdXRpb25zID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5zaG93U29sdXRpb25zKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBbmRBZGRDb250YWluZXJzKGFkZFRvOiBIVE1MRWxlbWVudCk6IHsgY2xvemU6IEhUTUxEaXZFbGVtZW50IH0ge1xyXG4gICAgdmFyIGNsb3plQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2xvemVDb250YWluZXJFbGVtZW50LmlkID0gJ2g1cC1jbG96ZS1jb250YWluZXInO1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2g1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlJztcclxuICAgIH1cclxuICAgIGFkZFRvLmFwcGVuZENoaWxkKGNsb3plQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xvemU6IGNsb3plQ29udGFpbmVyRWxlbWVudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGlnaGxpZ2h0QmluZGluZyhoaWdobGlnaHQ6IEhpZ2hsaWdodCkge1xyXG4gICAgdGhpcy5oaWdobGlnaHRSYWN0aXZlc1toaWdobGlnaHQuaWRdID0gbmV3IFJhY3RpdmUoe1xyXG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGhpZ2hsaWdodC5pZCxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3ZpZXdzL2hpZ2hsaWdodC5yYWN0aXZlLmh0bWwnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG9iamVjdDogaGlnaGxpZ2h0XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbGFua0JpbmRpbmcoYmxhbms6IEJsYW5rKSB7XHJcbiAgICB2YXIgcmFjdGl2ZSA9IG5ldyBSYWN0aXZlKHtcclxuICAgICAgZWw6ICcjY29udGFpbmVyXycgKyBibGFuay5pZCxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCcpLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaXNTZWxlY3RDbG96ZTogdGhpcy5pc1NlbGVjdENsb3plLFxyXG4gICAgICAgIGJsYW5rOiBibGFua1xyXG4gICAgICB9LFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICBlbnRlcjogUmFjdGl2ZUV2ZW50c0tleXMuZW50ZXIsXHJcbiAgICAgICAgZXNjYXBlOiBSYWN0aXZlRXZlbnRzS2V5cy5lc2NhcGUsXHJcbiAgICAgICAgYW55a2V5OiBSYWN0aXZlRXZlbnRzS2V5cy5hbnlrZXlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByYWN0aXZlLm9uKFwiY2hlY2tCbGFua1wiLCB0aGlzLmNoZWNrQmxhbmspO1xyXG4gICAgcmFjdGl2ZS5vbihcInNob3dIaW50XCIsIHRoaXMuc2hvd0hpbnQpO1xyXG4gICAgcmFjdGl2ZS5vbihcInRleHRUeXBlZFwiLCB0aGlzLnRleHRUeXBlZCk7XHJcbiAgICByYWN0aXZlLm9uKFwiY2xvc2VNZXNzYWdlXCIsIHRoaXMucmVxdWVzdENsb3NlVG9vbHRpcCk7XHJcbiAgICByYWN0aXZlLm9uKFwiZm9jdXNcIiwgdGhpcy5mb2N1cyk7XHJcbiAgICByYWN0aXZlLm9uKFwiZGlzcGxheUZlZWRiYWNrXCIsIHRoaXMuZGlzcGxheUZlZWRiYWNrKTtcclxuXHJcbiAgICB0aGlzLmJsYW5rUmFjdGl2ZXNbYmxhbmsuaWRdID0gcmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmFjdGl2ZUJpbmRpbmdzKCkge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUhpZ2hsaWdodEJpbmRpbmcoaGlnaGxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUJsYW5rQmluZGluZyhibGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGFsbCB2aWV3cyBvZiBoaWdobGlnaHRzIGFuZCBibGFua3MuIENhbiBiZSBjYWxsZWQgd2hlbiBhIG1vZGVsXHJcbiAgICogd2FzIGNoYW5nZWRcclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hDbG96ZSgpIHtcclxuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmNsb3plLmhpZ2hsaWdodHMpIHtcclxuICAgICAgdmFyIGhpZ2hsaWdodFJhY3RpdmUgPSB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF07XHJcbiAgICAgIGhpZ2hsaWdodFJhY3RpdmUuc2V0KFwib2JqZWN0XCIsIGhpZ2hsaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgdmFyIGJsYW5rUmFjdGl2ZSA9IHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF07XHJcbiAgICAgIGJsYW5rUmFjdGl2ZS5zZXQoXCJibGFua1wiLCBibGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMub25TY29yZUNoYW5nZWQpXHJcbiAgICAgIHRoaXMub25TY29yZUNoYW5nZWQodGhpcy5jdXJyZW50U2NvcmUsIHRoaXMubWF4U2NvcmUpO1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3plLmlzU29sdmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uU29sdmVkKVxyXG4gICAgICAgIHRoaXMub25Tb2x2ZWQoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlcmlhbGl6ZUNsb3plKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLnNlcmlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc2VyaWFsaXplQ2xvemUoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgIWRhdGEpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuY2xvemUuZGVzZXJpYWxpemUoZGF0YSk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlckxpc3QoKTogc3RyaW5nW11bXSB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm4gW1tdXTtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGJsYW5rLmdldENvcnJlY3RBbnN3ZXJzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSAgXHJcbn0iLCIvKipcclxuICogQ3JlYXRlcyBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIHBlcm11dGF0aW9ucyBvZiBhIGxpc3Qgb2YgbGlzdHMuXHJcbiAqIEBwYXJhbSBsaXN0IFRoZSBsaXN0IHRvIHBlcm11dGUgb3Zlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQZXJtdXRhdGlvbnMobGlzdDogYW55W11bXSk6IGFueVtdW10ge1xyXG4gIGxldCBvdXRwdXQ6IGFueVtdW10gPSBbW11dO1xyXG4gIGZvciAobGV0IGN1cnJlbnRTdWJsaXN0IG9mIGxpc3QpIHtcclxuICAgIGxldCBuZXdPdXRwdXQgPSBbXTtcclxuICAgIGZvciAobGV0IHN1Ymxpc3RPYmplY3Qgb2YgY3VycmVudFN1Ymxpc3QpIHtcclxuICAgICAgZm9yICh2YXIgbyBvZiBvdXRwdXQpIHtcclxuICAgICAgICB2YXIgbmV3TGlzdCA9IG8uc2xpY2UoKTtcclxuICAgICAgICBuZXdMaXN0LnB1c2goc3VibGlzdE9iamVjdClcclxuICAgICAgICBuZXdPdXRwdXQucHVzaChuZXdMaXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3V0cHV0ID0gbmV3T3V0cHV0O1xyXG4gIH1cclxuICByZXR1cm4gb3V0cHV0O1xyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgY2xlYW5zIGh0bWwgc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVbnJ3YXBwZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ2xlYW5zIGh0bWwgc3RyaW5ncyBieSByZW1vdmluZyB0aGUgb3V0bW9zdCBodG1sIHRhZyBvZiB0aGUgc3RyaW5nIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhZy5cclxuICAgKiBFeGFtcGxlczogIFwiPHA+bXkgdGV4dDwvcD5cIlwiIGJlY29tZXMgXCJteSB0ZXh0XCJcclxuICAgKiAgICAgICAgICAgIFwiPHA+dGV4dCAxPC9wPjxwPnRleHQgMjwvcDI+XCIgc3RheXNcclxuICAgKiBAcGFyYW0gaHRtbCBUaGUgaHRtbCBzdHJpbmdcclxuICAgKiBAcmV0dXJucyB0aGUgY2xlYW5lZCBodG1sIHN0cmluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1bndyYXAoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBwYXJzZWQgPSB0aGlzLmpxdWVyeShodG1sKTtcclxuICAgIGlmIChwYXJzZWQubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgbGV0IHVud3JhcHBlZCA9IHBhcnNlZC51bndyYXAoKS5odG1sKCk7XHJcbiAgICByZXR1cm4gdW53cmFwcGVkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuL2hpZ2hsaWdodCc7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xyXG4gIEV4YWN0TWF0Y2gsXHJcbiAgQ2xvc2VNYXRjaCxcclxuICBOb01hdGNoXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uIHtcclxuICBwdWJsaWMgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xyXG4gIHB1YmxpYyBjaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgdXNlZEFsdGVybmF0aXZlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VkQW5zd2VyOiBBbnN3ZXIpIHtcclxuICAgIHRoaXMuY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5Ob01hdGNoO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy51c2VkQWx0ZXJuYXRpdmUgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBwb3NzaWJsZSBhbnN3ZXIgdGhlIGNvbnRlbnQgYXV0aG9yIGVudGVycyBmb3IgYSBibGFuaywgZS5nLiB0aGUgY29ycmVjdCBvciBhbiBpbmNvcnJlY3QgYW5zd2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuc3dlciB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFsdGVybmF0aXZlcyBhcmUgZXF1aXZhbGVudCBzdHJpbmdzIHRoYXQgdGhlIGxpYnJhcnkgc2hvdWxkIHRyZWF0IHRoZSBzYW1lIHdheSwgZS5nLiBzaG93IHRoZSBzYW1lIGZlZWRiYWNrLiBcclxuICAgKi9cclxuICBhbHRlcm5hdGl2ZXM6IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGFuc3dlciB3YXMgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKi9cclxuICBtZXNzYWdlOiBNZXNzYWdlO1xyXG5cclxuICAvKipcclxuICAgKiBJcyB0cnVlIGlmIHRoZSBleHBlY3RlZCB0ZXh0IGZvciB0aGlzIGFuc3dlciBpcyBlbXB0eS5cclxuICAgKi9cclxuICBhcHBsaWVzQWx3YXlzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGFuc3dlclRleHQgLSBUaGUgZXhwZWN0ZWQgYW5zd2VyLiBBbHRlcm5hdGl2ZXMgYXJlIHNlcGFyYXRlZCBieSB8IG9yIDsgLiAoZS5nLiBcIkFsdGVybmF0aXZlIDF8QWx0ZXJuYXRpdmUgMnxBbHRlcm5hdGl2ZSAzfC4uLlwiICAtb3ItIFwiQWx0ZXJuYXRpdmUgMTtBbHRlcm5hdGl2ZSAyO0FsdGVybmF0aXZlIDNcIilcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHJlYWN0aW9uIC0gVGhlIHRvb2x0aXAgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBGb3JtYXQ6IFRvb2x0aXAgVGV4dDshIS0xISEgISErMSEhXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoYW5zd2VyVGV4dDogc3RyaW5nLCByZWFjdGlvbjogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHQ6IG51bWJlciwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmFsdGVybmF0aXZlcyA9IGFuc3dlclRleHQuc3BsaXQoL1xcLy8pLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQpO1xyXG4gICAgaWYgKGFuc3dlclRleHQudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuYXBwbGllc0Fsd2F5cyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIG9iamVjdCdzIG1lc3NhZ2UgaWRzIGFuZCBzdG9yZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGhpZ2hsaWdodCBvYmplY3QgZm9yIHRoZXNlIGlkcy5cclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0JlZm9yZVxyXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXJcclxuICAgKi9cclxuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcclxuICAgIHRoaXMubWVzc2FnZS5saW5rSGlnaGxpZ2h0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFR1cm5zIG9uIHRoZSBoaWdobGlnaHRzIHNldCBieSB0aGUgY29udGVudCBhdXRob3IgZm9yIHRoaXMgYW5zd2VyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZUhpZ2hsaWdodCgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KVxyXG4gICAgICB0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblN0cmluZyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIGRpZmYgYW5kIGNoZWNrcyBob3cgbWFueSBjaGFyYWN0ZXIgY2hhbmdlIG9wZXJhdGlvbnMgYXJlIG5lZWRlZCB0byB0dXJuIG9uZSBzdHJpbmcgaW50byB0aGUgb3RoZXIuIFNob3VsZCByZXR1cm4gdGhlIHNhbWUgcmVzdWx0cyBhcyB0aGUgTGV2ZW5zdGhlaW4gZGlzdGFuY2UuIFxyXG4gICAqIEBwYXJhbSAge1t7YWRkZWQ/OmJvb2xlYW4sIGJvb2xlYW46IHJlbW92ZWQ/LCBzdHJpbmc6IHZhbHVlfV19IGRpZmYgLSBhcyByZXR1cm5lZCBieSBqc2RpZmZcclxuICAgKiBAcmV0dXJucyBudW1iZXIgLSB0aGUgY291bnQgb2YgY2hhbmdlcyAocmVwbGFjZSwgYWRkLCBkZWxldGUpIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHRleHQgZnJvbSBvbmUgc3RyaW5nIHRvIHRoZSBvdGhlciBcclxuICAgKi9cclxuICBwcml2YXRlIGdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmY6IGpzZGlmZi5DaGFuZ2VbXSk6IG51bWJlciB7XHJcbiAgICB2YXIgdG90YWxDaGFuZ2VzQ291bnQgPSAwO1xyXG4gICAgdmFyIGxhc3RUeXBlID0gXCJcIjtcclxuICAgIHZhciBsYXN0Q291bnQgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGVsZW1lbnQgb2YgZGlmZikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVkKSB7XHJcbiAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInJlbW92ZWRcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChlbGVtZW50LmFkZGVkKSB7XHJcbiAgICAgICAgaWYgKGxhc3RUeXBlID09PSBcInJlbW92ZWRcIikge1xyXG4gICAgICAgICAgaWYgKGxhc3RDb3VudCA8IGVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGFzdENvdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcImFkZGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInNhbWVcIjtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Q291bnQgPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxDaGFuZ2VzQ291bnQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyBjYW4gYmUgd3JvbmcgdG8gc3RpbGwgYmUgY291bnRlZCBhcyBhIHNwZWxsaW5nIG1pc3Rha2UuXHJcbiAgICogSWYgc3BlbGxpbmcgbWlzdGFrZXMgYXJlIHR1cm5lZCBvZmYgdGhyb3VnaCB0aGUgc2V0dGluZ3MsIGl0IHdpbGwgcmV0dXJuIDAuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0XHJcbiAgICogQHJldHVybnMgbnVtYmVyXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgZ2V0QWNjZXB0YWJsZVNwZWxsaW5nTWlzdGFrZXModGV4dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciBhY2NlcHRhYmxlVHlwb0NvdW50OiBudW1iZXI7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMgfHwgdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycykgLy8gVE9ETzogY29uc2lkZXIgcmVtb3ZhbFxyXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDEwKSArIDE7XHJcbiAgICBlbHNlXHJcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSAwO1xyXG5cclxuICAgIHJldHVybiBhY2NlcHRhYmxlVHlwb0NvdW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlciBpbiBhbiBldHRlbXB0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlcixcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dGVtcHQgVGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKiBAcmV0dXJucyBFdmFsdWF0aW9uIGluZGljYXRlcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlci5cclxuICAgKi9cclxuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KGF0dGVtcHQ6IHN0cmluZyk6IEV2YWx1YXRpb24ge1xyXG4gICAgdmFyIGNsZWFuZWRBdHRlbXB0ID0gdGhpcy5jbGVhblN0cmluZyhhdHRlbXB0KTtcclxuICAgIHZhciBldmFsdWF0aW9uID0gbmV3IEV2YWx1YXRpb24odGhpcyk7XHJcblxyXG4gICAgZm9yICh2YXIgYWx0ZXJuYXRpdmUgb2YgdGhpcy5hbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgdmFyIGNsZWFuZWRBbHRlcm5hdGl2ZSA9IHRoaXMuY2xlYW5TdHJpbmcoYWx0ZXJuYXRpdmUpO1xyXG5cclxuICAgICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGNsZWFuZWRBbHRlcm5hdGl2ZSwgY2xlYW5lZEF0dGVtcHQsXHJcbiAgICAgICAgeyBpZ25vcmVDYXNlOiAhdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlIH0pO1xyXG4gICAgICB2YXIgY2hhbmdlQ291bnQgPSB0aGlzLmdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmYpO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZUNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XHJcbiAgICAgICAgZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2g7XHJcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFuZ2VDb3VudCA8PSB0aGlzLmdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKGFsdGVybmF0aXZlKVxyXG4gICAgICAgICYmIChldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9PT0gMCB8fCBjaGFuZ2VDb3VudCA8IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KSkge1xyXG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gY2hhbmdlQ291bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBldmFsdWF0aW9uO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi9jbG96ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgQW5zd2VyLCBDb3JyZWN0bmVzcyB9IGZyb20gJy4vYW5zd2VyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscyB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBnZXRMb25nZXN0U3RyaW5nLCBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuICAvLyBjb250ZW50XHJcbiAgY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGluY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGhpbnQ6IE1lc3NhZ2U7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjaG9pY2VzOiBzdHJpbmdbXTtcclxuICBoYXNIaW50OiBib29sZWFuO1xyXG5cclxuICAvLyB2aWV3bW9kZWwgc3R1ZmZcclxuXHJcbiAgbGFzdENoZWNrZWRUZXh0OiBzdHJpbmc7XHJcbiAgZW50ZXJlZFRleHQ6IHN0cmluZztcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW47XHJcbiAgaXNFcnJvcjogYm9vbGVhbjtcclxuICBpc1JldHJ5OiBib29sZWFuO1xyXG4gIGhhc1BlbmRpbmdGZWVkYmFjazogYm9vbGVhbjtcclxuICBpc1Nob3dpbmdTb2x1dGlvbjogYm9vbGVhbjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgbWluVGV4dExlbmd0aDogbnVtYmVyO1xyXG4gIHNwZWVjaEJ1YmJsZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgaW5jb3JyZWN0IGFuc3dlcnMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSBvYmplY3QuIENhbGwgZmluaXNoSW5pdGlhbGl6YXRpb24oKVxyXG4gICAqIHdoZW4gZG9uZS5cclxuICAgKiBAcGFyYW0gIHtJU2V0dGluZ3N9IHNldHRpbmdzXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY29ycmVjdFRleHQ/XHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBoaW50VGV4dD9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMudHlwZSA9IENsb3plRWxlbWVudFR5cGUuQmxhbms7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW4gYWxsIGluY29ycmVjdCBhbnN3ZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAqL1xyXG4gIHB1YmxpYyBmaW5pc2hJbml0aWFsaXphdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcykge1xyXG4gICAgICB0aGlzLmxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWxjdWxhdGVNaW5UZXh0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29ycmVjdEFuc3dlcihhbnN3ZXI6IEFuc3dlcikge1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2Vycy5wdXNoKGFuc3dlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlcnMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhbnN3ZXIuYWx0ZXJuYXRpdmVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGludChtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICB0aGlzLmhpbnQgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5oYXNIaW50ID0gdGhpcy5oaW50LnRleHQgIT09IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBpbmNvcnJlY3QgYW5zd2VyIHRvIHRoZSBsaXN0LlxyXG4gICAqIEBwYXJhbSB0ZXh0IC0gV2hhdCB0aGUgdXNlciBtdXN0IGVudGVyLlxyXG4gICAqIEBwYXJhbSByZWFjdGlvbiAgLSBXaGF0IHRoZSB1c2VyIGdldHMgZGlzcGxheWVkIHdoZW4gaGUgZW50ZXJlcyB0aGUgdGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkSW5jb3JyZWN0QW5zd2VyKHRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5wdXNoKFxyXG4gICAgICBuZXcgQW5zd2VyKHRleHQsIHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQsIHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyB0aGUgaW5wdXQgYm94IG11c3QgaGF2ZSBiZSB0byBhbGxvdyBmb3IgYWxsIGNvcnJlY3QgYW5zd2Vycy5cclxuICAgKi9cclxuICAvLyBUT0RPOiByZWZhY3RvclxyXG4gIHByaXZhdGUgY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpOiB2b2lkIHtcclxuICAgIHZhciBhbnN3ZXJzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgY29ycmVjdEFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGZvciAobGV0IGluY29ycmVjdEFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhpbmNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9uZ2VzdEFuc3dlciA9IGdldExvbmdlc3RTdHJpbmcoYW5zd2Vycyk7XHJcbiAgICB2YXIgbCA9IGxvbmdlc3RBbnN3ZXIubGVuZ3RoO1xyXG4gICAgdGhpcy5taW5UZXh0TGVuZ3RoID0gTWF0aC5tYXgoMTAsIGwgLSAobCAlIDEwKSArIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgYWx0ZXJuYXRpdmVzIHByb3ZpZGVkIGJ5XHJcbiAgICogdGhlIGNvcnJlY3QgYW5kIGluY29ycmVjdCBhbnN3ZXJzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHRoaXMuY2hvaWNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheSh0aGlzLmNob2ljZXMpO1xyXG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgY29ycmVjdCBhbnN3ZXJzIG9mIHRoZSBjbG96ZS5cclxuICAgKiBAcGFyYW0gb3RoZXJCbGFua3MgQWxsIE9USEVSIGJsYW5rcyBpbiB0aGUgY2xvemUuIChleGNsdWRlcyB0aGUgY3VycmVudCBvbmUhKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rczogQmxhbmtbXSk6IHN0cmluZ1tdIHtcclxuICAgIGxldCBvd25DaG9pY2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlckNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAobGV0IG90aGVyQmxhbmsgb2Ygb3RoZXJCbGFua3MpIHtcclxuICAgICAgZm9yIChsZXQgYW5zd2VyIG9mIG90aGVyQmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgICBvdGhlckNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJDaG9pY2VzID0gc2h1ZmZsZUFycmF5KG90aGVyQ2hvaWNlcyk7XHJcblxyXG4gICAgbGV0IG1heENob2ljZXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XHJcbiAgICBpZiAobWF4Q2hvaWNlcyA9PT0gdW5kZWZpbmVkIHx8IG1heENob2ljZXMgPT09IDApXHJcbiAgICAgIG1heENob2ljZXMgPSBvd25DaG9pY2VzLmxlbmd0aCArIG90aGVyQ2hvaWNlcy5sZW5ndGg7XHJcblxyXG4gICAgbGV0IGxlZnRPdmVyQ2hvaWNlcyA9IG1heENob2ljZXMgLSBvd25DaG9pY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVmdE92ZXJDaG9pY2VzICYmIHggPCBvdGhlckNob2ljZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgaWYgKG93bkNob2ljZXMuaW5kZXhPZihvdGhlckNob2ljZXNbeF0pID49IDApIHtcclxuICAgICAgICBsZWZ0T3ZlckNob2ljZXMrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvd25DaG9pY2VzLnB1c2gob3RoZXJDaG9pY2VzW3hdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheShvd25DaG9pY2VzKTtcclxuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENsZWFycyB0aGUgYmxhbmsgZnJvbSBhbGwgZW50ZXJlZCB0ZXh0IGFuZCBoaWRlcyBwb3B1cHMuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xyXG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBibGFuayB0byBhIHN0YXRlIGluIHdoaWNoIHRoZSBjb3JyZWN0IHNvbHV0aW9uIGlmIHNob3duIGlmIHRoZSB1c2VyXHJcbiAgICogaGFzbid0IGVudGVyZWQgYSBjb3JyZWN0IG9uZSBzbyBmYXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dTb2x1dGlvbigpIHtcclxuICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KHRydWUpO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgICBpZiAodGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlc1swXTtcclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZvY3Vzc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XHJcbiAgICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EaXNwbGF5RmVlZGJhY2soKSB7XHJcbiAgICBpZiAodGhpcy5oYXNQZW5kaW5nRmVlZGJhY2spIHtcclxuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwbGF5VG9vbHRpcChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IE1lc3NhZ2VUeXBlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4sIGlkPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcClcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93KGlkID8gaWQgOiB0aGlzLmlkLCBtZXNzYWdlLCB0aGlzLCB0eXBlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVG9vbHRpcCgpIHtcclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUb29sdGlwRXJyb3JUZXh0KG1lc3NhZ2U6IE1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcDogYm9vbGVhbikge1xyXG4gICAgaWYgKG1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwLCBtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGV4cGVjdGVkVGV4dDogc3RyaW5nLCBlbnRlcmVkVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMudHlwb01lc3NhZ2UpXHJcblxyXG4gICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGV4cGVjdGVkVGV4dCwgZW50ZXJlZFRleHQsIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcclxuXHJcbiAgICB2YXIgbWlzdGFrZVNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IFwic3BlbGxpbmctbWlzdGFrZVwiIH0pO1xyXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpZmYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIHZhciBwYXJ0ID0gZGlmZltpbmRleF07XHJcbiAgICAgIHZhciBzcGFuQ2xhc3MgPSAnJztcclxuICAgICAgaWYgKHBhcnQucmVtb3ZlZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gZGlmZi5sZW5ndGggLSAxIHx8ICFkaWZmW2luZGV4ICsgMV0uYWRkZWQpIHtcclxuICAgICAgICAgIHBhcnQudmFsdWUgPSBwYXJ0LnZhbHVlLnJlcGxhY2UoLy4vZywgXCJfXCIpO1xyXG4gICAgICAgICAgc3BhbkNsYXNzID0gJ21pc3NpbmctY2hhcmFjdGVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcclxuICAgICAgICBzcGFuQ2xhc3MgPSAnbWlzdGFrZW4tY2hhcmFjdGVyJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IHNwYW5DbGFzcywgXCJodG1sXCI6IHBhcnQudmFsdWUucmVwbGFjZShcIiBcIiwgXCImbmJzcDtcIikgfSk7XHJcbiAgICAgIG1pc3Rha2VTcGFuLmFwcGVuZChzcGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiQG1pc3Rha2VcIiwgdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIpLmFwcGVuZChtaXN0YWtlU3BhbikuaHRtbCgpKTtcclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBlbnRlcmVkIHRleHQgaXMgdGhlIGNvcnJlY3QgYW5zd2VyIG9yIG9uZSBvZiB0aGUgXHJcbiAgICogaW5jb3JyZWN0IG9uZXMgYW5kIGdpdmVzIHRoZSB1c2VyIGZlZWRiYWNrIGFjY29yZGluZ2x5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUF0dGVtcHQoc3VycHJlc3NUb29sdGlwczogYm9vbGVhbiwgZm9yY2VDaGVjaz86IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgJiYgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPT09IHRoaXMuZW50ZXJlZFRleHQgJiYgIWZvcmNlQ2hlY2spXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IHRoaXMuZW50ZXJlZFRleHQudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuXHJcbiAgICB2YXIgZXhhY3RDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlQ29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcclxuICAgIHZhciBleGFjdEluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlSW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XHJcblxyXG4gICAgaWYgKGV4YWN0Q29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBleGFjdENvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4YWN0SW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQ29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKHRoaXMuZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZSwgdGhpcy5lbnRlcmVkVGV4dCksIE1lc3NhZ2VUeXBlLlJldHJ5LCBzdXJwcmVzc1Rvb2x0aXBzKTtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlJldHJ5KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChjbG9zZUluY29ycmVjdE1hdGNoZXNbMF0udXNlZEFuc3dlciwgc3VycHJlc3NUb29sdGlwcyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWx3YXlzQXBwbHlpbmdBbnN3ZXJzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLmZpbHRlcihhID0+IGEuYXBwbGllc0Fsd2F5cyk7XHJcbiAgICBpZiAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzICYmIGFsd2F5c0FwcGx5aW5nQW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChhbHdheXNBcHBseWluZ0Fuc3dlcnNbMF0sIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHlwZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9zdEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZVNlcnZpY2UuaXNBY3RpdmUodGhpcykpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBib29sZWFuIHByb3BlcnRpZXMgaXNDb3JyZWN0LCBpcyBFcnJvciBhbmQgaXNSZXRyeSBhY2NvcmRpbmcgdG8gdGhlcGFzc2VkICBtZXNzYWdlVHlwZS5cclxuICAgKiBAcGFyYW0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBbnN3ZXJTdGF0ZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNSZXRyeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db3JyZWN0OlxyXG4gICAgICAgIHRoaXMuaXNDb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlJldHJ5OlxyXG4gICAgICAgIHRoaXMuaXNSZXRyeSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uOlxyXG4gICAgICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3JUb29sdGlwKGFuc3dlcjogQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcclxuICAgIGlmIChhbnN3ZXIubWVzc2FnZSAmJiBhbnN3ZXIubWVzc2FnZS50ZXh0KSB7XHJcbiAgICAgIHRoaXMuc2V0VG9vbHRpcEVycm9yVGV4dChhbnN3ZXIubWVzc2FnZSwgc3VycHJlc3NUb29sdGlwKTtcclxuICAgIH1cclxuICAgIGlmICghc3VycHJlc3NUb29sdGlwKSB7XHJcbiAgICAgIGFuc3dlci5hY3RpdmF0ZUhpZ2hsaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGhpbnQgaW4gdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dIaW50KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93aW5nU29sdXRpb24gfHwgdGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIGlmICh0aGlzLmhpbnQgJiYgdGhpcy5oaW50LnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmhpbnQudGV4dCwgTWVzc2FnZVR5cGUuUmV0cnksIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuaGludC5oaWdobGlnaHRlZEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW50ZXJlZFRleHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gZGF0YTtcclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBDbG96ZUVsZW1lbnRUeXBlIHtcclxuICBCbGFuayxcclxuICBIaWdobGlnaHRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3plRWxlbWVudCB7XHJcbiAgcHVibGljIHR5cGU6IENsb3plRWxlbWVudFR5cGU7XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi9ibGFua1wiO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGNsb3plLiBJbnN0YW50aWF0ZSB3aXRoIHN0YXRpYyBjcmVhdGVDbG96ZSgpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3plIHtcclxuICBwdWJsaWMgaHRtbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdobGlnaHRbXTtcclxuICBwdWJsaWMgYmxhbmtzOiBCbGFua1tdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBibGFua3Mgd2VyZSBlbnRlcmVkIGNvcnJlY3RseS4gXHJcbiAgICogQHJldHVybnMgYm9vbGVhblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNTb2x2ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5ibGFua3MuZXZlcnkoYiA9PiBiLmlzQ29ycmVjdCA9PT0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhpZGVBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuaGlnaGxpZ2h0cykge1xyXG4gICAgICBoaWdobGlnaHQuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsucmVzZXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29sdXRpb25zKCkge1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsuc2hvd1NvbHV0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkgOiBzdHJpbmdbXSB7XHJcbiAgICB2YXIgY2xvemUgPSBbXTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XHJcbiAgICAgIGNsb3plLnB1c2goYmxhbmsuc2VyaWFsaXplKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG96ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcclxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy5ibGFua3MubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdmFyIGJsYW5rID0gdGhpcy5ibGFua3NbaW5kZXhdO1xyXG4gICAgICBibGFuay5kZXNlcmlhbGl6ZShkYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xyXG4gIEVycm9yLFxyXG4gIENvcnJlY3QsXHJcbiAgUmV0cnksXHJcbiAgU2hvd1NvbHV0aW9uLFxyXG4gIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2xvemVUeXBlIHtcclxuICBUeXBlLFxyXG4gIFNlbGVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZWxlY3RBbHRlcm5hdGl2ZXMge1xyXG4gIEFsdGVybmF0aXZlcyxcclxuICBBbGxcclxufSIsImltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGhpZ2hsaWdodCBpbiB0aGUgY2xvemUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0aXNIaWdobGlnaHRlZDogYm9vbGVhbjtcclxuXHRpZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodDtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgbWVzc2FnZSB0aGF0IHRoZSBjb250ZW50IGF1dGhvciBoYXMgc3BlY2lmaWVkIHRvIGJlIGEgcmVhY3Rpb25cclxuICogdG8gYW4gdXNlcidzIGFuc3dlci4gXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50OiBIaWdobGlnaHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIHByaXZhdGUgcmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZighc2hvd0hpZ2hsaWdodClcclxuICAgICAgdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgbGlua0hpZ2hsaWdodCA9IChoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24pXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPCAwICYmICgwIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSkgPCBoaWdobGlnaHRzQmVmb3JlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0JlZm9yZVswIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID4gMCAmJiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSA8IGhpZ2hsaWdodHNBZnRlci5sZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQWZ0ZXJbdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICB9XHJcbn0iLCIvKipcclxuICogQSBzbmlwcGV0IGlzIGEgdGV4dCBibG9jayB0aGF0IGlzIHB1dCBpbnRvIHBsYWNlZCBtYXJrZWQgaW4gZmVlZGJhY2sgdGV4dHMgb3IgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0cyB0aGUgc25pcHBldC5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc25pcHBldCB0aGF0IGlzIHVzZWQgd2hlbiBpdCBpcyByZWZlcmVuY2VkIGluIGEgZmVlZGJhY2t0ZXh0ICh3aXRob3V0IHRoZSBzbmlwcGV0IG1hcmtlciBAKVxyXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzbmlwcGV0IGl0c2VsZiAoaHRtbClcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB7XHJcbiAgbmFtZTogYW55O1xyXG4gIGRlc2NyaXB0aW9uOiBhbnk7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGludGVyYWN0aW9uVHlwZTogXCJ0cnVlLWZhbHNlXCIgfCBcImNob2ljZVwiIHwgXCJmaWxsLWluXCIgfCBcImxvbmctZmlsbC1pblwiIHwgXCJtYXRjaGluZ1wiIHwgXCJwZXJmb3JtYW5jZVwiIHwgXCJzZXF1ZW5jaW5nXCIgfCBcImxpa2VydFwiIHwgXCJudW1lcmljXCIgfCBcIm90aGVyXCI7XHJcbiAgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4/OiBzdHJpbmdbXVxyXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XHJcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NuaXBwZXRcIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Vud3JhcHBlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW107XHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZztcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nO1xyXG4gIGdldE1lZGlhKCk6IGFueTtcclxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nO1xyXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGFyb3VuZCB0aGUgaDVwIGNvbmZpZyBvYmplY3QgYW5kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBINVBEYXRhUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWdEYXRhOiBhbnksIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncyxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIFxyXG4gICAgcHJpdmF0ZSB1bndyYXBwZXI6IFVucndhcHBlcikge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXHJcbiAgICovXHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVkaWEoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWE7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC50YXNrO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW10ge1xyXG4gICAgdmFyIGJsYW5rczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdClcclxuICAgICAgcmV0dXJuIGJsYW5rcztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGg1cEJsYW5rID0gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdFtpXTtcclxuXHJcbiAgICAgIHZhciBjb3JyZWN0VGV4dCA9IGg1cEJsYW5rLmNvcnJlY3RBbnN3ZXJUZXh0O1xyXG4gICAgICBpZiAoY29ycmVjdFRleHQgPT09IFwiXCIgfHwgY29ycmVjdFRleHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIHZhciBibGFuayA9IEJsYW5rTG9hZGVyLmluc3RhbmNlLmNyZWF0ZUJsYW5rKFwiY2xvemVcIiArIGksIGNvcnJlY3RUZXh0LFxyXG4gICAgICAgIGg1cEJsYW5rLmhpbnQsIGg1cEJsYW5rLmluY29ycmVjdEFuc3dlcnNMaXN0KTtcclxuXHJcbiAgICAgIGJsYW5rLmZpbmlzaEluaXRpYWxpemF0aW9uKCk7XHJcbiAgICAgIGJsYW5rcy5wdXNoKGJsYW5rKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmxhbmtzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U25pcHBldHMoKTogU25pcHBldFtdIHtcclxuICAgIHZhciBzbmlwcGV0czogU25pcHBldFtdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMpXHJcbiAgICAgIHJldHVybiBzbmlwcGV0cztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgcmF3X3NuaXBwZXQgPSB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHNbaV07XHJcbiAgICAgIHZhciBzbmlwcGV0ID0gbmV3IFNuaXBwZXQocmF3X3NuaXBwZXQuc25pcHBldE5hbWUsIHRoaXMudW53cmFwcGVyLnVud3JhcChyYXdfc25pcHBldC5zbmlwcGV0VGV4dCkpO1xyXG4gICAgICBzbmlwcGV0cy5wdXNoKHNuaXBwZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNuaXBwZXRzO1xyXG4gIH1cclxufSIsImV4cG9ydCBlbnVtIExvY2FsaXphdGlvbkxhYmVscyB7XHJcbiAgc2hvd1NvbHV0aW9uQnV0dG9uID0gXCJzaG93U29sdXRpb25zXCIsXHJcbiAgcmV0cnlCdXR0b24gPSBcInRyeUFnYWluXCIsXHJcbiAgY2hlY2tBbGxCdXR0b24gPSBcImNoZWNrQW5zd2VyXCIsXHJcbiAgbm90RmlsbGVkT3V0V2FybmluZyA9IFwibm90RmlsbGVkT3V0XCIsXHJcbiAgdGlwQnV0dG9uID1cInRpcExhYmVsXCIsXHJcbiAgdHlwb01lc3NhZ2UgPSBcInNwZWxsaW5nTWlzdGFrZVdhcm5pbmdcIixcclxuICBzY29yZUJhckxhYmVsID0gXCJzY29yZUJhckxhYmVsXCIgIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzIHtcclxuICBjb25maXJtQ2hlY2sgPSBcImNvbmZpcm1DaGVja1wiLFxyXG4gIGNvbmZpcm1SZXRyeSA9IFwiY29uZmlybVJldHJ5XCIsXHJcbiAgb3ZlcmFsbEZlZWRiYWNrID0gXCJvdmVyYWxsRmVlZGJhY2tcIixcclxuICBjdXJyaWtpU2V0dGluZ3MgPSBcImN1cnJpa2lzZXR0aW5nc1wiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBsb2NhbGl6YXRpb24gc2VydmljZXMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEg1UExvY2FsaXphdGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWd1cmF0aW9uOiBhbnkpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbGl6ZWQgc3RyaW5nIHRoYXQgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGlkZW50aWZpZXIuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJcclxuICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGdldFRleHQobG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsYWJlbFRvU3RyaW5nKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpIHtcclxuICAgIHJldHVybiBsYWJlbC50b1N0cmluZygpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbGl6ZWQgc3RyaW5nIGZvciB0aGUgbGFiZWwuXHJcbiAgICogQHBhcmFtICB7TG9jYWxpemF0aW9uTGFiZWxzfSBsYWJlbFxyXG4gICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAqL1xyXG4gIGdldFRleHRGcm9tTGFiZWwobGFiZWw6IExvY2FsaXphdGlvbkxhYmVscyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0KHRoaXMubGFiZWxUb1N0cmluZyhsYWJlbCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKHN0cnVjdHVyZTogTG9jYWxpemF0aW9uU3RydWN0dXJlcykgOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltzdHJ1Y3R1cmUudG9TdHJpbmcoKV07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZW51bXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNwZWVjaEJ1YmJsZTogYW55O1xyXG4gIHByaXZhdGUgYXNzb2NpYXRlZEJsYW5rOiBCbGFuaztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqUXVlcnk6IEpRdWVyeVN0YXRpYykge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KGVsZW1lbnRJZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGJsYW5rOiBCbGFuaywgdHlwZT86IE1lc3NhZ2VUeXBlKSB7XHJcbiAgICBpZiAoIXR5cGUpXHJcbiAgICAgIHR5cGUgPSBNZXNzYWdlVHlwZS5Ob25lO1xyXG5cclxuICAgIHZhciBlbGVtZW50cyA9IHRoaXMualF1ZXJ5KFwiI1wiICsgZWxlbWVudElkKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IG5ldyBINVAuSm91YmVsU3BlZWNoQnViYmxlKGVsZW1lbnRzLCBtZXNzYWdlKTtcclxuICAgICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSBibGFuaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgaWYgKHRoaXMuc3BlZWNoQnViYmxlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hCdWJibGUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXNzb2NpYXRlZEJsYW5rID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKGJsYW5rOiBCbGFuaykge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzb2NpYXRlZEJsYW5rID09PSBibGFuaztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIHtcclxuICBjbG96ZVR5cGU6IENsb3plVHlwZTtcclxuICBzZWxlY3RBbHRlcm5hdGl2ZXM6IFNlbGVjdEFsdGVybmF0aXZlcztcclxuICBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXI7XHJcbiAgZW5hYmxlUmV0cnk6IGJvb2xlYW47XHJcbiAgZW5hYmxlU29sdXRpb25zQnV0dG9uOiBib29sZWFuO1xyXG4gIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuO1xyXG4gIGRpc2FibGVTdWJtaXRCdXR0b246IGJvb2xlYW47XHJcbiAgYXV0b0NoZWNrOiBib29sZWFuO1xyXG4gIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcbiAgd2FyblNwZWxsaW5nRXJyb3JzOiBib29sZWFuO1xyXG4gIGFjY2VwdFNwZWxsaW5nRXJyb3JzOiBib29sZWFuO1xyXG4gIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuO1xyXG4gIGNvbmZpcm1DaGVja0RpYWxvZzogYm9vbGVhbjtcclxuICBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW47XHJcbiAgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEg1UFNldHRpbmdzIGltcGxlbWVudHMgSVNldHRpbmdzIHtcclxuICBwdWJsaWMgY2xvemVUeXBlOiBDbG96ZVR5cGUgPSBDbG96ZVR5cGUuVHlwZTtcclxuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xyXG4gIHB1YmxpYyBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXIgPSA1O1xyXG4gIHB1YmxpYyBlbmFibGVSZXRyeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBhdXRvQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB3YXJuU3BlbGxpbmdFcnJvcnM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGNvbmZpcm1DaGVja0RpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihoNXBDb25maWdEYXRhOiBhbnkpIHtcclxuICAgIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5tb2RlID09PSAnc2VsZWN0aW9uJykge1xyXG4gICAgICB0aGlzLmNsb3plVHlwZSA9IENsb3plVHlwZS5TZWxlY3Q7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XHJcbiAgICB9IGVsc2UgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gJ2FsdGVybmF0aXZlcycpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xyXG4gICAgdGhpcy5lbmFibGVSZXRyeSA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZVJldHJ5O1xyXG4gICAgdGhpcy5lbmFibGVTb2x1dGlvbnNCdXR0b24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVTb2x1dGlvbnNCdXR0b247XHJcbiAgICB0aGlzLmVuYWJsZUNoZWNrQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlQ2hlY2tCdXR0b247XHJcbiAgICB0aGlzLmF1dG9DaGVjayA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmF1dG9DaGVjaztcclxuICAgIHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNhc2VTZW5zaXRpdmU7XHJcbiAgICB0aGlzLndhcm5TcGVsbGluZ0Vycm9ycyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNwZWxsaW5nRXJyb3JCZWhhdmlvdXIgPT09IFwid2FyblwiO1xyXG4gICAgdGhpcy5hY2NlcHRTcGVsbGluZ0Vycm9ycyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNwZWxsaW5nRXJyb3JCZWhhdmlvdXIgPT09IFwiYWNjZXB0XCI7XHJcbiAgICB0aGlzLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0ID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ7XHJcbiAgICB0aGlzLmNvbmZpcm1DaGVja0RpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1DaGVja0RpYWxvZztcclxuICAgIHRoaXMuY29uZmlybVJldHJ5RGlhbG9nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY29uZmlybVJldHJ5RGlhbG9nO1xyXG4gICAgdGhpcy5kaXNhYmxlSW1hZ2Vab29taW5nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZGlzYWJsZUltYWdlWm9vbWluZztcclxuXHJcbiAgICBpZihoNXBDb25maWdEYXRhLmN1cnJpa2lzZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbiA9IGg1cENvbmZpZ0RhdGEuY3VycmlraXNldHRpbmdzLmRpc2FibGVTdWJtaXRCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmZvcmNlTG9naWMoKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHNldHMgc2Vuc2libGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHNldHRpbmdzIGhpZGRlbiB3aXRoIHNob3dXaGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlbmZvcmNlTG9naWMoKSB7XHJcbiAgICBpZiAodGhpcy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5UeXBlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWNjZXB0U3BlbGxpbmdFcnJvcnMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jYXNlU2Vuc2l0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBpZD1cXFwiY29udGFpbmVye3tpZH19XFxcIiBjbGFzcz1cXFwiYmxhbmsge3sjYmxhbmsuaGFzUGVuZGluZ0ZlZWRiYWNrfX1oYXMtcGVuZGluZy1mZWVkYmFja3t7L2lmfX0ge3sjYmxhbmsuaGFzSGludH19aGFzLXRpcHt7L2lmfX0ge3sjYmxhbmsuaXNDb3JyZWN0fX1jb3JyZWN0e3svaWZ9fSB7eyNibGFuay5pc0Vycm9yfX1lcnJvcnt7L2lmfX0ge3sjYmxhbmsuaXNSZXRyeX19cmV0cnl7ey9pZn19IHt7I2JsYW5rLmlzU2hvd2luZ1NvbHV0aW9ufX1zaG93aW5nLXNvbHV0aW9ue3svaWZ9fVxcXCI+XFxyXFxuICB7eyN1bmxlc3MgaXNTZWxlY3RDbG96ZX19XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiIFxcclxcbiAgICAgICAgICAgICBzaXplPVxcXCJ7e2JsYW5rLm1pblRleHRMZW5ndGh9fVxcXCIgb24tZXNjYXBlPVxcXCJAdGhpcy5maXJlKCdjbG9zZU1lc3NhZ2UnLCBibGFuaylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgIG9uLWJsdXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2JsdXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgIG9uLWZvY3VzPVxcXCJAdGhpcy5maXJlKCdmb2N1cycsIGJsYW5rKVxcXCJcXHJcXG4gICAgICAgICAgICAgb24tYW55a2V5PVxcXCJAdGhpcy5maXJlKCd0ZXh0VHlwZWQnLCBibGFuaylcXFwiXFxyXFxuICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fVxcclxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcclxcbiAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIi8+XFxyXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCIge3svaWZ9fT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAge3svaWZ9fVxcclxcbiAgICA8L3NwYW4+ICAgIFxcclxcbiAge3svdW5sZXNzfX1cXHJcXG4gIHt7I2lmIGlzU2VsZWN0Q2xvemV9fVxcclxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImg1cC1ub3RpZmljYXRpb25cXFwiIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdkaXNwbGF5RmVlZGJhY2snLCBibGFuaylcXFwiPlxcclxcbiAgICAgICAgJiN4ZjA1YTtcXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPiAgICAgIFxcclxcbiAgICAgIDxzZWxlY3QgaWQ9XFxcInt7YmxhbmsuaWR9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7YmxhbmsuZW50ZXJlZFRleHR9fVxcXCJcXHJcXG4gICAgICAgICAgICAgIG9uLWVudGVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdlbnRlcicpXFxcIiBcXHJcXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnY2hhbmdlJylcXFwiXFxyXFxuICAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fSBcXHJcXG4gICAgICAgICAgICAgIHNpemU9XFxcIjFcXFwiXFxyXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiPlxcclxcbiAgICAgICAge3sjZWFjaCBibGFuay5jaG9pY2VzfX1cXHJcXG4gICAgICAgICAgPG9wdGlvbj57e3RoaXN9fTwvb3B0aW9uPlxcclxcbiAgICAgICAge3svZWFjaH19XFxyXFxuICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJ7ey9pZn19PlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtdGlwLWNvbnRhaW5lclxcXCIgdGl0bGU9XFxcIlRpcFxcXCIgYXJpYS1sYWJlbD1cXFwiVGlwXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48c3BhbiBjbGFzcz1cXFwiam91YmVsLWljb24tdGlwLW5vcm1hbCBcXFwiPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zaGFkb3dcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc3BlZWNoLWJ1YmJsZVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1pbmZvXFxcIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAge3svaWZ9fSAgICAgXFxyXFxuICAgIDwvc3Bhbj5cXHJcXG4gIHt7L2lmfX1cXHJcXG48L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIHt7I29iamVjdC5pc0hpZ2hsaWdodGVkfX1jbGFzcz1cXFwiaGlnaGxpZ2h0ZWRcXFwie3svaWZ9fSBpZD1cXFwie3tvYmplY3QuaWR9fVxcXCI+e3t7b2JqZWN0LnRleHR9fX08L3NwYW4+XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==