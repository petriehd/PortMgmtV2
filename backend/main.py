from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "PUT", "DELETE"]}})

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')

@app.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

@app.route("/test", methods=['POST'])
def test():

  data = {
     test: 'sup'
  }
  return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)