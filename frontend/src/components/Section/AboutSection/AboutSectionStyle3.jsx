import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';

export default function AboutSectionStyle3({
  titleUp,
  title,
  subTitle,
  imgUrl,
}) {
  return (
    <div className="cs_about cs_style_2 cs_shape_wrap">
      <div className="cs_shape_3">
        <svg
          width={738}
          height={1021}
          viewBox="0 0 738 1021"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M506.527 867.937C615.393 1097.48 818.459 1018.63 907.122 949.788C1042.42 829.481 1036.04 611.775 1029.54 527.791C1024.34 460.604 1062.82 284.256 1082.7 204.481C1083.75 -64.008 818.226 5.58123 770.748 15.9811C723.269 26.3809 576.724 101.716 421.771 86.8061C297.808 74.8779 186.268 99.512 145.993 113.32C-23.6388 193.807 -2.65999 291.251 7.10276 333.378C16.8655 375.504 69.7486 450.893 258.934 518.436C410.283 572.47 487.55 773.465 506.527 867.937Z"
            fill="url(#paint0_linear_6_231)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6_231"
              x1="916.904"
              y1="949.82"
              x2="393.707"
              y2="-20.953"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#86BBF1" offset={0} />
              <stop offset={1} stopColor="#D2EAEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Spacing md="190" xl="150" lg="105" />
      <div className="container">
        <div className="row align-items-end cs_gap_y_50">
          <div className="col-xl-6">
            <SectionHeading titleUp={titleUp} title={title} />
            <Spacing md="85" xl="40" lg="30" />
            <p className="m-0">{subTitle}</p>
          </div>
          <div className="col-xl-6">
            <div className="cs_about_img">
              <img src={imgUrl} alt="About" className="cs_radius_30 w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
