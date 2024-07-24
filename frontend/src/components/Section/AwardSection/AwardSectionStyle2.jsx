import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle5 from '../../IconBox/IconBoxStyle5';

export default function AwardSectionStyle2({
  sectionTitle,
  sectionTitleUp,
  sectionSubTitle,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading
        title={sectionTitle}
        titleUp={sectionTitleUp}
        subTitle={sectionSubTitle}
        center
      />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_24">
        {data?.map((item, index) => (
          <div className="col-xxl-3 col-md-6" key={index}>
            <IconBoxStyle5 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
