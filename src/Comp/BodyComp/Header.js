import React from 'react';
import '../Styles/MainStyle.css';
import { useDispatch } from 'react-redux';
import { openMenuScreen } from '../Features/mobileSlice';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>
        <div className='headerName' onClick={ () => dispatch(openMenuScreen(0)) }>Michael Baron</div>
        <div className='headerDiscription'>Frontend Developer</div>
    </>
  )
}
