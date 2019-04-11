import {showProjectForm} from './helper'


class Project {
  
  constructor(title, description) {
    console.log("project setup");
    this.title = title;
    this.description = description;
    this.container = [];
  }
}


export {Project}