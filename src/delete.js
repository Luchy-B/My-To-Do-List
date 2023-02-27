// import { count, collection } from './export.js';

// const todo = document.getElementById('todo-Collections');
// const deleteFunction = (wrapper, index) => {
//   todo.removeChild(wrapper);

//   const get = JSON.parse(localStorage.getItem('text'));

//   get.forEach((element) => {
//     if (element.index === index) {
//       get.splice(index, 1);
//     }
//   });
//   count = get.length;
//   collection = [];
//   collection = get;
  
//   get.forEach((item, index) => {
//     item.index = index;
//   });

//   localStorage.setItem('text', JSON.stringify(get));
// };

// export default deleteFunction;


import { count, collection } from './export.js';

const todo = document.getElementById('todo-Collections');
const deleteFunction = (wrapper, index) => {
  todo.removeChild(wrapper);

  const get = JSON.parse(localStorage.getItem('text'));

  get.forEach((element) => {
    if (element.index === index) {
      get.splice(index, 1);
    }
});
count = get.length;
collection = [];
collection = get

  get.forEach((item, index) => {
    item.index = index;
  });

  localStorage.setItem('text', JSON.stringify(get));
};

export default deleteFunction;