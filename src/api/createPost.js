import { apiBaseUrl } from '../config';

export const createPost = ({ author, message }) => {
  return fetch(apiBaseUrl + '/posts', {
    body: JSON.stringify({ username: author, content: message }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
};
