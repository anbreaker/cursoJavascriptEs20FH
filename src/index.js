import './css/styles.css';

import { Todo, TodoList } from './classes/index';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

// const todo1 = new Todo('learn Js');

// todoList.newTodo(todo1);

// createTodoHtml(todo1);

console.log(todoList);

todoList.todos.forEach(createTodoHtml);
