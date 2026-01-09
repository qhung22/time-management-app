
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(50) NOT NULL UNIQUE,
    email NVARCHAR(100) NOT NULL UNIQUE,
    password_hash NVARCHAR(255) NOT NULL,
    is_tracking BIT DEFAULT 0,
    created_at DATETIME DEFAULT GETDATE()
);

-- Bảng TimeLogs
CREATE TABLE TimeLogs (
    id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT NOT NULL,
    task_name NVARCHAR(255) NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NULL,

    duration_seconds AS (
        CASE 
            WHEN end_time IS NOT NULL 
            THEN DATEDIFF(SECOND, start_time, end_time)
            ELSE NULL
        END
    ),

    CONSTRAINT FK_UserTimeLog 
        FOREIGN KEY (user_id) REFERENCES Users(id)
        ON DELETE CASCADE
);
