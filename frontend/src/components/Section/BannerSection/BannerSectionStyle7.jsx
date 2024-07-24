import React from 'react';
import parse from 'html-react-parser';

export default function BannerSectionStyle7({
  imgUrl,
  bgUrl,
  title,
  subTitle,
}) {
  return (
    <div className="container">
      <div
        className="cs_banner cs_style_7 cs_white_bg cs_radius_30 text-center cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      >
        <div className="cs_banner_img">
          <img src={imgUrl} alt="Banner" />
        </div>
        <h2 className="cs_banner_title cs_fs_72">{parse(title)}</h2>
        <p className="cs_banner_subtitle cs_fs_20 m-0 cs_medium">
          {parse(subTitle)}
        </p>
      </div>
    </div>
  );
}
