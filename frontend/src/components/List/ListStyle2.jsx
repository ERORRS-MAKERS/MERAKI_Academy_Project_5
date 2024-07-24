import React from 'react';

export default function ListStyle2({ heading, iconUrl, data }) {
  return (
    <div className="cs_list cs_style_2">
      <h2 className="cs_list_title cs_medium cs_fs_24">
        <img src={iconUrl} alt="Icon" />
        {heading}
      </h2>
      <ul className="cs_mp0 cs_heading_color">
        {data?.map((item, index) => (
          <li key={index}>
            <img src={item.iconUrl} alt="Icon" />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
