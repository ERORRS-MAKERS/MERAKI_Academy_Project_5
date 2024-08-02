import React from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import Section from "../Section";
import AdminDashbordSection from "../Section/AdminSection/AdminDashbordSection";
import { pageTitle } from "../../helpers/PageTitle";
import ScrollUp from "../ScrollUp/ScrollUp";

export default function AdminDashbord() {
  pageTitle("Admin Dashbord");
  return (
    <>
      <ScrollUp />
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl="/images/pricing_plan/banner_img.png"
        title="Welcome To Pro Health"
        subTitle="Welcome to our family"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AdminDashbordSection />
      </Section>
    </>
  );
}
