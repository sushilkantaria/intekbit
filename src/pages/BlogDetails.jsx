import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

useEffect(() => {
  console.log("Fetching blog with ID:", id); // ⬅️ Check if this runs

  axios
    .get(`http://localhost:5000/api/blog/${id}`)
    .then((res) => {
      console.log("Fetched blog:", res.data); // ⬅️ Check this too
      if (res.data.success) {
        setBlog(res.data.blog);
      }
    })
    .catch((err) => {
      console.error("Failed to load blog:", err);
    });
}, [id]);


  if (!blog) {
    return <div className="p-10 text-white text-center">Loading blog...</div>;
  }

  return (
    <div className="min-h-screen py-12 px-6 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-blue-300 mb-6">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <div
        className="prose prose-invert max-w-none text-lg"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></div>
    </div>
  );
}

export default BlogDetails;
