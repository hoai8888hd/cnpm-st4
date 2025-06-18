document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("msg");

  msg.style.display = "none";

  // Validate cơ bản
  if (!username || !password || !confirmPassword) {
    msg.textContent = "Vui lòng điền đầy đủ thông tin";
    msg.style.display = "block";
    return;
  }

  if (password !== confirmPassword) {
    msg.textContent = "Mật khẩu không khớp";
    msg.style.display = "block";
    return;
  }

  if (!/^[\x00-\x7F]*$/.test(username)) {
    msg.textContent = "Username không được chứa ký tự unicode";
    msg.style.display = "block";
    return;
  }

  // Lưu thông tin vào localStorage (giả lập database)
  let users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[username]) {
    msg.textContent = "Tài khoản đã tồn tại";
    msg.style.display = "block";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Quay lại trang đăng nhập.");
  window.location.href = "login.html";
});
