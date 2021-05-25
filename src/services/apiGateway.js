const API_ROOT = 'https://hiring-example-25770.botics.co';

export const apiFetchWithBody = (url, method, data, key) => {
	const token = "f1091415f89f55cddde3ab1f42d54b720e303042"
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
				throw response;
      }
      return response;
    })
    .then(data => data.json())
};

export const apiFetch = (url, method, key) => {
	const token = "f1091415f89f55cddde3ab1f42d54b720e303042"
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
				throw response;
      }
      return response;
    })
    .then(data => data.json())
};
