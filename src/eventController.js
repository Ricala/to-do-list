import {Project} from './project'
import * as render from './renderController'

function eventController(mainProject) {
  
  const newProjectListener = (() => {
    const newProjectBtn = document.getElementById("new-proj-btn");
    newProjectBtn.addEventListener('click', function(){showProjectForm()})
  })();

  const initialProjects = (() => {
    let project1 = new Project("Project one", "one This is a descript for a project one");
    let project2 = new Project("Project two", "two This is a descript for a project two");
    let project3 = new Project("Project three", "three This is a descript for a project three");

    mainProject.push(project1);
    mainProject.push(project2);
    mainProject.push(project3);

    attachProjectListener(project1);
    attachProjectListener(project2);
    attachProjectListener(project3);
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
    const newProjDescrip = document.getElementById('project-descrip').value;

    if(newProjTitle == "") {
      alert("Please enter a project title")
    } else if (newProjDescrip == "") {
      alert("Please enter a project description")
    } else {
      let newProj = new Project(newProjTitle, newProjDescrip);
      mainProject.push(newProj);

      render.removeProjectForm();
      attachProjectListener(newProj);
    }
  }

  function attachProjectListener(project) {
    let projectItem = render.addProjectList(project);
    projectItem.addEventListener('click', function(){
      render.displayFullProject(project);
      attachDeleteBtn();
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
  }

};

export {eventController}