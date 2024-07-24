import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle1 from '../../IconBox/IconBoxStyle1';

export default function AwardSection({ sectionTitle, data }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} />
      <Spacing md="72" lg="50" />
      <div className="row gy-4">
        {data?.map((item, index) => (
          <div className="col-xxl-3 col-md-6" key={index}>
            <IconBoxStyle1 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
