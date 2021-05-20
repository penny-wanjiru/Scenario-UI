import http from "../http/http-common";

const getUser = () => {
  return http.get("/rest-auth/user/");
};

const getAllApps = () => {
  return http.get("/api/v1/apps/");
};

const getApp = id => {
  return http.get(`/api/v1/apps/${id}/`);
};

const createApp = data => {
  return http.post("/api/v1/apps/", data);
};

const updateApp = (id, data) => {
  return http.put(`/api/v1/apps/${id}/`, data);
};

const patchApp = (id, data) => {
  return http.put(`/api/v1/apps/${id}/`, data);
};

export default {
  getAllApps,
  getApp,
  createApp,
  updateApp,
	patchApp
};
