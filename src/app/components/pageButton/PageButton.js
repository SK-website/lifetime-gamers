/* eslint-disable react/require-default-props */
import React from 'react';
import './pageButton.css';
import PropTypes from 'prop-types';

const PageButton = ({ buttonText, classname }) => (
  <button type="button" className={`${classname} page-control-btn`}>
    {buttonText}
  </button>
);

PageButton.propTypes = {
  buttonText: PropTypes.string,
  classname: PropTypes.string,
};
export default PageButton;
