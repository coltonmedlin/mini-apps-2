import React, {useState} from 'react';

const Event = ({event}) => {
 return(
   <div>
     <h3>{event.date}</h3>
     <p>{event.description}</p>
   </div>
 )
};

export default Event;