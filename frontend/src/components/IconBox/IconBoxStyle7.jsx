import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

export default function IconBoxStyle6({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_7">
      <div className="cs_iconbox_icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0">{parser(subTitle)}</p>
      <Link to={href} className="cs_iconbox_btn cs_center">
        <img src="images/icons/arrow_white.svg" alt="Icon" />
        <img src="images/icons/arrow_white.svg" alt="Icon" />
      </Link>
    </div>
  );
}
