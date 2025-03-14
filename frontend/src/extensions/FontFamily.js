import { Extension } from "@tiptap/core";
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
                            if (!attributes.fontFamily)
                                return {};
                            return { style: `font-family: ${attributes.fontFamily}` };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setFontFamily: (font) => ({ commands }) => {
                return commands.setMark("textStyle", { fontFamily: font });
            },
            unsetFontFamily: () => ({ commands }) => {
                return commands.unsetMark("textStyle");
            },
        }; // ✅ Explicitly define type as Partial<RawCommands>
    },
});
