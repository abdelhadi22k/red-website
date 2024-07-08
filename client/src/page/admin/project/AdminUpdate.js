import React, { useEffect, useState } from "react";
import { domain } from "../../../utils/stn";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminUpdate = ({ post }) => {


    const [projectImg, setProjectImg] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");




    const params = useParams();
    const { id } = params;
    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${domain}/api/project/${id}`);
                console.log(result.data)
                setProject(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);


    const update = async (event) => {
        const tagsArray = tags.split(',').map(tag => tag.trim());

        event.preventDefault();
        const project = {
            projectImg,
            title,
            category,
            projectLink,
            description,
            tags: tagsArray,
        };
        try {
            await axios.put(`${domain}/api/project/${id}`, project);
            alert("update successfully");
        } catch (error) {
            console.log(error);
        }
    };




    function CTB64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setProjectImg(reader.result);
        };
        reader.onerror = (error) => {
            console.log("Error", error);
        };
    }


    const submitHandler = async (event) => {
        event.preventDefault();
        // تحويل سلسلة tags إلى مصفوفة عن طريق تقسيمها بواسطة الفاصلة
        const tagsArray = tags.split(',').map(tag => tag.trim());

        const respons = await fetch(`${domain}/api/project/addProject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                projectImg,
                title,
                category,
                projectLink,
                description,
                tags: tagsArray,
            }),
        });
        const data = await respons.json();
        console.log(data);
    };

    return (
        <div>
            <div className="ContactForm">
                <form onSubmit={update}>
                    <div>
                        {projectImg == "" || projectImg == null ? "" : <img width={200} src={projectImg} />}
                        <input
                            className="mainForm"
                            id="projectImg"
                            name="projectImg"
                            accept="image/*"
                            type="file"
                            placeholder="Project Img"
                            onChange={CTB64}
                        />

                        <input
                            className="mainForm"
                            type="text"
                            id="title"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="title"
                        />
                    </div>
                    <div>
                        <input
                            className="mainForm"
                            type="text"
                            id="category"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder='category'
                        />
                        <input
                            className="mainForm"
                            type="text"
                            id="projectLink"
                            name="projectLink"
                            onChange={(e) => setProjectLink(e.target.value)}
                            placeholder="Project Link"
                        />
                    </div>
                    <div>
                        <input
                            className="mainForm1"
                            type="text"
                            id="Description"
                            name="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div>
                        <textarea
                            className="mainForm2"
                            id="tags"
                            name="tags"
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Tags (comma separated)"
                        />
                    </div>
                    <button className="mainBtn1" type="submit">
                        Up Date <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminUpdate;
