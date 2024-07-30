import React, { useState } from 'react';
import { updatePrescriptions } from '../../service/api/updatePrescriptions';

export default function IconBoxStyle12({
  id,
  first_name,
  last_name,
  pharmacist_id,
  status,
  title,
  description,
  quantity,
}) {
  const [status2, setStatus2] = useState(status);
  const saveData = async (prescription_id, status_updated) => {
    const data = await updatePrescriptions(prescription_id, status_updated);
    if (data.success) {
      setStatus2(status_updated);
    }
  };

  return (
    <>
      <div
        className="cs_iconbox_info cs_radius_20"
        style={{ display: 'flex', gap: '10px' }}
      >
        <div>
          <span className="cs_iconbox_circle cs_accent_bg" />
          <h4>{first_name + ' ' + last_name}</h4>
          <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
            <span>{title}</span>
          </h2>
          <p className="cs_iconbox_subtitle mb-0 cs_heading_color">
            {description}
          </p>
          <span>Quantity: {quantity}</span>
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
              saveData(id, e.target.value === 'true');
            }}
            value={status2}
          >
            <option value={true} defaultValue={status === true}>
              Served
            </option>
            <option value={false} defaultValue={status === false}>
              Not Served
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
