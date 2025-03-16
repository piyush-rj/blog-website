interface TextProps {
    text: string
}


const Button = ({text}: TextProps) => {
  return (
    <button type="button" className="bg-black tracking-wide text-white p-2 pl-3 pr-3 rounded-md  hover:bg-white 
    hover:text-black transition-all transform-3d cursor-none">
        {text}
    </button>
  )
}

export default Button