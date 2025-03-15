import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../HomePage/Navbar";
import Hero from "../HomePage/Hero";
const Home = () => {
    return (_jsxs("div", { className: "bg-black min-h-screen", children: [_jsx(Navbar, {}), _jsx("div", { className: "mt-[40px]", children: _jsx(Hero, {}) })] }));
};
export default Home;
