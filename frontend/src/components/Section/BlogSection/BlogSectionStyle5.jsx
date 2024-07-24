import React from 'react';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import PostStyle3 from '../../Post/PostStyle3';

export default function BlogSectionStyle5({
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  sectionSubTitle,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading
        title={sectionTitle}
        titleUp={sectionTitleUp}
        titleDown={sectionTitleDown}
        subTitle={sectionSubTitle}
        center
      />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_24">
        {data?.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <PostStyle3 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
