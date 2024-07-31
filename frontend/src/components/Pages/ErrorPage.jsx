import React from 'react';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Button from '../Button';
import { pageTitle } from '../../helpers/PageTitle';

export default function ErrorPage({ message, customStyle }) {
  pageTitle('Error');
  return (
    <>
      <div
        className="cs_error cs_center text-center cs_gray_bg_1"
        style={customStyle || null}
      >
        <div className="container">
          <SectionHeading
            title="This page could <br> not be found."
            titleUp={message || '404 ERROR'}
            variantColor="cs_white_color"
          />
          <Spacing lg="30" md="30" />
          <Button btnText="Back To Home" btnUrl="/" />
        </div>
      </div>
    </>
  );
}
