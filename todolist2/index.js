const todoList = [];

function addTodo(ev){

    if(document.getElementById('search-input').value.trim() === '')
        return;

   
    function getTodoNode(){
        
        const todoTitle = document.getElementById('search-input').value; 

        
        const todoNode = document.createElement('div'); //<div>title<div>
        todoNode.innerText = todoTitle;
        todoNode.onclick = function() {
            todoNode.isDone = !todoNode.isDone;
            if(todoNode.isDone){
                this.className = 'done';
            } else {
                this.className = '';
            }
        }

        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = "<i class='fa-solid fa x-mark'></i>";
        todoNode.appendChild(removeBtn);
        removeBtn.onclick = function(){
            this.parentNode.remove();
        }

        document.getElementById('search-input').value = '';

        return todoNode;
    }




    
    if( !ev.keycode  || ev.keyCode === 13){
      
       const todoListView = document.querySelector('#todo-list-view');
      
        const todoNode = getTodoNode();
        todoListView.appendChild(todoNode);
    }

    

    

}

