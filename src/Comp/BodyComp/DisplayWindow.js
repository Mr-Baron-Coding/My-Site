import React from 'react';

import Contact from '../NavComp/Contact';
import Skills from '../NavComp/Skills';
import About from '../NavComp/About';
import MyWork from '../NavComp/MyWork';

import '../Styles/DisplayWindowStyle.css';

export default function DisplayWindow(props) {
    const displayList = [
        { name: 'A little about myself', id: 1, screen: <About /> },
        // { name: 'My skills', id: 2, screen: <Skills /> },
        { name: 'Get in touch', id: 2, screen: <Contact /> },
        { name: 'My Work', id: 3, screen: <MyWork /> },
        { name: 'Eithan', id: 4}
    ];

  return (
    <div className='displayContantContainer'>
        {displayList.map((e) => {
            return (
                props.windowNumber === e.id 
                    ? <div key={ e.id }>{ e.screen }</div>
                    : null
                    
            )
        })}
    </div>
  )
}
