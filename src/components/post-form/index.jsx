import React from 'react';
import Spinner from '../spinner';

export const PostForm = ({
  author,
  setAuthor,
  message,
  setMessage,
  isSubmitting,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-field m2">
        <label className="m1" htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          rows={5}
          placeholder="Enter your message..."
          value={message}
          onChange={({ target }) => setMessage(target?.value)}
        />
      </div>

      <div className="input-field m2">
        <label className="m1" htmlFor="author">
          Author
        </label>

        <input
          id="author"
          placeholder="Enter the author name"
          value={author}
          onChange={({ target }) => setAuthor(target?.value)}
        />
      </div>

      <button className="spinner-button" disabled={isSubmitting} type="submit">
        {isSubmitting && <Spinner />}
        Submit
      </button>
    </form>
  );
};
