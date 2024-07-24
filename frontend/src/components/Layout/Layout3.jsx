import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle3 from '../Footer/FooterStyle3';
import Header from '../Header';

export default function Layout3() {
  return (
    <>
      <Header logoSrc="/images/logo.svg" variant="cs_heading_color" />
      <Outlet />
      <FooterStyle3 />
    </>
  );
}
