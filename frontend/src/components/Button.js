import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ text }) => {
    return (_jsx("div", { children: _jsx("button", { className: "bg-black tracking-wide text-white p-2 pl-3 pr-3 rounded-md cursor-pointer hover:bg-white \n        hover:text-black transition-all transform-3d", children: text }) }));
};
export default Button;
