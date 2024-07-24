import React from 'react';
import parser from 'html-react-parser';

export default function IconBoxStyle6({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_6">
      <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0">{parser(subTitle)}</p>
    </div>
  );
}
