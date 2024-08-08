// import React, { useEffect, useState } from 'react';
// import SectionHeading from '../../SectionHeading';
// import Spacing from '../../Spacing';
// import UserProfileStyle from '../../IconBox/UserProfileStyle';
// import { ResponsivePie } from '@nivo/pie';
// import { getTotalAppointments } from '../../../service/api/getAllAppointment';

// const AdminDashbordSections = ({ userId, sectionTitle }) => {
//   const [data, setData] = useState([]);
//   const [fillData, setFillData] = useState([]);

//   const loadData = async () => {
//     const result = await getTotalAppointments();
//     const structured = result.map((e) => {
//       return {
//         id: e.department_name,
//         label: e.department_name,
//         value: e.total_appointments,
//       };
//     });

//     const uniqueArr = [
//       ...new Map(structured.map((item) => [item.id, item])).values(),
//     ];
//     console.log(uniqueArr);

//     setData(uniqueArr);

//     const getFillData = uniqueArr.map((e) => {
//       return {
//         match: {
//           id: e.id,
//         },
//       };
//     });
//     setFillData(getFillData);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
//       {/* Sidebar */}
//       <div className="sidebar" style={sidebarStyle}>
//         <div className="sidebar-header mb-5" style={headerStyle}>
//           <h5 className="sidebar-title">Admin Actions</h5>
//         </div>
//         <div className="sidebar-body">
//           <ul style={listStyle}>
//             <li style={listItemStyle}>
//               <div className="col-xl-4 col-md-6" style={{ width: '100%' }}>
//                 <UserProfileStyle
//                   title="Doctor Hiring Request"
//                   href="/admin/requests"
//                 />
//               </div>
//             </li>
//             <li style={listItemStyle}>
//               <div className="col-l-4 col-md-4" style={{ width: '100%' }}>
//                 <UserProfileStyle
//                   title="Add New Department"
//                   href="/add_department"
//                 />
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}

//       <div>
//         <Spacing md="30" />
//         <SectionHeading title="Admin Dashboard" center />
//         <div className="container">
//           <div style={{ width: '550px', height: '400px' }}>
//             <ResponsivePie
//               data={data}
//               margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//               innerRadius={0.5}
//               padAngle={0.7}
//               cornerRadius={3}
//               activeOuterRadiusOffset={8}
//               borderWidth={1}
//               borderColor={{
//                 from: 'color',
//                 modifiers: [['darker', 0.2]],
//               }}
//               arcLinkLabelsSkipAngle={10}
//               arcLinkLabelsTextColor="#333333"
//               arcLinkLabelsThickness={2}
//               arcLinkLabelsColor={{ from: 'color' }}
//               arcLabelsSkipAngle={10}
//               arcLabelsTextColor={{
//                 from: 'color',
//                 modifiers: [['darker', 2]],
//               }}
//               defs={[
//                 {
//                   id: 'dots',
//                   type: 'patternDots',
//                   background: 'inherit',
//                   color: 'rgba(255, 255, 255, 0.3)',
//                   size: 4,
//                   padding: 1,
//                   stagger: true,
//                 },
//                 {
//                   id: 'lines',
//                   type: 'patternLines',
//                   background: 'inherit',
//                   color: 'rgba(255, 255, 255, 0.3)',
//                   rotation: -45,
//                   lineWidth: 6,
//                   spacing: 10,
//                 },
//               ]}
//               fill={fillData}
//               //   [
//               //   {
//               //     match: {
//               //       id: 'ruby',
//               //     },
//               //     id: 'dots',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'c',
//               //     },
//               //     id: 'dots',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'go',
//               //     },
//               //     id: 'dots',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'python',
//               //     },
//               //     id: 'dots',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'scala',
//               //     },
//               //     id: 'lines',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'lisp',
//               //     },
//               //     id: 'lines',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'elixir',
//               //     },
//               //     id: 'lines',
//               //   },
//               //   {
//               //     match: {
//               //       id: 'javascript',
//               //     },
//               //     id: 'lines',
//               //   },
//               // ]}
//               // }
//               legends={[
//                 {
//                   anchor: 'bottom',
//                   direction: 'row',
//                   justify: false,
//                   translateX: 0,
//                   translateY: 56,
//                   itemsSpacing: 0,
//                   itemWidth: 100,
//                   itemHeight: 18,
//                   itemTextColor: '#999',
//                   itemDirection: 'left-to-right',
//                   itemOpacity: 1,
//                   symbolSize: 18,
//                   symbolShape: 'circle',
//                   effects: [
//                     {
//                       on: 'hover',
//                       style: {
//                         itemTextColor: '#000',
//                       },
//                     },
//                   ],
//                 },
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline styles for the sidebar
// const sidebarStyle = {
//   width: '350px',
//   height: '100vh',
//   top: 0,
//   left: 0,
//   backgroundColor: '#f8f9fa',
//   padding: '10px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   overflowY: 'auto',
// };

// const headerStyle = {
//   padding: '10px 0',
//   borderBottom: '1px solid #dee2e6',
// };

// const listStyle = {
//   listStyleType: 'none',
//   padding: 0,
// };

// const listItemStyle = {
//   marginBottom: '15px',
// };

// export default AdminDashbordSections;

import React, { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import UserProfileStyle from '../../IconBox/UserProfileStyle';
import { ResponsivePie } from '@nivo/pie';
import { getTotalAppointments } from '../../../service/api/getAllAppointment';

const AdminDashbordSections = ({ userId, sectionTitle }) => {
  const [data, setData] = useState([]); // Initialize as empty array
  const [fillData, setFillData] = useState([]); // Initialize as empty array

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
        <div className="container">
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
        </div>
      </div>
    </div>
  );
};

// Inline styles for the sidebar
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
