import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import Appbar from "../components/Appbar";
import TextEditor from "../components/TextEditor";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
const Publish = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handlePublish = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description,
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`);
        }
        catch (error) {
            console.error("Error publishing blog:", error);
        }
    };
    return (_jsxs("div", { className: "bg-black h-screen w-full", children: [_jsx(Appbar, {}), _jsx("div", { className: " flex justify-center w-full pt-[100px]", children: _jsx("div", { className: "w-full max-w-screen-xl px-4", children: _jsx("input", { type: "text", className: "w-full border-b border-gray-300 text-[#d5d5d5] text-5xl", placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value) }) }) }), _jsx(TextEditor, { onChange: setDescription }), _jsx("div", { className: "flex justify-center mt-8", children: _jsx("button", { onClick: handlePublish, type: "submit", className: "bg-white cursor-pointer text-black p-1.5 pl-8 pr-8  drop-shadow-[4px_4px_0px_#1F75FE] text-[18px] font-semibold tracking-wider hover:bg-[#1F75FE] hover:text-white border-0  hover:drop-shadow-[4px_4px_0px_white] transition-all duration-300", children: "Publish" }) })] }));
};
export default Publish;
