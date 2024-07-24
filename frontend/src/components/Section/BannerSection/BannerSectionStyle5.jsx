import React from 'react';
import parse from 'html-react-parser';

export default function BannerSectionStyle5({
  bgUrl,
  imgUrl,
  title,
  subTitle,
}) {
  return (
    <section
      className="cs_banner cs_style_5 cs_bg_filed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="cs_banner_img">
        <img src={imgUrl} alt="Banner" />
      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="cs_banner_title cs_fs_72">{parse(title)}</h2>
          <p className="cs_banner_subtitle cs_fs_20 mb-0 cs_heading_color">
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </section>
  );
}
