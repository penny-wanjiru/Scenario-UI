const API_ROOT = 'https://hiring-example-25770.botics.co';

export const apiFetchWithBody = (url, method, data, key) => {
	const headers = {
		"Content-type": "application/json",
		"Authorization": `Token ${key}`,
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

export const apiFetch = (url, method, key) => {
	const headers = {
		"Content-type": "application/json",
		"Authorization": `Token ${key}`,
	}

  return fetch(API_ROOT + url, {
			method: method,
			headers: headers,
		})
    .then(response => {
      if (!response.ok) {
        console.log("Network failure")
      }
			console.log("getting here", response)
      return response;
    })
    .then(data => data.json())
}
