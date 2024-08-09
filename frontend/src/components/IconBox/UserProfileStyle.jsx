import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
export default function UserProfileStyle({ title, href }) {
  return (
    <div className="cs_iconbox cs_style_7" style={{ padding: '35px' }}>
      <h2 className="cs_iconbox_title cs_fs_32">{parser(title)}</h2>
      <Link to={href} className="cs_iconbox_btn ">
        <img
          src="https://prohealth-react.vercel.app/images/icons/arrow_white.svg"
          alt="Icon"
        />
        <img
          src="https://prohealth-react.vercel.app/images/icons/arrow_white.svg"
          alt="Icon"
        />
      </Link>
    </div>
  );
}
