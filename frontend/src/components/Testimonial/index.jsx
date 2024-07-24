import React, { useState } from 'react';
import Rating from '../Rating';

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_1.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">PAULO HUBERT</h3>
                <p className="cs_heading_color mb-0">New York, USA</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_2.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">LAURENCE VENDETTA</h3>
                <p className="cs_heading_color mb-0">California, USA</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <img src="/images/home_1/avatar_3.png" alt="Avatar" />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">CASSANDRA RAUL</h3>
                <p className="cs_heading_color mb-0">Florida</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              I recently had to bring my child to ProHealth for a minor injury,
              and I was so impressed with the care he received. The pediatrician
              was great with him and made him feel at ease, and the entire staff
              was kind and attentive.
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              The pediatrician was great with him and made him feel at ease, and
              the entire staff was kind and attentive. I recently had to bring
              my child to ProHealth for a minor injury, and I was so impressed
              with the care he received.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <img src="/images/icons/quote.svg" alt="Icon" />
            <p>
              I was so impressed with the care he received. The pediatrician was
              great with him and made him feel at ease, and the entire staff was
              kind and attentive I recently had to bring my child to ProHealth
              for a minor injury, and .
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
