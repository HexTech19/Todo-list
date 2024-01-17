const input = document.querySelector('.text-input');
const addButton = document.querySelector('.add-btn');
const list = document.querySelector('.list-items')

let inputVal;
input.addEventListener('keyup', () => {
  setTimeout(() => {
     inputVal = input.value;
  },1000)
})

let listItem;
addButton.addEventListener('click', () => {
  let newLi = document.createElement('li');
  newLi.innerHTML = `<li>${inputVal}</li> <button><i class="fa-solid fa-trash"></i></button></i>`
  // newLi.innerText = inputVal;
  list.appendChild(newLi);
})