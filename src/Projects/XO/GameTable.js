import React, { useState, useEffect } from 'react';
import './StyleXO.css';

export default function GameTable() {
    const [scores, setScores] = useState({ X: 0, O: 0 });    
    const [gameTable, setGameTable] = useState([            // game table base
        [ '','','' ],
        [ '','','' ],
        [ '','','' ]
    ]);
    const [isX, setIsX] = useState(true);                   // who's turn is it? 
    const [isMessage, setIsMessage] = useState(false);      // display winner or new game button

   

    // check for win/ end on every input
    useEffect(() => {
      winningCombo();
    
    }, [isX]);

    // reset game
    const clearGame = (val) => {
        console.log(val);
        setIsMessage(false);
        setGameTable([[ '','','' ],[ '','','' ],[ '','','' ]]);
        setIsX(true);

    };
    
    // print game table
    const rowOrBox = () => {
        return (
            <>
                { gameTable.map((row,rowI) => {
                    return (
                        <div className='columns' key={`row_${rowI}`}>
                            { row.map((cell, cellI) => {
                                return (
                                    <div key={ `cellI_${rowI}${cellI}` } className={ `col_${rowI+1} row_${cellI+1} cellContainer` }>
                                        <div 
                                            className='cells'
                                            // style={{ border: '1px solid red', width: '100%', height: '100%' }} 
                                            onClick={ () => inputThis(rowI, cellI) }
                                        >
                                            { cell === '' ? '' : cell }
                                            {/* { `col_${rowI+1} row_${cellI+1}` } */}
                                        </div>
                                        
                                        {/* <input 
                                            className='xoInputStyle'
                                            key={ `input_${rowI}${cellI}` } 
                                            value={ cell === '' ? '' : cell }
                                            // style ={{border: '1px solid black'}} 
                                            onClick={ () => inputThis(rowI, cellI) }
                                            readOnly
                                        /> */}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
        )
                
    };

    // game input on users press
    const inputThis = (rowI, cellI) => {
        let arr = gameTable;
        if ( !isMessage ) {
            if ( arr[rowI][cellI] === '') {
                if ( isX ) { 
                    arr[rowI][cellI] = 'X';
                    setIsX(!isX);
                } else {
                    arr[rowI][cellI] = 'O';
                    setIsX(!isX);
                }
            }
        }
        setGameTable(arr);
        let count=0;
        arr.map((row) => row.map((cell) => {
            if ( cell !== '' ){
                return  count++
            }
        }))
        if( count === 9 && !isMessage ) { return console.log('Draw');}
    };

     // check for posible wining positions
     const winningCombo = () => {
        switch (true) {
            // row win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[0][1] && gameTable[0][1] === gameTable[0][2]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][0]), 2000);
                break;
            case (gameTable[1][0] !== '' && gameTable[1][0] === gameTable[1][1] && gameTable[1][1] === gameTable[1][2]):
                if ( gameTable[1][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[1][0]), 2000);
                break;
            case (gameTable[2][0] !== '' && gameTable[2][0] === gameTable[2][1] && gameTable[2][0] === gameTable[2][2]):
                if ( gameTable[2][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;

            // col win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[1][0] && gameTable[0][0] === gameTable[2][0]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                } 
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][0]), 2000);
                break;
            case (gameTable[0][1] !== '' && gameTable[0][1] === gameTable[1][1] && gameTable[0][1] === gameTable[2][1]):
                if ( gameTable[0][1] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][1]), 2000);
                break;
            case (gameTable[0][2] !== '' && gameTable[0][2] === gameTable[1][2] && gameTable[0][2] === gameTable[2][2]):
                if ( gameTable[0][2] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            
                // alahsonim win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[1][1] && gameTable[0][0] === gameTable[2][2]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            case (gameTable[2][0] !== '' && gameTable[2][0] === gameTable[1][1] && gameTable[2][0] === gameTable[0][2]):
                if ( gameTable[2][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            default:
                break;
        }

    };

    const displayButton = () => {
        return (
            <div 
                className='newGameButton'
                onClick={ () => clearGame() }
            >
                New Game
            </div>
        )
    };
    const displayMess = () => {
            return !isX ? 'X Won!' : 'O Won!';
        
    };
    
  return (
    <div className='tikTackToe'>
        <div className='scoreStyle'>
            <div>Score: </div>
            <div>X: { scores.X }</div>
            <div>O: { scores.O }</div>    
        </div>
        <div className='bottomDiv'>
            { isMessage ? displayMess() : displayButton() }
            <div onClick={ () => setScores({ X: 0, O: 0 })}>Reset Score</div>
        </div>
        <div className='gameFaceContainer'>{ rowOrBox() }</div>
    </div>
  )
}
