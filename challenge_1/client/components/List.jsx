import React, {useState} from 'react';
import Event from './Event.jsx';
import ReactPaginate from 'react-paginate';

const List = ({events, total, page}) => {
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
           marginPagesDisplayed={3}
           pageRangeDisplayed={1}
           pageCount={Math.floor(total/10)}
           currentPage={page}
           containerClassName={'pagination'}
           activeClassName={'active'}
        />
      </div>
    );
  }
  return null;
};

export default List;