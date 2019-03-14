from flask import *
from flask_restful import *
from flask_restful import reqparse
from flask import jsonify
from database import Database
# from Database import *

class ProductApi(Resource):
    
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('page_number', type=int)
        parser.add_argument('number_of_records', type=int)
        args = parser.parse_args()
        print("args ="+ str(args))
        products = {"products":[{"name": "iphone X", "year": 2017}, {"name": "iphone 5", "year": 2015}]}
        return jsonify(products)
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('product_name')
        parser.add_argument('product_year', type=int)
        args = parser.parse_args()
        print("args ="+ str(args))
        # database = Database()
        result, message = Database.get_instance().insert_new_product(args['product_name'], args['product_year'])
        # results = {"results": "ok", "message":"insert new product successfully"}
        return jsonify({"result": result, "message": message})

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('product_id', type=int)
        parser.add_argument('product_name')
        parser.add_argument('product_year', type=int)
        args = parser.parse_args()
        print("args PUT ="+ str(args))
        results = {"results": "ok", "message":"update product successfully"}
        return jsonify(results)

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('product_id', type=int)
        args = parser.parse_args()
        print("args DELETE ="+ str(args))
        results = {"results": "ok", "message":"update product successfully"}
        return jsonify(results)