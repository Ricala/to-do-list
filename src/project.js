let projectId = 0;

class Project {
  constructor(title) {
    this.title = title;
    this.container = [];
    this.projectId = projectId;
    projectId++;
  }
}

export { Project };
