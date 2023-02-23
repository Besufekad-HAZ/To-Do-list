import './style.css';
import {
  removecompleted,
  removeAll,
  AllTask,
  taskEdit,
  taskRemove,
} from './tasks-list.js';
import { mousedown, dragDrop } from './tasks-move.js';
import { checking, listchekedstat } from './tasks-check.js';

const form = document.getElementById('form');
const addTask = document.querySelector('.all-tasks');
const refresh = document.querySelector('.icon__refresh');
const iconEnter = document.querySelector('.icon_enter');
const clearFinished = document.getElementById('clear');
const list = [];
let listDisplay;

const todoList = (array) => {
  array.forEach((tsk) => {
    const toDo = document.getElementById('toDo');

    toDo
      .appendChild(document.createElement('li'))
      .setAttribute('id', tsk.index);
    const task = document.getElementById(tsk.index);
    task.classList.add('task', 'draggable');

    task
      .appendChild(document.createElement('input'))
      .setAttribute('id', `${tsk.index}-checkbox`);
    const checkbox = document.getElementById(`${tsk.index}-checkbox`);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    task
      .appendChild(document.createElement('p'))
      .setAttribute('id', `${tsk.index}-description`);
    const description = document.getElementById(`${tsk.index}-description`);
    description.classList.add('description');
    description.innerText = tsk.description;

    task
      .appendChild(document.createElement('i'))
      .setAttribute('id', `${tsk.index}-drag`);
    const dragBtn = document.getElementById(`${tsk.index}-drag`);
    dragBtn.classList.add('fas', 'fa-ellipsis-v', 'move_button');

    task
      .appendChild(document.createElement('i'))
      .setAttribute('id', `${tsk.index}-trash`);
    const trashBtn = document.getElementById(`${tsk.index}-trash`);
    trashBtn.classList.add('far', 'fa-trash-alt', 'btn-delete');
    mousedown(dragBtn);
  });

  dragDrop(array);
  checking(array);
  listchekedstat(array);
  taskEdit(array);
  taskRemove(array);
};

const retrieve = () => {
  if (JSON.parse(localStorage.getItem('to-do-list'))) {
    listDisplay = JSON.parse(localStorage.getItem('to-do-list'));
    todoList(listDisplay);
  } else {
    listDisplay = list;
    todoList(listDisplay);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (addTask.value !== '') {
    const allTasks = new AllTask(addTask.value);
    allTasks.push(listDisplay);
  }
});

iconEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (addTask.value !== '') {
    const allTasks = new AllTask(addTask.value);
    allTasks.push(listDisplay);
  }
});

clearFinished.addEventListener('click', (event) => {
  event.preventDefault();
  removecompleted(listDisplay);
});

refresh.addEventListener('click', (event) => {
  event.preventDefault();
  removeAll(listDisplay);
});

document.addEventListener('load', retrieve());
