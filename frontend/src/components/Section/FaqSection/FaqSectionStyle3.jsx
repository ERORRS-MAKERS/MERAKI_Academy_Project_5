import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Accordion from '../../Accordion';

export default function FaqSectionStyle3({
  data,
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="72" lg="50" />
        </div>
        <div className="col-lg-7">
          <Spacing md="40" lg="0" />
          <Accordion variant="cs_style1 cs_type_2" data={data} />
        </div>
      </div>
    </div>
  );
}
