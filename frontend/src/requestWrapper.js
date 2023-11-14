import Axios from 'axios'

const SERVER = "http://127.0.0.1:5000"

export async function requestWrapperGet(url) {
  let data;

  try {
    data = await Axios.get(SERVER + url)
  } catch (error) {
    // Handle errors
  }

  return data
}

