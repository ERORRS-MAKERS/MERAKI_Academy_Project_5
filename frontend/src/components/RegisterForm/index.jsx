import React from 'react'

const RegisterForm = () => {
  return (
    <form className="row">
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
    
    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">age</label>
      <input type="number" className="cs_form_field" placeholder="David John" />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>


    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">email</label>
      <input type="email" className="cs_form_field" placeholder="David John" />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>


    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">password</label>
      <input type="password" className="cs_form_field" placeholder="David John" />
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
    )
}

export default RegisterForm
