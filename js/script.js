//susikurti pagal forma, kad ismetu uzduoti
// uzdyuotys:
// 1 prideti task, jis sukuriamas local storage
// 2 atvaizduoti taskus, taskai isvedami todo liste is localstorage
// 3 salinti taska, taskas salinamas is local storage
// 4 task update(priority progress) atnaujinami duomenys esantys localstorage



























let addNewLineButton = document.querySelector('#AddNewLine');
let deleteButton = document.querySelectorAll('.deleteButton');
let tableBody = document.getElementById('tableBody');
let undoneImage = ['../images/square-check-regular.svg'];
let doneImage = ['../images/square-check-solid.svg'];



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


const userOnline = true; //susikuriam konstanta
let userList = ['Ieva', 'petras', 'zentas']

localStorage.setItem("user", userList)// padedu duomenis i saugykla

user = localStorage.getItem("user");//pasiemu is saugyklos

// isivedu su tikslu isivesti ka pasidejau i localstorage
//console.log(localStorage.getItem(users.split())); 

let item = {
  id:123,
  title:'cpu',
  price:12200
}


localStorage.setItem('item',JSON.stringify(item));

console.log(JSON.parse(localStorage.getItem('item'))) //issiparsinam kad turetume objekta

localStorage.removeItem("users") //salinu is saugyklos 

localStorage.clear() // istrinam visa saugykla