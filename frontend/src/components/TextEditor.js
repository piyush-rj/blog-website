import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const TextEditor = ({ onChange }) => {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
        onChange(event.target.value); // Send updated content to parent component
    };
    return (_jsx("div", { className: "pt-8 flex justify-center w-full", children: _jsxs("div", { className: "w-full max-w-screen-xl p-4", children: [_jsx("div", { className: "flex space-x-4 pb-2" }), _jsx("div", { className: "border border-gray-300 rounded p-2", children: _jsx("textarea", { value: text, onChange: handleChange, className: "w-full min-h-[200px] p-2 focus:outline-none text-[#bfbfbf]", placeholder: "Write your thoughts..." }) })] }) }));
};
export default TextEditor;
