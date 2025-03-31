import { SyncLoader } from "react-spinners";
import { useState } from "react";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <SyncLoader />
      </div>
    );
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center">
      <Appbar />

      <div className="w-full mt-22 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 border rounded bg-[#e2e2e2] text-black"
        />
      </div>

      <div className="w-full max-w-screen-md mt-6 flex flex-col items-center">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author?.name.toUpperCase()}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              authorId={blog.authorId}
              userId={blog.authorId} // Ensure this is passed
            />
          ))
        ) : (
          <p className="text-gray-400 text-center mt-4">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
