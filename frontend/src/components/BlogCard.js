import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import { BACKEND_URL } from "../config";
function Circle() {
    return _jsx("div", { className: "h-1 w-1 rounded-full bg-gray-300" });
}
const BlogCard = ({ id, authorName, title, content, date, authorId, userId, }) => {
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const toggleLike = async () => {
        if (!userId)
            return;
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blogs/${id}/like`, { userId });
            setLiked(response.data.liked);
        }
        catch (error) {
            console.error("Error liking the blog", error);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx(Link, { to: `/blog/${id}`, children: _jsxs("div", { className: "p-5 border-b-[0.5px] border-gray-400 w-screen max-w-screen-md cursor-pointer", children: [_jsxs("div", { className: "flex h-[26px] items-center", children: [_jsx("div", { className: "flex justify-center flex-col pt-0", children: _jsx(Avatar, { size: 8, name: authorName }) }), _jsx("div", { className: "text-[#d4d4d4] text-[18px] font-extralight pl-2 tracking-wider", children: authorName }), _jsx("div", { className: "flex justify-center items-center pl-2", children: _jsx(Circle, {}) }), _jsx("div", { className: "font-light text-[16px] pl-2 text-slate-500 ", children: formattedDate })] }), _jsx("div", { className: "text-[#cbcbcb] text-3xl pt-2 font-semibold", children: title }), _jsx("div", { className: "text-xl text-[#9b9b9b] pt-1 font-light", children: content.slice(0, 100) + "..." }), _jsx("div", { className: "text-gray-950 font-thin text-sm mt-6", children: `${Math.ceil(content.length / 100)} minute(s) read` }), _jsxs("div", { className: "mt-4 flex items-center", children: [_jsx("button", { onClick: (e) => {
                                e.preventDefault(); // Prevents default <Link> behavior
                                e.stopPropagation(); // Stops event from bubbling to the parent <Link>
                                toggleLike();
                            }, className: `p-2 text-md hover:text-white rounded transition-all transform duration-300 ${liked ? "text-blue-500" : "text-gray-500"}`, disabled: loading, children: liked ? "Liked" : "Like" }), loading && _jsx(SyncLoader, { size: 8, color: "#fff" })] })] }) }));
};
export function Avatar({ name, size }) {
    return (_jsx("div", { className: "relative inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600", children: _jsx("span", { className: "text-sm pt-0.5 text-gray-600 dark:text-gray-300", children: name[0].toUpperCase() }) }));
}
export default BlogCard;
