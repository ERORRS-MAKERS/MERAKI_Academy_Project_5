import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Accordion from '../../Accordion';

export default function FaqSection({ data, sectionTitle, sectionTitleUp }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <Accordion variant="cs_style1" data={data} />
        </div>
      </div>
    </div>
  );
}
