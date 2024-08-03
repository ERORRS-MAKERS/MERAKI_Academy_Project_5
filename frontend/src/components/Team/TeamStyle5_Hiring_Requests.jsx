import React from "react";
import updateRequest from "../../service/api/adminDoctorsRequest/updateRequest";
import { updateHiringRequestById } from "../../service/redux/reducers/doctorsHiringRequest/index";
import { useDispatch, useSelector } from "react-redux";

export default function TeamStyle5() {
  const { hiringRequest } = useSelector((state) => ({
    hiringRequest: state.hiringRequest.hiringRequest,
  }));

  const dispatch = useDispatch();

  const updateIsHiringStatus = async (id, value) => {
    try {
      const result = await updateRequest(id, value);
      console.log('from update', result);
      dispatch(updateHiringRequestById(result.doctor));
    } catch (error) {
      console.error('Error updating hiring status:', error);
    }
  };

  return (
    <>
      {hiringRequest?.map((item) => (
        <div key={item.id} className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
          <div className="cs_member_img">
            <img src={item.img_url} alt="Doctor" style={{ height: '220px' }} />
            <div className="cs_label cs_white_color cs_accent_bg">
              {item.department_name}
            </div>
          </div>
          <div className="cs_team_meta cs_white_bg" style={{height:'250px'}}>
            <div>
              <h3 className="cs_member_name cs_fs_32">{item.doctor_name}</h3>
              <p className="cs_member_designation cs_heading_color cs_medium">
                {item.specialist}
              </p>
              <p className="cs_member_description">{item.description}</p>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <select
              id={item.id}
              value={item.is_hired ? 'true' : 'false'}
              style={{
                width: '220px',
                height: '40px',
                borderRadius: '11px',
                padding: '5px 10px',
                border: '0',
                outline: '0',
                margin:'20px 0',
              }}
              onChange={(e) => {
                updateIsHiringStatus(e.target.id, e.target.value === 'true');
              }}
            >
              <option value="true">
                Accept to job
              </option>
              <option value="false">
                Pending Request
              </option>
            </select>
          </div>
        </div>
      ))}
    </>
  );
}
