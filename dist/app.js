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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar myName = \"Will\";\r\nvar numberOfStates = 50;\r\nvar sum = 5 + 4;\r\nfunction sayHello() {\r\n    window.alert(\"Hello\");\r\n}\r\nsayHello();\r\nfunction checkAge(userName, userAge) {\r\n    if (userAge < 21) {\r\n        window.alert(\"Sorry\" +\r\n            \" \" +\r\n            userName +\r\n            \" \" +\r\n            \"you are not old enough to view this page\");\r\n    }\r\n}\r\ncheckAge(\"Charles\", 21);\r\ncheckAge(\"Abby\", 27);\r\ncheckAge(\"James\", 18);\r\ncheckAge(\"John\", 17);\r\nvar favoriteVeggies = [\"broccoli\", \"brussel sprouts\", \"cauliflower\", \"squash\"];\r\nfor (var _i = 0, favoriteVeggies_1 = favoriteVeggies; _i < favoriteVeggies_1.length; _i++) {\r\n    var i = favoriteVeggies_1[_i];\r\n    console.log(i);\r\n}\r\nvar pet = {\r\n    name: \"Gaspode\",\r\n    breed: \"Wonder Dog\",\r\n};\r\nvar person1 = {\r\n    name: \"Chuy\",\r\n    age: 22,\r\n};\r\nvar person2 = {\r\n    name: \"Ashton\",\r\n    age: 19,\r\n};\r\nvar person3 = {\r\n    name: \"Quinton\",\r\n    age: 12,\r\n};\r\nvar person4 = {\r\n    name: \"Stephen\",\r\n    age: 45,\r\n};\r\nvar person5 = {\r\n    name: \"Joe\",\r\n    age: 33,\r\n};\r\nvar personArray = [person1, person2, person3, person4, person5];\r\nfor (var i = 0; i < 4; i++) {\r\n    checkAge(personArray[i].name, personArray[i].age);\r\n}\r\nfunction getLength(anyWord) {\r\n    return anyWord.length;\r\n}\r\nconsole.log(getLength(\"Potato\"));\r\nvar arrayPeople = [\r\n    {\r\n        name: \"Joe\",\r\n        age: 33,\r\n    },\r\n    {\r\n        name: \"Joe\",\r\n        age: 33,\r\n    },\r\n    {\r\n        name: \"Joe\",\r\n        age: 33,\r\n    },\r\n    {\r\n        name: \"Joe\",\r\n        age: 33,\r\n    },\r\n    {\r\n        name: \"Joe\",\r\n        age: 33,\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./script.ts?");

/***/ })

/******/ });