from flask import Blueprint, request, jsonify
from api.db import exec_to_json
from api import views


def create_blueprint():
    # pylint: disable=unused-variable
    bp = Blueprint("api", __name__)

    @bp.route("/<slug>/<op>", methods=["GET", "POST"])
    def handle_slug_view(slug, op):
        kwargs = request.args.to_dict()
        kwargs.pop("apitoken", None)
        if request.method == "POST":
            kwargs.update(request.json)
        return jsonify(views.handle_slug_view(request.method, slug, op, kwargs=kwargs))

    return bp
