const input = document.querySelector('.text-input');
const addButton = document.querySelector('.add-btn');
const list = document.querySelector('.list-items');
const deleteButton = document.querySelectorAll('.del-btn');
const toDo = document.querySelector('.to-do');

//Getting the input value
input.addEventListener('keyup', () => {
  setTimeout(() => {
     inputVal = input.value;
  },500)
});

//adding the todo to the list
function addTodo(e) {
  e.preventDefault();
  const newLi = document.createElement('li');
  newLi.innerText = `${inputVal}`
  newLi.classList.add('todo-li');
  toDo.appendChild(newLi);

  //checked button
  // const doneBtn = document.createElement('input');
  // doneBtn.type="checkbox";
  // doneBtn.classList.add('check');
  // toDo.appendChild(doneBtn);

  //delete button
  const btn = document.createElement('button');
  btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  btn.classList.add('del-btn');
  toDo.appendChild(btn);
}

//making the add button add the todo
addButton.addEventListener('click', addTodo);

//deleting the todo
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.del-btn')) {
    const li = e.target.parentElement;
    li.remove();
  }
});