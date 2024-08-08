import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setLogin,
  setDoctorId,
} from '../../service/redux/reducers/doctorsAuth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';

import { doctorLogin } from '../../service/api/userLogin';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const results = await doctorLogin(email, password);
      dispatch(setLogin(results));
      dispatch(setDoctorId(results));
      navigate(`/department_dashboard`);
      console.log(results);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <Loading
          customStyle={{
            position: 'absolute',
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
            borderRadius: '11px',
          }}
        />
      )}
      <form className="row" onSubmit={handleLogin}>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="cs_form_field"
            placeholder="David_John@gmail.com"
            value={email}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="cs_form_field"
            placeholder="write your password"
            value={password}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <button type="submit" className="cs_btn cs_style_1">
            <span>Login</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
