import React from 'react';
import parser from 'html-react-parser';

export default function IconBoxStyle6({
  department_name,
  department_description,
  href,
}) {
  return (
    <div className="cs_iconbox cs_style_7">
      <div className="cs_iconbox_icon">
        <img
          src="https://prohealth-react.vercel.app/images/departments/icon_1.svg"
          alt="Icon"
        />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{parser(department_name)}</h2>
      <p className="cs_iconbox_subtitle m-0">
        {parser(department_description)}
      </p>
      <span className="cs_iconbox_btn cs_center">
        <img src="images/icons/arrow_white.svg" alt="Icon" />
        <img src="images/icons/arrow_white.svg" alt="Icon" />
      </span>
    </div>
  );
}
