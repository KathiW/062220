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

/* "key" : "value"
    "last_name" : "Gross"
    "classes" " [
        "English",
        "Mathematics" 
    ] 
    
    CRUD
    
    
    */  