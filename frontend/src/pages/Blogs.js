import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SyncLoader } from "react-spinners";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";
const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return _jsx("div", { className: "flex h-screen items-center justify-center", children: _jsx(SyncLoader, {}) });
    }
    return (_jsxs("div", { className: "bg-black h-screen w-full", children: [_jsx(Appbar, {}), _jsx("div", { className: "flex justify-center pt-[100px] bg-black", children: _jsx("div", { className: "", children: blogs.map(blog => (_jsx(BlogCard, { id: blog.id, authorName: blog.author.name.toUpperCase(), title: blog.title, content: blog.content }, blog.id))) }) })] }));
};
export default Blogs;
