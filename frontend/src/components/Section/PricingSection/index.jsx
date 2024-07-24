import React from 'react';
import Pricing from '../../Pricing';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';

export default function PricingSection({ sectionTitle, data }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_50">
        {data?.map((item, index) => (
          <div className="col-xl-4" key={index}>
            <Pricing {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
