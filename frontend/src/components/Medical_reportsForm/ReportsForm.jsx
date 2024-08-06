import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userInfo } from "../../service/api/reportsApi/getReportByNationalId";
import { SendReport } from "../../service/api/reportsApi/SendMedicalReport";
import { getImgUrl } from '../../service/api/CloudinaryApi';
import Loading from '../Pages/Loading';
import ErrorPage from '../Pages/ErrorPage';


export default function MedicalReportsForm (){
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [user_id, setUser_id] = useState();
  const [img_url, setImg_url] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [thanks, setThanks] = useState(false);

  const upload = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'maintain solutions');
    data.append('cloud_name', 'dkr5xxdly');

    try {
      const img_url = await getImgUrl(data);
      setImg_url(img_url);

     let  doctor_id= 2 ;
     await SendReport(title, description, user_id, doctor_id, img_url);

     setThanks(true);
     setTimeout(() => {
       setThanks(false);
       navigate('/');
     }, 3000);

    } catch (err) {
      console.log(err);
      setError('Upload failed');
    }
  };
  
  const saveData = async (national_id) => {
    setLoading(true);
    setError(null);
    try {
     const data = await userInfo(national_id);
     setUserData(data);
     setUser_id(data.user_id);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };
  const ThanksMessage = () => (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        width: '400px',
        textAlign: 'center',
      }}
    >
      <h1>Thank You</h1>
      <p>The medical report has been sent !</p>
    </div>
  );

  return (    <>
    <div style={{ position: 'relative' }}>
      {loading && (
        <Loading
          customStyle={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {thanks && <ThanksMessage />}
      {error && (
        <ErrorPage
          message={error}
          customStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            width: '600px',
            textAlign: 'center',
          }}
        />
      )}

      <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
        <div className="row">
        <div className="col-lg-6" />
        <h2 className="cs_fs_40 cs_medium mb-0">Patient Report</h2>
        <div/>
        <div className="cs_height_42 cs_height_xl_25" />
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
              <span>Name: {userData.first_name + " " + userData.last_name}</span>
            )}


            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Title</label>
            <input
              type="text"
              className="cs_form_field"
              placeholder="Write report title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Description</label>
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
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Your Medical Report</label>
            <input
              type="file"
              className="cs_form_field"
              placeholder="Your Medical Report"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="cs_height_42 cs_height_xl_25" />
          </div>
          <div className="col-lg-12">
            <div className="cs_height_18" />
            <button className="cs_btn cs_style_1" onClick={upload}>
              <span>Submit</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
