import { Todo } from '../classes';

import { todoList } from '../index';

// HTML References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
        <label>${todo.task}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Events
txtInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 2) {
    const newTask = new Todo(txtInput.value);

    todoList.newTodo(newTask);

    console.log(todoList);
    txtInput.value = '';
  }
});