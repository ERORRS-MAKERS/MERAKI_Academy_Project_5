import React from 'react';
import Slider from 'react-slick';

export default function BrandsCarousel({ data }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs_gap_20">
      {data?.map((item, index) => (
        <div key={index}>
          <div className="cs_brands cs_style_2">
            <img src={item.imgUrl} alt={item.imgAlt} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
