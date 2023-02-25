import './style.css';
import CreateList from './createList.js';
import { collection } from './exports.js';

const input = document.getElementById('input-List');

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value)
    input.value = ''
  }
})

const reload = () => { 
  let collected = JSON.parse(localStorage.getItem('text'))
  collected.forEach(item => {
      new CreateList().create(item.text)
 })
}

window.onload = reload

// const taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
// const inputList = document.getElementById('input-List');

// const createItem = (item = {
//   task: inputList.value,
//   index: taskArray.length,
//   completed: false,
// }) => {
//   taskArray.push(item);
//   localStorage.setItem('tasks', JSON.stringify(taskArray));
//   window.location.reload();
// };

// inputList.value = '';
// inputList.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     createItem(inputList.value);
//   }
// });

// // Delete button
// function deleteItem(i) {
//   taskArray.splice(i, 1);
//   localStorage.setItem('tasks', JSON.stringify(taskArray));
//   window.location.reload();
// }
// function actRemove() {
//   const removeBtn = document.querySelectorAll('.remove-Btn');
//   removeBtn.forEach((db, i) => {
//     db.addEventListener('click', () => { deleteItem(i); });
//   });
// }

// function checkBox() {
//   const checks = document.querySelectorAll('input[type=checkbox]');
//   const inputs = document.querySelectorAll('.strike');
//   checks.forEach((ck, i) => {
//     ck.addEventListener('change', () => {
//       if (checks[i].checked) {
//         inputs[i].style.textDecoration = 'line-through';
//         inputs[i].style.color = 'grey';
//         inputs[i].style.backgroundColor = 'beige';
//       } else {
//         inputs[i].style.textDecoration = 'none';
//         inputs[i].style.color = 'black';
//       }
//     });
//   });
// }

// function activateCancel() {
//   const cancelBtn = document.querySelectorAll('.cancel-Btn');
//   const editBtn = document.querySelectorAll('.edit-Btn');
//   const inputs = document.querySelector('.strike');
//   cancelBtn.forEach((cb, i) => {
//     cb.addEventListener('click', () => {
//       editBtn[i].style.display = 'block';
//       inputs[i].disabled = true;
//       window.location.reload();
//     });
//   });
// }

// const clearCompleted = document.querySelector('#clear-Completed');
// clearCompleted.addEventListener('click', () => {
//   const checks = document.querySelectorAll('input[type=checkbox]');
//   const indexesToDelete = [];
//   checks.forEach((checkbox, i) => {
//     if (checkbox.checked) {
//       indexesToDelete.push(i);
//     }
//   });
//   const filteredItemsArray = taskArray.filter((item, i) => !indexesToDelete.includes(i));
//   localStorage.setItem('items', JSON.stringify(filteredItemsArray));
//   window.location.reload();
// });

// function activateEdit() {
//   const editBtn = document.querySelectorAll('.edit-Btn');
//   const editController = document.querySelectorAll('.edit-controller');
//   const inputs = document.querySelectorAll('.strike');
//   editBtn.forEach((eb, i) => {
//     eb.addEventListener('click', () => {
//       editController[i].style.display = 'flex';
//       editBtn[i].style.display = 'none';
//       inputs[i].disabled = false;
//     });
//   });
// }

// function displayItems() {
//   let tasks = '';
//   for (let i = 0; i < taskArray.length; i += 1) {
//     tasks += ` <div class="item" >
//     <div class = 'task-Container'>
//         <input type="checkbox" class="complete stylingInput" name="completed" />
//         <input disabled class="stylingInput strike" type="text" placeholder="${taskArray[i]}"/>
//         <div class='edit-Btn'>
//           <div class='editBtn1'></div>
//           <div class='editBtn1'></div>
//           <div class='editBtn1'></div>
//         </div>
//     </div>
//     <span class="edit-controller">
//       <span class="remove-Btn">Delete</span>
//       <span class="cancel-Btn">x</span>
//     </span>
//   </div>`;
//   }
//   document.querySelector('#todo-Collections').innerHTML = tasks;
//   actRemove();
//   checkBox();
//   activateCancel();
//   activateEdit();
// }

// document.querySelector('#add-Btn').addEventListener('click', () => {
//   createItem(inputList.value);
//   localStorage.setItem('tasks', JSON.stringify(taskArray));
// });

// window.onload = displayItems();