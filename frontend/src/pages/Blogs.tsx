import { SyncLoader } from "react-spinners";
import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { Loader } from "../components/loader/Loader";
import { useBlogs } from "../hooks";

const Blogs = () => {

  const {loading, blogs} = useBlogs();

  // add skeletons
  if(loading){
    return <div className="flex h-screen items-center justify-center">
    <SyncLoader/>
  </div>
  }

  return (
    <div className="bg-black h-screen w-full">
      <Appbar/>
      <div className="flex justify-center pt-[100px] bg-black">
        <div className="">

          {blogs.map(blog => <BlogCard 
          id={blog.id}
          authorName={(blog.author.name).toUpperCase() }
          title={blog.title}
          content={blog.content}
          publishedDate={"22nd feb 2024" }
          />)}

        </div>

    </div>
    </div>
  )
}

export default Blogs