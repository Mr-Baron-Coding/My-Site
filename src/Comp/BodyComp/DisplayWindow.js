import React from 'react';

import Contact from '../NavComp/Contact';
import Skills from '../NavComp/Skills';
import About from '../NavComp/About';
import MyWork from '../NavComp/MyWork';

// import './BodyStyle.css';

export default function DisplayWindow(props) {
    const displayList = [
        { name: 'A little about myself', id: 1, screen: <About /> },
        { name: 'My skills', id: 2, screen: <Skills /> },
        { name: 'Get in touch', id: 3, screen: <Contact /> },
        { name: 'My Work', id: 4, screen: <MyWork /> },
        { name: 'Eithan', id: 5}
    ]

    const style = { height: '100%' }
  return (
    <div className='displayWindowStyle'>
        {displayList.map((e,i) => {
            return (
                props.windowNumber === e.id 
                    ? <div style={ style } key={ e.id }>{ e.screen }</div>
                    : null
                    
            )
        })}
    </div>
  )
}
