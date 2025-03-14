

const Error = () => {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
        <div>
            
            <div className="p-2 text-red-400 flex justify-center items-center text-5xl font-semibold gap-x-2">
                404 <span className="text-red-400">|</span> <span className="text-white">Page Not Found</span>
            </div>
            <div className="text-3xl flex justify-center items-center font-mono text-gray-600">
                Wake up to reality!
            </div>
        </div>
    </div>
  )
}

export default Error