import axios from "axios";
import React, { useState } from "react";

const MedicalReportsForm = () => {
  const [userData, setUserData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [user_id, setUser_id] = useState();

  const saveData = (national_id) => {
    axios
      .get(`http://localhost:5000/reports/${national_id}`)
      .then((result) => {
        setUserData(result.data.result[0]);

        setUser_id(result.data.result[0].id);
      })
      .catch((err) => {
        console.log(err.message);
      });
   
  }
  const sendMedicalReport = () => {
    const currentDate = new Date();
    const date = `${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}-${currentDate.getFullYear()}`;

    axios.post("http://127.0.0.1:5000/reports", {
        title,
        description,
      user_id,
      doctor_id: '1',
      time: date,
      image_url:"l"
    }).then((result)=>{
  console.log(result)}).catch((Err)=>{
      console.log(Err)
  })
 
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
