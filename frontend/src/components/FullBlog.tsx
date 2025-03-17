import Appbar from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {

  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <div className="bg-black h-screen w-full">
      <Appbar />
      <div className="flex justify-center pt-[100px]">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl text-[#d5d5d5] font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-600 pt-2">
              Posted on {formattedDate}
            </div>

            <div
              className="pt-4 text-2xl text-[#bfbfbf]"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br>") }}
            />


          </div>
          <div className="col-span-4 pl-5 text-white">
            <span className="font-mono">Author</span>
            <div className="flex-col">
              <div className="flex items-center text-[#afafaf]">
                <Avatar name={blog.author?.name || "Anonymous"} size={8} />
                <div className="text-2xl font-bold pl-2 flex items-center pt-1 tracking-wide">
                  {(blog.author?.name || "Anonymous").toUpperCase()}
                </div>
              </div>
              <div className="pt-2 text-[18px] text-slate-400 font-mono leading-6">
                Hey people, This blog is about <span className="tracking-wide font-semibold font-sans">{(blog.title).toUpperCase()}</span> and is written by <span className="font-semibold font-sans tracking-wide">{(blog.author?.name).toUpperCase() || "Anonymous"}</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;