from pymongo import MongoClient
import json

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')
db = client.main
collectionName = db['users']

def queryDatabase(collection, type, query):
  # Needs to be rewritten
  try:
    if type == 'F':
      user = collectionName.find_one(query)
      if user == None:
        return {'error': 'user not found'}
      else:
        return {user}
    
  except:
    return {'error': 'server issue'}
  
def writeDatabase(collection, type, query):
  # type used for options
  coll = db[collection]
  coll.insert_one(json.dumps(query))

  return
