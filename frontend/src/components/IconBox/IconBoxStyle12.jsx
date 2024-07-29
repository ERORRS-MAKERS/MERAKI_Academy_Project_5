import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyle12({
  doctor_id,
  user_id,
  first_name,
  last_name,
  pharmacist_id,
  title,
  description,
  quantity,
}) {
  return (
    <>
      <div className="cs_iconbox_info cs_radius_20" style={{ display: 'flex' }}>
        <div>
          <h4>{first_name + ' ' + last_name}</h4>
          <span className="cs_iconbox_circle cs_accent_bg" />
          <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
            <span>{title}</span>
          </h2>
          <p className="cs_iconbox_subtitle mb-0 cs_heading_color">
            {description}
          </p>
          <span>Quantity: {quantity}</span>
        </div>
        <div>
          <Link to="" className="cs_iconbox_icon cs_center">
            <img src="" alt="Icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
