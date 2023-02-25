let todoCollection = document.getElementById('todo-Collections')
import menu from './menu.svg'
let count = 0
let collection = []
class CreateList {
    create(input, isChecked) {
      this.input = input;
      this.isChecked = isChecked;
      const collective = { chars: '', isChecked, index: 0 };
  
      collective.chars = this.input;
      collective.index = count;
  
      count += 1;
  
      const wrapper = document.createElement('div');
      const checkBox = document.createElement('input');
      const item = document.createElement('input');
      const deleteButton = document.createElement('img');
  
      checkBox.checked = this.isChecked;
  
      if (checkBox.checked) {
        item.style.textDecoration = 'line-through';
      }
  
      item.type = 'text';
      checkBox.type = 'checkbox';
    //   deleteButton.src = menu;
  
      wrapper.classList.add('wrapper');
      item.classList.add('item');
      deleteButton.classList.add('more');
      checkBox.classList.add('checkBox');
  
      item.disabled = true;
  
      item.value = collective.chars;
  
      wrapper.appendChild(checkBox);
      wrapper.appendChild(item);
      wrapper.appendChild(deleteButton);
      todoCollection.appendChild(wrapper);
      collection.push(collective);
  
      localStorage.setItem('text', JSON.stringify(collection))
    }
  }
  
  export default CreateList;

