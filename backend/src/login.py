import config as cfg

def loginSubmitExecute(username, password):
  coll = cfg.DB['users']
  data = coll.find_one({'username': username})
  if data is None: 
    return { 'error': 'User does not exist'}
  if password != data['password']: 
    return { 'error': 'password does not match'}

  return data

  
