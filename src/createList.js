<<<<<<< HEAD
import menu from './delete.svg';
import deleteFunction from './delete.js';
import { count, collection } from './export.js';

const todoCollection = document.getElementById('todo-Collections');
=======
let todoCollection = document.getElementById("todo-Collections");
import menu from "./delete.svg";
import deleteFunction from "./delete.js";
import { count, collection } from "./export.js";
>>>>>>> a977d83d5e2899d075143bec49d5542ee3331bd8

class CreateList {
  create(input, isChecked) {
    this.input = input;
    this.isChecked = isChecked;
<<<<<<< HEAD
    const collective = { text: '', isChecked, index: 0 };

    collective.text = this.input;
    collective.index = count;

    count += 1;

    const wrapper = document.createElement('div');
    const checkBox = document.createElement('input');
    const item = document.createElement('input');
    const more = document.createElement('img');
=======
    const collective = { text: "", isChecked, index: 0 };

    collective.text = this.input;
    collective.index = count;
    collective.isChecked = false

    count += 1;

    const wrapper = document.createElement("div");
    const checkBox = document.createElement("input");
    const item = document.createElement("input");
    const more = document.createElement("img");
>>>>>>> a977d83d5e2899d075143bec49d5542ee3331bd8

    checkBox.checked = this.isChecked;

    if (checkBox.checked) {
<<<<<<< HEAD
      item.style.textDecoration = 'line-through';
    }

    item.type = 'text';
    checkBox.type = 'checkbox';
    more.src = menu;

    more.addEventListener('click', () => deleteFunction(wrapper, collective.index));

    wrapper.classList.add('wrapper');
    item.classList.add('item');
    more.classList.add('more');
    checkBox.classList.add('checkBox');
=======
      item.style.textDecoration = "line-through";
    }

    item.type = "text";
    checkBox.type = "checkbox";
    more.src = menu;

    more.addEventListener("click", () =>
      deleteFunction(wrapper, collective.index)
    );

    wrapper.classList.add("wrapper");
    item.classList.add("item");
    more.classList.add("more");
    checkBox.classList.add("checkBox");
>>>>>>> a977d83d5e2899d075143bec49d5542ee3331bd8

    item.disabled = true;

    item.value = collective.text;

<<<<<<< HEAD
=======
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        item.style.textDecoration = "line-through";
        this.isChecked = true;
        collection[collective.index].isChecked = true
        localStorage.setItem("text", JSON.stringify(collection));
      } else {
        item.style.textDecoration = "none";
        this.isChecked = false;
        collection[collective.index].isChecked = false
        localStorage.setItem("text", JSON.stringify(collection));
      }
    });

>>>>>>> a977d83d5e2899d075143bec49d5542ee3331bd8
    wrapper.appendChild(checkBox);
    wrapper.appendChild(item);
    wrapper.appendChild(more);
    todoCollection.appendChild(wrapper);
    collection.push(collective);

<<<<<<< HEAD
    localStorage.setItem('text', JSON.stringify(collection));
=======
    localStorage.setItem("text", JSON.stringify(collection));
>>>>>>> a977d83d5e2899d075143bec49d5542ee3331bd8
  }
}

export default CreateList;
