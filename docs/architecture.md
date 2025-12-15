# Kiến trúc hệ thống

Ứng dụng Quản lý Thời gian (Time Management Application) được xây dựng theo mô hình kiến trúc ba lớp (3-tier architecture) nhằm đảm bảo tính mở rộng, bảo mật và dễ bảo trì.

## 1. Tầng trình bày (Presentation Layer)
Tầng trình bày chịu trách nhiệm hiển thị giao diện và tương tác trực tiếp với người dùng.  
Người dùng có thể:
- Đăng nhập hệ thống
- Quản lý công việc cá nhân
- Theo dõi thời gian thực hiện công việc
- Xem lịch và tiến độ công việc

Công nghệ dự kiến sử dụng:
- HTML, CSS, JavaScript
- Có thể mở rộng sang React trong giai đoạn sau

## 2. Tầng xử lý nghiệp vụ (Application / Business Logic Layer)
Tầng xử lý nghiệp vụ đảm nhiệm các chức năng chính của hệ thống, bao gồm:
- Xử lý đăng nhập và xác thực người dùng
- Quản lý công việc (thêm, sửa, xóa, cập nhật trạng thái)
- Tính toán và lưu trữ thời gian làm việc
- Cung cấp các API để frontend giao tiếp

Công nghệ dự kiến sử dụng:
- Node.js với Express (hoặc Flask)

## 3. Tầng dữ liệu (Data Layer)
Tầng dữ liệu có nhiệm vụ lưu trữ và quản lý toàn bộ dữ liệu của hệ thống, bao gồm:
- Thông tin người dùng
- Danh sách công việc
- Thời gian làm việc cho từng công việc

Hệ quản trị cơ sở dữ liệu sử dụng:
- MySQL
