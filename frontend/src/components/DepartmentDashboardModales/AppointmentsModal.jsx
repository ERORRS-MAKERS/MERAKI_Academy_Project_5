import React from 'react';
import UserProfileStyle from '../../components/IconBox/UserProfileStyle';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
// import DoctorsRequestForm from '../../DoctorsRequestForm/DoctorsRequestForm.jsx';

export default function UserProfileSections({ userId, sectionTitle }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      <div className="row justify-content-start">
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Transfer"
            subtitle="for another department"
            href={`/doctor_request`}
          />
        </div>
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Medical Report"
            subtitle="Create A Medical Report"
            href={`/medical_reports`}
          />
        </div>
        <div className="col-xl-4 col-md-6">
          <UserProfileStyle
            title="Prescriptions"
            subtitle="Create A Prescription"
            href={`/add_prescription`}
          />
        </div>
      </div>
    </div>
  );
}
