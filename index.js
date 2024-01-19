const input = document.querySelector('.text-input');
const addButton = document.querySelector('.add-btn');
const list = document.querySelectorAll('.list-item');
const todoDiv = document.querySelector('.todo-div');
const deleteButton = document.querySelectorAll('.del-btn');
const listContainer = document.querySelector('.list-container')


//Getting the input value
let inputVal;
input.addEventListener('keyup', () => {
  setTimeout(() => {
     inputVal = input.value;  
  },200)
});

// adding the todo to the list
function addTodo(e) {

  //create div
  let newDiv = document.createElement('div');
  newDiv.classList.add('todo-div');
  listContainer.appendChild(newDiv);

  //newList item
  let newLi = document.createElement('li');
  newLi.innerText = `${inputVal}`
  newLi.classList.add('list-item');
  newDiv.appendChild(newLi);


  //delete button
  const btn = document.createElement('button');
  btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  btn.classList.add('del-btn');
  newDiv.appendChild(btn);

  input.value = '';
}

//making the add button add the todo
addButton.addEventListener('click', addTodo);

//deleting the todo
document.body.addEventListener('click', deleteTodo);

function deleteTodo(e) {
  if (e.target.matches('.del-btn')) {
    const deletedDiv = e.target.parentElement;
    deletedDiv.remove();
  }
}

//making the event button add a todo

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

document.addEventListener('keypress', handleKeyPress);

