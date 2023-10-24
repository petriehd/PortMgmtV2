from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

@app.route("/test")
def test():
  return "<p>Hello</p>"