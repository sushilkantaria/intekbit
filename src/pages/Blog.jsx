import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/blog/BlogCard';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://intekbit-backend.onrender.com/api/blogs') // ✅ your actual backend route
      .then((res) => {
        if (res.data.success) {
          setBlogPosts(res.data.blogs);
        }
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      });
  }, []);

  return (
    <section className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Our Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, trends, and tips from the world of IT, AI, cloud, and
            design. Stay updated with our latest articles.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {blogPosts.map((post, idx) => (
              <div
                className="animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
                key={post._id}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
