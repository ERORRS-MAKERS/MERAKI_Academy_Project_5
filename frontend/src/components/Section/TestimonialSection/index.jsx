import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Testimonial from '../../Testimonial';

export default function TestimonialSection({ sectionTitle, sectionTitleDown }) {
  return (
    <div className="container">
      <SectionHeading
        title={sectionTitle}
        titleDown={sectionTitleDown}
        center
      />
      <Spacing md="72" lg="50" />
      <Testimonial />
    </div>
  );
}
