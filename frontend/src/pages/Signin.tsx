import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import SignupButton from "../SignupPage/SignupButton";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { SigninInput } from "@piyush_26/blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signin = () => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
       return alert("Error while signing in");
    }
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="h-screen w-screen bg-black text-white flex justify-center items-center px-6">
        <div className="w-full max-w-md border border-white p-6 rounded-md">
          
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-center mb-2">
            Login to your account
          </h2>

          {/* Sign Up Link */}
          <div className="text-lg text-center pb-4">
            <span className="text-gray-400">New here? </span>
            <Link to={"/signup"} className="text-blue-400">Sign up</Link>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4">
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

          {/* Sign In Button */}
          <div className="mt-6 flex justify-center">
            <SignupButton onClick={sendRequest} text="SIGN IN" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signin;
