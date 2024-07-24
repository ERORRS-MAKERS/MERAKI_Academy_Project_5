import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import DepartmentCarousel from '../../Slider/DepartmentCarousel';

export default function DepartmentSection({ sectionTitle, bgUrl, data }) {
  return (
    <div className="container">
      <div className="cs_departments cs_style_1">
        <div
          className="cs_departments_bg cs_radius_25"
          style={{
            backgroundImage: `url(${bgUrl})`,
          }}
        />
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
        <div className="cs_department_list">
          <DepartmentCarousel data={data} />
        </div>
      </div>
    </div>
  );
}
