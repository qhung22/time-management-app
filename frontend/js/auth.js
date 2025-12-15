function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  // LƯU TRẠNG THÁI ĐĂNG NHẬP
  localStorage.setItem("isLogin", "true");

  // CHUYỂN VỀ TRANG CHỦ
  window.location.href = "index.html";
}

function register() {
  alert("Đăng ký thành công! Vui lòng đăng nhập");
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("isLogin");
  window.location.href = "login.html";
}
