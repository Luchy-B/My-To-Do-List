import './style.css';
import CreateList from './createList.js';

const input = document.getElementById('input-List');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value);
    input.value = '';
  }
});

const reload = () => {
  const collected = JSON.parse(localStorage.getItem('text'));
  collected.forEach((item) => {
    new CreateList().create(item.text);
  });
};

const taskArray = JSON.parse(localStorage.getItem('text'));
const clearCompleted = document.querySelector('#clear-Completed');
clearCompleted.addEventListener('click', () => {
  const checks = document.querySelectorAll('input[type=checkbox]');
  const indexesToDelete = [];
  checks.forEach((checkbox, i) => {
    if (checkbox.checked) {
      indexesToDelete.push(i);
    }
  });
  const filteredItemsArray = taskArray.filter((i) => !indexesToDelete.includes(i));
  localStorage.setItem('items', JSON.stringify(filteredItemsArray));
  window.location.reload();
});

window.onload = reload;
