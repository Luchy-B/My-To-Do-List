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

window.onload = reload;
