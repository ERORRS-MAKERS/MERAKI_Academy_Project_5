import React from 'react';

export default function IconBoxStyle11({ title, subTitle, iconSrc }) {
  return (
    <div className="cs_iconbox cs_style_11 cs_radius_25">
      <div className="cs_iconbox_icon">
        <img src={iconSrc} alt="Icon" />
      </div>
      <div className="cs_iconbox_right">
        <h3 className="cs_iconbox_title cs_fs_24 mb-0">{title}</h3>
        <p className="cs_iconbox_subtitle mb-0 cs_heading_color">{subTitle}</p>
      </div>
    </div>
  );
}
