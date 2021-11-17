import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewGameAction, showNewGameInputAction } from '../../store/reducers/playlist-reducer';
import { playlistState } from '../../store/store';
import './addNewGame.css';

const NewGame = () => {
  const dispatch = useDispatch();
  const { showNewGameInput } = useSelector(playlistState);
  const [newItemName, setNewItemName] = useState('');

  const handelAddNewFieldClick = (e) => {
    e.stopPropagation();
    dispatch(showNewGameInputAction(true));
  };

  const handelNewItemChange = (e) => {
    setNewItemName(e.target.value);
  };

  const addNewItem = () => {
    if (showNewGameInput && newItemName.length > 2) {
      dispatch(showNewGameInputAction(false));
      dispatch(
        addNewGameAction({
          id: Math.round(Math.random() * 10000),
          title: newItemName,
          completed: false,
        })
      );
      setNewItemName('');
    } else {
      dispatch(showNewGameInputAction(false));
      setNewItemName('');
    }
  };

  const handelAddGameBtnClick = (e) => {
    e.stopPropagation();
    addNewItem();
  };

  const handelAddGameBtnEnter = (e) => {
    e.stopPropagation();
    e.code === 'Enter' && addNewItem();
  };

  return (
    <div
      className="row-flex list-item new-item"
      role="button"
      tabIndex="0"
      onKeyPress={handelAddNewFieldClick}
      onClick={handelAddNewFieldClick}
    >
      <div className="row-flex">
        <button type="button" aria-label="addGame" className="plus" onClick={handelAddGameBtnClick} />
        {showNewGameInput ? (
          <input
            type="text"
            className="new-item-input"
            maxLength="70"
            placeholder="Type game title (3 characters at least)"
            value={newItemName}
            onChange={handelNewItemChange}
            onKeyPress={handelAddGameBtnEnter}
          />
        ) : (
          <span className="info">Click here to add a new game </span>
        )}
      </div>
    </div>
  );
};
export default NewGame;
