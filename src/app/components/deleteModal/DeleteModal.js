/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { playlistState } from '../../store/store';
import './deleteModal.css';

const DeleteModal = () => {
  const dispatch = useDispatch();
  // const { showNewGameInput } = useSelector(playlistState);

  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="btn-close" aria-label="Close" />
        <p className="modal-text">Are you sure you want to delete this item?</p>
        <div className="row-flex modal-footer">
          <button type="button" className="btn btn-delete">
            Yes, delete
          </button>
          <button type="button" className="btn btn-cansel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// DeleteModal.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
// };
export default DeleteModal;
