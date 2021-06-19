import axios from 'axios';

export const ENDPOINTS = {
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REGISTER: 'user/register',
};

const baseURL = 'http://example-api-endpoint:3040/v2/';
export const createEndpointsAPI = (endpoint) => {
  let url = baseURL + endpoint + '/';
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newData) => axios.post(url, newData),
    update: (updateData, id) => axios.put(url + id, updateData),
    delete: (id) => axios.delete(url + id),
  };
};
