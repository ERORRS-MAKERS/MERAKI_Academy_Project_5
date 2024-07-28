import React, { Suspense } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle3 from '../Section/DepartmentSection/DepartmentSectionStyle3';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
import { useLoaderData, Await } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import ScrollUp from '../ScrollUp/ScrollUp';

export default function Departments() {
  pageTitle('Departments');
  const { results } = useLoaderData();
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/departments/banner_img.png"
        title="Get to Know <br>ProHealth Departments"
        subTitle="At ProHealth, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />

      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <Suspense fallback={<Loading />}>
          <Await resolve={results} errorElement={<ErrorPage />}>
            {(results) => {
              return <DepartmentSectionStyle3 data={results.data.result} />;
            }}
          </Await>
        </Suspense>
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="https://prohealth-react.vercel.app/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}
