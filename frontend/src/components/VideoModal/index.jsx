import React from 'react';
import { useState } from 'react';

export default function VideoModal({ videoUrl, videoBtnText, variant }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setIframeSrc(`${videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <span
        className={`cs_video_open cs_text_btn_2 cs_fs_20 ${
          variant ? variant : ''
        }`}
        onClick={handelClick}
      >
        <span className="cs_text_btn_icon">
          <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.739 7.26089C32.8938 -2.48797 17.0097 -2.40994 7.26088 7.43526C-2.42029 17.2121 -2.42029 32.9623 7.26088 42.7392C17.1061 52.488 32.9902 52.41 42.739 42.5648C52.4202 32.788 52.4202 17.0377 42.739 7.26089ZM25 48.0713C12.2783 48.0713 1.92868 37.7217 1.92868 25C1.92868 12.2782 12.2782 1.9288 25 1.9288C37.7217 1.9288 48.0712 12.2784 48.0712 25.0001C48.0712 37.7218 37.7216 48.0713 25 48.0713Z"
              fill="currentColor"
            />
            <path
              d="M38.5996 24.1265V24.1277L18.2308 12.368C17.7487 12.0897 17.1322 12.2548 16.8539 12.737C16.7655 12.8901 16.7189 13.0637 16.7189 13.2405V36.7598C16.7191 37.3164 17.1707 37.7676 17.7273 37.7672C17.9041 37.7671 18.0778 37.7206 18.2309 37.6322L38.5997 25.8725C39.0819 25.5943 39.2471 24.9778 38.9689 24.4956C38.8803 24.3423 38.753 24.215 38.5996 24.1265Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="cs_text_btn_text">{videoBtnText}</span>
      </span>

      <div className={toggle ? 'cs_video_popup active' : 'cs_video_popup'}>
        <div className="cs_video_popup_overlay" />
        <div className="cs_video_popup_content">
          <div className="cs_video_popup_layer" />
          <div className="cs_video_popup_container">
            <div className="cs_video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </div>
            </div>
            <div className="cs_video_popup_close" onClick={handelClose} />
          </div>
        </div>
      </div>
    </>
  );
}
