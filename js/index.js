//console.log("test ok");

let users = [];

function User(name, password) {
    this.name = name;
    this.password = password;
}

function addUser() {
    let nameValue = document.getElementById("name_form").value;
    let passwordValue = document.getElementById("password_form").value;
    console.log("nameValue", nameValue);
    console.log("passwordValue", passwordValue);

    if (nameValue != "" && passwordValue != "") {
        let user = new User(nameValue, passwordValue);
        users.push(user);
    }
}

function updateDivUserList() {
    const div = document.getElementById("list_block");

    if(users.length > 0) {
        let html = "";
        let cpt = 0;

        users.forEach(u => {
            cpt++;
            html += "<p class='row ml-3 mt-2' ><span class='col-4'>" + cpt + "</span><span class='col-4'>" + u.name + "</span><span class='col-4'>" + u.password + "</span></p>";
        })

        console.log("html : " + html);

        div.innerHTML = html;
    }
}