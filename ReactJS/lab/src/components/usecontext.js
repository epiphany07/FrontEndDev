import { useContext } from "react";
// import "./styles.css";
import React  from 'react';
// import BlogContextDemo from ‘BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext  = React.createContext(blogInfo);

export default function USECONXT() {
  return (
    <div className="App">
      <div>
      <h1>Hello KP</h1>
      <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />
      </BlogContext.Provider>
      </div>
    </div>
  );
}
function BlogContextDemo() {
    const binfo = useContext(BlogContext);
    return (
        <div>
         <p>Topic: {binfo.React.post}</p>
         <p>Author: {binfo.React.author}</p>
        </div>
    );
  }
  
// export  BlogContextDemo;