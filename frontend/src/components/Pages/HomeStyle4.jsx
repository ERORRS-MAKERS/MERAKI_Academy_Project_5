import React from 'react';
import HeroStyle4 from '../Hero/HeroStyle4';
import Section from '../Section';
import DepartmentSectionStyle6 from '../Section/DepartmentSection/DepartmentSectionStyle6';
import AboutSectionStyle5 from '../Section/AboutSection/AboutSectionStyle5';
import FeaturesSectionStyle5 from '../Section/FeaturesSection/FeaturesSectionStyle5';
import Cta from '../Cta';
import TestimonialSectionStyle4 from '../Section/TestimonialSection/TestimonialSectionStyle4';
import PricingSection from '../Section/PricingSection';
import BrandsSectionStyle3 from '../Section/BrandsSection/BrandsSectionStyle3';
import FaqSectionStyle4 from '../Section/FaqSection/FaqSectionStyle4';
import BlogSectionStyle5 from '../Section/BlogSection/BlogSectionStyle5';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    title: 'Emergency Department',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_1.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Pediatric Departement',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_2.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Gynecology Department',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_3.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Cardiology Department',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_4.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Neurology Department',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_5.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Psychiatry Department',
    subTitle:
      'Connecting you with the best healthcare professionals in Emergency Department',
    iconUrl: '/images/home_2/department_icon_6.svg',
    href: '/departments/department-details',
  },
];
const featureListData = [
  {
    iconUrl: '/images/home_4/compassion.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
  },
  {
    iconUrl: '/images/home_4/excellence.svg',
    title: 'Excellence',
    subTitle:
      'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, and resources to ensure that we deliver the highest quality care possible.',
  },
  {
    iconUrl: '/images/home_4/integrity.svg',
    title: 'Integrity',
    subTitle: `We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first.`,
  },
  {
    iconUrl: '/images/home_4/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
  },
  {
    iconUrl: '/images/home_4/teamwork.svg',
    title: 'Teamwork',
    subTitle:
      'We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.',
  },
];
const testimonialData = [
  {
    text: '"I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_2.png',
    avatarName: 'Sophia Torres',
    avatarDesignation: 'New York, USA',
  },
  {
    text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_3.png',
    avatarName: 'John Dupont',
    avatarDesignation: 'Manhattan, USA',
  },
  {
    text: '“I had a great experience with ProHealth. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_4.png',
    avatarName: 'Allen Duarte',
    avatarDesignation: 'California, USA',
  },
  {
    text: '"I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_2.png',
    avatarName: 'Sophia Torres',
    avatarDesignation: 'New York, USA',
  },
  {
    text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_3.png',
    avatarName: 'John Dupont',
    avatarDesignation: 'Manhattan, USA',
  },
  {
    text: '“I had a great experience with ProHealth. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_4.png',
    avatarName: 'Allen Duarte',
    avatarDesignation: 'California, USA',
  },
];
const pricingData = [
  {
    title: 'Family Health Plan',
    price: '$249',
    period: '/month',
    featureList: [
      'Whole Family Coverage',
      'Reduced Vaccination Costs',
      '24/7 Medical Advice',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Wellness Plan',
    price: '$99',
    period: '/month',
    featureList: [
      'Unlimited Check-ups',
      'Discounts on Treatments',
      'Annual Health Assessment',
      'Priority Scheduling',
      'Wellness Workshops',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: true,
  },
  {
    title: 'Senior Wellness Plan',
    price: '$149',
    period: '/month',
    featureList: [
      'Senior-Specific Care',
      'Geriatric Assessments',
      'Fall Prevention Programs',
      'Medication Discounts',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
];
const brandData = [
  { imgUrl: '/images/home_4/brand_logo_1.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_2.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_3.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_4.svg', imgAlt: 'Brand' },
  { imgUrl: '/images/home_4/brand_logo_5.svg', imgAlt: 'Brand' },
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
    thumbUrl: '/images/home_4/post_1.jpeg',
    category: 'Mental Health',
    date: 'September 12, 2023',
    href: '/blog/blog-details',
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: '/images/home_4/post_2.jpeg',
    category: 'Education',
    date: 'September 07, 2023',
    href: '/blog/blog-details',
  },
  {
    title:
      'Managing Chronic Pain: Tips and Strategies for a Better Quality of Life',
    thumbUrl: '/images/home_4/post_3.jpeg',
    category: 'Healthy Life',
    date: 'September 01, 2023',
    href: '/blog/blog-details',
  },
];
export default function HomeStyle4() {
  pageTitle('Home V4');
  return (
    <>
      <HeroStyle4
        title="Your Path to Health and Wellness Begins Here"
        subTitle="Your Trusted Partner in Comprehensive Healthcare, Where Your Well-being is Our Priority, Providing Quality Care and Support for All Your Health Needs."
        bgUrl="/images/home_4/hero_bg.jpeg"
        imgUrl="/images/home_4/hero_img_1.png"
        imgUrl2="/images/home_4/hero_img_2.png"
        imgUrl3="/images/home_4/hero_img_3.png"
      />
      <Section topMd={190} topLg={150} topXl={105} id="departments">
        <DepartmentSectionStyle6
          sectionTitle="Find Your Right Department"
          sectionTitleUp="DEPARTMENTS"
          data={departmentData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={100}>
        <AboutSectionStyle5
          imgUrl="/images/home_4/about_img.jpeg"
          titleUp="ABOUT US"
          title="ProHealth is a team of experienced medical professionals"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms."
          supportTitle="24/7 Support"
          supportSubTitle="We are available when you want"
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={100}
        className="cs_gray_bg_1"
      >
        <FeaturesSectionStyle5
          sectionTitle="Our Values"
          data={featureListData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={150}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle4
          sectionTitle="Discover the Stories of Health and Healing"
          sectionTitleUp="WHAT OUR PATIENTS SAY"
          avatarListTitle="150+ patients are reviews about ProHealth"
          avatarList={[
            { imgUrl: '/images/home_4/avatar_1.png' },
            { imgUrl: '/images/home_4/avatar_2.png' },
            { imgUrl: '/images/home_4/avatar_3.png' },
            { imgUrl: '/images/home_4/avatar_4.png' },
            { imgUrl: '/images/home_4/avatar_5.png' },
          ]}
          data={testimonialData}
        />
      </Section>
      <Section>
        <Cta
          title="Ready to Prioritize Your Health?"
          subTitle="Contact us now to schedule your appointment and take the first step towards a healthier, happier you."
          bgUrl="/images/home_4/cta_bg.jpeg"
          btnUrl="/appointments"
          btnText="Booking Now"
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        className="cs_gray_bg_1"
      >
        <PricingSection
          sectionTitle="Choose Your ProHealth <br />Membership Plan"
          data={pricingData}
        />
      </Section>
      <Section>
        <BrandsSectionStyle3 data={brandData} />
      </Section>
      <Section topMd={185} topLg={145} topXl={105}>
        <FaqSectionStyle4
          sectionTitle="Frequently Asked <br />Questions"
          data={faqData}
          faqImgUrl="/images/home_4/faq_img.jpeg"
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
      <Section
        topMd={185}
        topLg={145}
        topXl={105}
        bottomMd={160}
        bottomLg={110}
        bottomXl={80}
      >
        <BlogSectionStyle5
          sectionTitle="Our Latest Blog"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={blogData}
        />
      </Section>
    </>
  );
}
