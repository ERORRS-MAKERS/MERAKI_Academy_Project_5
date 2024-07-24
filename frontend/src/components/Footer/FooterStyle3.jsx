import React from 'react';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import NewsletterStyle3 from '../Widget/NewsletterStyle3';
import MenuWidget from '../Widget/MenuWidget';
const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
  { title: 'Timetable', href: '/timetable' },
  { title: 'Appointment', href: '/appointments' },
];

const menuDataTwo = [
  { title: 'Testimonials', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/' },
  { title: 'FAQs', href: '/' },
];
const menuDataThree = [
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/blog' },
];

export default function FooterStyle3() {
  return (
    <footer className="cs_footer cs_style_2 cs_accent_bg cs_white_color">
      <NewsletterStyle3
        title="To get the latest news about health from our experts"
        subTitle="BE OUR SUSCRIBERS"
        imgUrl="/images/home_3/newsletter_img.png"
      />
      <div className="container">
        <div className="cs_footer_in">
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <TextWidget
                logoUrl="/images/footer_logo_white.svg"
                text="ProHealth Medical & Healthcare Center"
              />
              <ContactInfoWidget />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataOne} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataTwo} />
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_item">
              <MenuWidget data={menuDataThree} />
              <SocialWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_copyright">
            Copyright © 2024 Pro Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
