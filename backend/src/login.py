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
  
  currUserId = getUserIdCounter();
  newUserObject = {
    '_id': currUserId,
    'email': email,
    'firstName': firstname,
    'lastName': lastname,
    'password': password
  }
  # Check status is all done
  status = coll.insert_one(newUserObject)
  # Only update below is status is all successful
  updateUserIdCounter(currUserId)

  return { 'success': 'true'}
  

def getUserIdCounter():
  coll = cfg.DB['counters']
  data = coll.find_one({"_id": "userid"})
  
  return int(data["seq"])


def updateUserIdCounter(currIdCount):
  coll = cfg.DB['counters']
  # Check whether update was successful using write concern return
  coll.update_one({"_id": "userid"}, { '$set': { 'seq': int(currIdCount + 1)} })

  return True


  
