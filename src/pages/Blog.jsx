import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="rounded-2xl backdrop-blur-lg backdrop-saturate-150 shadow-[0_4px_32px_0_rgba(30,58,138,0.10),inset_0_1px_16px_0_rgba(255,255,255,0.18)] overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300 min-h-[420px] max-h-[420px]">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs text-blue-400 mb-2 font-semibold">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <h2 className="text-xl font-bold text-white mb-2 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-300 mb-4 flex-1">
          {post.description?.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}...
        </p>
        <div className="relative w-fit mt-auto">
          <Link
  to={`/blog/${post._id}`}
  className="peer inline-flex items-center relative px-4 py-2 text-white rounded-3xl transition shadow-[...your-shadow] font-semibold text-center z-10 backdrop-blur-lg backdrop-saturate-150"
>
  <span>Read More</span>
</Link>
          <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)] transition duration-800" />
        </div>
      </div>
    </div>
  );
}

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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">
            Our Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, trends, and tips from the world of IT, AI, cloud, and design. Stay updated with our latest articles.
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
