import React from 'react';
import Form from '../../DoctorLoginForm/index';

const doctorLoginSection = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <h2 className="cs_fs_70 cs_medium mb-0">Doctors Login</h2>
            <div
              className="cs_height_42 cs_height_xl_25"
              style={{ position: 'relative' }}
            />

            <Form />
          </div>
          <div
            className="col-lg-4 offset-lg-1 text-center cs_radius_30"
            style={{ backgroundColor: 'rgba(48, 123, 196, 0.5)' }}
          >
            <img
              src="https://prohealth-react.vercel.app/images/home_3/newsletter_img.png"
              alt="Appointment"
              className="cs_radius_30"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default doctorLoginSection;
