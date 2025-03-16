import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
const GetStartedButton = ({ text }) => {
    const [hover, setHover] = useState(false);
    return (_jsx("div", { children: _jsx("button", { className: "bg-[#FFB22C] text-black font-semibold p-2 px-8 rounded-md cursor-none border-[0.5px]\n        hover:bg-black hover:text-[#FFB22C]\n        transition-all duration-300 ", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), children: text }) }));
};
export default GetStartedButton;
