import { Link, useNavigate } from "react-router-dom"
import Navbar from "../HomePage/Navbar"
import SignupButton from "../SignupPage/SignupButton"
import InputBox from "../components/InputBox"
import { useState } from "react"
import { SigninInput } from "@piyush_26/blog-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

const Signin = () => {

    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (error) {
            alert("Error while signing in")
        }
    }

  return (
    
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="h-screen w-screen bg-black text-white flex justify-center items-center">

      <div className="h-[50vh]  border border-white w-[25vw]">
        
        <div className=" h-[10vh] flex justify-center items-end text-4xl font-semibold">
          Login to your account
        </div>

        <div className="flex justify-center items-center text-[20px] pb-2">
          <span className="text-gray-400">New here?</span> <Link to={"/signup"} className="text-blue-400">Sign up</Link>
        </div>

        <div>
          <InputBox type="text" heading="Email-Id" placeholder="enter you email-id" onChange={(e) => {
            setPostInputs(c => ({
                ...c,
                email: e.target.value
            }))
          }}/>
        </div>
        <div>
          <InputBox type="password" heading="Password" placeholder="enter password" onChange={(e) => {
            setPostInputs(c => ({
                ...c,
                password: e.target.value
            }))
          }}/>
        </div>

        <div className="mt-8">
          <SignupButton onClick={sendRequest} text="SIGN IN"/>
        </div>
        
      </div>

      </div>
    </div>
  )
}

export default Signin