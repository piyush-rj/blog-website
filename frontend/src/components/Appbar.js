import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
const Appbar = ({ blog }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (_jsx("div", { children: _jsxs("div", { className: "bg-black h-14 w-full flex justify-between items-center border border-b-gray-400 fixed backdrop-blur-3xl mb-10", children: [_jsx("div", { className: "flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/blogs", children: "ByteWords" }) }), _jsxs("div", { className: " text-white flex flex-1/4 items-center justify-between ml-9 gap-10 pr-[30px] pl-[250px]", children: [_jsx("div", { className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/blogs", children: "Blogs" }) }), _jsx("div", { className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/publish", children: "Write" }) }), _jsx("div", { className: "cursor-pointer hover:text-gray-300", children: _jsx("button", { onClick: handleLogout, className: "bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white cursor-pointer", children: "Logout" }) })] })] }) }));
};
export default Appbar;
