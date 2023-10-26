const FLASK_SERVER = "http://127.0.0.1:5000"

async function SendRequest(url, method, body) {
  fetch(FLASK_SERVER + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( body ), 
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch((error) => {
    console.log('Error:', error);
    throw error; // Re-throw the error to be caught by the calling code
  });
}

export default SendRequest