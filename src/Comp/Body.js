import React, { useState } from 'react';
import Header from './Header';
import './BodyStyle.css';
import DisplayWindow from './DisplayWindow';
import WelcomeField from './WelcomeField';
import Menus from './Menus';

export default function Body() {
  const [windowNumber, setWindowNumber] = useState(0);

  const addSceenLoad = (e) => {
    console.log('Screen ' + e);
    setWindowNumber(e);
  };

  return (
    <div>
        <Header />      
        <Menus add={ (x) => addSceenLoad(x) }/>
        <WelcomeField />
        <DisplayWindow windowNumber={ windowNumber } />
    </div>
  )
}
