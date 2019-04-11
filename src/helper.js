const container = document.querySelector('#container');
const newProjectBtn = document.getElementById("new-proj-btn");

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



export {showProjectForm, removeProjectForm}