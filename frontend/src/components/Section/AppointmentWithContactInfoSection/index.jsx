import React from 'react';
import AppointmentForm from '../../AppointmentForm';
const contactInfo = [
  { title: 'Phone', subTitle: '123-456-7890' },
  { title: 'Email Us', subTitle: 'hellocallcenter@gmail.com' },
  { title: 'Our Location', subTitle: '123 Anywhere St., Any City, 12345' },
];

export default function AppointmentWithContactInfoSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="cs_fs_40 cs_medium mb-0">Appoinment</h2>
          <div className="cs_height_42 cs_height_xl_25" />
          <AppointmentForm />
        </div>
        <div className="col-lg-4 offset-lg-1">
          <div className="cs_height_lg_100" />
          <h2 className="cs_fs_40 cs_medium mb-0">Contact Info</h2>
          <div className="cs_height_60 cs_height_xl_40" />
          <img
            src="/images/appointments/appointment_img.jpeg"
            alt="Appointment"
            className="cs_radius_25 w-100"
          />
          <div className="cs_height_100 cs_height_xl_60" />
          <ul className="cs_contact_info cs_style_1 cs_mp0">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <h3 className="cs_fs_24 cs_semibold mb-0">{item.title}</h3>
                <p className="mb-0 cs_heading_color">{item.subTitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
