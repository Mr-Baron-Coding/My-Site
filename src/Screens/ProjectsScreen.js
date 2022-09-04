import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../Comp/Header';

export default function ProjectsScreen() {
  let location = useLocation();
  const [linkList, setLinkList] = useState([
    { id: 1, to: 'Sudoko', val: 'Sudoko' },
    { id: 2, to: 'XO', val: 'XO' },
    { id: 3, to: 'Calculator', val: 'Calculator' },
    { id: 4, to: '/', val: 'Back' },
  ]);
  
  const linkGen = () => {
    let arr = linkList.filter((cell) => cell.val !== location.pathname.slice(location.pathname.lastIndexOf('/') + 1));
    return (
      <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto', width: '30%' }}>
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
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '30%' }}><Header /></div>
      <div style={{ width: '70%' }}>
        <nav>
          { linkGen() }
        </nav>
        <Outlet />
      </div>
    </div>
    
  )
}
