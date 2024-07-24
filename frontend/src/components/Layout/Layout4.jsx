import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterStyle4 from '../Footer/FooterStyle4';
import Header from '../Header';

export default function Layout4() {
  return (
    <>
      <Header
        logoSrc="/images/logo_white.svg"
        variant="cs_white_color cs_color_1"
      />
      <Outlet />
      <FooterStyle4 />
    </>
  );
}
