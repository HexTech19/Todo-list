const input = document.querySelector('.text-input');
const addButton = document.querySelector('.add-btn');
const list = document.querySelector('.list-items');
const deleteButton = document.querySelectorAll('.del-btn');


//Getting the input value
let inputVal;
input.addEventListener('keyup', () => {
  setTimeout(() => {
     inputVal = input.value;
  },500)
})

//adding the todo to the list

addButton.addEventListener('click', () => {
  let newLi = document.createElement('li');
  newLi.innerHTML = `${inputVal}<button class="del-btn"><i class="fa-solid fa-trash"></i></button></i>`
  list.appendChild(newLi);
});

//deleting the todo
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.del-btn')) {
    const li = e.target.parentElement;
    li.remove();
  }
})