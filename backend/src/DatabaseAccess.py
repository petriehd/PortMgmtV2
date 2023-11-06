from pymongo import MongoClient

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/')
db = client['PortMgmt']
collectionName = db['main']

def queryDatabase(type, query):
  try:
    if type == 'F':
      collectionName.find(query)
  except:
    return {'error': 1}
