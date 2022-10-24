import React from 'react';

import './CompStyle.css';

import { useDispatch } from 'react-redux';
import { checkGame } from '../features/tableSlice.js';


export default function SubmitButton() {
    const dispatch = useDispatch();

    const checkUserInput = () => {
        dispatch(checkGame(true));

    };

  return (
    <div className='submitButton' onClick={ () => checkUserInput() }>Submit</div>
  )
};