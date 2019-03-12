from flask import *
from flask_restful import *
from flask_restful import reqparse
# from flask import jsonify
# from flask.ext.jsonpify import jsonify
from product import ProductApi

PORT = '5000'
app = Flask(__name__)
api = Api(app)

"""Router"""
"""
Test: send request to: using Postman
http://localhost:5000/products
"""
api.add_resource(ProductApi, "/products")
app.run(port=PORT, debug=True)