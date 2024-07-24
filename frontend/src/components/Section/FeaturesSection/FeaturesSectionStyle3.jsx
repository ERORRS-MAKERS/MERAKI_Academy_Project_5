import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle8 from '../../IconBox/IconBoxStyle8';

export default function FeaturesSectionStyle3({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="cs_iconbox_8_wrap cs_radius_30">
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <IconBoxStyle8 {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
