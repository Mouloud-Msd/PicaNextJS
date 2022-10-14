import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0.5,
    cssEase: "ease-out",
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {data.carousel.map((slide) => {
          return (
            <div key={slide.id}>
              <img className="slide-img" src={`/slide-images/${slide.name}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
