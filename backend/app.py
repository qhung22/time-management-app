from flask import Flask
from database.models import db
from api.routes import api

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///time.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
app.register_blueprint(api, url_prefix="/api")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
