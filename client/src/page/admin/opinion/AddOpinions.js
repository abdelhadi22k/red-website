import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { domain } from "../../../utils/stn";
import axios from "axios";
import LoadingOpinion from "../../../components/loading/LoadingOpinion";
import AdminOpinionsClient from "../../../components/AdminOpinionsClient";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const AddOpinions = () => {
  const [clientName, setclientName] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [ratings, setratings] = useState("");
  const [allow, setallow] = useState("");
  const [opinion, setopinion] = useState("");
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []);

  const submitHandler = async (event) => {
    const respons = await fetch(`${domain}/api/opinion/addOpinion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName,
        JobTitle,
        ratings,
        allow,
        opinion,
      }),
    });

    const data = await respons.json();
  };

  return (
    <section className="contactMe" id="Contact">
      <Container className="contactMeContainer">
        <div className="ContactForm">
          <form onSubmit={submitHandler}>
            <div>
              <input
                className="mainForm"
                required
                type="text"
                id="clientName"
                name="clientName"
                onChange={(e) => setclientName(e.target.value)}
                placeholder="Client Name"
              />
            </div>
            <div>
              <input
                className="mainForm"
                required
                type="JobTitle"
                id="JobTitle"
                name="JobTitle"
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Job Title"
              />
              <input
                className="mainForm"
                required
                type="number"
                id="ratings"
                name="ratings"
                onChange={(e) => setratings(e.target.value)}
                placeholder="Ratings"
              />
            </div>
            <div>
              <input
                className="mainForm1"
                required
                type="text"
                id="allow"
                name="allow"
                onChange={(e) => setallow(e.target.value)}
                placeholder="allow"
              />
            </div>
            <div>
              <textarea
                className="mainForm2"
                required
                type="text"
                id="opinion"
                name="opinion"
                onChange={(e) => setopinion(e.target.value)}
                placeholder="opinion"
              />
            </div>
            <button className="mainBtn1" type="submit">
              {" "}
              Send Your opinion <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </Container>
      <Container>
        <div className="SwiperBox">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <>
              {opinions.map((opinions, index) => {
                return loading ? (
                  <LoadingOpinion />
                ) : error ? (
                  <h1 variant="danger">{error}</h1>
                ) : (
                  <SwiperSlide className="SwiperSlide">
                    <AdminOpinionsClient opinionClient={opinions} />
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AddOpinions;
