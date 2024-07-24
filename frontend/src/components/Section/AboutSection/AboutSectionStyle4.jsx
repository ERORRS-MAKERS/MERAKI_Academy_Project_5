import React from 'react';
import Spacing from '../../Spacing';
import parse from 'html-react-parser';

export default function AboutSectionStyle4({
  imgUrl,
  spiningImgUrl,
  titleUp,
  title,
  subTitle,
}) {
  return (
    <div className="cs_about cs_style_1 cs_type_1 cs_shape_wrap">
      <div className="cs_shape_1 cs_position_4" />
      <div className="container">
        <div className="row align-items-center cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_about_img">
              <img src={imgUrl} alt="About" />
              <div className="cs_about_mini_img">
                <img
                  src={spiningImgUrl}
                  alt="Mini"
                  className="cs_rotate_animation"
                />
                <img
                  src="/images/icons/tick.svg"
                  alt="Right"
                  className="cs_right_icon"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                  {titleUp}
                </h3>
                <Spacing md="5" />
                <h2 className="cs_section_title cs_fs_72 m-0">
                  {parse(title)}
                </h2>
                <Spacing md="85" xl="50" />
                <p className="mb-0">{parse(subTitle)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
