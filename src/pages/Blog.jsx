import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/blog/BlogCard';

function LatestBlogCard({ post }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#1a2980] rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
      {/* Text left */}
      <div className="flex-1 p-8 flex flex-col items-start justify-center">
        <span className="text-xs font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <h2 className="text-3xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
          {post.title}
        </h2>
        <p className="text-gray-200 mb-6 text-lg">
          {post.description?.replace(/(<([^>]+)>)/gi, '').slice(0, 180)}...
        </p>
        <a
          href={`/blog/${post._id}`}
          className="inline-flex items-center px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300 border-2 border-transparent hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <span className="drop-shadow">Read More</span>
        </a>
      </div>
      {/* Image right */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-w-lg h-72 object-cover object-center"
        />
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

  // Sort by createdAt descending (latest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const latestPost = sortedPosts[0];
  const restPosts = sortedPosts.slice(1);

  return (
    <section className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black mb-4 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, trends, and tips from the world of IT, AI, cloud, and
            design. Stay updated with our latest articles.
          </p>
        </div>
        {/* Latest blog as separate full-width card */}
        {latestPost && (
          <div className="w-full mb-12 animate-fadeIn">
            <LatestBlogCard post={latestPost} />
          </div>
        )}
        {/* Other blogs in grid */}
        <div className="w-full flex justify-center">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {restPosts.map((post, idx) => (
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
