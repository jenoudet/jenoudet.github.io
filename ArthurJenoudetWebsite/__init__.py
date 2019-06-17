"""Package initializer."""

import flask

app = flask.Flask(__name__)

app.config.from_object('ArthurJenoudetWebsite.config')

app.config.from_envvar('ARTHURJENOUDETWEBSITE_SETTINGS', silent=True)

import ArthurJenoudetWebsite.views
import ArthurJenoudetWebsite.api
