import React, { useState } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { openClose } from './Features/mobileSlice.js'
import './BodyStyle.css';
import './RespoStyle.css';
import DisplayWindow from './DisplayWindow';
import WelcomeField from './WelcomeField';
import Menus from './Menus';

export default function Body() {
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile.isMobile);
  const screenNumber = useSelector((state) => state.mobile.screenNumber);
  const openClosed = useSelector((state) => state.mobile.menuOpend);

  const [windowNumber, setWindowNumber] = useState(0);

  const addSceenLoad = (e) => {
    console.log('Screen ' + e);
    setWindowNumber(e);
  };

  const closeMenu = () => {
    if ( mobile && openClosed === true ) {
      dispatch(openClose(false));
    }
  }

  const displayStyle  = { height: '60%', color: 'white', position: 'relative' };
  // const displayContentStyle = { color: 'white', height: '10%', border: '4px solid yellow' };

  return (
    <div className='mainRespoStyle' onClick={ () => closeMenu() } >
      <div className='headerRespoStyle'>
        <Header />      
      </div>
      { !mobile ?  
                  <div className='menusRespoStyle'>
                    <Menus add={ (x) => addSceenLoad(x) }/>
                  </div>
                : null
      }
      { !mobile 
          ? <div><WelcomeField /></div> 
          : screenNumber === 0 
            ? <div><WelcomeField /></div> 
            : <div style={ displayStyle }>
                <DisplayWindow windowNumber={ screenNumber } />
              </div> }
      {/* <div>
        <WelcomeField />
      </div> */}
      { !mobile ? 
                  <div>
                  <DisplayWindow windowNumber={ windowNumber } />      
                  </div>
                : null
      }
      {/* <div>
        <DisplayWindow windowNumber={ windowNumber } />      
      </div> */}
    </div>
  )
}
