//alert('from the app.js file');
function get_todos() {
    //grab data from local storage
    var todos = [];
    var todosString = localStorage.getItem('todos');

    //convert to JSON

    if(todosString !== null){
        todos = JSON.parse(todosString);
    }
    return todos;
}

function add(){
    
    var todos = get_todos();

    var textBoxContent = document.getElementById('itemToAdd').value;

    todos.push(textBoxContent);

    localStorage.setItem("todos", JSON.stringify(todos)); //this adds quotes to the item in local storage
    //console.log('The value from the input box is:  ' + textBoxContent);
    console.log('The number of items in the todos Array is: ' + todos.length);
    //localStorage.setItem("todoItem",textBoxContent)
    document.getElementById('itemToAdd').value = '';
    show();
}

function show(){
    var todos = get_todos();
    var html = '<ul>';
    //add each todo item to the string as an <li>
    for(var i = 0; i < todos.length; i++){
        
        html += '<div id="' + todos[i] +'"><li> ' + todos[i] + ' <button id="' + i + '">x</button></li></div>';
        
        
    }

        html += '</ul>';
        document.getElementById('todos').innerHTML = html;

        //create seperate list items for delete
    for(var j = 0; j < todos.length; j++){
       document.getElementById(j).addEventListener('click', remove); 
    }
}

function remove(){
   // var foo = this;
    console.log(this.id);
    //var chosenButton = chosenButton;
    //pick = todos.indexof(this);
    var todos = get_todos();
    todos.splice(this.id,1);
    localStorage.setItem("todos", JSON.stringify(todos));
    show();
   

}

document.getElementById('addTodo').addEventListener('click', add); 
show();


/* Notes on deleting todo items:
1. You need a unique id for each items
2. You need a delete button that can be accessed indiv. in JS
3. You can use the id for each item to give teh button a unique id
4. You can grab the id for the todo that is to be deleted using JS
5. You can create HTML string - including ids
6. to remove element from array use the function splice()
7. buttons will need event listeners created when you make the buttons
    
    
    */  