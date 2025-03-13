interface TextProps {
    text: string
}


const Button = ({text}: TextProps) => {
  return (
    <div>
        <button className="bg-black tracking-wide text-white p-2 pl-3 pr-3 rounded-md cursor-pointer hover:bg-white 
        hover:text-black transition-all transform-3d">
            {text}
        </button>
    </div>
  )
}

export default Button