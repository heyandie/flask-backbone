from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

from mongoengine import (
    connect,
    DateTimeField,
    StringField,
    Document
)

def init_db(app):
    connect(host=app.config['MONGODB_URI'])


class User(Document):
    created_at = DateTimeField(default=datetime.now, required=True)
    username = StringField(max_length=64, required=True)
    password_hash = StringField(max_length=128, required=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)


def generate_user():
    user = User(
        username = "heyandie",
        password_hash = generate_password_hash("heystar")
    )

    user.save()
