import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import SignupButton from "../SignupPage/SignupButton";
import InputBox from "../components/InputBox";
import { SignupInput } from "@piyush_26/blog-common";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signup = () => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
  
      // Extract token correctly
      const jwt = response.data.token; // Ensure backend sends { token: "your_jwt" }
  
      if (!jwt) {
        throw new Error("Token missing in response");
      }
  
      localStorage.setItem("token", jwt);
      console.log("Token stored:", jwt);
  
      navigate("/blogs");
    } catch (error) {
      console.error("Signup error:");
      alert("Error while signing up");
    }
  }
  
  
  

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="h-screen w-screen bg-black text-white flex justify-center items-center">
        <div className="h-[540px] border border-white w-[420px] flex flex-col items-center py-4 px-8 mt-4">
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold mt-3 mb-1">Create your account</h2>
          
          {/* Already a Member? */}
          <div className="text-lg pb-2">
            <span className="text-gray-400">Already a member? </span>
            <Link to={"/signin"} className="text-blue-400">Sign in</Link>
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col gap-2">
            <InputBox
              type="text"
              heading="Name"
              placeholder="Enter your full name"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }))
              }
            />
            <InputBox
              type="text"
              heading="Email-Id"
              placeholder="Enter your email-id"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }))
              }
            />
            <InputBox
              type="password"
              heading="Password"
              placeholder="Enter password"
              onChange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }))
              }
            />
          </div>

          {/* Signup Button */}
          <div className="mt-12 w-full flex justify-center">
            <SignupButton onClick={sendRequest} text="SIGN UP" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
