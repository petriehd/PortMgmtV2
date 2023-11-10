import Axios from 'axios'

const SERVER = "http://127.0.0.1:5000"

export function GetRequest(url, options) {
  // can use options for handling errors or return types
  Axios.get(SERVER + url)
  .then(function (response) {
    console.log(response.data)

    return response
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {
    // Need to look into use cases for this
  })
}

