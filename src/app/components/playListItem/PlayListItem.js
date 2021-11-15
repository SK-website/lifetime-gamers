/* eslint-disable react/require-default-props */
import React from 'react';
import './playListItem.css';
import PropTypes from 'prop-types';

const PlayListItem = ({ title, completed }) => (
  <>
    <div className="row-flex list-item">
      <div className="row-flex item-name">
        <div className="box" />
        <div className="game-name">{title}</div>
      </div>
      <div className="row-flex item-status">
        <button type="button" className="item-btn">
          {completed ? `Complete` : `To play`}
        </button>
        <div>delete</div>
      </div>
    </div>
  </>
);

PlayListItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};

export default PlayListItem;
