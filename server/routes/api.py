from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/photos')
def get_photo_data():
    return jsonify({'msg': 'not implemented yet'})
