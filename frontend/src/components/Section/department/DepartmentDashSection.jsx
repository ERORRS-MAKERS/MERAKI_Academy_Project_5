import React from 'react'
import DepartDashbord from '../../Departmentdash/DepartDashbord'
import IconBoxStyle14 from '../../IconBox/IconBoxStyle14';
const DepartmentDashSection = ({data}) => {
console.log(data);
  return (
    <div className="container cs_mt_minus_110" style={{marginTop:"200px"}}>
    <div className="row justify-content-end">
      {data?.map((item, i) => (
        <div className="col-xl-4 col-md-6" key={i}>
                <IconBoxStyle14 {...item} />
                
        </div>
      ))}
    </div>
  </div>
  )
}

export default DepartmentDashSection