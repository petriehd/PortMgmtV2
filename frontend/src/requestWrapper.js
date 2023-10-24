const FLASK_SERVER = "http://127.0.0.1:5000"

function SendRequest(url, method, body) {
  fetch(FLASK_SERVER + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( body ), 
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });
}

export default SendRequest