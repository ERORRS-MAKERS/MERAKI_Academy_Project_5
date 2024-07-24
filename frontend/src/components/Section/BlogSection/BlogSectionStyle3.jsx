import React from 'react';
import Post from '../../Post';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';

export default function BlogSectionStyle3({
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
            <Post {...item} variant="cs_type_1" />
          </div>
        ))}
      </div>
    </div>
  );
}
