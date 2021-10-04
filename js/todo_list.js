const todoForm = document.querySelector(".todo_form");
const todoValue = todoForm.querySelector(".todo_input");

console.log(todoForm, todoValue);

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodoValue = todoValue.value;
  todoValue.value = "";
  console.log(newTodoValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);
