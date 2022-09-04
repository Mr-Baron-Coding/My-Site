import React from 'react';

export default function Menus(props) {
    const sayHello = (e) => {
        props.add(e)
      };

    let topNav = [
      { val: 'About', id: 1 },
      { val: 'Skills', id: 2 },
      { val: 'Contact', id: 3 },
      { val: 'My Work', id: 4 },
      { val: 'Link', id: 5 },
    ];
    
  return (
    <div className='MenusDivStyle'>
      { topNav.map((cell) => {
        return (
          <div onMouseEnter={ () => sayHello(cell.id) }>
            { cell.val }
          </div>
        )
      })}
    </div>
  )
}
