import React from 'react';

export default function Feature({ iconSrc, title, subTitle }) {
  return (
    <div className="cs_feature cs_style_1 cs_shadow_1 cs_radius_25 cs_white_bg">
      <h2 className="cs_feature_title cs_semibold cs_fs_40 cs_center">
        <span className="cs_feature_icon cs_accent_bg cs_center rounded-circle">
          <img src={iconSrc} alt="Icon" />
        </span>
        <span>{title}</span>
      </h2>
      <p className="m-0 text-center">{subTitle}</p>
    </div>
  );
}
