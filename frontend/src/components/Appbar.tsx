import { Link, useNavigate } from "react-router-dom"
import { Blog } from "../hooks"


const Appbar = ({ blog }: { blog?: Blog }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
};

  return (
    <div >
      <div className="bg-black h-14 w-full flex justify-between items-center border border-b-gray-400 fixed backdrop-blur-3xl mb-10">
        <div className="flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide">
            <Link to={"/blogs"}>
                ByteWords
            </Link>
        </div>

          <div className=" text-white flex flex-1/4 items-center justify-between ml-9 gap-10 pr-[30px] pl-[250px]">
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
              <div className="cursor-pointer hover:text-gray-300">
                <button 
                    onClick={handleLogout} 
                    className="bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white cursor-pointer"
                  >
                    Logout
                </button>
              </div>
  
          </div>
      </div>
    </div>
  )
}

export default Appbar