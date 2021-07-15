import { Todo } from '../classes';

import { todoList } from '../index';

// HTML References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDelete = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtros');

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
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const newTask = new Todo(txtInput.value);

    todoList.newTodo(newTask);

    createTodoHtml(newTask);
    console.log(todoList);

    txtInput.value = '';
  }
});

divTodoList.addEventListener('click', (event) => {
  const element = event.target.localName; //input, label, button.

  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute('data-id');
  console.log(todoId);

  if (element.includes('input')) {
    todoList.toggleTodoComplete(todoId);

    todoElement.classList.toggle('completed');
  } else if (element.includes('button')) {
    todoList.deleteTodo(todoId);

    divTodoList.removeChild(todoElement);
  }

  // TODO delete console.log
  console.log(todoList);
});

btnDelete.addEventListener('click', (event) => {
  todoList.deleteCompleted();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const element = divTodoList.children[i];

    if (element.classList.contains('completed')) divTodoList.removeChild(element);
  }
});

ulFilters.addEventListener('click', (event) => {
  const filter = event.target.text;

  if (!filter) return;

  anchorFilters.forEach((elem) => elem.classList.remove('selected'));

  console.log(event.target);

  for (const element of divTodoList.children) {
    element.classList.remove('hidden');

    const completed = element.classList.contains('completed');

    switch (filter) {
      case 'Pendientes':
        if (completed) element.classList.add('hidden');
        break;

      case 'Completados':
        if (!completed) element.classList.add('hidden');
        break;
    }
  }
});
