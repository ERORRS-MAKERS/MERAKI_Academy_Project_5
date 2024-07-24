import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        <Link to="/">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link to="/">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link to="/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link to="/">
          <Icon icon="fa-brands:twitter" />
        </Link>
        <Link to="/">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
