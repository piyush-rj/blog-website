import Button from "../components/Button"
// import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <div className="bg-black h-16 w-full flex justify-between items-center border border-b-gray-400 fixed z-50 backdrop-blur-3xl">
        <div className="flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide">
            ByteWords
        </div>

        <div className=" text-white flex flex-1/4 items-center justify-between pr-10 pl-10">
            <div className="cursor-pointer hover:text-gray-300">
                Blog
            </div>
            <div className="cursor-pointer hover:text-gray-300">
                Write
            </div>
            <div className="">
                <Button text="Signup" />
            </div>
            <div>
            <Button text="Signin" />
            </div>
            {/* <div>
                <ThemeToggle/>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar