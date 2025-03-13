import { useState } from "react"

interface TextProps {
    text: string,
    para: string,

}

const Stickynote = ({text, para}: TextProps) => {

    const [content, setContent] = useState("");

  return (
    <div className="hover:-rotate-1 transition-all duration-200 cursor-pointer">

        <svg width="300" height="260" viewBox="0 0 493 473" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.7833" y="0.513188" width="479" height="459" rx="15.5" transform="rotate(1.53195 12.7833 0.513188)" fill="#EBEBEB" stroke="black"/>
        <circle cx="46.3492" cy="35.923" r="14" transform="rotate(1.53195 46.3492 35.923)" fill="#232323"/>
        <line x1="35.9195" y1="25.7078" x2="55.9922" y2="46.8836" stroke="white"/>
        <rect x="10.3243" y="92.4805" width="479" height="53" transform="rotate(1.53195 10.3243 92.4805)" stroke="black"/>
        <rect x="8.90638" y="145.461" width="479" height="53" transform="rotate(1.53195 8.90638 145.461)" stroke="black"/>
        <rect x="7.49036" y="198.442" width="479" height="53" transform="rotate(1.53195 7.49036 198.442)" stroke="black"/>
        <rect x="4.65638" y="304.404" width="479" height="53" transform="rotate(1.53195 4.65638 304.404)" stroke="black"/>
        <rect x="3.23841" y="357.386" width="479" height="53" transform="rotate(1.53195 3.23841 357.386)" stroke="black"/>
        <rect x="6.07239" y="251.423" width="479" height="53" transform="rotate(1.53195 6.07239 251.423)" stroke="black"/>

        <text x="52%" y="15%" text-anchor="middle" fill="black" font-size="50" font-weight="bold" transform="rotate(1.5, 220, 100)">
            {text}
        </text>


        {/* Editable Paragraph */}
        <foreignObject x="20" y="100" width="450" height="250">
          <textarea
            value={para}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full text-center text-[34px] rotate-[1.6deg] leading-relaxed text-black bg-transparent outline-none border-none resize-none"
          />
        </foreignObject>
        </svg>


</div>
  )
}


export default Stickynote