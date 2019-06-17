"""
Api that returns the required links for the website.
Acts as a database for the website.
"""

import flask
import ArthurJenoudetWebsite

@ArthurJenoudetWebsite.app.route("/menulinks/", methods=['GET'])
def menulinks():
    context = ({
        "links" : [
            {
                "name": "Arthur Jenoudet",
                "url": "/"
            },
            {
                "name": "link01",
                "url": "/#link1"
            },
            {
                "name": "link02",
                "url": "/#link2"
            }
        ]
    })

    return flask.jsonify(**context)
