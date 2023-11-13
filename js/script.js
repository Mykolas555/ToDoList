let addNewLineButton = document.querySelector('#AddNewLine');
let deleteButton = document.querySelectorAll('.deleteButton');
let tableBody = document.getElementById('tableBody');
let undoneImage = ['../images/square-check-regular.svg'];
let doneImage = ['../images/square-check-solid.svg'];
let aaaaa = document.querySelector('td')

//creating new row and deleting row when press delete button, also changing img file
//from undone to done and underline the subject
function createNewLine() {
  let row = document.getElementById("firstRow");
  let table = document.getElementById("tableBody");
  let newRow = row.cloneNode(true);
  table.appendChild(newRow);
  //adding the delete row option
  let deleteButton = newRow.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      table.removeChild(newRow);
    });
  //changing from undone to done
  let buttonCheck = newRow.querySelector('#buttonCheck');
  let img = buttonCheck.querySelector('img');
  img.src = undoneImage;
  img.addEventListener('dblclick', () => {
    img.src = doneImage;
    let subjectElement = newRow.querySelector('.subject');
    subjectElement.style.textDecoration = 'line-through';
    }
  );
}

addNewLineButton.addEventListener('click', () => {
  createNewLine();
});