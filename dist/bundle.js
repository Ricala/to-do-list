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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/eventController.js":
/*!********************************!*\
  !*** ./src/eventController.js ***!
  \********************************/
/*! exports provided: eventController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventController\", function() { return eventController; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _renderController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderController */ \"./src/renderController.js\");\n\n\n\n\nfunction eventController(mainProject) {\n  console.log(\"event working\")\n  console.log(mainProject);\n  \n  const newProjectListener = (() => {\n    const newProjectBtn = document.getElementById(\"new-proj-btn\");\n    newProjectBtn.addEventListener('click', function(){projectForm()})\n  })();\n\n  function projectForm() {\n    Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"showProjectForm\"])();\n    let projUpdateBtn = document.getElementById('update-btn');\n    let projCancelBtn = document.getElementById('cancel-btn');\n\n    projUpdateBtn.addEventListener('click', function(){createProject()});\n    projCancelBtn.addEventListener('click', function(){Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"removeProjectForm\"])()});\n  }\n\n  function createProject() {\n    console.log(\"inside project create\");\n    const newProjTitle = document.getElementById('project-title');\n    const newProjDescrip = document.getElementById('project-descrip');\n    let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](newProjTitle, newProjDescrip);\n    mainProject.push(newProj);\n    Object(_renderController__WEBPACK_IMPORTED_MODULE_2__[\"renderSideProjects\"])(mainProject);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/eventController.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: showProjectForm, removeProjectForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjectForm\", function() { return showProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProjectForm\", function() { return removeProjectForm; });\nconst container = document.querySelector('#container');\nconst newProjectBtn = document.getElementById(\"new-proj-btn\");\n\nfunction showProjectForm() {\n  newProjectBtn.disabled = true;\n  let formContainer = document.createElement(\"div\");\n  formContainer.id = \"form-container\"\n\n  let form = document.createElement(\"div\");\n  form.id = \"project-form\";\n\n  let formHeader = document.createElement(\"h3\");\n  formHeader.appendChild(document.createTextNode(\"Create new project\"));\n  \n  let projectTitle = document.createElement(\"input\")\n  projectTitle.type = (\"text\", \"text\");\n  projectTitle.id = \"project-title\";\n\n  let projectDescrip = document.createElement(\"input\")\n  projectDescrip.type = (\"text\", \"text\");\n  projectDescrip.id = \"project-descrip\";\n\n  let btnDiv = document.createElement(\"div\");\n\n  let updateBtn = document.createElement(\"button\");\n  updateBtn.id = \"update-btn\";\n  updateBtn.appendChild(document.createTextNode(\"update\"));\n  btnDiv.appendChild(updateBtn);\n\n  let cancelBtn = document.createElement(\"button\");\n  cancelBtn.id = \"cancel-btn\";\n  cancelBtn.appendChild(document.createTextNode(\"cancel\"));\n  btnDiv.appendChild(cancelBtn);\n\n  form.appendChild(formHeader);\n  form.appendChild(projectTitle);\n  form.appendChild(projectDescrip);\n  form.appendChild(btnDiv);\n  formContainer.appendChild(form);\n  container.appendChild(formContainer);\n}\n\nfunction removeProjectForm(){\n  container.removeChild(container.lastChild);\n  newProjectBtn.disabled = false;\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventController */ \"./src/eventController.js\");\n\nlet project = [];\n\nObject(_eventController__WEBPACK_IMPORTED_MODULE_0__[\"eventController\"])(project);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\n\nclass Project {\n  \n  constructor(title, description) {\n    console.log(\"project setup\");\n    this.title = title;\n    this.description = description;\n    this.container = [];\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/renderController.js":
/*!*********************************!*\
  !*** ./src/renderController.js ***!
  \*********************************/
/*! exports provided: renderSideProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSideProjects\", function() { return renderSideProjects; });\n\nfunction renderSideProjects(project) {\n  project.array.forEach(element => {\n    console.log(element);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/renderController.js?");

/***/ })

/******/ });