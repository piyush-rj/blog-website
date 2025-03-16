import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    id: number,
    date: string,
}


function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-gray-300"/>
    )
}



const BlogCard = ({
    id,
    authorName,
    title,
    content,
    date
}: BlogCardProps) => {

const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

return <Link to={`/blog/${id}`}>
        <div className="p-5 border-b-[0.5px] border-gray-400 w-screen max-w-screen-md cursor-pointer">
            <div className="flex h-[26px] items-center">

                <div className=" flex justify-center flex-col pt-0">
                    <Avatar size={8} name={authorName} /> 
                </div>
                <div className="text-[#d4d4d4] text-[18px] font-extralight pl-2 tracking-wider">
                    {authorName}
                </div>
                <div className="flex justify-center items-center pl-2">
                    <Circle/>
                </div>
                <div className=" font-light text-[16px] pl-2 text-slate-500 ">
                    {formattedDate}
                </div>

            </div>


            <div className="text-[#cbcbcb] text-3xl pt-2 font-semibold">
                {title}
            </div>
            <div className="text-xl text-[#9b9b9b] pt-1 font-light">
                {content.slice(0, 100) + "..."} 
            </div>
            <div className="text-gray-950 font-thin text-sm mt-6">
                {`${Math.ceil(content.length / 100)} 
                minute(s) read`}
            </div>

        </div>
    </Link>
}


export function Avatar({ name, size }: { name: string, size: number }){
    return <div className={`relative inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="text-sm pt-0.5 text-gray-600 dark:text-gray-300" >{name[0].toUpperCase()}</span>
    </div>
}

export default BlogCard