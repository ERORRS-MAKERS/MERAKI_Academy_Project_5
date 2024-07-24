import React from 'react';
import SectionHeading from '../../SectionHeading';
import TestimonialCarouselStyle3 from '../../Slider/TestimonialCarouselStyle3';

export default function TestimonialSectionStyle4({
  sectionTitle,
  sectionTitleUp,
  avatarListTitle,
  avatarList,
  data,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="cs_section_wrap_1">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <div className="cs_avatar_card">
              <h2 className="cs_avatar_card_title cs_fs_24 cs_semibold">
                {avatarListTitle}
              </h2>
              <div className="cs_avatar_group">
                {avatarList?.map((item, index) => (
                  <div className="cs_avatar_item" key={index}>
                    <img src={item.imgUrl} alt="Avatar" />
                  </div>
                ))}
                <div className="cs_avatar_item">
                  <div className="cs_center cs_accent_bg rounded-circle h-100 w-100">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.5541 20.4455H2.44592C1.09479 20.4455 0 19.3508 0 17.9996C0 16.6485 1.09479 15.5537 2.44592 15.5537H33.5541C34.9052 15.5537 36 16.6485 36 17.9996C36 19.3508 34.9052 20.4455 33.5541 20.4455Z"
                        fill="white"
                      />
                      <path
                        d="M18.0006 36C16.6495 36 15.5547 34.9052 15.5547 33.5541V2.44592C15.5547 1.09479 16.6495 0 18.0006 0C19.3517 0 20.4465 1.09479 20.4465 2.44592V33.5541C20.4465 34.9052 19.3517 36 18.0006 36Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <TestimonialCarouselStyle3 data={data} />
        </div>
      </div>
    </div>
  );
}
