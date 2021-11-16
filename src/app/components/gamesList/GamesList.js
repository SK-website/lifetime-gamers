import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../../api/api';
import { setPlaylistAction } from '../../store/reducers/playlist-reducer';
import NewGame from '../addNewGame/AddNewGame';
import PageControls from '../page-controls/PageControls';
import PlayListItem from '../playListItem/PlayListItem';
import './gamesList.css';

const GamesList = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.playlist);

  useEffect(() => {
    const data = getData();
    data.then((res) => {
      // toJS(res);
      dispatch(setPlaylistAction(res));
    });
  }, []);

  return (
    <div className="container">
      <div className="playlist-container">
        <div className="title">Community playlist</div>
        <div className="playlist-items-container">
          <div className="playlist-items-wrapper">
            <div className="row-flex playlist-header">
              <p>Game title</p>
              <p>Status</p>
            </div>
            <NewGame />
            {games
              ? games.map((el) => <PlayListItem key={el.id} id={el.id} title={el.title} completed={el.completed} />)
              : null}
          </div>
        </div>
        <PageControls />
      </div>
    </div>
  );
};
export default GamesList;
