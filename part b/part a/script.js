let message = "Hello, welcome to JavaScript!";
const maxStudents = 3;
var counter = 0;

function greetUser() {
  document.getElementById("greetOutput").textContent = message;
}

document.getElementById("greetButton").addEventListener("click", greetUser);

let students = [
  { name: "Raffy", age: 20 },
  { name: "Romel", age: 20 },
  { name: "James", age: 19 },
  {name : "Jelen", age: 20}
];

function showStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ""; 

  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name}, Age: ${student.age}`;
    list.appendChild(li);
  });
}

document.getElementById("showStudentsButton").addEventListener("click", showStudents);
