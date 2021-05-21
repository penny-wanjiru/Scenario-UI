import {apiFetch, apiFetchWithBody, apiFetchLogin} from './apiGateway.js';

export const getAllApps = (key) => {
  const url = '/api/v1/apps/';
  return apiFetch(url, 'get', key);
}

export const getApp = (id, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetch(url, 'get',key);
};

export const createApp = (data, key) => {
  const url = "/api/v1/apps/";
	return apiFetchWithBody(url, 'post', data, key);
};

export const updateApp = (id, data, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetchWithBody(url, 'put', data, key);
};

export const deleteApp = (id, data, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetch(url, 'delete', key);
};

export const getPlans = (id, data, key) => {
  const url = "/api​/v1​/plans​/";
	return apiFetch(url, 'get', key);
};

export const getPlan = (id, data, key) => {
  const url = `/api​/v1​/plans​/${id}/`;
	return apiFetch(url, 'get', key);
};

export const getSubscriptions = (id, data, key) => {
  const url = "/api/v1/subscriptions/";
	return apiFetch(url, 'get', key);
};

export const createSubscriptions = (id, data, key) => {
  const url = "/api/v1/subscriptions/";
	return apiFetch(url, 'post', key);
};

export const getSubscription = (id, data, key) => {
  const url = `/api/v1/subscriptions/${id}/`;
	return apiFetch(url, 'get', key);
};

export const editSubscription = (id, data, key) => {
  const url = `/api/v1/subscriptions/${id}/`;
	return apiFetch(url, 'put', key);
};
