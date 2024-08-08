import React, { useState } from 'react';
import { addNewDepartment } from '../../service/api/AddNewDepartment';
import { getImgUrl } from '../../service/api/CloudinaryApi';
import { useNavigate } from 'react-router-dom';
import Loading from '.././Pages/Loading';
import ErrorPage from '../Pages/ErrorPage';

const NewDepartment = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [thanks, setThanks] = useState(false);

  const add = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'maintain solutions');
    data.append('cloud_name', 'dkr5xxdly');

    const url = await getImgUrl(data);
    try {
      setLoading(true);
      await addNewDepartment(name, description, url);
      setThanks(true);
      setTimeout(() => {
        setThanks(false);
        navigate('/admin/dashbord');
      }, 3000);
    } catch (err) {
      console.log(err);
      setError('Upload failed');
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

  return (
    <>
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
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Department Name
        </label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="write report title"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Description</label>
        <input
          type="text"
          className="cs_form_field"
          style={{ height: '80px' }}
          placeholder="Write description of patient report here..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Department Logo
        </label>
        <input
          type="file"
          className="cs_form_field"
          placeholder="Department Logo"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" onClick={add}>
          <span>Add</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </>
  );
};

export default NewDepartment;
