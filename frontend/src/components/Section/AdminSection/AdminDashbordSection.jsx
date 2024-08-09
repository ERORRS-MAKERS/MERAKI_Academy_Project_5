import React, { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import UserProfileStyle from '../../IconBox/UserProfileStyle';
import { ResponsivePie } from '@nivo/pie';
import { getTotalAppointments } from '../../../service/api/getAllAppointment';
import { usersLoader, doctorsLoader } from '../../../service/api/getAllusers';

const AdminDashbordSections = ({ userId, sectionTitle }) => {
  const [data, setData] = useState([]);
  const [fillData, setFillData] = useState([]);
  const [doctorsCount, setDoctorsCount] = useState();
  const [usersCount, setUsersCount] = useState();

  const loadDoctors = async () => {
    const res = await doctorsLoader();
    setDoctorsCount(res.results.data.result.length);

    const users = await usersLoader();
    setUsersCount(users.results.data.result.length);
  };

  const loadData = async () => {
    const result = await getTotalAppointments();

    const structured = result.map((e) => {
      return {
        id: e.department_name,
        label: e.department_name,
        value: e.total_appointments,
      };
    });

    const uniqueArr = [
      ...new Map(structured.map((item) => [item.id, item])).values(),
    ];

    setData(uniqueArr);

    const getFillData = uniqueArr.map((e, i) => {
      return {
        match: {
          id: e.id,
        },
        id: i % 2 === 0 ? 'lines' : 'dots',
      };
    });
    setFillData(getFillData);
  };

  useEffect(() => {
    loadData();
    loadDoctors();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
      {/* Sidebar */}
      <div className="sidebar" style={sidebarStyle}>
        <div className="sidebar-header mb-5" style={headerStyle}>
          <h5 className="sidebar-title">Admin Actions</h5>
        </div>
        <div className="sidebar-body">
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <div className="col-xl-4 col-md-6" style={{ width: '100%' }}>
                <UserProfileStyle
                  title="Doctor Hiring Request"
                  href="/admin/requests"
                />
              </div>
            </li>
            <li style={listItemStyle}>
              <div className="col-l-4 col-md-4" style={{ width: '100%' }}>
                <UserProfileStyle
                  title="Add New Department"
                  href="/add_department"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}

      <div>
        <Spacing md="30" />
        <SectionHeading title="Admin Dashboard" center />
        <Spacing md="30" />
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <div style={{ width: '400px', height: '400px' }}>
            <h3>Departments Statics</h3>
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
              }}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={fillData}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            <div>
              <div class="card">
                <p class="time-text">
                  <span>{usersCount}</span>
                  <span class="time-sub-text"></span>
                </p>
                <p class="day-text">Happy Patient</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="moon"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.3-1.437-1.075T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.75T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div class="card">
                <p class="time-text">
                  <span>{doctorsCount}</span>
                  <span class="time-sub-text"></span>
                </p>
                <p class="day-text">Professional Doctors</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="moon"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.3-1.437-1.075T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.75T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sidebarStyle = {
  width: '350px',
  height: '100vh',
  top: 0,
  left: 0,
  backgroundColor: '#f8f9fa',
  padding: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  overflowY: 'auto',
};

const headerStyle = {
  padding: '10px 0',
  borderBottom: '1px solid #dee2e6',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  marginBottom: '15px',
};

export default AdminDashbordSections;
