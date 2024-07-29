import React, { useState,Suspense } from "react";
import { userInfo } from "../../service/api/reportsApi/getReportByNationalId";
import Loading from '.././Pages/Loading'
import ErrorPage from "../Pages/ErrorPage";
import { useLoaderData, Await } from 'react-router-dom';


const DoctorsRequestForm = () => {  //send to Doctor_requests table
    const {results}=useLoaderData()
  const [userData, setUserData] = useState();
  const [test, setTest] = useState();
  const [user_id, setUser_id] = useState();
  const [department_id,setDepartment_id]=useState()

  const saveData = async (national_id) => {
    const data = await userInfo(national_id);
    setUserData(data);
    setUser_id(data.user_id);
    console.log(data)
  };
 
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">National ID</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Patient National ID"
          onChange={(e) => {
            if (e.target.value.length === 6 || e.target.value.length === 9) {
              saveData(e.target.value);
              console.log(e.target.value);
            }
          }}
        />
        {userData && (
          <span>Name :{userData.first_name + " " + userData.last_name}</span>
        )}
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Type Of Test</label>
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
    
     
     
      <Suspense fallback={<Loading />}>
              <Await resolve={results} errorElement={<ErrorPage />}>
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

            <div className="col-lg-12">
        <button className="cs_btn cs_style_1" /* onClick={sendMedicalReport} */>
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
};

export default DoctorsRequestForm
