import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';


export default function UserProfileSection ({ sectionTitle}) {
    return (
      <div className="container">
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
      </div>
    );
  }
  