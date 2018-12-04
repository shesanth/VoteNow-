"""REST API for voter info."""
import flask
import votenow
import requests


@votenow.app.route('/api/v1/repinfo/',
                    methods=["GET"])
def get_rep_info():
    """Return voter information on address."""

    context = {}
    address = flask.request.args.get('address')

    # URL
    url = "https://www.googleapis.com/civicinfo/v2/representatives"
    url += "?key=AIzaSyAY9DEXPtO4qJJRzGTun12HnpQ0dS8z8V8"
    url += "&address="
    url += address

    r = requests.get(url)

    context = r.json()

    return flask.jsonify(**context)
