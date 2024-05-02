from flask import jsonify


def not_found():
    return jsonify({
        'success': False,
        'message': 'Not found'
    }), 404


def response(data):
    return jsonify({
        'success': True,
        'data': data
    }), 200