function getEmail() {
    var email = document.getElementById("email").value;
    if (email !== "") {
    document.getElementById("potwierdzenie").innerHTML = "E-mail potwierdzony";
}else{
    alert("Wpisz adres e-mail");
}
}