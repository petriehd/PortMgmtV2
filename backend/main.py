from flask import Flask, request, jsonify
from flask_cors import CORS
import json

import src.login as login
import src.portfolio as port

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "methods": ["GET", "POST", "PUT", "DELETE"]}}, supports_credentials=True)


@app.route("/login-submit", methods=['POST'])
def loginSubmit():
  data = request.get_json()
  status = login.loginSubmitExecute(data['email'], data['password'])
  if 'error' in status:
    return status, 401

  return status, 200

@app.route("/signup-submit", methods=["POST"])
def signupSubmit():
   data = request.get_json()
   status = login.signupSubmitExecute( data['first'], 
      data['last'], 
      data['email'], 
      data['password']
      )
   if 'error' in status:
     return status, 400
   
   return status, 200

@app.route("/get-portfolio/<userId>", methods=['GET'])
def getUserPortfolio(userId):
  
  data = port.getPortfolio(userId)
  
  return jsonify(data)


@app.route("/download-stock/<userId>", methods=['POST'])
def addStockToPortfolio(userId):
   data = request.get_json()
   print(data)
  
   port.addStockToPortfolio(userId, data['tick'], data['startDate'], data['endDate'])

   return jsonify(data)

 

  


if __name__ == "__main__":
    app.run(debug=True)