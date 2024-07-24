import React from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
import AppointmentSectionStyle3 from '../Section/AppointmentSection/AppointmentSectionStyle3';
import Section from '../Section';
import BrandsSection from '../Section/BrandsSection';
import AboutSectionStyle4 from '../Section/AboutSection/AboutSectionStyle4';
import FeaturesSectionStyle4 from '../Section/FeaturesSection/FeaturesSectionStyle4';
import DepartmentSectionStyle5 from '../Section/DepartmentSection/DepartmentSectionStyle5';
import TestimonialSectionStyle3 from '../Section/TestimonialSection/TestimonialSectionStyle3';
import BannerSectionStyle8 from '../Section/BannerSection/BannerSectionStyle8';
import TeamSectionStyle4 from '../Section/TeamSection/TeamSectionStyle4';
import FaqSectionStyle3 from '../Section/FaqSection/FaqSectionStyle3';
import BlogSectionStyle4 from '../Section/BlogSection/BlogSectionStyle4';
import { pageTitle } from '../../helpers/PageTitle';
const brandData = [
  { imgUrl: 'images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_8.png', imgAlt: 'Brand' },
];
const featureListData = [
  {
    iconUrl: '/images/home_3/value_icon_1.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_3/value_icon_2.svg',
    title: 'Excellence',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_3/value_icon_3.svg',
    title: 'Integrity',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_3/value_icon_1.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_3/value_icon_2.svg',
    title: 'Excellence',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_3/value_icon_3.svg',
    title: 'Integrity',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
];
const departmentData = [
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
const testimonialData = [
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_3/testimonial_img_1.png',
    avatarName: 'LAURENCE VENDETTA',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_3/testimonial_img_2.png',
    avatarName: 'PAULO HUBERT',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_3/testimonial_img_1.png',
    avatarName: 'LAURENCE VENDETTA',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_3/testimonial_img_2.png',
    avatarName: 'PAULO HUBERT',
  },
];
const teamData = [
  {
    imgUrl: '/images/home_3/doctor_1.png',
    name: 'Dr. James Lee, MD',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
    ],
  },
  {
    imgUrl: '/images/home_3/doctor_2.png',
    name: 'Dr. John Smith, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'He is a highly experienced emergency medicine physician with over 15 years of experience.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
    ],
  },
  {
    imgUrl: '/images/home_3/doctor_3.png',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
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
export default function HomeStyle3() {
  pageTitle('Home V3');
  return (
    <>
      <HeroStyle3
        title="Making Health Easy and Accessible"
        subTitle="At ProHealth, we prioritize our patient's health and well-being, and
        we strive to provide compassionate care with exceptional results."
        bgUrl="/images/home_3/hero_bg.svg"
        imgUrl="/images/home_3/hero_img_1.png"
        imgUrl2="/images/home_3/hero_img_2.png"
        imgUrl3="/images/home_3/hero_img_3.png"
        imgUrl4="/images/home_3/hero_img_4.png"
        avatarImgUrl="/images/home_3/hero_avatar.png"
        avatarName="Dr. Michele Amber, MD"
        avatarSpeciality="Cardiologist"
        avatarSheduleList={[
          {
            icon: 'fa6-solid:calendar-days',
            title: 'Days :',
            details: 'Monday - Thursday',
          },
          {
            icon: 'fa6-regular:clock',
            title: 'Time :',
            details: '09.00 Am - 07.00 PM',
          },
        ]}
      />
      <Section>
        <AppointmentSectionStyle3 title="Book Appoinment Now" />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} sectionTitle="Our Partners" />
      </Section>
      <Section>
        <AboutSectionStyle4
          imgUrl="/images/home_3/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          titleUp="ABOUT US"
          title="ProHealth is a team of experienced medical professionals"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a <br /> holistic approach to healthcare that focuses on treating the whole <br />person, not just the illness or symptoms."
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={110}>
        <FeaturesSectionStyle4
          sectionTitle="Our Values"
          data={featureListData}
        />
      </Section>
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
          data={departmentData}
        />
      </Section>
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: 'url(/images/home_3/testimonial_bg.svg)' }}
      >
        <Section
          topMd={190}
          topLg={145}
          topXl={105}
          bottomMd={200}
          bottomLg={150}
          bottomXl={110}
        >
          <TestimonialSectionStyle3
            sectionTitle="What Our Patients Say <br />About Us"
            sectionTitleUp="TESTIMONIALS"
            data={testimonialData}
          />
        </Section>
        <BannerSectionStyle8
          imgUrl="/images/home_3/banner_img.png"
          bgUrl="/images/home_3/banner_bg.svg"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      <Section topMd={195} topLg={145} topXl={105}>
        <TeamSectionStyle4
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={160} topLg={120} topXl={70}>
        <BlogSectionStyle4
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSectionStyle3
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
          sectionTitleDown=""
          sectionSubTitle=""
        />
      </Section>
    </>
  );
}
