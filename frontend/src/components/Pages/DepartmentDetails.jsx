import React from 'react';
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle3';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';

const featureData = [
  {
    title: 'Vaccinations Department',
    subTitle:
      'The Pediatric Department provides vaccinations to help protect children from a range of illnesses and diseases, including measles.',
    iconUrl: '/images/departments/icon_9.svg',
  },
  {
    title: 'Management of acute illnesses',
    subTitle:
      'The Pediatric Department provides treatment for common childhood illnesses, such as ear infections, strep throat, and viral infections.',
    iconUrl: '/images/departments/icon_10.svg',
  },
  {
    title: 'Treatment of chronic conditions',
    subTitle:
      'The Pediatric Department provides ongoing care and treatment for children with chronic conditions such as asthma, diabetes, and allergies.',
    iconUrl: '/images/departments/icon_11.svg',
  },
  {
    title: 'Developmental screenings',
    subTitle:
      'The Pediatric Department provides regular developmental screenings to identify any delays or concerns and provide early intervention services.',
    iconUrl: '/images/departments/icon_12.svg',
  },
];

const doctorData = [
  {
    imgUrl: '/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/appointments',
  },
  {
    imgUrl: '/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
  {
    imgUrl: '/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
  {
    imgUrl: '/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
];

export default function DepartmentDetails() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Pediatric Department"
          subTitle="This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Related Doctor" data={doctorData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section>
      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl="/images/departments/banner_img_3.png"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
