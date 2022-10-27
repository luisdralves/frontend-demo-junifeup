import { getPosts } from '../api/getPosts';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useRequest } from '../hooks/use-request';
import Post from '../components/post';
import React from 'react';
import Spinner from '../components/spinner';

const PostDetails = () => {
  const { postId } = useParams();
  const { data, isLoading } = useRequest(() => getPosts(postId));
  const post = useMemo(() => data?.data?.[0], [data]);

  return (
    <div className="box">
      {isLoading && <Spinner />}

      {!isLoading &&
        (post ? (
          <>
            <h1>Post</h1>

            <Post {...post} isDetailPage>
              {post.content}
            </Post>
          </>
        ) : (
          <h3>Not found :(</h3>
        ))}
    </div>
  );
};

export default PostDetails;
