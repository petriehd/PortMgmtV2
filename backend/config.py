from pymongo import MongoClient

CLIENT = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/?retryWrites=true&w=majority')
DB = CLIENT["main"]