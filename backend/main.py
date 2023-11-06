from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

import src.Login as login

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "PUT", "DELETE"]}})

# Need to change below
client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')
db = client['PortMgmt']

@app.route("/login-submit", methods=['POST'])
def loginSubmit():
  # Check data is clean
  data = request.get_json()

  print(data)
  status = login.loginSubmitExecute(data['usernameInput'], data['passwordInput'])

  response_data = {"return": data}

  return jsonify(response_data)


@app.route("/test", methods=['POST'])
def test():

  data = {
     test: 'sup'
  }
  return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)