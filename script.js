var username = 'babelockin_0101';
var password = 'ireallylikelegos';

function loginCheck() {
    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;
    if (inputUser == username && inputPass == password) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("showSection").style.display = "flex";
    }
}

function yes() {
    document.getElementById("showSection").style.display = "none";
    document.getElementById("YIPPI").style.display = "flex";
}