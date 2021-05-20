import {apiGet} from './apiGateway.js';

export const getAllApps = () => {
  const url = '/api/v1/apps/';
  return apiGet(url, 'get');
}

export const getApp = id => {
  const url = `/api/v1/apps/${id}/`;
	return apiGet(url, 'get');
};

export const createApp = data => {
  const url = "/api/v1/apps/";
	return apiGet(url, 'post', data);
};

export const updateApp = (id, data) => {
  const url = `/api/v1/apps/${id}/`;
	return apiGet(url, 'put', data);

};

export const deleteApp = (id, data) => {
  const url = `/api/v1/apps/${id}/`;
	return apiGet(url, 'get', data);
};

export const patchApp = (id, data) => {
  const url = `/api/v1/apps/${id}/`;
	return apiGet(url, 'get', data);
};
