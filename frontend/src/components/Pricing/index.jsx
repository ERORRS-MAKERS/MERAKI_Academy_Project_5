import React from 'react';
import Button from '../Button';
import { Icon } from '@iconify/react';

export default function Pricing({
  title,
  subTitle,
  price,
  period,
  featureList,
  btnText,
  btnUrl,
  popular,
}) {
  return (
    <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
      <div className="cs_pricing_card_head cs_accent_bg cs_white_color">
        <h3 className="cs_white_color cs_fs_24 cs_semibold">
          <span className="cs_accent_bg">{title}</span>
          {popular && (
            <span className="cs_heading_color cs_normal">Popular</span>
          )}
        </h3>
        {subTitle && <p>{subTitle}</p>}
        <h2 className="cs_white_color mb-0 cs_fs_72 cs_semibold">
          {price}
          <span className="cs_fs_24">{period}</span>
        </h2>
      </div>
      <div className="cs_pricing_card_body">
        <ul className="cs_pricing_card_feature cs_fs_20 cs_heading_color">
          {featureList?.map((item, index) => (
            <li key={index}>
              <i>
                <Icon icon="fa6-solid:circle-check" />
              </i>
              {item}
            </li>
          ))}
        </ul>
        <div className="cs_pricing_card_btn">
          <Button btnUrl={btnUrl} btnText={btnText} variant="w-100" />
        </div>
      </div>
    </div>
  );
}
