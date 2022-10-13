import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openClose, openMenuScreen } from '../Features/mobileSlice';
// import './HeaderStyle.css';
import '../Styles/NavStyle.css';

export default function Menus(props) {
  const dispatch = useDispatch();
  const mobile = useSelector((state) => state.mobile.isMobile);
  const openClosed = useSelector((state) => state.mobile.menuOpend);

    const sayHello = (e) => {
        props.add(e)
      };

    let topNav = [
      { val: 'About', id: 1 },
      { val: 'Skills', id: 2 },
      { val: 'Contact', id: 3 },
      { val: 'Projects', id: 4 },
      { val: 'Link', id: 5 },
    ];

    const userPress = (val) => {
      dispatch(openMenuScreen(val));
      dispatch(openClose());
    }
    
    const mobileDisplay = () => {
      return (
        <div className='mobileMenusDivStyle'>
          { topNav.map((cell) => {
            return (
              <div className='selectStyle' key={`id_${cell.id}`} onClick={ () => userPress(cell.id) }>
                { cell.val }
              </div>
            )
          })}
        </div>
      )
    };

    const pcDisplay = () => {
      return (
        <div className='MenusDivStyle'>
        { topNav.map((cell) => {
          return (
            <div key={`id_${cell.id}`} onMouseEnter={ () => sayHello(cell.id) }>
              { cell.val }
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