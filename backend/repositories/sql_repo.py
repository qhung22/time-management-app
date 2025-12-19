from repositories.repository import AbstractRepository
from database.models import db, UserModel, TimeLogModel
from domain.models import User, TimeLog

class SQLRepository(AbstractRepository):

    def get_user(self, user_id):
        user = UserModel.query.get(user_id)
        if not user:
            return None

        domain_user = User(user.id, user.username)
        domain_user.is_tracking = user.is_tracking
        domain_user.start_time = user.start_time
        return domain_user

    def save_user(self, user):
        model = UserModel.query.get(user.id)
        model.is_tracking = user.is_tracking
        model.start_time = user.start_time
        db.session.commit()

    def add_time_log(self, time_log):
        log = TimeLogModel(
            user_id=time_log.user_id,
            start_time=time_log.start_time,
            end_time=time_log.end_time,
            duration=str(time_log.duration)
        )
        db.session.add(log)
        db.session.commit()

    def get_logs(self, user_id):
        return TimeLogModel.query.filter_by(user_id=user_id).all()
