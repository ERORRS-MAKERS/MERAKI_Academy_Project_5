import React from 'react';
import AppointmentFormStyle2 from '../AppointmentForm/AppointmentFormStyle2';

export default function HeroStyle4({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  imgUrl2,
  imgUrl3,
}) {
  return (
    <section
      className="cs_hero cs_style_4 cs_bg_filed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_84">{title}</h1>
          <p className="cs_hero_subtitle cs_white_color cs_fs_20">{subTitle}</p>
        </div>
        <AppointmentFormStyle2 />
      </div>
      <img src={imgUrl} alt="Hero" className="cs_hero_img_1" />
      <img src={imgUrl2} alt="Hero" className="cs_hero_img_2" />
      <img src={imgUrl3} alt="Hero" className="cs_hero_img_3" />
    </section>
  );
}
