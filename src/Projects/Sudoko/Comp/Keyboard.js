import React from 'react';
import './CompStyle.css';

export default function Keyboard() {
    let keyBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='keyboardContainer'>
        { keyBoard.map((e) => {
            return (
                <div className={`keys key_${e}`} key={ e }>{ e }</div>
            )
        })}
    </div>
  )
}
