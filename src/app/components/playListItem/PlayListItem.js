/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import './playListItem.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { playlistState } from '../../store/store';
import {
  changeStatusAction,
  deleteGameAction,
  setEditedTitleAction,
  showEditTitleAction,
} from '../../store/reducers/playlist-reducer';

const PlayListItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();
  const { isDisabled } = useSelector(playlistState);
  const { showEditTitleInput } = useSelector(playlistState);
  const [editedItemName, setEditedItemName] = useState(title);

  const handelChangeStatusBtnClick = () => {
    dispatch(changeStatusAction(id));
  };

  const handelDeleteGameBtnClick = () => {
    dispatch(deleteGameAction(id));
  };
  const handelTitleClick = () => {
    if (!isDisabled) dispatch(showEditTitleAction(id));
  };
  const handelEditInputSubmit = (e) => {
    if (e.code === 'Enter') {
      dispatch(
        setEditedTitleAction({
          ID: id,
          newTitle: editedItemName,
        })
      );
      setEditedItemName('');
    }
  };

  const handelEditInputChange = (e) => {
    setEditedItemName(e.target.value);
  };

  return (
    <>
      <div className="row-flex list-item">
        <div className="row-flex item-name">
          <div className="box" />
          {showEditTitleInput[0] === id ? (
            <input
              type="text"
              className="new-item-input"
              maxLength="70"
              placeholder="Type game title"
              value={editedItemName}
              onKeyPress={handelEditInputSubmit}
              onChange={handelEditInputChange}
            />
          ) : (
            <div
              className="game-name"
              role="button"
              tabIndex="0"
              onKeyPress={handelTitleClick}
              onClick={handelTitleClick}
            >
              {title}
            </div>
          )}
        </div>
        <div className="row-flex item-status">
          <button
            type="button"
            className={completed ? `item-btn complete-btn` : `item-btn to-play-btn`}
            onClick={handelChangeStatusBtnClick}
          >
            {completed ? `Complete` : `To play`}
          </button>
          <button type="button" aria-label="delete" className="delete-btn" onClick={handelDeleteGameBtnClick} />
        </div>
      </div>
    </>
  );
};

PlayListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default PlayListItem;
