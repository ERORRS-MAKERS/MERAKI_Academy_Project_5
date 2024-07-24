import React from 'react';
import Portfolio from '../../Portfolio';

export default function GallerySectionStyle2({ data }) {
  return (
    <div className="container">
      <div className="cs_gallery_grid_2">
        {data?.map((item, index) => (
          <div className="cs_grid_item" key={index}>
            <Portfolio {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
