import React from 'react';
import NewsletterForm from '../NewsletterForm';

export default function NewsletterStyle5({ title }) {
  return (
    <div className="cs_newsletter cs_style_5">
      <h2 className="cs_newsletter_title">{title}</h2>
      <NewsletterForm
        btnText="Subscribe Newsletter"
        btnArrowUrl="/images/icons/arrow_white.svg"
      />
    </div>
  );
}
