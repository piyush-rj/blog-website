import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { SyncLoader } from "react-spinners";
const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return _jsx("div", { className: "flex h-screen items-center justify-center", children: _jsx(SyncLoader, {}) });
    }
    return (_jsx("div", { className: "bg-black h-screen w-full", children: _jsx(FullBlog, { blog: blog }) }));
};
export default Blog;
