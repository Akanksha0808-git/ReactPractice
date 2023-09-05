// Box.js

import React from 'react';
import { BlogContext } from './BlogContext';

const Box = () => {
  return (
    <BlogContext.Consumer>
      {({ blogPosts }) => (
        <div>
          {blogPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.heading}</h2>
              <img src={post.image} alt={post.heading} />
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </BlogContext.Consumer>
  );
};

export default Box;
