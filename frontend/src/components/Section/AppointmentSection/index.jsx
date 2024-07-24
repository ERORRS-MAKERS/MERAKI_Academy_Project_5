import React from 'react';
import SectionHeading from '../../SectionHeading';
import AppointmentForm from '../../AppointmentForm';
import Spacing from '../../Spacing';

export default function AppointmentSection({
  sectionTitle,
  sectionTitleUp,
  imgUrl,
}) {
  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_2">
        <svg
          width={1089}
          height={1002}
          viewBox="0 0 1089 1002"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M444.57 826.314C529.104 1065.89 739.237 1008.47 834.547 949.171C981.567 843.507 997.742 626.309 999.967 542.103C1001.75 474.739 1058.26 303.318 1086.29 226.028C1115.11 -40.9119 843.814 0.833657 795.515 6.26561C747.215 11.6976 593.662 71.4673 441.083 40.606C319.02 15.917 205.529 28.8791 164.042 38.4462C-13.0065 100.952 -2.22156 200.043 3.13034 242.954C8.48234 285.864 53.2821 366.319 234.465 453.073C379.411 522.475 435.469 730.386 444.57 826.314Z"
            fill="url(#paint0_linear_5_285)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5_285"
              x1="844.274"
              y1="950.214"
              x2="424.319"
              y2="-69.4782"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#86BBF1" offset={0} />
              <stop offset={1} stopColor="#D2EAEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <Spacing md="72" lg="50" />
            <AppointmentForm />
          </div>
          <div className="col-lg-5 offset-lg-1 text-center">
            <img src={imgUrl} alt="Appointment" className="cs_radius_30" />
          </div>
        </div>
      </div>
    </div>
  );
}
