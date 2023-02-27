import { count, collection } from './export.js';

const todo = document.getElementById('todo-Collections');
const deleteFunction = (wrapper, index) => {
  todo.removeChild(wrapper);

  const get = JSON.parse(localStorage.getItem('text'));

  get.forEach((element) => {
    if (element.index === index) {
      get.splice(index, count);
      collection.push(get);
    }
  });

  get.forEach((item, index) => {
    item.index = index;
    count = get.length;
  });

  localStorage.setItem('text', JSON.stringify(get));
};

export default deleteFunction;