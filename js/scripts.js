function toggleMenu() {
    document.getElementById("topNav").classList.toggle("open");
}
const btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;

function ValidateEmail(inputText) {
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.commentForm.eAddress.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.commentForm.eAddress.focus();
        return false;
    }
}


