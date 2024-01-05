import React, { useState, useEffect, useRef } from 'react';
import { MdCloseFullscreen } from "react-icons/md";

import {Plus} from "lucide-react";
import SubtaskList from '../components/SubtaskList';

function TaskPage(props) {

  return (props.trigger)?(
    <div className='verflow-y-scroll'>
      <div className='popup'>
      <div className='popup-inner'>
          <MdCloseFullscreen className = 'close-btn' onClick={() => props.setTrigger(false)}/>
          {props.children}
          <hr className='my-3' />
          <SubtaskList/>
      </div>
    </div>
    </div>
  ): "";

}

export default TaskPage