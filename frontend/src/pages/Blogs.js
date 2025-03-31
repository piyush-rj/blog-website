import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SyncLoader } from "react-spinners";
import { useState } from "react";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const [search, setSearch] = useState("");
    if (loading) {
        return (_jsx("div", { className: "flex h-screen items-center justify-center", children: _jsx(SyncLoader, {}) }));
    }
    const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()));
    return (_jsxs("div", { className: "bg-black min-h-screen w-full flex flex-col items-center", children: [_jsx(Appbar, {}), _jsx("div", { className: "w-full mt-22 flex justify-center px-4", children: _jsx("input", { type: "text", placeholder: "Search blogs by title...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full max-w-md p-2 border rounded bg-[#e2e2e2] text-black" }) }), _jsx("div", { className: "w-full max-w-screen-md mt-6 flex flex-col items-center", children: filteredBlogs.length > 0 ? (filteredBlogs.map((blog) => (_jsx(BlogCard, { id: blog.id, authorName: blog.author?.name.toUpperCase(), title: blog.title, content: blog.content, date: blog.date, authorId: blog.authorId, userId: blog.authorId }, blog.id)))) : (_jsx("p", { className: "text-gray-400 text-center mt-4", children: "No blogs found" })) })] }));
};
export default Blogs;
