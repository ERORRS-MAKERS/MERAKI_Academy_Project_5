import React from 'react';
import Button from '../Button';

export default function Cta({ title, subTitle, bgUrl, btnUrl, btnText }) {
  return (
    <div className="container">
      <div
        className="cs_cta cs_style_1 cs_bg_filed cs_radius_20"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <h2 className="cs_cta_title cs_fs_72">{title}</h2>
        <p className="cs_cta_subtitle cs_heading_color">{subTitle}</p>
        <Button btnUrl={btnUrl} btnText={btnText} />
      </div>
    </div>
  );
}
