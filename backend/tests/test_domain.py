from domain.models import User
from domain.services import start_tracking, stop_tracking

def test_tracking_flow():
    user = User(1, "testuser")

    start_tracking(user)
    assert user.is_tracking is True

    start, end, duration = stop_tracking(user)
    assert duration.total_seconds() > 0
