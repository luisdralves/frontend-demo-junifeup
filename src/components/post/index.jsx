import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import './styles.css';
import { useMutation } from '../../hooks/use-mutation';
import { deletePost } from '../../api/deletePost';
import Spinner from '../spinner';

const Post = ({
  children,
  createdAt,
  id,
  isDetailPage,
  isRead,
  onMarkAsRead,
  username,
}) => {
  const handleMarkAsRead = useCallback(
    (event) => {
      event.preventDefault();

      if (!isRead && !isDetailPage) {
        onMarkAsRead();
      }
    },
    [isRead, onMarkAsRead]
  );

  const { isLoading, mutate } = useMutation(deletePost, '/feed');

  return (
    <div className={`post ${isDetailPage ? 'bigger' : ''}`}>
      <div className="content">{children}</div>

      <div className="author">{`${username} @ ${createdAt}`}</div>

      <div className="actions">
        {!isDetailPage ? (
          <div className="read" onClick={handleMarkAsRead}>
            {isRead ? 'Read' : 'Not read'}
          </div>
        ) : (
          <>
            <button
              disabled={isLoading}
              onClick={() => mutate({ id })}
              className="spinner-button danger"
            >
              {isLoading && <Spinner />}
              Delete
            </button>

            <Link to={'/edit-post/' + id}>
              <button>Edit</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
