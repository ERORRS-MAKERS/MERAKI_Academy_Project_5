import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import ContactForm from '../ContactForm';
import Section from '../Section';
import ContactInfoSection from '../Section/ContactInfoSection';
import { pageTitle } from '../../helpers/PageTitle';
import ScrollUp from '../ScrollUp/ScrollUp';

export default function Contact() {
  pageTitle('Join Us');
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/contact/banner_img.png"
        title="Join Us"
        subTitle="Join Our Dedicated Healthcare Team: Make a Difference Every Day!"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}
