import React from 'react';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import TestimonialCarouselStyle2 from '../../Slider/TestimonialCarouselStyle2';

export default function TestimonialSectionStyle3({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <TestimonialCarouselStyle2 data={data} />
    </div>
  );
}
