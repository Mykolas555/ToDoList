const subjectInfo = [];

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  subjectInfo.push(...storedTasks);
  updateTable();
});

function createSubject() {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = document.getElementById('inputName').value;
    const priority = document.getElementById('inputPriority').value;
    const dueDate = document.getElementById('inputDate').value;
    const getRandom = () => Math.random() * 1;
    const newSubject = {
      id: getRandom(),
      subject: subject,
      priority: priority,
      dueDate: dueDate,
      status: 'New',
      percentCompleted: 0,
      modifiedOn: new Date().toLocaleString(),
    };
    subjectInfo.push(newSubject);

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(subjectInfo));

    updateTable();
    document.getElementById('inputName').value = '';
    document.getElementById('inputPriority').value = 'high';
    document.getElementById('inputDate').value = '';
  });
}

function updateTable() {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  subjectInfo.forEach((subject) => {
    const row = document.createElement('tr');
    let background;
    switch (subject.priority) {
      case 'high':
        background = 'red';
        break;
      case 'medium':
        background = 'blue';
        break;
      case 'low':
        background = 'green';
        break;
    }
    row.style.backgroundColor = background;
    row.innerHTML = `
      <td><input type="checkbox" id="horns" name="horns" ${subject.percentCompleted === 100 ? 'checked' : ''} onchange="updateStatus(${subject.id}, this.checked)"/></td>
      <td>${subject.subject}</td>
      <td>${subject.priority}</td>
      <td>${subject.dueDate}</td>
      <td>${subject.status}</td>
      <td><div class="progress" role="progressbar" aria-label="Completion progress" aria-valuenow="${subject.percentCompleted}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-success" style="width: ${subject.percentCompleted}%"></div>
        </div></td>
      <td>${subject.modifiedOn}</td>
      <td><button onclick="deleteTask(${subject.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteTask(id) {
  const index = subjectInfo.findIndex((subject) => subject.id === id);
  if (index !== -1) {
    subjectInfo.splice(index, 1);
    
    // Save tasks to local storage after deleting a task
    localStorage.setItem('tasks', JSON.stringify(subjectInfo));

    updateTable();
  }
}

function updateStatus(id, isChecked) {
  const index = subjectInfo.findIndex((subject) => subject.id === id);
  if (index !== -1) {
    subjectInfo[index].status = isChecked ? 'Done' : 'New';
    subjectInfo[index].percentCompleted = isChecked ? 100 : 0;
    subjectInfo[index].modifiedOn = new Date().toLocaleString();

    // Save tasks to local storage after updating status
    localStorage.setItem('tasks', JSON.stringify(subjectInfo));

    updateTable();
  }
}

createSubject();