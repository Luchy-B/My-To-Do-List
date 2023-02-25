import './style.css';
import CreateList from './createList.js';
import { collection, count } from './export.js';

const input = document.getElementById('input-List');
const todo = document.getElementById('todo-Collections');

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value)
    input.value = ''
  }
})

const reload = () => { 
  let collected = JSON.parse(localStorage.getItem('text'))
  collected.forEach(item => {
      new CreateList().create(item.text, item.isChecked)
 })
}

const complete = document.getElementById('clear-Completed');

complete.addEventListener('click', () => {
  todo.innerHTML = ''
  count = 0;
  collection = []
  let get = JSON.parse(localStorage.getItem('text'));

  let filtered = get.filter(x=> !x.isChecked);
  filtered.forEach(element => {
    new CreateList().create(element.text, element.isChecked)
  });
  
})

window.onload = reload