import config as cfg

def loginSubmitExecute(email, password):
  coll = cfg.DB['users']
  data = coll.find_one({'email': email})
  if data is None: 
    return { 'error': 'User does not exist'}
  if password != data['password']: 
    return { 'error': 'password does not match'}

  return data


def signupSubmitExecute(firstname, lastname, email, password):
  coll = cfg.DB['users']
  # First check use doesnt exist
  existingUser = coll.find_one({'email': email})
  if existingUser is not None:
    return { 'error': 'User already exists under this email'}

  
