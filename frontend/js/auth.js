function login() {
  localStorage.setItem("isLogin", "true");
  window.location.href = "dashboard.html";
}

function register() {
  alert("Đăng ký thành công, vui lòng đăng nhập");
  window.location.href = "login.html";
}
