import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Team({
  img_url,
  name,
  specialist,
  description,
  social,
}) {
  console.log(img_url,
    name,
    specialist,
    description,
    social,
  )
  return (
    <div className="cs_team cs_style_1 text-center cs_radius_20 cs_type_1">
      <div className="cs_member_img">
        <img src={img_url} alt={name} style={{width:'231px',height:'231px',backgroundColor:'#A8CFEF',borderRadius: '50%'}} />
      </div>
      <div className="cs_team_meta">
        <div>
          <h3 className="cs_member_name cs_semibold cs_fs_40">{name}</h3>
          <p className="cs_member_designation cs_fs_20 cs_heading_color">
            {specialist}
          </p>
          <p className="cs_member_description">{description}</p>
        </div>
      </div>
    </div>
  );
}
