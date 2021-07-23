import React, {useState} from 'react';
import Event from './Event.jsx'

const List = ({events}) => {
  if (events) {
    return(
      <div>
        <h1>List Component</h1>
        <ul>
          {
            events.map((event, index) =>
          <li key={index}>
           <Event event={event}/>
          </li>
            )
          }
        </ul>
      </div>
    );
  }
  return null;
};

export default List;