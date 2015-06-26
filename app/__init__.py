from flask import Flask
from config import config

app = Flask(__name__)
app.config.from_object(config)

# Initialize models
from . import models
models.init_db(app)

# Initialize views
from .views import main as main_blueprint
app.register_blueprint(main_blueprint)

from .api import api_bp as api_blueprint
app.register_blueprint(api_blueprint)
