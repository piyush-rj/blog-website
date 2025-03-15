import { SyncLoader } from "react-spinners";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div className="flex h-screen items-center justify-center">
      <SyncLoader />
    </div>;
  }

  return (
    <div className="bg-black h-screen w-full">
      <Appbar />
      <div className="flex justify-center pt-[100px] bg-black">
        <div className="">
          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name.toUpperCase()}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
