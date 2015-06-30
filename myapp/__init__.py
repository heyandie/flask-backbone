from flask import Flask
from config import config
import os

app = Flask(__name__)
app.config.from_object(config)

@app.template_filter('autoversion')
def autoversion_filter(filename):
  # determining fullpath might be project specific
  fullpath = os.path.join('some_app/', filename[1:])
  try:
      timestamp = str(os.path.getmtime(fullpath))
  except OSError:
      return filename
  newfilename = "{0}?v={1}".format(filename, timestamp)
  return newfilename

# Initialize models
from . import models
models.init_db(app)

# Initialize views
from .views import main as main_blueprint
app.register_blueprint(main_blueprint)

from .api import api_bp as api_blueprint
app.register_blueprint(api_blueprint)
