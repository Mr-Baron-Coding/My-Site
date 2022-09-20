import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import Header from '../Comp/Header';
import './ScreensStyle.css';

export default function ProjectsScreen() {
  let location = useLocation();
  const mobile = useSelector((state) => state.mobile.isMobile);
  
  const linkList = [
    { id: 1, to: 'Sudoko', val: 'Sudoko' },
    { id: 2, to: 'XO', val: 'XO' },
    { id: 3, to: 'Calculator', val: 'Calculator' },
    { id: 4, to: '/', val: 'Back' }
  ];
  
  const linkGen = () => {
    let arr = linkList.filter((cell) => cell.val !== location.pathname.slice(location.pathname.lastIndexOf('/') + 1));
    return (
      <div className='linkHeaderStyle'>
        { arr.map((l) => {
          return (
            <Link 
              to={ l.to } 
              key={ `Link_${ l.id }` }
              style={{ padding: '0 5px 0 5px', margin: 'auto'}}
            >
              { l.val }
            </Link>
          )
        })}
      </div>
    )
  };

  return (
    <div className='windowStyle'>
      { !mobile ? <div style={{ width: '30%' }}><Header /></div> : null }   
      <div className='displayStyle'>
        <nav>
          { linkGen() }
        </nav>
        <Outlet />
      </div>
    </div>
    
  )
}
