from flask import Blueprint
from .responses import response
from .models.log import Log

api_v1 = Blueprint('api_v1', __name__, url_prefix='/api')


@api_v1.route('/logs', methods=['GET'])
def get_tasks():
    tasks = Log.query.all()
    return response([task.serialize() for task in tasks])