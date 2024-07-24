import React from 'react';
import Spacing from '../../Spacing';

export default function BrandsSection({ data, sectionTitle }) {
  return (
    <div className="container">
      {sectionTitle && (
        <>
          <h2 className="cs_fs_40 text-center mb-0 cs_semibold">
            {sectionTitle}
          </h2>
          <Spacing md="60" />
        </>
      )}

      <div className="cs_brands cs_style_1">
        {data?.map((item, index) => (
          <div className="cs_brand cs_center" key={index}>
            <img src={item.imgUrl} alt={item.imgAlt} />
          </div>
        ))}
      </div>
    </div>
  );
}
