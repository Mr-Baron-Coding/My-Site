import React, { useState } from 'react';

import Header from './BodyComp/Header.js';
import NavBar from './BodyComp/NavBar.js';
import WelcomeField from './BodyComp/WelcomeField.js';
import DisplayWindow from './BodyComp/DisplayWindow.js';

import { useSelector, useDispatch } from 'react-redux';
import { openClose, openMenuScreen } from './Features/mobileSlice.js'
import './Styles/MainStyle.css';

import { CgMenu, CgCloseR } from "react-icons/cg";  // icons
import { AiOutlineHome } from "react-icons/ai";
import profPic from '../images/ProfilePic.jpg';     // profile pic


export default function Body() {
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile.isMobile);
  const screenNumber = useSelector((state) => state.mobile.screenNumber);
  const openClosed = useSelector((state) => state.mobile.menuOpend);

  const [windowNumber, setWindowNumber] = useState(0);

  const addScreenLoad = (e) => {
    setWindowNumber(e);
  };

  const closeMenu = () => {
    if ( mobile && openClosed === true ) {
      dispatch(openClose(false));
    }
  };

  const iconDisplay = () => {
    return (
      !openClosed ? <div className='navAnimationContainer'><CgMenu size={ 26 } /></div> : <CgCloseR size={ 26 } color='#dbe1ff' />
    )
  };

  return (

      <div className='bodyStyle'>
              {/* { openClosed && mobile ? <NavBar /> : null } */}
              {/* <div className='bodyStyle' onClick={ () => closeMenu() }> */}
          <div className='headerStyle'>  {/* header */}
            {/* { mobile ? <Header onClick={ () => dispatch(openMenuScreen(0)) }/> : <Header /> }     */}
            <Header onClick={ () => dispatch(openMenuScreen(0)) }/>    
          </div>
          <div className='navDivStyle'> {/* navigation */}
            {/* { !mobile ? <NavBar add={ (x) => addScreenLoad(x) } /> : <div onClick={ () => dispatch(openClose(!openClosed)) }>{ iconDisplay() }</div> } */}
            { !mobile ? <NavBar add={ (x) => addScreenLoad(x) } /> : <NavBar /> }
{/* back home button */}
            {/* { mobile && screenNumber !== 0 ? <AiOutlineHome size={ 26 } onClick={ () => dispatch(openMenuScreen(0)) } /> : null } */}
          </div>

{/* mobile switch bottom part view */}
            <div className='mobileScreenSwitch'>
              { screenNumber === 0 
                ? <div className='mobileSwitchTop'>
                      <div className='hiDivStyle'>
                        <WelcomeField />
                      </div>
                      <div className='picDivDivStyle'>
                        <img src={profPic} alt='profilePic' className='profilePicStyle' />
                      </div>
                  </div>
                : <div className='mobileSwitchBottom'>
                    <DisplayWindow windowNumber={ screenNumber } />
                  </div>
              }
            </div>
            
{/* for pc and laptops */}
          <div className='largeDisplay'>
            <div className='hiDivStyle'>
              <WelcomeField />
            </div>
            <div className='picDivDivStyle'>
              <img src={profPic} alt='profilePic' className='profilePicStyle' />
            </div>
            <div className='dipalyDivStyle'>
              <DisplayWindow windowNumber={ windowNumber } />
            </div>
          </div>
      </div>
  )
}
