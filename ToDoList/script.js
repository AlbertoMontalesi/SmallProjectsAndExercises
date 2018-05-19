document.addEventListener("DOMContentLoaded", ()=> {

let add_task = document.querySelector("#add_item span");
let task_content = document.querySelector("#add_item input");

let to_do_container = document.querySelector("#to_do_item");

console.log(to_do_container);


add_task.addEventListener("click", () => {
  addTask(task_content);
});

function addTask(arg){
  // console.log(arg.value);
  to_do_container.insertAdjacentHTML('beforeend',`<input type="checkbox", name=${arg.value}> ${arg.value} </br>`);
}



});