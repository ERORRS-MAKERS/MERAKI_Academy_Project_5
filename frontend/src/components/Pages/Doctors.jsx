import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
const teamData = [
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/doctors/doctor_1.png',
    department: 'Emergency Department',
    name: 'Dr. Lisa Chen, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine. She has a special interest in critical care and trauma management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'cardiology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/doctors/doctor_2.png',
    department: 'Emergency Department',
    name: 'Dr. Michael Johnson, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Johnson is a highly experienced emergency medicine physician with over 15 years of experience. He is board-certified in emergency medicine and has a special interest in disaster management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/doctors/doctor_3.png',
    department: 'Emergency Department',
    name: 'Dr. Karen Lee, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Lee is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. She is board-certified in emergency medicine and has a special interest in cardiac.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'pediatric',
    href: '/doctors/doctor-details',
  },
];

export default function Doctors() {
  pageTitle('Doctors');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/doctors/banner_img.png"
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="https://prohealth-react.vercel.app/images/doctors/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
