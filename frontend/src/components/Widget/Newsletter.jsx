import React from 'react';
import NewsletterForm from '../NewsletterForm';

export default function Newsletter({ title, subTitle }) {
  return (
    <div className="cs_newsletter cs_style_1">
      <h2 className="cs_newsletter_title">{title}</h2>
      <div className="cs_newsletter_subTitle">{subTitle}</div>
      <NewsletterForm
        btnText="Submit"
        btnArrowUrl="/images/icons/arrow_white.svg"
      />
    </div>
  );
}
