// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, Image } from "react-bootstrap";
// import required modules
import { Pagination } from "swiper/modules";
import OpinionsClient from "./../components/OpinionsClient";
import { useEffect, useState } from "react";
import axios from "axios";
import { domain } from "../utils/stn";
import LoadingOpinion from "../components/loading/LoadingOpinion";

const Opinions = () => {
  
  const [opinion, setOpinion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinion(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []);

  return (
    <div className="opinions" id="testimonials">
      <Container className="opinionsContainer">
        <div className="opinionsImg">
          <Image loading="lazy" src="sources/img/opinions.png" fluid  />
        </div>

        <div className="opinionsInfo">
          <h6 className="sectionTitle">- Testimonials</h6>
          <h1 className="mainTitle">
            Opinions and <span> testimonials </span> <br />
            of our customers
          </h1>
          <div className="mainBtn">
            <a href="#Contact" className="mainBtn1">
              Add Your Opinions
            </a>
            <a href="#FAQs" className="mainBtn4">
             Learn More
            </a>
          </div>

          <div className="SwiperBox">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <>
                {opinion.map((opinions, index) => {
                  return loading ? (
                    <LoadingOpinion />
                  ) : error ? (
                    <h1 variant="danger">{error}</h1>
                  ) : (
                    <SwiperSlide className="SwiperSlide">
                      <OpinionsClient opinionClient={opinions} />
                    </SwiperSlide>
                  );
                })}
              </>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Opinions;
