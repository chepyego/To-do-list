// alert("jemimah");

let selectButton = document.getElementById('input-icon');

// let boxOne = document.querySelector('#box-1');
// let boxTwo = document.querySelector('#box-2');
// let boxThree = document.querySelector('#box-3');
// let pE = document.querySelector('#para-body')



function showInput(todo){
    let liE = document.createElement('li');
    let contentBody = document.getElementById('content');
    // let inputButton = document.getElementById('input');
    
    
    // let inputValue = inputButton.value;

    liE.innerHTML = ` <span class="list-items">${todo}</span>
    <div class="modify-buttons">
        <button id="edit-button" class="edit-button-actions">edit</button>
        <button id="delete-button" class="delete-button-actions">delete</button>
    </div>`
    liE.classList.add('todo-content-items')
    contentBody.appendChild(liE)


}

function submitForm(e){
    e.preventDefault();
    let inputButton = document.getElementById('input');
    
    let inputValue = inputButton.value;

    showInput(inputValue);

}

const formInput = document.querySelector('#form');

formInput.addEventListener('submit', submitForm)

function deleteElement(){
    console.log(deleteButton);
    let deleteElements = document.getElementsByClassName('list-items')
    deleteElements = deleteElements.length -1
}
    let deleteButton = document.querySelector('#delete-button');
    deleteButton.addEventListener('click', deleteElement);


// document.addEventListener('click' ,function(){
//     console.log("hurray");
//     boxOne.style.backgroundColor = "yellow";
//     boxTwo.style.backgroundColor = "purple";
//     boxThree.style.backgroundColor = "black";

//     let newP = document.createElement('p');
//     newP.innerText = "Jemimah is learning javascript";
//     newP.style.position = "absolute";
//     newP.style.backgroundColor = "pink";
//     pE.appendChild(newP);

// });


// document.addEventListener('click', inputSubmitForm(){
//     // console.log("trial")
//     let li = document.createElement('li');
//     li.innerText = inputButton.value;
//     // paragraph.classList.add('para-style') ;
//     contentBody.appendChild(liElement);
//     inputButton.value = ""

// });

