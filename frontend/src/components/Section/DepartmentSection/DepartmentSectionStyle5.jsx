import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle9 from '../../IconBox/IconBoxStyle9';

export default function DepartmentSectionStyle5({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <div className="row align-items-center flex-xl-row flex-column-reverse">
        <div className="col-xl-8">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[0]} />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[1]} />
            </div>
            <div className="col-lg-3" />
            <div className="col-lg-3" />
            <div className="col-lg-3" />
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[2]} />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[3]} />
            </div>
            <div className="col-lg-3" />
            <div className="col-lg-3" />
            <div className="col-lg-3" />
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[4]} />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle9 {...data[5]} />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="text-end">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          </div>
          <Spacing md="72" lg="50" />
        </div>
      </div>
    </div>
  );
}
