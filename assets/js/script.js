var form = document.getElementById("addForm");
var listItem = document.getElementById("items");

form.addEventListener("submit",addItem);

listItem.addEventListener("click",removeItem);

function addItem(e){
    e.preventDefault()

    var newItem = document.getElementById("item").value;

    var li = document.createElement('li');

    li.className = 'item-collection';

    li.appendChild(document.createTextNode(newItem));



    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'delete';

    deleteBtn.appendChild(document.createTextNode('x'));

    

    listItem.appendChild(li);
    li.appendChild(deleteBtn);

    document.getElementById("item").value = '';


}


function removeItem(e){
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }
}