import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <h2>Latest Blog Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="blog-card">
            <h5>{post.title}</h5>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Blog;


// import React from "react";

// const Blog = () => {
//   return <h1>Blog Page - Members Only</h1>;
// };

// export default Blog;
