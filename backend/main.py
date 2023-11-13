from flask import Flask, request, jsonify
from flask_cors import CORS
import json

import src.login as login
import src.portfolio as port

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "PUT", "DELETE"]}})


@app.route("/login-submit", methods=['POST'])
def loginSubmit():
  # Check data is clean
  data = request.get_json()

  status = login.loginSubmitExecute(data['usernameInput'], data['passwordInput'])

  return jsonify(status)


@app.route("/get-portfolio/<id>", methods=['GET'])
def getUserPortfolio(id):
  
  data = port.getUserPortfolio(id)
  
  return jsonify(data)

 

  


if __name__ == "__main__":
    app.run(debug=True)