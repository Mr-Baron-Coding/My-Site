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
    console.log('Screen ' + e);
    setWindowNumber(e);
  };

  const closeMenu = () => {
    if ( mobile && openClosed === true ) {
      dispatch(openClose(false));
    }
  };

  const iconDisplay = () => {
    return (
      !openClosed ? <CgMenu size={ 26 } /> : <CgCloseR size={ 26 } />
    )
  };

  return (
    <div style={{ height: '100%' }}>
      { openClosed && mobile ? <NavBar /> : null }

      <div className='bodyStyle' onClick={ () => closeMenu() }>
        <div className='topBorderStyles'></div> {/* corner top */}
        <div className='bottomBorderStyles'></div> {/* corner bottom */}
          <div className='headerStyle'>  {/* header */}
            <Header />      
          </div>
          <div className='menuDivStyle'> {/* navigation */}
            { !mobile ? <NavBar add={ (x) => addScreenLoad(x) } /> : <div onClick={ () => dispatch(openClose(!openClosed)) }>{ iconDisplay() }</div> }
{/* back home button */}
            { mobile && screenNumber !== 0 ? <AiOutlineHome size={ 26 } onClick={ () => dispatch(openMenuScreen(0)) } /> : null }

          </div>

{/* mobile switch bottom part view */}
            <div className='mobileSwitchTop'>
              { screenNumber === 0 
                ? 
                  <>
                    <div className='hiDivStyle'>
                      <WelcomeField />
                    </div>
                    <div className='picDivDivStyle'>
                      <img src={profPic} alt='profilePic' className='profilePicStyle' />
                    </div>
                  </>
                : mobile 
                  ? <div className='mobileSwitchBottom'>
                      <DisplayWindow windowNumber={ screenNumber } />
                    </div>
                  : <WelcomeField />
              }
            </div>
            
{/* for pc and laptops */}
          <div className='dipalyDivStyle'>
            <DisplayWindow windowNumber={ windowNumber } />
          </div>
      </div>
    </div>
  )
}
