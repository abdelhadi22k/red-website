import React, { useState } from "react";
import { domain } from "../../../utils/stn";

const Add_project = () => {
    const [projectImg, setProjectImg] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

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

        const tagsArray = tags.split(",").map((tag) => tag.trim());

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
                <form onSubmit={submitHandler}>
                    <div>
                        {projectImg === "" || projectImg == null ? (
                            ""
                        ) : (
                            <img width={200} src={projectImg} alt={title} />
                        )}
                        <input
                            className="mainForm"
                              required
                            id="projectImg" 
                            name="projectImg"
                            accept="image/*"
                            type="file"
                            placeholder="Project Img"
                            onChange={CTB64}
                        />

                        <input
                            className="mainForm"
                              required
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
                              required
                            type="text"
                            id="category"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Category"
                        />
                        <input
                            className="mainForm"
                              required
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
                            required
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
                            required
                            id="tags"
                            name="tags"
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Tags (comma separated)"
                        />
                    </div>
                    <button className="mainBtn1" type="submit">
                        add project <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add_project;
