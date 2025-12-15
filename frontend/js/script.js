/* ====================================
   1. CSS Cơ Bản và Thiết Lập Chung
   ==================================== */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Font hiện đại hơn */
    background: #f4f6f8;
    margin: 0;
    color: #333; /* Màu chữ tối hơn, dễ đọc hơn */
}

/* ====================================
   2. Header và Thanh điều hướng
   ==================================== */
.header {
    background: #4facfe;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); /* Hiệu ứng gradient đẹp hơn */
    color: white;
    padding: 20px 15px; /* Tăng padding */
    text-align: center;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    margin: 0 0 5px 0;
    font-size: 28px;
    font-weight: 600;
}

.logout-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%); /* Căn giữa dọc */
    padding: 10px 16px;
    border: none;
    background: #ff4d4d;
    color: white;
    cursor: pointer;
    border-radius: 8px; /* Bo tròn hơn */
    font-weight: bold;
    transition: background 0.3s;
}

.logout-btn:hover {
    background: #e63946;
}

.time {
    font-size: 14px;
    opacity: 0.8;
}

/* ====================================
   3. Bố Cục Chính (Container) - Cải tiến Grid
   ==================================== */
.container {
    max-width: 1200px; /* Giới hạn chiều rộng */
    margin: 30px auto; /* Căn giữa và tăng khoảng cách trên/dưới */
    padding: 0 20px;
    
    /* Bố cục Grid 2fr / 1fr */
    display: grid;
    grid-template-columns: 2fr 1fr; /* 2 phần cho việc/mục tiêu, 1 phần cho Pomodoro */
    gap: 30px; /* Khoảng cách lớn hơn giữa các khối */
}

/* Bộ chứa cho hai khối Quản lý (xếp dọc) */
.main-content {
    display: flex;
    flex-direction: column; 
    gap: 30px; /* Khoảng cách giữa các card dọc */
}

/* ====================================
   4. Thẻ Card Chung và Thành phần
   ==================================== */
.card {
    background: white;
    padding: 25px; /* Tăng padding nội bộ */
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); /* Bóng đổ tinh tế hơn */
}

.card h2 {
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    color: #4facfe;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.card h2 img {
    margin-right: 10px;
}

/* Thiết lập các trường nhập liệu và nút */
input[type="text"], 
input[type="date"], 
select {
    margin: 8px 0;
    padding: 12px;
    width: 100%;
    box-sizing: border-box; /* Quan trọng để padding không làm hỏng width: 100% */
    border: 1px solid #ddd;
    border-radius: 6px;
    transition: border-color 0.3s;
}

input:focus, select:focus {
    border-color: #4facfe;
    outline: none;
}

button {
    margin-top: 15px;
    padding: 12px;
    width: 100%;
    background: #4facfe;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    transition: opacity 0.3s, transform 0.2s;
}

button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

/* ====================================
   5. Chỉnh sửa chi tiết cho từng khối
   ==================================== */

/* Pomodoro */
.pomodoro-card {
    height: fit-content; /* Đảm bảo khối không bị kéo dài */
    text-align: center;
    position: sticky; /* Giữ Pomodoro cố định khi cuộn */
    top: 30px;
}

.pomodoro-card .time-display {
    font-size: 60px;
    font-weight: bold;
    margin: 20px 0;
    color: #e63946;
}

.pomodoro-card button {
    margin-top: 20px;
    background: #43e97b;
    background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}

.pomodoro-card button:hover {
    opacity: 0.9;
}


/* Tiến độ */
.progress-text {
    margin-top: 15px;
    font-size: 14px;
    color: #555;
    font-weight: 600;
}

.progress-container {
    width: 100%;
    height: 12px;
    background: #e0e0e0;
    border-radius: 6px;
    margin-top: 5px;
}

#progressBar {
    height: 100%;
    width: 0%;
    background: linear-gradient(to right, #43e97b, #38f9d7);
    border-radius: 6px;
    transition: width 0.4s ease-in-out;
}

/* (Phần này dành cho việc hiển thị danh sách công việc/mục tiêu, nếu bạn có) */
ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 8px 0;
    padding: 12px;
    background: #f9f9f9;
    border-radius: 6px;
    border-left: 5px solid #4facfe; /* Nhấn mạnh bằng đường viền bên trái */
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}