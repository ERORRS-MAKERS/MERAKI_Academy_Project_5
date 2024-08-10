import React from 'react';

export default function Prescription({
  title,
  description,
  doctor_name,
  pharmacist_name,
  quantity,
  status,
}) {
  return (
    <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
      <div
        className="cs_pricing_card_head cs_accent_bg cs_white_color "
        style={{ height: ' 300px' }}
      >
        <h3 className="cs_white_color cs_fs_24 cs_semibold">
          <span className="cs_accent_bg">Doctor : {doctor_name}</span>
        </h3>
        <br />
        <br />
        <h3 className="cs_white_color cs_fs_24 cs_semibold">
          <span className="cs_accent_bg">Pharmacist: {pharmacist_name}</span>
        </h3>
        <br />
        <h2 className="cs_white_color mb-0 cs_fs_50 cs_semibold">
          {' '}
          Medicine: <br />
          {title}
        </h2>
      </div>
      <div className="cs_pricing_card_body">
        <p>instruction: {description}</p>
        <span>Quantity: {quantity}</span>
        <span>Served: {status.toString()}</span>
      </div>
    </div>
  );
}
