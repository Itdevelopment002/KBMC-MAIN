import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Corousel.css";
import api, { baseURL } from "../api";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
};

const Corousel = () => {
  const [sliders, setSliders] = useState([]);

  const fetchSliders = async () => {
    try {
      const response = await api.get("/sliders");
      setSliders(response.data);
    } catch (error) {
      console.error("Error fetching sliders data");
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="banner-section">
      <div className="banner-carousel">
        <Slider ref={sliderRef} {...settings}>
          {sliders.map((slider, index) => (
            <div className="slide-item">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${baseURL}${slider.file_path})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="owl-nav">
          <button type="button" className="owl-prev" onClick={goToPrev}>
            <GrPrevious className="nav-icon" size={17} />
          </button>
          <button type="button" className="owl-next" onClick={goToNext}>
            <GrNext className="nav-icon" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Corousel;
