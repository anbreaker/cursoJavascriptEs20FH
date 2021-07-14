import './css/styles.css';

import { Todo, TodoList } from './classes/index';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();
const todo1 = new Todo('learn Js');
const todo2 = new Todo('Ride a motorbike!');

todoList.newTodo(todo1);
todoList.newTodo(todo2);

console.log(todoList);

createTodoHtml(todo2);
