import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";

export default function AdminDashbordSections({ userId, sectionTitle }) {
  return (
    <div className="container cs_mt_minus_110">
      Admin Test Section
     {/*  <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row justify-content-start">
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Medical Reports"
            subtitle="View your medical reports"
            href={`/user/report/${userId}`}
          />
        </div>
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Prescriptions"
            subtitle="View your prescriptions"
            href={`/user/prescription/${userId}`}
          />
        </div>
      </div> */}
    </div>
  );
}
