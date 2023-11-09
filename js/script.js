let addNewLineButton = document.getElementById('AddNewLine');
let deleteButtons = document.querySelectorAll('#deleteButton');
let tbody = document.querySelector('tbody');
let default_image = ['/images/square-check-solid.svg'];
let check = document.querySelector('#check');

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
  let allrows = document.querySelectorAll('tr');
  let imgElement = allrows.querySelectorAll('#check');
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
