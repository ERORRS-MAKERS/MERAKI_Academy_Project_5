import React from 'react';
import Rating from '../Rating';

export default function TestimonialStyle4({
  text,
  ratingNumber,
  avatarImgUrl,
  avatarName,
  avatarDesignation,
}) {
  return (
    <div className="cs_testimonial cs_style_4 cs_radius_20">
      <div className="cs_testimonial_meta">
        <div className="cs_testimonial_avatar">
          <img src={avatarImgUrl} alt="Avatar" />
        </div>
        <div className="cs_testimonial_meta_right">
          <h3 className="cs_fs_24 cs_semibold m-0">{avatarName}</h3>
          <p className="cs_heading_color m-0">{avatarDesignation}</p>
        </div>
      </div>
      <div className="cs_testimonial_text cs_heading_color cs_fs_20">
        <p>{text}</p>
      </div>
      <Rating ratingNumber={ratingNumber} />
    </div>
  );
}
