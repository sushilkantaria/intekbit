import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="rounded-2xl backdrop-blur-lg backdrop-saturate-150 shadow-[0_2px_12px_0_rgba(30,58,138,0.18),0_1px_8px_0_rgba(136,19,55,0.13),0_1px_6px_0_rgba(202,138,4,0.10),0_1px_4px_0_rgba(6,78,59,0.10),inset_0_2px_16px_0_rgba(255,255,255,0.13),inset_0_0_12px_2px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.07)] overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300 min-h-[420px] max-h-[420px]">
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
        <p className="text-gray-300 mb-4 flex-1 overflow-hidden text-ellipsis">
          {post.description?.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}...
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
    </div>
  );
}

export default BlogCard;
