import React from 'react';
import NewsletterForm from '../NewsletterForm';

export default function NewsletterStyle3({ title, subTitle, imgUrl }) {
  return (
    <div className="cs_newsletter_2_wrap">
      <div className="container">
        <div className="cs_newsletter cs_style_3">
          <div className="cs_newsletter_img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="cs_newsletter_in">
            {subTitle && (
              <>
                <p className="cs_newsletter_subtitle cs_accent_color m-0 text-uppercase cs_fs_24">
                  {subTitle}
                </p>
                <div className="cs_height_6" />
              </>
            )}
            {title && <h2 className="cs_newsletter_title cs_fs_72">{title}</h2>}
            <NewsletterForm
              btnText="Submit"
              btnArrowUrl="/images/icons/arrow_white.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
