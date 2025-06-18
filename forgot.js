// forgot.js
document.getElementById("forgotForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("msg");
  const successMsg = document.getElementById("success");

  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  if (!username) {
    errorMsg.textContent = "Vui lòng nhập tên đăng nhập.";
    errorMsg.style.display = "block";
    return;
  }

  // Giả lập danh sách tài khoản (nên được thay bằng API thực tế)
  const users = [
    { username: "admin", password: "123456" },
    { username: "user1", password: "abc123" },
  ];

  const found = users.find((u) => u.username === username);

  if (!found) {
    errorMsg.textContent = "Tài khoản không tồn tại.";
    errorMsg.style.display = "block";
  } else {
    // Giả lập gửi mật khẩu hoặc email khôi phục
    successMsg.textContent = `Mật khẩu của bạn là: ${found.password}`;
    successMsg.style.display = "block";
  }
});
