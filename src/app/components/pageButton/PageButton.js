/* eslint-disable react/require-default-props */
import React from 'react';
import './pageButton.css';
import PropTypes from 'prop-types';

const PageButton = ({ buttonText, classname, cb }) => (
  <button type="button" className={`${classname} page-control-btn`} onClick={cb}>
    {buttonText}
  </button>
);

PageButton.propTypes = {
  buttonText: PropTypes.string,
  classname: PropTypes.string,
  cb: PropTypes.func,
};
export default PageButton;
