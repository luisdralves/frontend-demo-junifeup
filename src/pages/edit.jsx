import { PostForm } from '../components/post-form';
import { editPost } from '../api/editPost';
import { getPosts } from '../api/getPosts';
import { useRequest } from '../hooks/use-request';
import { useMutation } from '../hooks/use-mutation';
import { useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Spinner from '../components/spinner';

const PostEdit = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const { postId } = useParams();
  const { data, isLoading } = useRequest(() => getPosts(postId));
  const post = useMemo(() => data?.data?.[0], [data]);
  const { mutate, isSubmitting } = useMutation(editPost, '/post/' + postId);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (author !== '' && message !== '') {
        mutate({ author, id: postId, message });
      }
    },
    [author, message]
  );

  useEffect(() => {
    setAuthor(post?.username ?? '');
    setMessage(post?.content ?? '');
  }, [post]);

  return (
    <div className="box">
      {isLoading && <Spinner />}

      {!isLoading &&
        (post ? (
          <>
            <h1>Edit post</h1>

            <PostForm
              author={author}
              setAuthor={setAuthor}
              message={message}
              setMessage={setMessage}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
            />
          </>
        ) : (
          <h3>Not found :(</h3>
        ))}
    </div>
  );
};

export default PostEdit;
