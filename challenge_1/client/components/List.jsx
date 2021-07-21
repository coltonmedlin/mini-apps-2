import React, {useState} from 'react';
import Event from './Event.jsx'

const List = () => {
 return(
   <div>
     <h1>List Component</h1>
     <ul>
       <li>
        <Event number={1}/>
       </li>
       <li>
        <Event number={2}/>
       </li>
       <li>
        <Event number={3}/>
       </li>
     </ul>
   </div>
 )
};

export default List;