import React from 'react';
import TeamSlider from '../../Slider/TeamSlider';

export default function TeamSectionStyle3({ sectionTitle, data }) {
  return (
    <div className="container">
      <div className="position-relative">
        <h3 className="cs_fs_72 cs_related_doctor_title">{sectionTitle}</h3>
        <TeamSlider data={data} />
      </div>
    </div>
  );
}
