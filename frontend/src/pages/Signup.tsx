
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../HomePage/Navbar"
import SignupButton from "../SignupPage/SignupButton"
import InputBox from "../components/InputBox"
import { SignupInput } from "@piyush_26/blog-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"



const Signup = () => {

  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
      name: "",
      email: "",
      password: ""
  })

  async function sendRequest () {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs")
    } catch (error) {
      alert("Error while signing up")
    }
  }

  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div className="h-screen w-screen bg-black text-white flex justify-center items-center">

      <div className="h-[60vh]  border border-white w-[25vw]">
        
        <div className=" h-[10vh] flex justify-center items-end text-4xl font-semibold">
          Create your account
        </div>

        <div className="flex justify-center items-center text-[20px] pb-2">
          <span className="text-gray-400">Already a member?</span> <Link to={"/signin"} className="text-blue-400">Sign in</Link>
        </div>

        <div >
          <InputBox type="text" heading="Name" placeholder="enter you full name" onChange={(e) => {
            setPostInputs(c => ({
              ...c,
              name: e.target.value
            }))
          }}/>
        </div>
        <div >
          <InputBox type="text" heading="Email-Id" placeholder="enter you email-id" onChange={(e) => {
            setPostInputs(c => ({
              ...c,
              email: e.target.value
            }))
          }}/>
        </div>
        <div >
          <InputBox heading="Password" type={"password"} placeholder="enter password" onChange={(e) => {
            setPostInputs(c => ({
              ...c,
              password: e.target.value
            }))
          }}/>
        </div>

        <div className="mt-8">
          <SignupButton onClick={sendRequest} text="SIGN UP"/>
        </div>
        
      </div>

      </div>
    </div>
  )
}

export default Signup