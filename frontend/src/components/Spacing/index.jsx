import React from 'react';

export default function Spacing({ xl = '_', lg = '_', md = '_' }) {
  return (
    <div
      className={`cs_height_xl_${xl} cs_height_lg_${lg} cs_height_${md}`}
    ></div>
  );
}
