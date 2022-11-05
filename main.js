
function showInputValue(todo){
    let li = document.createElement('li');
    let liItems = document.getElementById('list-items')
    li.innerHTML = `<input type="checkbox" class="check-box"></input>
                     <span class="list-items">${todo}</span>
                    <button class="edit-button b-buttons">edit</button>
                     <button class="delete-button b-buttons">delete</button>`

    li.classList.add('todo-items-child')                 
   liItems.appendChild(li);
   

}

function TodoInput(e){

    e.preventDefault();

    let inputButton = document.getElementById('input');
    let inputValue = inputButton.value;
     
    inputButton = " "
    showInputValue(inputValue);

}


let submitForm = document.getElementById('form');

submitForm.addEventListener('click', TodoInput);

// delete and edit functions

function deleteElements(){
  let deleteList = document.getElementsByClassName('list-items');
  let removedElement = (deleteList.length -1).pop;

  console.log(removedElement);


}

let deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', deleteElements);
