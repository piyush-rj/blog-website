import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

const TextEditor = ({ onChange }: { onChange: (content: string) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Write your thoughts...",
      }),
    ],
    content: "", // Empty initially
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Send updated content to parent component
    },
  });

  if (!editor) return null;

  return (
    <div className="pt-8 flex justify-center w-full">
      <div className="w-full max-w-screen-xl p-4">
        {/* Toolbar */}
        <div className="flex space-x-4 pb-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`text-xl cursor-pointer font-bold ${
              editor.isActive("bold") ? "text-gray-800" : "text-gray-500"
            }`}
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`text-xl cursor-pointer italic ${
              editor.isActive("italic") ? "text-gray-800" : "text-gray-500"
            }`}
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`text-xl cursor-pointer underline ${
              editor.isActive("underline") ? "text-gray-800" : "text-gray-500"
            }`}
          >
            U
          </button>
        </div>

        {/* Editor */}
        <div className="border border-gray-300 rounded p-2">
          <EditorContent
            editor={editor}
            className="w-full min-h-[200px] p-2 focus:outline-none text-[#bfbfbf]"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
