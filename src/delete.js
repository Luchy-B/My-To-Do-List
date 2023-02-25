import { count } from "./exports.js";
const todo = document.getElementById('todo-Collections');
const deleteFunction = (wrapper, index) => {
todo.removeChild(wrapper)

let get = JSON.parse(localStorage.getItem('text'))

get.forEach(element => {
    if(element.index === index) {
        get.splice(index, 1)
    }
});

get.forEach((item, index) => {
    item.index = index
})

localStorage.setItem('text', JSON.stringify(get))

}

export default deleteFunction