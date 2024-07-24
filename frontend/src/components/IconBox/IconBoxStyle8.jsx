import React from 'react';

export default function IconBoxStyle8({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_8 text-center cs_radius_20">
      <div className="cs_iconbox_icon rounded-circle cs_center">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_semibold cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
    </div>
  );
}
