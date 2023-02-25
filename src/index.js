import './style.css';

const taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const inputList = document.getElementById('input-List');

const createItem = (item = {
  task: inputList.value,
  index: taskArray.length,
  completed: false,
}) => {
  taskArray.push(item);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  window.location.reload();
};

inputList.value = '';
inputList.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createItem(inputList.value);
  }
});

// Delete button
function deleteItem(i) {
  taskArray.splice(i, 1);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  window.location.reload();
}
function actRemove() {
  const removeBtn = document.querySelectorAll('.remove-Btn');
  removeBtn.forEach((db, i) => {
    db.addEventListener('click', () => { deleteItem(i); });
  });
}

function checkBox() {
  const checks = document.querySelectorAll('input[type=checkbox]');
  const inputs = document.querySelectorAll('.strike');
  checks.forEach((ck, i) => {
    ck.addEventListener('change', () => {
      if (checks[i].checked) {
        inputs[i].style.textDecoration = 'line-through';
        inputs[i].style.color = 'grey';
      } else {
        inputs[i].style.textDecoration = 'none';
        inputs[i].style.color = 'black';
      }
    });
  });
}

function displayItems() {
  let tasks = '';
  for (let i = 0; i < taskArray.length; i += 1) {
    tasks += ` <div class="item" >
    <div class = 'task-Container'>
        <input type="checkbox" class="complete stylingInput" name="completed" />
        <input class="stylingInput strike" type="text" placeholder="${taskArray[i]}"/>
        <div class='edit-Btn'>
          <div class='editBtn1'></div>
          <div class='editBtn1'></div>
          <div class='editBtn1'></div>
        </div>
    </div>
   

    <span class="edit-controller">
      <span class="remove-Btn">Delete</span>
    </span>
  </div>`;
  }
  document.querySelector('#todo-Collections').innerHTML = tasks;
  actRemove();
  checkBox();
}

document.querySelector('#add-Btn').addEventListener('click', () => {
  createItem(inputList.value);
});

window.onload = displayItems();