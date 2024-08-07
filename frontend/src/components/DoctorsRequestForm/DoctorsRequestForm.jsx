import React, { useState, Suspense } from 'react';
import Loading from '.././Pages/Loading';
import ErrorPage from '../Pages/ErrorPage';
import { useLoaderData, Await } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SendForDepartments } from '../../service/api/SendDoctorRequest';

const DoctorsRequestForm = () => {
  const user_id = useSelector((store) => store.auth.userId);
  const doctor_id = useSelector((store) => store.doctor.doctorId);

  const navigate = useNavigate();

  const { results } = useLoaderData();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [thanks, setThanks] = useState(false);
  const [test, setTest] = useState();

  const [department_id, setDepartment_id] = useState();

  const sendReport = async () => {
    try {
      setLoading(true);

      await SendForDepartments(test, department_id, user_id, doctor_id);

      setThanks(true);
      setTimeout(() => {
        setThanks(false);
        navigate('/department_dashboard');
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
      <div className="row">
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">
            Type Of Test
          </label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="write report title"
            onChange={(e) => {
              setTest(e.target.value);
            }}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Department</label>
          <div className="cs_radio_group">
            <Suspense fallback={<p>Departments Loading...</p>}>
              <Await
                resolve={results}
                errorElement={<p>Error Loading Department</p>}
              >
                {(results) => {
                  return results.data.result?.map((item, index) => (
                    <div className="cs_radio_wrap" key={index}>
                      <input
                        className="cs_radio_input"
                        type="radio"
                        name="department"
                        id={item.department_name}
                        defaultValue={item.department_name}
                        onClick={(e) => setDepartment_id(item.id)}
                      />
                      <label
                        className="cs_radio_label"
                        htmlFor={item.department_name}
                      >
                        {item.department_name}
                      </label>
                    </div>
                  ));
                }}
              </Await>
            </Suspense>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
        <div className="col-lg-12">
          <button className="cs_btn cs_style_1" onClick={sendReport}>
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

export default DoctorsRequestForm;
