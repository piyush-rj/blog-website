import { ChangeEvent } from "react"

interface PlaceholderProps {
    placeholder: string,
    heading: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


const InputBox = ({placeholder, heading, onChange, type}: PlaceholderProps) => {


  return (
    <div>
        <div className=" mt-5 mb-1 flex justify-start items-center pl-10 text-[22px]">
          {heading}
        </div>
    <div className="flex justify-center items-center">
        <input onChange={onChange} className=" border border-gray-400 p-2 rounded w-100" type={type} placeholder={placeholder} />
    </div>
    </div>
  )
}

export default InputBox