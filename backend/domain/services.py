from datetime import datetime

def start_tracking(user):
    if user.is_tracking:
        raise Exception("Already tracking")

    user.is_tracking = True
    user.start_time = datetime.now()
    return user


def stop_tracking(user):
    if not user.is_tracking:
        raise Exception("Tracking not started")

    end_time = datetime.now()
    duration = end_time - user.start_time

    user.is_tracking = False
    start_time = user.start_time
    user.start_time = None

    return start_time, end_time, duration
