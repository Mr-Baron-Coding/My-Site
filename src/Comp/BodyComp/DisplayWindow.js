import React from 'react';
import { useSelector } from 'react-redux';
import { openMenuScreen } from '../Features/mobileSlice';

import Contact from '../NavComp/Contact';
import Skills from '../NavComp/Skills';
import About from '../NavComp/About';
import MyWork from '../NavComp/MyWork';

import '../Styles/DisplayWindowStyle.css';

export default function DisplayWindow(props) {
    const screenNumber = useSelector((state) => state.mobile.screenNumber);

    const displayList = [
        { name: 'A little about myself', id: 1, screen: <About /> },
        // { name: 'My skills', id: 2, screen: <Skills /> },
        { name: 'Get in touch', id: 2, screen: <Contact /> },
        { name: 'My Work', id: 3, screen: <MyWork /> },
        { name: 'Eithan', id: 4}
    ];

  return (
    <>
        {displayList.map((e) => {
            return (
                screenNumber === e.id 
                    ? <div className='displayContantContainer' key={ e.id }>{ e.screen }</div>
                    : null
                    
            )
        })}
    </>
  )
}
