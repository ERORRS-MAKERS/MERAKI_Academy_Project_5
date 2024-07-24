import React from 'react';
import IconBoxStyle7 from '../../IconBox/IconBoxStyle7';

export default function DepartmentSectionStyle3({ data }) {
  return (
    <div className="container cs_mt_minus_110">
      <div className="row justify-content-end">
        {data?.map((item, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <IconBoxStyle7 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
