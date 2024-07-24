import React from 'react';
import parse from 'html-react-parser';
import NewsletterForm from '../NewsletterForm';

export default function NewsletterStyle2({ title, subTitle }) {
  return (
    <div className="cs_newsletter_1_wrap">
      <div className="container">
        <div className="cs_newsletter cs_style_2">
          <div className="cs_newsletter_left">
            <h2 className="cs_newsletter_title">{parse(title)}</h2>
            <p className="cs_newsletter_subtitle">{parse(subTitle)}</p>
          </div>
          <div className="cs_newsletter_right">
            <NewsletterForm
              label="Your Email"
              btnText="Submit"
              btnArrowUrl="/images/icons/arrow_white.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
