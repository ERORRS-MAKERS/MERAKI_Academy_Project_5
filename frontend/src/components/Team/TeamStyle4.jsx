import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamStyle4({
  imgUrl,
  name,
  designation,
  description,
  href,
  social,
}) {
  return (
    <div className="cs_team cs_style_1 text-center cs_radius_20 overflow-hidden">
      <Link to={href} className="cs_member_img d-block">
        <img src={imgUrl} alt="Doctor" />
      </Link>
      <div className="cs_team_meta cs_white_bg">
        <div>
          <h3 className="cs_member_name cs_fs_40">
            <Link to={href}>{name}</Link>
          </h3>
          <p className="cs_member_designation cs_fs_20 cs_heading_color">
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
