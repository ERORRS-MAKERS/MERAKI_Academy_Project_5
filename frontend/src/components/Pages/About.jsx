import React, { Suspense } from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import Section from '../Section';
import DepartmentSectionStyle2 from '../Section/DepartmentSection/DepartmentSectionStyle2';
import FeaturesSectionStyle2 from '../Section/FeaturesSection/FeaturesSectionStyle2';
import FunFactSection from '../Section/FunFactSection';
import TeamSection from '../Section/TeamSection';
import GallerySection from '../Section/GallerySection';
import { pageTitle } from '../../helpers/PageTitle';
import { useLoaderData, Await } from 'react-router-dom';
import ScrollUp from '../ScrollUp/ScrollUp';

const departmentData = [
  {
    title: 'Diagnostic testing',
    subTitle:
      'Blood tests, imaging studies, and other tests to diagnose health conditions',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Rehabilitation services',
    subTitle:
      'Physical therapy, occupational therapy, and other services to help patients recover from injuries',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Preventive care',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Treatment for acute and chronic conditions',
    subTitle:
      'Medication management, disease management, and other treatments to improve health outcomes',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Mental health services',
    subTitle:
      'Counseling, therapy, and other services to help patients manage mental health conditions',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
];

const featureListData = [
  {
    title: 'Experienced Medical Professionals',
    subTitle:
      'Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.',
    iconUrl: 'images/icons/professional.svg',
  },
  {
    title: 'Comprehensive <br />Services',
    subTitle:
      'We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.',
    iconUrl: 'images/icons/comprehensive.svg',
  },
  {
    title: 'Patient-centered <br />Approach',
    subTitle:
      'We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.',
    iconUrl: 'images/icons/patient.svg',
  },
  {
    title: 'State-of-the-art <br />Facilities',
    subTitle:
      'Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.',
    iconUrl: 'images/icons/facilities.svg',
  },
];

const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

const galleryData = [
  {
    imgUrl:
      'https://prohealth-react.vercel.app/images/about/portfolio_2_lg.jpeg',
  },
  {
    imgUrl:
      'https://prohealth-react.vercel.app/images/about/portfolio_3_lg.jpeg',
  },
  {
    imgUrl:
      'https://prohealth-react.vercel.app/images/about/portfolio_1_lg.jpeg',
  },
  {
    imgUrl:
      'https://prohealth-react.vercel.app/images/about/portfolio_4_lg.jpeg',
  },
  {
    imgUrl:
      'https://prohealth-react.vercel.app/images/about/portfolio_5_lg.jpeg',
  },
];

export default function About() {
  const { results } = useLoaderData();

  pageTitle('About');
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/about/banner_img.png"
        title="Welcome to <br />ProHealth Medical & Healthcare Center"
        subTitle="Your Partner in Health and Wellness"
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="https://prohealth-react.vercel.app/images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <Suspense fallback={<p>Loading data</p>}>
          <Await resolve={results} errorElement={<p>error loading data</p>}>
            {(results) => {
              return (
                <TeamSection
                  sectionTitle="Experts Doctor"
                  sectionTitleUp="MEET OUR"
                  data={results.data.result}
                />
              );
            }}
          </Await>
        </Suspense>
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        className="cs_footer_margin_0"
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BannerSectionStyle4
          bgUrl="https://prohealth-react.vercel.app/images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}
