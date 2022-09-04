import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Body from './Comp/Body';
import Nothing from './Screens/ErrorScreen.js';
import Sphere from './Comp/Sphere';

import Sudoko from './Projects/Sudoko/MainSudoko.js';
import XO from './Projects/XO/MainXO.js';
import Calc from './Projects/Calcu/MainCalc.js';

import './App.css';
import ProjectsScreen from './Screens/ProjectsScreen';

export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Body/> } />
        <Route path='projects' element={ <ProjectsScreen /> } >
          <Route path='Sudoko' element={ <Sudoko />}   />
          <Route path='XO' element={ <XO /> }  />
          <Route path='Calculator' element={ <Calc /> }  />
        </Route>
        <Route path='*' element={ <Nothing /> } />
      </Routes>
      {/* <Sphere add={ (x) => addSceenLoad(x) } /> */}
    </div>
  )
};