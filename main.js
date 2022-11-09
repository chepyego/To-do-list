// alert("jemimah");
function deleteToDo(eventObject) {
  alert('are you sure you want to delete?');
  const clickedButton = eventObject.target;

  const liDeleted = clickedButton.parentNode.parentNode;
  liDeleted.remove();


  // console.log(eventObject);


}

function addEventListenerToDeleteButton() {
  // querySelectorAll return an array of [NodeList]
  const collectionButton = document.querySelectorAll(".d_butt");

  // #select the last button
  const lastButton = collectionButton[collectionButton.length - 1];

  lastButton.addEventListener("click", deleteToDo);


}









function showInputValue(todo) {
  let li = document.createElement('li');
  let liItems = document.getElementById('list-items');
  li.innerHTML = `
  
      <input type="checkbox" class="check-box"/>
      <span class="list-items">${todo}</span>

      <div class="todo_actions">
        <button class="edit-button b-buttons edit_b">
          edit
        </button>

        <button  type="button" class="delete-button b-buttons d_butt">
        delete
        </button>

      
      </div>`;



  li.classList.add('todo-items-child')
  liItems.appendChild(li);
  addEventListenerToDeleteButton();
  addEventListenerToEditButton();


}

function TodoInput(e) {

  e.preventDefault();

  let inputButton = document.getElementById('input');
  let inputValue = inputButton.value;

  inputButton.value = " "
  showInputValue(inputValue);

}


let submitForm = document.getElementById('form');

submitForm.addEventListener('click', TodoInput);

// delete and edit functions

function editTodo(e) {
  e.preventDefault();
  const editButton = document.querySelector(".edit_b");
  const addButton = document.querySelector(".add_butt");
  
  addButton.innerHTML = "edit";

  let inputButton = document.getElementById('input');
  let inputValue = inputButton.value;

  inputButton.value = " ";

}

function addEventListenerToEditButton() {

  const editButton = document.querySelector(".edit_b");

  editButton.addEventListener("click", editTodo);

}





