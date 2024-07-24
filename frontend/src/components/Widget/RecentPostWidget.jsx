import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentPostWidget({ title, data }) {
  return (
    <>
      <h2 className="cs_sidebar_widget_title">{title}</h2>
      <ul className="cs_popular_posts">
        {data?.map((item, index) => (
          <li key={index}>
            <div className="cs_popular_post">
              <h2 className="cs_popular_post_title">
                <Link to={item.href}>{item.title}</Link>
              </h2>
              <ul className="cs_popular_post_meta">
                <li className="cs_posted_author">
                  <Icon icon="fa6-solid:circle-user" />
                  <Link to="/">{item.author}</Link>
                </li>
                <li className="cs_posted_by">
                  <Icon icon="fa6-solid:clock" />
                  {item.date}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
