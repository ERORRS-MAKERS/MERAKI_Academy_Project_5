import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import parse from 'html-react-parser';
import { pageTitle } from '../../helpers/PageTitle';
const timeTable = [
  {
    day: 'Monday',
    schedules: [
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 3,
        department: 'Pediatric Department <br />9:00 AM - 12:00 PM',
        doctor: 'Dr. Sarah Patel <br />Dr. David Nguyen',
        roomNumber: 'Room 101',
      },
      {
        hour: 2,
        department: 'Cardiology Department <br />1:00 PM - 2:00 PM',
        doctor: 'Dr. James Lee <br />Dr. Michelle Kim',
        roomNumber: 'Room 202',
      },
      {
        hour: 3,
        department: 'Psychiatry Department <br />2:00 PM - 2:00 PM',
        doctor: 'Dr. Rachel Jones <br />Dr. David Park',
        roomNumber: 'Room 303',
      },
      {
        hour: 3,
        department: 'Physical Therapy Department <br />2:00 PM - 2:00 PM',
        doctor: 'Dr. Susan Kim',
        roomNumber: 'Gymnasium',
      },
      { hour: 1, department: '', doctor: '', roomNumber: '' },
    ],
  },
  {
    day: 'Tuesday',
    schedules: [
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 2,
        department:
          'Obstetrics and Gynecology Department <br />9:00 AM - 11:00 AM',
        doctor: 'Dr. Karen Lee',
        roomNumber: 'Room 401',
      },
      {
        hour: 3,
        department: 'Pulmonology Department <br />11:00 AM - 2:00 PM',
        doctor: 'Dr. John Smith',
        roomNumber: 'Room 502',
      },
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 3,
        department: 'Neurology Department <br />3:00 PM - 6:00 PM',
        doctor: 'Dr. Maria Rodriguez',
        roomNumber: 'Room 603',
      },
      {
        hour: 3,
        department: 'Emergency Department <br />6:00 PM - 9:00 PM',
        doctor: 'Dr. Michael Johnson <br />Dr. Lisa Chen',
        roomNumber: 'Emergency Room',
      },
    ],
  },
  {
    day: 'Wednesday',
    schedules: [
      {
        hour: 4,
        department: 'Pediatric Department <br />9:00 AM - 11:00 AM',
        doctor: 'Dr. Sarah Patel <br />Dr. David Nguyen',
        roomNumber: 'Room 101',
      },
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 3,
        department: 'Cardiology Department <br />1:00 PM - 4:00 PM',
        doctor: 'Dr. James Lee <br />Dr. Michelle Kim',
        roomNumber: 'Room 202',
      },
      {
        hour: 2,
        department: 'Psychiatry Department <br />4:00 PM - 6:00 PM',
        doctor: 'Dr. Rachel Jones <br />Dr. David Park',
        roomNumber: 'Room 303',
      },
      {
        hour: 3,
        department: 'Physical Therapy Department <br />6:00 PM - 9:00 PM',
        doctor: 'Dr. Susan Kim',
        roomNumber: 'Gymnasium',
      },
    ],
  },
  {
    day: 'Thrusday',
    schedules: [
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 2,
        department:
          'Obstetrics and Gynecology Department <br />9:00 AM - 11:00 AM',
        doctor: 'Dr. Karen Lee',
        roomNumber: 'Room 401',
      },
      {
        hour: 3,
        department: 'Pulmonology Department <br />11:00 AM - 2:00 PM',
        doctor: 'Dr. John Smith',
        roomNumber: 'Room 502',
      },
      {
        hour: 3,
        department: 'Neurology Department <br />3:00 PM - 6:00 PM',
        doctor: 'Dr. Maria Rodriguez',
        roomNumber: 'Room 603',
      },
      {
        hour: 4,
        department: 'Emergency Department <br />5:00 PM - 9:00 PM',
        doctor: 'Dr. Michael Johnson <br />Dr. Lisa Chen',
        roomNumber: 'Emergency Room',
      },
    ],
  },
  {
    day: 'Friday',
    schedules: [
      {
        hour: 4,
        department: 'Pediatric Department <br />9:00 AM - 11:00 AM',
        doctor: 'Dr. Sarah Patel <br />Dr. David Nguyen',
        roomNumber: 'Room 101',
      },
      {
        hour: 3,
        department: 'Cardiology Department <br />12:00 PM - 3:00 PM',
        doctor: 'Dr. James Lee <br />Dr. Michelle Kim',
        roomNumber: 'Room 202',
      },
      {
        hour: 3,
        department: 'Psychiatry Department <br />3:00 PM - 6:00 PM',
        doctor: 'Dr. Rachel Jones <br />Dr. David Park',
        roomNumber: 'Room 303',
      },
      {
        hour: 2,
        department: 'Physical Therapy Department <br />6:00 PM - 9:00 PM',
        doctor: 'Dr. Susan Kim',
        roomNumber: 'Gymnasium',
      },
      { hour: 1, department: '', doctor: '', roomNumber: '' },
    ],
  },
  {
    day: 'Saturday',
    schedules: [
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 3,
        department:
          'Obstetrics and Gynecology Department <br />9:00 AM - 12:00 AM',
        doctor: 'Dr. Karen Lee',
        roomNumber: 'Room 401',
      },
      {
        hour: 2,
        department: 'Pulmonology Department <br />12:00 AM - 2:00 PM',
        doctor: 'Dr. John Smith',
        roomNumber: 'Room 502',
      },
      { hour: 1, department: '', doctor: '', roomNumber: '' },
      {
        hour: 2,
        department: 'Neurology Department <br />3:00 PM - 6:00 PM',
        doctor: 'Dr. Maria Rodriguez',
        roomNumber: 'Room 603',
      },
      {
        hour: 4,
        department: 'Emergency Department <br />5:00 PM - 9:00 PM',
        doctor: 'Dr. Michael Johnson <br />Dr. Lisa Chen',
        roomNumber: 'Emergency Room',
      },
    ],
  },
];

export default function Timetable() {
  pageTitle('Timetable');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/timetable/banner_bg.svg"
        imgUrl="/images/timetable/banner_img.png"
        title="ProHealth <br>Timetable"
        subTitle="Get to know the complete info of our <br>doctors’ schedule"
      />
      <Section
        topMd={170}
        topLg={170}
        topXl={170}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <div className="container">
          <div className="table-responsive-xl">
            <div className="cs_timetable">
              <div className="cs_timetable_vertical">
                <div>8:00 AM</div>
                <div>9:00 AM</div>
                <div>10:00 AM</div>
                <div>11:00 AM</div>
                <div>12:00 PM</div>
                <div>1:00 PM</div>
                <div>2:00 PM</div>
                <div>3:00 PM</div>
                <div>4:00 PM</div>
                <div>5:00 PM</div>
                <div>6:00 PM</div>
                <div>7:00 PM</div>
                <div>8:00 PM</div>
                <div>9:00 PM</div>
              </div>
              <div className="cs_timetable_in">
                {timeTable?.map((item, index) => (
                  <div key={index}>
                    <div className="cs_timetable_date cs_heading_color">
                      {item.day}
                    </div>
                    {item.schedules?.map((schedule, index) => (
                      <div className={`cs_hour_${schedule.hour}`} key={index}>
                        {(schedule.department || schedule.doctor) && (
                          <div className="cs_table_doctor">
                            <div>
                              {schedule.department && (
                                <p>{parse(schedule.department)}</p>
                              )}
                              {schedule.doctor && (
                                <p className="cs_medium cs_heading_color">
                                  {parse(schedule.doctor)}
                                </p>
                              )}
                            </div>
                            {schedule.roomNumber && (
                              <div>{schedule.roomNumber}</div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
