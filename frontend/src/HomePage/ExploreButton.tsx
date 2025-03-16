
interface TextProps {
    text: string;
  }
  
  const ExploreButton = ({ text }: TextProps) => {


    return (
      <div>
        <button className=" text-[#D84040] font-semibold bg-transparent p-2 px-8 rounded-md cursor-none border-[#D84040] border-[0.5px] hover:bg-[#D84040]
        hover:text-white
        transition-all duration-300
        "
        >
        {text}
      </button>

      </div>
    );
  };
  
  export default ExploreButton;
  