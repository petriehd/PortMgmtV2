from pymongo import MongoClient
import yfinance as yf

client = MongoClient('mongodb+srv://jamesppetrie:ryGjbnNhJLbJ8CBf@portmgmttesting.bxlefpc.mongodb.net/?retryWrites=true&w=majority')
db = client["main"]
collection = db["portfolios"]

test = yf.Ticker('MSFT')
print(test.fast_info)


