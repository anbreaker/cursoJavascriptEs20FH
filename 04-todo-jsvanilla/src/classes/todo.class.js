export class Todo {
  constructor(task) {
    this.task = task;

    this.id = new Date().getTime(); //to create "id"
    this.completed = false;
    this.created = new Date();
  }
}
