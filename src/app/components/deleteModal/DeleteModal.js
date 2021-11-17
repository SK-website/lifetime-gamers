import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playlistState } from '../../store/store';
import './deleteModal.css';
import { clearGameToDeleteIdAction, deleteGameAction } from '../../store/reducers/playlist-reducer';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { gameToDeleteId, showDeleteModal } = useSelector(playlistState);
  const handelCancelButtonClick = () => dispatch(clearGameToDeleteIdAction());
  const handelDeletelButtonClick = () => dispatch(deleteGameAction(...gameToDeleteId));

  return (
    <div className="fixed-overlay" style={showDeleteModal ? { top: '0' } : null}>
      <div className="modal">
        <div className="modal-content">
          <button type="button" className="btn-close" aria-label="Close" />
          <p className="modal-text">Are you sure you want to delete this item?</p>
          <div className="row-flex modal-footer">
            <button type="button" className="btn btn-delete" onClick={handelDeletelButtonClick}>
              Yes, delete
            </button>
            <button type="button" className="btn btn-cansel" onClick={handelCancelButtonClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
