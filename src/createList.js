import menu from './menu.svg';
import Delete from './delete.svg';
import deleteFunction from './delete.js';
import { count, collection } from './export.js';

const todoCollection = document.getElementById('todo-Collections');

class CreateList {
  create(input, isChecked) {
    this.input = input;
    this.isChecked = isChecked;
    const collective = { text: '', isChecked, index: 1 };

    collective.text = this.input;
    collective.index = count;

    count += 1;

    const wrapper = document.createElement('div');
    const checkBox = document.createElement('input');
    const item = document.createElement('input');
    const more = document.createElement('img');
    const menuTog = document.createElement('img');

    checkBox.checked = this.isChecked;
    collective.isChecked = checkBox.checked;

    if (checkBox.checked) {
      item.style.textDecoration = 'line-through';
    }

    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        item.style.textDecoration = 'line-through';
        collective.isChecked = true;
        const get = JSON.parse(localStorage.getItem('text'));
        get[collective.index].isChecked = true;
        localStorage.setItem('text', JSON.stringify(get));
      } else {
        item.style.textDecoration = 'none';
        collective.isChecked = false;
        const get = JSON.parse(localStorage.getItem('text'));
        get[collective.index].isChecked = false;
        localStorage.setItem('text', JSON.stringify(get));
      }
    });

    item.type = 'text';
    checkBox.type = 'checkbox';
    menuTog.src = menu;
    more.src = Delete;

    more.addEventListener('click', () => deleteFunction(wrapper, collective.index));

    wrapper.classList.add('wrapper');
    item.classList.add('item');
    more.classList.add('more');
    menuTog.classList.add('edit');
    more.style.display = 'none';
    checkBox.classList.add('checkBox');

    item.disabled = true;

    item.value = collective.text;

    menuTog.addEventListener('click', () => {
      item.disabled = false;
      more.style.display = 'block';
      menuTog.style.display = 'none';
      more.src = Delete;
      more.classList.add('more');
    });

    wrapper.appendChild(checkBox);
    wrapper.appendChild(item);
    wrapper.appendChild(more);
    wrapper.appendChild(menuTog);
    todoCollection.appendChild(wrapper);
    collection.push(collective);

    localStorage.setItem('text', JSON.stringify(collection));
  }
}

export default CreateList;
