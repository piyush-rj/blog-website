import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Error from "./pages/Error";
import Cursor from "./components/Cursor";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Cursor, {}), _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/*", element: _jsx(Error, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/signin", element: _jsx(Signin, {}) }), _jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/blog/:id", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/blogs", element: _jsx(Blogs, {}) }), _jsx(Route, { path: "/publish", element: _jsx(Publish, {}) })] }) })] }));
}
export default App;
