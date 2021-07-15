export class Todo {
  //To create instaces of Todo from localStorage
  static fromJson({ task, id, completed, created }) {
    const tempTodo = new Todo(task);

    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.created = created;

    return tempTodo;
  }

  constructor(task) {
    this.task = task;
    this.id = new Date().getTime(); //to create "id"
    this.completed = false;
    this.created = new Date();
  }
}
