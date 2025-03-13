interface TextProps {
    text: string,
    onClick: any 
}

const SignupButton = ({text, onClick}: TextProps) => {
  return (
    <div className="flex justify-center items-center">
        <button onClick={onClick} className="bg-white cursor-pointer text-black p-2 pl-[10vh] pr-[10vh]  drop-shadow-[4px_4px_0px_#1F75FE] text-[22px] font-semibold tracking-wider hover:bg-[#1F75FE] hover:text-white border-0  hover:drop-shadow-[4px_4px_0px_white] transition-all duration-300">
            {text}
        </button>
    </div>
  )
}

export default SignupButton