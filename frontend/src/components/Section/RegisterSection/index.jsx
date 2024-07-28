import React from 'react'

const index = () => {
  return (
    <div className="container">
    <div className="row align-items-center cs_gap_y_40">
      <div className="col-lg-6">
        <h2 className="cs_fs_40 cs_medium mb-0">Register</h2>
        <div className="cs_height_42 cs_height_xl_25" />

        <form action="#" className="row">
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">username</label>
    <input type="text" className="cs_form_field" placeholder="David John" />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>
  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">national_id</label>
    <input
      type="text"
      className="cs_form_field"
      placeholder="(123) 456 - 789"
    />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>
  <div className="col-lg-12">
    <label className="cs_input_label cs_heading_color">
    first_name        </label>
    <input
      type="text"
      className="cs_form_field"
      placeholder="123456-7890-0987"
    />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>

  <div className="col-lg-6">
    <label className="cs_input_label cs_heading_color">last_name</label>
    <input type="text" className="cs_form_field" placeholder="David John" />
    <div className="cs_height_42 cs_height_xl_25" />
  </div>
  
  <div className="col-lg-12">
    <button className="cs_btn cs_style_1">
      <span>Submit</span>
      <i>
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
        <img src="/images/icons/arrow_white.svg" alt="Icon" />
      </i>
    </button>
  </div>
</form>
      </div>
      <div class="col-lg-5 offset-lg-1 text-center">
    <img src="https://prohealth-react.vercel.app/images/home_1/appointment.jpeg" alt="Appointment" class="cs_radius_30"/>
      </div>
  </div>
</div>
)
}

export default index
