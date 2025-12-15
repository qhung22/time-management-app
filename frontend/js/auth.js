function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}


function toggleForm() {
  document.getElementById("registerBox").classList.toggle("hidden");
}

function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;

  if (!user || !pass) {
    alert("Vui lòng nhập đủ thông tin");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Đăng ký thành công! Hãy đăng nhập.");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (
    user === localStorage.getItem("user") &&
    pass === localStorage.getItem("pass")
  ) {
    localStorage.setItem("isLogin", "true");
    window.location.href = "index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
}

function logout() {
  localStorage.removeItem("isLogin");
  window.location.href = "login.html";
}
