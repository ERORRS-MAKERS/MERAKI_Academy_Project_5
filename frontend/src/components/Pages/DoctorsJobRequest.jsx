import React, { Suspense } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import { useLoaderData, Await } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import ScrollUp from '../ScrollUp/ScrollUp';
import HiringDoctors from '../Section/AdminSection/GetDoctorsRequests';

export default function DoctorsJobRequest() {
  pageTitle('Doctors');
  const { results } = useLoaderData();

  return (
    <>
      <ScrollUp />
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/doctors/banner_img.png"
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <Suspense fallback={<Loading />}>
          <Await resolve={results} errorElement={<ErrorPage />}>
            {(results) => {
              return <HiringDoctors data={results.data.result} />;
            }}
          </Await>
        </Suspense>
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