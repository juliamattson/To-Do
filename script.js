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
    var loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser) {
        window.location = "memberSide.html"
    }else {
        window.location = "index.html"
    }
}

// Funktion för att komma till CV (I detta fallet blev det tillbaks till startsidan)
function toCV() {
    window.location = "index.html"
}

// Funktion för att skapa ny användare och spara i lista i localstorage
function createUserButton() {
    var username = document.getElementById("input1").value 
    var password = document.getElementById("input2").value 

    var user = {
        username: username,
        password: password,
        list: []
    }

    var userList = JSON.parse(localStorage.getItem("userList"))

    if(userList) {
        userList.push(user)
        alert("Registrering lyckades!")
    } else {
        userList = []
        userList.push(user)
        alert("Registrering lyckades!")
    } 
    localStorage.setItem("userList", JSON.stringify(userList))
}

// Funktion för att logga in med skapat användarnamn och lösenord
function logIn() {    
    var userList = JSON.parse(localStorage.getItem("userList"))
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if(!userList) {
        alert("Registrera användare!")
    } else {
        for (var i = 0; i < userList.length; i++) {
            if(userList && username == userList[i].username && password == userList[i].password){
                localStorage.setItem("loggedInUser", JSON.stringify(userList[i]))
                window.location = "memberSide.html"
                return
            } 
        } 
        alert("Har du glömt ditt lösenord?")
        window.location = "forgottenPassword.html" 
    }
}

// För datum i footern
var date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();