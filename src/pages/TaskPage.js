import React from 'react';
import { MdCloseFullscreen } from "react-icons/md";

function TaskPage(props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
          <MdCloseFullscreen className = 'close-btn' onClick={() => props.setTrigger(false)}/>
          {props.children}
      </div>
    </div>
  ): "";

}

export default TaskPage