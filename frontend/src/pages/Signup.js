import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import SignupButton from "../SignupPage/SignupButton";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Signup = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }
        catch (error) {
            console.error("Signup error:");
            alert("Error while signing up");
        }
    }
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("div", { className: "h-screen w-full bg-black text-white flex justify-center items-center pb-[100px]", children: _jsxs("div", { className: "h-[540px] border border-white w-[420px] flex flex-col items-center py-4 px-8 mt-", children: [_jsx("h2", { className: "text-3xl font-semibold mt-3 mb-1", children: "Create your account" }), _jsxs("div", { className: "text-lg pb-2", children: [_jsx("span", { className: "text-gray-400", children: "Already a member? " }), _jsx(Link, { to: "/signin", className: "text-blue-400", children: "Sign in" })] }), _jsxs("div", { className: "w-full flex flex-col gap-2", children: [_jsx(InputBox, { type: "text", heading: "Name", placeholder: "Enter your full name", onChange: (e) => setPostInputs((c) => ({
                                        ...c,
                                        name: e.target.value,
                                    })) }), _jsx(InputBox, { type: "text", heading: "Email-Id", placeholder: "Enter your email-id", onChange: (e) => setPostInputs((c) => ({
                                        ...c,
                                        email: e.target.value,
                                    })) }), _jsx(InputBox, { type: "password", heading: "Password", placeholder: "Enter password", onChange: (e) => setPostInputs((c) => ({
                                        ...c,
                                        password: e.target.value,
                                    })) })] }), _jsx("div", { className: "mt-12 w-full flex justify-center", children: _jsx(SignupButton, { onClick: sendRequest, text: "SIGN UP" }) })] }) })] }));
};
export default Signup;
