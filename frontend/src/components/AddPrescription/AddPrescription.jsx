import React, { useState } from 'react';
import Loading from '.././Pages/Loading';
import ErrorPage from '../Pages/ErrorPage';
import { useSelector } from 'react-redux';
import { addPrescriptions } from '../../service/api/addPrescription';
import { useNavigate } from 'react-router-dom';

const AddPrescriptionForm = () => {
  const user_id = useSelector((store) => store.auth.userId);
  const doctor_id = useSelector((store) => store.doctor.doctorId);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPrescription = async () => {
    setLoading(true);
    setError(null);
    try {
      await addPrescriptions({
        doctor_id,
        user_id,
        pharmacist_id: 3,
        title,
        description,
        quantity,
      });
      navigate('/department_dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

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
      <div>
        <h1>Add Prescription</h1>
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
        </div>
        <div className="cs_height_50 cs_height_xl_25" />
        <div className="col-lg-10">
          <label className="cs_input_label cs_heading_color">description</label>
          <input
            type="text"
            className="cs_form_field"
            style={{ height: '130px' }}
            placeholder="Write description of patient report here..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Quantity</label>
          <input
            type="number"
            className="cs_form_field"
            placeholder="Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
        <div className="col-lg-12">
          <button
            className="cs_btn cs_style_1"
            onClick={() => sendPrescription()}
          >
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPrescriptionForm;
