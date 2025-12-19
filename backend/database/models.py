from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserModel(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    is_tracking = db.Column(db.Boolean, default=False)
    start_time = db.Column(db.DateTime)


class TimeLogModel(db.Model):
    __tablename__ = "time_logs"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    duration = db.Column(db.String(50))
