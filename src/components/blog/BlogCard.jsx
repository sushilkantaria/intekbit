import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post._id}`}
      className="block rounded-2xl backdrop-blur-lg text-black backdrop-saturate-150 overflow-hidden hover:scale-[1.03] transition-transform duration-300 min-h-[300px] max-h-[420px]"
    >
      <div className="flex flex-col h-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full p-4 h-60 object-cover object-center"
        />
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-xl font-bold text-black mb-2 leading-tight">
            {post.title}
          </h2>
          <span className="text-xs text-blue-400 mb-2 font-semibold">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
          {/* Optional: Short description */}
          {/* <p className="text-sm text-gray-700 mb-4">
            {post.description?.replace(/(<([^>]+)>)/gi, '').slice(0, 100)}...
          </p> */}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
