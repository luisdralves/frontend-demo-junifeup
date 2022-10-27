import { apiBaseUrl } from '../config';

export const editPost = ({ author, id, message }) => {
  return fetch(`${apiBaseUrl}/posts/${id}`, {
    body: JSON.stringify({ username: author, content: message }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
  });
};
