import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUserId } from '../../service/redux/reducers/auth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import { userRegister } from '../../service/api/userRegister';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await userRegister(
        username,
        password,
        first_name,
        last_name,
        age,
        email
      );

      console.log(response);
      dispatch(setLogin(response));
      dispatch(setUserId(response.userId));
      navigate('/');
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
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {error && <ErrorPage message={error} />}

      <form className="row" onSubmit={handleSubmit}>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">User Name</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="David John"
            onChange={(e) => setUername(e.target.value)}
            value={username}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">First Name</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="First Name"
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Last Name</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Age</label>
          <input
            type="number"
            className="cs_form_field"
            placeholder="30 Years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="David@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Password</label>
          <input
            type="password"
            className="cs_form_field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        <div className="col-lg-12">
          <button type="submit" className="cs_btn cs_style_1">
            <span>Register</span>
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
export default RegisterForm;
