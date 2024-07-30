import React from 'react';
import HeroStyle4 from '../Hero/HeroStyle4';
import Section from '../Section';
import Spacing from '../Spacing';
import PharmacySection from '../Section/PharmacySection/index';
import { pageTitle } from '../../helpers/PageTitle';

export default function HomeStyle4() {
  pageTitle('Pharmacy');
  return (
    <>
      <HeroStyle4
        title="Your Expertise and Compassion Make Every Prescription a Path to Wellness!"
        subTitle="Your dedication to ensuring the health and well-being of others is truly inspiring. Every day, you make a positive impact with your knowledge, care, and compassion. Thank you for being a vital part of our community"
        bgUrl="/images/home_4/hero_bg.jpeg"
        imgUrl="/images/home_4/hero_img_1.png"
        imgUrl2="/images/home_4/hero_img_2.png"
        imgUrl3="/images/home_4/hero_img_3.png"
      />
      <Section topMd={190} topLg={150} topXl={105} id="departments">
        <PharmacySection sectionTitle="" sectionTitleUp="PRESCRIPTIONS" />
      </Section>
      <Spacing md="72" lg="50" />
    </>
  );
}
