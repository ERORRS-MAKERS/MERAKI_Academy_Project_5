import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setLogin,
  setUserId,
  setPatientId,
} from '../../service/redux/reducers/auth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import { GoogleLogin } from '@react-oauth/google';
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
      console.log(results);

      dispatch(setLogin(results));
      dispatch(setUserId(results.userId));
      dispatch(setPatientId(results.patientId));

      if (results.role === 'admin') {
        navigate('/admin/dashbord');
      } else if (results.role === 'user') {
        navigate(`/user/profile/${results.userId}`);
      } else {
        navigate('/');
      }
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
      dispatch(setPatientId(results.patientId));
      navigate(`/user/profile/${results.userId}`);
    } catch (err) {
      setError(err.message || 'Guest login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    setError(null);

    try {
      const token = credentialResponse.credential;
      console.log(token);

      const response = await fetch('http://localhost:5000/users/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (data.success) {
        dispatch(
          setLogin({
            token: data.token,
            userId: data.user.id,
            userName: data.user.username,
            patientId: data.user.patientId,
          })
        );
        navigate(`/user/profile/${data.user.id}`);
      } else {
        setError(data.message || 'Google login failed');
      }
    } catch (err) {
      setError(err.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
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
          <button
            type="submit"
            className="cs_btn cs_style_1"
            style={{ width: '100%' }}
          >
            <span>Login</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
        <Spacing md="20" lg="50" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ width: '50%' }}>
            <div className="col-lg-12" style={{ width: '100%' }}>
              <button
                style={{ width: '100%' }}
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
          </div>
          <div className="col-lg-12" style={{ width: '50%' }}>
            <button
              style={{ width: '100%' }}
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
        </div>
        <Spacing md="20" lg="50" />
        <div className="col-lg-12">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={handleLoginFailure}
          />
        </div>
      </form>
    </>
  );
};
export default Form;
