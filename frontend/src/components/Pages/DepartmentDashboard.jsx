import React, { useEffect, useState } from 'react';
import Spacing from '../Spacing';
import { getDoctorRequests } from '../../service/api/getDoctorRequest';

const DepartmentDashboard = () => {
  // const userId = useSelector((store) => store.auth.userId);
  // const dispatch = useDispatch();
  const [doctorRequestData, setDoctorRequestData] = useState([]);

  const getDoctorRequest = async (department_id) => {
    const results = await getDoctorRequests(department_id);
    console.log('test', results);
    setDoctorRequestData(results);
    // dispatch(setAppointments(results));
  };

  useEffect(() => {
    // getDoctorRequest(2);
    getDoctorRequest(2);
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
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <Spacing md="72" lg="50" />
    </div>
  );
};

export default DepartmentDashboard;
