import React from 'react';
import Slider from 'react-slick';
import TeamStyle3 from '../Team/TeamStyle3';

export default function TeamSlider({ data }) {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'cs_slider_prev cs_center' +
        (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <img src="/images/icons/left_arrow_blue.svg" alt="Icon" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'cs_slider_next cs_center' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <img src="/images/icons/right_arrow_blue.svg" alt="Next" />
    </div>
  );
  const settings = {
    dots: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
  };
  return (
    <Slider
      {...settings}
      className="cs_gap_20 cs_cs_slider_navigation_2 cs_related_doctor position-relative"
    >
      {data?.map((item, index) => (
        <div key={index}>
          <TeamStyle3 {...item} />
        </div>
      ))}
    </Slider>
  );
}
