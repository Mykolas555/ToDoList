function changeDoneStatus(imgElement) {
  imgElement.addEventListener('dblclick', () => {
    if (imgElement.src === undoneImage) {
      imgElement.src = doneImage;
    } else {
      imgElement.src = undoneImage;
    }
  });
}


//input formos
<div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Subject" >
            <button class="btn btn-outline-secondary" 
            type="button" id="subject">Add</button>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Priority" >
            <button class="btn btn-outline-secondary" 
            type="button" id="Priority">Add</button>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Due Date" >
            <button class="btn btn-outline-secondary" 
            type="button" id="Due Date">Add</button>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Status" >
            <button class="btn btn-outline-secondary" 
            type="button" id="Status">Add</button>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Percent completed" >
            <button class="btn btn-outline-secondary" 
            type="button" id="Percent completed">Add</button>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Modified on" >
            <button class="btn btn-outline-secondary" 
            type="button" id="Modified on">Add</button>
          </div>

const SubjectButton = document.querySelector('#Subject');
const PriorityButton = document.querySelector('#Priority');
const DueDateButton = document.querySelector('#subject');
const StatusButton = document.querySelector('#Status');
const PercentButton = document.querySelector('#Percent');
const CompletedButton = document.querySelector('#Competed');
const ModifiedOnButton = document.querySelector('#ModifiedOn');


for (let i=0; i <8; i++){
    const tdata = document.createElement('td');
    tableBody.appendChild(trow);
    const input = document.createElement('input');
    input.type = 'text'; 
    trow.appendChild(tdata);
    tdata.appendChild(input)}




let addNewLineButton = document.getElementById('AddNewLine');
let deleteButtons = document.querySelectorAll('#deleteButton');
let tbody = document.querySelector('tbody');
let default_image = ['/images/square-check-solid.svg']

window.addEventListener('load', function () {
  let firstRow = tbody.querySelector('tr');
  let modifiedOn = firstRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  let imgElement = document.createElement('img');
  imgElement.src = '../images/square-check-regular.svg';
  firstRow.querySelector('#check').appendChild(imgElement);
  imgElement.addEventListener('dblclick', () => {
    imgElement.src = default_image;
});
});

function createNewLine(){
  let cloneRow = tbody.querySelector('tr').cloneNode(true);
  cloneRow.querySelectorAll('input').forEach(function (input) {
    input.value = '';
  });
  let modifiedOn = cloneRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  tbody.appendChild(cloneRow);
}

tbody.addEventListener('click', function(event) {
  let target = event.target;
  if (target.id === 'deleteButton') {
      if (tbody.querySelectorAll('tr').length > 1) {
          let row = target.closest('tr');
          tbody.removeChild(row);
      } else {
          alert('Cannot delete the only row.');
      }
  }
});

function doneSubject(){

}

addNewLineButton.addEventListener('click', () => {
  createNewLine();
});

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    deleteRow(event);
  });
});

/////////////////////////////////////////////////////////////////////////////

let addNewLineButton = document.getElementById('AddNewLine');
let deleteButtons = document.querySelectorAll('#deleteButton');
let tbody = document.querySelector('tbody');
let default_image = ['/images/square-check-solid.svg']

window.addEventListener('load', function () {
  let firstRow = tbody.querySelector('tr');
  let modifiedOn = firstRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  let imgElement = document.createElement('img');
  imgElement.src = '../images/square-check-regular.svg';
  firstRow.querySelector('#check').appendChild(imgElement);
  imgElement.addEventListener('dblclick', () => {
    imgElement.src = default_image;
});
});

function createNewLine(){
  let cloneRow = tbody.querySelector('tr').cloneNode(true);
  cloneRow.querySelectorAll('input').forEach(function (input) {
    input.value = '';
  });
  let modifiedOn = cloneRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  tbody.appendChild(cloneRow);
}

tbody.addEventListener('click', function(event) {
  let target = event.target;
  if (target.id === 'deleteButton') {
      if (tbody.querySelectorAll('tr').length > 1) {
          let row = target.closest('tr');
          tbody.removeChild(row);
      } else {
          alert('Cannot delete the only row.');
      }
  }
});

function doneSubject(){
  let firstRow = tbody.querySelector('tr');
  let imgElement = firstRow.querySelector('#check');
  imgElement.addEventListener('dblclick', () => {
    imgElement.src = default_image;
})
}

addNewLineButton.addEventListener('click', () => {
  createNewLine();
});

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    deleteRow(event);
  });
});


//////////////////////h geras kodas jei ka tiks//////////////////////////




window.addEventListener('load', function () {
  let firstRow = tbody.querySelector('tr');
  let modifiedOn = firstRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  let imgElement = document.createElement('img');
  imgElement.src = '../images/square-check-regular.svg';
  firstRow.querySelector('#check').appendChild(imgElement);
  imgElement.addEventListener('dblclick', () => {
    imgElement.src = default_image;
});
});

function createNewLine(){
  let cloneRow = tbody.querySelector('tr').cloneNode(true);
  cloneRow.querySelectorAll('input').forEach(function (input) {
    input.value = '';
  });
  let modifiedOn = cloneRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  tbody.appendChild(cloneRow);
}


////////////////////////////// rasytas naujas kodas///////////////////////////
let addNewLineButton = document.querySelector('#AddNewLine');
let tbody = document.querySelector('tbody');
let modifiedOn = document.querySelector('#modified');
let check = document.querySelector('#check')
let undoneImage = ['../images/square-check-regular.svg'];
let doneImage = ['../images/square-check-solid.svg'];
let imgElement = document.querySelector('#check img');

function oneImage() {
  let allRows = document.querySelectorAll('tr');
  allRows.forEach(row => {
    let imgElements = row.querySelectorAll('#check img');
    if (imgElements.length > 1) {
      imgElements.forEach((img, index) => {
        if (index > 0) {
          img.remove();
        }
      });
    }
  });
}

function createNewLine(){
  let cloneRow = tbody.querySelector('tr').cloneNode(true);
  cloneRow.querySelectorAll('input').forEach(input => (input.value = ''));
  let newImgElement = document.createElement('img');
  newImgElement.src = '../images/square-check-regular.svg';
  let modifiedOn = cloneRow.querySelector('#modified');
  modifiedOn.textContent = new Date().toLocaleString();
  cloneRow.querySelector('#check').appendChild(newImgElement);
  tbody.appendChild(cloneRow);
  changeDoneStatus(newImgElement);
  oneImage();
}

function changeDoneStatus(imgElement) {
  imgElement.addEventListener('dblclick', () => {
    const img = document.createElement('img');
        img.src = doneImage;
  });
}


changeDoneStatus(imgElement);

addNewLineButton.addEventListener('click', () => {
  createNewLine();
});

let deleteButtons = document.querySelectorAll('#deleteButton');
deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    tbody.removeChild(event.target.closest('tr'));
  });
});

 
//////////////////////////////////////// naujas kodas

let addNewLineButton = document.querySelector('#AddNewLine');
let deleteButtons = document.querySelectorAll('#deleteButton');
let tableBody = document.getElementById('tableBody');
let subjectElement = document.getElementById('subject');
let undoneImage = ['../images/square-check-regular.svg'];
let doneImage = ['../images/square-check-solid.svg'];

//creating new line
function createNewLine() {
  let row = document.getElementById("firstRow");
  let table = document.getElementById("tableBody");
  let newLine = row.cloneNode(true);
  table.appendChild(newLine);
  //Deleting exact row where you press delete
  let newDeleteButton = newLine.querySelector('#deleteButton');
  newDeleteButton.addEventListener('click', () => {
    deleteRow(newDeleteButton);
  });
  //watching how many lines left
  howManyLinesLeft();
}

//delete function
function deleteRow (button){
  let row = button.closest('tr');
  row.remove();
  howManyLinesLeft();
}

//function to watch how many left and if only one left, it cant delete it
function howManyLinesLeft(){
  let numberOfRows = tableBody.childElementCount;
  deleteButtons.forEach(button => {
    button.disabled = numberOfRows <= 1;
  });
}

//function to change check image and cross line the subject
function doneTheSubject(){
  let firstRow = tbody.querySelector('tr');
  let imgElement = firstRow.querySelector('#check');
  imgElement.addEventListener('click', () => {
    imgElement.src = deleteButtons;
    subjectElement.style.textDecoration = 'line-through';
})
}



addNewLineButton.addEventListener('click', () => {
  createNewLine();
});

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    deleteRow(button);
  });
});

///////////////////////////////////////////////