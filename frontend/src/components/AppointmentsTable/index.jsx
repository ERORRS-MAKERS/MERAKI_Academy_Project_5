import React, { useState } from 'react';
import { updatePrescriptions } from '../../service/api/updatePrescriptions';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export default function IconBoxStyle12() {
  const data = useSelector((store) => store.appointments.appointment);

  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <div
            className="cs_iconbox_info cs_radius_20"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <div style={{ position: 'relative' }}>
              <span className="cs_iconbox_circle cs_accent_bg" />
              <h4>Time: {format(new Date(item.time), 'yyyy-MM-dd HH:mm')}</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                <span>{item.department_name}</span>
              </h2>
              <p className="cs_iconbox_subtitle mb-0 cs_heading_color">
                {item.notes}
              </p>
              <span></span>
            </div>
            <div style={{ alignSelf: 'end' }}>
              <select
                name="served"
                className="cs_iconbox_icon cs_center"
                style={{
                  width: '120px',
                  height: '40px',
                  borderRadius: '11px',
                  padding: '0 5px',
                  border: '0',
                  outline: '0',
                  color: '#FFF',
                }}
                onChange={(e) => {
                  // saveData(id, e.target.value === 'true');
                }}
                // value={status2}
              >
                <option value={true} defaultValue={true}>
                  Served
                </option>
                <option value={false} defaultValue={false}>
                  Not Served
                </option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
