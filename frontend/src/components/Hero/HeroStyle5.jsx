import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function HeroStyle5({
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  funfactList,
  btnText,
  btnUrl,
}) {
  return (
    <section className="cs_hero cs_style_2 cs_type_1">
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_84">
            {parse(title)}
          </h1>
          <div className="cs_hero_text_in">
            <div className="cs_hero_btn cs_white_color">
              <Link to={btnUrl} className="cs_text_btn">
                {btnText}
              </Link>
            </div>
            <p className="cs_hero_subtitle cs_white_color">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="cs_hero_img">
        <img src={imgUrl} alt="Hero" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_hero_funfact text-center">
              {funfactList?.map((item, index) => (
                <div className="cs_hero_funfact_col" key={index}>
                  <h3 className="cs_white_color cs_fs_72">{item.number}</h3>
                  <p className="cs_white_color mb-0">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
