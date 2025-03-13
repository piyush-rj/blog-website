import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Blog from "./pages/Blog"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
