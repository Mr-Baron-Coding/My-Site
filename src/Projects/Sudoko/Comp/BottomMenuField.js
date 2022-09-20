import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispalyBottomMessage } from '../features/messageSlice.js';
import { startWatch, resetWatch } from '../features/stopwatchSlice.js';
import { gameDifficulty, checkGame } from '../features/tableSlice.js';

export default function BottomMenuField() {
    const dispatch = useDispatch();
    const userMess = useSelector((state) => state.messages.valueBottom);
    // const gameDiff = useSelector((state) => state.table.gameDiff);    
    const tempDiff = useSelector((state) => state.table.temp_Diff);


    const startNewGame = () => {
        dispatch(dispalyBottomMessage(false));
        dispatch(resetWatch());
        dispatch(startWatch(true));
        dispatch(gameDifficulty(tempDiff - 1));             // start the game - add difficulty setting

    };

    const resumeGame = () => {
        dispatch(dispalyBottomMessage(false));
        dispatch(startWatch(true));
    };

    const checkUserInput = () => {
        dispatch(checkGame(true));

    };

    const userMessage = () => {
        return (
            <div>
                <div>Start a new game?</div>
                <div>
                    <button onClick={ () => startNewGame() }>Yes</button>               
                    <button onClick={ () => resumeGame() }>No</button>
                </div>
            </div>
        )
    };

    // solve game not refreshing on same difficulty button press 
    // messages and buttons for selecting and stoping stopwatch
  return (
    <div style={{ margin: 'auto', width: '50%' }}>
        { !userMess ? <div style={{ margin: 'auto', alignContent:'center', width: '50%', border: '1px solid red' }} onClick={ () => checkUserInput() }>Submit</div> : userMessage()}
        {/* { userMess ? userMessage() : null} */}
    </div>
  )
}
