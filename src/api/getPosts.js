import { apiBaseUrl } from '../config';

export const getPosts = (id = '') => {
  return fetch(apiBaseUrl + '/posts/' + id);
};
