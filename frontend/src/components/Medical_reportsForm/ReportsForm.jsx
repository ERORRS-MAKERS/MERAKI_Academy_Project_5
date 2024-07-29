import React, { useState } from "react";
import { userInfo } from "../../service/api/reportsApi/getReportByNationalId";
import { SendReport } from "../../service/api/reportsApi/SendMedicalReport";

const MedicalReportsForm = () => {
  const [userData, setUserData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [user_id, setUser_id] = useState();

  const saveData = async (national_id) => {
    const data = await userInfo(national_id);
    setUserData(data);
    setUser_id(data.user_id);
    console.log(data)
  };
  const sendMedicalReport =async () => {
    console.log(user_id)
    let doctor_id=1
    let image_url='l'
  const report=await SendReport(title, description, user_id, doctor_id, image_url);
  console.log(report)
   
  };
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">National ID</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Patient National ID"
          onChange={(e) => {
            if (e.target.value.length === 6 || e.target.value.length === 9) {
              saveData(e.target.value);
              console.log(e.target.value);
            }
          }}
        />
        {userData && (
          <span>Name :{userData.first_name + " " + userData.last_name}</span>
        )}
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Title</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="write report title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">description</label>
        <input
          type="text"
          className="cs_form_field"
          style={{ height: "80px" }}
          placeholder="Write description of patient report here..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" onClick={sendMedicalReport}>
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
};

export default MedicalReportsForm;
