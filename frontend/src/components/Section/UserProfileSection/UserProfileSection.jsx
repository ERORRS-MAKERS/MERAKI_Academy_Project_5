import React from "react";
import IconBoxStyle14 from '../../IconBox/IconBoxStyle14'
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";

export default function UserProfileSections({ userId, sectionTitle }) {
  return (
    <div className="container cs_mt_minus_110">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row justify-content-start">
        <div className="col-xl-4 col-md-6">
          <IconBoxStyle14
            title="Medical Reports"
            subtitle="View your medical reports"
            href={`/user/report/${userId}`}
          />
        </div>
      </div>
    </div>
  );
}
