const container = document.querySelector('#container');
const newProjectBtn = document.getElementById("new-proj-btn");
const projectList = document.getElementById("project-list");
const displayContaniner = document.getElementById("display-container")

  export default function showProjectForm() {
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

    displayContaniner.appendChild(projectContainer);
  }

  function removeProject(project) {
    while(displayContaniner.firstChild){
      displayContaniner.removeChild(displayContaniner.firstChild);
    }

    document.getElementById(`list-item-${project.projectId}`).remove();
  }

  function showToDoForm() {
    newProjectBtn.disabled = true;
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

  export {
    showProjectForm,
    removeProjectForm,
    addProjectList,
    displayFullProject,
    removeProject,
    showToDoForm
  }
