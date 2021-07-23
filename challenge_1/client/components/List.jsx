import React, {useState} from 'react';
import Event from './Event.jsx';
import ReactPaginate from 'react-paginate';

const List = ({events, total, updatePage, currentPage}) => {
  if (Array.isArray(events)) {
    return(
      <div>
        <ul>
          {
            events.map((event, index) =>
          <li key={index}>
           <Event event={event}/>
          </li>
            )
          }
        </ul>
        <ReactPaginate
           previousLabel={'previous'}
           nextLabel={'next'}
           breakLabel={'...'}
           marginPagesDisplayed={5}
           pageRangeDisplayed={3}
           pageCount={Math.floor(total/10)}
           containerClassName={'pagination'}
           activeClassName={'active'}
           onPageChange={(data) => {
             const page = data.selected + 1;
             updatePage(page);
           }}
           forcePage={currentPage - 1}
        />
      </div>
    );
  }
  return null;
};

export default List;