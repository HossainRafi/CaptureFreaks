import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from "../../Utilities/images/slider1.jpg";
import img3 from "../../Utilities/images/slider4.jpg";
import img4 from "../../Utilities/images/slider5.jpg";
import img5 from "../../Utilities/images/slider6.jpg";
import img6 from "../../Utilities/images/slider7.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="px-7">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[300px] md:h-[400px]" src={img6} alt="" />
        </div>
        <div>
          <img className="w-full h-[300px] md:h-[400px]" src={img3} alt="" />
        </div>
        <div>
          <img className="w-full h-[300px] md:h-[400px]" src={img2} alt="" />
        </div>
        <div>
          <img className="w-full h-[300px] md:h-[400px]" src={img5} alt="" />
        </div>
        <div>
          <img className="w-full h-[300px] md:h-[400px]" src={img4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
