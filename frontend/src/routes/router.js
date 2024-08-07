import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Doctors from '../components/Pages/Doctors';
import DoctorDetails from '../components/Pages/DoctorDetails';
import Blog from '../components/Pages/Blog';
import BlogDetails from '../components/Pages/BlogDetails';
import Appointments from '../components/Pages/Appointments';
import Departments from '../components/Pages/Departments';
import DepartmentDetails from '../components/Pages/DepartmentDetails';
import Gallery from '../components/Pages/Gallery';
import Timetable from '../components/Pages/Timetable';
import Contact from '../components/Pages/Contact';
import ErrorPage from '../components/Pages/ErrorPage';
import UserMedicalReports from '../components/Pages/UserMedicalReports';
import UserPrescription from '../components/Pages/UserPrescription';
import { departmentLoader } from '../service/api/department';
import { doctorsLoader } from '../service/api/doctors';
import { userReportsLoader } from '../service/api/user_reports';
import { userPrescriptionLoader } from '../service/api/user_prescription';
import Register from '../components/Pages/Register';
import Login from '../components/Pages/Login';
import MedicalReportsRequest from '../components/Pages/Medical_reports';
import Pharmacy from '../components/Pages/Pharmacy';
import DoctorRequest from '../components/Pages/CreateDoctorsRequest';
import UserProfile from '../components/Pages/UserProfile';
import AddDepartment from '../components/Pages/AddDepartment';
import DepartmentDash from '../components/Pages/DepartmentDash';
import { departmentDashLoader } from '../service/api/departmentDash';
import DoctorsJobRequest from '../components/Pages/DoctorsJobRequest';
import DoctorLogin from '../components/Pages/DoctorLogin';
import AdminDashbord from '../components/Pages/AdminDashbord';
import AppointmentsTable from '../components/Pages/AppointmentsTable';
import PharmacistLogin from '../components/Pages/PharmacistLogin';
import AddPrescriptionForm from '../components/AddPrescription/AddPrescription';
import DepartmentDashboard from '../components/Pages/DepartmentDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        loader: doctorsLoader,
      },
      {
        path: 'doctors',
        element: <Doctors />,
        loader: doctorsLoader,
      },
      {
        path: 'doctors/doctor-details',
        element: <DoctorDetails />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/blog-details',
        element: <BlogDetails />,
      },
      {
        path: 'appointments',
        element: <Appointments />,
        loader: departmentLoader,
      },
      {
        path: 'departments',
        element: <Departments />,
        loader: departmentLoader,
      },
      {
        path: 'departments/department-details',
        element: <DepartmentDetails />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'timetable',
        element: <Timetable />,
      },
      {
        path: 'doctor_register',
        element: <Contact />,
        loader: departmentLoader,
        // JOIN US
      },
      {
        path: 'user/report/:userId',
        element: <UserMedicalReports />,
        loader: userReportsLoader,
      },
      {
        path: 'user/prescription/:userId',
        element: <UserPrescription />,
        loader: userPrescriptionLoader,
      },
      {
        path: 'user/profile/:id',
        element: <UserProfile />,
      },
      {
        path: 'department-dashboard/doctors_request',

        element: <DepartmentDash />,
        loader: departmentDashLoader,
      },

      {
        path: 'department_dashboard',
        element: <DepartmentDashboard />,
      },
      {
        path: 'appointments/table/:userId',
        element: <AppointmentsTable />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
        // loader: userLogin,
      },
      {
        path: '/login/doctor',
        element: <DoctorLogin />,
      },
    ],
  },

  {
    path: '/medical_reports',
    element: <MedicalReportsRequest />,
  },
  {
    path: '/doctor_request',
    element: <DoctorRequest />,
    loader: departmentLoader,
  },
  {
    path: '/add_department',
    element: <AddDepartment />,
  },
  {
    path: '/admin/requests',
    element: <DoctorsJobRequest />,
  },
  {
    path: '/admin/dashbord',
    element: <AdminDashbord />,
  },
  {
    path: '/login/pharmacist',
    element: <PharmacistLogin />,
  },
  {
    path: '/pharmacy',
    element: <Pharmacy />,
  },

  {
    path: '/add_prescription',
    element: <AddPrescriptionForm />,
  },

  {
    path: '*',
    element: <ErrorPage />,
  },
]);
