import {Project} from './project'
import {ToDo} from './todo'
import * as render from './renderController'

function eventController(mainProject) {

  const btnSliderListener = (() => {
    let showBar = false;
    const btnSlider = document.getElementById("slider");
    btnSlider.addEventListener('click', function(){
      render.showProjectBar(showBar)
      showBar = !showBar;
    });
  })();

  
  const newProjectListener = (() => {
    const newProjectBtn = document.getElementById("new-proj-btn");
    newProjectBtn.addEventListener('click', function(){showProjectForm()})
  })();

  const initialProjects = (() => {
    let project1 = new Project("Project one");
    let project2 = new Project("Project two");
    let project3 = new Project("Project three");

    let todo1 = new ToDo("First to do item", "todo description text text text one one", false);
    let todo2 = new ToDo("First to do item", "todo description text text text two two", false);
    let todo3 = new ToDo("First to do item", "todo description text text text three three", true);

    

    project1.container.push(todo1);
    project1.container.push(todo2);
    project1.container.push(todo3);

    project2.container.push(todo1);
    project2.container.push(todo2);
    project2.container.push(todo3);

    project3.container.push(todo1);
    project3.container.push(todo2);
    project3.container.push(todo3);

    mainProject.push(project1);
    mainProject.push(project2);
    mainProject.push(project3);

    attachProjectListener(project1);
    attachProjectListener(project2);
    attachProjectListener(project3);
    //render.displayToDoItems(project1);
  })();

  function showProjectForm() {
    render.showProjectForm();
    let projUpdateBtn = document.getElementById('update-btn');
    let projCancelBtn = document.getElementById('cancel-btn');

    projUpdateBtn.addEventListener('click', function(){createProject()});
    projCancelBtn.addEventListener('click', function(){render.removeProjectForm()});
  }

  function createProject() {
    const newProjTitle = document.getElementById('project-title').value;

    if(newProjTitle == "") {
      alert("Please enter a project title")
    } else {
      let newProj = new Project(newProjTitle);
      mainProject.push(newProj);

      render.removeProjectForm();
      attachProjectListener(newProj);
    }
  }

  function attachProjectListener(project) {
    let projectItem = render.addProjectList(project);
    projectItem.addEventListener('click', function(){
      render.displayFullProject(project);
      render.displayToDoItems(project);
      attachToDoListeners(project);
      attachDeleteBtn();
      attachToDoBtn();
    });

    function attachDeleteBtn() {
      let deleteBtn = document.querySelector(".delete-project-btn");
      deleteBtn.addEventListener('click', function() {
        let result = confirm(`Delete Project "${project.title}"?`);
        if(result) {
          render.removeProject(project);
          mainProject.splice(project.projectId, 1);
        }
      })
    }

    function attachToDoBtn() {
      let todoBtn = document.querySelector(".add-to-do-btn");
      todoBtn.addEventListener('click', function(){toDoForm(project)})
    }
  }

  function toDoForm(project) {
    render.showToDoForm();
    let todoUpdateBtn = document.getElementById('todo-update-btn');
    let todoCancelBtn = document.getElementById('todo-cancel-btn');

    todoUpdateBtn.addEventListener('click', function(){createToDo(project)});
    todoCancelBtn.addEventListener('click', function(){render.removeToDoForm()});
  }

  function createToDo(project) {
    let toDoTitle = document.getElementById("todo-title").value;
    let toDoDescrip = document.getElementById("todo-descrip").value;
    let priority = document.getElementById("priority-check").checked;
    
    if(toDoTitle == ""){
      alert("Please enter a title")
    } else if (toDoDescrip == "") {
      alert("Please enter a description")
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

  function toDoListener (project, element) {
    let toDoContainer = document.getElementById(`toDo-${element.toDoId}`);
      let isExtended = false;
      toDoContainer.addEventListener('click', function() {
        render.extendToDoItem(element);
        if(!isExtended){
          deleteBtnListener();
        }
        isExtended = !isExtended;
      })
  
      let completedCheckBox = document.querySelector(`input[name=complete-checkbox-${element.toDoId}]`);
      
      completedCheckBox.addEventListener('change', function() {
        if(this.checked) {
          render.moveToDoItem(element.toDoId, true);
        } else {
          render.moveToDoItem(element.toDoId, false);
        }
        if(isExtended) {
          render.extendToDoItem(element);
          isExtended = false;
        }
      })
  
      function deleteBtnListener() {
        let deleteBtn = document.getElementById(`delete-todo-${element.toDoId}`);
        deleteBtn.addEventListener('click', function() {
          project.container.splice(element.toDoId, 1);
          render.removeToDoItem(element.toDoId);
        })
  
      }
  }
};



export {eventController}