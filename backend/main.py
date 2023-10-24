from flask import Flask, request
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.logger.setLevel(logging.DEBUG)  # Set the minimum log level to DEBUG

# Add a custom log handler, such as a file handler
file_handler = logging.FileHandler('app.log')
file_handler.setLevel(logging.DEBUG)  # Set the log level for the file handler
app.logger.addHandler(file_handler)

@app.route("/")
def hello_world():
  return "<p>Hello, World!</p>"

@app.route("/test", methods=['POST'])
def test():
  data = request.get_json()
  app.logger.debug('made it' + data)


if __name__ == "__main__":
    app.run(debug=True)