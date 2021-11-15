import React from 'react';
import './pageButton.css';
import PropTypes from 'prop-types';

const PageButton = ({ buttonText }) => (
  <button type="button" className="page-control-btn">
    {buttonText}
  </button>
);

PageButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  buttonText: PropTypes.string,
};
export default PageButton;
