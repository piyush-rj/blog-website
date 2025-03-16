import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Appbar = ({ blog }) => {
    return (_jsx("div", { children: _jsxs("div", { className: "bg-black h-14 w-full flex justify-between items-center border border-b-gray-400 fixed backdrop-blur-3xl mb-10", children: [_jsx("div", { className: "flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/", children: "ByteWords" }) }), _jsxs("div", { className: " text-white flex flex-1/4 items-center justify-between pr-[120px] pl-[150px]", children: [_jsx("div", { className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/blogs", children: "Blogs" }) }), _jsx("div", { className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/publish", children: "Write" }) })] })] }) }));
};
export default Appbar;
