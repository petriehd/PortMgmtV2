import config as cfg
import yfinance as yf
import pandas as pd

def isValidTicker(ticker):
  # Doesnt work
  try:
    yf.download(ticker)
    return True
  except:
    return False  


def getUserPortfolio(userId):
  coll = cfg.DB['portfolios']
  data = coll.find_one({'userId': int(userId)})

  return data


def addStockToPortfolio(userId, ticker, startDate, endDate):
  if not isValidTicker(ticker):
    return { 'returnCode': 1 }
  
  stockData = yf.download(ticker, start=startDate, end=endDate)
  portfolio = getUserPortfolio(userId)
  newStockObject = {
    'name': 'Macquarie',
    'ticker': ticker,
    'data': stockData.to_json()
  }
  tempAssets = portfolio['assets']
  tempAssets.append(newStockObject)

  coll = cfg.DB['portfolios']
  coll.update_one({'userId': int(userId)}, { '$set': {'assets': tempAssets} })
  
  
  


