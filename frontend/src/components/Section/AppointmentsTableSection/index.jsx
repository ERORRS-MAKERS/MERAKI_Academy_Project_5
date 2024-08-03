import React, { useEffect } from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import AppointmentsTable from '../../AppointmentsTable';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentsByUserId } from '../../../service/api/getAppointmentsByUserId';
import { setAppointments } from '../../../service/redux/reducers/AppointmentsTableUser';

export default function AppointmentsSection({ sectionTitle, sectionTitleUp }) {
  const userId = useSelector((store) => store.auth.userId);
  const dispatch = useDispatch();

  const getUserAppointments = async () => {
    const results = await getAppointmentsByUserId(userId);
    console.log('test', results);
    dispatch(setAppointments(results));
  };
  useEffect(() => {
    getUserAppointments();
  });

  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div
        className="cs_iconbox cs_style_12"
        style={{
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          alignItems: 'center',
        }}
      >
        <AppointmentsTable />
      </div>
    </div>
  );
}
