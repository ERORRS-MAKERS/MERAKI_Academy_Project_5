import React from 'react';
import HeroStyle4 from '../Hero/HeroStyle4';
import Section from '../Section';
import Spacing from '../Spacing';
import PharmacySection from '../Section/PharmacySection/index';
import { pageTitle } from '../../helpers/PageTitle';

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
        <PharmacySection sectionTitle="" sectionTitleUp="PRESCRIPTIONS" />
      </Section>
      <Spacing md="72" lg="50" />
    </>
  );
}
