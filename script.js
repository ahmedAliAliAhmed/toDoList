const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-countSpan')
const uncheckedCountSpan = document.getElementById('unchecked-countSpan')


 

 var count = 0
 var uncheckedSpan = 0

 function newTodo() {
  const toDo =prompt(" " , "walk the dog")
   // if(toDO != null) {
	   
	
	   var li= document.createElement('li');
	   list.appendChild(li);
	   li.setAttribute("id","li1")
       li.innerHTML = " " + toDo + " "
	   count++
	   itemCountSpan.innerHTML =count;
	   uncheckedSpan++
	   uncheckedCountSpan.innerHTML = uncheckedSpan;
	 
	   
	 
   }
 