from datetime import datetime

class User:
    def __init__(self, user_id, username):
        self.id = user_id
        self.username = username
        self.is_tracking = False
        self.start_time = None


class TimeLog:
    def __init__(self, user_id, start_time, end_time, duration):
        self.user_id = user_id
        self.start_time = start_time
        self.end_time = end_time
        self.duration = duration
