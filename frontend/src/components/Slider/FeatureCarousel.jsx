import React, { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import IconBoxStyle10 from '../IconBox/IconBoxStyle10';

export default function FeatureCarousel({ sectionTitle, data }) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="cs_iconbox_carousel_1 cs_gap_20 position-relative">
        <div className="row">
          <div className="col-lg-4">
            <SectionHeading title={sectionTitle} />
            <Spacing md="200" lg="10" xl="150" />
            <Spacing md="30" xl="0" />
            <div className="cs_slider_navigation cs_style_2">
              <div className="cs_slider_prev cs_center" onClick={previous}>
                <img src="/images/icons/left_arrow_blue.svg" alt="Prev" />
              </div>
              <div className="cs_slider_next cs_center" onClick={next}>
                <img src="/images/icons/right_arrow_blue.svg" alt="Next" />
              </div>
            </div>
            <div className="cs_height_0 cs_height_lg_30" />
          </div>
          <div className="col-lg-8">
            <Slider
              ref={sliderRef}
              {...settings}
              className="cs_slider_activate"
            >
              {data?.map((item, index) => (
                <div key={index}>
                  <IconBoxStyle10 {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
