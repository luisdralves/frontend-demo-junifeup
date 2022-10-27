import { PostForm } from '../components/post-form';
import { createPost } from '../api/createPost';
import { useMutation } from '../hooks/use-mutation';
import React, { useCallback, useState } from 'react';

const Share = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const { mutate, isSubmitting } = useMutation(createPost, '/feed');
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (author !== '' && message !== '') {
        mutate({ author, message });
      }
    },
    [author, message]
  );

  return (
    <div className="box">
      <h1>Share a thought</h1>

      <PostForm
        author={author}
        setAuthor={setAuthor}
        message={message}
        setMessage={setMessage}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Share;
