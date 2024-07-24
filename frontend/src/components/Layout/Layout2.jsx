import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle2 from '../Footer/FooterStyle2';
import Header from '../Header';

export default function Layout2() {
  return (
    <>
      <Header logoSrc="/images/logo_white.svg" variant="cs_white_color" />
      <Outlet />
      <FooterStyle2 />
    </>
  );
}
