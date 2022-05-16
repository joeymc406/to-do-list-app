// Javascript
// 1. Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You Must Write Something!");
    } else {
    $('#list').append(li);
    }
    
//  2.crossing out an item from the list of the items:
    function crossOut() {
        li.classList.toggle("strike");
    }
    li.on("dblckick", function crossOut() {
        li.toggleClass("strike");''
    });

//  3.(i). Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
       
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);

//4. Reordering the items:
    $('#list').sortable();
