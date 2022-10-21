import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import './ScreensStyle.css';
import Header from '../Comp/BodyComp/Header';

import { AiOutlineCalculator, AiOutlineBorderlessTable } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import { GiTicTacToe } from "react-icons/gi";


export default function ProjectsScreen() {
  // let location = useLocation();
  const mobile = useSelector((state) => state.mobile.isMobile);
  
  const linkList = [
    { id: 1, to: 'Sudoko', val: 'Sudoko', pic: <AiOutlineBorderlessTable size={ 26 }/> },
    { id: 2, to: 'XO', val: 'XO', pic: <GiTicTacToe size={ 26 } /> },
    { id: 3, to: 'Calculator', val: 'Calculator', pic: <AiOutlineCalculator size={ 26 } /> },
    { id: 4, to: '/', val: 'Back', pic: <RiArrowGoBackLine size={ 26 } /> }
  ];
  
  const linkGen = () => {
    // let arr = linkList.filter((cell) => cell.val !== location.pathname.slice(location.pathname.lastIndexOf('/') + 1));
    return (
      <>
        { linkList.map((l) => {
          return (
            <Link 
            className='linky'
              to={ l.to } 
              key={ `Link_${ l.id }` }
            >
              <div className='linkStyle'>
                { l.pic }
              </div>
            </Link>
          )
        })}
      </>
    )
  };

  return (
    <div className='projectDisplayContainer'>
      { !mobile ? <div className='headerStyle'><Header /></div> : null }   
      <div className='projectDisplayWindow'>
        <Outlet />
      </div>

        <nav className='projectNavigation'>
          { linkGen() }
        </nav>
    </div>
    
  )
}
