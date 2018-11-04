"""REST API for voter info."""
import flask
import votenow
import requests


@votenow.app.route('/api/v1/voterinfo/',
                    methods=["GET"])
def get_voter_info():
    """Return voter information on address."""

    context = {}
    address = flask.request.args.get('address')

    # URL
    url = "https://www.googleapis.com/civicinfo/v2/voterinfo"
    url += "?key=AIzaSyAY9DEXPtO4qJJRzGTun12HnpQ0dS8z8V8"
    url += "&address="
    url += address

    r = requests.get(url)

    context = r.json()

    return flask.jsonify(**context)
