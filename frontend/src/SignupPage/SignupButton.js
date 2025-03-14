import { jsx as _jsx } from "react/jsx-runtime";
const SignupButton = ({ text, onClick }) => {
    return (_jsx("div", { className: "flex justify-center items-center", children: _jsx("button", { onClick: onClick, className: "bg-white cursor-pointer text-black p-1.5 pl-15 pr-15  drop-shadow-[4px_4px_0px_#1F75FE] text-[22px] font-semibold tracking-wider hover:bg-[#1F75FE] hover:text-white border-0  hover:drop-shadow-[4px_4px_0px_white] transition-all duration-300", children: text }) }));
};
export default SignupButton;
