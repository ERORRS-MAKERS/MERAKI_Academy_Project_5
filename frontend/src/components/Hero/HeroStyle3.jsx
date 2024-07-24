import { Icon } from '@iconify/react';
import React from 'react';

export default function HeroStyle3({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  avatarImgUrl,
  avatarName,
  avatarSpeciality,
  avatarSheduleList,
}) {
  return (
    <section className="cs_hero cs_style_3">
      <div
        className="cs_hero_bg cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_card cs_radius_20 cs_white_color">
            <div className="cs_hero_card_media">
              <img src={avatarImgUrl} alt="Avatar" />
              <div>
                <h4 className="cs_fs_24 cs_semibold cs_white_color m-0">
                  {avatarName}
                </h4>
                <p className="m-0">{avatarSpeciality}</p>
              </div>
            </div>
            <ul className="cs_hero_shedule_list">
              {avatarSheduleList.map((item, index) => (
                <li key={index}>
                  <i>
                    <Icon icon={item.icon} />
                  </i>
                  <span>{item.title}</span>
                  <strong>{item.details}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_fs_94">{title}</h1>
          <p className="cs_hero_subtitle cs_white_color cs_fs_20 m-0">
            {subTitle}
          </p>
        </div>
      </div>
      <img src={imgUrl} alt="Hero" className="cs_hero_img_1" />
      <img src={imgUrl2} alt="Hero" className="cs_hero_img_2" />
      <img src={imgUrl3} alt="Hero" className="cs_hero_img_3" />
      <img src={imgUrl4} alt="Hero" className="cs_hero_img_4" />
    </section>
  );
}
