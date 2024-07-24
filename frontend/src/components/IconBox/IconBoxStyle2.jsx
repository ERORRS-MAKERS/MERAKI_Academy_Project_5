import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyle2({ title, href, iconUrl }) {
  return (
    <Link to={href} className="cs_iconbox cs_style_2">
      <div className="cs_iconbox_icon">
        <img src={iconUrl} alt="Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">{title}</h2>
    </Link>
  );
}
