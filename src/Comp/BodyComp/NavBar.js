import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openClose, openMenuScreen } from '../Features/mobileSlice';
import '../Styles/NavStyle.css';

export default function Menus(props) {
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile.isMobile);
  const openClosed = useSelector((state) => state.mobile.menuOpend);

    const [topNav, setTopNav] = useState([
      { val: 'About', id: 1, active: false },
      // { val: 'Skills', id: 2, active: false },
      { val: 'Contact', id: 3, active: false },
      { val: 'Projects', id: 4, active: false }
    ]);

    const userPress = (val) => {
      dispatch(openMenuScreen(val));
      dispatch(openClose());
    };
    
    const mobileDisplay = () => {
      return (
        <div className={`mobileMenusDivStyle ${ openClosed ? 'menuOpen' : null }`}>
          { topNav.map((cell) => {
            return (
              <div className={`selectStyle select_${cell.id}`} key={`id_${cell.id}`} onClick={ () => userPress(cell.id) }>
                { cell.val }
              </div>
            )
          })}
        </div>
      )
    };

    const sayHello = (e) => {
      props.add(e);
      let arr = topNav;
      arr.forEach((cell) => cell.active = false);
      arr[e-1].active = true;
      setTopNav(arr => [...arr])
    };

    const pcDisplay = () => {
      return (
        <div className='MenusDivStyle'>
        { topNav.map((cell) => {
          return (
            <div key={`id_${ cell.id }`} className={`navTab_${ cell.val } ${ cell.active }`} onMouseEnter={ () => sayHello(cell.id) }>
              { cell.val }
              <div className='underLine'></div>
            </div>
            
          )
        })}
      </div>
      )
    };
    
  return (
    mobile ? openClosed ? mobileDisplay() : null : pcDisplay()
  )
};