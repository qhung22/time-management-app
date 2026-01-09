from flask import Blueprint, jsonify
from repositories.sql_repo import SQLRepository
from domain.services import start_tracking, stop_tracking
from domain.models import TimeLog

api = Blueprint("api", __name__)
repo = SQLRepository()

@api.route("/start/<int:user_id>", methods=["POST"])
def start(user_id):
    user = repo.get_user(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    start_tracking(user)
    repo.save_user(user)
    return jsonify({"message": "Tracking started"})


@api.route("/stop/<int:user_id>", methods=["POST"])
def stop(user_id):
    user = repo.get_user(user_id)
    start, end, duration = stop_tracking(user)

    log = TimeLog(user.id, start, end, duration)
    repo.add_time_log(log)
    repo.save_user(user)

    return jsonify({"duration": str(duration)})


@api.route("/logs/<int:user_id>", methods=["GET"])
def logs(user_id):
    logs = repo.get_logs(user_id)
    return jsonify([
        {
            "start": str(l.start_time),
            "end": str(l.end_time),
            "duration": l.duration
        } for l in logs
    ])
