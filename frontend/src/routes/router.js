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
import { departmentLoader } from '../service/api/department';

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
      },
      {
        path: 'doctors',
        element: <Doctors />,
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
        loader:departmentLoader,
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
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
