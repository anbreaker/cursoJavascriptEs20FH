import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    // this.todos = [];
    this.loadLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);

    this.saveOnLocalStorage();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(id));

    this.saveOnLocalStorage();
  }

  toggleTodoComplete(id) {
    for (const todo of this.todos) {
      if (todo.id === Number(id)) {
        todo.completed = !todo.completed;

        this.saveOnLocalStorage();
        break;
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);

    this.saveOnLocalStorage();
  }

  saveOnLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  loadLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? (this.todos = JSON.parse(localStorage.getItem('todo')))
      : (this.todos = []);

    // To transform on class Todo (type)
    this.todos = this.todos.map(Todo.fromJson);
  }
}
