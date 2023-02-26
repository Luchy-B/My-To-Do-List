import './style.css';
import CreateList from './createList.js';

const input = document.getElementById('input-List');
const complete = document.getElementById('clear-Completed');
const todo = document.getElementById('todo-Collections');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value);
    input.value = '';
  }
});

complete.addEventListener('click', () => {
  todo.innerHTML = '';
  const get = JSON.parse(localStorage.getItem('text'));
  const filtered = get.filter((x) => x.isChecked !== true);

  if (filtered.length === 0) {
    localStorage.clear();
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
