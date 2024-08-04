// import { Icon } from '@iconify/react';
// import React, { useState } from 'react';
// import { deleteAppointment } from '../../service/api/deleteAppointment';
// import { updateAppointment } from '../../service/api/updateAppointment';
// import ErrorPage from '../Pages/ErrorPage';
// import Loading from '../Pages/Loading';
// import { useSelector, useDispatch } from 'react-redux';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import { deleteAppointments } from '../../service/redux/reducers/AppointmentsTableUser';
// import { updateAppointments } from '../../service/redux/reducers/AppointmentsTableUser';

// export default function IconBoxStyle12() {
//   const data = useSelector((store) => store.appointments.appointment);
//   const dispatch = useDispatch();

//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const deleteHandler = async (appointment_id, index) => {
//     setLoading(true);
//     setError(null);

//     try {
//       await deleteAppointment(appointment_id);
//       dispatch(deleteAppointments(appointment_id));
//     } catch (err) {
//       setError(err.message || 'Delete failed');
//     } finally {
//       setLoading(false);
//     }
//   };
//   const updateHandler = async (appointment_id, index) => {
//     setLoading(true);
//     setError(null);

//     try {
//       await deleteAppointment(appointment_id);
//       dispatch(deleteAppointments(appointment_id));
//     } catch (err) {
//       setError(err.message || 'Delete failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateModal = function () {
//     return (
//       <>
//         <div>
//           <div className="cs_with_icon_input" style={{ zIndex: '99999' }}>
//             <DatePicker
//               // selected={selectedDate}
//               // onChange={(date) => setSelectedDate(date)}
//               dateFormat="dd/MM/yyyy"
//               minDate={new Date()}
//               isClearable
//               placeholderText="dd/mm/yyyy"
//             />
//             <i>
//               <Icon icon="fa6-solid:calendar-days" />
//             </i>
//           </div>
//           <div className="cs_height_42 cs_height_xl_25" />
//         </div>
//         <div className="col-lg-6">
//           <label className="cs_input_label cs_heading_color">
//             Preferred Time
//           </label>
//           <div className="cs_with_icon_input" style={{ zIndex: '99999' }}>
//             <input
//               type="time"
//               className="cs_form_field cs_timepicker"
//               placeholder="10:00AM"
//               onChange={(e) => {
//                 // setSelectedTime(e.target.value);
//               }}
//             />
//             <i>
//               <Icon icon="fa6-regular:clock" />
//             </i>
//           </div>
//           <div className="cs_height_42 cs_height_xl_25" />
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       {/* <Loading /> */}
//       {loading && <Loading />}
//       {error && <ErrorPage message={error} />}
//       {data?.map((item, index) => (
//         <div key={index}>
//           {showModal && updateModal()}
//           <div
//             className="cs_iconbox_info cs_radius_20"
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               gap: '10px',
//             }}
//           >
//             <div style={{ position: 'relative' }}>
//               <span className="cs_iconbox_circle cs_accent_bg" />
//               <h4>
//                 Date: {format(new Date(item.time), 'yyyy-MM-dd')}
//                 <br />
//                 Time: {format(new Date(item.time), 'HH:mm')}
//               </h4>
//               <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
//                 <span>{item.department_name}</span>
//               </h2>
//               <p className="cs_iconbox_subtitle mb-0 cs_heading_color">
//                 {item.notes}
//               </p>
//               <span></span>
//             </div>
//             <div style={{ alignSelf: 'end' }}>
//               <button
//                 className="cs_iconbox_icon cs_center"
//                 style={{
//                   width: '50px',
//                   height: '40px',
//                   fontSize: '30px',
//                   borderRadius: '11px',
//                   padding: '0 5px',
//                   marginBottom: '10px',
//                   border: '0',
//                   outline: '0',
//                   color: '#FFF',
//                 }}
//                 onClick={() => {
//                   setShowModal();
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M9 15v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zm10.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925L7 9.925V17h7.05L21 10.05V19q0 .825-.587 1.413T19 21z"
//                   />
//                 </svg>
//               </button>
//               <button
//                 id={item.id}
//                 className="cs_iconbox_icon cs_center"
//                 onClick={(e) => {
//                   deleteHandler(item.id);
//                   console.log(item);
//                 }}
//                 style={{
//                   width: '50px',
//                   height: '40px',
//                   fontSize: '30px',
//                   borderRadius: '11px',
//                   padding: '0 5px',
//                   border: '0',
//                   outline: '0',
//                   color: '#FFF',
//                   backgroundColor: 'rgb(243 86 86)',
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="1em"
//                   height="1em"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { deleteAppointment } from '../../service/api/deleteAppointment';
import { updateAppointment } from '../../service/api/updateAppointment';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  deleteAppointments,
  updateAppointments,
} from '../../service/redux/reducers/AppointmentsTableUser';

export default function IconBoxStyle12() {
  const data = useSelector((store) => store.appointments.appointment);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);

  const deleteHandler = async (appointment_id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteAppointment(appointment_id);
      dispatch(deleteAppointments(appointment_id));
    } catch (err) {
      setError(err.message || 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  const updateHandler = async (appointment_id) => {
    setLoading(true);
    setError(null);

    try {
      if (!selectedDate || !selectedTime) {
        throw new Error('Date and time must be selected');
      }

      const formattedDate = format(new Date(selectedDate), 'yyyy-MM-dd');
      const new_time = `${formattedDate} ${selectedTime}:00`;

      const updatedAppointment = await updateAppointment(
        appointment_id,
        new_time
      );

      dispatch(updateAppointments(updatedAppointment));
      setShowModal(false);
    } catch (err) {
      setError(err.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const openUpdateModal = (appointment_id) => {
    setCurrentAppointmentId(appointment_id);
    setShowModal(true);
  };

  const updateModal = () => (
    <div
      style={{
        position: 'absolute',
        zIndex: '9999999',
        backgroundColor: '#fff',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
      }}
    >
      <h1>Update Appointment</h1>
      <div
        className="cs_with_icon_input"
        style={{ zIndex: '999999', backgroundColor: '#fff' }}
      >
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          isClearable
          placeholderText="dd/mm/yyyy"
        />
        <i>
          <Icon icon="fa6-solid:calendar-days" />
        </i>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="cs_with_icon_input" style={{ zIndex: '9999' }}>
        <input
          type="time"
          className="cs_form_field cs_timepicker"
          placeholder="10:00"
          onChange={(e) => setSelectedTime(e.target.value)}
          value={selectedTime}
        />
        <i>
          <Icon icon="fa6-regular:clock" />
        </i>
      </div>
      <div className="cs_height_42 cs_height_xl_25" />
      <div>
        <button
          type="submit"
          className="cs_btn cs_style_1"
          onClick={() => {
            updateHandler(currentAppointmentId);
          }}
        >
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
      <button
        className="cs_btn cs_style_1"
        style={{ position: 'absolute', right: '20px', top: '20px' }}
        onClick={() => setShowModal(false)}
      >
        <span>X</span>
      </button>
    </div>
  );

  return (
    <>
      {/* {updateModal()} */}
      {loading && <Loading />}
      {error && <ErrorPage message={error} />}
      {showModal && updateModal()}
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
              <h4>
                Date: {format(new Date(item.time), 'yyyy-MM-dd')}
                <br />
                Time: {format(new Date(item.time), 'HH:mm')}
              </h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                <span>{item.department_name}</span>
              </h2>
              <p className="cs_iconbox_subtitle mb-0 cs_heading_color">
                {item.notes}
              </p>
              <span></span>
            </div>
            <div style={{ alignSelf: 'end' }}>
              <button
                className="cs_iconbox_icon cs_center"
                style={{
                  width: '50px',
                  height: '40px',
                  fontSize: '30px',
                  borderRadius: '11px',
                  padding: '0 5px',
                  marginBottom: '10px',
                  border: '0',
                  outline: '0',
                  color: '#FFF',
                }}
                onClick={() => openUpdateModal(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 15v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zm10.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925L7 9.925V17h7.05L21 10.05V19q0 .825-.587 1.413T19 21z"
                  />
                </svg>
              </button>
              <button
                id={item.id}
                className="cs_iconbox_icon cs_center"
                onClick={() => deleteHandler(item.id)}
                style={{
                  width: '50px',
                  height: '40px',
                  fontSize: '30px',
                  borderRadius: '11px',
                  padding: '0 5px',
                  border: '0',
                  outline: '0',
                  color: '#FFF',
                  backgroundColor: 'rgb(243 86 86)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17zm4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="cs_height_42 cs_height_lg_25" />
        </div>
      ))}
    </>
  );
}
