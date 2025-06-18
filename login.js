// login.js
let users = JSON.parse(localStorage.getItem("users") || "{}");

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const remember = document.getElementById("remember");
  const msg = document.getElementById("msg");

  username.classList.remove("error-border");
  password.classList.remove("error-border");
  msg.style.display = "none";

  // Validate trống
  if (!username.value || !password.value) {
    msg.textContent = "Điền đầy đủ username và password";
    msg.style.display = "block";
    username.classList.add("error-border");
    password.classList.add("error-border");
    return;
  }

  // Validate Unicode
  if (!isAscii(username.value)) {
    msg.textContent = "username không được dùng kí tự unicode";
    msg.style.display = "block";
    username.classList.add("error-border");
    return;
  }

  if (!isAscii(password.value)) {
    msg.textContent = "password không được dùng kí tự unicode";
    msg.style.display = "block";
    password.classList.add("error-border");
    return;
  }

  if (!(username.value in users) || users[username.value] !== password.value) {
    msg.textContent = "sai thông tin đăng nhập";
    msg.style.display = "block";
    return;
  }

  if (remember.checked) {
    localStorage.setItem("isLoggedIn", "true");
  } else {
    sessionStorage.setItem("isLoggedIn", "true");
  }

  // Redirect
  window.location.href = "/home.html";
});

function isAscii(str) {
  return /^[\x00-\x7F]*$/.test(str);
}
