const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-countSpan')
const uncheckedCountSpan = document.getElementById('unchecked-countSpan')
const container = document.getElementById("container")
const te = document.getElementById("test")

 

 var count = 0
 var uncheckedSpan = 0

 function newTodo() {
  const toDo =prompt(" " , "walk the dog")
   // if(toDO != null) {
	   
	
	   var li= document.createElement('li');
	   list.appendChild(li);
       li.setAttribute("id","number" + count)
       li.innerHTML = " " + toDo + " "
	   count++
	   itemCountSpan.innerHTML =count;
	   uncheckedSpan++
	   uncheckedCountSpan.innerHTML = uncheckedSpan;
	   Strike()
	
   }
  
   function Strike() {
	   
    for(let i = 0; i <= count; i++) {
		const ID = "number" + i
		var task = document.getElementById(ID).textContent
		const taskID = document.getElementById(ID)
		var string = String(task)
		var result = string.strike()
		taskID.innerHTML = result
		//task.strike();
	}
  }