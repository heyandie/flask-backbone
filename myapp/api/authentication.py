from flask import abort, jsonify, g
from flask_restful import Resource, reqparse
from flask.ext.httpauth import HTTPBasicAuth
from ..models import User
from mongoengine import DoesNotExist

auth = HTTPBasicAuth()

parser = reqparse.RequestParser()
class LoginAPI(Resource):

    def post(self):

        parser.add_argument('username', required=True)
        parser.add_argument('password', required=True)
        args = parser.parse_args()

        username = args['username']
        password = args['password']

        try:
            if verify_password(username, password):
                return jsonify(user=g.current_user.username)
            else:
                response = jsonify({'error': 'Unauthorized'})
                response.status_code = 401
                return response

        except(DoesNotExist):
            abort(404)

class LogoutAPI(Resource):

    def get(self):
        pass


@auth.verify_password
def verify_password(username, password):
    if username == '':
        return False

    user = User.objects(username=username).first()

    if not user:
        return False

    g.current_user = user
    g.token_used = False
    return user.verify_password(password)
