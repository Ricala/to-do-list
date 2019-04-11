import {showProjectForm} from './helper'
let projectId = 0;

class Project {
  
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.container = [];
    this.projectId = projectId;
    projectId++;
  }
}


export {Project}