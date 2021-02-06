let todoItems = [];

const list = document.querySelector(".js-todo-list");
const displayTodo = ({ id, todo, isCompleted, isDeleted }) => {

  localStorage.setItem("todoItems", JSON.stringify(todoItems))
  const listItem = document.createElement("li");
  const item = document.querySelector(`[data-key='${id}']`);

  if (isDeleted) {
    return item.remove();
  }
  const isDone = isCompleted ? "done" : "";
  listItem.setAttribute("class", `todo-item ${isDone}`);
  listItem.setAttribute("data-key", id);
  listItem.innerHTML = `
    <input id=${id} type="checkbox">
    <label for=${id} class="tick"></label>
    <span>${todo}</span>
    <button class="delete-todo">
        <svg><use href="#delete-icon"></use></svg>
    </button>
    `;
  if (item) {
    list.replaceChild(listItem, item);
  } else {
    list.append(listItem);
  }
};

const addTodo = (value) => {
  const todo = {
    id: Date.now(),
    todo: value,
    isCompleted: false,
    isDeleted: false,
  };
  todoItems.push(todo);
  return displayTodo(todo);
};

const changeStatus = (id) => {
  const index = todoItems.findIndex((el) => Number(el.id) === Number(id));
  const todo = todoItems[index];
  todo.isCompleted = !todo.isCompleted;
  return displayTodo(todo);
};

const deleteTodo = (id) => {
  const index = todoItems.findIndex((el) => Number(el.id) === Number(id));
  const todo = todoItems[index];
  todo.isDeleted = true;
  todoItems = todoItems.filter((el) => Number(el.id) !== Number(id));
  return displayTodo(todo);
};

const submitBtn = document.querySelector(".btn__style");
const input = document.querySelector(".js-todo-input");

const addTodoEvent = (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    addTodo(input.value.trim());
    input.value = "";
    return;
  }
  alert("Enter a value");
};

submitBtn.addEventListener("click", addTodoEvent);

list.onclick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("tick")) {
    changeStatus(e.target.parentNode.dataset.key);
  }

  if (e.target.classList.contains("delete-todo")) {
    deleteTodo(e.target.parentNode.dataset.key);
  }
};

//JSON is like javascript Object except the keys have to be in quotes too.

// const json = {
//     "name": "demola",
//     "age": 44,
//     "gender": "male"
// }

// stringJson = JSON.stringify(json);
// console.log(stringJson); 
// //turns a js object into a string

// //to convert string to js object, we use JSON.parse
// console.log(JSON.parse(stringJson));
// console.log(typeof(stringJson));
// console.log(typeof(json));

document.addEventListener('DOMcontentLoaded', () => {
    let data = localStorage.getItem("todoItems");
    console.log(data);
    data = JSON.parse(data);
    if (data) {
        data.forEach(todo => {
            displayTodo(todo)
        });
    }
})

// APIs is an application program interface. It's used to communicate with other computers and networks.
// There are different types of request an API can make.
// GET, POST, PUT, PATCH, DELETE

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
      json.map((el) => {
          let obj = {};
          obj.id = el.id;
          obj.todo = el.title;
          obj.isCompleted = el.completed;
          
      }
  }
      console.log(json));