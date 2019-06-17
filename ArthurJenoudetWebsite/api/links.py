"""
Api that returns the required links for the website.
Acts as a database for the website.
"""

import flask
import ArthurJenoudetWebsite

@ArthurJenoudetWebsite.app.route("/menulinks", methods=['GET'])
def menulinks():
    return ({
        [
            {
                "name": "Arthur Jenoudet",
                "url": "/"
            },
            {
                "name": "link1",
                "url": "/#link1"
            },
            {
                "name": "link2",
                "url": "/#link2"
            }
        ]
    })
