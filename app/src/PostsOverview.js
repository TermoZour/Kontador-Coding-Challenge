import React from 'react';

import {gql, useQuery} from '@apollo/client';
import PostsGraph from "./PostsGraph";

function PostsOverview(props) {
  const GET_ALL_POSTS = gql`
      query Query($nrPosts: Int!) {
        allPosts(count: $nrPosts) {
          createdAt 
      }
    }
    `;

  const {loading, error, data} = useQuery(GET_ALL_POSTS, {
    variables: {nrPosts: props.postsToFetch},
  });

  const postsPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  function showPosts() {
    // go through each post from the query and count it
    for (const post of data.allPosts) {
      const date = new Date(parseInt(post.createdAt))
      const year = date.getFullYear()

      if (year === 2019) {
        const month = date.getMonth()
        postsPerMonth[month] += 1;
      }
    }

    return <PostsGraph d3_data={postsPerMonth}/>
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