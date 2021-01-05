import React from 'react';

import {gql, useQuery} from '@apollo/client';

function PostsOverview(props) {
  const GET_ALL_POSTS = gql`
      query Query($nrPosts: Int!) {
        allPosts(count: $nrPosts) {
          createdAt 
      }
    }
    `;

  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: { nrPosts: props.postsToFetch },
  });

  const postsPerMonth = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0}

  function showPosts() {
    // go through each post from the query and count it
    for (const post of data.allPosts) {
      const date = new Date(parseInt(post.createdAt))
      const month = date.getMonth()

      postsPerMonth[month]+=1;
    }

    // make graph and return it
    // return <graph>

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