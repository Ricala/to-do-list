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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventController\", function() { return eventController; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _renderController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderController */ \"./src/renderController.js\");\n\n\n\nfunction eventController(mainProject) {\n  \n  const newProjectListener = (() => {\n    const newProjectBtn = document.getElementById(\"new-proj-btn\");\n    newProjectBtn.addEventListener('click', function(){showProjectForm()})\n  })();\n\n  const initialProjects = (() => {\n    let project1 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project one\", \"one This is a descript for a project one\");\n    let project2 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project two\", \"two This is a descript for a project two\");\n    let project3 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project three\", \"three This is a descript for a project three\");\n\n    mainProject.push(project1);\n    mainProject.push(project2);\n    mainProject.push(project3);\n\n    attachProjectListener(project1);\n    attachProjectListener(project2);\n    attachProjectListener(project3);\n  })();\n\n  function showProjectForm() {\n    _renderController__WEBPACK_IMPORTED_MODULE_1__[\"showProjectForm\"]();\n    let projUpdateBtn = document.getElementById('update-btn');\n    let projCancelBtn = document.getElementById('cancel-btn');\n\n    projUpdateBtn.addEventListener('click', function(){createProject()});\n    projCancelBtn.addEventListener('click', function(){_renderController__WEBPACK_IMPORTED_MODULE_1__[\"removeProjectForm\"]()});\n  }\n\n  function createProject() {\n    const newProjTitle = document.getElementById('project-title').value;\n    const newProjDescrip = document.getElementById('project-descrip').value;\n\n    if(newProjTitle == \"\") {\n      alert(\"Please enter a project title\")\n    } else if (newProjDescrip == \"\") {\n      alert(\"Please enter a project description\")\n    } else {\n      let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](newProjTitle, newProjDescrip);\n      mainProject.push(newProj);\n\n      _renderController__WEBPACK_IMPORTED_MODULE_1__[\"removeProjectForm\"]();\n      attachProjectListener(newProj);\n    }\n  }\n\n  function attachProjectListener(project) {\n    let projectItem = _renderController__WEBPACK_IMPORTED_MODULE_1__[\"addProjectList\"](project);\n    projectItem.addEventListener('click', function(){\n      _renderController__WEBPACK_IMPORTED_MODULE_1__[\"displayFullProject\"](project);\n      attachDeleteBtn();\n      attachToDoBtn();\n    });\n\n    function attachDeleteBtn() {\n      let deleteBtn = document.querySelector(\".delete-project-btn\");\n      deleteBtn.addEventListener('click', function() {\n        let result = confirm(`Delete Project \"${project.title}\"?`);\n        if(result) {\n          _renderController__WEBPACK_IMPORTED_MODULE_1__[\"removeProject\"](project);\n          mainProject.splice(project.projectId, 1);\n        }\n      })\n    }\n\n    function attachToDoBtn() {\n      let todoBtn = document.querySelector(\".add-to-do-btn\");\n      todoBtn.addEventListener('click', function(){toDoForm()})\n    }\n  }\n\n  function toDoForm() {\n    _renderController__WEBPACK_IMPORTED_MODULE_1__[\"showToDoForm\"]();\n    let todoUpdateBtn = document.getElementById('todo-update-btn');\n    let todoCancelBtn = document.getElementById('todo-cancel-btn');\n\n    todoUpdateBtn.addEventListener('click', function(){createToDo()});\n    todoCancelBtn.addEventListener('click', function(){console.log(\"delete\")});\n  }\n\n  function createToDo() {\n  }\n\n};\n\n\n\n//# sourceURL=webpack:///./src/eventController.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\nlet projectId = 0;\n\nclass Project {\n  \n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n    this.container = [];\n    this.projectId = projectId;\n    projectId++;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/renderController.js":
/*!*********************************!*\
  !*** ./src/renderController.js ***!
  \*********************************/
/*! exports provided: default, showProjectForm, removeProjectForm, addProjectList, displayFullProject, removeProject, showToDoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjectForm\", function() { return showProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProjectForm\", function() { return removeProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectList\", function() { return addProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayFullProject\", function() { return displayFullProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showToDoForm\", function() { return showToDoForm; });\nconst container = document.querySelector('#container');\nconst newProjectBtn = document.getElementById(\"new-proj-btn\");\nconst projectList = document.getElementById(\"project-list\");\nconst displayContaniner = document.getElementById(\"display-container\")\n\n  function showProjectForm() {\n    newProjectBtn.disabled = true;\n    let formContainer = document.createElement(\"div\");\n    formContainer.id = \"form-container\"\n\n    let form = document.createElement(\"div\");\n    form.id = \"project-form\";\n\n    let formHeader = document.createElement(\"h3\");\n    formHeader.appendChild(document.createTextNode(\"Create new project\"));\n    \n    let projectTitle = document.createElement(\"input\")\n    projectTitle.type = (\"text\", \"text\");\n    projectTitle.id = \"project-title\";\n\n    let projectDescrip = document.createElement(\"input\")\n    projectDescrip.type = (\"text\", \"text\");\n    projectDescrip.id = \"project-descrip\";\n\n    let btnDiv = document.createElement(\"div\");\n\n    let updateBtn = document.createElement(\"button\");\n    updateBtn.id = \"update-btn\";\n    updateBtn.appendChild(document.createTextNode(\"update\"));\n    btnDiv.appendChild(updateBtn);\n\n    let cancelBtn = document.createElement(\"button\");\n    cancelBtn.id = \"cancel-btn\";\n    cancelBtn.appendChild(document.createTextNode(\"cancel\"));\n    btnDiv.appendChild(cancelBtn);\n\n    form.appendChild(formHeader);\n    form.appendChild(projectTitle);\n    form.appendChild(projectDescrip);\n    form.appendChild(btnDiv);\n    formContainer.appendChild(form);\n    container.appendChild(formContainer);\n  }\n\n  function removeProjectForm(){\n    container.removeChild(container.lastChild);\n    newProjectBtn.disabled = false;\n  }\n\n  function addProjectList(project){\n    let itemContainer = document.createElement(\"div\");\n    itemContainer.id = `list-item-${project.projectId}`;\n    let listItem = document.createElement(\"h3\");\n    listItem.appendChild(document.createTextNode(project.title));\n    itemContainer.appendChild(listItem);\n    projectList.appendChild(itemContainer);\n\n    return itemContainer;\n  }\n\n  function displayFullProject(project) {\n\n    while(displayContaniner.firstChild){\n      displayContaniner.removeChild(displayContaniner.firstChild);\n    }\n    \n    let projectContainer = document.createElement(\"div\");\n    projectContainer.className = \"project-display\";\n\n    let projectTitle = document.createElement(\"h2\");\n    projectTitle.appendChild(document.createTextNode(project.title));\n    projectContainer.appendChild(projectTitle);\n\n    let descriptionDiv = document.createElement(\"div\");\n\n    let projectDescrip = document.createElement(\"h3\");\n    projectDescrip.appendChild(document.createTextNode(project.description));\n    descriptionDiv.appendChild(projectDescrip);\n\n    let deleteBtn = document.createElement(\"button\");\n    deleteBtn.className = \"delete-project-btn\";\n    deleteBtn.appendChild(document.createTextNode(\"delete\"));\n    descriptionDiv.appendChild(deleteBtn);\n\n    projectContainer.appendChild(descriptionDiv);\n    \n    let addToDoBtn = document.createElement(\"button\");\n    addToDoBtn.className = \"add-to-do-btn\"\n    addToDoBtn.appendChild(document.createTextNode(\"+\"));\n\n    projectContainer.appendChild(addToDoBtn);\n\n    displayContaniner.appendChild(projectContainer);\n  }\n\n  function removeProject(project) {\n    while(displayContaniner.firstChild){\n      displayContaniner.removeChild(displayContaniner.firstChild);\n    }\n\n    document.getElementById(`list-item-${project.projectId}`).remove();\n  }\n\n  function showToDoForm() {\n    newProjectBtn.disabled = true;\n    let formContainer = document.createElement(\"div\");\n    formContainer.id = \"form-container\"\n\n    let form = document.createElement(\"div\");\n    form.id = \"project-form\";\n\n    let formHeader = document.createElement(\"h3\");\n    formHeader.appendChild(document.createTextNode(\"Create new To-Do\"));\n    \n    let todoTitle = document.createElement(\"input\")\n    todoTitle.type = (\"text\", \"text\");\n    todoTitle.id = \"todo-title\";\n\n    let todoDescrip = document.createElement(\"input\")\n    todoDescrip.type = (\"text\", \"text\");\n    todoDescrip.id = \"todo-descrip\";\n\n    let priorityContainer = document.createElement(\"div\");\n    priorityContainer.className = \"priority\";\n\n    let priorityLabel = document.createElement(\"label\");\n    priorityLabel.appendChild(document.createTextNode(\"Priority\"));\n    priorityContainer.appendChild(priorityLabel);\n\n    let priorityCheck = document.createElement('input');\n    priorityCheck.type = \"checkbox\";\n    priorityCheck.name = \"priority\";\n    priorityCheck.value = \"priority\";\n    priorityCheck.id = \"priority-check\";\n    priorityContainer.appendChild(priorityCheck);\n\n    let btnDiv = document.createElement(\"div\");\n\n    let updateBtn = document.createElement(\"button\");\n    updateBtn.id = \"todo-update-btn\";\n    updateBtn.appendChild(document.createTextNode(\"update\"));\n    btnDiv.appendChild(updateBtn);\n\n    let cancelBtn = document.createElement(\"button\");\n    cancelBtn.id = \"todo-cancel-btn\";\n    cancelBtn.appendChild(document.createTextNode(\"cancel\"));\n    btnDiv.appendChild(cancelBtn);\n\n    form.appendChild(formHeader);\n    form.appendChild(todoTitle);\n    form.appendChild(todoDescrip);\n    form.appendChild(priorityContainer);\n    form.appendChild(btnDiv);\n    formContainer.appendChild(form);\n    container.appendChild(formContainer);\n  }\n\n  \n\n\n//# sourceURL=webpack:///./src/renderController.js?");

/***/ })

/******/ });