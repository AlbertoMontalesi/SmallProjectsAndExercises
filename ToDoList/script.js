document.addEventListener("DOMContentLoaded", () => {

  
  let addButton = document.querySelector("#add");

  // add the svg icons for the buttons
  // let removeSVG = ...
  // let completeSVG = ...


  // user clicks on the add button
  // if there is text inside the item field then add it to the to do list
  addButton.addEventListener("click",function(){
    let  newItem = document.getElementById("item").value;
    if(newItem) { 
      addItemTodo(newItem);
      document.getElementById("item").value = "";
    }
    
  });

  
  /* remove Items */
  function removeItem(){
    // grab the li
    let item = this.parentNode.parentNode;
    // grab the ul
    let parent  = item.parentNode;
    // remove li from ul
    parent.removeChild(item);
  }

  /* complete an item */
  function completeItem(){
    // grab the li
    let item = this.parentNode.parentNode;
    // grab the ul
    let parent = item.parentNode;
    // grab the parent id
    let id = parent.id;
  
    // check if the item should go in the completed or re-added to todo
    let target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");
    console.log(target);
    // remove the item to its current ul
    parent.removeChild(item);
    // add the item to the new ul
    target.insertBefore(item,target.childNodes[0]);
    
  } // end completeItem()

  //add an item to the todo list
  function addItemTodo(text){
    // grab the ul
    let list = document.getElementById("todo");
    // create an li
    let item = document.createElement('li');
    item.innerText = text;

    //create container for buttons
    let buttons = document.createElement('div');
    buttons.classList.add("buttons");

    // create the two buttons

    let remove = document.createElement('button');
    remove.classList.add('remove');
    // remove.innerHTML = removeSVG;
    remove.innerHTML = "-";
    // add event listener for remove
    remove.addEventListener("click",removeItem);



    let complete = document.createElement('button');
    complete.classList.add('complete');
    // complete.innerHTML = completeSVG;
    complete.innerHTML = "x";
    // add event listener for complete
    complete.addEventListener("click",completeItem);


    // append the buttons to the div
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    // append the whole dive to the li
    item.appendChild(buttons);
    // PREPEND the li to the ul
    list.insertBefore(item,list.childNodes[0]);
  }

});