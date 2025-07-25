import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log('Fetching blog with ID:', id); // ⬅️ Check if this runs

    axios
      .get(`https://intekbit-backend.onrender.com/api/blog/${id}`)
      .then((res) => {
        console.log('Fetched blog:', res.data); // ⬅️ Check this too
        if (res.data.success) {
          setBlog(res.data.blog);
        }
      })
      .catch((err) => {
        console.error('Failed to load blog:', err);
      });
  }, [id]);

  if (!blog) {
    return <div className="p-10 text-white text-center">Loading blog...</div>;
  }

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] p-8 space-y-8 bg-[rgba(30,41,59,0.85)] backdrop-blur-xl ">
        <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          {blog.title}
        </h1>
        <p className="text-sm text-cyan-400 mb-6">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-100 h-100 object-cover mb-6"
        />
        <div
          className="prose prose-invert max-w-none text-lg text-gray-200"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </div>
    </div>
  );
}

export default BlogDetails;
