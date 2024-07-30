import React, { useState } from 'react';
import { updatePrescriptions } from '../../service/api/updatePrescriptions';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = async (prescription_id, status_updated) => {
    setLoading(true);
    setError(null);

    try {
      await updatePrescriptions(prescription_id, status_updated);
      setStatus2(status_updated);
    } catch (err) {
      setError(err.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Loading /> */}
      {loading && <Loading />}
      {error && <ErrorPage message={error} />}
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
