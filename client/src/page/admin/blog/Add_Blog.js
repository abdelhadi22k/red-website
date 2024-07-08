import React, { useState } from "react";
import { domain } from "../../../utils/stn";
import { Container } from "react-bootstrap";

const AddBlog = () => { 
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [writer, setWriter] = useState("");
  const [category, setCategory] = useState(""); 
  const [descriptionTitle, setDescriptionTitle] = useState("");
  const [descriptionDetails, setDescriptionDetails] = useState("");
  const [content, setContent] = useState([
    { contentTitle: "", contentDetails: "" },
  ]);
  const [details, setDetails] = useState([
    { detailsTitle: "", detailsContent: "" },
  ]);

  function CTB64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  }

  const handleContentChange = (index, event) => {
    const values = [...content];
    values[index][event.target.name] = event.target.value;
    setContent(values);
  };

  const handleDetailsChange = (index, event) => {
    const values = [...details];
    values[index][event.target.name] = event.target.value;
    setDetails(values);
  };

  const addContent = () => {
    setContent([...content, { contentTitle: "", contentDetails: "" }]);
  };

  const removeContent = (index) => {
    const values = [...content];
    values.splice(index, 1);
    setContent(values);
  };

  const addDetails = () => {
    setDetails([...details, { detailsTitle: "", detailsContent: "" }]);
  };

  const removeDetails = (index) => {
    const values = [...details];
    values.splice(index, 1);
    setDetails(values);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`${domain}/api/blog/addBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
        image,
        writer,
        title,
        category,
        description: { descriptionTitle, descriptionDetails },
        content,
        details,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Container>
       <div>
      <div className="ContactForms">
        <form onSubmit={submitHandler}>
          <div>
            {image === "" || image == null ? (
              ""
            ) : (
              <img width={200} src={image} alt={title} />
            )}
            <input
              required
              className="mainForm"
              id="image"
              name="image"
              accept="image/*"
              type="file"
              placeholder="Blog Img"
              onChange={CTB64}
            />

            <input
              required
              className="mainForm"
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>

          <div>
            <input
              required
              className="mainForm"
              id="slug"
              name="slug"
              type="text"
              placeholder="Slug"
              onChange={(e) => setSlug(e.target.value)}
            />

            <input
              required
              className="mainForm"
              type="text"
              id="writer"
              name="writer"
              onChange={(e) => setWriter(e.target.value)}
              placeholder="Writer"
            />
          </div>
          <div>
            <input
              required
              className="mainForm"
              type="text"
              id="category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />
          </div>
          <div>
            <input
              required
              className="mainForm"
              type="text"
              id="descriptionTitle"
              name="descriptionTitle"
              onChange={(e) => setDescriptionTitle(e.target.value)}
              placeholder="Description Title"
            />
            <textarea
              required
              className="mainForm"
              id="descriptionDetails"
              name="descriptionDetails"
              onChange={(e) => setDescriptionDetails(e.target.value)}
              placeholder="Description Details"
            />
          </div>

          {content.map((item, index) => (
            <div key={index}>
              <input
                required
                className="mainForm"
                type="text"
                name="contentTitle"
                value={item.contentTitle}
                placeholder="Content Title"
                onChange={(event) => handleContentChange(index, event)}
              />
              <textarea
                required
                className="mainForm"
                name="contentDetails"
                value={item.contentDetails}
                placeholder="Content Details"
                onChange={(event) => handleContentChange(index, event)}
              />
              <button
                className="mainBtn1"
                type="button"
                onClick={() => removeContent(index)}
              >
                Remove Content
              </button>
            </div>
          ))}
          <button className="mainBtn3" type="button" onClick={addContent}>
            Add Content
          </button>

          {details.map((item, index) => (
            <div key={index}>
              <input
                required
                className="mainForm"
                type="text"
                name="detailsTitle"
                value={item.detailsTitle}
                placeholder="Details Title"
                onChange={(event) => handleDetailsChange(index, event)}
              />
              <textarea
                required
                className="mainForm"
                name="detailsContent"
                value={item.detailsContent}
                placeholder="Details Content"
                onChange={(event) => handleDetailsChange(index, event)}
              />
              <button
                className="mainBtn1"
                type="button"
                onClick={() => removeDetails(index)}
              >
                Remove Details
              </button>
            </div>
          ))}
          <button className="mainBtn3" type="button" onClick={addDetails}>
            Add Details
          </button>
          <br />

          <button className="mainBtn1" type="submit">
            Add Project <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
    </Container>
 
  );
};

export default AddBlog;
