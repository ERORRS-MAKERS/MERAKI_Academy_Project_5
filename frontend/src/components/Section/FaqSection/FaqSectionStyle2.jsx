import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Accordion from '../../Accordion';

export default function FaqSectionStyle2({
  data,
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="row">
        <div className="col-xxl-8 offset-xxl-4">
          <Accordion variant="cs_style1 cs_type_1" data={data} />
        </div>
      </div>
    </div>
  );
}
