import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../HomePage/Navbar";
import Hero from "../HomePage/Hero";
const Home = () => {
    return (_jsxs("div", { className: "bg-black h-screen w-full", children: [_jsx("div", { className: "mt-0", children: _jsx(Navbar, {}) }), _jsx("div", { className: "pt-[150px]", children: _jsx(Hero, {}) })] }));
};
export default Home;
