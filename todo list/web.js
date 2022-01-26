const todos=[];
let id=0;

function addTodo(todo){
    const todoobject={
        id:id,
        title:todo,
        completed:false
    }
    todos.push(todoobject);
    id++;
    updatetodolist();
}
const addButton=document.getElementById("add");
addButton.addEventListener("click",function(){
const todoinput=document.getElementById("todo");
const todoValue=todoinput.value;
if(!todoValue){
 alert("please enter a To-Do Task");
}
else{
    addTodo(todoValue);
}
});
function deletetodo(todo){
todos.splice(todo.id,1);
updatetodolist();
}

function updatetodolist(){
    const listElement=document.getElementById("list");
    listElement.innerHTML="";
    for(let todo of todos){
        const item=document.createElement("li");
        item.innerHTML=todo.title;
        if(todo.completed){
            item.style.textDecoration="line-through";
        }
        const deletebutton=document.createElement("button");
        deletebutton.innerHTML="Delete";
        deletebutton.addEventListener("click",function(){
            deletetodo(todo);
        });
        const completebutton=document.createElement("button");
        completebutton.innerHTML="Task is completed";
        completebutton.addEventListener("click",function(){
            completetodo(todo);
        })
        item.appendChild(deletebutton);
        item.appendChild(completebutton);
        listElement.appendChild(item);
    }
}
function completetodo(todo){
 todo.completed=true;
 updatetodolist();
}


















