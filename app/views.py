from flask import Blueprint, render_template
from flask.ext.wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import Required

main = Blueprint('main', __name__, static_folder='static')

@main.route('/')
def index():
    return render_template('base.html')

@main.route('/admin')
def admin():
    return render_template('admin/index.html')

@main.app_errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
