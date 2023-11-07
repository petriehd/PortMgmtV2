from pymongo import MongoClient

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')
db = client['main']
collectionName = db['users']

def queryDatabase(type, query):
  try:
    if type == 'F':
      user = collectionName.find_one(query)
      if user == None:
        return {'error': 'user not found'}
      else:
        return {user}
    
  except:
    return {'error': 'server issue'}
