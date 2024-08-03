import React, { useEffect, useState } from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import ScrollUp from '../ScrollUp/ScrollUp';
import HiringDoctors from '../Section/AdminSection/getDoctorsRequests';
import { getDoctorsHiringRequests } from '../../service/api/getDoctorsHirigRequests';
import { useDispatch } from 'react-redux';
import { sethiringRequest } from '../../service/redux/reducers/doctorsHiringRequest/index';

export default function DoctorsJobRequest() {
  pageTitle('Doctors');
  const [data, setData] = useState(false);
  const dispatch = useDispatch();

  const getHiringResult = async () => {
    const results = await getDoctorsHiringRequests(false);
    console.log('test', results.result);
    dispatch(sethiringRequest(results.result));
    setData(true);
  };
  useEffect(() => {
    getHiringResult();
  });

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
        {data && <HiringDoctors />}
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
