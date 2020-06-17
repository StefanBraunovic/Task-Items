//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection')
const clear = document.querySelector('.clear-tasks');
const filte = document.querySelector('#filter');
const taskInput= document.querySelector('#task');


//Load all event listeners

loadEventListeners();

//load all event listeners

function loadEventListeners(){
    form.addEventListener('submit',addTask);
}


//Add Task
function addTask(e){
if(taskInput.value===''){
    
}

//Create li element
const li = document.createElement('li');
li.className='collection-item';
//Create text node and append to li

li.appendChild(document.createTextNode(taskInput.value));
//Create new link element
const link = document.createElement('a');
//Add class
link.className='delete-item secondary-content';
//Add icon html
link.innerHTML='<i class="fa fa-remove"></i>';
//Append the link to li
li.appendChild(link);


taskList.appendChild(li)

//Clear input
taskInput.value='';

e.perventDefault();
}
