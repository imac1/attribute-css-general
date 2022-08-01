// !-------------------------------------------------------------------------------------------------!
//                  This file makes the application functionality working.
//     You don't need to care much about the content, you need just to modify the "style.css" file.
// !-------------------------------------------------------------------------------------------------!

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  function onWindowLoad() {
    const newTodoBtn = document.querySelector("button[class~='btn-primary']");
    const clearTodosBtn = document.querySelector(
      "button[class~='btn-secondary']"
    );
  
    newTodoBtn.addEventListener("click", addNewTodo);
    clearTodosBtn.addEventListener("click", clearTodoList);
  
    const initInputs = document.querySelectorAll("input[readonly]");
    initInputs.forEach((inputField) => {
      inputField.addEventListener("dblclick", handleInputDoubleClick);
      inputField.addEventListener("blur", handleInputBlur);
    });
  
    writeOutActualDate();
    writeOutTheAmountOfTasks();
  }
  
  function writeOutActualDate() {
    const dateObject = new Date();
  
    const day = days[dateObject.getDay()];
    const month = months[dateObject.getMonth()];
    const date = formatDate(dateObject);
  
    const dateWrapper = document
      .querySelector(".card-header")
      .querySelector(".col-sm");
  
    const firstLine = `${day}, ${date}`;
    const secondLine = `${month}`;
  
    dateWrapper.children[0].textContent = firstLine;
    dateWrapper.children[1].textContent = secondLine;
  }
  
  function writeOutTheAmountOfTasks() {
    const todoList = document.querySelector("ul");
    const amountOfTodos = todoList.children.length;
  
    const amountOfTasksWrapper = document
      .querySelector(".card-header")
      .querySelectorAll(".col-sm")[1];
    amountOfTasksWrapper.textContent = `${amountOfTodos} Tasks`;
  }
  
  function formatDate(dateObject) {
    const date = dateObject.getDate();
  
    if (date > 3 && date < 21) return date + "th";
  
    let nth;
  
    switch (date % 10) {
      case 1: {
        nth = "st";
        break;
      }
      case 2: {
        nth = "nd";
        break;
      }
      case 3: {
        nth = "rd";
        break;
      }
      default:
        nth = "th";
    }
  
    return date + nth;
  }
  
  function clearTodoList() {
    const todoList = document.querySelector("ul");
    todoList.textContent = "";
    writeOutTheAmountOfTasks();
  }
  
  function addNewTodo() {
    const newTodo = document.querySelector("input[name='newTodo']");
    const newTodoName = newTodo.value || "New Todo";
    const todoList = document.querySelector("ul");
  
    const newTodoListItem = document.createElement("li");
    newTodoListItem.classList.add("list-group-item");
  
    const todoWrapper = createTodoTree(newTodoName);
    newTodoListItem.appendChild(todoWrapper);
  
    todoList.appendChild(newTodoListItem);
    newTodo.value = "";
    newTodo.focus();
    writeOutTheAmountOfTasks();
  }
  
  function createTodoTree(todo) {
    const newTodoWrapper = document.createElement("div");
    newTodoWrapper.classList.add("container");
  
    const row = document.createElement("div");
    row.classList.add("row");
    newTodoWrapper.appendChild(row);
  
    const inputCol = document.createElement("div");
    inputCol.classList.add("col");
    row.appendChild(inputCol);
  
    const todoInput = document.createElement("input");
    todoInput.value = todo;
    todoInput.readOnly = true;
    todoInput.addEventListener("dblclick", handleInputDoubleClick);
    todoInput.addEventListener("blur", handleInputBlur);
    inputCol.appendChild(todoInput);
  
    const checkboxCol = document.createElement("div");
    checkboxCol.classList.add("col");
    row.appendChild(checkboxCol);
  
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.value = "";
    todoCheckbox.id = "flexCheckDefault";
    checkboxCol.appendChild(todoCheckbox);
  
    return newTodoWrapper;
  }
  
  function handleInputDoubleClick(event) {
    event.target.readOnly = false;
  }
  
  function handleInputBlur(event) {
    event.target.readOnly = true;
  }
  
  window.addEventListener("load", onWindowLoad);
  