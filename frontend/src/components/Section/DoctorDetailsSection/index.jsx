import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import List from '../../List';
import ListStyle3 from '../../List/ListStyle3';
import ListStyle2 from '../../List/ListStyle2';
import Spacing from '../../Spacing';

export default function DoctorDetailsSection({
  bgUrl,
  imgUrl,
  name,
  department,
  designation,
  description,
  social,
  contactInfo,
  contactInfoHeading,
  degrees,
  degreesHeading,
  experiences,
  experiencesHeading,
  awards,
  awardHeading,
  schedules,
  scheduleHeading,
}) {
  return (
    <div className="cs_doctor_details">
      <div
        className="cs_doctor_details_bg cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <Spacing md="85" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cs_single_doctor overflow-hidden cs_radius_20">
              <img src={imgUrl} alt="Doctor" className="w-100" />
              <h3 className="cs_white_color cs_accent_bg mb-0 text-center cs_semibold cs_fs_24">
                {department}
              </h3>
            </div>
            <Spacing md="94" lg="60" />
            <ListStyle2
              heading={contactInfoHeading}
              iconUrl="/images/icons/schedule.svg"
              data={contactInfo}
            />
            <Spacing md="66" lg="60" />
            <ListStyle3
              heading={scheduleHeading}
              iconUrl="/images/icons/schedule.svg"
              data={schedules}
            />
          </div>
          <div className="col-lg-6 offset-lg-1 position-relative">
            <Spacing md="55" />
            <h2 className="cs_fs_48 mb-0 cs_semibold">{name}</h2>
            <Spacing md="12" />
            <h3 className="cs_semibold cs_fs_24 mb-0">{designation}</h3>
            <Spacing md="32" />
            <p className="mb-0 cs_heading_color">{description}</p>
            <div className="cs_social_links cs_accent_bg cs_radius_15">
              {social?.map((item, index) => (
                <Link to={item.href} key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
            <Spacing md="200" xl="150" lg="80" />
            <Spacing md="35" lg="0" />
            <List
              heading={degreesHeading}
              iconUrl="/images/icons/graduation.svg"
              data={degrees}
            />
            <Spacing md="70" lg="50" />
            <List
              heading={experiencesHeading}
              iconUrl="/images/icons/experience.svg"
              data={experiences}
            />
            <Spacing md="70" lg="50" />
            <List
              heading={awardHeading}
              iconUrl="/images/icons/award2.svg"
              data={awards}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
