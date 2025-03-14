import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const InputBox = ({ placeholder, heading, onChange, type }) => {
    return (_jsxs("div", { children: [_jsx("div", { className: " mt-5 mb-1 flex justify-start items-center pl-1 text-[20px]", children: heading }), _jsx("div", { className: "flex justify-center items-center", children: _jsx("input", { onChange: onChange, className: " border border-gray-400 p-2 rounded w-100", type: type, placeholder: placeholder }) })] }));
};
export default InputBox;
