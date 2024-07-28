import React from 'react';

export default function IconBoxStyle4({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_4">
      <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
    </div>
  );
}
