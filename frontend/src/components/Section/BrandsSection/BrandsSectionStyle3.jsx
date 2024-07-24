import React from 'react';

export default function BrandsSectionStyle3({ data }) {
  return (
    <div className="cs_half_bg_2 cs_gray_bg_1">
      <div className="container">
        <div className="cs_brands cs_style_3 cs_radius_20">
          {data?.map((item, index) => (
            <div className="cs_brand" key={index}>
              <img src={item.imgUrl} alt={item.imgAlt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
