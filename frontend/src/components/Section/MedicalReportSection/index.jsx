import React from "react";
import MedicalReportsForm from "../../Medical_reportsForm/ReportsForm";

const MedicalReportSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="cs_fs_40 cs_medium mb-0">Patient Report</h2>
          <div className="cs_height_42 cs_height_xl_25" />

          <MedicalReportsForm />
        </div>
      </div>
    </div>
  );
};

export default MedicalReportSection;
