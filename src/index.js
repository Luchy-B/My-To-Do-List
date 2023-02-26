import './style.css';
import CreateList from './createList.js';
import { collection, count } from "./export.js";

const input = document.getElementById('input-List');
let complete = document.getElementById("clearCompleted");
let todo = document.getElementById('todo-Collections');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value);
    input.value = '';
  }
});

complete.addEventListener("click", () => {
  todo.innerHTML = ''
  let get = JSON.parse(localStorage.getItem('text'));
  collection = [];
  let filtered = get.filter(x=> x.isChecked !== true)
  count = 0;
  if(filtered.length === 0) {
    localStorage.clear()
  }
  filtered.forEach((item) => {
    new CreateList().create(item.text, item.isChecked);
  });
});

const reload = () => {
  const collected = JSON.parse(localStorage.getItem('text'));
  collected.forEach((item) => {
    new CreateList().create(item.text);
  });
};

window.onload = reload;
