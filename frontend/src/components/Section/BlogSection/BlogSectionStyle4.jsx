import React from 'react';
import Post from '../../Post';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import PostStyle2 from '../../Post/PostStyle2';

export default function BlogSectionStyle4({
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
      <div className="cs_blog_grid_1">
        {data?.map((item, index) => (
          <div key={index}>
            {index === 0 ? (
              <Post {...item} variant="cs_type_2" />
            ) : (
              <PostStyle2 {...item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
