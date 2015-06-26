import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    DEBUG = False
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY', 'Is not it amazing?')


class DevelopmentConfig(Config):
    DEBUG = True
    MONGODB_URI = os.getenv('MONGODB_URI', 'mongodb://localhost/heyandie')


env = os.getenv('FLASK_CONFIG', None)
if env == 'production':
    config = DevelopmentConfig
elif env == 'testing':
    config = DevelopmentConfig
else:
    config = DevelopmentConfig
