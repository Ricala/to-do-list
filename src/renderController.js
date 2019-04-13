const container = document.querySelector('#container');
const newProjectBtn = document.getElementById("new-proj-btn");
const projectList = document.getElementById("project-list");
const displayContaniner = document.getElementById("display-container")

  function showProjectBar(showBar) {
    const projectContainer = document.getElementById("project-container");
    const displayContainer = document.getElementById("display-container");
    const slider = document.getElementById("slider");
    console.log("trying to switch menu")

    if (showBar) {
      projectContainer.style.display = "block";
      projectContainer.style.gridColumn = `1 / 3`;
      displayContainer.style.gridColumn = `-2 / -1`;
      slider.style.gridColumn = `3 / 4`;
      slider.style.transform = "all 5s";
      slider.style.transition = "all 5s";
    } else {
      projectContainer.style.display = "none";
      displayContainer.style.gridColumn = `2 / -1`;
      slider.style.gridColumn = `1 / 2`;

      slider.style.transform = "all 5s";
      slider.style.transition = "all 5s";
    }
  }



  function showProjectForm() {
    newProjectBtn.disabled = true;
    let formContainer = document.createElement("div");
    formContainer.id = "form-container"

    let form = document.createElement("div");
    form.id = "project-form";

    let formHeader = document.createElement("h3");
    formHeader.appendChild(document.createTextNode("Create new project"));
    
    let projectTitle = document.createElement("input")
    projectTitle.type = ("text", "text");
    projectTitle.id = "project-title";

    let projectDescrip = document.createElement("input")
    projectDescrip.type = ("text", "text");
    projectDescrip.id = "project-descrip";

    let btnDiv = document.createElement("div");

    let updateBtn = document.createElement("button");
    updateBtn.id = "update-btn";
    updateBtn.appendChild(document.createTextNode("update"));
    btnDiv.appendChild(updateBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-btn";
    cancelBtn.appendChild(document.createTextNode("cancel"));
    btnDiv.appendChild(cancelBtn);

    form.appendChild(formHeader);
    form.appendChild(projectTitle);
    form.appendChild(projectDescrip);
    form.appendChild(btnDiv);
    formContainer.appendChild(form);
    container.appendChild(formContainer);
  }

  function removeProjectForm(){
    container.removeChild(container.lastChild);
    newProjectBtn.disabled = false;
  }

  function addProjectList(project){
    let itemContainer = document.createElement("div");
    itemContainer.id = `list-item-${project.projectId}`;
    let listItem = document.createElement("h3");
    listItem.appendChild(document.createTextNode(project.title));
    itemContainer.appendChild(listItem);
    projectList.appendChild(itemContainer);

    return itemContainer;
  }

  function displayFullProject(project) {

    while(displayContaniner.firstChild){
      displayContaniner.removeChild(displayContaniner.firstChild);
    }
    
    let projectContainer = document.createElement("div");
    projectContainer.className = "project-display";

    let projectTitle = document.createElement("h2");
    projectTitle.appendChild(document.createTextNode(project.title));
    projectContainer.appendChild(projectTitle);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.className = "display-description"

    let projectDescrip = document.createElement("h3");
    projectDescrip.appendChild(document.createTextNode(project.description));
    descriptionDiv.appendChild(projectDescrip);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-project-btn";
    deleteBtn.appendChild(document.createTextNode("delete"));
    descriptionDiv.appendChild(deleteBtn);

    projectContainer.appendChild(descriptionDiv);
    
    let addToDoBtn = document.createElement("button");
    addToDoBtn.className = "add-to-do-btn"
    addToDoBtn.appendChild(document.createTextNode("+"));

    projectContainer.appendChild(addToDoBtn);

    let listContainer = document.createElement("div");
    listContainer.className = "list-container"

    let inProgressContainer = document.createElement("div")
    inProgressContainer.className = "in-progress-container"
    
    let progressHeader = document.createElement("h3");
    progressHeader.appendChild(document.createTextNode("In Progress"))
    inProgressContainer.appendChild(progressHeader);

    let inProgressList = document.createElement("ul");
    inProgressList.className = "in-progress-list"
    inProgressContainer.appendChild(inProgressList);

    listContainer.appendChild(inProgressContainer);

    let completedContainer = document.createElement("div")
    completedContainer.className = "completed-container"
    
    let completedHeader = document.createElement("h3");
    completedHeader.appendChild(document.createTextNode("Completed"))
    completedContainer.appendChild(completedHeader);

    let completedList = document.createElement("ul");
    completedList.className = "completed-list"
    completedContainer.appendChild(completedList);

    listContainer.appendChild(completedContainer);

    projectContainer.appendChild(listContainer);

    displayContaniner.appendChild(projectContainer);
  }

  function removeProject(project) {
    while(displayContaniner.firstChild){
      displayContaniner.removeChild(displayContaniner.firstChild);
    }

    document.getElementById(`list-item-${project.projectId}`).remove();
  }

  function showToDoForm() {
    let newToDoBtn = document.querySelector(".add-to-do-btn")
    let projectDeleteBtn = document.querySelector(".delete-project-btn")
    projectDeleteBtn.disabled = true;
    newProjectBtn.disabled = true;
    newToDoBtn.disabled = true;
    let formContainer = document.createElement("div");
    formContainer.id = "form-container"

    let form = document.createElement("div");
    form.id = "project-form";

    let formHeader = document.createElement("h3");
    formHeader.appendChild(document.createTextNode("Create new To-Do"));
    
    let todoTitle = document.createElement("input")
    todoTitle.type = ("text", "text");
    todoTitle.id = "todo-title";

    let todoDescrip = document.createElement("input")
    todoDescrip.type = ("text", "text");
    todoDescrip.id = "todo-descrip";

    let priorityContainer = document.createElement("div");
    priorityContainer.className = "priority";

    let priorityLabel = document.createElement("label");
    priorityLabel.appendChild(document.createTextNode("Priority"));
    priorityContainer.appendChild(priorityLabel);

    let priorityCheck = document.createElement('input');
    priorityCheck.type = "checkbox";
    priorityCheck.name = "priority";
    priorityCheck.value = "priority";
    priorityCheck.id = "priority-check";
    priorityContainer.appendChild(priorityCheck);

    let btnDiv = document.createElement("div");

    let updateBtn = document.createElement("button");
    updateBtn.id = "todo-update-btn";
    updateBtn.appendChild(document.createTextNode("update"));
    btnDiv.appendChild(updateBtn);

    let cancelBtn = document.createElement("button");
    cancelBtn.id = "todo-cancel-btn";
    cancelBtn.appendChild(document.createTextNode("cancel"));
    btnDiv.appendChild(cancelBtn);

    form.appendChild(formHeader);
    form.appendChild(todoTitle);
    form.appendChild(todoDescrip);
    form.appendChild(priorityContainer);
    form.appendChild(btnDiv);
    formContainer.appendChild(form);
    container.appendChild(formContainer);
  }
  
  function removeToDoForm() {
    let newToDoBtn = document.querySelector(".add-to-do-btn")
    let projectDeleteBtn = document.querySelector(".delete-project-btn")
    projectDeleteBtn.disabled = false;
    newProjectBtn.disabled = false;
    newToDoBtn.disabled = false;
    container.removeChild(container.lastChild);
  }

  function displayToDoItems(project) {
    let inProgressList = document.querySelector(".in-progress-list");
    let completedList = document.querySelector(".completed-list");

    if(project.container.length > 0) {
      project.container.forEach(element => {
        let itemExists = false;

        for (let i = 0; i < inProgressList.childNodes.length; i ++){
          if(inProgressList.childNodes[i].id == `toDo-${element.toDoId}`) {
            itemExists = true;
          }
        }

        for (let i = 0; i < completedList.childNodes.length; i ++){
          if(completedList.childNodes[i].id == `toDo-${element.toDoId}`) {
            itemExists = true;
          }
        }

        if(itemExists) {
          return; 
        }

        let toDoContainer = document.createElement('li');
        toDoContainer.id = `toDo-${element.toDoId}`
  
        let mainToDoContainer = document.createElement('div');
        mainToDoContainer.className = "main-to-do-container"
  
        let completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.class = "complete-checkbox"
        completeCheckbox.name = `complete-checkbox-${element.toDoId}`
        mainToDoContainer.appendChild(completeCheckbox);
  
        let priorityIcon = document.createElement("h5");
        priorityIcon.className = "priority-icon"
        if(element.priority) priorityIcon.appendChild(document.createTextNode("★"));
        else priorityIcon.appendChild(document.createTextNode("☆"));
        
        mainToDoContainer.appendChild(priorityIcon);
        
        let toDoTitle = document.createElement("h3");
        toDoTitle.appendChild(document.createTextNode(element.title));
        mainToDoContainer.appendChild(toDoTitle);

        toDoContainer.appendChild(mainToDoContainer);
  
        if(element.completed) {
          completeCheckbox.checked = true;
          completedList.appendChild(toDoContainer);
        } else {
          inProgressList.appendChild(toDoContainer);
        }
      });
    }
  }

  function moveToDoItem(id, isComplete) {
    let toDoItem = document.getElementById(`toDo-${id}`);
    let inProgressList = document.querySelector(".in-progress-list");
    let completedList = document.querySelector(".completed-list");

    if (isComplete) {
      inProgressList.removeChild(toDoItem);
      completedList.appendChild(toDoItem);
    } else {
      completedList.removeChild(toDoItem);
      inProgressList.appendChild(toDoItem);
    }
  }

  function extendToDoItem(toDoItem) {
    let toDoContainer = document.getElementById(`toDo-${toDoItem.toDoId}`);

    if(toDoContainer.lastChild.className == "extended-to-do-container") {
      toDoContainer.removeChild(toDoContainer.lastChild);
      return;
    }

    else {
      let extendedToDoContainer = document.createElement('div');
      extendedToDoContainer.className = "extended-to-do-container"

      let todoDescription = document.createElement('h4');
      todoDescription.appendChild(document.createTextNode(toDoItem.description));
      extendedToDoContainer.appendChild(todoDescription);

      let btnDiv = document.createElement('div');
      btnDiv.className = "to-do-extended-btns";

      let deleteBtn = document.createElement("button");
      deleteBtn.id = "delete-to-do-btn";
      deleteBtn.appendChild(document.createTextNode("Delete"));
      btnDiv.appendChild(deleteBtn);
      extendedToDoContainer.appendChild(btnDiv);

      toDoContainer.appendChild(extendedToDoContainer);
    }
  }

  export {
    showProjectBar,
    showProjectForm,
    removeProjectForm,
    addProjectList,
    displayFullProject,
    removeProject,
    showToDoForm,
    removeToDoForm,
    displayToDoItems,
    moveToDoItem,
    extendToDoItem
  }
