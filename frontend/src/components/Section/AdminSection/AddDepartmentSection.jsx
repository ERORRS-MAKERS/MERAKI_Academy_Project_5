import React from 'react';
import NewDepartment from '../../DepartmentsForm/AddDepartmentForm';
const NewDepartmentSection = () => {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="row">
        <div className="col-lg-7">
          <h2 className="cs_fs_40 cs_medium mb-0">Add New Department</h2>
          <div className="cs_height_42 cs_height_xl_25" />

          <NewDepartment />
        </div>
      </div>
    </div>
  );
};

export default NewDepartmentSection;
