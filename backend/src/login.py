import config as cfg

def loginSubmitExecute(username, password):
  coll = cfg.DB['users']
  data = coll.find_one({'username': username})
  print(data)

  userObject = {
    'userId': 1,
    'username': username
  }
  return userObject

  
