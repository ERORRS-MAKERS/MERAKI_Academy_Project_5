import React from 'react';

export default function IconBoxStyle5({ title, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_5 cs_white_bg cs_radius_15">
      <div className="cs_iconbox_icon cs_center cs_accent_bg cs_radius_15">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title m-0 cs_fs_20 cs_medium">{title}</h2>
    </div>
  );
}
