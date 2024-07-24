import React from 'react';
import HeroStyle6 from '../Hero/HeroStyle6';
import Section from '../Section';
import AboutSectionStyle3 from '../Section/AboutSection/AboutSectionStyle3';
import DepartmentSectionStyle4 from '../Section/DepartmentSection/DepartmentSectionStyle4';
import TestimonialSectionStyle2 from '../Section/TestimonialSection/TestimonialSectionStyle2';
import WorkingProcess from '../Section/WorkingProcess';
import BannerSectionStyle2 from '../Section/BannerSection/BannerSectionStyle2';
import BlogSectionStyle3 from '../Section/BlogSection/BlogSectionStyle3';
import FaqSectionStyle2 from '../Section/FaqSection/FaqSectionStyle2';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import BrandsSectionStyle2 from '../Section/BrandsSection/BrandsSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    title: 'Emergency Department',
    iconUrl: '/images/home_2/department_icon_1.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Pediatric Departement',
    iconUrl: '/images/home_2/department_icon_2.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Obstetrics and Gynecology Department',
    iconUrl: '/images/home_2/department_icon_3.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Cardiology Department',
    iconUrl: '/images/home_2/department_icon_4.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Neurology Department',
    iconUrl: '/images/home_2/department_icon_5.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Psychiatry Department',
    iconUrl: '/images/home_2/department_icon_6.svg',
    href: '/departments/department-details',
  },
];
const testimonialData = [
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
  {
    text: 'I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”',
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home_1/avatar_2.png',
    avatarName: 'PAULO HUBERT',
    avatarDesignation: 'New York, USA',
  },
];
const workingProcessData = [
  {
    title: 'Book Appointment',
    subTitle:
      'You can book an appointment with us by <br />calling our office, filling out an online form, or <br />using our mobile app.',
    iconUrl: '/images/home_2/wording_process_icon_1.svg',
    number: '01',
  },
  {
    title: 'Visit Our Facility',
    subTitle:
      'On the day of your appointment, come to our <br />facility at the designated time. Our staff will greet <br />you and guide you through the check-in process.',
    iconUrl: '/images/home_2/wording_process_icon_2.svg',
    number: '02',
  },
  {
    title: 'Meet with Our Healthcare <br />Professionals',
    subTitle:
      'You will meet with one of our healthcare <br />professionals who will conduct a thorough <br />examination and provide a diagnosis or <br />treatment plan.',
    iconUrl: '/images/home_2/wording_process_icon_3.svg',
    number: '03',
  },
  {
    title: 'Follow-up Care',
    subTitle:
      'We will schedule any necessary follow-up <br />appointments, tests, or procedures to ensure <br />that you receive the best possible care.',
    iconUrl: '/images/home_2/wording_process_icon_4.svg',
    number: '04',
  },
  {
    title: 'Insurance and Billing',
    subTitle:
      'We accept most major insurance plans and <br />our billing department will work with you to <br />ensure that you understand your coverage <br />and any out-of-pocket expenses.',
    iconUrl: '/images/home_2/wording_process_icon_5.svg',
    number: '05',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
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
const brandData = [
  {
    imgUrl: '/images/brand_1.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_2.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_3.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_4.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_5.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_6.png',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brand_7.png',
    imgAlt: 'Brand',
  },
];
export default function HomeStyle6() {
  pageTitle('Home V6');
  return (
    <>
      <HeroStyle6
        title="Compassionate care, exceptional results."
        subTitle="Our team of experienced doctors and healthcare professionals are
        committed to providing quality care and personalized attention to
        our patients."
        bgUrl="/images/home_2/hero_bg.jpeg"
        imgUrl="/images/home_2/patents.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        btnText="Pro Health"
        btnUrl="/"
        funfactList={[
          { number: '20+', title: 'Years of experience' },
          { number: '95%', title: 'Patient satisfaction rating' },
          { number: '5000+', title: 'Patients served annually' },
          { number: '10+', title: 'Healthcare providers on staff' },
        ]}
      />
      <Section bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="ProHealth is a team of experienced medical professional"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms."
          imgUrl="/images//home_2/about.jpeg"
        />
      </Section>
      <Section bottomMd={125} bottomLg={125} bottomXl={85}>
        <DepartmentSectionStyle4
          sectionTitle="For Your Health"
          sectionTitleUp="OUR DEPARTMENTS"
          data={departmentData}
        />
      </Section>
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <WorkingProcess
          sectionTitle="How it Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
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
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSectionStyle3
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          sectionTitleDown=""
          sectionSubTitle=""
          data={blogData}
        />
      </Section>
      {/* Start FAQ Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
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
        <BrandsSectionStyle2 data={brandData} />
      </Section>
    </>
  );
}
