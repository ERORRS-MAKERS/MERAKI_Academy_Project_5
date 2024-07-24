import React from 'react';
import parser from 'html-react-parser';

export default function BannerSectionStyle4({
  bgUrl,
  title,
  subTitle,
  center,
}) {
  return (
    <div className="container">
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          center ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      >
        <h2 className="cs_banner_title cs_white_color cs_fs_72">
          {parser(title)}
        </h2>
        <p className="cs_banner_subtitle cs_white_color cs_fs_20 m-0">
          {parser(subTitle)}
        </p>
      </div>
    </div>
  );
}
