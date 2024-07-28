import React from 'react';
import { format } from 'date-fns';

export default function Reports({
  title,
  description,
  doctor_name,
  image_url,
  date,
}) {
  const btnText = 'Download Document';
  const formattedDate = format(new Date(date), 'yyyy-MM-dd');
  return (
    <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
      <div className="cs_pricing_card_head cs_accent_bg cs_white_color">
        <h3 className="cs_white_color cs_fs_24 cs_semibold">
          <span className="cs_accent_bg">{doctor_name}</span>
        </h3>
        <h2 className="cs_white_color mb-0 cs_fs_72 cs_semibold">{title}</h2>
        <span>{formattedDate}</span>
      </div>
      <div className="cs_pricing_card_body">
        <p>{description}</p>
        <div className="cs_pricing_card_btn">
          <a href={image_url} className="cs_btn cs_style_1 w-100">
            <span>{btnText}</span>
            <i>
              <img
                src="https://prohealth-react.vercel.app/images/icons/arrow_white.svg"
                alt="Icon"
              />
              <img
                src="https://prohealth-react.vercel.app/images/icons/arrow_white.svg"
                alt="Icon"
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
