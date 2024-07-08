import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { domain } from "../../../utils/stn";

const AdminBlogDetels = () => { 
    const params = useParams();
    const { slug } = params;
    const [blog, setBlog] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${domain}/api/blog/slug/${slug}`);
                setBlog(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);


    const deletePost = async (projectId) => {
        try {
            await axios.delete(`${domain}/api/blog/${projectId}`);
            alert("Deleted successfully");
        } catch (error) {
            console.log(error);
        } 
    };

    return loading ? (
        <h1>Loading</h1>
    ) : error ? (
        <h1>{error}</h1>
    ) : (
        <div className="BlogDetels">
            <Container>
                <Image className="blogImg" src={blog.image} alt={blog.title} fluid />
                <h1>{blog.title}</h1>
                <button className="mainBtn1" onClick={() => deletePost(blog._id)}>Delete</button>
            </Container>
        </div>
    );
};

export default AdminBlogDetels;
