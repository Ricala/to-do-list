let toDoId = 0;

class ToDo {
  
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.toDoId = toDoId;
    this.completed = false;
    toDoId++;
  }
}


export {ToDo}