import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUserId } from '../../service/redux/reducers/auth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';

import  {pharmacistLogin}  from '../../service/api/userLogin';

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
      const results = await pharmacistLogin(email, password);
      dispatch(setLogin(results));
      dispatch(setUserId(results.userId));
      navigate(`/doctor/profile/${results.userId}`);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorPage message={error} />}
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
