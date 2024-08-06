import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import MedicalReportSection from "../Section/MedicalReportSection/index";
import Section from "../Section";
import { pageTitle } from "../../helpers/PageTitle";
import ScrollUp from "../ScrollUp/ScrollUp";

export default function MedicalReportsRequest() {
  pageTitle("Medical Report");
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/contact/banner_img.png"
        title="Don’t Let Your Health Take a Backseat!"
        subTitle="Fill out the appointment form below to schedule a consultation with one of our healthcare professionals."
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <MedicalReportSection />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      ></Section>
    </>
  );
}
