import React from 'react';
import parse from 'html-react-parser';

export default function BannerSectionStyle2({ bgUrl, title, subTitle }) {
  return (
    <div className="container">
      <div
        className="cs_banner cs_style_2 cs_radius_25 cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="cs_section_heading cs_style_1">
          <h2 className="cs_section_title cs_fs_72 m-0 cs_white_color">
            {parse(title)}
          </h2>
          <div className="cs_height_22" />
          <p className="m-0 cs_white_color cs_fs_20 cs_medium">
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </div>
  );
}
