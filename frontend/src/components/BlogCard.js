import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
function Circle() {
    return (_jsx("div", { className: "h-1 w-1 rounded-full bg-gray-300" }));
}
const BlogCard = ({ id, authorName, title, content, }) => {
    return _jsx(Link, { to: `/blog/${id}`, children: _jsxs("div", { className: "p-5 border-b-[0.5px] border-gray-400 w-screen max-w-screen-md cursor-pointer", children: [_jsxs("div", { className: "flex h-[26px] items-center", children: [_jsx("div", { className: " flex justify-center flex-col pt-0", children: _jsx(Avatar, { size: 8, name: authorName }) }), _jsx("div", { className: "text-[#d4d4d4] text-[18px] font-extralight pl-2 tracking-wider", children: authorName }), _jsx("div", { className: "flex justify-center items-center pl-2", children: _jsx(Circle, {}) }), _jsx("div", { className: " font-light text-[16px] pl-2 text-slate-500 ", children: "date" })] }), _jsx("div", { className: "text-[#cbcbcb] text-3xl pt-2 font-semibold", children: title }), _jsx("div", { className: "text-xl text-[#9b9b9b] pt-1 font-light", children: content.slice(0, 100) + "..." }), _jsx("div", { className: "text-gray-950 font-thin text-sm mt-6", children: `${Math.ceil(content.length / 100)} 
                minute(s) read` })] }) });
};
export function Avatar({ name, size }) {
    return _jsx("div", { className: `relative inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600`, children: _jsx("span", { className: "text-sm pt-0.5 text-gray-600 dark:text-gray-300", children: name[0].toUpperCase() }) });
}
export default BlogCard;
