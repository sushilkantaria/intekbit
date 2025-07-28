import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HiArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('Fetching blog with ID:', id); // ⬅️ Check if this runs

    axios
      .get(`https://intekbit-backend.onrender.com/api/blog/${id}`)
      .then((res) => {
        // console.log('Fetched blog:', res.data); // ⬅️ Check this too
        if (res.data.success) {
          setBlog(res.data.blog);
        }
      })
      .catch((err) => {
        console.error('Failed to load blog:', err);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-24">
        <Atom
          color={['#a21caf', '#06b6d4', '#2563eb', '#f472b6']}
          size={64}
          text=""
          speedPlus={-5}
        />
        {/* <span className="text-lg text-gray-400 mt-6">Loading blog...</span> */}
      </div>
    );
  }

  return (
    <section className="min-h-screen flex mt-20 mb-10">
      <div className="max-w-7xl w-full mx-auto rounded-3xl p-8 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] backdrop-blur-lg backdrop-saturate-150">
        <button
          className="mb-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold focus:outline-none"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft className="w-6 h-6" />
          {/* <span>Back</span> */}
        </button>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 via-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
              {blog.title}
            </h1>
            <p className="text-sm text-cyan-400 mb-6">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div className="prose prose-invert max-w-none text-[1.15rem] leading-relaxed text-gray-100 md:text-[1.25rem] md:leading-8 tracking-wide">
              {blog.description}
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-[400px] md:ml-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
