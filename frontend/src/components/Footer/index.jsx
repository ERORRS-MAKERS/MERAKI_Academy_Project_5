import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import { useNavigate } from 'react-router-dom';
const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
];
const menuDataTwo = [
  { title: 'Blog', href: '/blog' },
  { title: 'FAQs', href: '/' },
  { title: 'Privacy Policy', href: '/' },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}
        >
          <img
            src="/images/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          <h2 className="cs_footer_brand_text">ProHealth</h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <h3>You Are A Doctor...?</h3>
                <button
                  type="button"
                  onClick={() => {
                    navigate('/doctor_register');
                  }}
                  className="cs_btn cs_style_1"
                >
                  <span>JOIN US</span>
                  <i>
                    <img src="/images/icons/arrow_white.svg" alt="Icon" />
                    <img src="/images/icons/arrow_white.svg" alt="Icon" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 Pro Health. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
