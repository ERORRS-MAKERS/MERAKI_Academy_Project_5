import React from 'react';
import parse from 'html-react-parser';
import Spacing from '../Spacing';

export default function SectionHeading({
  title = '',
  titleUp = '',
  titleDown = '',
  subTitle = '',
  center,
}) {
  return (
    <div
      className={`cs_section_heading cs_style_1 ${center ? 'text-center' : ''}`}
    >
      {titleUp && (
        <>
          <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
            {parse(titleUp)}
          </h3>
          <Spacing md="5" />
        </>
      )}

      {title && (
        <h2 className="cs_section_title cs_fs_72 m-0">{parse(title)}</h2>
      )}
      {titleDown && (
        <>
          <Spacing md="5" />
          <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
            {parse(titleDown)}
          </h3>
        </>
      )}
      {subTitle && (
        <>
          <Spacing md="25" />
          <p className="m-0">{parse(subTitle)}</p>
        </>
      )}
    </div>
  );
}
