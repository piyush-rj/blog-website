import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }) => {
    const formattedDate = blog.date
        ? new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "Unknown Date";
    return (_jsxs("div", { className: "bg-black min-h-screen w-full", children: [_jsx(Appbar, {}), _jsx("div", { className: "flex justify-center pt-[100px] px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 w-full max-w-screen-xl pt-12 gap-6", children: [_jsxs("div", { className: "md:col-span-8", children: [_jsx("div", { className: "text-3xl md:text-5xl text-[#d5d5d5] font-extrabold break-words", children: blog.title }), _jsxs("div", { className: "text-slate-600 pt-2 text-sm md:text-base", children: ["Posted on ", formattedDate] }), _jsx("div", { className: "pt-4 text-lg md:text-2xl text-[#bfbfbf] break-words", dangerouslySetInnerHTML: {
                                        __html: blog.content.replace(/\n/g, "<br>"),
                                    } })] }), _jsxs("div", { className: "md:col-span-4 mt-9 md:mt-9 pl-0 md:pl-5 text-white place-self-start", children: [_jsx("span", { className: "font-mono text-base md:text-lg", children: "Author" }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex items-center text-[#afafaf]", children: [_jsx(Avatar, { name: blog.author?.name || "Anonymous", size: 8 }), _jsx("div", { className: "text-lg md:text-2xl font-bold pl-2 pt-1 tracking-wide", children: (blog.author?.name || "Anonymous").toUpperCase() })] }), _jsxs("div", { className: "pt-2 text-sm md:text-[17px] text-slate-500 font-sans leading-6 break-words", children: ["Hey people, This blog is about", " ", _jsx("span", { className: "tracking-wide font-semibold font-sans", children: blog.title.toUpperCase() }), " ", "and is written by", " ", _jsx("span", { className: "font-semibold font-sans tracking-wide", children: (blog.author?.name || "Anonymous").toUpperCase() })] })] })] })] }) })] }));
};
export default FullBlog;
