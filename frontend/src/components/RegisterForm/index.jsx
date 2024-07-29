import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUserId } from '../../service/redux/reducers/auth/index';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import {userRegister} from "../../service/api/userRegister"

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const [username, setUername] = useState('');
    const [national_id, setNational_id] = useState('');
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
            national_id,
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
        } };

  return (<>
    {loading && <Loading />}
    {error && <ErrorPage message={error} />}

    <form className="row"  onSubmit={handleSubmit}>

    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">username</label>
      <input type="text" className="cs_form_field" placeholder="David John"
                onChange={(e) => setUername(e.target.value)}
                value={username}
       />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>

    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">national_id</label>
      <input
        type="text"
        className="cs_form_field"
        placeholder="(123) 456 - 789"
        onChange={(e) => setNational_id(e.target.value)}
        value={national_id}
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>

    <div className="col-lg-12">
      <label className="cs_input_label cs_heading_color">
      first_name        </label>
      <input
        type="text"
        className="cs_form_field"
        placeholder="123456-7890-0987"
        onChange={(e) => setFirst_name(e.target.value)}
        value={first_name}
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>
  
    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">last_name</label>
      <input type="text" className="cs_form_field" placeholder="David John"
      value={last_name}
      onChange={(e) => setLast_name(e.target.value)}
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>
    
    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">age</label>
      <input type="number" className="cs_form_field" placeholder="David John"
       value={age}
       onChange={(e) => setAge(e.target.value)}
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>


    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">email</label>
      <input type="email" className="cs_form_field" placeholder="David John"
                value={email}
                onChange={(e) => setEmail(e.target.value)}      
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>


    <div className="col-lg-6">
      <label className="cs_input_label cs_heading_color">password</label>
      <input type="password" className="cs_form_field" placeholder="David John"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
      
      />
      <div className="cs_height_42 cs_height_xl_25" />
    </div>


    <div className="col-lg-12">
      <button type="submit" className="cs_btn cs_style_1">
        <span>Submit</span>
        <i>
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
        </i>
      </button>
    </div>
  </form>
</>)}
export default RegisterForm
