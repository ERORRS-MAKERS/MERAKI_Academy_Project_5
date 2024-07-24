import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Layout2 from './components/Layout/Layout2';
import Layout3 from './components/Layout/Layout3';
import Layout4 from './components/Layout/Layout4';
import Home from './components/Pages/Home';
import HomeStyle2 from './components/Pages/HomeStyle2';
import HomeStyle3 from './components/Pages/HomeStyle3';
import HomeStyle4 from './components/Pages/HomeStyle4';
import About from './components/Pages/About';
import Doctors from './components/Pages/Doctors';
import Blog from './components/Pages/Blog';
import Appointments from './components/Pages/Appointments';
import Departments from './components/Pages/Departments';
import DepartmentDetails from './components/Pages/DepartmentDetails';
import BlogDetails from './components/Pages/BlogDetails';
import DoctorDetails from './components/Pages/DoctorDetails';
import PricingPlan from './components/Pages/PricingPlan';
import Gallery from './components/Pages/Gallery';
import Timetable from './components/Pages/Timetable';
import Contact from './components/Pages/Contact';
import { useEffect } from 'react';
import ErrorPage from './components/Pages/ErrorPage';
import Layout5 from './components/Layout/Layout5';
import HomeStyle5 from './components/Pages/HomeStyle5';
import HomeStyle6 from './components/Pages/HomeStyle6';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="departments" element={<Departments />} />
        <Route
          path="departments/:departmentId"
          element={<DepartmentDetails />}
        />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route element={<Layout2 />}>
        <Route path="home-v2" element={<HomeStyle2 />} />
        <Route path="home-v6" element={<HomeStyle6 />} />
      </Route>
      <Route path="home-v3" element={<Layout3 />}>
        <Route index element={<HomeStyle3 />} />
      </Route>
      <Route path="home-v4" element={<Layout4 />}>
        <Route index element={<HomeStyle4 />} />
      </Route>
      <Route path="home-v5" element={<Layout5 />}>
        <Route index element={<HomeStyle5 />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
