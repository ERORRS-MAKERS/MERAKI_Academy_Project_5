import React, { Suspense, useState } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DoctorsRegister } from '../../service/api/doctors_register';
import Loading from '../Pages/Loading';
import ErrorPage from '../Pages/ErrorPage';

export default function ContactForm() {
  const navigate = useNavigate();
  const [doctor_name, setDoctor_name] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [specialist, setSpecialist] = useState(null);
  const [description, setDescription] = useState(null);
  const [department_id, setDepartment_id] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [thanks, setThanks] = useState(false);

  const data = {
    doctor_name,
    email,
    password,
    specialist,
    description,
    department_id,
  };

  const saveData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await DoctorsRegister(data);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
      setThanks(true);
      setTimeout(() => {
        setThanks(false);
        navigate('/');
      }, 3000);
    }
  };

  const ThanksMessage = () => {
    return (
      <>
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
          <p>We Will Call You!!</p>
        </div>
      </>
    );
  };

  const { results } = useLoaderData();
  return (
    <>
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
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">Name</label>
              <input
                type="text"
                className="cs_form_field"
                placeholder="Dr. David John"
                onChange={(e) => setDoctor_name(e.target.value)}
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>

            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">Email</label>
              <input
                type="email"
                className="cs_form_field"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">
                Password
              </label>
              <input
                type="password"
                className="cs_form_field"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>

            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">
                Your Photo
              </label>
              <input
                type="file"
                className="cs_form_field"
                placeholder="Your Photo"
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">Your CV</label>
              <input
                type="file"
                className="cs_form_field"
                placeholder="Your CV"
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">
                Specialist
              </label>
              <input
                type="text"
                className="cs_form_field"
                placeholder="Your Specialist"
                onChange={(e) => setSpecialist(e.target.value)}
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">
                Description
              </label>
              <textarea
                cols={30}
                rows={5}
                className="cs_form_field"
                placeholder="Describe Yourself"
                defaultValue={''}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">
                Department
              </label>
              <div className="cs_radio_group">
                <Suspense fallback={<p>Departments Loading...</p>}>
                  <Await
                    resolve={results}
                    errorElement={<p>Error Loading Departments</p>}
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
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <div className="cs_height_18" />
              <button
                className="cs_btn cs_style_1"
                onClick={(e) => {
                  saveData(data);
                }}
              >
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
