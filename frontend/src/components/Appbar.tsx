import { Link } from "react-router-dom"
import { Blog } from "../hooks"


const Appbar = ({ blog }: { blog?: Blog }) => {
  return (
    <div >
      <div className="bg-black h-14 w-full flex justify-between items-center border border-b-gray-400 fixed z-50 backdrop-blur-3xl mb-10">
        <div className="flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide">
            <Link to={"/blogs"}>
                ByteWords
            </Link>
        </div>

          <div className=" text-white flex flex-1/4 items-center justify-between pr-[120px] pl-[150px]">
              <div className="cursor-pointer hover:text-gray-300">
                  <Link to={"/blogs"}>
                      Blogs
                  </Link>
              </div>
              <div className="cursor-pointer hover:text-gray-300">
                  <Link to={"/publish"}>
                    Write
                  </Link>
              </div>
              
              {/* <div>
                  <ThemeToggle/>
              </div> */}
          </div>
      </div>
    </div>
  )
}

export default Appbar