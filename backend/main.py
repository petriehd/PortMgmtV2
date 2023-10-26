from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "PUT", "DELETE"]}})


@app.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

@app.route("/test", methods=['POST'])
def test():

  test = 1
  result = 1 *6
  return jsonify(result=result)


if __name__ == "__main__":
    app.run(debug=True)