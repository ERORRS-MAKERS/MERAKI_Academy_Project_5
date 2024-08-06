import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUserId } from '../../service/redux/reducers/auth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';

import { userLogin, guestLogin } from '../../service/api/userLogin';
import Spacing from '../Spacing';

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
      const results = await userLogin(email, password);
      dispatch(setLogin(results));
      dispatch(setUserId(results.userId));
      navigate(`/user/profile/${results.userId}`);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await guestLogin();
      dispatch(setLogin(results));
      dispatch(setUserId(results.userId));
      navigate(`/user/profile/${results.userId}`);
    } catch (err) {
      setError(err.message || 'Guest login failed');
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
        <Spacing md="20" lg="50" />
        <div className="col-lg-12">
          <button
            onClick={() => {
              navigate('/register');
            }}
            className="cs_btn cs_style_1"
          >
            <span>Register</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
        <Spacing md="20" lg="50" />
        <div className="col-lg-12">
          <button
            type="button"
            onClick={handleGuestLogin}
            className="cs_btn cs_style_1"
          >
            <span>Login as Guest</span>
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
