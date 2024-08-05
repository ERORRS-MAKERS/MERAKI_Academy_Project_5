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

  const getUserAppointments = async (userId) => {
    const results = await getAppointmentsByUserId(userId);
    console.log('test', results);
    dispatch(setAppointments(results));
  };
  useEffect(() => {
    getUserAppointments(userId);
  });

  return (
    <>
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
      <Spacing md="72" lg="50" />
      <div className="cs_iconbox cs_style_12">
        <AppointmentsTable />
      </div>
    </>
  );
}
