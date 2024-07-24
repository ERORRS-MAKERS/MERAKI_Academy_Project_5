import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Post from '../../Post';

export default function BlogSection({
  data,
  sectionTitle,
  sectionTitleUp,
  sectionTitleDown,
  sectionSubTitle,
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
      <div className="row gy-4">
        {data?.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <Post {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
