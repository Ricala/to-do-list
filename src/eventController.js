import {Project} from './project'
import {showProjectForm, removeProjectForm} from './helper'
import{renderSideProjects} from './renderController'

function eventController(mainProject) {
  console.log("event working")
  console.log(mainProject);
  
  const newProjectListener = (() => {
    const newProjectBtn = document.getElementById("new-proj-btn");
    newProjectBtn.addEventListener('click', function(){projectForm()})
  })();

  function projectForm() {
    showProjectForm();
    let projUpdateBtn = document.getElementById('update-btn');
    let projCancelBtn = document.getElementById('cancel-btn');

    projUpdateBtn.addEventListener('click', function(){createProject()});
    projCancelBtn.addEventListener('click', function(){removeProjectForm()});
  }

  function createProject() {
    console.log("inside project create");
    const newProjTitle = document.getElementById('project-title');
    const newProjDescrip = document.getElementById('project-descrip');
    let newProj = new Project(newProjTitle, newProjDescrip);
    mainProject.push(newProj);
    renderSideProjects(mainProject);
  }
};

export {eventController}