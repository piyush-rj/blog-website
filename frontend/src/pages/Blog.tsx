import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks"
import { SyncLoader } from "react-spinners";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || ""
  });
  if(loading){
    return <div className="flex h-screen items-center justify-center">
      <SyncLoader/>
    </div>
  }
  return (
    <div className="bg-black h-screen w-full">
      {/* @ts-ignore */}
      <FullBlog blog={blog} />
    </div>

  )
}

export default Blog