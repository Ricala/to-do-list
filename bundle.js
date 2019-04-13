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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventController\", function() { return eventController; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _renderController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderController */ \"./src/renderController.js\");\n\n\n\n\nfunction eventController(mainProject) {\n\n  const btnSliderListener = (() => {\n    let showBar = false;\n    const btnSlider = document.getElementById(\"slider\");\n    btnSlider.addEventListener('click', function(){\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"showProjectBar\"](showBar)\n      showBar = !showBar;\n    });\n  })();\n\n  \n  const newProjectListener = (() => {\n    const newProjectBtn = document.getElementById(\"new-proj-btn\");\n    newProjectBtn.addEventListener('click', function(){showProjectForm()})\n  })();\n\n  const initialProjects = (() => {\n    let project1 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project one\");\n    let project2 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project two\");\n    let project3 = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](\"Project three\");\n\n    let todo1 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"ToDo\"](\"First to do item\", \"todo description text text text one one\", false);\n    let todo2 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"ToDo\"](\"First to do item\", \"todo description text text text two two\", false);\n    let todo3 = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"ToDo\"](\"First to do item\", \"todo description text text text three three\", true);\n\n    \n\n    project1.container.push(todo1);\n    project1.container.push(todo2);\n    project1.container.push(todo3);\n\n    project2.container.push(todo1);\n    project2.container.push(todo2);\n    project2.container.push(todo3);\n\n    project3.container.push(todo1);\n    project3.container.push(todo2);\n    project3.container.push(todo3);\n\n    mainProject.push(project1);\n    mainProject.push(project2);\n    mainProject.push(project3);\n\n    attachProjectListener(project1);\n    attachProjectListener(project2);\n    attachProjectListener(project3);\n    //render.displayToDoItems(project1);\n  })();\n\n  function showProjectForm() {\n    _renderController__WEBPACK_IMPORTED_MODULE_2__[\"showProjectForm\"]();\n    let projUpdateBtn = document.getElementById('update-btn');\n    let projCancelBtn = document.getElementById('cancel-btn');\n\n    projUpdateBtn.addEventListener('click', function(){createProject()});\n    projCancelBtn.addEventListener('click', function(){_renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeProjectForm\"]()});\n  }\n\n  function createProject() {\n    const newProjTitle = document.getElementById('project-title').value;\n\n    if(newProjTitle == \"\") {\n      alert(\"Please enter a project title\")\n    } else {\n      let newProj = new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](newProjTitle);\n      mainProject.push(newProj);\n\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeProjectForm\"]();\n      attachProjectListener(newProj);\n    }\n  }\n\n  function attachProjectListener(project) {\n    let projectItem = _renderController__WEBPACK_IMPORTED_MODULE_2__[\"addProjectList\"](project);\n    projectItem.addEventListener('click', function(){\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"displayFullProject\"](project);\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"displayToDoItems\"](project);\n      attachToDoListeners(project);\n      attachDeleteBtn();\n      attachToDoBtn();\n    });\n\n    function attachDeleteBtn() {\n      let deleteBtn = document.querySelector(\".delete-project-btn\");\n      deleteBtn.addEventListener('click', function() {\n        let result = confirm(`Delete Project \"${project.title}\"?`);\n        if(result) {\n          _renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeProject\"](project);\n          mainProject.splice(project.projectId, 1);\n        }\n      })\n    }\n\n    function attachToDoBtn() {\n      let todoBtn = document.querySelector(\".add-to-do-btn\");\n      todoBtn.addEventListener('click', function(){toDoForm(project)})\n    }\n  }\n\n  function toDoForm(project) {\n    _renderController__WEBPACK_IMPORTED_MODULE_2__[\"showToDoForm\"]();\n    let todoUpdateBtn = document.getElementById('todo-update-btn');\n    let todoCancelBtn = document.getElementById('todo-cancel-btn');\n\n    todoUpdateBtn.addEventListener('click', function(){createToDo(project)});\n    todoCancelBtn.addEventListener('click', function(){_renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeToDoForm\"]()});\n  }\n\n  function createToDo(project) {\n    let toDoTitle = document.getElementById(\"todo-title\").value;\n    let toDoDescrip = document.getElementById(\"todo-descrip\").value;\n    let priority = document.getElementById(\"priority-check\").checked;\n    \n    if(toDoTitle == \"\"){\n      alert(\"Please enter a title\")\n    } else if (toDoDescrip == \"\") {\n      alert(\"Please enter a description\")\n    } else {\n      let newToDo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"ToDo\"](toDoTitle, toDoDescrip, priority);\n      project.container.push(newToDo);\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"displayToDoItems\"](project);\n      _renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeToDoForm\"]();\n      attachSingleToDoListener(project, newToDo);\n    }\n  }\n\n  function attachToDoListeners(project) {\n    project.container.forEach(element => {\n      toDoListener(project, element);\n    });\n  }\n\n  function attachSingleToDoListener(project, newToDo) {\n    toDoListener(project, newToDo);\n  }\n\n  function toDoListener (project, element) {\n    let toDoContainer = document.getElementById(`toDo-${element.toDoId}`);\n      let isExtended = false;\n      toDoContainer.addEventListener('click', function() {\n        _renderController__WEBPACK_IMPORTED_MODULE_2__[\"extendToDoItem\"](element);\n        if(!isExtended){\n          deleteBtnListener();\n        }\n        isExtended = !isExtended;\n      })\n  \n      let completedCheckBox = document.querySelector(`input[name=complete-checkbox-${element.toDoId}]`);\n      \n      completedCheckBox.addEventListener('change', function() {\n        if(this.checked) {\n          _renderController__WEBPACK_IMPORTED_MODULE_2__[\"moveToDoItem\"](element.toDoId, true);\n        } else {\n          _renderController__WEBPACK_IMPORTED_MODULE_2__[\"moveToDoItem\"](element.toDoId, false);\n        }\n        if(isExtended) {\n          _renderController__WEBPACK_IMPORTED_MODULE_2__[\"extendToDoItem\"](element);\n          isExtended = false;\n        }\n      })\n  \n      function deleteBtnListener() {\n        let deleteBtn = document.getElementById(`delete-todo-${element.toDoId}`);\n        deleteBtn.addEventListener('click', function() {\n          project.container.splice(element.toDoId, 1);\n          _renderController__WEBPACK_IMPORTED_MODULE_2__[\"removeToDoItem\"](element.toDoId);\n        })\n  \n      }\n  }\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/eventController.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\nlet projectId = 0;\n\nclass Project {\n  \n  constructor(title) {\n    this.title = title;\n    this.container = [];\n    this.projectId = projectId;\n    projectId++;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/renderController.js":
/*!*********************************!*\
  !*** ./src/renderController.js ***!
  \*********************************/
/*! exports provided: showProjectBar, showProjectForm, removeProjectForm, addProjectList, displayFullProject, removeProject, showToDoForm, removeToDoForm, displayToDoItems, moveToDoItem, extendToDoItem, removeToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjectBar\", function() { return showProjectBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProjectForm\", function() { return showProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProjectForm\", function() { return removeProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectList\", function() { return addProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayFullProject\", function() { return displayFullProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showToDoForm\", function() { return showToDoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToDoForm\", function() { return removeToDoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayToDoItems\", function() { return displayToDoItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveToDoItem\", function() { return moveToDoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extendToDoItem\", function() { return extendToDoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToDoItem\", function() { return removeToDoItem; });\nconst container = document.querySelector('#container');\nconst newProjectBtn = document.getElementById(\"new-proj-btn\");\nconst projectList = document.getElementById(\"project-list\");\nconst displayContaniner = document.getElementById(\"display-container\")\n\n  function showProjectBar(showBar) {\n    const projectContainer = document.getElementById(\"project-container\");\n    const displayContainer = document.getElementById(\"display-container\");\n    const slider = document.getElementById(\"slider\");\n    console.log(\"trying to switch menu\")\n\n    if (showBar) {\n      projectContainer.style.display = \"block\";\n      displayContainer.style.gridColumn = `-2 / -1`;\n      slider.style.gridColumn = `3 / 4`;\n      \n    } else {\n      projectContainer.style.display = \"none\";\n      displayContainer.style.gridColumn = `2 / -1`;\n      slider.style.gridColumn = `1 / 2`;\n    }\n  }\n\n  function showProjectForm() {\n    newProjectBtn.disabled = true;\n    let formContainer = document.createElement(\"div\");\n    formContainer.id = \"form-container\"\n\n    let form = document.createElement(\"div\");\n    form.id = \"project-form\";\n\n    let formHeader = document.createElement(\"h3\");\n    formHeader.appendChild(document.createTextNode(\"Create new project\"));\n    \n    let projectTitle = document.createElement(\"input\")\n    projectTitle.type = (\"text\", \"text\");\n    projectTitle.id = \"project-title\";\n\n\n    let btnDiv = document.createElement(\"div\");\n\n    let updateBtn = document.createElement(\"button\");\n    updateBtn.id = \"update-btn\";\n    updateBtn.appendChild(document.createTextNode(\"update\"));\n    btnDiv.appendChild(updateBtn);\n\n    let cancelBtn = document.createElement(\"button\");\n    cancelBtn.id = \"cancel-btn\";\n    cancelBtn.appendChild(document.createTextNode(\"cancel\"));\n    btnDiv.appendChild(cancelBtn);\n\n    form.appendChild(formHeader);\n    form.appendChild(projectTitle);\n    form.appendChild(btnDiv);\n    formContainer.appendChild(form);\n    container.appendChild(formContainer);\n  }\n\n  function removeProjectForm(){\n    container.removeChild(container.lastChild);\n    newProjectBtn.disabled = false;\n  }\n\n  function addProjectList(project){\n    let itemContainer = document.createElement(\"div\");\n    itemContainer.id = `list-item-${project.projectId}`;\n    itemContainer.className = \"project-items\"\n    let listItem = document.createElement(\"h3\");\n    listItem.appendChild(document.createTextNode(project.title));\n    itemContainer.appendChild(listItem);\n    projectList.appendChild(itemContainer);\n\n    return itemContainer;\n  }\n\n  function displayFullProject(project) {\n\n    while(displayContaniner.firstChild){\n      displayContaniner.removeChild(displayContaniner.firstChild);\n    }\n    \n    let projectContainer = document.createElement(\"div\");\n    projectContainer.className = \"project-display\";\n\n    let projectTitle = document.createElement(\"h2\");\n    projectTitle.appendChild(document.createTextNode(project.title));\n    projectTitle.className = \"project-header\";\n    projectContainer.appendChild(projectTitle);\n\n    let descriptionDiv = document.createElement(\"div\");\n    descriptionDiv.className = \"display-description\"\n\n    let btnDiv = document.createElement(\"div\");\n    btnDiv.className = \"btn-container\";\n\n    let addToDoBtn = document.createElement(\"button\");\n    addToDoBtn.className = \"add-to-do-btn\"\n    addToDoBtn.appendChild(document.createTextNode(\"➕\"));\n    btnDiv.appendChild(addToDoBtn);\n\n    let deleteBtn = document.createElement(\"button\");\n    deleteBtn.className = \"delete-project-btn\";\n    deleteBtn.appendChild(document.createTextNode(\"🗑️\"));\n    btnDiv.appendChild(deleteBtn);\n\n    projectContainer.appendChild(btnDiv);\n\n    let listContainer = document.createElement(\"div\");\n    listContainer.className = \"list-container\"\n\n    let inProgressContainer = document.createElement(\"div\")\n    inProgressContainer.className = \"in-progress-container\"\n    \n    let progressHeader = document.createElement(\"h3\");\n    progressHeader.appendChild(document.createTextNode(\"In Progress\"))\n    progressHeader.className = \"list-header\"\n    inProgressContainer.appendChild(progressHeader);\n\n    let inProgressList = document.createElement(\"ul\");\n    inProgressList.className = \"in-progress-list\"\n    inProgressContainer.appendChild(inProgressList);\n\n    listContainer.appendChild(inProgressContainer);\n\n    let completedContainer = document.createElement(\"div\")\n    completedContainer.className = \"completed-container\"\n    \n    let completedHeader = document.createElement(\"h3\");\n    completedHeader.appendChild(document.createTextNode(\"Completed\"))\n    completedHeader.className = \"list-header\"\n    completedContainer.appendChild(completedHeader);\n\n    let completedList = document.createElement(\"ul\");\n    completedList.className = \"completed-list\"\n    completedContainer.appendChild(completedList);\n\n    listContainer.appendChild(completedContainer);\n\n    projectContainer.appendChild(listContainer);\n\n    displayContaniner.appendChild(projectContainer);\n  }\n\n  function removeProject(project) {\n    while(displayContaniner.firstChild){\n      displayContaniner.removeChild(displayContaniner.firstChild);\n    }\n\n    document.getElementById(`list-item-${project.projectId}`).remove();\n  }\n\n  function showToDoForm() {\n    let newToDoBtn = document.querySelector(\".add-to-do-btn\")\n    let projectDeleteBtn = document.querySelector(\".delete-project-btn\")\n    projectDeleteBtn.disabled = true;\n    newProjectBtn.disabled = true;\n    newToDoBtn.disabled = true;\n    let formContainer = document.createElement(\"div\");\n    formContainer.id = \"form-container\"\n\n    let form = document.createElement(\"div\");\n    form.id = \"project-form\";\n\n    let formHeader = document.createElement(\"h3\");\n    formHeader.appendChild(document.createTextNode(\"Create new To-Do\"));\n    \n    let todoTitle = document.createElement(\"input\")\n    todoTitle.type = (\"text\", \"text\");\n    todoTitle.id = \"todo-title\";\n\n    let todoDescrip = document.createElement(\"input\")\n    todoDescrip.type = (\"text\", \"text\");\n    todoDescrip.id = \"todo-descrip\";\n\n    let priorityContainer = document.createElement(\"div\");\n    priorityContainer.className = \"priority\";\n\n    let priorityLabel = document.createElement(\"label\");\n    priorityLabel.appendChild(document.createTextNode(\"Priority\"));\n    priorityContainer.appendChild(priorityLabel);\n\n    let priorityCheck = document.createElement('input');\n    priorityCheck.type = \"checkbox\";\n    priorityCheck.name = \"priority\";\n    priorityCheck.value = \"priority\";\n    priorityCheck.id = \"priority-check\";\n    priorityContainer.appendChild(priorityCheck);\n\n    let btnDiv = document.createElement(\"div\");\n\n    let updateBtn = document.createElement(\"button\");\n    updateBtn.id = \"todo-update-btn\";\n    updateBtn.appendChild(document.createTextNode(\"update\"));\n    btnDiv.appendChild(updateBtn);\n\n    let cancelBtn = document.createElement(\"button\");\n    cancelBtn.id = \"todo-cancel-btn\";\n    cancelBtn.appendChild(document.createTextNode(\"cancel\"));\n    btnDiv.appendChild(cancelBtn);\n\n    form.appendChild(formHeader);\n    form.appendChild(todoTitle);\n    form.appendChild(todoDescrip);\n    form.appendChild(priorityContainer);\n    form.appendChild(btnDiv);\n    formContainer.appendChild(form);\n    container.appendChild(formContainer);\n  }\n  \n  function removeToDoForm() {\n    let newToDoBtn = document.querySelector(\".add-to-do-btn\")\n    let projectDeleteBtn = document.querySelector(\".delete-project-btn\")\n    projectDeleteBtn.disabled = false;\n    newProjectBtn.disabled = false;\n    newToDoBtn.disabled = false;\n    container.removeChild(container.lastChild);\n  }\n\n  function displayToDoItems(project) {\n    let inProgressList = document.querySelector(\".in-progress-list\");\n    let completedList = document.querySelector(\".completed-list\");\n\n    if(project.container.length > 0) {\n      project.container.forEach(element => {\n        let itemExists = false;\n\n        for (let i = 0; i < inProgressList.childNodes.length; i ++){\n          if(inProgressList.childNodes[i].id == `toDo-${element.toDoId}`) {\n            itemExists = true;\n          }\n        }\n\n        for (let i = 0; i < completedList.childNodes.length; i ++){\n          if(completedList.childNodes[i].id == `toDo-${element.toDoId}`) {\n            itemExists = true;\n          }\n        }\n\n        if(itemExists) {\n          return; \n        }\n\n        let toDoContainer = document.createElement('li');\n        toDoContainer.id = `toDo-${element.toDoId}`\n  \n        let mainToDoContainer = document.createElement('div');\n        mainToDoContainer.className = \"main-to-do-container\"\n  \n        let completeCheckbox = document.createElement(\"input\");\n        completeCheckbox.type = \"checkbox\";\n        completeCheckbox.class = \"complete-checkbox\"\n        completeCheckbox.name = `complete-checkbox-${element.toDoId}`\n        mainToDoContainer.appendChild(completeCheckbox);\n  \n        let priorityIcon = document.createElement(\"h5\");\n        priorityIcon.className = \"priority-icon\"\n        if(element.priority) priorityIcon.appendChild(document.createTextNode(\"★\"));\n        else priorityIcon.appendChild(document.createTextNode(\"☆\"));\n        \n        mainToDoContainer.appendChild(priorityIcon);\n        \n        let toDoTitle = document.createElement(\"h3\");\n        toDoTitle.appendChild(document.createTextNode(element.title));\n        mainToDoContainer.appendChild(toDoTitle);\n\n        toDoContainer.appendChild(mainToDoContainer);\n  \n        if(element.completed) {\n          completeCheckbox.checked = true;\n          completedList.appendChild(toDoContainer);\n        } else {\n          inProgressList.appendChild(toDoContainer);\n        }\n      });\n    }\n  }\n\n  function moveToDoItem(id, isComplete) {\n    let toDoItem = document.getElementById(`toDo-${id}`);\n    let inProgressList = document.querySelector(\".in-progress-list\");\n    let completedList = document.querySelector(\".completed-list\");\n\n    if (isComplete) {\n      inProgressList.removeChild(toDoItem);\n      completedList.appendChild(toDoItem);\n    } else {\n      completedList.removeChild(toDoItem);\n      inProgressList.appendChild(toDoItem);\n    }\n  }\n\n  function extendToDoItem(toDoItem) {\n    let toDoContainer = document.getElementById(`toDo-${toDoItem.toDoId}`);\n\n    if(toDoContainer.lastChild.className == \"extended-to-do-container\") {\n      toDoContainer.removeChild(toDoContainer.lastChild);\n      return;\n    }\n\n    else {\n      let extendedToDoContainer = document.createElement('div');\n      extendedToDoContainer.className = \"extended-to-do-container\"\n\n      let todoDescription = document.createElement('h4');\n      todoDescription.appendChild(document.createTextNode(toDoItem.description));\n      extendedToDoContainer.appendChild(todoDescription);\n\n      let btnDiv = document.createElement('div');\n      btnDiv.className = \"to-do-extended-btns\";\n\n      let deleteBtn = document.createElement(\"button\");\n      deleteBtn.className = \"delete-to-do-btn\";\n      deleteBtn.id = `delete-todo-${toDoItem.toDoId}`;\n      deleteBtn.appendChild(document.createTextNode(\"🗑️\"));\n      btnDiv.appendChild(deleteBtn);\n      extendedToDoContainer.appendChild(btnDiv);\n\n      toDoContainer.appendChild(extendedToDoContainer);\n    }\n  }\n\n  function removeToDoItem(id) {\n    let toDoItem = document.getElementById(`toDo-${id}`);\n    let inProgressList = document.querySelector(\".in-progress-list\");\n    let completedList = document.querySelector(\".completed-list\");\n\n    var hasChild = inProgressList.querySelector(`toDo-${id}`) != null;\n    console.log(hasChild);\n  }\n\n  \n\n\n//# sourceURL=webpack:///./src/renderController.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\nlet toDoId = 0;\n\nclass ToDo {\n  \n  constructor(title, description, priority) {\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.toDoId = toDoId;\n    this.completed = false;\n    toDoId++;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });