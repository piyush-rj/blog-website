import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
// import ThemeToggle from "./ThemeToggle"

const Navbar = () => {

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token")

    const handleClick = () => {
        if(isLoggedIn) { 
            navigate("/blogs");
        } else {
            navigate("/signin")
        }
    }


  return (
    <div className="bg-black h-16 w-full flex justify-between items-center border border-b-gray-400 fixed z-50 backdrop-blur-3xl">
        <div className="flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide">
            <Link to={"/"}>
                ByteWords
            </Link>
        </div>

        <div className=" text-white flex flex-1/4 items-center justify-between pr-10 pl-10">
            <div onClick={handleClick} className="cursor-pointer hover:text-gray-300">
                <Link to={"/blogs"}>
                    Blogs
                </Link>
            </div>
            <div onClick={handleClick} className="cursor-pointer hover:text-gray-300">
                Write
            </div>
            <div className="">
                <Link to={"/signup"}>
                    <Button text="Signup" />
                </Link>
            </div>
            <div>
                <Link to={"/signin"}>
                    <Button text="Signin" />
                </Link>
            </div>
            {/* <div>
                <ThemeToggle/>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar