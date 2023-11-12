import Axios from 'axios'

const SERVER = "http://127.0.0.1:5000"

export async function GetRequest(url, options) {
  let data

  await Axios.get(SERVER + url)
  .then(function (response) {
    console.log(response.data)

    data = response.data
  })
  .catch(function (error) {
    console.log(error)
  })

  return data;
}

