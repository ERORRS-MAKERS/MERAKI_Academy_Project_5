import React from 'react';
import Form from '../../LoginForm/index';
import Spacing from '../../Spacing';

const LoginSection = () => {
  return (
    <>
      <div className="container">
        <div className="row  cs_gap_y_40">
          <div className="col-lg-6">
            <h2 className="cs_fs_40 cs_medium mb-0">Login</h2>
            <div
              className="cs_height_42 cs_height_xl_25"
              style={{ position: 'relative' }}
            />

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
      <Spacing md="100" lg="50" />
    </>
  );
};

export default LoginSection;
