import React from 'react';
import IconBoxStyle14 from '../../IconBox/IconBoxStyle14'
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';


export default function UserProfileSection ({ sectionTitle}) {
    return (
      <div className="container">
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
        <div>
        <IconBoxStyle14 
           title="Medical Reports"
        />
        </div>  
      </div>
    );
  }
  