import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle12 from '../../IconBox/IconBoxStyle12';
import { useSelector } from 'react-redux';

export default function DepartmentSectionStyle6({
  sectionTitle,
  sectionTitleUp,
}) {
  const data = useSelector((store) => store.prescriptions.prescription);
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div
        className="cs_iconbox cs_style_12"
        style={{ justifyContent: 'start' }}
      >
        {data?.map((item, index) => (
          <div key={index}>
            <IconBoxStyle12 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
