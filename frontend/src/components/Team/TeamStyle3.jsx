import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

export default function TeamStyle3({
  imgUrl,
  name,
  designation,
  description,
  social,
  availableUrl,
  callUrl,
  chatUrl,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_doctor_profile cs_style_1">
      <div className="cs_doctor_img">
        <img src={imgUrl} alt={name} className="cs_radius_25" />
      </div>
      <div className="cs_doctor_profile_right">
        <div className="cs_doctor_info cs_radius_25 cs_white_bg overflow-hidden">
          <div className="cs_doctor_info_in">
            <h3 className="cs_fs_40 cs_semibold">{name}</h3>
            <p className="cs_fs_20 cs_heading_color mb-0">{designation}</p>
            <div className="cs_height_9" />
            <p className="mb-0">{parse(description)}</p>
            <div className="cs_height_28" />
            <div className="cs_social_links">
              {social?.map((item, index) => (
                <Link to={item.href} key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="cs_doctor_meta cs_accent_bg">
            <div className="cs_doctor_meta_left cs_white_color">
              {availableUrl && (
                <Link to={availableUrl}>
                  <img src="/images/departments/clock.svg" alt="Icon" />
                  Avaibility
                </Link>
              )}
              {callUrl && (
                <Link to={callUrl}>
                  <img src="/images/departments/call.svg" alt="Icon" />
                  Call
                </Link>
              )}

              {chatUrl && (
                <Link to={chatUrl}>
                  <img src="/images/departments/chat.svg" alt="Icon" />
                  Chat
                </Link>
              )}
            </div>
            <div className="cs_doctor_meta_right cs_white_color cs_semibold">
              <Link to={btnUrl}>
                <span>{btnText}</span>
                <svg
                  width={14}
                  height={10}
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8137 5.44955L9.35909 9.82455C9.23907 9.9384 9.07832 10.0014 8.91147 9.99998C8.74461 9.99855 8.585 9.93282 8.46702 9.81694C8.34903 9.70106 8.2821 9.5443 8.28065 9.38043C8.2792 9.21656 8.34334 9.05868 8.45926 8.94081L11.8276 5.63268H0.63637C0.467594 5.63268 0.305731 5.56683 0.186388 5.44962C0.0670459 5.33241 0 5.17344 0 5.00768C0 4.84192 0.0670459 4.68295 0.186388 4.56574C0.305731 4.44853 0.467594 4.38268 0.63637 4.38268H11.8276L8.45926 1.07456C8.39848 1.0169 8.35 0.947935 8.31665 0.871683C8.2833 0.79543 8.26575 0.713418 8.26501 0.63043C8.26428 0.547443 8.28038 0.465144 8.31238 0.388334C8.34437 0.311524 8.39163 0.241741 8.45138 0.183059C8.51113 0.124375 8.58218 0.0779667 8.66039 0.0465412C8.73859 0.0151157 8.82239 -0.00069809 8.90689 2.28882e-05C8.99138 0.00074482 9.07489 0.0179863 9.15253 0.0507421C9.23017 0.083498 9.30039 0.131111 9.35909 0.190804L13.8137 4.56581C13.933 4.68301 14 4.84195 14 5.00768C14 5.17341 13.933 5.33235 13.8137 5.44955Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
