import React from 'react';
import PageButton from '../pageButton/PageButton';
import './page-controls.css';

function PageControls() {
  return (
    <div className="row-flex page-controls-container">
      <div className="current-page-control">1 of 23 pages</div>
      <div className="row-flex">
        <PageButton classname="arrow-btn" buttonText="<<" />
        <PageButton classname="text" buttonText="<< Prev page" />
        <PageButton classname="text" buttonText="Next page >>" />
        <PageButton classname="arrow-btn" buttonText=">>" />
      </div>
    </div>
  );
}

export default PageControls;
