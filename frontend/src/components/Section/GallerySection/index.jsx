import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Portfolio from '../../Portfolio';

export default function GallerySection({ sectionTitle, sectionTitleUp, data }) {
  return (
    <div className="container">
      <div className="cs_gallery_grid_1">
        <div className="cs_grid_item">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="52" xl="52" lg="25" />
        </div>
        <div className="cs_grid_item"></div>
        {data?.map((item, index) => (
          <div className="cs_grid_item" key={index}>
            <Portfolio key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
