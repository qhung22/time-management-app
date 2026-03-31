-- Cơ sở dữ liệu: Quản lý Thời gian

CREATE DATABASE time_management;
USE time_management;

-- Bảng người dùng
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ten_dang_nhap VARCHAR(50),
  email VARCHAR(100),
  mat_khau VARCHAR(255),
  ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng công việc
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  tieu_de VARCHAR(255),
  mo_ta TEXT,
  trang_thai VARCHAR(50),
  muc_do_uu_tien INT,
  han_hoan_thanh DATE,
  ngay_tao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Bảng theo dõi thời gian làm việc
CREATE TABLE time_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT,
  thoi_gian_bat_dau DATETIME,
  thoi_gian_ket_thuc DATETIME,
  tong_thoi_gian INT,
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);
