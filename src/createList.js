let todoCollection = document.getElementById('todo-Collections')
import { collection } from './exports.js'
import menu from './delete.svg'
import deleteFunction from './delete.js'
let count = 0
class CreateList {
    create(input, isChecked) {
      this.input = input;
      this.isChecked = isChecked;
      const collective = { text: '', isChecked, index: 0 };
  
      collective.text = this.input;
      collective.index = count;
  
      count += 1;
  
      const wrapper = document.createElement('div');
      const checkBox = document.createElement('input');
      const item = document.createElement('input');
      const more = document.createElement('img');
  
      checkBox.checked = this.isChecked;
  
      if (checkBox.checked) {
        item.style.textDecoration = 'line-through';
      }
  
      item.type = 'text';
      checkBox.type = 'checkbox';
      more.src = menu;

      more.addEventListener('click', () => deleteFunction(wrapper, collective.index))
  
      wrapper.classList.add('wrapper');
      item.classList.add('item');
      more.classList.add('more');
      checkBox.classList.add('checkBox');
  
      item.disabled = true;
  
      item.value = collective.text;
  
      wrapper.appendChild(checkBox);
      wrapper.appendChild(item);
      wrapper.appendChild(more);
      todoCollection.appendChild(wrapper);
      collection.push(collective);
  
      localStorage.setItem('text', JSON.stringify(collection))
    }
  }
  
  export default CreateList;

