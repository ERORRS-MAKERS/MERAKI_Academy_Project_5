import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamStyle2({
  imgUrl,
  department,
  name,
  designation,
  description,
  social,
  href,
}) {
  return (
    <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
      <div className="cs_member_img">
        <Link to={href} className="d-block">
          <img src={imgUrl} alt="Doctor" />
        </Link>
        <div className="cs_label cs_white_color cs_accent_bg">{department}</div>
      </div>
      <div className="cs_team_meta cs_white_bg">
        <div>
          <h3 className="cs_member_name cs_fs_32">
            <Link to={href}>{name}</Link>
          </h3>
          <p className="cs_member_designation cs_heading_color cs_medium">
            {designation}
          </p>
          <p className="cs_member_description">{description}</p>
        </div>
        <div>
          <div className="cs_social_links">
            {social?.map((item, index) => (
              <Link to={item.href} key={index}>
                <Icon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
