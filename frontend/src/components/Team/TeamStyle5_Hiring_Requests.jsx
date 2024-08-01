import React, { useState } from "react";
import updateRequest from "../../service/api/adminDoctorsRequest/updateRequest"

export default function TeamStyle5({
  img_url,
  department_name,
  doctor_name,
  specialist,
  description,
  is_hired,
  id,
}) {
  const [is_hired0,setIs_hired]=useState(is_hired)
  const updatIsHiringStatus=async (id,value)=>{
//
const result =await updateRequest(id,value) 
console.log(result)
  }
  return (
    <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden ">
      <div className="cs_member_img">
          <img src={img_url} alt="Doctor" style={{height:'150px'}} />
        <div className="cs_label cs_white_color cs_accent_bg">
          {department_name}
        </div>
      </div>
      <div className="cs_team_meta cs_white_bg">
        <div>
          <h3 className="cs_member_name cs_fs_32">{doctor_name}</h3>
          <p className="cs_member_designation cs_heading_color cs_medium">
            {specialist}
          </p>
          <p className="cs_member_description">{description}</p>
        </div>
      </div>
      <div  style={{ alignSelf: 'center'  }}>
          <select id = {id}
            label="hello"
            value={is_hired0}
            style={{
              width: '220px',
              height: '40px',
              borderRadius: '11px',
              padding: '0 5px',
              border: '0',
              outline: '0',
            }}
             onChange={(e) => {
              setIs_hired(e.target.value);
              updatIsHiringStatus(e.target.id,e.target.value)            }}  
             
          >
            <option value={true}   >
              Accept to job
            </option>
            <option value={false}  >
              Pendding Request
            </option>
          </select>
        </div>
    </div>
  );
}
