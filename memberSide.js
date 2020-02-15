function initSite() {
    printUsername()
    printInputAndButton()
    printList()
    addToStorage()
    showDate()
}

// Funktion för att komma till startsidan när man trycker på "ToDo"
function toStart() {
    var loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser) {
        window.location = "memberSide.html"
    }else {
        window.location = "index.html"
    }
}

//Funktion för att komma till kontaktsidan när man trycker på kontakt-ikonen
function toContactPage() {
    window.location = "contact.html"
}

// Funktion för att komma till användar-sidan
function toMemberSide() {
    window.location = "memberSide.html"
}

// Funktion för att komma till CV (I detta fallet blev det tillbaks till startsidan)
function toCV() {
    window.location = "index.html"
}


function logOut() {
    localStorage.removeItem("loggedInUser")
    alert("Du är nu utloggad!")
    window.location = "index.html"
}

// Funktion för att printa ut användarnamnet på sidan
function printUsername() {
    var username = JSON.parse(localStorage.getItem("loggedInUser")).username
    document.getElementById("userName").innerHTML = "Välkommen " + username + "!"
}

function getList() {
    var toDoList = JSON.parse(localStorage.getItem("loggedInUser")).list

    if(!toDoList) {
         toDoList = []
    } 

    return toDoList
}

function printList() {    
    var listElement = document.getElementById("toDoList")
    listElement.innerHTML = ""
    
    getList().forEach(itemTodo => {
        var items = document.createElement("li")
        items.innerHTML = itemTodo
        items.classList = "itemToDo"
        listElement.appendChild(items)
    });
}

function printInputAndButton() {
    var main = document.getElementById("main")
    var addToDo = document.createElement("button")
    addToDo.innerText = "Lägg till"
    addToDo.classList = "addToDoButton"
    addToDo.onclick = function() {
        var newItem = document.getElementById("newItem").value
        /* list.push(newItem) */
        addToStorage(newItem)
        printList()
    }
    var input = document.createElement("input")
    input.classList = "input"
    input.type = "text"
    input.placeholder = "Lägg till ny anteckning"
    input.id = "newItem"

    main.appendChild(input)
    main.appendChild(addToDo)
} 

function addToStorage(newItem) {
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    
    // Kolla om loggedInUser finns.
    if (loggedInUser) {
        // Om finns, spara undan den nya texten i listan "list" i objektet.
        loggedInUser.list.push(newItem)
        // Spara upp loggedInUser på nytt.
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
        // Spara upp loggedInUser till userlist.
        // list[i] = loggedInUser
    } else {
        // Om ej finns, spara ingenting.
        alert("Logga in!")
    }
    
}

// För datum i footern
function showDate() {
    var date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleDateString();
}
