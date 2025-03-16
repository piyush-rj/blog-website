import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ text }) => {
    return (_jsx("button", { type: "button", className: "bg-black tracking-wide text-white p-2 pl-3 pr-3 rounded-md  hover:bg-white \n    hover:text-black transition-all transform-3d cursor-none", children: text }));
};
export default Button;
