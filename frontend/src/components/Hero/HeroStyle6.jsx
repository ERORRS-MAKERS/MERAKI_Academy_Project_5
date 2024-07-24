import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal';
import WaterWave from 'react-water-wave';

export default function HeroStyle6({
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
    <WaterWave className="cs_hero cs_style_2 " imageUrl={bgUrl}>
      {() => (
        <>
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_white_color cs_fs_84">{title}</h1>
              <div className="cs_hero_text_in">
                <div className="cs_hero_btn cs_white_color">
                  <Link to={btnUrl} className="cs_text_btn">
                    {btnText}
                  </Link>
                </div>
                <p className="cs_hero_subtitle cs_white_color">{subTitle}</p>
              </div>
            </div>
            <img src={imgUrl} alt="Hero" className="cs_hero_patents" />
          </div>
          <div className="container">
            <div className="cs_hero_bottom">
              <div className="cs_hero_bottom_left">
                <div className="cs_hero_btn_wrap">
                  <VideoModal
                    videoUrl={videoUrl}
                    videoBtnText={videoBtnText}
                    variant="cs_white_color"
                  />
                </div>
              </div>
              <div className="cs_hero_bottom_right">
                {funfactList?.length > 0 && (
                  <div className="cs_hero_funfact text-center">
                    {funfactList?.map((item, index) => (
                      <div className="cs_hero_funfact_col" key={index}>
                        <h3 className="cs_white_color cs_fs_72">
                          {item.number}
                        </h3>
                        <p className="cs_white_color mb-0">{item.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </WaterWave>
  );
}
