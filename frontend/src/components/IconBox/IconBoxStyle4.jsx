import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyle4({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_4">
      <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
      {href && (
        <Link to={href} className="cs_iconbox_btn cs_center">
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
        </Link>
      )}
    </div>
  );
}
