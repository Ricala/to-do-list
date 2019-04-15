import { Project } from "./project";
import { ToDo } from "./todo";
import * as render from "./renderController";

function eventController(mainProject) {
  // eslint-disable-next-line no-unused-vars
  const btnSliderListener = (() => {
    const btnSlider = document.getElementById("slider");
    let showBar = false;

    btnSlider.addEventListener("click", function() {
      render.showProjectBar(showBar);
      showBar = !showBar;
    });
  })();

  // eslint-disable-next-line no-unused-vars
  const newProjectListener = (() => {
    const newProjectBtn = document.getElementById("new-proj-btn");
    newProjectBtn.addEventListener("click", function() {
      showProjectForm();
    });
  })();

  // eslint-disable-next-line no-unused-vars
  const initialProjects = (() => {
    let project1 = new Project("Default Project: Click Me");

    let todo1 = new ToDo(
      "Welcome to your To-Do List *CLICK ME*",
      "This extends your item to show a description!",
      false
    );
    let todo2 = new ToDo(
      'Add a new To-Do item by pressing the green "+" above',
      "",
      false
    );
    let todo3 = new ToDo(
      "Remove To-Do item by pressing the trash can in the description",
      "->> That way ->>",
      false
    );
    let todo4 = new ToDo(
      "To the left you can see your priority star",
      "☆ is standard and ★ is priority",
      true
    );
    let todo5 = new ToDo(
      "Select the check box to complete your task",
      'Select it again to move back to "In Progress"',
      false
    );
    let todo6 = new ToDo(
      "Create a new Project by selecting the green + found under Projects",
      "",
      false
    );
    let todo7 = new ToDo(
      "Remove a project by selecting the red trash can in the top right",
      "Don't worry you'll be asked to confirm first",
      false
    );
    let todo8 = new ToDo(
      "Enjoy your new To-Do List!",
      "Created by Eric Szywala @github/ricala",
      true
    );

    project1.container.push(todo1);
    project1.container.push(todo2);
    project1.container.push(todo3);
    project1.container.push(todo4);
    project1.container.push(todo5);
    project1.container.push(todo6);
    project1.container.push(todo7);
    project1.container.push(todo8);

    mainProject.push(project1);
    attachProjectListener(project1);
  })();

  function showProjectForm() {
    render.showProjectForm();
    let projUpdateBtn = document.getElementById("update-btn");
    let projCancelBtn = document.getElementById("cancel-btn");

    projUpdateBtn.addEventListener("click", function() {
      createProject();
    });
    projCancelBtn.addEventListener("click", function() {
      render.removeProjectForm();
    });
  }

  function createProject() {
    const newProjTitle = document.getElementById("project-title").value;

    if (newProjTitle == "") {
      alert("Please enter a project title");
    } else {
      let newProj = new Project(newProjTitle);
      mainProject.push(newProj);

      render.removeProjectForm();
      attachProjectListener(newProj);
    }
  }

  function attachProjectListener(project) {
    let projectItem = render.addProjectList(project);
    projectItem.addEventListener("click", function() {
      render.displayFullProject(project);
      render.displayToDoItems(project);
      attachToDoListeners(project);
      attachDeleteBtn();
      attachToDoBtn();
    });

    function attachDeleteBtn() {
      let deleteBtn = document.querySelector(".delete-project-btn");
      deleteBtn.addEventListener("click", function() {
        let result = confirm(`Delete Project "${project.title}"?`);
        if (result) {
          render.removeProject(project);
          mainProject.splice(project.projectId, 1);
        }
      });
    }

    function attachToDoBtn() {
      let todoBtn = document.querySelector(".add-to-do-btn");
      todoBtn.addEventListener("click", function() {
        toDoForm(project);
      });
    }
  }

  function toDoForm(project) {
    render.showToDoForm();
    let todoUpdateBtn = document.getElementById("todo-update-btn");
    let todoCancelBtn = document.getElementById("todo-cancel-btn");

    todoUpdateBtn.addEventListener("click", function() {
      createToDo(project);
    });
    todoCancelBtn.addEventListener("click", function() {
      render.removeToDoForm();
    });
  }

  function createToDo(project) {
    let toDoTitle = document.getElementById("todo-title").value;
    let toDoDescrip = document.getElementById("todo-descrip").value;
    let priority = document.getElementById("priority-check").checked;

    if (toDoTitle == "") {
      alert("Please enter a title");
    } else if (toDoDescrip == "") {
      alert("Please enter a description");
    } else {
      let newToDo = new ToDo(toDoTitle, toDoDescrip, priority);
      project.container.push(newToDo);
      render.displayToDoItems(project);
      render.removeToDoForm();
      attachSingleToDoListener(project, newToDo);
    }
  }

  function attachToDoListeners(project) {
    project.container.forEach(element => {
      toDoListener(project, element);
    });
  }

  function attachSingleToDoListener(project, newToDo) {
    toDoListener(project, newToDo);
  }

  function toDoListener(project, element) {
    let toDoContainer = document.getElementById(`toDo-${element.toDoId}`);
    let isExtended = false;
    toDoContainer.addEventListener("click", function() {
      render.extendToDoItem(element);
      if (!isExtended) {
        deleteBtnListener();
      }
      isExtended = !isExtended;
    });

    let completedCheckBox = document.querySelector(
      `input[name=complete-checkbox-${element.toDoId}]`
    );

    completedCheckBox.addEventListener("change", function() {
      if (this.checked) {
        render.moveToDoItem(element.toDoId, true);
        element.completed = true;
      } else {
        render.moveToDoItem(element.toDoId, false);
        element.completed = false;
      }
      if (isExtended) {
        render.extendToDoItem(element);
        isExtended = false;
      }
    });

    function deleteBtnListener() {
      let deleteBtn = document.getElementById(`delete-todo-${element.toDoId}`);
      deleteBtn.addEventListener("click", function() {
        project.container.splice(element.toDoId, 1);
        render.removeToDoItem(element);
      });
    }
  }
}

export { eventController };
