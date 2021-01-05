import React from 'react';

import {gql, useLazyQuery, useQuery} from '@apollo/client';

function PostsOverview(props) {
  const GET_ALL_POSTS = gql`
      query Query($nrPosts: Int!) {
        allPosts(count: $nrPosts) {
          id
          title
          createdAt 
      }
    }
    `;

  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: { nrPosts: props.postsToFetch },
  });

  function showPosts() {
    console.log(data.allPosts)
  }

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data && data.allPosts && showPosts()}
    </div>
  )
}

export default PostsOverview;