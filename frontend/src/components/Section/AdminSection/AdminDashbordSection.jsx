import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import UserProfileStyle from '../../IconBox/UserProfileStyle'


export default function AdminDashbordSections({ userId, sectionTitle }) {
  return (
    <div className="container cs_mt_minus_110">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row justify-content-start">
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Add New Department"
            subtitle="choose you new department and add it to your website"
            href={`/add_department`}
          />
        </div>
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Doctor Hiring Request"
            subtitle="choose new doctors to works with us"
            href={`/admin/requests`}
          />
        </div>
      </div> 
    </div>
  );
}
