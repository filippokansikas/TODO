console.log(">>> START TODO");
let todos = [];

function aggiungiUnNuovoTodoAllaLista(todoText){
  // Creo LI - questo non e' ancora dentro il DOM - e' solo JS - NON e' visibile
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  listItem.appendChild(checkbox);
  listItem.append(todoText);

  // Aggiungo LI al UL del DOM
  const todoList = document.getElementById('todo-list'); // questo e' <UL>
  todoList.appendChild(listItem); // ORA LI e' NEL DOM --> e' visibile!
}

function aggiungiTodo(aTodo) {
    aggiungiUnNuovoTodoAllaLista(aTodo.textTodo);
}

function refreshTodolist() {
  const todoList = document.getElementById('todo-list');
  todoList.innerText = '';
  todos.forEach(aggiungiTodo);
}


function addTodo() {
  const inputFieldValue = document.getElementById('text-todo').value;

  // aggiungiUnNuovoTodoAllaLista(inputFieldValue, 'todo-list');

  const todoItem = { done: false, textTodo: inputFieldValue };
  todos.push(todoItem);
  refreshTodolist();
}

let addBtn = document.getElementById("btn-add-todo");
addBtn.addEventListener('click', addTodo);
console.log("<<< END TODO");