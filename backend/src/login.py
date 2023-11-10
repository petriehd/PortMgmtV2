import src.database as db


def loginSubmitExecute(username, password):
  # Can do any string manipulation here

  userObject = {
    'userId': 1,
    'username': username
  }
  return userObject
  # userObject = db.queryDatabase('F', {'name': username})
  # if 'error' in userObject:
  #   # Need return if server error occured
  #   return {
  #     'errorCode': 1,
  #     'error': 'Username not found'
  #   }
  # elif userObject['password'] != password:
  #   return {
  #     'errorCode': 2,
  #     'error': 'Password is incorrect'   
  #   }
  # else:
  
