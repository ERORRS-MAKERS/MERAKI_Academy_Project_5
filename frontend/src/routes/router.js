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
import PricingPlan from '../components/Pages/PricingPlan';
import { departmentLoader } from '../service/api/department';
import { doctorsLoader } from '../service/api/doctors';
import { userLoader } from '../service/api/user_reports';

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
        path: 'contact',
        element: <Contact />,
        // JOIN US
      },
      {
        path: 'pricing',
        element: <PricingPlan />,
        // test
      },
      {
        path: 'user/report/:userId',
        element: <UserMedicalReports />,
        loader: userLoader,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
