# time-management-app
Time Management Application – 3-tier architecture with MySQL
1. TỔNG QUAN KIẾN TRÚC HỆ THỐNG

Hệ thống Time Management App được xây dựng theo mô hình Web Application 3 lớp, bao gồm:

Frontend: Giao diện người dùng

Backend: Xử lý nghiệp vụ và cung cấp API

Database: Lưu trữ dữ liệu người dùng và mốc thời gian

Các thành phần được tách biệt rõ ràng nhằm tăng tính bảo trì, mở rộng và bảo mật.

2. FRONTEND (GIAO DIỆN NGƯỜI DÙNG)
2.1 Công nghệ sử dụng

HTML5

CSS3

JavaScript (Vanilla JS)

Giao tiếp Backend thông qua REST API (Fetch/AJAX)

2.2 Cấu trúc thư mục Frontend
docs/
├── index.html        # Trang chính
├── login.html        # Trang đăng nhập
├── register.html     # Trang đăng ký
│
├── css/
│   ├── style.css     # CSS chung
│   └── login.css     # CSS đăng nhập
│
├── js/
│   ├── script.js     # Xử lý logic chính
│   └── auth.js       # Xác thực người dùng

2.3 Chức năng Frontend

Đăng ký tài khoản

Đăng nhập người dùng

Gửi yêu cầu bắt đầu / kết thúc theo dõi thời gian

Hiển thị danh sách các mốc thời gian đã ghi nhận

Giao tiếp với Backend thông qua API REST

👉 Frontend không xử lý nghiệp vụ, chỉ gửi và nhận dữ liệu.

3. BACKEND (XỬ LÝ NGHIỆP VỤ)
3.1 Công nghệ sử dụng

Python

Flask Framework

RESTful API

Kiến trúc phân lớp (Layered Architecture)

3.2 Cấu trúc thư mục Backend
backend/
├── api/
│   └── routes.py        # Định nghĩa các API
│
├── domain/
│   ├── models.py        # Đối tượng nghiệp vụ
│   └── services.py     # Xử lý logic (start/stop)
│
├── repositories/
│   ├── repository.py   # Interface repository
│   └── sql_repo.py     # Làm việc với database
│
├── database/
│   └── models.py       # ORM / ánh xạ bảng
│
├── tests/
│   └── test_domain.py  # Kiểm thử nghiệp vụ
│
├── app.py              # Khởi động Flask app
└── requirements.txt    # Thư viện cần thiết

3.3 Các API chính của Backend
API	Method	Chức năng
/start/<user_id>	POST	Bắt đầu theo dõi thời gian
/stop/<user_id>	POST	Kết thúc & lưu thời gian
/logs/<user_id>	GET	Lấy lịch sử thời gian
3.4 Luồng xử lý Backend

Frontend gửi request

API nhận request (routes.py)

Xử lý nghiệp vụ (services.py)

Lưu / đọc dữ liệu (sql_repo.py)

Trả JSON về Frontend

4. DATABASE (LƯU TRỮ DỮ LIỆU)
4.1 Công nghệ sử dụng

SQLite / SQL (theo schema.sql)

Thiết kế theo mô hình quan hệ

4.2 Cấu trúc Database
database/
└── schema.sql   # Định nghĩa bảng dữ liệu

4.3 Các bảng dữ liệu chính
🔹 Bảng User

Lưu thông tin người dùng

ID, username, password, trạng thái tracking

🔹 Bảng TimeLog

Lưu mốc thời gian

start_time

end_time

duration

user_id (khóa ngoại)

👉 Dữ liệu chỉ được lưu khi người dùng nhấn STOP.

5. TỔNG KẾT KIẾN TRÚC

Frontend: giao diện + gửi request

Backend: xử lý logic + API

Database: lưu trữ dữ liệu thời gian

Hệ thống đảm bảo:

Dễ mở rộng

Dễ kiểm thử

Phù hợp cho ứng dụng quản lý thời gian thực tế
