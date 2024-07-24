import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Accordion from '../../Accordion';

export default function FaqSectionStyle4({
  data,
  sectionTitle,
  faqImgUrl,
  spiningImgUrl,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_40">
        <div className="col-xl-8">
          <Accordion variant="cs_style1 cs_type_3" data={data} />
        </div>
        <div className="col-xl-4">
          <div className="cs_about cs_style_1 cs_type_2">
            <div className="cs_about_img">
              <img src={faqImgUrl} alt="About" className="w-100" />
              <div className="cs_about_mini_img">
                <img
                  src={spiningImgUrl}
                  alt="Mini"
                  className="cs_rotate_animation"
                />
                <img
                  src="/images/icons/tick.svg"
                  alt="Right"
                  className="cs_right_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
