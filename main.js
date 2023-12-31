var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
 

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newDesc = document.getElementById('description').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';
    //console.log(li);

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDesc));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);



    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var describe = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || describe.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }

    });

}