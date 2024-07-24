import React from 'react';
import FunFact from '../../FunFact';

export default function FunFactSection({ bgUrl, data }) {
  return (
    <div className="container">
      <div
        className="cs_funfact_1_wrap cs_radius_30 cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {data?.map((item, index) => (
          <FunFact key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
