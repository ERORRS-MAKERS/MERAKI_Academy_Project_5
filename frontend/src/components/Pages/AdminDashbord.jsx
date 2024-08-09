import React from 'react';
import AdminDashbordSection from '../Section/AdminSection/AdminDashbordSection';
import { pageTitle } from '../../helpers/PageTitle';

export default function AdminDashbord() {
  pageTitle('Admin Dashboard');
  return (
    <>
      <AdminDashbordSection />
    </>
  );
}
