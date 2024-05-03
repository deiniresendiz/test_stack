from flask import Flask
from flask_cors import CORS
from .models import db
from .models.log import Log
from .views import api_v1

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})


def create_app(environment):
    app.config.from_object(environment)

    app.register_blueprint(api_v1)

    with app.app_context():
        db.init_app(app)
        db.create_all()

    return app