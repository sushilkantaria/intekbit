import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/blog/BlogCard';
import { Atom } from 'react-loading-indicators';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ui/ParticleBackground';

function LatestBlogCard({ post }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-black via-[#1a1b2f] to-[#5f27cd]
 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
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
        <div className="relative w-fit mt-auto">
          <Link
            to={`/blog/${post._id}`}
            className="peer inline-flex items-center relative px-4 py-2 text-white rounded-3xl transition shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] font-semibold text-center z-10 backdrop-blur-lg backdrop-saturate-150"
          >
            <span>Read More</span>
          </Link>
          <div className="absolute inset-0 opacity-0 peer-hover:opacity-100 rounded-3xl z-0 pointer-events-none shadow-[-4px_0_8px_4px_rgb(255,0,128),4px_0_8px_4px_rgb(0,98,255)] transition duration-800" />
        </div>
      </div>
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://intekbit-backend.onrender.com/api/blogs')
      .then((res) => {
        if (res.data.success) {
          setBlogPosts(res.data.blogs);
        }
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const latestPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  const restPosts = sortedPosts.length > 1 ? sortedPosts.slice(1) : [];

  return (
    <>
      <ParticleBackground />

      {/* Blog Title Section */}
      <section className="min-h-[50vh] py-16 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-black mb-4 leading-tight bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, trends, and tips from the world of IT, AI, cloud, and
            design. Stay updated with our latest articles.
            Insights, trends, and tips from the world of IT, AI, cloud, and
            design. Stay updated with our latest articles. 
          </p>
        </div>
      </section>

      {/* Loader */}
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full py-24">
          <Atom
            color={['#a21caf', '#06b6d4', '#2563eb', '#f472b6']}
            size={64}
            text=""
            speedPlus={-5}
          />
        </div>
      ) : (
        <>
          {/* Latest Blog Section (keep default bg) */}
          {latestPost && (
            <section className="py-0 px-6">
              <div className="max-w-7xl mx-auto">
                {/* <h2 className="text-4xl font-bold mb-10 text-left bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Featured Article
                </h2> */}
                <LatestBlogCard post={latestPost} />
              </div>
            </section>
          )}

          {/* Blog Grid Section with white background */}
          {restPosts.length > 0 && (
            <section className="py-20 px-6 mt-10 bg-white text-black">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Featured Article
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
            </section>
          )}
        </>
      )}
    </>
  );
}

export default Blog;
