import React, { useEffect, useState } from 'react';
import Spacing from '../Spacing';
import { getDoctorRequests } from '../../service/api/getDoctorRequest';
import { getAppointmentsForToday } from '../../service/api/getAppointmentsByDate';
import { format } from 'date-fns';
const DepartmentDashboard = () => {
  // const userId = useSelector((store) => store.auth.userId);
  // const dispatch = useDispatch();
  const [doctorRequestData, setDoctorRequestData] = useState([]);

  const getDoctorRequest = async (department_id) => {
    const results = await getDoctorRequests(department_id);
    console.log('request', results);
    setDoctorRequestData(results);
    // dispatch(setAppointments(results));
  };
  const [appointmentsForToday, setAppointmentsForToday] = useState([]);

  const getAppointments = async () => {
    const results = await getAppointmentsForToday();
    console.log('appointment', results);
    setAppointmentsForToday(results);
    // dispatch(setAppointments(results));
  };

  useEffect(() => {
    // getDoctorRequest(2);
    getDoctorRequest(2);
    getAppointments();
  }, []);

  return (
    <div className="container">
      <Spacing md="200" lg="50" />
      <h1 style={{ textAlign: 'center' }}>Doctor Request</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Notes</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctorRequestData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.test}</td>
              <td>
                <button>Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Spacing md="72" lg="50" />

      <h1 style={{ textAlign: 'center' }}>Appointments</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Notes</th>
            <th scope="col">Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointmentsForToday.map((item, index) => (
            <>
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.notes}</td>
                <td>{format(new Date(item.time), 'HH:mm a')}</td>
                <td>
                  <button>Actions</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Spacing md="72" lg="50" />
    </div>
  );
};

export default DepartmentDashboard;
