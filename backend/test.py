from pymongo import MongoClient

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/?retryWrites=true&w=majority')
db = client["main"]
collection = db["portfolios"]



data = collection.find_one({'userId': 1})

print(data)

