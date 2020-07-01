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
    show();
}

function show(){
    var todos = get_todos();
    var html = '<ul>';
    //add each todo item to the string as an <li>
    for(var i = 0; i < todos.length; i++){
        
        html += '<div id="' + todos[i] +'"><li> ' + todos[i] + ' <button>x</button></li>';
    }

        html += '</ul>';
        document.getElementById('todos').innerHTML = html;
}

document.getElementById('addTodo').addEventListener('click', add); 

/* Notes on deleting todo items:
1. You need a unique id for each items
2. You need a delete button that can be accessed indiv. in JS
3. You can use the id for each item to give teh button a unique id
4. You can grab the id for the todo that is to be deleted using JS
5. You can create HTML string - including ids
6. to remove element from array use the fuction slice()
7. buttons will need event listeners created when you make the buttons
    
    
    */  