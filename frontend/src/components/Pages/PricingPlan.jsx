import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import PricingSection from '../Section/PricingSection';
import FaqSectionStyle4 from '../Section/FaqSection/FaqSectionStyle4';
import BannerSectionStyle10 from '../Section/BannerSection/BannerSectionStyle10';
const pricingData = [
  {
    title: 'Family Health Plan',
    subTitle:
      'Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.',
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
    subTitle:
      'Comprehensive healthcare tailored to your needs. Experience unlimited care and exclusive access to wellness events.',
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
    subTitle:
      'Specialized care for seniors. Benefit from tailored assessments, fall prevention, and support for your golden years.',
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
  {
    title: 'Dental Health Plan',
    subTitle:
      'Smile with confidence. Enjoy regular dental check-ups, emergency coverage, and exclusive discounts on dental procedures.',
    price: '$79',
    period: '/month',
    featureList: [
      'Dental Check-ups',
      'Procedure Discounts',
      'Emergency Coverage',
      'Oral Health Advice',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: `Women's Health Plan`,
    subTitle: `Comprehensive women's health services. Receive expert gynecological care, family planning support, and prenatal/postnatal.`,
    price: '$169',
    period: '/month',
    featureList: [
      `Women's Health Services`,
      'Gynecological Care',
      'Fall Prevention Programs',
      'Family Planning',
      'Prenatal & Postnatal Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Sports & Fitness Plan',
    subTitle:
      'Optimized for athletes. Access sports injury assessments, physiotherapy, and expert advice for peak performance and recovery.',
    price: '$119',
    period: '/month',
    featureList: [
      'Sports Injury Assessments',
      'Physiotherapy Sessions',
      'Sports Medicine Experts',
      'Fitness Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
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
export default function PricingPlan() {
  pageTitle('Pricing Plan');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl="/images/pricing_plan/banner_img.png"
        title="Find the Right Plan <br>for You"
        subTitle="Explore Our Membership Options and Start Your Journey to Better Health"
        btnText="Get Starter"
        btnUrl="/contact"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <PricingSection
          sectionTitle="Choose Your ProHealth <br />Membership Plan"
          data={pricingData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        className="cs_gray_bg_1"
      >
        <FaqSectionStyle4
          sectionTitle="Frequently Asked <br />Questions"
          data={faqData}
          faqImgUrl="/images/home_4/faq_img.jpeg"
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl="/images/pricing_plan/banner_img_2.png"
          title="Choose Your Plan and Invest in Your Health Today!"
        />
      </Section>
    </>
  );
}
