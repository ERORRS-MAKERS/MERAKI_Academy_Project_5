import React from 'react';

export default function AppointmentSectionStyle3({ title }) {
  return (
    <div className="container">
      <form action="#" className="cs_appointment_form cs_style_1">
        <div className="cs_appointment_form_head">
          <h2 className="cs_fs_40 mb-0">{title}</h2>
          <div className="cs_appointment_categories">
            <div className="cs_appointment_category">
              <input
                type="radio"
                name="category"
                defaultValue="Pediatric"
                defaultChecked=""
              />
              <span>Pediatric</span>
            </div>
            <div className="cs_appointment_category">
              <input type="radio" name="category" defaultValue="Obstetrics" />
              <span>Obstetrics and Gynecology</span>
            </div>
            <div className="cs_appointment_category">
              <input type="radio" name="category" defaultValue="Cardiology" />
              <span>Cardiology</span>
            </div>
            <div className="cs_appointment_category">
              <input type="radio" name="category" defaultValue="Neurology" />
              <span>Neurology</span>
            </div>
          </div>
          <div className="cs_appointment_submit d-none d-lg-block">
            <button className="cs_btn cs_style_1">
              <span>Book Now</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
          </div>
        </div>
        <div className="cs_appointment_form_fields">
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_1.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Name</label>
              <input type="text" placeholder="David John" />
            </div>
          </div>
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_2.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Phone Number</label>
              <input type="text" placeholder="(123) 456 - 789" />
            </div>
          </div>
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_3.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Medical Record Number</label>
              <input type="text" placeholder="123456-7890-0987" />
            </div>
          </div>
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_4.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Reason for Visit</label>
              <input type="text" placeholder="Routine Checkup" />
            </div>
          </div>
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_5.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Preferred Date</label>
              <input
                type="text"
                placeholder="August 23, 2023"
                id="datepicker"
              />
            </div>
          </div>
          <div className="cs_appointment_form_field">
            <div className="cs_appointment_form_icon cs_center rounded-circle cs_accent_bg">
              <img src="/images/home_3/appointment_icon_6.svg" alt="Icon" />
            </div>
            <div className="cs_appointment_form_field_right">
              <label>Preferred Time</label>
              <input
                type="text"
                className="cs_timepicker"
                placeholder="10:00AM"
              />
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <div className="cs_height_30" />
          <button className="cs_btn cs_style_1">
            <span>Book Now</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}
