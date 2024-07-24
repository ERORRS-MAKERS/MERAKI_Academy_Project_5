import React from 'react';
import { Link } from 'react-router-dom';

export default function PostStyle2({ title, thumbUrl, date, href }) {
  return (
    <div className="cs_post cs_style_2 cs_radius_20 overflow-hidden">
      <Link to={href} className="cs_post_thumb cs_view_mouse">
        <img src={thumbUrl} alt="Post" />
      </Link>
      <div className="cs_post_info">
        <div>
          <h2 className="cs_post_title cs_semibold cs_fs_24">
            <Link to={href}>{title}</Link>
          </h2>
          <div className="cs_posted_by">{date}</div>
        </div>
      </div>
    </div>
  );
}
