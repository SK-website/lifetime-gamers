import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PAGE_SIZE from '../../consts';
import {
  decrementPageAction,
  incrementPageAction,
  sendToFirstPageAction,
  sendToLastPageAction,
} from '../../store/reducers/pagination-reducer';
import { paginationState, playlistState } from '../../store/store';
import PageButton from '../pageButton/PageButton';
import './page-controls.css';

function PageControls() {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector(paginationState);
  const { games } = useSelector(playlistState);
  const pagesAmount = (playlist) =>
    playlist.length % PAGE_SIZE > 0 ? Math.floor(playlist.length / PAGE_SIZE) + 1 : playlist.length / PAGE_SIZE;

  const hendelFirstPageClick = () => dispatch(sendToFirstPageAction());
  const hendelPrevPageClick = () => pageNumber > 0 && dispatch(decrementPageAction());

  const hendelNextPageClick = (e) => {
    // e.preventDefault();
    const numberOfLastPage = pagesAmount(games) - 1;
    pageNumber < numberOfLastPage && dispatch(incrementPageAction());
  };
  const hendelLastPageClick = () => dispatch(sendToLastPageAction(pagesAmount(games)));
  return (
    <div className="row-flex page-controls-container">
      <div className="current-page-control">{`${pageNumber + 1} of ${pagesAmount(games)} pages`}</div>
      <div className="row-flex">
        <PageButton classname="arrow-btn" buttonText="<<" cb={hendelFirstPageClick} />
        <PageButton classname="text" buttonText="<< Prev page" cb={hendelPrevPageClick} />
        <PageButton classname="text" buttonText="Next page >>" cb={hendelNextPageClick} />
        <PageButton classname="arrow-btn" buttonText=">>" cb={hendelLastPageClick} />
      </div>
    </div>
  );
}

export default PageControls;
