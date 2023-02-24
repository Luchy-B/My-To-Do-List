import './style.css';

const taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

const createItem = (item = { task: item.value, index: taskArray.length, completed: false }) => {
  taskArray.push(item);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  window.location.reload();
};

const inputList = document.getElementById('input-List');
inputList.value = '';
inputList.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const item = document.querySelector('#input-List');
    createItem(item.value);
  }
});

function displayItems() {
  let tasks = '';
  for (let i = 0; i < taskArray.length; i += 1) {
    tasks += ` <div class="item" >
    <div class="input-Content">
        <input type="checkbox" class="complete" name="completed" />
        <span disabled>${taskArray[i]}</span>
    </div>`;
  }
  document.querySelector('#todo-Collections').innerHTML = tasks;
}

window.onload = displayItems();