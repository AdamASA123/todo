const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");
const todoContainer = document.querySelector(".container");

addTodo.addEventListener("click", () => {
  if (inputTodo.value != "") {
    displayTodo();
    inputTodo.value = "";
  }
});

function displayTodo() {
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let todoText = document.createElement("p");
  todoText.innerText = inputTodo.value;

  let todoActions = document.createElement("div");
  todoActions.classList.add("actions");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", () => {
    todoContainer.removeChild(todo);
  });

  todoActions.appendChild(checkbox);
  todoActions.appendChild(delBtn);

  todo.appendChild(todoText);
  todo.appendChild(todoActions);

  todoContainer.appendChild(todo);
}
