import config as cfg

def getUserPortfolio(userId):
  
  coll = cfg.DB['portfolios']
  data = coll.find_one({'userId': int(userId)})

  return data


