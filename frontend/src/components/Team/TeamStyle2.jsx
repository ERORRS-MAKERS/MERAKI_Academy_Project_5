import React from 'react';

export default function TeamStyle2({
  name,
  department_name,
  specialist,
  description,
  href,
  img_url,
}) {
  return (
    <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
      <div className="cs_member_img">
        <img src={img_url} alt="Doctor" />
        <div className="cs_label cs_white_color cs_accent_bg">
          {department_name}
        </div>
      </div>
      <div className="cs_team_meta cs_white_bg">
        <div>
          <h3 className="cs_member_name cs_fs_32">{name}</h3>
          <p className="cs_member_designation cs_heading_color cs_medium">
            {specialist}
          </p>
          <p className="cs_member_description">{description}</p>
        </div>
      </div>
    </div>
  );
}
