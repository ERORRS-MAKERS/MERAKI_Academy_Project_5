import React, { Suspense } from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import Section from '../Section';
import UserPrescriptionSection from '../Section/PrescriptionSection';
import BannerSectionStyle10 from '../Section/BannerSection/BannerSectionStyle10';
import { useLoaderData, Await } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import ScrollUp from '../ScrollUp/ScrollUp';

export default function UserMedicalReports() {
  pageTitle('Prescriptions');
  const { results } = useLoaderData();
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl="/images/pricing_plan/banner_img.png"
        title="Find Your Prescriptions"
        subTitle="Explore your Prescriptions History"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        style={{ position: 'relative' }}
      >
        <Suspense
          fallback={
            <Loading
              customStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
        >
          <Await resolve={results} errorElement={<ErrorPage />}>
            {(results) => {
              return (
                <UserPrescriptionSection
                  sectionTitle="Prescriptions"
                  data={results.data.result}
                />
              );
            }}
          </Await>
        </Suspense>
      </Section>

      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl="https://prohealth-react.vercel.app/images/pricing_plan/banner_img_2.png"
          title="Explore your Prescriptions History"
        />
      </Section>
    </>
  );
}
