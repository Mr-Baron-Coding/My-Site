import React from 'react';

import './CompStyle.css';

import { useDispatch, useSelector } from 'react-redux';
import { checkGame } from '../features/tableSlice.js';
import { startWatch } from '../features/stopwatchSlice.js';

export default function SubmitButton() {
    const dispatch = useDispatch();
    const userMess = useSelector((state) => state.messages.valueBottom);
    const isGameFinished = useSelector((state) => state.table.isGameEnd);

    const checkUserInput = () => {
        dispatch(checkGame(true));
        // dispatch(startWatch(false));

    };

  return (
    !userMess && isGameFinished ? <div className='submitButton' onClick={ () => checkUserInput() }>Submit</div> : null
  )
};