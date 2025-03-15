import { useState } from "react";

const TextEditor = ({ onChange }: { onChange: (content: string) => void }) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    onChange(event.target.value); // Send updated content to parent component
  };

  return (
    <div className="pt-8 flex justify-center w-full">
      <div className="w-full max-w-screen-xl p-4">
        {/* Toolbar */}
        <div className="flex space-x-4 pb-2">
          {/* You can remove this part or add any other basic button if needed */}
        </div>

        {/* Editor */}
        <div className="border border-gray-300 rounded p-2">
          <textarea
            value={text}
            onChange={handleChange}
            className="w-full min-h-[200px] p-2 focus:outline-none text-[#bfbfbf]"
            placeholder="Write your thoughts..."
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
