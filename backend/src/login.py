
# Temp 
from pymongo import MongoClient

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')
db = client['main']
collectionName = db['users']

def loginSubmitExecute(username, password):
  # Can do any string manipulation here

  userObject = collectionName.find_one({'name': username})
  print(userObject)
  return userObject