import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle3 from '../Section/DepartmentSection/DepartmentSectionStyle3';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Emergency Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Cardiology Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Pediatric Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Obstetrics and Gynecology',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Psychiatry Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Neurology Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Occupational Therapy Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Physical Therapy Department',
    subTitle:
      'This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.',
    href: '/departments/department-details',
  },
];

export default function Departments() {
  pageTitle('Departments');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="/images/departments/banner_img.png"
        title="Get to Know <br>ProHealth Departments"
        subTitle="At ProHealth, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}
