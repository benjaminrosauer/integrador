


















var username = sessionStorage.getItem("Username");
console.log(username)
if (username.length>0) {
  var usernameh2 = document.querySelector(".logeado")
  usernameh2.innerHTML = "Bienvenido <span>" + username + "</span>";
  var usernameh2 = document.querySelector(".login")
  usernameh2.style.display = "none"
}
