import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startWatch, resetWatch } from '../features/stopwatchSlice.js';
import { dispalyBottomMessage, displayModeButtons } from '../features/messageSlice.js';
import { checkGame, showTable, gameDifficulty, tempDiff, autoFillInput, superEasy, gameWon } from '../features/tableSlice.js';

import Stopwatch from './Stopwatch';
import './CompStyle.css';

export default function TopMenuField() {
    const dispatch = useDispatch();
    // const userMess = useSelector((state) => state.messages.valueBottom);            // display message ?
    const diffButtons = useSelector((state) => state.messages.diffButtons);         // display buttons
    const isTimeRunning = useSelector((state) => state.stopwatch.running);          // is stopwatch running
    const isGameChecked = useSelector((state) => state.table.checkGame);            // are we checking the game after submit?
    const isEasyMode = useSelector((state) => state.table.easyMode);

    const topMenuButtons = [
        { text: 'Start Game', id : 1, click: 'openDiffMenu()' },
        { text: 'Auto fill', id : 2, click: 'openDiffMenu()' },
        { text: 'SuperEasy', id : 3, click: 'makeItSuperEasy()' }
    ];

    const modeButtons = [
        { text: 'Easy', id: 1, number: Math.floor(Math.random() * (36 - 32 + 1) ) + 32 },
        { text: 'Medium', id: 2, number: Math.floor(Math.random() * (26 - 24 + 1) ) + 24 },
        { text: 'Hard', id: 3, number: Math.floor(Math.random() * (16 - 14 + 1) ) + 14 }
    ];

    let easyColor = isEasyMode ? 'pink' : 'black';

    const openDiffMenu = () => {
        dispatch(displayModeButtons(true));

    };

    const beginTimer = (diff) => {
        if ( isTimeRunning === true ) {
            dispatch(startWatch(false));
            dispatch(dispalyBottomMessage(true));
            dispatch(displayModeButtons(false));
            dispatch(tempDiff(diff-1));             // start the game - add difficulty setting
        }
        else {
            if ( isGameChecked ) {
                dispatch(checkGame(false));
                dispatch(resetWatch());

            }

            dispatch(gameDifficulty(diff));             // start the game - add difficulty setting
            dispatch(startWatch(true));
            dispatch(showTable(true));
            dispatch(dispalyBottomMessage(false));
            dispatch(displayModeButtons(false));
            dispatch(gameWon(false));
        }
        
    };

    const makeItSuperEasy = () => {
        dispatch(superEasy(!isEasyMode));
        console.log('LOL');
    };

    // const disableButtons = () => {
    //     dispatch(disableModeButtons(true));
    //     console.log(isDisabled);
    //     setModeButtons([
    //         ...modeButtons,
    //         modeButtons.map((button) => button.disabled = !button.disabled )
    //     ])
    // };

  return (
    <div className='buttonContainer'>
        <div className='topRowButtonsStyle'>
            { topMenuButtons.map((button,i) => {
                return (
                    <div onClick={ '()=>' + button.click }>{ button.text }</div>
                )
            })}
            {/* <div onClick={ () => openMenu() }>New Game</div> */}
            {/* <div onClick={ () => dispatch(autoFillInput(true))}>Auto fill</div>  auto fill for solving  */}
            {/* <div style={{ color: easyColor }} onClick={ () => makeItSuperEasy() }>SuperEasy</div>  remove */}
            <Stopwatch />
        </div>
        { diffButtons 
            ?   <div className='diffButtonsContainer'>
                        {modeButtons.map((button, i) => {
                            return (
                                    <button 
                                        key={ `${button.text}`}
                                        onClick={ () => beginTimer(button.number) } 
                                        className='diffButtons'
                                    >
                                        { button.text }
                                    </button>
                            )
                        })}
                </div>
            : null 
        }
    </div>
  )
}
