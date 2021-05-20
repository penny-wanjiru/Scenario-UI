const API_ROOT = 'https://hiring-example-25770.botics.co/';

export const apiGet = (url, method, data) => {
	const token = "59ed93513ebf146e3016250012ee92b37e804b2a"
	const headers = {
		"Content-type": "application/json",
		"Authorization": `Token ${token}`,
	}

  return fetch(API_ROOT + url, {
			method: method,
			headers: headers,
			body: JSON.stringify(data)
		})
    .then(response => {
      if (!response.ok) {
        console.log("Network failure")
      }
      return response;
    })
    .then(data => data.json())
}
