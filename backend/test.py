from pymongo import MongoClient

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/?retryWrites=true&w=majority')
db = client["main"]
collection = db["portfolios"]

collection.insert_one({
  '_id': 0,
  'name': 'Macquarie',
  'ticker': 'MQG'
})