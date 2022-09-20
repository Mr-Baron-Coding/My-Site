import React from 'react';
import './HeaderStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { openClose } from './Features/mobileSlice';
import { CgMenu, CgCloseR } from "react-icons/cg";
import Menus from './Menus.js';

export default function Header() {
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile.isMobile);
  const openClosed = useSelector((state) => state.mobile.menuOpend);

  const iconDisplay = () => {
    return (
      !openClosed ? <CgMenu size={ 26 } /> : <CgCloseR size={ 26 } />
    )
  }

  return (
    <div className='mainHeaderStyle'>
      { mobile 
        ? <div className='mobileNavStyle' onClick={ () => dispatch(openClose(!openClosed)) } >{ iconDisplay() }</div> 
        : null }
       {/* *mobile*  is displayed only on mobile devices */}
      { openClosed && mobile ?
          <div className='menuWindow'>
            <Menus />
          </div>
          : null
      }
        <div className='headerName'>Michael Baron</div>
        <div className='headerDiscription'>Frontend Programmer</div>
    </div>
  )
}
