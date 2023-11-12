import Axios from 'axios'

const SERVER = "http://127.0.0.1:5000"

export async function GetRequest(url, options) {
  // can use options for handling errors or return types
  // try {
  //   const response = await Axios.get(SERVER + url);
  //   console.log(response.data)
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
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

