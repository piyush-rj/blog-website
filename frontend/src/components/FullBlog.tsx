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
    <div className="bg-black min-h-screen w-full">
      <Appbar />
      <div className="flex justify-center pt-[100px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 w-full max-w-screen-xl pt-12 gap-6">
          {/* blog content */}
          <div className="md:col-span-8">
            <div className="text-3xl md:text-5xl text-[#d5d5d5] font-extrabold break-words">
              {blog.title}
            </div>
            <div className="text-slate-600 pt-2 text-sm md:text-base">
              Posted on {formattedDate}
            </div>

            <div
              className="pt-4 text-lg md:text-2xl text-[#bfbfbf] break-words"
              dangerouslySetInnerHTML={{
                __html: blog.content.replace(/\n/g, "<br>"),
              }}
            />
          </div>

          {/* author section */}
          <div className="md:col-span-4 mt-9 md:mt-9 pl-0 md:pl-5 text-white place-self-start">
          <span className="font-mono text-base md:text-lg">Author</span>
            <div className="flex flex-col">
              <div className="flex items-center text-[#afafaf]">
                <Avatar name={blog.author?.name || "Anonymous"} size={8} />
                <div className="text-lg md:text-2xl font-bold pl-2 pt-1 tracking-wide">
                  {(blog.author?.name || "Anonymous").toUpperCase()}
                </div>
              </div>
              <div className="pt-2 text-sm md:text-[17px] text-slate-500 font-sans leading-6 break-words">
                Hey people, This blog is about{" "}
                <span className="tracking-wide font-semibold font-sans">
                  {blog.title.toUpperCase()}
                </span>{" "}
                and is written by{" "}
                <span className="font-semibold font-sans tracking-wide">
                  {(blog.author?.name || "Anonymous").toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
