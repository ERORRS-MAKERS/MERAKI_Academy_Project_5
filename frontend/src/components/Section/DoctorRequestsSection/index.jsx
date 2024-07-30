import React from "react";
import DoctorsRequestForm from '../../DoctorsRequestForm/DoctorsRequestForm.jsx';
const DepartmentReportSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="cs_fs_40 cs_medium mb-0">Department Report</h2>
          <div className="cs_height_42 cs_height_xl_25" />

          <DoctorsRequestForm />
        </div>
      </div>
    </div>
  );
};

export default  DepartmentReportSection;
