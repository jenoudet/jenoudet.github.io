"""View for the main page of the website."""

from flask import render_template
import ArthurJenoudetWebsite

@ArthurJenoudetWebsite.app.route('/', methods=['GET'])
def index():
    """Renders main page of website."""
    return render_template('index.html')
