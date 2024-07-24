import React from 'react';
import parse from 'html-react-parser';

export default function BannerSectionStyle10({ imgUrl, title }) {
  return (
    <div className="container">
      <div className="cs_banner cs_style_9 cs_type_1 cs_white_bg cs_radius_30">
        <div className="cs_banner_img">
          <img src={imgUrl} alt="Banner" />
        </div>
        <h2 className="cs_banner_title cs_fs_72 mb-0">{parse(title)}</h2>
      </div>
    </div>
  );
}
