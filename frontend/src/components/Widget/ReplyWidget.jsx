import React from 'react';

export default function ReplyWidget({ title }) {
  return (
    <>
      <h3 className="cs_semibold cs_fs_24 mb-0">{title}</h3>
      <div className="cs_height_12" />
      <p className="cs_fs_18">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="cs_height_7" />
      <form action="#">
        <label className="cs_input_label cs_heading_color cs_fs_18 cs_medium">
          Comment*
        </label>
        <textarea
          cols={30}
          rows={8}
          className="cs_form_field_2"
          defaultValue={''}
        />
        <div className="cs_height_20" />
        <label className="cs_input_label cs_heading_color cs_fs_18 cs_medium">
          Your Name*
        </label>
        <input type="text" className="cs_form_field_2" />
        <div className="cs_height_20" />
        <label className="cs_input_label cs_heading_color cs_fs_18 cs_medium">
          Your Email*
        </label>
        <input type="email" className="cs_form_field_2" />
        <div className="cs_height_30" />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Save my name and email in this browser for the next time I comment.
          </label>
        </div>
        <div className="cs_height_60" />
        <button className="cs_btn cs_style_1">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </form>
    </>
  );
}
