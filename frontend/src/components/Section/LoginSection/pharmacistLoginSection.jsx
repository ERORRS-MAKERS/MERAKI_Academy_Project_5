import React from 'react';
import Form from '../../PharmacistLoginForm/index';

const PharmacistLoginSection = () => {
  return (
    <>
      <div className="container" style={{ position: 'relative' }}>
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <h2 className="cs_fs_40 cs_medium mb-0">Pharmacist Login</h2>
            <div className="cs_height_42 cs_height_xl_25" />

            <Form />
          </div>
          <div className="col-lg-5 offset-lg-1 text-center">
            <img
              src="https://prohealth-react.vercel.app/images/home_1/appointment.jpeg"
              alt="Appointment"
              className="cs_radius_30"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacistLoginSection;
