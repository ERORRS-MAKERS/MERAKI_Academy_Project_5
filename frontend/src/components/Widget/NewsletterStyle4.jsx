import React from 'react';
import parse from 'html-react-parser';
import NewsletterForm from '../NewsletterForm';

export default function NewsletterStyle4({ title, subTitle }) {
  return (
    <div className="cs_newsletter cs_style_4">
      <div className="cs_newsletter_left">
        <h2 className="cs_newsletter_title cs_white_color">{parse(title)}</h2>
        <p className="cs_newsletter_subtitle mb-0">{parse(subTitle)}</p>
      </div>
      <div className="cs_newsletter_right">
        <NewsletterForm
          label="Your Email"
          btnText="Submit"
          btnArrowUrl="/images/icons/right_arrow_blue.svg"
        />
      </div>
    </div>
  );
}
