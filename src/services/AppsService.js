import {apiFetch, apiFetchWithBody, apiFetchDel} from './ApiGateway.js';

export const getAllApps = (key) => {
  const url = '/api/v1/apps/';
  return apiFetch(url, 'get', key);
}

export const getApp = (id, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetch(url, 'get',key);
};

export const createApp = (data) => {
  const url = '/api/v1/apps/';
	return apiFetchWithBody(url, 'post', data);
};

export const updateApp = (id, data, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetchWithBody(url, 'put', data, key);
};

export const deleteApp = (id, key) => {
  const url = `/api/v1/apps/${id}/`;
	return apiFetch(url, 'delete', key);
};

export const getSubscriptionPlans = (key) => {
  const url = '/api/v1/plans/';
	return apiFetch(url, 'get', key);
};

export const getPlan = (id, key) => {
  const url = `/api​/v1​/plans​/${id}/`;
	return apiFetch(url, 'get', key);
};

export const getSubscriptions = (id, key) => {
  const url = '/api/v1/subscriptions/';
	return apiFetch(url, 'get', key);
};

export const createSubscription = (data) => {
  const url = '/api/v1/subscriptions/';
	return apiFetchWithBody(url, 'post', data);
};

export const getSubscription = (id, key) => {
  const url = `/api/v1/subscriptions/${id}/`;
	return apiFetch(url, 'get', key);
};

export const updateSubscription = (id, data, key) => {
  const url = `/api/v1/subscriptions/${id}/`;
	return apiFetchWithBody(url, 'put', data, key);
};
