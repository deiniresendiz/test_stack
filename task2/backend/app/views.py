from flask import Blueprint
from .providers.provider import api_users, api_user, api_posts_by_user, api_photos_by_user
from .responses import response
from .models.log import Log

api_v1 = Blueprint('api_v1', __name__, url_prefix='/api')


@api_v1.route('/logs', methods=['GET'])
def get_logs():
    logs = Log.query.all()
    return response([log.serialize() for log in logs])


@api_v1.route('/users', methods=['GET'])
def get_users():
    users, status_code = api_users()
    Log.create('/users', 'GET', status_code)
    return users


@api_v1.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    user, status_code = api_user(user_id)
    Log.create('/user', 'GET', status_code)
    return user


@api_v1.route('/posts/user/<user_id>', methods=['GET'])
def get_posts_by_user(user_id):
    posts, status_code = api_posts_by_user(user_id)
    Log.create('/posts/user', 'GET', status_code)
    return posts


@api_v1.route('/photos/user/<user_id>', methods=['GET'])
def get_photos_by_user(user_id):
    photos, status_code = api_photos_by_user(user_id)
    Log.create('/posts/user', 'GET', status_code)
    return photos