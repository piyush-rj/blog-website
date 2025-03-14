import { useState } from "react";

interface TextProps {
    text: string;
  }
  
  const GetStartedButton = ({ text }: TextProps) => {

    const [hover, setHover] = useState(false);

    return (
      <div>
        <button className="bg-[#FFB22C] text-black font-semibold p-2 px-8 rounded-md cursor-pointer border-[0.5px]
        hover:bg-black hover:text-[#FFB22C]
        transition-all duration-300 "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        {text}
      </button>

      {/* {hover && (
        <div className="absolute left-[671px] font-semibold rounded-sm transform -translate-x-1/2 mt-2  w-max bg-white text-black 
           pl-1 pr-1 shadow-lg border border-black transition-all duration-500">
          BLOGGING SIMPLIFIED
        </div>
      )} */}
      </div>
    );
  };
  
  export default GetStartedButton;
  