import { Link } from 'react-router-dom';
import { getPosts } from '../api/getPosts';
import { useRequest } from '../hooks/use-request';
import Post from '../components/post';
import React, { useCallback, useMemo, useState } from 'react';
import Spinner from '../components/spinner';

const Feed = () => {
  const [readPosts, setReadPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useRequest(getPosts);
  const handleMarkAsRead = useCallback((postIndex) => {
    setReadPosts((current) => [...current, postIndex]);
  }, []);

  const totalReadPosts = useMemo(() => readPosts?.length, [readPosts]);
  const filteredPosts = useMemo(() => {
    if (searchValue === '') {
      return data?.data;
    }

    return data?.data.filter((post) =>
      post.userName.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div className="box">
      <h1>Feed</h1>

      <input
        className="m2"
        placeholder="Filter by author name"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target?.value)}
      />

      <div className="results">
        {isLoading && <Spinner />}

        {!isLoading && filteredPosts?.length > 0 && (
          <>
            <div>
              <p>{`Total posts: ${data?.data?.length}`}</p>
              <p>{`Read posts: ${totalReadPosts}`}</p>
            </div>

            {filteredPosts.map((post, index) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <Post
                  isRead={readPosts.includes(index)}
                  onMarkAsRead={() => handleMarkAsRead(index)}
                  {...post}
                >
                  {post.content}
                </Post>
              </Link>
            ))}
          </>
        )}

        {!isLoading && !filteredPosts?.length && <h3>No results</h3>}
      </div>
    </div>
  );
};

export default Feed;
