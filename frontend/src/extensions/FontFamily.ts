import { Extension } from "@tiptap/core";
import { TextStyle } from "@tiptap/extension-text-style";
import { Editor, RawCommands } from "@tiptap/react"; // Import Editor and RawCommands

export const FontFamily = Extension.create({
  name: "fontFamily",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (element) => element.style.fontFamily.replace(/['"]/g, ""),
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) return {};
              return { style: `font-family: ${attributes.fontFamily}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontFamily:
        (font: string) =>
        ({ commands }: { commands: RawCommands }) => { // ✅ Fixed type here
          return commands.setMark("textStyle", { fontFamily: font });
        },

      unsetFontFamily:
        () =>
        ({ commands }: { commands: RawCommands }) => { // ✅ Fixed type here
          return commands.unsetMark("textStyle");
        },
    } as Partial<RawCommands>; // ✅ Explicitly define type as Partial<RawCommands>
  },
});
