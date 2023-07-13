function validateUser() {
    let uname = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let e_m = document.getElementById("disp");
    let e_p = document.getElementById("disp_p");
    var eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = "abc@demo.com";
    let passw = "qwerty";


    if (uname == email && passw == pass) {
        console.log("done");
        window.location.href = "redirect.html";

    }
    if (eRegex.test(email) && uname != "" && uname) {
        e_m.innerHTML = "invalid syntax";
    }
    if (pass == "") {
        e_p.innerHTML = "*Password cant be null";
    }
    if (pass != passw && pass != "") {
        e_p.innerHTML = "*Enter valid password";
    }
    if (uname == "") {
        e_m.innerHTML = "*Email cant be null";

    }



    if (uname != email && uname != "") {
        e_m.innerHTML = "*Enter valid email";
    }
    if (uname == email && e_m != "") {
        e_m.innerHTML = "";
    }
    if (pass == passw && e_p != "") {
        e_p.innerHTML = "";
    }

}