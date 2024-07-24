import React from 'react';
import parse from 'html-react-parser';

export default function BannerSectionStyle8({
  imgUrl,
  bgUrl,
  title,
  subTitle,
}) {
  return (
    <div className="cs_banner_8_wrap">
      <div className="container">
        <div
          className="cs_banner cs_style_8 cs_radius_25 cs_bg_filed"
          style={{ backgroundImage: `url(${bgUrl})` }}
        >
          <div className="cs_banner_img">
            <img src={imgUrl} alt="Banner" />
          </div>
          <div className="cs_banner_in">
            <h2 className="cs_banner_title cs_fs_72 cs_white_color">
              {parse(title)}
            </h2>
            <p className="cs_banner_subtitle cs_heading_color cs_fs_20 mb-0">
              {parse(subTitle)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
