import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { changeScreenSize } from './Comp/Features/mobileSlice.js';
import './App.css';

import Body from './Comp/Body';
import Nothing from './Screens/ErrorScreen.js';

import Sudoko from './Projects/Sudoko/MainSudoko.js';
import XO from './Projects/XO/MainXO.js';
import Calc from './Projects/Calcu/MainCalc.js';

import ProjectsScreen from './Screens/ProjectsScreen';

export default function App() {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width:1000px)');

  useEffect(() => {
    dispatch(changeScreenSize(matches));

  }, [matches, dispatch]);

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
    </div>
  )
};