import React, {useState} from 'react';

const Event = ({event}) => {
 return(
   <div>
     <h1>Event Component</h1>
     <p>{event.description}</p>
   </div>
 )
};

export default Event;