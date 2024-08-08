// import React from 'react';
// import SectionHeading from '../../SectionHeading';
// import Spacing from '../../Spacing';
// import UserProfileStyle from '../../IconBox/UserProfileStyle';

// export default function AdminDashbordSections({ userId, sectionTitle }) {
//   // <div className="container cs_mt_minus_110">
//   //   <SectionHeading title={sectionTitle} center />
//   //   <Spacing md="72" lg="50" />
//   //   <div className="row justify-content-start">
//   //     <div className="col-xl-4 col-md-6">
//   //       <UserProfileStyle
//   //         title="Add New Department"
//   //         subtitle="choose you new department and add it to your website"
//   //         href={`/add_department`}
//   //       />
//   //     </div>
//   //     <div className="col-xl-4 col-md-6">
//   //       <UserProfileStyle
//   //         title="Doctor Hiring Request"
//   //         subtitle="choose new doctors to works with us"
//   //         href={`/admin/requests`}
//   //       />
//   //     </div>
//   //   </div>
//   // </div>

//   return (
//     <div className="sidebar" style={sidebarStyle}>
//       <div className="sidebar-header" style={headerStyle}>
//         <h5 className="sidebar-title">Backdroped with scrolling</h5>
//       </div>
//       <div className="sidebar-body">
//         <ul style={listStyle}>
//           <li style={listItemStyle}>
//             <div className="col-xl-4 col-md-6">
//               <UserProfileStyle
//                 title="Doctor Hiring Request"
//                 subtitle="Choose new doctors to work with us"
//                 href="/admin/requests"
//               />
//             </div>
//           </li>
//           <li style={listItemStyle}>
//             <div className="col-xl-4 col-md-6">
//               <UserProfileStyle
//                 title="Add New Department"
//                 subtitle="Choose your new department and add it to your website"
//                 href="/add_department"
//               />
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );

//   // Inline styles for the sidebar
//   const sidebarStyle = {
//     width: '300px',
//     height: '100vh',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#f8f9fa',
//     padding: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     overflowY: 'auto',
//   };

//   const headerStyle = {
//     padding: '10px 0',
//     borderBottom: '1px solid #dee2e6',
//   };

//   const listStyle = {
//     listStyleType: 'none',
//     padding: 0,
//   };

//   const listItemStyle = {
//     marginBottom: '15px',
//   };
// }

import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import UserProfileStyle from '../../IconBox/UserProfileStyle';

const AdminDashbordSections = ({ userId, sectionTitle }) => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={sidebarStyle}>
        <div className="sidebar-header mb-5" style={headerStyle}>
          <h5 className="sidebar-title">Actions</h5>
        </div>
        <div className="sidebar-body">
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <div className="col-xl-4 col-md-6" style={{ width: '100%' }}>
                <UserProfileStyle
                  title="Doctor Hiring Request"
                  subtitle=""
                  href="/admin/requests"
                />
              </div>
            </li>
            <li style={listItemStyle}>
              <div className="col-xl-4 col-md-4" style={{ width: '100%' }}>
                <UserProfileStyle
                  title="Add New Department"
                  subtitle=""
                  href="/add_department"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="container">
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
        <div className="row justify-content-start">
          <div className="col-xl-4 col-md-6">
            <UserProfileStyle
              title="Add New Department"
              subtitle="Choose your new department and add it to your website"
              href={`/add_department`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <UserProfileStyle
              title="Doctor Hiring Request"
              subtitle="Choose new doctors to work with us"
              href={`/admin/requests`}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

// Inline styles for the sidebar
const sidebarStyle = {
  width: '400px',
  height: '100vh',
  position: 'fixed',
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
