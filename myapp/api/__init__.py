from flask import Blueprint
from flask_restful import Api

from .authentication import LoginAPI

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

api.add_resource(LoginAPI, '/login', endpoint='login')
