import React from 'react';

export default function Banner({ bgUrl, imgUrl, title, subTitle }) {
  return (
    <div className="container">
      <div
        className="cs_banner cs_style_1 cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img src={imgUrl} alt="Banner" className="cs_banner_img" />
        <h2 className="cs_banner_title cs_white_color cs_fs_72">{title}</h2>
        <p className="cs_banner_subtitle cs_heading_color cs_fs_20 cs_medium m-0">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
