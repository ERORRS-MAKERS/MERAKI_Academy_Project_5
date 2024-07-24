import React from 'react';
import HeroStyle5 from '../Hero/HeroStyle5';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import DepartmentSectionStyle2 from '../Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSection from '../Section/AboutSection';
import DepartmentSectionStyle5 from '../Section/DepartmentSection/DepartmentSectionStyle5';
import BannerSectionStyle2 from '../Section/BannerSection/BannerSectionStyle2';
import TeamSection from '../Section/TeamSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import FaqSectionStyle2 from '../Section/FaqSection/FaqSectionStyle2';
import BlogSectionStyle4 from '../Section/BlogSection/BlogSectionStyle4';
import BrandsSectionStyle3 from '../Section/BrandsSection/BrandsSectionStyle3';
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
const departmentData2 = [
  {
    title: 'Emergency Department',
    iconUrl: '/images/home_3/department_icon_1.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Pediatric Departement',
    iconUrl: '/images/home_3/department_icon_2.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Gynecology Department',
    iconUrl: '/images/home_3/department_icon_3.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Cardiology Department',
    iconUrl: '/images/home_3/department_icon_4.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Neurology Department',
    iconUrl: '/images/home_3/department_icon_5.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Psychiatry Department',
    iconUrl: '/images/home_3/department_icon_6.svg',
    href: '/departments/department-details',
  },
];
const teamData = [
  {
    imgUrl: 'images/about/doctor_1.png',
    name: 'Dr. James Lee, MD',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_2.png',
    name: 'Dr. John Smith, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'With expertise in treating acute illnesses and injuries in medicine physician',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_3.png',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];
const faqData = [
  {
    title: 'What services does ProHealth offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with ProHealth?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: '/images/home_3/blog_1.jpeg',
    date: 'May 21, 2023',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title:
      'Understanding Chronic Fatigue Syndrome: Symptoms, Causes, and Treatment',
    thumbUrl: '/images/home_3/blog_2.jpeg',
    date: 'May 20, 2023',
    href: '/blog/blog-details',
    socialShare: false,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: '/images/home_3/blog_3.jpeg',
    date: 'May 15, 2023',
    href: '/blog/blog-details',
    socialShare: false,
  },
  {
    title:
      'Managing Chronic Pain: Tips and Strategies for a Better Quality of Life',
    thumbUrl: '/images/home_3/blog_4.jpeg',
    date: 'May 10, 2023',
    href: '/blog/blog-details',
    socialShare: false,
  },
];
const brandData = [
  { imgUrl: '/images/home_4/brand_logo_1.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_2.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_3.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_4.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_5.svg', imgAlt: 'Brand' },
];

export default function HomeStyle5() {
  pageTitle('Home V5');
  return (
    <>
      <HeroStyle5
        title="Take Best Treatment with Our <span>Dentist</span>"
        subTitle="Our team of experienced doctors and healthcare professionals are committed to providing quality care and personalized attention to our patients."
        imgUrl="/images/home_5/hero_img.png"
        btnText="Pro Health"
        btnUrl="/about"
        funfactList={[
          { number: '20+', title: 'Years of experience' },
          { number: '95%', title: 'Patient satisfaction rating' },
          { number: '5000+', title: 'Patients served annually' },
          { number: '10+', title: 'Healthcare providers on staff' },
        ]}
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      {/* Start About Section */}
      <Section topMd={180} topLg={130} topXl={100}>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="PRO HEALTH"
          featureList={[
            {
              featureListTitle:
                'ProHealth is a team of experienced medical professionals',
              featureListSubTitle:
                'Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.',
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={175}
        bottomLg={125}
        bottomXl={85}
      >
        <DepartmentSectionStyle5
          sectionTitle="For Your Health"
          sectionTitleUp="OUR DEPARTMENT"
          data={departmentData2}
        />
      </Section>
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />
          experienced medical professionals today!"
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={170}
        bottomLg={120}
        bottomXl={80}
      >
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSectionStyle4
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSectionStyle3 data={brandData} />
      </Section>
    </>
  );
}
