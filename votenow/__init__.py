import flask

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# Read settings from config module (votenow/config.py)
app.config.from_object('votenow.config')

# Overlay settings read from file specified by environment variable. This is
# useful for using different on development and production machines.
#app.config.from_envvar('INSTA485_SETTINGS', silent=True)

# Tell our app about views and api. 
# Tell pylint and pycodestyle to ignore this coding style violation.
import votenow.views  # noqa: E402  pylint: disable=wrong-import-position
import votenow.api  # noqa: E402  pylint: disable=wrong-import-position