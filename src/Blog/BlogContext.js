// BlogContext.js

import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogPosts] = useState([
    {
      id: 1,
      heading: 'Blog Post 1',
      image: 'https://www.pinkvilla.com/images/2023-07/1579297627_aashika-bhatia-1.jpg',
      description: 'This is the description of Blog Post 1.',
    },
    {
      id: 2,
      heading: 'Blog Post 2',
      image: 'https://www.pinkvilla.com/images/2023-07/1784153390_untitled-1000-x-1000px-11.jpg',
      description: 'This is the description of Blog Post 2.',
    },
    // Add more blog post data as needed
  ]);

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
