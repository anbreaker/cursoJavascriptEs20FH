export class TodoList {
  constructor() {
    this.todos = [];
  }

  newTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(id));
  }

  toggleTodoComplete(id) {
    for (const todo of this.todos) {
      if (todo.id === Number(id)) {
        todo.completed = !todo.completed;

        break;
      }
    }
  }

  deleteCompleted() {
    //
  }
}
