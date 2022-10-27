import { apiBaseUrl } from '../config';

export const deletePost = ({ id }) => {
  return fetch(`${apiBaseUrl}/posts/${id}`, {
    method: 'DELETE',
  });
};
