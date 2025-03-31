import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog {
    id: number;
    content: string;
    title: string;
    date: string;
    author: {
        id: number,
        name: string;
    };
    authorId: number
    likesCount?: number; // Added for like tracking
    isLiked?: boolean;   // Added to track if the current user liked this blog
}

// Fetch a single blog with like status
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog:", error);
                setLoading(false);
            });
    }, [id]);

    // Like/unlike blog function
    const toggleLike = async () => {
        if (!blog) return;

        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blogs/${id}/like`,
                { userId: parseInt(localStorage.getItem("userId") || "0") }, // Send user ID
                {
                    headers: { Authorization: token },
                }
            );

            if (response.data.liked) {
                setBlog((prevBlog) =>
                    prevBlog ? { ...prevBlog, isLiked: true, likesCount: (prevBlog.likesCount || 0) + 1 } : prevBlog
                );
            } else {
                setBlog((prevBlog) =>
                    prevBlog ? { ...prevBlog, isLiked: false, likesCount: Math.max((prevBlog.likesCount || 1) - 1, 0) } : prevBlog
                );
            }
        } catch (error) {
            console.error("Error liking blog:", error);
        }
    };

    return { loading, blog, toggleLike };
};

// Fetch multiple blogs
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: { Authorization: token }
            })
            .then((response) => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);

    return { loading, blogs };
};
