import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import ScrollUp from '../ScrollUp/ScrollUp';
import AppointmentsSection from '../Section/AppointmentsTableSection';
export default function AppointmentsTable() {
  pageTitle('Appointments for today');
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle5
        bgUrl="/images/timetable/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/timetable/banner_img.png"
        title="ProHealth <br>Timetable"
        subTitle="Get to know the complete info of our <br>doctors’ schedule"
      />
      <Section
        topMd={170}
        topLg={170}
        topXl={170}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AppointmentsSection sectionTitle={'Appointments Table'} />
      </Section>
    </>
  );
}
