import { Icon } from '@iconify/react';
import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData, Await } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import Loading from '../Pages/Loading';
import { format } from 'date-fns';
import { bookAppointment } from '../../service/api/book_appointment';
import DoctorsConnection from '../Notifications/DoctorsConnection';

export default function AppointmentForm() {
  const navigate = useNavigate();
  const user_id = useSelector((store) => store.auth.userId);
  const doctorLoggedIn = useSelector((store) => store.doctor.isLoggedIn);

  const { results } = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [notes, setNotes] = useState(null);
  const [department_id, setDepartment_id] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sendNotify,setSendNotify]=useState(false)

  const [department_name, setDepartmentName] = useState();

  const formattedDate = format(new Date(selectedDate), 'yyyy-MM-dd');
  const time = formattedDate + ' ' + selectedTime + ':00';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSendNotify(true)
    try {
      await bookAppointment(
        user_id,
        department_id,
        time,
        notes,
        department_name
      );
      doctorLoggedIn ? navigate('/department_dashboard') : navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <Loading
          customStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {error && <ErrorPage message={error} />}
      <form onSubmit={handleSubmit} className="row">
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Preferred Date
          </label>

          <div className="cs_with_icon_input" style={{ zIndex: '99999' }}>
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
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Preferred Time
          </label>
          <div className="cs_with_icon_input" style={{ zIndex: '99999' }}>
            <input
              type="time"
              className="cs_form_field cs_timepicker"
              placeholder="10:00AM"
              onChange={(e) => {
                setSelectedTime(e.target.value);
              }}
            />
            <i>
              <Icon icon="fa6-regular:clock" />
            </i>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">
            Reason for Visit
          </label>
          <div className="cs_radio_group">
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="routineCheckup"
                defaultValue="routineCheckup"
                onClick={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <label className="cs_radio_label" htmlFor="routineCheckup">
                Routine Checkup
              </label>
            </div>
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="newPatientVisit"
                defaultValue="newPatientVisit"
                defaultChecked=""
                onClick={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <label className="cs_radio_label" htmlFor="newPatientVisit">
                New Patient Visit
              </label>
            </div>
            <div className="cs_radio_wrap">
              <input
                className="cs_radio_input"
                type="radio"
                name="reasonForVisit"
                id="specificConcern"
                defaultValue="specificConcern"
                onClick={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <label className="cs_radio_label" htmlFor="specificConcern">
                Specific Concern
              </label>
            </div>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Department</label>
          <div className="cs_radio_group">
            <Suspense fallback={<p>Departments Loading...</p>}>
              <Await
                resolve={results}
                errorElement={<p>Error Loading Departments</p>}
              >
                {(results) => {
                  return results.data.result?.map((item, index) => (
                    <div className="cs_radio_wrap" key={index}>
                      <input
                        className="cs_radio_input"
                        type="radio"
                        name="department"
                        id={item.department_name}
                        defaultValue={item.department_name}
                        onClick={(e) => {
                          setDepartmentName(item.name);
                          setDepartment_id(item.id);
                        }}
                      />
                      <label
                        className="cs_radio_label"
                        htmlFor={item.department_name}
                      >
                        {item.department_name}
                      </label>
                    </div>
                  ));
                }}
              </Await>
            </Suspense>
          </div>
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <button type="submit" className="cs_btn cs_style_1">
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      {sendNotify&&  <DoctorsConnection/>}
      </form>
    </>
  );
}
